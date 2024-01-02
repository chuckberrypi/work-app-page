goog.provide('work_app.schema');
work_app.schema.endpoint = (function work_app$schema$endpoint(name,opts,pred){
var base_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_map,opts], 0)),pred], null);
});
work_app.schema.map_id_check = (function work_app$schema$map_id_check(m){
return cljs.core.every_QMARK_((function (p__62337){
var vec__62338 = p__62337;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62338,(0),null);
var map__62341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62338,(1),null);
var map__62341__$1 = cljs.core.__destructure_map(map__62341);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62341__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,id);
}),m);
});
work_app.schema.schema_check_unique_names = (function work_app$schema$schema_check_unique_names(schema){
return true;
});
work_app.schema.enumerate = (function work_app$schema$enumerate(col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),col);
});
work_app.schema.stringify_path = (function work_app$schema$stringify_path(schema,path){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,p__62342){
var vec__62343 = p__62342;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62343,(1),null);
if((v instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,malli.core.properties.cljs$core$IFn$_invoke$arity$1(malli.util.get_in.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(i + (1))))));
} else {
return acc;

}
}
}),work_app.schema.enumerate(path));
});
work_app.schema.get_in_props = (function work_app$schema$get_in_props(schema,path){
var temp__5802__auto__ = malli.util.find.cljs$core$IFn$_invoke$arity$2(malli.util.get_in.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.butlast(path)),cljs.core.last(path));
if(cljs.core.truth_(temp__5802__auto__)){
var _QMARK_entry = temp__5802__auto__;
if(cljs.core.vector_QMARK_(_QMARK_entry)){
return cljs.core.second(_QMARK_entry);
} else {
return null;
}
} else {
return null;
}
});
work_app.schema.get_paths_with_endpoints = (function work_app$schema$get_paths_with_endpoints(schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__62347){
var map__62348 = p__62347;
var map__62348__$1 = cljs.core.__destructure_map(map__62348);
var entry_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62348__$1,new cljs.core.Keyword(null,"entry-props","entry-props",-1115555684));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62348__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry_props),path);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62346_SHARP_){
return new cljs.core.Keyword(null,"endpoint","endpoint",447890044).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"entry-props","entry-props",-1115555684).cljs$core$IFn$_invoke$arity$1(p1__62346_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"entry-props","entry-props",-1115555684),work_app.schema.get_in_props(schema,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s)));
}),malli.util.subschemas.cljs$core$IFn$_invoke$arity$1(schema))));
});
work_app.schema.time_schema = malli.core.schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"time-matters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"matter-id"], null),cljs.core.uuid_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"time-matter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-id"], null),cljs.core.uuid_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-order"], null),cljs.core.int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-group-map"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"group-id"], null),cljs.core.uuid_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"group-id"], null),cljs.core.uuid_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"group-order"], null),cljs.core.int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"group-tasks"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"task-id"], null),cljs.core.uuid_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpiont","endpiont",142796825),true,new cljs.core.Keyword(null,"name","name",1843675177),"task-id"], null),cljs.core.uuid_QMARK_], null),work_app.schema.endpoint("task-date",cljs.core.PersistentArrayMap.EMPTY,cljs.core.string_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"task-order"], null),cljs.core.int_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"task-description"], null),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"task-time"], null),cljs.core.int_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("task-slider-locked",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("task-already-focused",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("task-checked",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("group-selected-code",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.string_QMARK_),work_app.schema.endpoint("group-tiered-menu-ref",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.inst_QMARK_),work_app.schema.endpoint("group-dialog-visible",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("group-slider-locked",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("group-sliders-showing",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),work_app.schema.map_id_check], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("matter-last-active-task",cljs.core.PersistentArrayMap.EMPTY,cljs.core.uuid_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matter-name-edit","matter-name-edit",810070359),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-name-edit"], null),cljs.core.boolean_QMARK_], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),work_app.schema.map_id_check], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("time-selected-code-key-and-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),cljs.core.string_QMARK_,cljs.core.integer_QMARK_], null)),work_app.schema.endpoint("cm-dropdown-val",cljs.core.PersistentArrayMap.EMPTY,cljs.core.uuid_QMARK_),work_app.schema.endpoint("time-selected-date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.string_QMARK_)], null)], null)], null));
work_app.schema.matters_schema = malli.core.schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clients","clients",1436018090),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"clients"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"client-id"], null),cljs.core.uuid_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"client-id2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.uuid_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoing","endpoing",-1972302342),true,new cljs.core.Keyword(null,"name","name",1843675177),"client-name"], null),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoing","endpoing",-1972302342),true,new cljs.core.Keyword(null,"name","name",1843675177),"client-number"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),"[0-9]{6}"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoing","endpoing",-1972302342),true,new cljs.core.Keyword(null,"name","name",1843675177),"client-order"], null),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"client-matters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"matter-id"], null),cljs.core.uuid_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-id"], null),cljs.core.uuid_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-name"], null),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-number"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re","re",228676202),"[0-9]{6}"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters-edit-dialog-showing","matters-edit-dialog-showing",-1179583516),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matter-edit-dialog-showing"], null),cljs.core.boolean_QMARK_], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),work_app.schema.map_id_check], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),work_app.schema.map_id_check], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters-new-cm-dialog-showing","matters-new-cm-dialog-showing",941193606),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"matters-new-cm-dialog-showing"], null),cljs.core.boolean_QMARK_], null)], null)], null)], null));
work_app.schema.cal_schema = malli.core.schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cal-date","cal-date",1102571458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"cal-date"], null),cljs.core.inst_QMARK_], null)], null));
work_app.schema.app_schema = malli.core.schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"e-id"], null),cljs.core.integer_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("collapsed",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("slider-dialog-visible",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("slider-dialog-locked",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("draggable",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"t-id"], null),cljs.core.integer_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("task-debouncer",cljs.core.PersistentArrayMap.EMPTY,cljs.core.any_QMARK_),work_app.schema.endpoint("t-already-focused",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("t-checked",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.boolean_QMARK_),work_app.schema.endpoint("t-slider-locked",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.boolean_QMARK_),work_app.schema.endpoint("drag-over-position",cljs.core.PersistentArrayMap.EMPTY,cljs.core.float_QMARK_)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"m-id"], null),cljs.core.integer_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("matter-collapsed",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("matter-last-active-timer",cljs.core.PersistentArrayMap.EMPTY,cljs.core.integer_QMARK_)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"codes","codes",-760505543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"code-map"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"param-name","param-name",1477186051),"code-id"], null),cljs.core.integer_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("code-edit-mode",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("code-collapsed",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("code-slider-visible",cljs.core.PersistentArrayMap.EMPTY,cljs.core.any_QMARK_),work_app.schema.endpoint("code-sliders-locked",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),work_app.schema.endpoint("time-selected-code",cljs.core.PersistentArrayMap.EMPTY,cljs.core.integer_QMARK_),work_app.schema.endpoint("move-dialog-visible",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_),work_app.schema.endpoint("dragged-task",cljs.core.PersistentArrayMap.EMPTY,cljs.core.integer_QMARK_),work_app.schema.endpoint("active-timer-t-id",cljs.core.PersistentArrayMap.EMPTY,cljs.core.integer_QMARK_),work_app.schema.endpoint("active-timer-m-id",cljs.core.PersistentArrayMap.EMPTY,cljs.core.integer_QMARK_),work_app.schema.endpoint("sidebar-filter",cljs.core.PersistentArrayMap.EMPTY,cljs.core.string_QMARK_),work_app.schema.endpoint("edit-mode",cljs.core.PersistentArrayMap.EMPTY,cljs.core.boolean_QMARK_)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),work_app.schema.matters_schema], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cal","cal",1451495619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),work_app.schema.cal_schema], null),work_app.schema.endpoint("nrls",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.any_QMARK_], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),work_app.schema.time_schema], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-dialog-visible","db-dialog-visible",294780980),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"db-dialog-visible"], null),cljs.core.boolean_QMARK_], null),work_app.schema.endpoint("task-id-map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.uuid_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.uuid_QMARK_], null)], null)),work_app.schema.endpoint("matter-id-map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.uuid_QMARK_,cljs.core.uuid_QMARK_], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-id-map","group-id-map",-1331847841),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.uuid_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.uuid_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog-body","dialog-body",-1149850034),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"dialog-body"], null),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog-visible","dialog-visible",-855829135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"dialog-visible"], null),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog-confirm-event","dialog-confirm-event",873473535),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"dialog-confirm-event"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.any_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"elapsed"], null),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"toast"], null),cljs.core.inst_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ticker-tasks","ticker-tasks",388964709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"ticker-tasks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"active-timer"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interval","interval",1708495417),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),true,new cljs.core.Keyword(null,"name","name",1843675177),"timer-id"], null),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.any_QMARK_], null)], null)], null)], null)], null)], null)], null)], null));
work_app.schema.find_indexes = (function work_app$schema$find_indexes(pred,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__62349){
var vec__62350 = p__62349;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62350,(1),null);
return v;
}),work_app.schema.enumerate(cljs.core.map.cljs$core$IFn$_invoke$arity$2(pred,coll))));
});
work_app.schema.inject_path_properties = (function work_app$schema$inject_path_properties(schema,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__62354){
var vec__62355 = p__62354;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62355,(1),null);
if((v instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,v);
} else {
if((function (p1__62353_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),p1__62353_SHARP_);
})(v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,malli.core.properties.cljs$core$IFn$_invoke$arity$1(malli.util.get_in.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),i))));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,work_app.schema.enumerate(path));
});
work_app.schema.path_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__62358){
var vec__62359 = p__62358;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62359,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62362){
var vec__62363 = p__62362;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62363,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62363,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
var temp__5802__auto__ = new cljs.core.Keyword(null,"param-name","param-name",1477186051).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
return name;
} else {
return item;
}
}),v)], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62366){
var vec__62367 = p__62366;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62367,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,work_app.schema.inject_path_properties(work_app.schema.app_schema,v)], null);
}),work_app.schema.get_paths_with_endpoints(work_app.schema.app_schema))));
work_app.schema.path = (function work_app$schema$path(name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(work_app.schema.path_map,name);
});
var $_62484 = malli.util.subschemas.cljs$core$IFn$_invoke$arity$1(work_app.schema.app_schema);
var $_62485__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),$_62484);
cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.first(p));
}),$_62485__$1);
work_app.schema.replace_strings = (function work_app$schema$replace_strings(path,args){
if((args == null)){
return path;
} else {
var G__62376 = path;
var vec__62378 = G__62376;
var seq__62379 = cljs.core.seq(vec__62378);
var first__62380 = cljs.core.first(seq__62379);
var seq__62379__$1 = cljs.core.next(seq__62379);
var path_head = first__62380;
var path_rest = seq__62379__$1;
var p = vec__62378;
var G__62377 = args;
var vec__62381 = G__62377;
var seq__62382 = cljs.core.seq(vec__62381);
var first__62383 = cljs.core.first(seq__62382);
var seq__62382__$1 = cljs.core.next(seq__62382);
var args_head = first__62383;
var args_rest = seq__62382__$1;
var a = vec__62381;
var new$ = cljs.core.PersistentVector.EMPTY;
var G__62376__$1 = G__62376;
var G__62377__$1 = G__62377;
var new$__$1 = new$;
while(true){
var vec__62390 = G__62376__$1;
var seq__62391 = cljs.core.seq(vec__62390);
var first__62392 = cljs.core.first(seq__62391);
var seq__62391__$1 = cljs.core.next(seq__62391);
var path_head__$1 = first__62392;
var path_rest__$1 = seq__62391__$1;
var p__$1 = vec__62390;
var vec__62393 = G__62377__$1;
var seq__62394 = cljs.core.seq(vec__62393);
var first__62395 = cljs.core.first(seq__62394);
var seq__62394__$1 = cljs.core.next(seq__62394);
var args_head__$1 = first__62395;
var args_rest__$1 = seq__62394__$1;
var a__$1 = vec__62393;
var new$__$2 = new$__$1;
if((path_head__$1 == null)){
return new$__$2;
} else {
if(typeof path_head__$1 === 'string'){
var G__62494 = path_rest__$1;
var G__62495 = args_rest__$1;
var G__62496 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new$__$2,args_head__$1);
G__62376__$1 = G__62494;
G__62377__$1 = G__62495;
new$__$1 = G__62496;
continue;
} else {
var G__62497 = path_rest__$1;
var G__62498 = a__$1;
var G__62499 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new$__$2,path_head__$1);
G__62376__$1 = G__62497;
G__62377__$1 = G__62498;
new$__$1 = G__62499;
continue;
}
}
break;
}
}
});
work_app.schema.throw_mismatch = (function work_app$schema$throw_mismatch(name,arg_len,placeholder_len,place_holders){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),":: args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_len),") and place-holders (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder_len),") not same lenghth. Need to pass in: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(place_holders)].join('');
});
work_app.schema.schema_get = (function work_app$schema$schema_get(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62504 = arguments.length;
var i__5770__auto___62505 = (0);
while(true){
if((i__5770__auto___62505 < len__5769__auto___62504)){
args__5775__auto__.push((arguments[i__5770__auto___62505]));

var G__62507 = (i__5770__auto___62505 + (1));
i__5770__auto___62505 = G__62507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic = (function (db,name,args){
var p = work_app.schema.path(name);
var place_holders = cljs.core.filterv(cljs.core.string_QMARK_,p);
var arg_len = cljs.core.count(args);
var placeholder_len = cljs.core.count(place_holders);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arg_len,placeholder_len)){
return work_app.schema.throw_mismatch(name,arg_len,placeholder_len,place_holders);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,work_app.schema.replace_strings(p,args));
}
}));

(work_app.schema.schema_get.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(work_app.schema.schema_get.cljs$lang$applyTo = (function (seq62396){
var G__62397 = cljs.core.first(seq62396);
var seq62396__$1 = cljs.core.next(seq62396);
var G__62398 = cljs.core.first(seq62396__$1);
var seq62396__$2 = cljs.core.next(seq62396__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62397,G__62398,seq62396__$2);
}));

work_app.schema.schema_update = (function work_app$schema$schema_update(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62516 = arguments.length;
var i__5770__auto___62520 = (0);
while(true){
if((i__5770__auto___62520 < len__5769__auto___62516)){
args__5775__auto__.push((arguments[i__5770__auto___62520]));

var G__62521 = (i__5770__auto___62520 + (1));
i__5770__auto___62520 = G__62521;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic = (function (db,name,f,p__62403){
var map__62404 = p__62403;
var map__62404__$1 = cljs.core.__destructure_map(map__62404);
var fn_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62404__$1,new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192));
var sub_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62404__$1,new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866));
var p = work_app.schema.replace_strings(work_app.schema.path(name),sub_args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,db,p,f),fn_args);
}));

(work_app.schema.schema_update.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(work_app.schema.schema_update.cljs$lang$applyTo = (function (seq62399){
var G__62400 = cljs.core.first(seq62399);
var seq62399__$1 = cljs.core.next(seq62399);
var G__62401 = cljs.core.first(seq62399__$1);
var seq62399__$2 = cljs.core.next(seq62399__$1);
var G__62402 = cljs.core.first(seq62399__$2);
var seq62399__$3 = cljs.core.next(seq62399__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62400,G__62401,G__62402,seq62399__$3);
}));

work_app.schema.schema_assoc = (function work_app$schema$schema_assoc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62530 = arguments.length;
var i__5770__auto___62531 = (0);
while(true){
if((i__5770__auto___62531 < len__5769__auto___62530)){
args__5775__auto__.push((arguments[i__5770__auto___62531]));

var G__62532 = (i__5770__auto___62531 + (1));
i__5770__auto___62531 = G__62532;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic = (function (db,name,val,args){
var p = work_app.schema.replace_strings(work_app.schema.path(name),args);
return cljs.core.assoc_in(db,p,val);
}));

(work_app.schema.schema_assoc.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(work_app.schema.schema_assoc.cljs$lang$applyTo = (function (seq62405){
var G__62406 = cljs.core.first(seq62405);
var seq62405__$1 = cljs.core.next(seq62405);
var G__62407 = cljs.core.first(seq62405__$1);
var seq62405__$2 = cljs.core.next(seq62405__$1);
var G__62408 = cljs.core.first(seq62405__$2);
var seq62405__$3 = cljs.core.next(seq62405__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62406,G__62407,G__62408,seq62405__$3);
}));

work_app.schema.schema_assoc_map_of = (function work_app$schema$schema_assoc_map_of(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62541 = arguments.length;
var i__5770__auto___62542 = (0);
while(true){
if((i__5770__auto___62542 < len__5769__auto___62541)){
args__5775__auto__.push((arguments[i__5770__auto___62542]));

var G__62543 = (i__5770__auto___62542 + (1));
i__5770__auto___62542 = G__62543;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return work_app.schema.schema_assoc_map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(work_app.schema.schema_assoc_map_of.cljs$core$IFn$_invoke$arity$variadic = (function (db,name,k,val,p__62414){
var map__62415 = p__62414;
var map__62415__$1 = cljs.core.__destructure_map(map__62415);
var args = map__62415__$1;
var sub_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62415__$1,new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866));
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,name,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,val], null)], null),args], 0))], 0));
}));

(work_app.schema.schema_assoc_map_of.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(work_app.schema.schema_assoc_map_of.cljs$lang$applyTo = (function (seq62409){
var G__62410 = cljs.core.first(seq62409);
var seq62409__$1 = cljs.core.next(seq62409);
var G__62411 = cljs.core.first(seq62409__$1);
var seq62409__$2 = cljs.core.next(seq62409__$1);
var G__62412 = cljs.core.first(seq62409__$2);
var seq62409__$3 = cljs.core.next(seq62409__$2);
var G__62413 = cljs.core.first(seq62409__$3);
var seq62409__$4 = cljs.core.next(seq62409__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62410,G__62411,G__62412,G__62413,seq62409__$4);
}));

work_app.schema.schema_next_order = (function work_app$schema$schema_next_order(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62556 = arguments.length;
var i__5770__auto___62557 = (0);
while(true){
if((i__5770__auto___62557 < len__5769__auto___62556)){
args__5775__auto__.push((arguments[i__5770__auto___62557]));

var G__62559 = (i__5770__auto___62557 + (1));
i__5770__auto___62557 = G__62559;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return work_app.schema.schema_next_order.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(work_app.schema.schema_next_order.cljs$core$IFn$_invoke$arity$variadic = (function (db,name,path_args){
var p = work_app.schema.replace_strings(work_app.schema.path(name),path_args);
var or__5045__auto__ = (cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,p)) + (1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
}));

(work_app.schema.schema_next_order.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(work_app.schema.schema_next_order.cljs$lang$applyTo = (function (seq62416){
var G__62417 = cljs.core.first(seq62416);
var seq62416__$1 = cljs.core.next(seq62416);
var G__62418 = cljs.core.first(seq62416__$1);
var seq62416__$2 = cljs.core.next(seq62416__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62417,G__62418,seq62416__$2);
}));


//# sourceMappingURL=work_app.schema.js.map
