Search.setIndex({envversion:46,filenames:["datastore-api","datastore-batches","datastore-dataset","datastore-entities","datastore-keys","datastore-queries","datastore-transactions","gcloud-api","index","pubsub-api","storage-acl","storage-api","storage-blobs","storage-buckets"],objects:{"gcloud.connection":{API_BASE_URL:[7,7,1,""],Connection:[7,5,1,""],JSONConnection:[7,5,1,""],get_scoped_connection:[7,3,1,""]},"gcloud.connection.Connection":{USER_AGENT:[7,1,1,""],credentials:[7,1,1,""],http:[7,1,1,""]},"gcloud.connection.JSONConnection":{API_BASE_URL:[7,1,1,""],API_URL_TEMPLATE:[7,1,1,""],API_VERSION:[7,1,1,""],api_request:[7,4,1,""],build_api_url:[7,6,1,""]},"gcloud.credentials":{generate_signed_url:[7,3,1,""],get_credentials:[7,3,1,""],get_for_service_account_json:[7,3,1,""],get_for_service_account_p12:[7,3,1,""]},"gcloud.datastore":{"__init__":[0,0,0,"-"],api:[0,0,0,"-"],batch:[1,0,0,"-"],connection:[0,0,0,"-"],dataset:[2,0,0,"-"],entity:[3,0,0,"-"],helpers:[0,0,0,"-"],key:[4,0,0,"-"],query:[5,0,0,"-"],transaction:[6,0,0,"-"]},"gcloud.datastore.__init__":{set_defaults:[0,3,1,""]},"gcloud.datastore.api":{"delete":[0,3,1,""],allocate_ids:[0,3,1,""],get:[0,3,1,""],put:[0,3,1,""]},"gcloud.datastore.batch":{Batch:[1,5,1,""]},"gcloud.datastore.batch.Batch":{"delete":[1,4,1,""],add_auto_id_entity:[1,4,1,""],begin:[1,4,1,""],commit:[1,4,1,""],connection:[1,1,1,""],current:[1,8,1,""],dataset_id:[1,1,1,""],mutation:[1,1,1,""],put:[1,4,1,""],rollback:[1,4,1,""]},"gcloud.datastore.connection":{Connection:[0,5,1,""]},"gcloud.datastore.connection.Connection":{API_URL_TEMPLATE:[0,1,1,""],API_VERSION:[0,1,1,""],allocate_ids:[0,4,1,""],begin_transaction:[0,4,1,""],build_api_url:[0,4,1,""],commit:[0,4,1,""],lookup:[0,4,1,""],rollback:[0,4,1,""],run_query:[0,4,1,""]},"gcloud.datastore.dataset":{Dataset:[2,5,1,""]},"gcloud.datastore.dataset.Dataset":{"delete":[2,4,1,""],batch:[2,4,1,""],get:[2,4,1,""],key:[2,4,1,""],put:[2,4,1,""],query:[2,4,1,""],transaction:[2,4,1,""]},"gcloud.datastore.entity":{Entity:[3,5,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[3,1,1,""],kind:[3,1,1,""]},"gcloud.datastore.helpers":{entity_from_protobuf:[0,3,1,""],key_from_protobuf:[0,3,1,""]},"gcloud.datastore.key":{Key:[4,5,1,""]},"gcloud.datastore.key.Key":{"__init__":[4,4,1,""],completed_key:[4,4,1,""],dataset_id:[4,1,1,""],flat_path:[4,1,1,""],id:[4,1,1,""],id_or_name:[4,1,1,""],is_partial:[4,1,1,""],kind:[4,1,1,""],name:[4,1,1,""],namespace:[4,1,1,""],parent:[4,1,1,""],path:[4,1,1,""],to_protobuf:[4,4,1,""]},"gcloud.datastore.query":{Iterator:[5,5,1,""],Query:[5,5,1,""]},"gcloud.datastore.query.Iterator":{next_page:[5,4,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[5,1,1,""],add_filter:[5,4,1,""],ancestor:[5,1,1,""],dataset_id:[5,1,1,""],fetch:[5,4,1,""],filters:[5,1,1,""],group_by:[5,1,1,""],keys_only:[5,4,1,""],kind:[5,1,1,""],namespace:[5,1,1,""],order:[5,1,1,""],projection:[5,1,1,""]},"gcloud.datastore.transaction":{Transaction:[6,5,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[6,4,1,""],commit:[6,4,1,""],current:[6,8,1,""],id:[6,1,1,""],rollback:[6,4,1,""]},"gcloud.exceptions":{BadRequest:[7,2,1,""],ClientError:[7,2,1,""],Conflict:[7,2,1,""],Forbidden:[7,2,1,""],GCloudError:[7,2,1,""],InternalServerError:[7,2,1,""],LengthRequired:[7,2,1,""],MethodNotAllowed:[7,2,1,""],MovedPermanently:[7,2,1,""],NotFound:[7,2,1,""],NotImplemented:[7,2,1,""],NotModified:[7,2,1,""],PreconditionFailed:[7,2,1,""],Redirection:[7,2,1,""],RequestRangeNotSatisfiable:[7,2,1,""],ResumeIncomplete:[7,2,1,""],ServerError:[7,2,1,""],ServiceUnavailable:[7,2,1,""],TemporaryRedirect:[7,2,1,""],TooManyRequests:[7,2,1,""],Unauthorized:[7,2,1,""],eklass:[7,1,1,""],make_exception:[7,3,1,""]},"gcloud.exceptions.BadRequest":{code:[7,1,1,""]},"gcloud.exceptions.Conflict":{code:[7,1,1,""]},"gcloud.exceptions.Forbidden":{code:[7,1,1,""]},"gcloud.exceptions.GCloudError":{code:[7,1,1,""],errors:[7,1,1,""]},"gcloud.exceptions.InternalServerError":{code:[7,1,1,""]},"gcloud.exceptions.LengthRequired":{code:[7,1,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[7,1,1,""]},"gcloud.exceptions.MovedPermanently":{code:[7,1,1,""]},"gcloud.exceptions.NotFound":{code:[7,1,1,""]},"gcloud.exceptions.NotImplemented":{code:[7,1,1,""]},"gcloud.exceptions.NotModified":{code:[7,1,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[7,1,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[7,1,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[7,1,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[7,1,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[7,1,1,""]},"gcloud.exceptions.TooManyRequests":{code:[7,1,1,""]},"gcloud.exceptions.Unauthorized":{code:[7,1,1,""]},"gcloud.storage":{"__init__":[11,0,0,"-"],acl:[10,0,0,"-"],blob:[12,0,0,"-"],bucket:[13,0,0,"-"],connection:[11,0,0,"-"],iterator:[11,0,0,"-"]},"gcloud.storage.__init__":{get_connection:[11,3,1,""],set_default_bucket:[11,3,1,""],set_default_connection:[11,3,1,""],set_defaults:[11,3,1,""]},"gcloud.storage.acl":{ACL:[10,5,1,""],BucketACL:[10,5,1,""],DefaultObjectACL:[10,5,1,""],ObjectACL:[10,5,1,""]},"gcloud.storage.acl.ACL":{add_entity:[10,4,1,""],all:[10,4,1,""],all_authenticated:[10,4,1,""],clear:[10,4,1,""],domain:[10,4,1,""],entity:[10,4,1,""],entity_from_dict:[10,4,1,""],get_entities:[10,4,1,""],get_entity:[10,4,1,""],group:[10,4,1,""],has_entity:[10,4,1,""],loaded:[10,1,1,""],reload:[10,4,1,""],reset:[10,4,1,""],save:[10,4,1,""],user:[10,4,1,""]},"gcloud.storage.acl.BucketACL":{clear:[10,4,1,""],reload:[10,4,1,""],save:[10,4,1,""]},"gcloud.storage.acl.ObjectACL":{clear:[10,4,1,""],reload:[10,4,1,""],save:[10,4,1,""]},"gcloud.storage.blob":{Blob:[12,5,1,""]},"gcloud.storage.blob.Blob":{"delete":[12,4,1,""],CHUNK_SIZE:[12,1,1,""],acl:[12,1,1,""],cache_control:[12,1,1,""],component_count:[12,1,1,""],connection:[12,1,1,""],content_disposition:[12,1,1,""],content_encoding:[12,1,1,""],content_language:[12,1,1,""],content_type:[12,1,1,""],crc32c:[12,1,1,""],download_as_string:[12,4,1,""],download_to_file:[12,4,1,""],download_to_filename:[12,4,1,""],etag:[12,1,1,""],exists:[12,4,1,""],generate_signed_url:[12,4,1,""],generation:[12,1,1,""],id:[12,1,1,""],make_public:[12,4,1,""],md5_hash:[12,1,1,""],media_link:[12,1,1,""],metadata:[12,1,1,""],metageneration:[12,1,1,""],owner:[12,1,1,""],path:[12,1,1,""],path_helper:[12,8,1,""],public_url:[12,1,1,""],rename:[12,4,1,""],self_link:[12,1,1,""],size:[12,1,1,""],storage_class:[12,1,1,""],time_deleted:[12,1,1,""],updated:[12,1,1,""],upload_from_file:[12,4,1,""],upload_from_filename:[12,4,1,""],upload_from_string:[12,4,1,""]},"gcloud.storage.bucket":{Bucket:[13,5,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[13,4,1,""],acl:[13,1,1,""],configure_website:[13,4,1,""],connection:[13,1,1,""],copy_blob:[13,4,1,""],cors:[13,1,1,""],create:[13,4,1,""],default_object_acl:[13,1,1,""],delete_blob:[13,4,1,""],delete_blobs:[13,4,1,""],disable_logging:[13,4,1,""],disable_website:[13,4,1,""],enable_logging:[13,4,1,""],etag:[13,1,1,""],exists:[13,4,1,""],get_all_blobs:[13,4,1,""],get_blob:[13,4,1,""],get_logging:[13,4,1,""],id:[13,1,1,""],iterator:[13,4,1,""],lifecycle_rules:[13,1,1,""],location:[13,1,1,""],make_public:[13,4,1,""],metageneration:[13,1,1,""],owner:[13,1,1,""],path:[13,1,1,""],path_helper:[13,8,1,""],project_number:[13,1,1,""],self_link:[13,1,1,""],storage_class:[13,1,1,""],time_created:[13,1,1,""],upload_file:[13,4,1,""],upload_file_object:[13,4,1,""],versioning_enabled:[13,1,1,""]},"gcloud.storage.connection":{Connection:[11,5,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[11,1,1,""],API_URL_TEMPLATE:[11,1,1,""],API_VERSION:[11,1,1,""]},"gcloud.storage.iterator":{Iterator:[11,5,1,""]},"gcloud.storage.iterator.Iterator":{PAGE_TOKEN:[11,1,1,""],RESERVED_PARAMS:[11,1,1,""],get_items_from_response:[11,4,1,""],get_next_page_response:[11,4,1,""],get_query_params:[11,4,1,""],has_next_page:[11,4,1,""],reset:[11,4,1,""]},gcloud:{"__init__":[7,0,0,"-"],connection:[7,0,0,"-"],credentials:[7,0,0,"-"],exceptions:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","exception","Python exception"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","class","Python class"],"6":["py","classmethod","Python class method"],"7":["py","data","Python data"],"8":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:exception","3":"py:function","4":"py:method","5":"py:class","6":"py:classmethod","7":"py:data","8":"py:staticmethod"},terms:{"3xx":7,"4xx":7,"5xx":7,"__exit__":9,"__init__":[0,4,7,11],"__key__":5,"_aclent":10,"_blobiter":13,"_datastore_v1_pb2":[0,1,4],"_dra_bucket":12,"_helper":[12,13],"_properti":11,"_propertymixin":[12,13],"_serviceaccountcredenti":7,"abstract":[1,5,6,7],"boolean":[0,4,5,7,10,11,12,13],"break":11,"byte":[1,3,5,12],"case":[1,3,11],"class":[0,1,2,3,4,5,6,7,10,11,12,13],"default":[0,1,5,6,7,9,10,11,12,13],"final":4,"float":5,"import":[0,1,5,6,8,9,10,11,13],"int":[7,12],"long":[7,12,13],"new":[0,4,7,9,10,11,12,13],"public":[12,13],"return":[0,1,3,4,5,6,7,10,11,12,13],"short":10,"static":[1,6,12,13],"true":[0,4,7,9,10,11,12,13],"while":11,abl:[7,8,10],about:[7,12,13],absenc:12,accept:[7,11],access:[7,10,11,12,13],accesslog:13,accident:13,account:[7,10],ack:9,ack_deadlin:9,act:3,actual:[0,3,10,11],add:[1,7,10,13],add_auto_id_ent:1,add_ent:10,add_filt:[0,5],addit:[7,11],address:10,advanc:[0,7],after:[3,10],again:3,against:[5,7],agent:7,akin:[0,3,11],alia:7,all:[0,3,4,10,11,12,13],all_authent:10,alloc:0,allocate_id:0,allocateid:0,allow:[0,3,7,8,12],allus:10,along:0,alread:1,alreadi:[1,6,9,10,13],also:[1,6,7,10,13],altern:10,amount:12,ancestor:5,ani:[0,1,3,7,10,12],anoth:[9,10],anyth:[10,13],api_access_endpoint:7,api_bas:0,api_base_url:[0,7,11],api_request:7,api_url_templ:[0,7,11],api_vers:[0,7,11],app:[7,10,11],app_credenti:[0,11],appar:13,appassertioncredenti:7,appendix:12,appengin:7,appli:[0,5],applic:[10,12],approv:13,apt:8,arbitrari:12,argument:[0,4,7,10,11],around:[7,12],ask:11,assembl:7,assert:6,assign:[1,3,5,6,13],associ:[4,7,13],attach:7,attempt:13,attr1:9,attr2:9,attr:9,attribut:[0,7,9,13],auth:7,authent:[0,7,10,11],author:7,authorized_us:7,automat:[1,3,6],avail:[6,12,13],back:[0,1,3,6,11,13],backend:[0,3,13],bad:7,badrequest:7,bamboo:[0,11],base:[0,1,2,3,4,5,6,7,10,11,12,13],base_url:0,basi:10,basic:[0,4,7],bcp47:12,bearer:7,becaus:6,been:[1,4,5,9,10,12],befor:12,beforehand:8,begin:[0,1,6,11,12],begin_transact:0,begintransact:0,begintransactionrespons:0,begun:6,belong:[0,10,12],between:[0,11],blank:[10,13],blob:[7,8,10,11],blob_nam:[12,13],blob_valu:[1,3],block:[1,6,9],bodi:7,both:0,breviti:10,bucket1:[10,11],bucket1_nam:10,bucket2:[10,11],bucket2_nam:10,bucket:[7,8,10,11,12],bucket_nam:[10,13],bucket_path:12,bucketacl:10,build:[0,1,6,7,10,11],build_api_url:[0,7],built:[1,3],builtin:3,bulk:[1,6],bunch:[0,10],bundl:0,cach:12,cache_control:12,call:[0,1,6,7,10,11,13],callabl:13,callback:13,can:[0,1,3,4,6,7,8,10,11,12,13],cannot:[0,7],capabl:[0,7],certain:12,chain:10,chang:[3,10],check:[7,9,10,13],checksum:12,child:4,chunk:12,chunk_siz:12,classmethod:7,clear:10,click:[0,11],client:[0,7],client_email:7,client_id:7,client_secret:7,clienterror:7,clientsecret:7,clone:8,close:7,code:[0,1,6,7,11],collect:1,com:[7,8,9,10,11,12,13],come:0,command:7,commit:[0,1,6],compani:10,compat:10,complet:[0,1,6,13],completed_kei:4,compon:[7,12],component_count:12,comput:[7,11],concept:[0,11,12,13],concret:7,condit:0,configur:[9,13],configure_websit:13,conflict:[7,13],connection_typ:7,consist:[0,4,10],consol:[0,7,11],constant:7,construct:[0,1,7,10,11],constructor:4,consum:11,contain:[0,7,10,11,13],content:[7,8,11,12],content_disposit:12,content_encod:12,content_languag:12,content_md5:7,content_typ:[7,12],context:[0,1,6,9],control:[5,10,12],conveni:[0,2,5],convert:[3,9,11],copi:[0,4,12,13],copy_blob:13,cor:13,correct:7,correspond:[1,4,7,10,12],costli:12,could:[3,12],cousin:7,cowardli:13,cowork:10,coworker1:10,coworker2:10,crc32c:12,creat:[0,1,3,4,5,6,7,9,10,11,12,13],create_bucket:11,credenti:0,crypto:8,current:[0,1,3,4,5,6,7,10,11,12,13],cursor:[0,5],custom:[7,10],data:[0,3,4,5,7,8,9,10,11,12,13],databas:[0,3,8],dataset:[0,1],dataset_id:[0,1,2,4,5,6],datastore_pb:0,datastoreservic:0,datetim:[5,7,12],deadlin:9,deal:0,decod:3,def:11,default_object_acl:13,defaultobjectacl:[10,13],defer:[0,2],defin:[7,11,12],delet:[0,1,2,3,6,9,11,12,13],delete_blob:[12,13],delimit:13,delimt:13,deliveri:13,demand:[12,13],demonstr:11,depend:12,deriv:[0,6,9],descend:5,describ:[7,13],destination_bucket:13,detail:[0,7,11,12,13],detect:7,determin:[11,12,13],dev:8,develop:[0,7,11,13],dict:[3,4,7,10,11,12,13],dictionari:[3,7,10,11,13],differ:7,directli:[0,7,11],directori:13,disabl:13,disable_log:13,disable_websit:13,discoveri:7,disk:11,disposit:12,do_some_work:[1,6],doc:[0,7,11,12,13],document:[7,12],doe:[0,1,4,13],doesn:[10,13],doesnt:13,domain:[10,13],don:[1,6,12,13],done:[1,7,10],download:[0,7,11,12],download_as_str:[11,12],download_to_fil:12,download_to_filenam:12,duplic:[3,12],dur:1,durabl:[12,13],durable_reduced_avail:[12,13],dure:[1,9],each:[3,7,10,13],earli:11,effect:[6,7,12],either:[0,1,4,6,7,10,11,12],eklass:7,element:[4,6],els:[6,13],elsewher:7,empti:[0,7,13],emul:13,enabl:[0,13],enable_log:13,encod:[3,12],end:3,end_cursor:5,endpoint:[7,9],engin:[7,11],enter:6,entir:3,entiti:[0,1,2],entity1:[1,6],entity2:[1,6],entity_dict:10,entity_from_dict:10,entity_from_protobuf:0,entity_typ:10,entitykind:[0,3,4],entri:[1,10],enviro:11,environ:[0,7,9,11],environmenterror:[0,13],equal:0,equival:[5,13],error:[1,6,7],establish:11,etag:[12,13],etc:[7,10],even:[4,10],eventu:0,everi:1,everyth:8,exampl:[0,1,5,6,9,10,11,13],except:[1,6],exclude_from_index:3,execut:[5,6],exist:[0,1,3,4,6,9,10,12,13],exit:[1,6],expect:[7,10],expect_json:7,expir:[7,12],explicit:9,explicitli:[0,1,6,7,9,11,12],express:5,extra:[3,4],extra_param:11,extrem:13,facilit:[0,11],factori:[0,2,7,10,11],fail:7,fall:[0,11,13],fals:[0,10,12,13],far:1,favor:0,fetch:[0,5,9],fetch_pag:0,few:7,fewer:11,field:[3,5,10],file:[0,7,8,11,12,13],file_obj:[12,13],filenam:[12,13],fill:0,filter:[5,13],find:[11,13],fine:5,first:[7,9,12,13],flag:[7,10],flat_path:4,follow:[1,6,7,10],foo:4,forbidden:7,forc:13,form:5,format:[7,12,13],found:[7,13],fresh:10,friendli:0,from:[0,1,3,4,5,6,7,8],frozenset:11,fstat:12,full:[4,10],fulli:8,futur:[0,11,13],gae:9,gce:[7,9],gcloud_bucket_nam:11,gcloud_tests_dataset_id:[0,11],gcloud_tests_project_id:[0,11],gclouderror:7,gener:[0,6,7,11,12],generate_signed_url:[7,12],get:[0,2,3,5,7],get_all_blob:[11,13],get_all_bucket:11,get_blob:[11,13],get_bucket:[8,10,11,13],get_connect:[7,10,11,13],get_credenti:7,get_ent:10,get_for_service_account_json:7,get_for_service_account_p12:7,get_items_from_respons:11,get_log:13,get_next_page_respons:11,get_query_param:11,get_scoped_connect:7,getter:[1,4,6,7,11,12,13],git:8,github:[0,8,11],give:12,given:[0,5,7,11,12,13],googl:[0,7,8,10,11,12,13],google_application_credenti:[0,7,11],googleapi:[7,11],googlecloudplatform:8,googlecredenti:7,grant:10,grant_:10,grant_own:10,grant_read:10,grant_writ:10,granular:10,group:[1,5,10],group_bi:5,guess:12,guess_typ:12,handl:[7,12,13],happen:[9,10],has_ent:10,has_next_pag:11,hash:[7,12],have:[0,4,6,7,8,9,10,11,12],header:[7,12],here:11,hierarchi:13,hood:[0,7,10],hook:9,host:13,howev:[0,1,3,6,7],html:[7,12,13],http:[0,7,9,11,12,13],httplib2:7,id_or_nam:4,ident:10,identifi:[0,4,10],idiomat:7,ietf:[12,13],imagin:10,immut:4,implement:[7,10,13],implicit:[4,5,7,11,12],implicitli:[0,7,11],includ:[0,5,11],incompat:0,incomplet:7,incomplete_kei:0,increas:10,index:[3,13],indic:[0,4,7],individu:[0,11,13],infer:[0,9,13],info:[12,13],inform:7,infrastructur:8,initi:[0,4,6],insert:[7,13],insert_auto_id:[1,6],insid:[1,6,13],instanc:[0,1,3,4,7],instanti:[7,11],instead:[7,10],integ:[0,4,5,12,13],intend:7,intern:[0,7],internalservererror:7,invalid:5,invok:2,is_parti:[4,6],is_valid:11,isn:13,isol:[0,6],item:11,iter:[5,10],itself:1,jame:5,jpg:13,json:[0,7,11],json_api:[7,12,13],json_credentials_path:7,jsonconnect:[7,11],just:[0,3,11,12,13],keep:1,kei:[0,1,2,3],key3:1,key_from_protobuf:0,key_pb:0,keys_onli:5,keyword:[0,4],kind:[0,3,4,5],kitten:13,klass:7,know:3,known:[7,10],kwarg:[2,4],lambda:13,languag:12,larg:12,last:4,latest:7,left:10,length:[4,7],lengthrequir:7,level:[0,5,7],libssl:8,lifecycl:[12,13],lifecycle_rul:13,like:[0,3,10,12,13],limit:[5,9],line:7,list:[0,1,4,5,7,9,10,11,13],list_subscript:9,list_top:9,live:[0,11,12],load:10,local:[10,11,13],locat:13,log:[12,13],logbucket:13,logobjectprefix:13,look:[0,11],lookup:[0,10],low:5,machin:[0,11],mai:[0,4,7],mail:[7,10],main:[0,11,13],main_page_suffix:13,make:[0,1,7,10,11,12,13],make_except:7,make_publ:[12,13],manag:[1,6,8],mani:7,manipul:10,manual:6,map:[0,1,5,7,12,13],match:[0,1,5],max_messag:9,max_result:13,maximum:13,md5:[7,12],md5_hash:12,mean:[3,6,7,12],media:12,media_link:12,messag:7,message_id1:9,message_id2:9,message_id:9,message_payload:9,metadata:[10,12],metagener:[12,13],method:[0,1,2,6,7,10,11,12,13],methodnotallow:7,might:3,mime:7,mimetyp:12,miss:[0,2],modifi:7,modify_push_configur:9,modul:[0,11],more:[0,5,11,13],more_result:[0,5],mount:11,move:7,movedperman:7,multipl:12,must:[7,12,13],mutabl:[3,10],mutat:[0,1,6],mutation_pb:0,mutationresult:0,mutuat:[1,6],my_item:11,my_other_acl:10,myitemclass:11,myiter:11,mykind:0,name:[0,3,4,5,7,8,9,11,12,13],namespac:[0,4,5],necessari:6,need:[0,1,7,11,13],new_nam:[12,13],newli:[12,13],next:11,next_pag:5,nextpagetoken:11,non:[0,7,8,9,10],none:[0,1,2,3,4,5,6,7,9,10,11,12,13],nonetyp:[4,7,12,13],not_found_pag:13,note:10,notfound:[7,12,13],notimpl:7,notimplementederror:10,notmodifi:7,now:10,num_id:0,num_retri:12,number:[0,9,12,13],oauth2:[0,7],oauth2client:[0,7],oauth2credenti:[0,7],object:[0,1,2,3,4,5,7,10,11],object_prefix:13,objectacl:10,obtain:0,occur:0,octet:12,odd:4,off:11,offici:3,offset:5,old:12,on_error:13,onc:[0,1,6,11,13],onli:[0,3,4,5,7,9,11,12,13],open:[12,13],openssl:8,oper:[1,5,6,12,13],operatiuon:1,option:[0,2,3,5,7,11,12,13],order:[0,1,5,7,10,11,13],org:[7,10,12,13],other:[3,7,10,11,12],other_arg:11,otherwis:13,our:[1,2,12,13],over:[0,1,5,7],overrid:11,overridden:[1,10,11],overriden:11,overwrit:12,own:10,owner:[10,12,13],p12:7,packag:0,page:[5,11,13],page_token:11,pagetoken:11,pair:10,param:0,paramet:[0,1,2,3,4,5,6,7,10,11,12,13],parent:[3,4],parent_kei:4,pars:[7,11],part:[0,1,5,10],partial:[0,1,3,4],particular:[0,7,10,11],particularli:12,pass:[0,2,4,5,7,12,13],path:[0,4,7,11,12,13],path_arg:[2,4],path_help:[12,13],pend:9,per:[10,12],period:12,perman:7,permiss:10,persist:3,person:[0,5,8],piec:7,pip:[0,8,11],pkcs12:7,plain:12,plan:7,platform:7,point:[7,10],pointer:[0,3,7,11],polici:[12,13],possibl:[3,11],post:7,preced:7,precompil:8,precondit:7,preconditionfail:7,prefix:13,prepend:5,present:9,prevent:13,primit:7,print:[10,11,13],privat:[0,7,11],private_kei:7,private_key_id:7,private_key_path:7,probabl:13,process:11,product:7,project:[0,5],project_id:[9,11],project_numb:13,propag:[12,13],proper:[7,11],properti:[0,1,3,5,12,13],property_nam:5,protobuf:[0,1,4,5],protocol:7,provid:[0,6,7,10,11,12,13],proxi:2,public_url:12,publicli:12,push:9,push_endpoint:9,put:[0,1,2,3,6,8,13],pycrypto:8,pyopenssl:8,python2:[1,3],python3:[1,3],python:[0,3,7,8,11,13],queri:[0,2],query_param:7,query_pb:0,quickli:[0,11,13],race:0,rais:[0,1,4,5,6,7,10,12,13],rang:7,rather:0,read:[0,10,11,12,13],readi:7,realli:13,recurs:13,redirect:7,reduc:[12,13],refer:[6,7,10],referenc:7,refresh:7,refresh_token:7,refus:13,registr:[0,11],regress:[0,11],regular:3,rel:[12,13],relat:[0,3,7,8,10,13],reli:[3,11],reload:10,remain:4,rememb:1,remot:[11,13],remov:[1,10],renam:12,replac:1,repositori:8,repres:[0,1,3,4,5,6,7,10,11,13],represent:4,request:[0,1,7,9,11,12,13],requestrangenotsatisfi:7,requir:[2,3,4,5,7,12],reserved_param:11,reset:[10,11],resourc:[7,11,12],respons:[7,11],rest:11,restrict:5,result:[0,5,11],resum:7,resumeincomplet:7,retri:12,retriev:[0,3,12,13],return_immedi:9,revok:10,revoke_:10,revoke_own:10,revoke_read:10,revoke_writ:10,rewind:12,rfc2616:[7,12,13],rfc4960:12,rfc6266:12,rfc7231:12,rfc7234:12,rfc:[12,13],role:[10,12,13],roll:[1,6],rollback:[0,1,6],root:[0,13],row:[0,3],rpc:0,rule:[10,13],run_queri:0,runqueri:0,runtim:13,sai:13,salli:5,same:[0,1,4,6,10,11,12,13],sampl:[0,11],satisfi:7,save:[0,1,3,6,10],schemaless:8,scope:[0,7,9],script:[0,11],search:[0,11],sec10:7,secret:7,section:[12,13],see:[0,7,11,12,13],seek:[7,12],self:11,self_link:[12,13],send:[0,1,7,10,13],sent:1,separ:13,sequenc:[3,5,13],serializ:0,serv:5,server:[0,1,7],servererror:7,servic:[3,7],service_account:7,serviceunavail:7,set:[0,1,3,4,5,6,7,9,10,11,12,13],set_default:[0,8,11],set_default_bucket:11,set_default_connect:[0,11],set_default_dataset_id:0,set_default_namespac:0,setup:8,sever:11,share:7,shell:[0,11],shift:[0,11],shortcut:[0,11,13],should:[0,7,11,12,13],shouldn:[0,7],side:6,sign:[7,10,12],signedjwtassertioncredenti:7,simpl:7,simpli:7,simplifi:11,singl:[0,1,3,5,7,9],size:12,skipped_result:0,slow:12,snapshot:0,snippet:[1,6],some:[0,7,11],someexcept:6,somehow:13,someth:13,sort:5,sourc:[0,1,2,3,4,5,6,7,8,10,11,12,13],special:10,specif:[7,10,12],specifi:5,specifyingloc:13,stack:6,standard:[7,12,13],start:0,start_cursor:5,state:[1,5],statement:[1,6],statu:[7,13],step:3,still:10,stop:0,storag:7,storage_class:[12,13],store:[1,3,5,7,8,10,12,13],str:[1,3,5],stream:12,string:[0,2,3,4,5,6,7,10,11,12,13],string_valu:1,strong:0,stuff:13,subclass:[3,7,10,11],submit:13,subscription_nam:9,sudo:8,superflu:7,suppli:5,support:[7,11],suppress:13,sure:1,system:13,take:[3,5,13],talk:7,techniqu:13,templat:[0,7,11],temporari:7,temporarili:12,temporaryredirect:7,test:[0,7,8,11],text:[1,3,7,12,13],text_valu:3,than:[0,13],thei:[7,10],them:[0,1],thi:[0,1,3,5,6,7,8,9,10,11,12,13],thing:[6,11],those:[1,6,11,12],through:[5,11],time:[6,12],time_cr:13,time_delet:12,timedelta:[7,12],timestamp:[12,13],to_protobuf:[0,4],togeth:10,token:7,too:7,tool:[7,12,13],toomanyrequest:7,topic_nam:9,topmost:[1,6],track:1,transact:[0,1,2],transaction_id:0,transat:0,transport:7,tripl:0,troubl:8,tupl:[0,3,4,5,7,10],two:[1,6],txt:[7,8,11,13],type:[0,1,3,4,5,6,7,10,11,12,13],typic:[0,7,11,13],ubuntu:8,unauthor:7,unavail:7,under:[0,7,10],underli:12,understand:[0,7],unicod:[1,3],uniqu:[0,10,12],unless:[4,12],unmarshal:0,until:[6,7,12],updat:[1,7,12,13],upload:[12,13],upload_contents_from_str:8,upload_fil:[11,13],upload_file_object:13,upload_from_fil:12,upload_from_filenam:12,upload_from_str:[11,12],upon:[1,6],upsert:6,uri:[7,12,13],url:[0,7,11,12,13],use_json:7,user:[0,7,10,12],user_ag:7,usual:0,utf:[3,12],v1beta2:0,val:0,valid:12,valu:[0,1,3,5,7,10,11,12],value1:9,value2:9,valueerror:[0,1,4,5,6,13],variabl:[0,7,11],verb:[7,12],veri:12,version:[0,7,11,12,13],versioning_en:13,via:[0,11],virtual:10,wai:11,walk:11,want:[1,6,8,10,11,12,13],websit:13,well:[6,7,13],what:11,when:[0,1,3,6,7,10,12,13],whenev:12,where:[0,5,11],whether:[10,11,12,13],which:[0,1,3,5,7,10,11,12,13],who:10,whole:13,whose:[3,4],within:[6,12],without:[1,3,6,7,9,10],won:[6,7,10],work:[1,10,11,13],world:0,would:[3,7],wouldn:0,wrapper:[2,7,12],write:[10,11,12],wrote:0,www:[7,11,13],xact:6,yield:11,you:[0,1,3,6,7,8,10,11,12,13],your:[0,8,11,13]},titles:["Datastore","Batches","Dataset","Entities","Keys","Queries","Transactions","GCloud Package","Getting started","<code class=\"docutils literal\"><span class=\"pre\">gcloud.pubsub</span></code> API","ACL","Storage","Blobs / Objects","Buckets"],titleterms:{"function":0,"try":[0,11],acl:10,api:[0,9],author:9,batch:1,blob:12,bucket:13,cloud:[0,8,11],connect:[0,7,9,11],credenti:7,dataset:2,datastor:[0,8],demo:[0,11],entiti:3,except:7,from:9,gcloud:[0,7,9,11],get:8,helper:0,instal:[0,11],interact:0,iter:11,kei:4,librari:[0,11],manag:9,messag:9,object:12,packag:7,project:9,publish:9,pubsub:9,pull:9,queri:5,run:[0,11],second:[0,11],start:8,storag:[8,11],subscript:9,topic:9,transact:6,yourself:[0,11]}})