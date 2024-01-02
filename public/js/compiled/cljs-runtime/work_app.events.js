goog.provide('work_app.events');
work_app.events._GT_evt = re_frame.core.dispatch;
work_app.events._GT_evt_sync = re_frame.core.dispatch_sync;
work_app.events.next_order = (function work_app$events$next_order(maps){
var r = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),maps)) + (1));
if(cljs.core.truth_(isNaN(r))){
return (1);
} else {
return r;
}
});
work_app.events.next_order_in = (function work_app$events$next_order_in(m,ks){

return work_app.events.next_order(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks)));
});
work_app.events.re_order_map = (function work_app$events$re_order_map(m){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__35318){
var vec__35319 = p__35318;
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"order","order",-1254677256),o));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals(m))));
});
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","toast-show","work-app.events/toast-show",1374275404),(function (p__35322){
var vec__35323 = p__35322;
var toast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323,(0),null);
var map__35326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35323,(1),null);
var map__35326__$1 = cljs.core.__destructure_map(map__35326);
var severity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35326__$1,new cljs.core.Keyword(null,"severity","severity",175684886));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35326__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35326__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return toast.show(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"severity","severity",175684886),(function (){var or__5045__auto__ = severity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "success";
}
})(),new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"detail","detail",-1545345025),detail], null)));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),(function (p__35327){
var vec__35328 = p__35327;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328,(0),null);
return navigator.clipboard.writeText(text);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","pprint-db","work-app.events/pprint-db",1647117547),(function (db){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),(function (entry){
return console.log(entry);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","focus","work-app.events/focus",818984009),(function (el){
return el.focus();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),(function (_,p__35331){
var vec__35332 = p__35331;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35332,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35332,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),item], null)], null)], null);
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917),(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"now","now",-1650525531),(new Date()));
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821),(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.random_uuid());
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","uuids","work-app.events/uuids",-134178648),(function (coeffects,num){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"uuids","uuids",1487183590),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num,cljs.core.random_uuid())));
}));
work_app.events.random_task = (function work_app$events$random_task(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("task","date","task/date",-1460731749),(new Date(((2023) - cljs.core.rand_int((4))),((11) - cljs.core.rand_int((11))),((28) - cljs.core.rand_int((28))))),new cljs.core.Keyword("task","description","task/description",-1431594219),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword("task","time","task/time",1407463183),(cljs.core.rand_int((82)) / (10))], null);
});
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","random-tasks","work-app.events/random-tasks",1819972132),(function (cofx,num){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"random-tasks","random-tasks",-915978142),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num,work_app.events.random_task()));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","db-pprint","work-app.events/db-pprint",-665827038),(function (p__35341,_){
var map__35342 = p__35341;
var map__35342__$1 = cljs.core.__destructure_map(map__35342);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35342__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","pprint-db","work-app.events/pprint-db",1647117547),db], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","tick","work-app.events/tick",1737052786),(function (p__35343,_){
var map__35344 = p__35343;
var map__35344__$1 = cljs.core.__destructure_map(map__35344);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35344__$1,new cljs.core.Keyword(null,"db","db",993250759));
var elapsed = work_app.schema.schema_get(db,"elapsed");
var ready_events = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__35345){
var map__35346 = p__35345;
var map__35346__$1 = cljs.core.__destructure_map(map__35346);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35346__$1,new cljs.core.Keyword(null,"event","event",301435442));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35347){
var map__35348 = p__35347;
var map__35348__$1 = cljs.core.__destructure_map(map__35348);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35348__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35348__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod((elapsed - offset),interval));
}),cljs.core.flatten(cljs.core.vals(work_app.schema.schema_get(db,"ticker-tasks")))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update(db,"elapsed",cljs.core.inc),new cljs.core.Keyword(null,"fx","fx",-1237829572),ready_events], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","start-ticker","work-app.events/start-ticker",-10949512),(function (p__35352,p__35353){
var map__35354 = p__35352;
var map__35354__$1 = cljs.core.__destructure_map(map__35354);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35355 = p__35353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35355,(0),null);
var name_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35355,(1),null);
var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35355,(2),null);
var interval_id = setInterval((function (){
var G__35358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","tick","work-app.events/tick",1737052786),interval], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__35358) : work_app.events._GT_evt.call(null,G__35358));
}));
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","enter-pressed","work-app.events/enter-pressed",-1296910468),(function (p__35359,p__35360){
var map__35361 = p__35359;
var map__35361__$1 = cljs.core.__destructure_map(map__35361);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35361__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35362 = p__35360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362,(1),null);
console.log("::enter-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__35368 = target_type;
switch (G__35368) {
case "task-text-input":
var matter_id = parseInt(e.target.attributes.matterid.nodeValue);
var task_id = parseInt(e.target.attributes.taskid.nodeValue);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354),task_id], null)], null)], null)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","enter-ctrl-pressed","work-app.events/enter-ctrl-pressed",2010496870),(function (p__35369,p__35370){
var map__35371 = p__35369;
var map__35371__$1 = cljs.core.__destructure_map(map__35371);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35372 = p__35370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(1),null);
console.log("::enter-ctrl-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__35375 = target_type;
switch (G__35375) {
case "task-text-input":
var matter_id = parseInt(e.target.attributes.matterid.nodeValue);
var task_id = parseInt(e.target.attributes.taskid.nodeValue);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354),task_id,new cljs.core.Keyword(null,"start?","start?",1440714206),true], null)], null)], null)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","enter-shift-pressed","work-app.events/enter-shift-pressed",-1786786921),(function (p__35379,p__35380){
var map__35381 = p__35379;
var map__35381__$1 = cljs.core.__destructure_map(map__35381);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35382 = p__35380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35382,(1),null);
console.log("::enter-shift-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__35385 = target_type;
switch (G__35385) {
case "task-text-input":
var matter_id = parseInt(e.target.attributes.matterid.nodeValue);
var task_id = parseInt(e.target.attributes.taskid.nodeValue);
var text = e.target.attributes.value.nodeValue;
var selection_start = e.target.selectionStart;
var selection_end = e.target.selectionEnd;
var point_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end);
var vec__35386 = ((point_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.split_at(selection_end,text)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var beg = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),selection_start));
var end = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,selection_end));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [beg,end], null));
})(),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,selection_start,selection_end)], null));
var keep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35386,(0),null);
var split = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35386,(1),null);
console.log(["selection-start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection_start)].join(''));

console.log(["selection-end: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection_end)].join(''));

console.log(["keep: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keep)].join(''));

console.log(["split: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(split)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","task-set-desc","work-app.time-events/task-set-desc",-583941228),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"desc","desc",2093485764),keep], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354),task_id,new cljs.core.Keyword(null,"description","description",-1428560544),split], null)], null)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35385)].join('')));

}
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","space-shift-pressed","work-app.events/space-shift-pressed",-800148811),(function (p__35395,p__35396){
var map__35397 = p__35395;
var map__35397__$1 = cljs.core.__destructure_map(map__35397);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35397__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35398 = p__35396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398,(1),null);
console.log("::space-shift-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__35401 = target_type;
switch (G__35401) {
case "task-text-input":
var matter_id = e.target.attributes.matterid.nodeValue;
var group_id = cljs.core.uuid(e.target.attributes.groupid.nodeValue);
var task_id = cljs.core.uuid(e.target.attributes.taskid.nodeValue);
e.preventDefault();

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),matter_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-toggle-task-timer","work-app.events/time-toggle-task-timer",244817524),matter_id,group_id,task_id], null)], null)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","key-press","work-app.events/key-press",-1858630462),(function (p__35402,p__35403){
var map__35404 = p__35402;
var map__35404__$1 = cljs.core.__destructure_map(map__35404);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35404__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35405 = p__35403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35405,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35405,(1),null);
var key = e.keyCode;
var ctrl = e.ctrlKey;
var alt = e.altKey;
var shift = e.shiftKey;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["::keyppress (key, ctrl, alt, shift): (",cljs.core.str.cljs$core$IFn$_invoke$arity$1([key,ctrl,alt,shift].join(", ")),")"].join('')], null)], null),(function (){var G__35412 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ctrl,alt,shift], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),false,false,false], null),G__35412)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","enter-pressed","work-app.events/enter-pressed",-1296910468),e], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),e], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),true,false,false], null),G__35412)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","enter-ctrl-pressed","work-app.events/enter-ctrl-pressed",2010496870),e], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),false,false,true], null),G__35412)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","enter-shift-pressed","work-app.events/enter-shift-pressed",-1786786921),e], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),false,false,true], null),G__35412)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","space-shift-pressed","work-app.events/space-shift-pressed",-800148811),e], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
}
})())], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","dialog-toggle","work-app.events/dialog-toggle",788448125),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"dialog-visible","dialog-visible",-855829135)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","dialog-confirm-then","work-app.events/dialog-confirm-then",735015961),(function (db,p__35416){
var vec__35417 = p__35416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35417,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35417,(1),null);
var next_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35417,(2),null);
return work_app.schema.schema_update(work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"dialog-body",message),"dialog-confirm-event",next_event),"dialog-visible",cljs.core.not);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","dialog-confirmed","work-app.events/dialog-confirmed",-1275411289),(function (p__35420,_){
var map__35421 = p__35420;
var map__35421__$1 = cljs.core.__destructure_map(map__35421);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),work_app.schema.schema_get(db,"dialog-confirm-event")], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-toggle-edit-dialog-showing","work-app.events/matters-toggle-edit-dialog-showing",1661565174),(function (p__35422,p__35423){
var map__35424 = p__35422;
var map__35424__$1 = cljs.core.__destructure_map(map__35424);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35424__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35425 = p__35423;
var seq__35426 = cljs.core.seq(vec__35425);
var first__35427 = cljs.core.first(seq__35426);
var seq__35426__$1 = cljs.core.next(seq__35426);
var _ = first__35427;
var vec__35428 = seq__35426__$1;
var map__35431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428,(0),null);
var map__35431__$1 = cljs.core.__destructure_map(map__35431);
var data = map__35431__$1;
var client_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,new cljs.core.Keyword(null,"client-name","client-name",1843891115));
var client_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,new cljs.core.Keyword(null,"client-num","client-num",-1900559089));
var matter_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,new cljs.core.Keyword(null,"matter-name","matter-name",-359115844));
var matter_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,new cljs.core.Keyword(null,"matter-num","matter-num",-1351918268));
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
console.log(["Data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''));

work_app.schema.path("matter-new-cm-dialog-showing");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"matter-new-cm-dialog-showing",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_num,matter_num], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-toggle-new-or-existing-cm","work-app.events/matters-toggle-new-or-existing-cm",-1782470261),(function (db,p__35432){
var vec__35433 = p__35432;
var seq__35434 = cljs.core.seq(vec__35433);
var first__35435 = cljs.core.first(seq__35434);
var seq__35434__$1 = cljs.core.next(seq__35434);
var _ = first__35435;
var vec__35436 = seq__35434__$1;
var map__35439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35436,(0),null);
var map__35439__$1 = cljs.core.__destructure_map(map__35439);
var c_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"c-num","c-num",1611632000));
var c_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"c-name","c-name",-1471300880));
var m_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"m-num","m-num",81000627));
var m_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"m-name","m-name",-1838368401));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"new-dialog-cm?","new-dialog-cm?",-971526197)], null),cljs.core.not);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-edit-matter","work-app.events/matters-edit-matter",53605894),(function (p__35440,p__35441){
var map__35442 = p__35440;
var map__35442__$1 = cljs.core.__destructure_map(map__35442);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35442__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35443 = p__35441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35443,(0),null);
var map__35446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35443,(1),null);
var map__35446__$1 = cljs.core.__destructure_map(map__35446);
var new$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var old = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35446__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var diffs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new$,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,k));
}),cljs.core.keys(new$));
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(diffs));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.events","new-client","work-app.events/new-client",1017512663),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821))], null),(function (p__35447,p__35448){
var map__35449 = p__35447;
var map__35449__$1 = cljs.core.__destructure_map(map__35449);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var vec__35450 = p__35448;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(0),null);
var map__35453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(1),null);
var map__35453__$1 = cljs.core.__destructure_map(map__35453);
var info = map__35453__$1;
var c_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35453__$1,new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Client");
var c_num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35453__$1,new cljs.core.Keyword(null,"c-num","c-num",1611632000),"111111");
var new_client = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"name","name",1843675177),c_name,new cljs.core.Keyword(null,"c-num","c-num",1611632000),c_num,new cljs.core.Keyword(null,"matters","matters",-108834512),cljs.core.PersistentVector.EMPTY], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"clients",new_client,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuid], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","new-client-ds","work-app.events/new-client-ds",-1528691438),c_name,c_num,uuid], null)], null)], null)], null);
}));
var G__35454_35885 = new cljs.core.Keyword("work-app.events","new-client-ds","work-app.events/new-client-ds",-1528691438);
var G__35455_35886 = (function (ds,p__35456){
var vec__35457 = p__35456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457,(1),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457,(2),null);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457,(3),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("client","id","client/id",441165449),client_id,new cljs.core.Keyword("client","name","client/name",924271622),name,new cljs.core.Keyword("client","number","client/number",-1936785665),number], null)], null);
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__35454_35885,G__35455_35886) : re_posh.core.reg_event_ds.call(null,G__35454_35885,G__35455_35886));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-delete-matter","work-app.events/matters-delete-matter",1722746536),(function (p__35460,p__35461){
var map__35462 = p__35460;
var map__35462__$1 = cljs.core.__destructure_map(map__35462);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35462__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35463 = p__35461;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463,(0),null);
var map__35466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463,(1),null);
var map__35466__$1 = cljs.core.__destructure_map(map__35466);
var args = map__35466__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35466__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35466__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
console.log(["client id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id),"\nmatter id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matter_id)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),((((1) < cljs.core.count(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"client-matters",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([client_id], 0)))))?work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"client-matters",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null),new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null)], null)], 0)):work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"clients",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null)], null)], 0))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-delete-matter-ds","work-app.events/matters-delete-matter-ds",772179376),args], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","ticker-set-timed-event","work-app.events/ticker-set-timed-event",-1815171530),(function (db,p__35467){
var vec__35468 = p__35467;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35468,(0),null);
var map__35471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35468,(1),null);
var map__35471__$1 = cljs.core.__destructure_map(map__35471);
var evt = map__35471__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"event","event",301435442));
var new_event = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(evt,new cljs.core.Keyword(null,"offset","offset",296498311),work_app.schema.schema_get(db,"elapsed"));
return work_app.schema.schema_assoc(db,"active-timer",new_event);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","ticker-clear-events","work-app.events/ticker-clear-events",768571950),(function (db,p__35472){
var vec__35473 = p__35472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473,(0),null);
return work_app.schema.schema_assoc(db,"ticker-tasks",cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","ticker-clear-event","work-app.events/ticker-clear-event",730420673),(function (db,p__35476){
var vec__35477 = p__35476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(0),null);
var ticker_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"ticker-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ticker_id], null)], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.events","initialize-db","work-app.events/initialize-db",1599662938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917))], null),(function (p__35480,_){
var map__35481 = p__35480;
var map__35481__$1 = cljs.core.__destructure_map(map__35481);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35481__$1,new cljs.core.Keyword(null,"db","db",993250759));
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35481__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"cal-date",now),"nrls",cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-default-codes","work-app.matter-events/add-default-codes",619856960)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-client-matter","work-app.matter-events/add-new-client-matter",204426496),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c-num","c-num",1611632000),"123456",new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Sven B\u00F8rgensson",new cljs.core.Keyword(null,"m-num","m-num",81000627),"654321",new cljs.core.Keyword(null,"m-name","m-name",-1838368401),"Recipe Trademark"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-client-matter","work-app.matter-events/add-new-client-matter",204426496),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c-num","c-num",1611632000),"122222",new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Mega Corp.",new cljs.core.Keyword(null,"m-num","m-num",81000627),"655555",new cljs.core.Keyword(null,"m-name","m-name",-1838368401),"Child 'Death' Litigation"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-client-matter","work-app.matter-events/add-new-client-matter",204426496),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c-num","c-num",1611632000),"888444",new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Abe's Lube Shop",new cljs.core.Keyword(null,"m-num","m-num",81000627),"434343",new cljs.core.Keyword(null,"m-name","m-name",-1838368401),"Slip and Fall Case"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","initialize-ds","work-app.events/initialize-ds",-1135461052)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-sidebar-filter","work-app.events/set-sidebar-filter",-654236613),(function (p__35482,p__35483){
var map__35484 = p__35482;
var map__35484__$1 = cljs.core.__destructure_map(map__35484);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35485 = p__35483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc(db,"sidebar-filter",v)], null);
}));
var G__35488_35898 = new cljs.core.Keyword("work-app.events","initialize-ds","work-app.events/initialize-ds",-1135461052);
var G__35489_35899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","random-tasks","work-app.events/random-tasks",1819972132),(5000)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","random-tasks","work-app.events/random-tasks",1819972132),(5000))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35490_35900 = (function (p__35491,_){
var map__35492 = p__35491;
var map__35492__$1 = cljs.core.__destructure_map(map__35492);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var random_tasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword(null,"random-tasks","random-tasks",-915978142));
return cljs.core.PersistentArrayMap.EMPTY;
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35488_35898,G__35489_35899,G__35490_35900) : re_posh.core.reg_event_fx.call(null,G__35488_35898,G__35489_35899,G__35490_35900));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-toast","work-app.events/set-toast",1818151911),(function (db,p__35493){
var vec__35494 = p__35493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(1),null);
return work_app.schema.schema_assoc(db,"toast",t);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","toast","work-app.events/toast",-1762477261),(function (p__35497,p__35498){
var map__35499 = p__35497;
var map__35499__$1 = cljs.core.__destructure_map(map__35499);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35499__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35500 = p__35498;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(0),null);
var toast_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toast-show","work-app.events/toast-show",1374275404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.schema.schema_get(db,"toast"),toast_map], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","cal-set-date","work-app.events/cal-set-date",1953858792),(function (db,p__35503){
var vec__35504 = p__35503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35504,(0),null);
var new_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35504,(1),null);
return work_app.schema.schema_assoc(db,"cal-date",new_date);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),(function (_,p__35507){
var vec__35508 = p__35507;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35508,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35508,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toast","work-app.events/toast",-1762477261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"detail","detail",-1545345025),"copied",new cljs.core.Keyword(null,"summary","summary",380847952),t], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","nrl-remove-all","work-app.events/nrl-remove-all",-18302133),(function (db,_){
return work_app.schema.schema_assoc(db,"nrls",cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","nrl-remove","work-app.events/nrl-remove",-98893484),(function (db,p__35511){
var vec__35512 = p__35511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35512,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35512,(1),null);
return work_app.schema.schema_update(db,"nrls",(function (nrls){
return cljs.core.filterv((function (nrl){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(nrl));
}),nrls);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","nrl-add","work-app.events/nrl-add",-1595075211),(function (db,p__35515){
var vec__35516 = p__35515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(0),null);
var nrl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(1),null);
return work_app.schema.schema_update(db,"nrls",(function (nrls){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nrls,nrl);
}));
}));
work_app.events.time_get_matter = (function work_app$events$time_get_matter(db,matter_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"matters","matters",-108834512),matter_id], null));
});
work_app.events.time_get_group = (function work_app$events$time_get_group(db,matter_id,group_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(work_app.events.time_get_matter(db,matter_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),group_id], null));
});
work_app.events.time_get_task = (function work_app$events$time_get_task(db,matter_id,group_id,task_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(work_app.events.time_get_group(db,matter_id,group_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id], null));
});
work_app.events.time_line__GT_task = (function work_app$events$time_line__GT_task(line){
var num_paren_re = /\(\d+\.?\d*\)/;
var time_re = /(?<=\()\d+\.?\d*(?=\))/;
var times = cljs.core.re_seq(time_re,line);
var total_time = (((60) * (60)) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,times)));
var description = (function (){var $ = line;
var $__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($,num_paren_re);
var $__$2 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",$__$1);
var $__$3 = clojure.string.replace($__$2,/\s+/," ");
return clojure.string.trim($__$3);
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not-yet-focused","not-yet-focused",-1793704582),false,new cljs.core.Keyword(null,"time","time",1385887882),total_time,new cljs.core.Keyword(null,"description","description",-1428560544),description], null);
});
work_app.events.move_keys_and_reorder = (function work_app$events$move_keys_and_reorder(m,from_path,to_path,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,p__35519){
var vec__35520 = p__35519;
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35520,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35520,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_path,v),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(from_path,v)),new cljs.core.Keyword(null,"order","order",-1254677256),o)),from_path,cljs.core.dissoc,v);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(work_app.events.next_order_in(m,to_path),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),keys));
});
work_app.events.m_id_by_t_id = (function work_app$events$m_id_by_t_id(ds,t_id){
var G__35523 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null);
var G__35524 = ds;
var G__35525 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35523,G__35524,G__35525) : datascript.core.q.call(null,G__35523,G__35524,G__35525));
});
var G__35526_35908 = new cljs.core.Keyword("work-app.events","move-tasks","work-app.events/move-tasks",-2118494196);
var G__35527_35909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35528_35910 = (function (p__35529,p__35530){
var map__35531 = p__35529;
var map__35531__$1 = cljs.core.__destructure_map(map__35531);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35531__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__35532 = p__35530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(0),null);
var map__35535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(1),null);
var map__35535__$1 = cljs.core.__destructure_map(map__35535);
var tids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535__$1,new cljs.core.Keyword(null,"tids","tids",-1783124481));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var m_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535__$1,new cljs.core.Keyword(null,"m-id","m-id",1795173264));
var matter_tasks = cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),work_app.events.m_id_by_t_id(ds,tid),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),tid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),tid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),tid,new cljs.core.Keyword("task","code","task/code",-1647928303),code], null)], null);
}),tids)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),matter_tasks,new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","t-task-toggle-check","work-app.time-events/t-task-toggle-check",231376808),t_id], null)], null);
}),tids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35526_35908,G__35527_35909,G__35528_35910) : re_posh.core.reg_event_fx.call(null,G__35526_35908,G__35527_35909,G__35528_35910));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","toggle-collapsed","work-app.events/toggle-collapsed",263531408),(function (db,p__35536){
var vec__35537 = p__35536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"collapsed",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-collapsed-all","work-app.events/set-collapsed-all",-915394143),(function (db,p__35540){
var vec__35541 = p__35540;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35541,(0),null);
var c_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35541,(1),null);
var expand_or_collapse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35541,(2),null);
console.log(["c-ids: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_ids)].join(''));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(acc,"collapsed",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expand_or_collapse,new cljs.core.Keyword(null,"collapse","collapse",-1218136136)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),db,c_ids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-matter-toggle-name-edit","work-app.events/time-matter-toggle-name-edit",2092332495),(function (db,p__35544){
var vec__35545 = p__35544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35545,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35545,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"matter-name-edit",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-matter","work-app.events/time-delete-matter",-203867831),(function (db,p__35548){
var vec__35549 = p__35548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"time-matters",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","group-set-code","work-app.events/group-set-code",395926374),(function (db,p__35552){
var vec__35553 = p__35552;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553,(2),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553,(3),null);
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"group-selected-code",code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-task-toggle-check","work-app.events/time-task-toggle-check",-1149460991),(function (db,p__35556){
var vec__35557 = p__35556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(3),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"task-checked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id,task_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-matter-selected-code-old","work-app.events/set-matter-selected-code-old",300621104),(function (db,p__35560){
var vec__35561 = p__35560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35561,(2),null);
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-selected-code",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0));
}));
work_app.events.code_unpack = (function work_app$events$code_unpack(p__35564){
var map__35565 = p__35564;
var map__35565__$1 = cljs.core.__destructure_map(map__35565);
var m = map__35565__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword("code","key","code/key",-1519659910));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword("code","children","code/children",-945628113));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,(work_app.events.code_unpack.cljs$core$IFn$_invoke$arity$1 ? work_app.events.code_unpack.cljs$core$IFn$_invoke$arity$1(v) : work_app.events.code_unpack.call(null,v)));
}),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"key","key",-1516042587),key], null)]),children);
});
work_app.events.matter_code_maps = (function work_app$events$matter_code_maps(ds,m_id){
var m = (function (){var G__35566 = ds;
var G__35567 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("code","key","code/key",-1519659910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("code","children","code/children",-945628113),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__35568 = m_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35566,G__35567,G__35568) : datascript.core.pull.call(null,G__35566,G__35567,G__35568));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__35569){
var map__35570 = p__35569;
var map__35570__$1 = cljs.core.__destructure_map(map__35570);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35570__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ek","ek",1710621665),id], null),key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ke","ke",388998741),key], null),id);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_app.events.code_unpack,new cljs.core.Keyword("matter","codes","matter/codes",371309178).cljs$core$IFn$_invoke$arity$1(m))));
});
var G__35571_35918 = new cljs.core.Keyword("work-app.events","set-matter-selected-code","work-app.events/set-matter-selected-code",-1003669201);
var G__35572_35919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35573_35920 = (function (p__35574,p__35575){
var map__35576 = p__35574;
var map__35576__$1 = cljs.core.__destructure_map(map__35576);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35577 = p__35575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35577,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35577,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35577,(2),null);
var map__35580 = work_app.events.matter_code_maps(ds,m_id);
var map__35580__$1 = cljs.core.__destructure_map(map__35580);
var ek = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35580__$1,new cljs.core.Keyword(null,"ek","ek",1710621665));
var ke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35580__$1,new cljs.core.Keyword(null,"ke","ke",388998741));
var code_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ke,k);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-selected-code",code_eid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0))], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35571_35918,G__35572_35919,G__35573_35920) : re_posh.core.reg_event_fx.call(null,G__35571_35918,G__35572_35919,G__35573_35920));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","gen-toggle-slider-dialog-visible","work-app.events/gen-toggle-slider-dialog-visible",1495620060),(function (db,p__35581){
var vec__35582 = p__35581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35582,(0),null);
var p_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35582,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"slider-dialog-visible",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","slider-dialog-toggle-lock","work-app.events/slider-dialog-toggle-lock",287995487),(function (db,p__35585){
var vec__35586 = p__35585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35586,(0),null);
var p_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35586,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"slider-dialog-locked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_id], null)], null)], 0));
}));
var G__35589_35926 = new cljs.core.Keyword("work-app.events","delete-tasks","work-app.events/delete-tasks",754826470);
var G__35590_35927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35591_35928 = (function (p__35592,p__35593){
var map__35594 = p__35592;
var map__35594__$1 = cljs.core.__destructure_map(map__35594);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35594__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35594__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35595 = p__35593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(0),null);
var map__35598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(1),null);
var map__35598__$1 = cljs.core.__destructure_map(map__35598);
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
var group_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var d = work_app.schema.schema_get(db,"time-selected-date");
var task_ids = (function (){var G__35599 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("matter","id","matter/id",-355841133),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null)], null);
var G__35600 = ds;
var G__35601 = matter_id;
var G__35602 = d;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__35599,G__35600,G__35601,G__35602) : datascript.core.q.call(null,G__35599,G__35600,G__35601,G__35602));
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),tid], null);
}),task_ids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35589_35926,G__35590_35927,G__35591_35928) : re_posh.core.reg_event_fx.call(null,G__35589_35926,G__35590_35927,G__35591_35928));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-matter-start-last-timer","work-app.events/time-matter-start-last-timer",-1592201096),(function (p__35603,p__35604){
var map__35605 = p__35603;
var map__35605__$1 = cljs.core.__destructure_map(map__35605);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35605__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35606 = p__35604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35606,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35606,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-start-timer","work-app.events/time-task-start-timer",257274648)], null),work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-task",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id], 0)))], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-task-start-timer","work-app.events/time-task-start-timer",257274648),(function (p__35609,p__35610){
var map__35611 = p__35609;
var map__35611__$1 = cljs.core.__destructure_map(map__35611);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35611__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35612 = p__35610;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35612,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35612,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35612,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35612,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-task",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id,task_id], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","ticker-set-timed-event","work-app.events/ticker-set-timed-event",-1815171530),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330),new cljs.core.Keyword(null,"interval","interval",1708495417),(1),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-tick","work-app.events/time-task-tick",-527991373),matter_id,group_id,task_id], null)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-toggle-task-timer","work-app.events/time-toggle-task-timer",244817524),(function (p__35615,p__35616){
var map__35617 = p__35615;
var map__35617__$1 = cljs.core.__destructure_map(map__35617);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35618 = p__35616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id,work_app.schema.schema_get(db,"active-timer-task-id")))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-stop-timer","work-app.events/time-task-stop-timer",816957465)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-start-timer","work-app.events/time-task-start-timer",257274648),matter_id,group_id,task_id], null))], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-toggle-dialog","work-app.events/time-group-toggle-dialog",-632846757),(function (db,p__35621){
var vec__35622 = p__35621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35622,(2),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-dialog-visible",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-group","work-app.events/time-delete-group",-1756649924),(function (db,p__35625){
var vec__35626 = p__35625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"matters","matters",-108834512),matter_id,new cljs.core.Keyword(null,"groups","groups",-136896102)], null),cljs.core.dissoc,group_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-task","work-app.events/time-delete-task",1162179194),(function (db,p__35629){
var vec__35630 = p__35629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(3),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_id], null)], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-set-task-time","work-app.events/time-set-task-time",-1295199340),(function (p__35633,p__35634){
var map__35635 = p__35633;
var map__35635__$1 = cljs.core.__destructure_map(map__35635);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35636 = p__35634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(3),null);
var time_secs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"task-time",Math.round(time_secs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id,task_id], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-set-task-time-ds","work-app.events/time-set-task-time-ds",-288831090),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t-id","t-id",647334507),task_id,new cljs.core.Keyword(null,"time","time",1385887882),time_secs], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-delete-checked-tasks","work-app.events/time-group-delete-checked-tasks",-1235791158),(function (p__35640,p__35641){
var map__35642 = p__35640;
var map__35642__$1 = cljs.core.__destructure_map(map__35642);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35642__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35643 = p__35641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(2),null);
var checked_tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",(function (p1__35639_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__35639_SHARP_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),checked_tasks));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),matter_id,group_id], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-checked-tasks-ds","work-app.events/time-delete-checked-tasks-ds",977655651),checked_tasks], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-set-tiered-menu","work-app.events/time-group-set-tiered-menu",1979859079),(function (db,p__35646){
var vec__35647 = p__35646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(2),null);
var menu_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(3),null);
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"group-id",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0)))){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"group-tiered-menu-ref",menu_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0));
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-focus-task-if-new","work-app.events/time-focus-task-if-new",399249538),(function (p__35650,p__35651){
var map__35652 = p__35650;
var map__35652__$1 = cljs.core.__destructure_map(map__35652);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35652__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35653 = p__35651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35653,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35653,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35653,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35653,(3),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35653,(4),null);
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"task-already-focused",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id,task_id], 0)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"task-already-focused",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id,task_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","focus","work-app.events/focus",818984009),el], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","focus-task-if-new","work-app.events/focus-task-if-new",1777666214),(function (p__35656,p__35657){
var map__35658 = p__35656;
var map__35658__$1 = cljs.core.__destructure_map(map__35658);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35658__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35659 = p__35657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659,(1),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659,(2),null);
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"t-already-focused",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_id], 0)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"t-already-focused",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","focus","work-app.events/focus",818984009),el], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),(function (p__35662,p__35663){
var map__35664 = p__35662;
var map__35664__$1 = cljs.core.__destructure_map(map__35664);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35664__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35665 = p__35663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35665,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0)))))?work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"matter-group-map",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_id], null),new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null)], null)], 0)):db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-move-tasks-to-new-group","work-app.events/time-move-tasks-to-new-group",59285684),(function (p__35668,p__35669){
var map__35670 = p__35668;
var map__35670__$1 = cljs.core.__destructure_map(map__35670);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35670__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35671 = p__35669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35671,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35671,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35671,(2),null);
var checked_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35671,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),checked_set)], null)], 0)),"group-tasks",work_app.events.re_order_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-add-group","work-app.events/time-add-group",1651711675),matter_id,checked_set], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),matter_id,group_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-move-tasks-to","work-app.events/time-move-tasks-to",-960294608),(function (p__35674,p__35675){
var map__35676 = p__35674;
var map__35676__$1 = cljs.core.__destructure_map(map__35676);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35676__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35677 = p__35675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35677,(0),null);
var checked_tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35677,(1),null);
var group_to_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35677,(2),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35677,(3),null);
var group_from_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35677,(4),null);
var checked = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return cljs.core.assoc_in(t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"task-checked","task-checked",1480874420)], null),false);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (o,t){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"order","order",-1254677256),o);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(work_app.schema.schema_next_order.cljs$core$IFn$_invoke$arity$variadic("matter-group-map",matter_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group_to_id], 0)),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),checked_tasks));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_from_id], null),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),checked)], null)], 0)),"group-tasks",work_app.events.re_order_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_from_id], null)], null)], 0)),"group-tasks",(function (task_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v),v);
}),task_map,checked);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_to_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),matter_id,group_from_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-toggle-slider","work-app.events/time-group-toggle-slider",-1153516595),(function (p__35680,p__35681){
var map__35682 = p__35680;
var map__35682__$1 = cljs.core.__destructure_map(map__35682);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35682__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35683 = p__35681;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35683,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35683,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35683,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-sliders-showing",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","code-slider-visible-toggle","work-app.events/code-slider-visible-toggle",99119913),(function (p__35686,p__35687){
var map__35688 = p__35686;
var map__35688__$1 = cljs.core.__destructure_map(map__35688);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35688__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35689 = p__35687;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35689,(0),null);
var code_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35689,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"code-slider-visible",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [code_id], null)], null)], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-slider-lock-toggle","work-app.events/time-group-slider-lock-toggle",1423047774),(function (p__35692,p__35693){
var map__35694 = p__35692;
var map__35694__$1 = cljs.core.__destructure_map(map__35694);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35694__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35695 = p__35693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35695,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35695,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35695,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-slider-locked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0))], null);
}));
var G__35698_35953 = new cljs.core.Keyword("work-app.events","time-task-slide-change-ds","work-app.events/time-task-slide-change-ds",-1750929867);
var G__35699_35954 = (function (p__35700,p__35701){
var map__35702 = p__35700;
var map__35702__$1 = cljs.core.__destructure_map(map__35702);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35702__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35703 = p__35701;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35703,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35703,(1),null);
var tenths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35703,(2),null);
var secs = Math.round(((3600) * tenths));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["Secs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secs)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-set-task-time-ds","work-app.events/time-set-task-time-ds",-288831090),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),t_id,new cljs.core.Keyword(null,"time","time",1385887882),secs], null)], null)], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__35698_35953,G__35699_35954) : re_posh.core.reg_event_fx.call(null,G__35698_35953,G__35699_35954));
work_app.events.get_all_group_map = (function work_app$events$get_all_group_map(db){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (matter_id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__35706){
var vec__35707 = p__35706;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35710){
var vec__35711 = p__35710;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"matter-id","matter-id",914791808),matter_id)], null);
}),work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"matter-group-map",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id], 0))));
}),cljs.core.keys(work_app.schema.schema_get(db,"time-matters"))));
});
work_app.events.get_all_task_map = (function work_app$events$get_all_task_map(db){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35714){
var map__35715 = p__35714;
var map__35715__$1 = cljs.core.__destructure_map(map__35715);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35715__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__35716){
var vec__35717 = p__35716;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35717,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35720){
var vec__35721 = p__35720;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35721,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"matter-id","matter-id",914791808),matter_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-id","group-id",-1316082778),id], 0))], null);
}),work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,id], 0))));
}),cljs.core.vals(work_app.events.get_all_group_map(db))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-drop-csv","work-app.events/time-drop-csv",-409627938),(function (p__35725,p__35726){
var map__35727 = p__35725;
var map__35727__$1 = cljs.core.__destructure_map(map__35727);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35727__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35728 = p__35726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(1),null);
var files = e.dataTransfer.files;
var temp__5802__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35724_SHARP_){
return files.item(p1__35724_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(files.length)));
if(cljs.core.truth_(temp__5802__auto__)){
var file = temp__5802__auto__;
var freader = (new FileReader());
(freader.onload = (function (){
var G__35731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-load-matters-csv","work-app.events/time-load-matters-csv",-567386341),freader.result], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__35731) : work_app.events._GT_evt.call(null,G__35731));
}));

return freader.readAsBinaryString(file);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),"No acceptable file"], null)], null)], null)], null);
}
}));
work_app.events.csv_lines__GT_map = (function work_app$events$csv_lines__GT_map(lines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__35732){
var vec__35733 = p__35732;
var date_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(0),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(3),null);
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(4),null);
var client = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(5),null);
var matter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(6),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(7),null);
var narrative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(8),null);
var task_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(9),null);
var code_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(10),null);
var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(11),null);
var u3_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(12),null);
var u5_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(13),null);
var work_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(14),null);
var time_card_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(15),null);
var code = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_code,code_description], null));
var vec__35736 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(matter,/-/);
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35736,(0),null);
var m_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35736,(1),null);
var task = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"desc","desc",2093485764),narrative,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date_str)),new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"location","location",1815599388),work_location,new cljs.core.Keyword(null,"time","time",1385887882),Math.round((parseFloat(hours) * (3600))),new cljs.core.Keyword(null,"client-name","client-name",1843891115),client_name,new cljs.core.Keyword(null,"c-num","c-num",1611632000),c_num,new cljs.core.Keyword(null,"m-num","m-num",81000627),m_num], null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_num,new cljs.core.Keyword(null,"name","name",1843675177)], null),client_name),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_num,new cljs.core.Keyword(null,"matters","matters",-108834512),m_num,new cljs.core.Keyword(null,"name","name",1843675177)], null),matter_name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_num,new cljs.core.Keyword(null,"matters","matters",-108834512),m_num,code,new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null),(function (t_list){
if(cljs.core.empty_QMARK_(t_list)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [task], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(t_list,task);
}
}));
}),cljs.core.PersistentArrayMap.EMPTY,lines);
});
work_app.events.client__GT_txs = (function work_app$events$client__GT_txs(ds,p__35739){
var vec__35740 = p__35739;
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(0),null);
var map__35743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(1),null);
var map__35743__$1 = cljs.core.__destructure_map(map__35743);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35743__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var matters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35743__$1,new cljs.core.Keyword(null,"matters","matters",-108834512));
var c_id = (function (){var or__5045__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__35744 = ds;
var G__35745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__35746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35744,G__35745,G__35746) : datascript.core.pull.call(null,G__35744,G__35745,G__35746));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
var base = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),c_id,new cljs.core.Keyword("client","number","client/number",-1936785665),c_num,new cljs.core.Keyword("client","name","client/name",924271622),name,new cljs.core.Keyword("client","matters","client/matters",-896248603),cljs.core.PersistentVector.EMPTY], null)], null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_num)," c-id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_id)].join(''));

return console.log(["adding c-num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_num),"\nc-name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\nbase: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)].join(''));
});
work_app.events.lines__GT_txs = (function work_app$events$lines__GT_txs(ds,lines){
var G__35756 = lines;
var vec__35758 = G__35756;
var seq__35759 = cljs.core.seq(vec__35758);
var first__35760 = cljs.core.first(seq__35759);
var seq__35759__$1 = cljs.core.next(seq__35759);
var vec__35761 = first__35760;
var date_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(0),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(3),null);
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(4),null);
var client = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(5),null);
var matter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(6),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(7),null);
var narrative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(8),null);
var task_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(9),null);
var code_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(10),null);
var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(11),null);
var u3_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(12),null);
var u5_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(13),null);
var work_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(14),null);
var time_card_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(15),null);
var l = vec__35761;
var rest_lines = seq__35759__$1;
var txs = cljs.core.PersistentVector.EMPTY;
var new_clients = cljs.core.PersistentArrayMap.EMPTY;
var new_matters = cljs.core.PersistentArrayMap.EMPTY;
var new_codes = cljs.core.PersistentArrayMap.EMPTY;
var G__35757 = work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2((-1),(-1));
var vec__35764 = G__35757;
var seq__35765 = cljs.core.seq(vec__35764);
var first__35766 = cljs.core.first(seq__35765);
var seq__35765__$1 = cljs.core.next(seq__35765);
var new_client_id = first__35766;
var first__35766__$1 = cljs.core.first(seq__35765__$1);
var seq__35765__$2 = cljs.core.next(seq__35765__$1);
var new_m_id = first__35766__$1;
var first__35766__$2 = cljs.core.first(seq__35765__$2);
var seq__35765__$3 = cljs.core.next(seq__35765__$2);
var new_code_id = first__35766__$2;
var first__35766__$3 = cljs.core.first(seq__35765__$3);
var seq__35765__$4 = cljs.core.next(seq__35765__$3);
var new_t_id = first__35766__$3;
var rest_ids = seq__35765__$4;
var G__35756__$1 = G__35756;
var txs__$1 = txs;
var new_clients__$1 = new_clients;
var new_matters__$1 = new_matters;
var new_codes__$1 = new_codes;
var G__35757__$1 = G__35757;
while(true){
var vec__35790 = G__35756__$1;
var seq__35791 = cljs.core.seq(vec__35790);
var first__35792 = cljs.core.first(seq__35791);
var seq__35791__$1 = cljs.core.next(seq__35791);
var vec__35793 = first__35792;
var date_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(0),null);
var client_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(1),null);
var status__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(2),null);
var hours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(3),null);
var timer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(4),null);
var client__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(5),null);
var matter__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(6),null);
var matter_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(7),null);
var narrative__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(8),null);
var task_code__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(9),null);
var code_description__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(10),null);
var activity__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(11),null);
var u3_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(12),null);
var u5_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(13),null);
var work_location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(14),null);
var time_card_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(15),null);
var l__$1 = vec__35793;
var rest_lines__$1 = seq__35791__$1;
var txs__$2 = txs__$1;
var new_clients__$2 = new_clients__$1;
var new_matters__$2 = new_matters__$1;
var new_codes__$2 = new_codes__$1;
var vec__35796 = G__35757__$1;
var seq__35797 = cljs.core.seq(vec__35796);
var first__35798 = cljs.core.first(seq__35797);
var seq__35797__$1 = cljs.core.next(seq__35797);
var new_client_id__$1 = first__35798;
var first__35798__$1 = cljs.core.first(seq__35797__$1);
var seq__35797__$2 = cljs.core.next(seq__35797__$1);
var new_m_id__$1 = first__35798__$1;
var first__35798__$2 = cljs.core.first(seq__35797__$2);
var seq__35797__$3 = cljs.core.next(seq__35797__$2);
var new_code_id__$1 = first__35798__$2;
var first__35798__$3 = cljs.core.first(seq__35797__$3);
var seq__35797__$4 = cljs.core.next(seq__35797__$3);
var new_t_id__$1 = first__35798__$3;
var rest_ids__$1 = seq__35797__$4;
if((l__$1 == null)){
return txs__$2;
} else {
var code_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_code__$1,code_description__$1], null));
var vec__35799 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(matter__$1,/-/);
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35799,(0),null);
var m_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35799,(1),null);
var date = (new Date(date_str__$1));
var time = Math.round((parseFloat(hours__$1) * (3600)));
var task = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"desc","desc",2093485764),narrative__$1,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date_str__$1)),new cljs.core.Keyword(null,"code","code",1586293142),code_str,new cljs.core.Keyword(null,"location","location",1815599388),work_location__$1,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"client-name","client-name",1843891115),client_name__$1,new cljs.core.Keyword(null,"c-num","c-num",1611632000),c_num,new cljs.core.Keyword(null,"m-num","m-num",81000627),m_num], null);
var c_id_ds = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__35802 = ds;
var G__35803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__35804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35802,G__35803,G__35804) : datascript.core.pull.call(null,G__35802,G__35803,G__35804));
})());
var c_id_news = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_clients__$2,c_num);
var c_id = (function (){var or__5045__auto__ = c_id_ds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = c_id_news;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new_client_id__$1;
}
}
})();
var m_id_ds = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__35805 = ds;
var G__35806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__35807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matter","id","matter/id",-355841133),m_num], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35805,G__35806,G__35807) : datascript.core.pull.call(null,G__35805,G__35806,G__35807));
})());
var m_id_news = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_matters__$2,m_num);
var m_id = (function (){var or__5045__auto__ = m_id_ds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = m_id_news;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new_m_id__$1;
}
}
})();
var new_txs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__35756__$1,txs__$1,new_clients__$1,new_matters__$1,new_codes__$1,G__35757__$1,code_str,vec__35799,c_num,m_num,date,time,task,c_id_ds,c_id_news,c_id,m_id_ds,m_id_news,m_id,vec__35790,seq__35791,first__35792,seq__35791__$1,vec__35793,date_str__$1,client_name__$1,status__$1,hours__$1,timer__$1,client__$1,matter__$1,matter_name__$1,narrative__$1,task_code__$1,code_description__$1,activity__$1,u3_name__$1,u5_name__$1,work_location__$1,time_card_id__$1,l__$1,rest_lines__$1,txs__$2,new_clients__$2,new_matters__$2,new_codes__$2,vec__35796,seq__35797,first__35798,seq__35797__$1,new_client_id__$1,first__35798__$1,seq__35797__$2,new_m_id__$1,first__35798__$2,seq__35797__$3,new_code_id__$1,first__35798__$3,seq__35797__$4,new_t_id__$1,rest_ids__$1,G__35756,vec__35758,seq__35759,first__35760,seq__35759__$1,vec__35761,date_str,client_name,status,hours,timer,client,matter,matter_name,narrative,task_code,code_description,activity,u3_name,u5_name,work_location,time_card_id,l,rest_lines,txs,new_clients,new_matters,new_codes,G__35757,vec__35764,seq__35765,first__35766,seq__35765__$1,new_client_id,first__35766__$1,seq__35765__$2,new_m_id,first__35766__$2,seq__35765__$3,new_code_id,first__35766__$3,seq__35765__$4,new_t_id,rest_ids){
return (function (p__35808){
var vec__35809 = p__35808;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(1),null);
var att = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,eid,att,(function (){var or__5045__auto__ = v;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "placeholder";
}
})()], null);
});})(G__35756__$1,txs__$1,new_clients__$1,new_matters__$1,new_codes__$1,G__35757__$1,code_str,vec__35799,c_num,m_num,date,time,task,c_id_ds,c_id_news,c_id,m_id_ds,m_id_news,m_id,vec__35790,seq__35791,first__35792,seq__35791__$1,vec__35793,date_str__$1,client_name__$1,status__$1,hours__$1,timer__$1,client__$1,matter__$1,matter_name__$1,narrative__$1,task_code__$1,code_description__$1,activity__$1,u3_name__$1,u5_name__$1,work_location__$1,time_card_id__$1,l__$1,rest_lines__$1,txs__$2,new_clients__$2,new_matters__$2,new_codes__$2,vec__35796,seq__35797,first__35798,seq__35797__$1,new_client_id__$1,first__35798__$1,seq__35797__$2,new_m_id__$1,first__35798__$2,seq__35797__$3,new_code_id__$1,first__35798__$3,seq__35797__$4,new_t_id__$1,rest_ids__$1,G__35756,vec__35758,seq__35759,first__35760,seq__35759__$1,vec__35761,date_str,client_name,status,hours,timer,client,matter,matter_name,narrative,task_code,code_description,activity,u3_name,u5_name,work_location,time_card_id,l,rest_lines,txs,new_clients,new_matters,new_codes,G__35757,vec__35764,seq__35765,first__35766,seq__35765__$1,new_client_id,first__35766__$1,seq__35765__$2,new_m_id,first__35766__$2,seq__35765__$3,new_code_id,first__35766__$3,seq__35765__$4,new_t_id,rest_ids))
,(function (){var G__35812 = txs__$2;
var G__35812__$1 = ((((cljs.core.not(c_id_ds)) && (cljs.core.not(c_id_news))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35812,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","name","client/name",924271622),client_name__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null)], 0)):G__35812);
var G__35812__$2 = ((((cljs.core.not(m_id_ds)) && (cljs.core.not(m_id_news))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35812__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","matters","client/matters",-896248603),m_id], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","name","matter/name",643423984),matter_name__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","number","matter/number",-1659652091),m_num], null)], 0)):G__35812__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__35812__$2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new_t_id__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","date","task/date",-1460731749),date], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","description","task/description",-1431594219),narrative__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","work-location","task/work-location",-2021975962),work_location__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","time","task/time",1407463183),time], null)], 0));

})());
var G__35979 = rest_lines__$1;
var G__35980 = new_txs;
var G__35981 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_clients__$2,c_num,c_id);
var G__35982 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_matters__$2,m_num,m_id);
var G__35983 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_codes__$2,new cljs.core.Keyword(null,"a","a",-2123407586),(1));
var G__35984 = rest_ids__$1;
G__35756__$1 = G__35979;
txs__$1 = G__35980;
new_clients__$1 = G__35981;
new_matters__$1 = G__35982;
new_codes__$1 = G__35983;
G__35757__$1 = G__35984;
continue;
}
break;
}
});
var G__35813_35985 = new cljs.core.Keyword("work-app.events","time-load-csv-line","work-app.events/time-load-csv-line",1517976357);
var G__35814_35986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859))], null);
var G__35815_35987 = (function (p__35816,p__35817){
var map__35818 = p__35816;
var map__35818__$1 = cljs.core.__destructure_map(map__35818);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35819 = p__35817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819,(0),null);
var vec__35822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819,(1),null);
var date_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(0),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(3),null);
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(4),null);
var client = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(5),null);
var matter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(6),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(7),null);
var narrative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(8),null);
var task_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(9),null);
var code_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(10),null);
var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(11),null);
var u3_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(12),null);
var u5_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(13),null);
var work_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(14),null);
var time_card_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(15),null);
var row = vec__35822;
var vec__35825 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(matter,/-/));
var c_num_cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35825,(0),null);
var m_num_cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35825,(1),null);
var c_num = (function (){var or__5045__auto__ = c_num_cont;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "x";
}
})();
var m_num = (function (){var or__5045__auto__ = m_num_cont;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "y";
}
})();
var c_id = (function (){var or__5045__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__35828 = ds;
var G__35829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__35830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","number","client/number",-1936785665),client], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35828,G__35829,G__35830) : datascript.core.pull.call(null,G__35828,G__35829,G__35830));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
var m_id = (function (){var or__5045__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__35831 = ds;
var G__35832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__35833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matter","number","matter/number",-1659652091),matter], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35831,G__35832,G__35833) : datascript.core.pull.call(null,G__35831,G__35832,G__35833));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-2);
}
})();
var secs = parseFloat(hours);
var txs = (function (){var G__35834 = cljs.core.PersistentVector.EMPTY;
var G__35834__$1 = (((c_id < (0)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__35834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","name","client/name",924271622),client_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null)], null)):G__35834);
var G__35834__$2 = (((m_id < (0)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__35834__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","matters","client/matters",-896248603),m_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","name","matter/name",643423984),matter_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","number","matter/number",-1659652091),m_num], null)], null)):G__35834__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__35834__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),(-3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","date","task/date",-1460731749),(new Date(date_str))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","description","task/description",-1431594219),narrative], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","code","task/code",-1647928303),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","time","task/time",1407463183),secs], null)], null));

})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),txs,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"lines-processed","lines-processed",1425313555),cljs.core.inc)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35813_35985,G__35814_35986,G__35815_35987) : re_posh.core.reg_event_fx.call(null,G__35813_35985,G__35814_35986,G__35815_35987));
var G__35835_35998 = new cljs.core.Keyword("work-app.events","time-load-matters-csv","work-app.events/time-load-matters-csv",-567386341);
var G__35836_35999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859))], null);
var G__35837_36000 = (function (p__35838,p__35839){
var map__35840 = p__35838;
var map__35840__$1 = cljs.core.__destructure_map(map__35840);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__35841 = p__35839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841,(0),null);
var csv_contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35841,(1),null);
var temp__5804__auto__ = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),goog.labs.format.csv.parse(csv_contents));
if(cljs.core.truth_(temp__5804__auto__)){
var matter_lines = temp__5804__auto__;
var cm_map = work_app.events.csv_lines__GT_map(matter_lines);
var txs = work_app.events.lines__GT_txs(ds,matter_lines);
console.log(cljs.core.clj__GT_js(txs));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$events$iter__35844(s__35845){
return (new cljs.core.LazySeq(null,(function (){
var s__35845__$1 = s__35845;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35845__$1);
if(temp__5804__auto____$1){
var s__35845__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35845__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35845__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35847 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35846 = (0);
while(true){
if((i__35846 < size__5522__auto__)){
var cs = cljs.core._nth(c__5521__auto__,i__35846);
cljs.core.chunk_append(b__35847,work_app.events.client__GT_txs(ds,cs));

var G__36006 = (i__35846 + (1));
i__35846 = G__36006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35847),work_app$events$iter__35844(cljs.core.chunk_rest(s__35845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35847),null);
}
} else {
var cs = cljs.core.first(s__35845__$2);
return cljs.core.cons(work_app.events.client__GT_txs(ds,cs),work_app$events$iter__35844(cljs.core.rest(s__35845__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cm_map);
})());

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"transact","transact",-267998670),txs,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"lines-total","lines-total",-2132996403),cljs.core.count(matter_lines),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lines-processed","lines-processed",1425313555),(0),new cljs.core.Keyword(null,"progress-visible","progress-visible",1979040181),true], 0))], null);
} else {
return null;
}
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35835_35998,G__35836_35999,G__35837_36000) : re_posh.core.reg_event_fx.call(null,G__35835_35998,G__35836_35999,G__35837_36000));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-add-known-matter","work-app.events/time-add-known-matter",1982262937),(function (p__35848,p__35849){
var map__35850 = p__35848;
var map__35850__$1 = cljs.core.__destructure_map(map__35850);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var vec__35851 = p__35849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35851,(0),null);
var vec__35854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35851,(1),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854,(0),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854,(1),null);
var client_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854,(2),null);
var matter_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854,(3),null);
var line = vec__35854;
console.log(line);

if(cljs.core.truth_(cljs.core.some(clojure.string.blank_QMARK_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),line)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),"Bad line"], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc_map_of.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_assoc_map_of(db,"time-matters",uuid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"name","name",1843675177),client_name,new cljs.core.Keyword(null,"number","number",1570378438),client_number], null)),"matter-group-map",matter_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),matter_name,new cljs.core.Keyword(null,"number","number",1570378438),matter_number], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid], null)], null)], 0))], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-set-cm-dropdown","work-app.events/time-set-cm-dropdown",1999180215),(function (db,p__35857){
var vec__35858 = p__35857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35858,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35858,(1),null);
return work_app.schema.schema_assoc(db,"cm-dropdown-val",v);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","test","work-app.events/test",102856063),(function (p__35861,_){
var map__35862 = p__35861;
var map__35862__$1 = cljs.core.__destructure_map(map__35862);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),cljs.core.str.cljs$core$IFn$_invoke$arity$1(work_app.schema.schema_next_order(db,"time-matters"))], null)], null)], null);
}));

//# sourceMappingURL=work_app.events.js.map
