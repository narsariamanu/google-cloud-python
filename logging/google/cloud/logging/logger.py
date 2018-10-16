# Copyright 2016 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Define API Loggers."""
import collections

from google.protobuf.json_format import MessageToDict
from google.cloud._helpers import _datetime_to_rfc3339
from google.cloud.logging.resource import Resource


_GLOBAL_RESOURCE = Resource(type='global', labels={})


class Logger(object):
    """Loggers represent named targets for log entries.

    See
    https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.logs

    :type name: str
    :param name: the name of the logger

    :type client: :class:`google.cloud.logging.client.Client`
    :param client: A client which holds credentials and project configuration
                   for the logger (which requires a project).

    :type labels: dict
    :param labels: (optional) mapping of default labels for entries written
                   via this logger.
    """
    def __init__(self, name, client, labels=None):
        self.name = name
        self._client = client
        self.labels = labels

    @property
    def client(self):
        """Clent bound to the logger."""
        return self._client

    @property
    def project(self):
        """Project bound to the logger."""
        return self._client.project

    @property
    def full_name(self):
        """Fully-qualified name used in logging APIs"""
        return 'projects/%s/logs/%s' % (self.project, self.name)

    @property
    def path(self):
        """URI path for use in logging APIs"""
        return '/%s' % (self.full_name,)

    def _require_client(self, client):
        """Check client or verify over-ride.

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current logger.

        :rtype: :class:`google.cloud.logging.client.Client`
        :returns: The client passed in or the currently bound client.
        """
        if client is None:
            client = self._client
        return client

    def batch(self, client=None):
        """Return a batch to use as a context manager.

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current topic.

        :rtype: :class:`Batch`
        :returns: A batch to use as a context manager.
        """
        client = self._require_client(client)
        return Batch(self, client)

    def _make_entry_resource(
        self,
        text=None,
        info=None,
        message=None,
        labels=None,
        insert_id=None,
        severity=None,
        http_request=None,
        timestamp=None,
        resource=_GLOBAL_RESOURCE,
        trace=None,
        span_id=None,
        trace_sampled=None,
    ):
        """Return a log entry resource of the appropriate type.

        Helper for :meth:`log_text`, :meth:`log_struct`, and :meth:`log_proto`.

        Only one of ``text``, ``info``, or ``message`` should be passed.

        :type text: str
        :param text: (Optional) text payload

        :type info: dict
        :param info: (Optional) struct payload

        :type message: :class:`~google.protobuf.message.Message`
        :param message: (Optional) The protobuf payload to log.

        :type labels: dict
        :param labels: (Optional) labels passed in to calling method.

        :type insert_id: str
        :param insert_id: (Optional) unique ID for log entry.

        :type severity: str
        :param severity: (Optional) severity of event being logged.

        :type http_request: dict
        :param http_request: (Optional) info about HTTP request associated with
                             the entry

        :type timestamp: :class:`datetime.datetime`
        :param timestamp: (Optional) timestamp of event being logged.

        :type resource: :class:`~google.cloud.logging.resource.Resource`
        :param resource: (Optional) Monitored resource of the entry

        :type trace: str
        :param trace: (optional) traceid to apply to the entry.

        :type span_id: str
        :param span_id: (optional) span_id within the trace for the log entry.
                        Specify the trace parameter if span_id is set.

        :type trace_sampled: bool
        :param trace_sampled: (optional) the sampling decision of the trace
                              associated with the log entry.

        :rtype: dict
        :returns: The JSON resource created.
        """
        entry = {
            'logName': self.full_name,
            'resource': resource._to_dict(),
        }

        if text is not None:
            entry['textPayload'] = text

        if info is not None:
            entry['jsonPayload'] = info

        if message is not None:
            # NOTE: If ``message`` contains an ``Any`` field with an
            #       unknown type, this will fail with a ``TypeError``.
            #       However, since ``message`` will be provided by a user,
            #       the assumption is that any types needed for the
            #       protobuf->JSON conversion will be known from already
            #       imported ``pb2`` modules.
            entry['protoPayload'] = MessageToDict(message)

        if labels is None:
            labels = self.labels

        if labels is not None:
            entry['labels'] = labels

        if insert_id is not None:
            entry['insertId'] = insert_id

        if severity is not None:
            entry['severity'] = severity

        if http_request is not None:
            entry['httpRequest'] = http_request

        if timestamp is not None:
            entry['timestamp'] = _datetime_to_rfc3339(timestamp)

        if trace is not None:
            entry['trace'] = trace

        if span_id is not None:
            entry['spanId'] = span_id

        if trace_sampled is not None:
            entry['traceSampled'] = trace_sampled

        return entry

    def log_empty(
        self,
        client=None,
        labels=None,
        insert_id=None,
        severity=None,
        http_request=None,
        timestamp=None,
        resource=_GLOBAL_RESOURCE,
        trace=None,
        span_id=None,
        trace_sampled=None,
    ):
        """API call:  log an empty message via a POST request

        See
        https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current logger.

        :type labels: dict
        :param labels: (optional) mapping of labels for the entry.

        :type insert_id: str
        :param insert_id: (optional) unique ID for log entry.

        :type severity: str
        :param severity: (optional) severity of event being logged.

        :type http_request: dict
        :param http_request: (optional) info about HTTP request associated with
                             the entry

        :type timestamp: :class:`datetime.datetime`
        :param timestamp: (optional) timestamp of event being logged.

        :type resource: :class:`~google.cloud.logging.resource.Resource`
        :param resource: Monitored resource of the entry, defaults
                         to the global resource type.

        :type trace: str
        :param trace: (optional) traceid to apply to the entry.

        :type span_id: str
        :param span_id: (optional) span_id within the trace for the log entry.
                        Specify the trace parameter if span_id is set.

        :type trace_sampled: bool
        :param trace_sampled: (optional) the sampling decision of the trace
                              associated with the log entry.
        """
        client = self._require_client(client)
        entry_resource = self._make_entry_resource(
            labels=labels,
            insert_id=insert_id,
            severity=severity,
            http_request=http_request,
            timestamp=timestamp,
            resource=resource,
            trace=trace,
            span_id=span_id,
            trace_sampled=trace_sampled,
        )
        client.logging_api.write_entries([entry_resource])

    def log_text(
        self,
        text,
        client=None,
        labels=None,
        insert_id=None,
        severity=None,
        http_request=None,
        timestamp=None,
        resource=_GLOBAL_RESOURCE,
        trace=None,
        span_id=None,
        trace_sampled=None,
    ):
        """API call:  log a text message via a POST request

        See
        https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write

        :type text: str
        :param text: the log message.

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current logger.

        :type labels: dict
        :param labels: (optional) mapping of labels for the entry.

        :type insert_id: str
        :param insert_id: (optional) unique ID for log entry.

        :type severity: str
        :param severity: (optional) severity of event being logged.

        :type http_request: dict
        :param http_request: (optional) info about HTTP request associated with
                             the entry

        :type timestamp: :class:`datetime.datetime`
        :param timestamp: (optional) timestamp of event being logged.

        :type resource: :class:`~google.cloud.logging.resource.Resource`
        :param resource: Monitored resource of the entry, defaults
                         to the global resource type.

        :type trace: str
        :param trace: (optional) traceid to apply to the entry.

        :type span_id: str
        :param span_id: (optional) span_id within the trace for the log entry.
                        Specify the trace parameter if span_id is set.

        :type trace_sampled: bool
        :param trace_sampled: (optional) the sampling decision of the trace
                              associated with the log entry.
        """
        client = self._require_client(client)
        entry_resource = self._make_entry_resource(
            text=text,
            labels=labels,
            insert_id=insert_id,
            severity=severity,
            http_request=http_request,
            timestamp=timestamp,
            resource=resource,
            trace=trace,
            span_id=span_id,
            trace_sampled=trace_sampled,
        )
        client.logging_api.write_entries([entry_resource])

    def log_struct(
        self,
        info,
        client=None,
        labels=None,
        insert_id=None,
        severity=None,
        http_request=None,
        timestamp=None,
        resource=_GLOBAL_RESOURCE,
        trace=None,
        span_id=None,
        trace_sampled=None,
    ):
        """API call:  log a structured message via a POST request

        See
        https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write

        :type info: dict
        :param info: the log entry information

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current logger.

        :type labels: dict
        :param labels: (optional) mapping of labels for the entry.

        :type insert_id: str
        :param insert_id: (optional) unique ID for log entry.

        :type severity: str
        :param severity: (optional) severity of event being logged.

        :type http_request: dict
        :param http_request: (optional) info about HTTP request associated with
                             the entry.

        :type timestamp: :class:`datetime.datetime`
        :param timestamp: (optional) timestamp of event being logged.

        :type resource: :class:`~google.cloud.logging.resource.Resource`
        :param resource: Monitored resource of the entry, defaults
                         to the global resource type.

        :type trace: str
        :param trace: (optional) traceid to apply to the entry.

        :type span_id: str
        :param span_id: (optional) span_id within the trace for the log entry.
                        Specify the trace parameter if span_id is set.

        :type trace_sampled: bool
        :param trace_sampled: (optional) the sampling decision of the trace
                              associated with the log entry.
        """
        client = self._require_client(client)
        entry_resource = self._make_entry_resource(
            info=info,
            labels=labels,
            insert_id=insert_id,
            severity=severity,
            http_request=http_request,
            timestamp=timestamp,
            resource=resource,
            trace=trace,
            span_id=span_id,
            trace_sampled=trace_sampled,
        )
        client.logging_api.write_entries([entry_resource])

    def log_proto(
        self,
        message,
        client=None,
        labels=None,
        insert_id=None,
        severity=None,
        http_request=None,
        timestamp=None,
        resource=_GLOBAL_RESOURCE,
        trace=None,
        span_id=None,
        trace_sampled=None,
    ):
        """API call:  log a protobuf message via a POST request

        See
        https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list

        :type message: :class:`~google.protobuf.message.Message`
        :param message: The protobuf message to be logged.

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current logger.

        :type labels: dict
        :param labels: (optional) mapping of labels for the entry.

        :type insert_id: str
        :param insert_id: (optional) unique ID for log entry.

        :type severity: str
        :param severity: (optional) severity of event being logged.

        :type http_request: dict
        :param http_request: (optional) info about HTTP request associated with
                             the entry.

        :type timestamp: :class:`datetime.datetime`
        :param timestamp: (optional) timestamp of event being logged.

        :type resource: :class:`~google.cloud.logging.resource.Resource`
        :param resource: Monitored resource of the entry, defaults
                         to the global resource type.

        :type trace: str
        :param trace: (optional) traceid to apply to the entry.

        :type span_id: str
        :param span_id: (optional) span_id within the trace for the log entry.
                        Specify the trace parameter if span_id is set.

        :type trace_sampled: bool
        :param trace_sampled: (optional) the sampling decision of the trace
                              associated with the log entry.
        """
        client = self._require_client(client)
        entry_resource = self._make_entry_resource(
            message=message,
            labels=labels,
            insert_id=insert_id,
            severity=severity,
            http_request=http_request,
            timestamp=timestamp,
            resource=resource,
            trace=trace,
            span_id=span_id,
            trace_sampled=trace_sampled,
        )
        client.logging_api.write_entries([entry_resource])

    def delete(self, client=None):
        """API call:  delete all entries in a logger via a DELETE request

        See
        https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.logs/delete

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current logger.
        """
        client = self._require_client(client)
        client.logging_api.logger_delete(self.project, self.name)

    def list_entries(self, projects=None, filter_=None, order_by=None,
                     page_size=None, page_token=None):
        """Return a page of log entries.

        See
        https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list

        :type projects: list of strings
        :param projects: project IDs to include. If not passed,
                            defaults to the project bound to the client.

        :type filter_: str
        :param filter_:
            a filter expression. See
            https://cloud.google.com/logging/docs/view/advanced_filters

        :type order_by: str
        :param order_by: One of :data:`~google.cloud.logging.ASCENDING`
                         or :data:`~google.cloud.logging.DESCENDING`.

        :type page_size: int
        :param page_size: maximum number of entries to return, If not passed,
                          defaults to a value set by the API.

        :type page_token: str
        :param page_token: opaque marker for the next "page" of entries. If not
                           passed, the API will return the first page of
                           entries.

        :rtype: :class:`~google.api_core.page_iterator.Iterator`
        :returns: Iterator of :class:`~google.cloud.logging.entries._BaseEntry`
                  accessible to the current logger.
        """
        log_filter = 'logName=%s' % (self.full_name,)
        if filter_ is not None:
            filter_ = '%s AND %s' % (filter_, log_filter)
        else:
            filter_ = log_filter
        return self.client.list_entries(
            projects=projects, filter_=filter_, order_by=order_by,
            page_size=page_size, page_token=page_token)


_BATCH_ENTRY_FIELDS = (  # (name, default)
    ('type_', None),
    ('payload', None),
    ('labels', None),
    ('insert_id', None),
    ('severity', None),
    ('http_request', None),
    ('timestamp', None),
    ('resource', _GLOBAL_RESOURCE),
    ('trace', None),
    ('span_id', None),
    ('trace_sampled', None),
)


class _BatchEntry(collections.namedtuple(
        '_BatchEntry', (field for field, _ in _BATCH_ENTRY_FIELDS))):
    def to_api_repr(self):
        """API repr (JSON format) for entry.
        """
        if self.type_ == 'text':
            info = {'textPayload': self.payload}
        elif self.type_ == 'struct':
            info = {'jsonPayload': self.payload}
        elif self.type_ == 'proto':
            # NOTE: If ``self`` contains an ``Any`` field with an
            #       unknown type, this will fail with a ``TypeError``.
            #       However, since ``self`` was provided by a user in
            #       ``Batch.log_proto``, the assumption is that any types
            #       needed for the protobuf->JSON conversion will be known
            #       from already imported ``pb2`` modules.
            info = {'protoPayload': MessageToDict(self.payload)}
        else:  # no payload
            info = {}
        if self.resource is not None:
            info['resource'] = self.resource._to_dict()
        if self.labels is not None:
            info['labels'] = self.labels
        if self.insert_id is not None:
            info['insertId'] = self.insert_id
        if self.severity is not None:
            info['severity'] = self.severity
        if self.http_request is not None:
            info['httpRequest'] = self.http_request
        if self.timestamp is not None:
            info['timestamp'] = _datetime_to_rfc3339(self.timestamp)
        if self.trace is not None:
            info['trace'] = self.trace
        if self.span_id is not None:
            info['spanId'] = self.span_id
        if self.trace_sampled is not None:
            info['traceSampled'] = self.trace_sampled
        return info


_BatchEntry.__new__.__defaults__ = tuple(
    default for _, default in _BATCH_ENTRY_FIELDS[1:])


_EmptyBatchEntry = _BatchEntry('empty')
_TextBatchEntry = _BatchEntry('text')
_StructBatchEntry = _BatchEntry('struct')
_ProtoBatchEntry = _BatchEntry('proto')


class Batch(object):
    """Context manager:  collect entries to log via a single API call.

    Helper returned by :meth:`Logger.batch`

    :type logger: :class:`google.cloud.logging.logger.Logger`
    :param logger: the logger to which entries will be logged.

    :type client: :class:`google.cloud.logging.client.Client`
    :param client: The client to use.

    :type resource: :class:`~google.cloud.logging.resource.Resource`
    :param resource: (Optional) Monitored resource of the batch, defaults
                     to None, which requires that every entry should have a
                     resource specified. Since the methods used to write
                     entries default the entry's resource to the global
                     resource type, this parameter is only required
                     if explicitly set to None. If no entries' resource are
                     set to None, this parameter will be ignored on the server.
    """
    def __init__(self, logger, client, resource=None):
        self.logger = logger
        self.entries = []
        self.client = client
        self.resource = resource

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is None:
            self.commit()

    def log_empty(self, **kw):
        """Add a entry without payload to be logged during :meth:`commit`.

        :type kw: dict
        :param kw: (optional) additional keyword arguments for the entry.
                   See :meth:`Logger.log_empty`.
        """
        self.entries.append(_EmptyBatchEntry._replace(**kw))

    def log_text(self, text, **kw):
        """Add a text entry to be logged during :meth:`commit`.

        :type text: str
        :param text: the text entry

        :type kw: dict
        :param kw: (optional) additional keyword arguments for the entry.
                   See :meth:`Logger.log_text`.
        """
        self.entries.append(_TextBatchEntry._replace(payload=text, **kw))

    def log_struct(self, info, **kw):
        """Add a struct entry to be logged during :meth:`commit`.

        :type info: dict
        :param info: the struct entry

        :type kw: dict
        :param kw: (optional) additional keyword arguments for the entry.
                   See :meth:`Logger.log_struct`.
        """
        self.entries.append(_StructBatchEntry._replace(payload=info, **kw))

    def log_proto(self, message, **kw):
        """Add a protobuf entry to be logged during :meth:`commit`.

        :type message: protobuf message
        :param message: the protobuf entry

        :type kw: dict
        :param kw: (optional) additional keyword arguments for the entry.
                   See :meth:`Logger.log_proto`.
        """
        self.entries.append(_ProtoBatchEntry._replace(payload=message, **kw))

    def commit(self, client=None):
        """Send saved log entries as a single API call.

        :type client: :class:`~google.cloud.logging.client.Client` or
                      ``NoneType``
        :param client: the client to use.  If not passed, falls back to the
                       ``client`` stored on the current batch.
        """
        if client is None:
            client = self.client

        kwargs = {
            'logger_name': self.logger.full_name,
        }

        if self.resource is not None:
            kwargs['resource'] = self.resource._to_dict()

        if self.logger.labels is not None:
            kwargs['labels'] = self.logger.labels

        entries = [entry.to_api_repr() for entry in self.entries]

        client.logging_api.write_entries(entries, **kwargs)
        del self.entries[:]
