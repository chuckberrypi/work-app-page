goog.provide('re_pollsive.impl');
re_pollsive.impl.ns_root = "re-pollsive.core/";
re_pollsive.impl.ns_keyword = (function re_pollsive$impl$ns_keyword(var_args){
var G__28861 = arguments.length;
switch (G__28861) {
case 0:
return re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1(null);
}));

(re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1 = (function (suffix){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pollsive.impl.ns_root,"polling",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
}));

(re_pollsive.impl.ns_keyword.cljs$lang$maxFixedArity = 1);

re_pollsive.impl.register_subs = (function re_pollsive$impl$register_subs(){
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-counter"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"counter","counter",804008177)], null));
})], 0));

return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-rules"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"rules","rules",1198912366)], null));
})], 0));
});
re_pollsive.impl.inc_counter_BANG_ = (function re_pollsive$impl$inc_counter_BANG_(p__28905,_){
var map__28907 = p__28905;
var map__28907__$1 = cljs.core.__destructure_map(map__28907);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28907__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"counter","counter",804008177)], null),cljs.core.inc)], null);
});
re_pollsive.impl.rule_started_at_BANG_ = (function re_pollsive$impl$rule_started_at_BANG_(p__28911,p__28912){
var map__28913 = p__28911;
var map__28913__$1 = cljs.core.__destructure_map(map__28913);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28913__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28914 = p__28912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(0),null);
var map__28917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(1),null);
var map__28917__$1 = cljs.core.__destructure_map(map__28917);
var started_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28917__$1,new cljs.core.Keyword(null,"started-at","started-at",1318767912));
var stopped_time_since_last_poll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28917__$1,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816));
var rule_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28917__$1,new cljs.core.Keyword(null,"rule-index","rule-index",42094131));
var rules = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"rules","rules",1198912366)], null));
var rules_updated = (function (){var G__28918 = rules;
var G__28918__$1 = (((G__28918 == null))?null:cljs.core.assoc_in(G__28918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rule_index,new cljs.core.Keyword(null,"started-at","started-at",1318767912)], null),started_at));
var G__28918__$2 = (((G__28918__$1 == null))?null:cljs.core.assoc_in(G__28918__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rule_index,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816)], null),stopped_time_since_last_poll));
if((G__28918__$2 == null)){
return null;
} else {
return cljs.core.assoc_in(G__28918__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rule_index,new cljs.core.Keyword(null,"started-before?","started-before?",1814907620)], null),true);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),rules_updated)], null);
});
re_pollsive.impl.register_events = (function re_pollsive$impl$register_events(){
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-inc-counter"),re_pollsive.impl.inc_counter_BANG_);

return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-rule-started-at"),re_pollsive.impl.rule_started_at_BANG_);
});
re_pollsive.impl.set_interval_handler = (function re_pollsive$impl$set_interval_handler(){
var counter = (function (){var or__5045__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-counter")], null)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var rules = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-rules")], null)));
var seq__28933_28969 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,rules));
var chunk__28934_28970 = null;
var count__28935_28971 = (0);
var i__28936_28972 = (0);
while(true){
if((i__28936_28972 < count__28935_28971)){
var vec__28952_28973 = chunk__28934_28970.cljs$core$IIndexed$_nth$arity$2(null,i__28936_28972);
var i_28974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952_28973,(0),null);
var rule_28975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952_28973,(1),null);
var map__28955_28976 = rule_28975;
var map__28955_28977__$1 = cljs.core.__destructure_map(map__28955_28976);
var interval_28978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28955_28977__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var event_28979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28955_28977__$1,new cljs.core.Keyword(null,"event","event",301435442));
var dispatch_event_on_start_QMARK__28980 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28955_28977__$1,new cljs.core.Keyword(null,"dispatch-event-on-start?","dispatch-event-on-start?",-763393692),false);
var poll_when_28981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28955_28977__$1,new cljs.core.Keyword(null,"poll-when","poll-when",-1964429155));
var started_at_28982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28955_28977__$1,new cljs.core.Keyword(null,"started-at","started-at",1318767912));
var started_before_QMARK__28983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28955_28977__$1,new cljs.core.Keyword(null,"started-before?","started-before?",1814907620));
var stopped_time_since_last_poll_28984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28955_28977__$1,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816));
var poll_QMARK__28985 = (cljs.core.truth_(poll_when_28981)?cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(poll_when_28981)):true);
var time_elapsed_28986 = (counter - started_at_28982);
var started_at_effective_28987 = (counter - stopped_time_since_last_poll_28984);
var interval_rem_28988 = cljs.core.rem(time_elapsed_28986,interval_28978);
if(cljs.core.truth_((function (){var and__5043__auto__ = poll_QMARK__28985;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(started_at_28982);
} else {
return and__5043__auto__;
}
})())){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-rule-started-at"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started-at","started-at",1318767912),started_at_effective_28987,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816),null,new cljs.core.Keyword(null,"rule-index","rule-index",42094131),i_28974], null)], null));

if(cljs.core.truth_((function (){var and__5043__auto__ = dispatch_event_on_start_QMARK__28980;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(started_before_QMARK__28983);
} else {
return and__5043__auto__;
}
})())){
re_frame.core.dispatch(event_28979);
} else {
}
} else {
}

if(cljs.core.truth_(started_at_28982)){
if(cljs.core.not(poll_QMARK__28985)){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-rule-started-at"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started-at","started-at",1318767912),null,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816),(interval_rem_28988 - (1)),new cljs.core.Keyword(null,"rule-index","rule-index",42094131),i_28974], null)], null));
} else {
if((function (){var interval_met_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),interval_rem_28988);
return interval_met_QMARK_;
})()){
re_frame.core.dispatch(event_28979);
} else {

}
}
} else {
}


var G__28996 = seq__28933_28969;
var G__28997 = chunk__28934_28970;
var G__28998 = count__28935_28971;
var G__28999 = (i__28936_28972 + (1));
seq__28933_28969 = G__28996;
chunk__28934_28970 = G__28997;
count__28935_28971 = G__28998;
i__28936_28972 = G__28999;
continue;
} else {
var temp__5804__auto___29000 = cljs.core.seq(seq__28933_28969);
if(temp__5804__auto___29000){
var seq__28933_29001__$1 = temp__5804__auto___29000;
if(cljs.core.chunked_seq_QMARK_(seq__28933_29001__$1)){
var c__5568__auto___29002 = cljs.core.chunk_first(seq__28933_29001__$1);
var G__29003 = cljs.core.chunk_rest(seq__28933_29001__$1);
var G__29004 = c__5568__auto___29002;
var G__29005 = cljs.core.count(c__5568__auto___29002);
var G__29006 = (0);
seq__28933_28969 = G__29003;
chunk__28934_28970 = G__29004;
count__28935_28971 = G__29005;
i__28936_28972 = G__29006;
continue;
} else {
var vec__28956_29010 = cljs.core.first(seq__28933_29001__$1);
var i_29011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28956_29010,(0),null);
var rule_29012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28956_29010,(1),null);
var map__28959_29013 = rule_29012;
var map__28959_29014__$1 = cljs.core.__destructure_map(map__28959_29013);
var interval_29015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959_29014__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var event_29016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959_29014__$1,new cljs.core.Keyword(null,"event","event",301435442));
var dispatch_event_on_start_QMARK__29017 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28959_29014__$1,new cljs.core.Keyword(null,"dispatch-event-on-start?","dispatch-event-on-start?",-763393692),false);
var poll_when_29018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959_29014__$1,new cljs.core.Keyword(null,"poll-when","poll-when",-1964429155));
var started_at_29019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959_29014__$1,new cljs.core.Keyword(null,"started-at","started-at",1318767912));
var started_before_QMARK__29020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959_29014__$1,new cljs.core.Keyword(null,"started-before?","started-before?",1814907620));
var stopped_time_since_last_poll_29021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28959_29014__$1,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816));
var poll_QMARK__29022 = (cljs.core.truth_(poll_when_29018)?cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(poll_when_29018)):true);
var time_elapsed_29023 = (counter - started_at_29019);
var started_at_effective_29024 = (counter - stopped_time_since_last_poll_29021);
var interval_rem_29025 = cljs.core.rem(time_elapsed_29023,interval_29015);
if(cljs.core.truth_((function (){var and__5043__auto__ = poll_QMARK__29022;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(started_at_29019);
} else {
return and__5043__auto__;
}
})())){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-rule-started-at"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started-at","started-at",1318767912),started_at_effective_29024,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816),null,new cljs.core.Keyword(null,"rule-index","rule-index",42094131),i_29011], null)], null));

if(cljs.core.truth_((function (){var and__5043__auto__ = dispatch_event_on_start_QMARK__29017;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(started_before_QMARK__29020);
} else {
return and__5043__auto__;
}
})())){
re_frame.core.dispatch(event_29016);
} else {
}
} else {
}

if(cljs.core.truth_(started_at_29019)){
if(cljs.core.not(poll_QMARK__29022)){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-rule-started-at"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"started-at","started-at",1318767912),null,new cljs.core.Keyword(null,"stopped-time-since-last-poll","stopped-time-since-last-poll",-2130839816),(interval_rem_29025 - (1)),new cljs.core.Keyword(null,"rule-index","rule-index",42094131),i_29011], null)], null));
} else {
if((function (){var interval_met_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),interval_rem_29025);
return interval_met_QMARK_;
})()){
re_frame.core.dispatch(event_29016);
} else {

}
}
} else {
}


var G__29030 = cljs.core.next(seq__28933_29001__$1);
var G__29031 = null;
var G__29032 = (0);
var G__29033 = (0);
seq__28933_28969 = G__29030;
chunk__28934_28970 = G__29031;
count__28935_28971 = G__29032;
i__28936_28972 = G__29033;
continue;
}
} else {
}
}
break;
}

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-inc-counter")], null));
});
re_frame.core.reg_fx(re_pollsive.impl.ns_keyword.cljs$core$IFn$_invoke$arity$1("-init"),(function (opts){
re_pollsive.impl.register_subs();

re_pollsive.impl.register_events();

return window.setInterval(re_pollsive.impl.set_interval_handler,(1000));
}));

//# sourceMappingURL=re_pollsive.impl.js.map
