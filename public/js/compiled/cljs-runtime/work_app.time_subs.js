goog.provide('work_app.time_subs');
goog.scope(function(){
  work_app.time_subs.goog$module$goog$object = goog.module.get('goog.object');
});
work_app.time_subs.secs__GT_tenths = (function work_app$time_subs$secs__GT_tenths(secs){
return (Math.ceil(((secs / (6)) / (60))) / (10));
});
work_app.time_subs.tenths__GT_secs = (function work_app$time_subs$tenths__GT_secs(tenths){
return Math.round((tenths * (3600)));
});
work_app.time_subs.secs__GT_tenths(work_app.time_subs.tenths__GT_secs(2.3));
work_app.time_subs.task__GT_tenths = (function work_app$time_subs$task__GT_tenths(task){
return work_app.time_subs.secs__GT_tenths(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(task));
});
work_app.time_subs.secs__GT_string = (function work_app$time_subs$secs__GT_string(secs){
var start = (((secs < ((60) * (60))))?(14):(11));
var end = (((secs < ((60) * (60))))?(5):(8));
var date = (new Date((secs * (1000))));
return date.toISOString().substr(start,end);
});
work_app.time_subs.float_to_tenth = (function work_app$time_subs$float_to_tenth(num){
return (Math.round((num * (10))) / (10));
});
work_app.time_subs.task_text = (function work_app$time_subs$task_text(task){
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("task","description","task/description",-1431594219).cljs$core$IFn$_invoke$arity$1(task)),". (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(work_app.time_subs.secs__GT_tenths(new cljs.core.Keyword("task","time","task/time",1407463183).cljs$core$IFn$_invoke$arity$1(task))),") "].join(''),/\.{2,}/,".");
});
work_app.time_subs.code_pull__GT_menu_opts = (function work_app$time_subs$code_pull__GT_menu_opts(p__33047){
var map__33048 = p__33047;
var map__33048__$1 = cljs.core.__destructure_map(map__33048);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33048__$1,new cljs.core.Keyword("code","key","code/key",-1519659910));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33048__$1,new cljs.core.Keyword("code","label","code/label",1716728861));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33048__$1,new cljs.core.Keyword("code","children","code/children",-945628113));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33048__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),id,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"label","label",1718410804),label], null);
if(((0) < cljs.core.count(children))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(work_app.time_subs.code_pull__GT_menu_opts,children));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"leaf","leaf",1306118732),true);
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","matter-active?","work-app.time-subs/matter-active?",-895143736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33058){
var vec__33059 = p__33058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33059,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33059,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(work_app.schema.schema_get(db,"active-timer-m-id"),m_id);
})], 0));
var G__33062_33329 = new cljs.core.Keyword("work-app.time-subs","active-timer-m-id","work-app.time-subs/active-timer-m-id",1293512169);
var G__33063_33330 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33064_33331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","timer-id","work-app.subs/timer-id",1375211715)], null);
var G__33065_33332 = (function (t_id,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id], null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33062_33329,G__33063_33330,G__33064_33331,G__33065_33332) : re_posh.core.reg_sub.call(null,G__33062_33329,G__33063_33330,G__33064_33331,G__33065_33332));
var G__33066_33333 = new cljs.core.Keyword("work-app.time-subs","c-id-by-m-id","work-app.time-subs/c-id-by-m-id",1208769468);
var G__33067_33334 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("client","matters","client/matters",-896248603),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__33066_33333,G__33067_33334) : re_posh.core.reg_query_sub.call(null,G__33066_33333,G__33067_33334));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","checked-on-date","work-app.time-subs/checked-on-date",1505814923),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","db","work-app.subs/db",732084971)], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-tasks-selected-date","work-app.time-subs/matter-tasks-selected-date",-1983624592)], null))], null);
}),(function (p__33069){
var vec__33070 = p__33069;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33070,(0),null);
var matter_task_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33070,(1),null);
return cljs.core.filterv((function (p1__33068_SHARP_){
return work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"t-checked",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__33068_SHARP_], 0));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,matter_task_ids));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","locked-unlocked-tids","work-app.time-subs/locked-unlocked-tids",-134177289),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33074){
var vec__33075 = p__33074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
return cljs.core.group_by((function (p1__33073_SHARP_){
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"t-slider-locked",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__33073_SHARP_], 0)))){
return true;
} else {
return false;
}
}),t_ids);
})], 0));
var G__33078_33335 = new cljs.core.Keyword("work-app.time-subs","matter-tasks-ds","work-app.time-subs/matter-tasks-ds",993993232);
var G__33079_33336 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33080_33337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","time-selected-date","work-app.subs/time-selected-date",1257549244)], null);
var G__33081_33338 = (function (date,p__33082){
var vec__33083 = p__33082;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_id,date], null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33078_33335,G__33079_33336,G__33080_33337,G__33081_33338) : re_posh.core.reg_sub.call(null,G__33078_33335,G__33079_33336,G__33080_33337,G__33081_33338));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","matter-time-tenths","work-app.time-subs/matter-time-tenths",-1004010779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33086){
var vec__33087 = p__33086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33087,(1),null);
var G__33090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-matter-total-time","work-app.time-subs/time-matter-total-time",868316818),m_id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33090) : re_posh.core.subscribe.call(null,G__33090));
}),(function (secs){
return work_app.time_subs.secs__GT_tenths(secs);
})], 0));
var G__33091_33339 = new cljs.core.Keyword("work-app.time-subs","pull-matter-tasks","work-app.time-subs/pull-matter-tasks",1369788901);
var G__33092_33340 = (function (p__33094){
var vec__33095 = p__33094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33095,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33095,(1),null);
var G__33098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-tasks-ds","work-app.time-subs/matter-tasks-ds",993993232),m_id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33098) : re_posh.core.subscribe.call(null,G__33098));
});
var G__33093_33341 = (function (t_ids){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","time","task/time",1407463183),new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,t_ids)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__33091_33339,G__33092_33340,G__33093_33341) : re_posh.core.reg_sub.call(null,G__33091_33339,G__33092_33340,G__33093_33341));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","tasks-string","work-app.time-subs/tasks-string",980473230),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33099){
var vec__33100 = p__33099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entities","work-app.subs/pull-entities",-1870530034),t_ids], null));
}),(function (tasks){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_app.time_subs.task_text,tasks));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","tasks-tenths","work-app.time-subs/tasks-tenths",1318390594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33103){
var vec__33104 = p__33103;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33104,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33104,(1),null);
var G__33107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entities","work-app.subs/pull-entities",-1870530034),t_ids], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33107) : re_posh.core.subscribe.call(null,G__33107));
}),(function (tasks){
return work_app.time_subs.float_to_tenth(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_app.time_subs.secs__GT_tenths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("task","time","task/time",1407463183),tasks))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","tasks-time","work-app.time-subs/tasks-time",841741295),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33108){
var vec__33109 = p__33108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33109,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33109,(1),null);
var G__33112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entities","work-app.subs/pull-entities",-1870530034),t_ids], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33112) : re_posh.core.subscribe.call(null,G__33112));
}),(function (tasks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("task","time","task/time",1407463183),tasks));
})], 0));
var G__33113_33344 = new cljs.core.Keyword("work-app.time-subs","task-time-ds","work-app.time-subs/task-time-ds",-847958534);
var G__33114_33345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","time","task/time",1407463183)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__33113_33344,G__33114_33345) : re_posh.core.reg_pull_sub.call(null,G__33113_33344,G__33114_33345));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","time-matter-total-time","work-app.time-subs/time-matter-total-time",868316818),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33115){
var vec__33116 = p__33115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33116,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33116,(1),null);
var G__33119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","pull-matter-tasks","work-app.time-subs/pull-matter-tasks",1369788901),m_id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33119) : re_posh.core.subscribe.call(null,G__33119));
}),(function (tasks){
return work_app.time_subs.float_to_tenth(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_app.time_subs.secs__GT_tenths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("task","time","task/time",1407463183),tasks))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","time-tenths","work-app.time-subs/time-tenths",-456068459),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33120){
var vec__33121 = p__33120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33121,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33121,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","task-time-ds","work-app.time-subs/task-time-ds",-847958534),t_id], null));
}),(function (p__33124){
var map__33125 = p__33124;
var map__33125__$1 = cljs.core.__destructure_map(map__33125);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33125__$1,new cljs.core.Keyword("task","time","task/time",1407463183));
return work_app.time_subs.secs__GT_tenths(time);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","time-string","work-app.time-subs/time-string",2110865332),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33126){
var vec__33127 = p__33126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33127,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33127,(1),null);
var G__33130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","task-time-ds","work-app.time-subs/task-time-ds",-847958534),t_id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33130) : re_posh.core.subscribe.call(null,G__33130));
}),(function (p__33131){
var map__33132 = p__33131;
var map__33132__$1 = cljs.core.__destructure_map(map__33132);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33132__$1,new cljs.core.Keyword("task","time","task/time",1407463183));
return work_app.time_subs.secs__GT_string(time);
})], 0));
var G__33133_33348 = new cljs.core.Keyword("work-app.time-subs","cm-number-str-query","work-app.time-subs/cm-number-str-query",72201689);
var G__33134_33349 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-num","?c-num",391717661,null),new cljs.core.Symbol(null,"?m-num","?m-num",-208142852,null),new cljs.core.Symbol(null,"?c-name","?c-name",-113752895,null),new cljs.core.Symbol(null,"?m-name","?m-name",1301536426,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","number","matter/number",-1659652091),new cljs.core.Symbol(null,"?m-num","?m-num",-208142852,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","matters","client/matters",-896248603),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","number","client/number",-1936785665),new cljs.core.Symbol(null,"?c-num","?c-num",391717661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","name","client/name",924271622),new cljs.core.Symbol(null,"?c-name","?c-name",-113752895,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","name","matter/name",643423984),new cljs.core.Symbol(null,"?m-name","?m-name",1301536426,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__33133_33348,G__33134_33349) : re_posh.core.reg_query_sub.call(null,G__33133_33348,G__33134_33349));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","cm-name-old","work-app.time-subs/cm-name-old",198531665),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33135){
var vec__33136 = p__33135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","cm-number-str-query","work-app.time-subs/cm-number-str-query",72201689),m_id], null));
}),(function (p__33139,_){
var vec__33140 = p__33139;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(1),null);
var c_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(2),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_name)].join('');
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","cm-name","work-app.time-subs/cm-name",-124291299),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33143){
var vec__33144 = p__33143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33144,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33144,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","cm-number-str-query","work-app.time-subs/cm-number-str-query",72201689),m_id], null));
}),(function (p__33147,_){
var vec__33151 = p__33147;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(1),null);
var c_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(2),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(3),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_name)].join('');
})], 0));
var G__33154_33350 = new cljs.core.Keyword("work-app.time-subs","task-codes-intermediate","work-app.time-subs/task-codes-intermediate",-636459199);
var G__33155_33351 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33156_33352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","time-selected-date","work-app.subs/time-selected-date",1257549244)], null);
var G__33157_33353 = (function (date,p__33158){
var vec__33159 = p__33158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33159,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33159,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_id,date], null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?o","?o",-1814741084,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?o","?o",-1814741084,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33154_33350,G__33155_33351,G__33156_33352,G__33157_33353) : re_posh.core.reg_sub.call(null,G__33154_33350,G__33155_33351,G__33156_33352,G__33157_33353));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","task-codes","work-app.time-subs/task-codes",-210921290),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33163){
var vec__33164 = p__33163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33164,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33164,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","task-codes-intermediate","work-app.time-subs/task-codes-intermediate",-636459199),((cljs.core.coll_QMARK_(m_id))?m_id:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_id], null))], null));
}),(function (codes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33171){
var vec__33172 = p__33171;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (l){
if(cljs.core.empty_QMARK_(l)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,v);
}
}));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__33162_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__33162_SHARP_,(2));
}),codes));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","tasks-by-code","work-app.time-subs/tasks-by-code",-1349429199),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33176){
var vec__33177 = p__33176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33177,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33177,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entities","work-app.subs/pull-entities",-1870530034),t_ids], null));
}),(function (tasks){
return cljs.core.group_by(new cljs.core.Keyword("task","code","task/code",-1647928303),tasks);
})], 0));
var G__33180_33356 = new cljs.core.Keyword("work-app.time-subs","selected-date-matters-codes-query","work-app.time-subs/selected-date-matters-codes-query",1057429918);
var G__33181_33357 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33182_33358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-tasks-selected-date","work-app.time-subs/matter-tasks-selected-date",-1983624592)], null);
var G__33183_33359 = (function (date){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [date], null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33180_33356,G__33181_33357,G__33182_33358,G__33183_33359) : re_posh.core.reg_sub.call(null,G__33180_33356,G__33181_33357,G__33182_33358,G__33183_33359));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","selected-date-matters-codes","work-app.time-subs/selected-date-matters-codes",-781673312),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","selected-date-matters-codes-query","work-app.time-subs/selected-date-matters-codes-query",1057429918)], null),(function (pairs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,v);
}),cljs.core.PersistentHashSet.EMPTY,pairs);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","expanded-map","work-app.time-subs/expanded-map",-815348655),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33185){
var vec__33186 = p__33185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33186,(0),null);
var codes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33186,(1),null);
return cljs.core.group_by((function (p1__33184_SHARP_){
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"collapsed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__33184_SHARP_], 0)))){
return new cljs.core.Keyword(null,"collapsed","collapsed",-628494523);
} else {
return new cljs.core.Keyword(null,"expanded","expanded",-3020742);
}
}),codes);
})], 0));
var G__33189_33361 = new cljs.core.Keyword("work-app.time-subs","c-by-m-id","work-app.time-subs/c-by-m-id",1639855647);
var G__33190_33362 = (function (_,m_id){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","c-id-by-m-id","work-app.time-subs/c-id-by-m-id",1208769468),m_id], null));
});
var G__33191_33363 = (function (t_id,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"id","id",-1388402092),t_id], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__33189_33361,G__33190_33362,G__33191_33363) : re_posh.core.reg_sub.call(null,G__33189_33361,G__33190_33362,G__33191_33363));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","timer-active?","work-app.time-subs/timer-active?",329501450),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33194){
var vec__33195 = p__33194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33195,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33195,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t_id,work_app.schema.schema_get(db,"timer-id"));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","default-next-task-timer","work-app.time-subs/default-next-task-timer",-1734515123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33198){
var vec__33199 = p__33198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33199,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","matter-last-active-timer","work-app.subs/matter-last-active-timer",-910615584),m_id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-last-added-task-on-date","work-app.time-subs/matter-last-added-task-on-date",1841713224),m_id], null))], null);
}),(function (p__33202,_){
var vec__33203 = p__33202;
var last_active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33203,(0),null);
var last_added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33203,(1),null);
var or__5045__auto__ = last_active;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return last_added;
}
})], 0));
var G__33206_33366 = new cljs.core.Keyword("work-app.time-subs","m-id-by-t-id","work-app.time-subs/m-id-by-t-id",-621914733);
var G__33207_33367 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__33206_33366,G__33207_33367) : re_posh.core.reg_query_sub.call(null,G__33206_33366,G__33207_33367));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","checked-tasks","work-app.time-subs/checked-tasks",-639759814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33209){
var vec__33210 = p__33209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33210,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33210,(1),null);
return cljs.core.filterv((function (p1__33208_SHARP_){
return work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"t-checked",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__33208_SHARP_], 0));
}),t_ids);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","matter-checked-tasks-ds","work-app.time-subs/matter-checked-tasks-ds",-2098680594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33214){
var vec__33215 = p__33214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","db","work-app.subs/db",732084971)], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33218) : re_posh.core.subscribe.call(null,G__33218));
})(),(function (){var G__33219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-tasks-ds","work-app.time-subs/matter-tasks-ds",993993232),m_id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33219) : re_posh.core.subscribe.call(null,G__33219));
})()], null);
}),(function (p__33220){
var vec__33221 = p__33220;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33221,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33221,(1),null);
return cljs.core.filterv((function (p1__33213_SHARP_){
return work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"t-checked",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__33213_SHARP_], 0));
}),t_ids);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","tasks-filter-checked","work-app.time-subs/tasks-filter-checked",-207106157),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33224){
var vec__33225 = p__33224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33225,(0),null);
var tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33225,(1),null);
return cljs.core.filterv((function (t){
return work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"t-checked",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0));
}),tasks);
})], 0));
var G__33230_33369 = new cljs.core.Keyword("work-app.time-subs","matters-by-time","work-app.time-subs/matters-by-time",227021792);
var G__33231_33370 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),cljs.core.list(new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__33230_33369,G__33231_33370) : re_posh.core.reg_query_sub.call(null,G__33230_33369,G__33231_33370));
var G__33232_33373 = new cljs.core.Keyword("work-app.time-subs","client-matter-ids","work-app.time-subs/client-matter-ids",51239822);
var G__33233_33374 = (function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword("client","matters","client/matters",-896248603),new cljs.core.Symbol(null,"?m","?m",896026745,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__33232_33373,G__33233_33374) : re_posh.core.reg_sub.call(null,G__33232_33373,G__33233_33374));
var G__33234_33376 = new cljs.core.Keyword("work-app.time-subs","client-matter-names","work-app.time-subs/client-matter-names",1085695759);
var G__33235_33377 = (function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","client-matter-ids","work-app.time-subs/client-matter-ids",51239822)], null));
});
var G__33236_33378 = (function (pairs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?c-name","?c-name",-113752895,null),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Symbol(null,"?m-name","?m-name",1301536426,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null)], null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","matters","client/matters",-896248603),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","name","client/name",924271622),new cljs.core.Symbol(null,"?c-name","?c-name",-113752895,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","name","matter/name",643423984),new cljs.core.Symbol(null,"?m-name","?m-name",1301536426,null)], null)], null),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pairs], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__33234_33376,G__33235_33377,G__33236_33378) : re_posh.core.reg_sub.call(null,G__33234_33376,G__33235_33377,G__33236_33378));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","client-matter-opts","work-app.time-subs/client-matter-opts",-1305920262),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","client-matter-names","work-app.time-subs/client-matter-names",1085695759)], null));
}),(function (name_id_pairs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__33239){
var vec__33241 = p__33239;
var c_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241,(1),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241,(2),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_name)].join(''),new cljs.core.Keyword(null,"value","value",305978217),m_id], null);
}),name_id_pairs);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","recent-matters-ids","work-app.time-subs/recent-matters-ids",1458805031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
var G__33245 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matters-by-time","work-app.time-subs/matters-by-time",227021792)], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33245) : re_posh.core.subscribe.call(null,G__33245));
}),(function (matter_times){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,matter_times))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","all-client-matter-nodes","work-app.time-subs/all-client-matter-nodes",-1543223913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","client-matter-names","work-app.time-subs/client-matter-names",1085695759)], null),(function (cm_names){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__33246){
var vec__33247 = p__33246;
var vec__33250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(0),null);
var c_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250,(0),null);
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250,(1),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33247,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),c_name,new cljs.core.Keyword(null,"selectable","selectable",370587038),false,new cljs.core.Keyword(null,"key","key",-1516042587),c_id,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,children)], null);
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33253){
var vec__33254 = p__33253;
var c_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33254,(0),null);
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33254,(1),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33254,(2),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33254,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_name,c_id], null),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),m_name,new cljs.core.Keyword(null,"data","data",-232669377),m_id,new cljs.core.Keyword(null,"key","key",-1516042587),m_id], null));
}));
}),cljs.core.PersistentArrayMap.EMPTY,cm_names));
})], 0));
var G__33258_33383 = new cljs.core.Keyword("work-app.time-subs","matter-code-ids","work-app.time-subs/matter-code-ids",-1473763803);
var G__33259_33384 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__33258_33383,G__33259_33384) : re_posh.core.reg_query_sub.call(null,G__33258_33383,G__33259_33384));
var G__33260_33385 = new cljs.core.Keyword("work-app.time-subs","matter-codes-pull","work-app.time-subs/matter-codes-pull",-904631706);
var G__33261_33386 = (function (p__33263){
var vec__33264 = p__33263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(1),null);
var G__33267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-code-ids","work-app.time-subs/matter-code-ids",-1473763803),m_id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__33267) : re_posh.core.subscribe.call(null,G__33267));
});
var G__33262_33387 = (function (c_ids){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,c_ids)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__33260_33385,G__33261_33386,G__33262_33387) : re_posh.core.reg_sub.call(null,G__33260_33385,G__33261_33386,G__33262_33387));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","matter-codes-opts","work-app.time-subs/matter-codes-opts",-1325904821),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33270){
var vec__33271 = p__33270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33271,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33271,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-codes-pull","work-app.time-subs/matter-codes-pull",-904631706),m_id], null));
}),(function (codes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(work_app.time_subs.code_pull__GT_menu_opts,codes);
})], 0));
var G__33274_33390 = new cljs.core.Keyword("work-app.time-subs","matter-code-keys","work-app.time-subs/matter-code-keys",-427558393);
var G__33275_33391 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("code","key","code/key",-1519659910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("code","children","code/children",-945628113),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__33274_33390,G__33275_33391) : re_posh.core.reg_pull_sub.call(null,G__33274_33390,G__33275_33391));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","default-key-and-code","work-app.time-subs/default-key-and-code",1039652816),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33276){
var vec__33277 = p__33276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33277,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33277,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","matter-code-menu-opts","work-app.matter-subs/matter-code-menu-opts",1660266215),m_id], null));
}),(function (code_opts){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(x)], null);
})(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leaf","leaf",1306118732),cljs.core.tree_seq(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,new cljs.core.Keyword(null,"leaf","leaf",1306118732)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(code_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))))));
})], 0));
work_app.time_subs.code_unpack = (function work_app$time_subs$code_unpack(p__33280){
var map__33281 = p__33280;
var map__33281__$1 = cljs.core.__destructure_map(map__33281);
var m = map__33281__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33281__$1,new cljs.core.Keyword("code","key","code/key",-1519659910));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33281__$1,new cljs.core.Keyword("code","children","code/children",-945628113));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33281__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,(work_app.time_subs.code_unpack.cljs$core$IFn$_invoke$arity$1 ? work_app.time_subs.code_unpack.cljs$core$IFn$_invoke$arity$1(v) : work_app.time_subs.code_unpack.call(null,v)));
}),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"key","key",-1516042587),key], null)]),children);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","matter-code-maps","work-app.time-subs/matter-code-maps",1228171872),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33283){
var vec__33284 = p__33283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33284,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33284,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-code-keys","work-app.time-subs/matter-code-keys",-427558393),m_id], null));
}),(function (ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33287){
var map__33288 = p__33287;
var map__33288__$1 = cljs.core.__destructure_map(map__33288);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33288__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ek","ek",1710621665),id], null),key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ke","ke",388998741),key], null),id);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_app.time_subs.code_unpack,new cljs.core.Keyword("matter","codes","matter/codes",371309178).cljs$core$IFn$_invoke$arity$1(ks))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","matter->task-selected-date","work-app.time-subs/matter->task-selected-date",-192750831),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-tasks-selected-date","work-app.time-subs/matter-tasks-selected-date",-1983624592)], null));
}),(function (matters_tasks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33290){
var vec__33291 = p__33290;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33291,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33291,(1),null);
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,m);
if(cljs.core.truth_(temp__5802__auto__)){
var existing = temp__5802__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,m,(function (p1__33289_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__33289_SHARP_,t);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,matters_tasks);
})], 0));
var G__33296_33393 = new cljs.core.Keyword("work-app.time-subs","matter-tasks-selected-date","work-app.time-subs/matter-tasks-selected-date",-1983624592);
var G__33297_33394 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33298_33395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","time-selected-date","work-app.subs/time-selected-date",1257549244)], null);
var G__33299_33396 = (function (date,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [date], null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33296_33393,G__33297_33394,G__33298_33395,G__33299_33396) : re_posh.core.reg_sub.call(null,G__33296_33393,G__33297_33394,G__33298_33395,G__33299_33396));
var G__33300_33397 = new cljs.core.Keyword("work-app.time-subs","matter-last-added-task-on-date-old","work-app.time-subs/matter-last-added-task-on-date-old",-835227884);
var G__33301_33398 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33302_33399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","time-selected-date","work-app.subs/time-selected-date",1257549244)], null);
var G__33303_33400 = (function (date,p__33304){
var vec__33305 = p__33304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33305,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33305,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_id,date], null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33300_33397,G__33301_33398,G__33302_33399,G__33303_33400) : re_posh.core.reg_sub.call(null,G__33300_33397,G__33301_33398,G__33302_33399,G__33303_33400));
var G__33308_33403 = new cljs.core.Keyword("work-app.time-subs","matter-last-added-task-on-date","work-app.time-subs/matter-last-added-task-on-date",1841713224);
var G__33309_33404 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__33310_33405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","time-selected-date","work-app.subs/time-selected-date",1257549244)], null);
var G__33311_33406 = (function (date,p__33312){
var vec__33313 = p__33312;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_id,date], null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__33308_33403,G__33309_33404,G__33310_33405,G__33311_33406) : re_posh.core.reg_sub.call(null,G__33308_33403,G__33309_33404,G__33310_33405,G__33311_33406));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","dragging?","work-app.time-subs/dragging?",-244001800),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","dragged-task","work-app.subs/dragged-task",-1833010780)], null),(function (dragged,p__33316){
var vec__33317 = p__33316;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33317,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33317,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t_id,dragged);
})], 0));
work_app.schema.schema_get(cljs.core.deref(re_frame.db.app_db),"active-timer-t-id");
work_app.schema.schema_get(cljs.core.deref(re_frame.db.app_db),"code-map");
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.time-subs","codes-in-edit-mode","work-app.time-subs/codes-in-edit-mode",896383755),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","code-map","work-app.subs/code-map",1699580498)], null));
}),(function (code_map,_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__33321){
var vec__33322 = p__33321;
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33322,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33322,(1),null);
return new cljs.core.Keyword(null,"code-edit-mode","code-edit-mode",1152985221).cljs$core$IFn$_invoke$arity$1(attrs);
}),code_map);
})], 0));

//# sourceMappingURL=work_app.time_subs.js.map
