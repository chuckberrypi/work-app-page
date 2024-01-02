goog.provide('work_app.time_events');
goog.scope(function(){
  work_app.time_events.goog$module$goog$object = goog.module.get('goog.object');
});
work_app.time_events.quot_rem = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.quot,cljs.core.mod);
work_app.time_events.order_step = (64);
work_app.time_events.log_var = (function work_app$time_events$log_var(var$){
return console.log([cljs.core.name(new cljs.core.Symbol(null,"var","var",870848730,null)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join(''));
});
work_app.time_events.range_step = (function work_app$time_events$range_step(var_args){
var G__35054 = arguments.length;
switch (G__35054) {
case 0:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$0 = (function (){
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1((1));
}));

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1 = (function (step){
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(step,(0));
}));

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2 = (function (step,start){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(start,work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(step,(start + step)));
}),null,null));
}));

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$3 = (function (step,start,end){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__35052_SHARP_){
return (end > p1__35052_SHARP_);
}),work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(step,start));
}));

(work_app.time_events.range_step.cljs$lang$maxFixedArity = 3);

work_app.time_events.chunks_of_gen = (function work_app$time_events$chunks_of_gen(chunks_of){
return (function (n){
var vec__35056 = work_app.time_events.quot_rem(cljs.core.abs(n),chunks_of);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(1),null);
var G__35059 = chunks_of;
var G__35059__$1 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(q,G__35059)
;
var G__35059__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),r))?cljs.core.cons(r,G__35059__$1):G__35059__$1);
if((n < (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35055_SHARP_){
return (- p1__35055_SHARP_);
}),G__35059__$2);
} else {
return G__35059__$2;
}
});
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","toggle-move-dialog-visible","work-app.time-events/toggle-move-dialog-visible",1646040719),(function (db,_){
return work_app.schema.schema_update(db,"move-dialog-visible",cljs.core.not);
}));
var G__35060_35310 = new cljs.core.Keyword("work-app.time-events","delete-tasks","work-app.time-events/delete-tasks",1766333016);
var G__35061_35311 = (function (_,p__35062){
var vec__35063 = p__35062;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35063,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),tid], null);
}),t_ids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__35060_35310,G__35061_35311) : re_posh.core.reg_event_fx.call(null,G__35060_35310,G__35061_35311));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","toggle-check","work-app.time-events/toggle-check",-725732796),(function (db,p__35066){
var vec__35067 = p__35066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"t-checked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-selected-code","work-app.time-events/set-selected-code",1261060010),(function (db,p__35070){
var vec__35071 = p__35070;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(1),null);
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(2),null);
return work_app.schema.schema_assoc(db,"time-selected-code-key-and-id",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,c_id], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.time-events","time-set-selected-date-today","work-app.time-events/time-set-selected-date-today",-420213817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917))], null),(function (p__35074,_){
var map__35075 = p__35074;
var map__35075__$1 = cljs.core.__destructure_map(map__35075);
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35075__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var year = now.getFullYear();
var month = now.getMonth();
var day = now.getDate();
var new_date = (new Date(year,month,day));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","time-set-selected-date","work-app.time-events/time-set-selected-date",1590370823),new_date], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","time-set-selected-date","work-app.time-events/time-set-selected-date",1590370823),(function (db,p__35076){
var vec__35077 = p__35076;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077,(1),null);
return work_app.schema.schema_assoc(db,"time-selected-date",date);
}));
var G__35080_35312 = new cljs.core.Keyword("work-app.time-events","set-matter-last-active-timer","work-app.time-events/set-matter-last-active-timer",1713347100);
var G__35081_35313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35082_35314 = (function (p__35083,p__35084){
var map__35085 = p__35083;
var map__35085__$1 = cljs.core.__destructure_map(map__35085);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35085__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35085__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__35086 = p__35084;
var seq__35087 = cljs.core.seq(vec__35086);
var first__35088 = cljs.core.first(seq__35087);
var seq__35087__$1 = cljs.core.next(seq__35087);
var _ = first__35088;
var first__35088__$1 = cljs.core.first(seq__35087__$1);
var seq__35087__$2 = cljs.core.next(seq__35087__$1);
var m_id = first__35088__$1;
var vec__35089 = seq__35087__$2;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35089,(0),null);
var date = work_app.schema.schema_get(db,"time-selected-date");
var max_id = (function (){var G__35092 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null);
var G__35093 = ds;
var G__35094 = m_id;
var G__35095 = date;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__35092,G__35093,G__35094,G__35095) : datascript.core.q.call(null,G__35092,G__35093,G__35094,G__35095));
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(val)?work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-timer",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0)):work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-timer",max_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0)))], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35080_35312,G__35081_35313,G__35082_35314) : re_posh.core.reg_event_fx.call(null,G__35080_35312,G__35081_35313,G__35082_35314));
var G__35096_35315 = new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040);
var G__35097_35316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)))], null);
var G__35098_35317 = (function (p__35099,p__35100){
var map__35101 = p__35099;
var map__35101__$1 = cljs.core.__destructure_map(map__35101);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35101__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35101__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35101__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var vec__35102 = p__35100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(1),null);
console.log(now);

var vec__35105 = (function (){var G__35108 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Symbol(null,"?time","?time",67392957,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","time","task/time",1407463183),new cljs.core.Symbol(null,"?time","?time",67392957,null)], null)], null);
var G__35109 = ds;
var G__35110 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35108,G__35109,G__35110) : datascript.core.q.call(null,G__35108,G__35109,G__35110));
})();
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(0),null);
var starting_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"active-timer-m-id",m_id),"active-timer-t-id",t_id),"matter-last-active-timer",t_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","ticker-set-timed-event","work-app.events/ticker-set-timed-event",-1815171530),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330),new cljs.core.Keyword(null,"interval","interval",1708495417),(1),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),t_id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","task-tick","work-app.time-events/task-tick",-1878100393),t_id,now,starting_time], null)], null)], null)], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35096_35315,G__35097_35316,G__35098_35317) : re_posh.core.reg_event_fx.call(null,G__35096_35315,G__35097_35316,G__35098_35317));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","stop-task-timer","work-app.time-events/stop-task-timer",9551465),(function (p__35111,_){
var map__35112 = p__35111;
var map__35112__$1 = cljs.core.__destructure_map(map__35112);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"active-timer-m-id",false),"active-timer-t-id",false),"ticker-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330)], null)], null)], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-draggable","work-app.time-events/set-draggable",634084823),(function (p__35113,p__35114){
var map__35115 = p__35113;
var map__35115__$1 = cljs.core.__destructure_map(map__35115);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35115__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35116 = p__35114;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"draggable",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-edit-mode","work-app.time-events/set-edit-mode",-1320911621),(function (db,p__35119){
var vec__35120 = p__35119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35120,(0),null);
var codes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35120,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35120,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(acc,"code-edit-mode",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),db,codes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","toggle-code-edit","work-app.time-events/toggle-code-edit",1359246626),(function (db,p__35123){
var vec__35124 = p__35123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(0),null);
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"code-edit-mode",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_id], null)], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","time-task-slider-lock-toggle","work-app.time-events/time-task-slider-lock-toggle",-767637872),(function (p__35127,p__35128){
var map__35129 = p__35127;
var map__35129__$1 = cljs.core.__destructure_map(map__35129);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35129__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35130 = p__35128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"t-slider-locked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id], null)], null)], 0))], null);
}));
work_app.time_events.candidates_to_tx = (function work_app$time_events$candidates_to_tx(candidates,delta){
var candidates_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(v),v);
}),cljs.core.PersistentArrayMap.EMPTY,candidates);
var G__35137 = work_app.time_events.chunks_of_gen((360))(delta);
var vec__35138 = G__35137;
var seq__35139 = cljs.core.seq(vec__35138);
var first__35140 = cljs.core.first(seq__35139);
var seq__35139__$1 = cljs.core.next(seq__35139);
var d_first = first__35140;
var d_rest = seq__35139__$1;
var cand_map = candidates_map;
var changed = cljs.core.PersistentHashSet.EMPTY;
var G__35137__$1 = G__35137;
var cand_map__$1 = cand_map;
var changed__$1 = changed;
while(true){
var vec__35148 = G__35137__$1;
var seq__35149 = cljs.core.seq(vec__35148);
var first__35150 = cljs.core.first(seq__35149);
var seq__35149__$1 = cljs.core.next(seq__35149);
var d_first__$1 = first__35150;
var d_rest__$1 = seq__35149__$1;
var cand_map__$2 = cand_map__$1;
var changed__$2 = changed__$1;
var target_task = (function (){var G__35151 = cand_map__$2;
var G__35151__$1 = cljs.core.vals(G__35151)
;
var G__35151__$2 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),G__35151__$1)
;
var G__35151__$3 = (((d_first__$1 > (0)))?cljs.core.reverse(G__35151__$2):G__35151__$2);
var G__35151__$4 = (((delta > (0)))?cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (G__35137__$1,cand_map__$1,changed__$1,G__35151,G__35151__$1,G__35151__$2,G__35151__$3,vec__35148,seq__35149,first__35150,seq__35149__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__35137,vec__35138,seq__35139,first__35140,seq__35139__$1,d_first,d_rest,cand_map,changed,candidates_map){
return (function (t){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(t) < (1));
});})(G__35137__$1,cand_map__$1,changed__$1,G__35151,G__35151__$1,G__35151__$2,G__35151__$3,vec__35148,seq__35149,first__35150,seq__35149__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__35137,vec__35138,seq__35139,first__35140,seq__35139__$1,d_first,d_rest,cand_map,changed,candidates_map))
,G__35151__$3):G__35151__$3);
return cljs.core.first(G__35151__$4);

})();
var new_time = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(target_task) - d_first__$1);
if((((d_first__$1 == null)) || ((((target_task == null)) || (((0) > new_time)))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__35137__$1,cand_map__$1,changed__$1,target_task,new_time,vec__35148,seq__35149,first__35150,seq__35149__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__35137,vec__35138,seq__35139,first__35140,seq__35139__$1,d_first,d_rest,cand_map,changed,candidates_map){
return (function (p__35152){
var map__35153 = p__35152;
var map__35153__$1 = cljs.core.__destructure_map(map__35153);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,new cljs.core.Keyword("task","time","task/time",1407463183),time], null);
});})(G__35137__$1,cand_map__$1,changed__$1,target_task,new_time,vec__35148,seq__35149,first__35150,seq__35149__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__35137,vec__35138,seq__35139,first__35140,seq__35139__$1,d_first,d_rest,cand_map,changed,candidates_map))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__35137__$1,cand_map__$1,changed__$1,target_task,new_time,vec__35148,seq__35149,first__35150,seq__35149__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__35137,vec__35138,seq__35139,first__35140,seq__35139__$1,d_first,d_rest,cand_map,changed,candidates_map){
return (function (p1__35133_SHARP_){
var G__35154 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__35133_SHARP_);
return (changed__$2.cljs$core$IFn$_invoke$arity$1 ? changed__$2.cljs$core$IFn$_invoke$arity$1(G__35154) : changed__$2.call(null,G__35154));
});})(G__35137__$1,cand_map__$1,changed__$1,target_task,new_time,vec__35148,seq__35149,first__35150,seq__35149__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__35137,vec__35138,seq__35139,first__35140,seq__35139__$1,d_first,d_rest,cand_map,changed,candidates_map))
,cljs.core.vals(cand_map__$2)));
} else {
var G__35335 = d_rest__$1;
var G__35336 = cljs.core.assoc_in(cand_map__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(target_task),new cljs.core.Keyword(null,"time","time",1385887882)], null),Math.round(new_time));
var G__35337 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(changed__$2,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(target_task));
G__35137__$1 = G__35335;
cand_map__$1 = G__35336;
changed__$1 = G__35337;
continue;
}
break;
}
});
work_app.time_events.time_filter = (function work_app$time_events$time_filter(delt,time){
if((delt > (0))){
return (delt <= time);
} else {
return true;
}
});
var G__35156_35338 = new cljs.core.Keyword("work-app.time-events","slider-change-locked-ds","work-app.time-events/slider-change-locked-ds",-1234641690);
var G__35157_35339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35158_35340 = (function (p__35159,p__35160){
var map__35161 = p__35159;
var map__35161__$1 = cljs.core.__destructure_map(map__35161);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35161__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35161__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35162 = p__35160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35162,(0),null);
var map__35165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35162,(1),null);
var map__35165__$1 = cljs.core.__destructure_map(map__35165);
var t_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35165__$1,new cljs.core.Keyword(null,"t-id","t-id",647334507));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35165__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var unlocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35165__$1,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var task = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(ds,t_id) : datascript.core.entity.call(null,ds,t_id));
var delta = (time - new cljs.core.Keyword("task","time","task/time",1407463183).cljs$core$IFn$_invoke$arity$1(task));
var recipient_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35155_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t_id,p1__35155_SHARP_);
}),unlocked);
var recipients = (function (){var G__35166 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?time","?time",67392957,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Symbol(null,"?delt","?delt",463197883,null),new cljs.core.Symbol(null,"?t-filter","?t-filter",2146081495,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("task","time","task/time",1407463183),new cljs.core.Symbol(null,"?time","?time",67392957,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?t-filter","?t-filter",2146081495,null),new cljs.core.Symbol(null,"?delt","?delt",463197883,null),new cljs.core.Symbol(null,"?time","?time",67392957,null))], null)], null);
var G__35167 = ds;
var G__35168 = recipient_ids;
var G__35169 = delta;
var G__35170 = work_app.time_events.time_filter;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__35166,G__35167,G__35168,G__35169,G__35170) : datascript.core.q.call(null,G__35166,G__35167,G__35168,G__35169,G__35170));
})();
var recipient_total_time = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),recipients));
var transactions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","time","task/time",1407463183),Math.round(time)], null)], null),work_app.time_events.candidates_to_tx(recipients,delta));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"transact","transact",-267998670),(((((recipient_total_time < delta)) || ((cljs.core.count(recipients) < (1)))))?cljs.core.PersistentVector.EMPTY:transactions)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35156_35338,G__35157_35339,G__35158_35340) : re_posh.core.reg_event_fx.call(null,G__35156_35338,G__35157_35339,G__35158_35340));
var G__35171_35349 = new cljs.core.Keyword("work-app.time-events","time-set-task-time-ds","work-app.time-events/time-set-task-time-ds",991078336);
var G__35172_35350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35173_35351 = (function (p__35174,p__35175){
var map__35176 = p__35174;
var map__35176__$1 = cljs.core.__destructure_map(map__35176);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35176__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__35177 = p__35175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35177,(0),null);
var map__35180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35177,(1),null);
var map__35180__$1 = cljs.core.__destructure_map(map__35180);
var t_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35180__$1,new cljs.core.Keyword(null,"t-id","t-id",647334507));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35180__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),t_id,new cljs.core.Keyword("task","time","task/time",1407463183),Math.round(time)], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35171_35349,G__35172_35350,G__35173_35351) : re_posh.core.reg_event_fx.call(null,G__35171_35349,G__35172_35350,G__35173_35351));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.time-events","task-tick","work-app.time-events/task-tick",-1878100393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)))], null),(function (p__35181,p__35182){
var map__35183 = p__35181;
var map__35183__$1 = cljs.core.__destructure_map(map__35183);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var vec__35184 = p__35182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35184,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35184,(1),null);
var start_timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35184,(2),null);
var original_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35184,(3),null);
var pull_result = (function (){var G__35187 = ds;
var G__35188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","time","task/time",1407463183)], null);
var G__35189 = t_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35187,G__35188,G__35189) : datascript.core.pull.call(null,G__35187,G__35188,G__35189));
})();
var old_time = new cljs.core.Keyword("task","time","task/time",1407463183).cljs$core$IFn$_invoke$arity$1(pull_result);
var delt = Math.round(((now - start_timer) / (1000)));
var new_time = (original_time + delt);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","time","task/time",1407463183),new_time], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-dragged-task","work-app.time-events/set-dragged-task",104057141),(function (db,p__35190){
var vec__35191 = p__35190;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(1),null);
return work_app.schema.schema_assoc(db,"dragged-task",t_id);
}));
var G__35194_35365 = new cljs.core.Keyword("work-app.time-events","task-drop","work-app.time-events/task-drop",-647386245);
var G__35195_35366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35196_35367 = (function (p__35197,p__35198){
var map__35199 = p__35197;
var map__35199__$1 = cljs.core.__destructure_map(map__35199);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35200 = p__35198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(0),null);
var dropped_on = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(1),null);
var dragged_over_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35200,(2),null);
var temp__5802__auto__ = work_app.schema.schema_get(db,"dragged-task");
if(cljs.core.truth_(temp__5802__auto__)){
var dragged = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","insert-task-after-or-before","work-app.time-events/insert-task-after-or-before",-1032312742),dragged,dropped_on,(0.5 < dragged_over_position)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["dragged: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dragged),"\ndropped-on: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dropped_on)].join('')], null)], null)], null);
} else {
return null;
}
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35194_35365,G__35195_35366,G__35196_35367) : re_posh.core.reg_event_fx.call(null,G__35194_35365,G__35195_35366,G__35196_35367));
work_app.time_events.get_mid_by_tid = (function work_app$time_events$get_mid_by_tid(ds,t_id){
var G__35203 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?mid","?mid",-615418358,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?mid","?mid",-615418358,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null);
var G__35204 = ds;
var G__35205 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35203,G__35204,G__35205) : datascript.core.q.call(null,G__35203,G__35204,G__35205));
});
work_app.time_events.get_sib_tasks_and_orders = (function work_app$time_events$get_sib_tasks_and_orders(ds,t_id){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var G__35206 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"order","order",385854271,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Symbol(null,"?code","?code",-1914511368,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Symbol(null,"?code","?code",-1914511368,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null)], null);
var G__35207 = ds;
var G__35208 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35206,G__35207,G__35208) : datascript.core.q.call(null,G__35206,G__35207,G__35208));
})());
});
work_app.time_events.re_order_txs = (function work_app$time_events$re_order_txs(t_id,index,sibs){
var beg = cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,sibs);
var end = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,sibs);
var new_raw = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(beg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eid","eid",559519930),t_id], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
var txs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__35211){
var map__35212 = p__35211;
var map__35212__$1 = cljs.core.__destructure_map(map__35212);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35212__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("task","order","task/order",-1270804365),order], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__35209_SHARP_,p2__35210_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35209_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),p2__35210_SHARP_);
}),new_raw,work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1(work_app.time_events.order_step)));
return txs;
});
var G__35213_35376 = new cljs.core.Keyword("work-app.time-events","insert-task-after-or-before","work-app.time-events/insert-task-after-or-before",-1032312742);
var G__35214_35377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35215_35378 = (function (p__35216,p__35217){
var map__35218 = p__35216;
var map__35218__$1 = cljs.core.__destructure_map(map__35218);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35218__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35218__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35219 = p__35217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(0),null);
var dragged = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(1),null);
var dropped_on = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(2),null);
var after_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(3),null);
var map__35222 = (function (){var G__35223 = ds;
var G__35224 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Keyword("task","date","task/date",-1460731749)], null);
var G__35225 = dropped_on;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35223,G__35224,G__35225) : datascript.core.pull.call(null,G__35223,G__35224,G__35225));
})();
var map__35222__$1 = cljs.core.__destructure_map(map__35222);
var dropped_on_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35222__$1,new cljs.core.Keyword("task","order","task/order",-1270804365));
var dropped_on_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35222__$1,new cljs.core.Keyword("task","code","task/code",-1647928303));
var dropped_on_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35222__$1,new cljs.core.Keyword("task","date","task/date",-1460731749));
var dropped_on_m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35222__$1,new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674));
var dropped_on_mid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(dropped_on_m);
var dragged_mid = work_app.time_events.get_mid_by_tid(ds,dragged);
var sibs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35226){
var map__35227 = p__35226;
var map__35227__$1 = cljs.core.__destructure_map(map__35227);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35227__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eid,dragged);
}),work_app.time_events.get_sib_tasks_and_orders(ds,dropped_on));
var index = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p__35228){
var map__35229 = p__35228;
var map__35229__$1 = cljs.core.__destructure_map(map__35229);
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35229__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var fexpr__35230 = (cljs.core.truth_(after_QMARK_)?cljs.core._GT__EQ_:cljs.core._GT_);
return (fexpr__35230.cljs$core$IFn$_invoke$arity$2 ? fexpr__35230.cljs$core$IFn$_invoke$arity$2(dropped_on_order,o) : fexpr__35230.call(null,dropped_on_order,o));
}),sibs));
var txs = work_app.time_events.re_order_txs(dragged,index,sibs);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),dragged_mid,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),dragged], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),dropped_on_mid,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),dragged], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),dragged,new cljs.core.Keyword("task","code","task/code",-1647928303),dropped_on_code], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),dragged,new cljs.core.Keyword("task","date","task/date",-1460731749),dropped_on_date], null)], null),txs)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35213_35376,G__35214_35377,G__35215_35378) : re_posh.core.reg_event_fx.call(null,G__35213_35376,G__35214_35377,G__35215_35378));
var G__35231_35389 = new cljs.core.Keyword("work-app.time-events","re-order-above","work-app.time-events/re-order-above",235436790);
var G__35232_35390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35233_35391 = (function (p__35234,p__35235){
var map__35236 = p__35234;
var map__35236__$1 = cljs.core.__destructure_map(map__35236);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35236__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__35237 = p__35235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35237,(0),null);
var above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35237,(1),null);
var eids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35237,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["re-order-above: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(above),cljs.core.str.cljs$core$IFn$_invoke$arity$1(eids)].join('')], null)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (order,eid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("task","order","task/order",-1270804365),order], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(work_app.time_events.order_step,above)),eids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35231_35389,G__35232_35390,G__35233_35391) : re_posh.core.reg_event_fx.call(null,G__35231_35389,G__35232_35390,G__35233_35391));
var G__35240_35392 = new cljs.core.Keyword("work-app.time-events","add-task","work-app.time-events/add-task",-1474107965);
var G__35241_35393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__35242_35394 = (function (p__35243,p__35244){
var map__35245 = p__35243;
var map__35245__$1 = cljs.core.__destructure_map(map__35245);
var cofx = map__35245__$1;
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35245__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35245__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35246 = p__35244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35246,(0),null);
var map__35249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35246,(1),null);
var map__35249__$1 = cljs.core.__destructure_map(map__35249);
var args = map__35249__$1;
var start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35249__$1,new cljs.core.Keyword(null,"start?","start?",1440714206),false);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35249__$1,new cljs.core.Keyword(null,"description","description",-1428560544),"");
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var task_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35249__$1,new cljs.core.Keyword(null,"time","time",1385887882),(1));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var default_c = (function (){var G__35250 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null)], null)], null);
var G__35251 = ds;
var G__35252 = matter_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35250,G__35251,G__35252) : datascript.core.q.call(null,G__35250,G__35251,G__35252));
})();
var new_t_id = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(ds) + (1));
var new_order = (function (){var or__5045__auto__ = order;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (work_app.time_events.order_step + (function (){var G__35253 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null)], null);
var G__35254 = ds;
var G__35255 = matter_id;
var G__35256 = date;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__35253,G__35254,G__35255,G__35256) : datascript.core.q.call(null,G__35253,G__35254,G__35255,G__35256));
})());
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return ((10) * new_t_id);
}
}
})();
var new_task = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),new_t_id,new cljs.core.Keyword("task","time","task/time",1407463183),time,new cljs.core.Keyword("task","date","task/date",-1460731749),date,new cljs.core.Keyword("task","code","task/code",-1647928303),(function (){var or__5045__auto__ = c;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = default_c;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "0";
}
}
})(),new cljs.core.Keyword("task","description","task/description",-1431594219),description,new cljs.core.Keyword("task","order","task/order",-1270804365),new_order], null);
console.log(["new-task: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_task)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),matter_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new_t_id], null),new_task], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),(cljs.core.truth_(start_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040),new_t_id], null)], null)], null):cljs.core.PersistentVector.EMPTY)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35240_35392,G__35241_35393,G__35242_35394) : re_posh.core.reg_event_fx.call(null,G__35240_35392,G__35241_35393,G__35242_35394));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","check-tasks","work-app.time-events/check-tasks",-1428636900),(function (db,p__35257){
var vec__35258 = p__35257;
var seq__35259 = cljs.core.seq(vec__35258);
var first__35260 = cljs.core.first(seq__35259);
var seq__35259__$1 = cljs.core.next(seq__35259);
var _ = first__35260;
var first__35260__$1 = cljs.core.first(seq__35259__$1);
var seq__35259__$2 = cljs.core.next(seq__35259__$1);
var t_ids = first__35260__$1;
var uncheck_QMARK_ = seq__35259__$2;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(acc,"t-checked",cljs.core.not(uncheck_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),db,t_ids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-drag-over-position","work-app.time-events/set-drag-over-position",-1548603921),(function (db,p__35261){
var vec__35262 = p__35261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35262,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35262,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35262,(2),null);
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"drag-over-position",pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_id], 0));
}));
var G__35265_35408 = new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524);
var G__35266_35409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821)))], null);
var G__35267_35410 = (function (p__35268,p__35269){
var map__35270 = p__35268;
var map__35270__$1 = cljs.core.__destructure_map(map__35270);
var cofx = map__35270__$1;
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var vec__35271 = p__35269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35271,(0),null);
var map__35274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35271,(1),null);
var map__35274__$1 = cljs.core.__destructure_map(map__35274);
var before_t_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35274__$1,new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354));
var start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35274__$1,new cljs.core.Keyword(null,"start?","start?",1440714206));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35274__$1,new cljs.core.Keyword(null,"description","description",-1428560544),"");
var map__35275 = (function (){var G__35279 = ds;
var G__35280 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674)], null);
var G__35281 = before_t_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__35279,G__35280,G__35281) : datascript.core.pull.call(null,G__35279,G__35280,G__35281));
})();
var map__35275__$1 = cljs.core.__destructure_map(map__35275);
var before_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword("task","code","task/code",-1647928303));
var before_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword("task","order","task/order",-1270804365));
var before_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword("task","date","task/date",-1460731749));
var matter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35275__$1,new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674));
var m_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(matter);
var later_tasks = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__35282 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?old-order","?old-order",-821109617,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"?old-order","?old-order",-821109617,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null)], null);
var G__35283 = ds;
var G__35284 = before_t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__35282,G__35283,G__35284) : datascript.core.q.call(null,G__35282,G__35283,G__35284));
})());
var vec__35276 = cljs.core.first(later_tasks);
var next_eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(0),null);
var order_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(1),null);
var delt = (order_above - before_order);
var re_order_above = ((2) > delt);
var next_order = ((re_order_above)?(before_order + work_app.time_events.order_step):(before_order + Math.ceil((delt / (2)))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task","work-app.time-events/add-task",-1474107965),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"matter-id","matter-id",914791808),m_id,new cljs.core.Keyword(null,"date","date",-1463434462),before_date,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"order","order",-1254677256),(before_order + (1)),new cljs.core.Keyword(null,"c","c",-1763192079),before_code,new cljs.core.Keyword(null,"start?","start?",1440714206),start_QMARK_], null)], null)], null)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),((re_order_above)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function work_app$time_events$iter__35285(s__35286){
return (new cljs.core.LazySeq(null,(function (){
var s__35286__$1 = s__35286;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35286__$1);
if(temp__5804__auto__){
var s__35286__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35286__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35286__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35288 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35287 = (0);
while(true){
if((i__35287 < size__5522__auto__)){
var vec__35289 = cljs.core._nth(c__5521__auto__,i__35287);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35289,(0),null);
var new_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35289,(1),null);
cljs.core.chunk_append(b__35288,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","order","task/order",-1270804365),new_order], null));

var G__35411 = (i__35287 + (1));
i__35287 = G__35411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35288),work_app$time_events$iter__35285(cljs.core.chunk_rest(s__35286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35288),null);
}
} else {
var vec__35292 = cljs.core.first(s__35286__$2);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35292,(0),null);
var new_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35292,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","order","task/order",-1270804365),new_order], null),work_app$time_events$iter__35285(cljs.core.rest(s__35286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__35295,no){
var vec__35296 = p__35295;
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id,no], null);
}),later_tasks,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(work_app.time_events.order_step,next_order))));
})()):cljs.core.PersistentVector.EMPTY)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35265_35408,G__35266_35409,G__35267_35410) : re_posh.core.reg_event_fx.call(null,G__35265_35408,G__35266_35409,G__35267_35410));
var G__35299_35413 = new cljs.core.Keyword("work-app.time-events","task-set-desc","work-app.time-events/task-set-desc",-583941228);
var G__35300_35414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859))], null);
var G__35301_35415 = (function (p__35302,p__35303){
var map__35304 = p__35302;
var map__35304__$1 = cljs.core.__destructure_map(map__35304);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35305 = p__35303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305,(0),null);
var map__35308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305,(1),null);
var map__35308__$1 = cljs.core.__destructure_map(map__35308);
var task_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35308__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35308__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),task_id,new cljs.core.Keyword("task","description","task/description",-1431594219),desc], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__35299_35413,G__35300_35414,G__35301_35415) : re_posh.core.reg_event_fx.call(null,G__35299_35413,G__35300_35414,G__35301_35415));

//# sourceMappingURL=work_app.time_events.js.map
