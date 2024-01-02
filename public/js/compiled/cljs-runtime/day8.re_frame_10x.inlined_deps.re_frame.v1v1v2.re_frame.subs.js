goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * calls `on-dispose` for each cached item, 
 * which will cause the value to be removed from the cache
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.clear_subscription_cache_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__52716_52804 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction));
var chunk__52717_52805 = null;
var count__52718_52806 = (0);
var i__52719_52807 = (0);
while(true){
if((i__52719_52807 < count__52718_52806)){
var vec__52730_52808 = chunk__52717_52805.cljs$core$IIndexed$_nth$arity$2(null,i__52719_52807);
var k_52809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730_52808,(0),null);
var rxn_52810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730_52808,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.dispose_BANG_(rxn_52810);


var G__52811 = seq__52716_52804;
var G__52812 = chunk__52717_52805;
var G__52813 = count__52718_52806;
var G__52814 = (i__52719_52807 + (1));
seq__52716_52804 = G__52811;
chunk__52717_52805 = G__52812;
count__52718_52806 = G__52813;
i__52719_52807 = G__52814;
continue;
} else {
var temp__5804__auto___52815 = cljs.core.seq(seq__52716_52804);
if(temp__5804__auto___52815){
var seq__52716_52816__$1 = temp__5804__auto___52815;
if(cljs.core.chunked_seq_QMARK_(seq__52716_52816__$1)){
var c__5568__auto___52817 = cljs.core.chunk_first(seq__52716_52816__$1);
var G__52818 = cljs.core.chunk_rest(seq__52716_52816__$1);
var G__52819 = c__5568__auto___52817;
var G__52820 = cljs.core.count(c__5568__auto___52817);
var G__52821 = (0);
seq__52716_52804 = G__52818;
chunk__52717_52805 = G__52819;
count__52718_52806 = G__52820;
i__52719_52807 = G__52821;
continue;
} else {
var vec__52735_52822 = cljs.core.first(seq__52716_52816__$1);
var k_52823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52735_52822,(0),null);
var rxn_52824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52735_52822,(1),null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.dispose_BANG_(rxn_52824);


var G__52825 = cljs.core.next(seq__52716_52816__$1);
var G__52826 = null;
var G__52827 = (0);
var G__52828 = (0);
seq__52716_52804 = G__52825;
chunk__52717_52805 = G__52826;
count__52718_52806 = G__52827;
i__52719_52807 = G__52828;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: The subscription cache isn't empty after being cleared"], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.clear_all_handlers_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$clear_all_handlers_BANG_(){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind);

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.add_on_dispose_BANG_(r,(function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52742 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52743 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(r)], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52743);

try{try{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction,(function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,cache_key)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key);
} else {
return query_cache;
}
}));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__52621__auto___52829 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__52622__auto___52830 = (end__52621__auto___52829 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52622__auto___52830,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__52621__auto___52829);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52742);
}} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction,(function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,cache_key)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,cache_key);
} else {
return query_cache;
}
}));
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction,(function (query_cache){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_(query_cache,cache_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",cache_key], 0));
} else {
}
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_cache,cache_key,r);
}));

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52835 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52835);

} else {
}

return r;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$cache_lookup(var_args){
var G__52745 = arguments.length;
switch (G__52745) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subscribe(var_args){
var G__52749 = arguments.length;
switch (G__52749) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52750 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52751 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52751);

try{try{var temp__5802__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52841 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52841);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52844 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52844);

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52851 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52851);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query) : handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query)));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__52621__auto___52853 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__52622__auto___52854 = (end__52621__auto___52853 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52622__auto___52854,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__52621__auto___52853);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52750);
}} else {
var temp__5802__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52858 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52858);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52859 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52859);

} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52860 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52860);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query) : handler_fn.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,query)));
}
}
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52758 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52759 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52759);

try{try{var temp__5802__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52861 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52861);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52862 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52862);

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5804__auto___52863 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5804__auto___52863)){
var not_reactive_52864 = temp__5804__auto___52863;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_52864], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52865 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52865);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
}));
var sub = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
var G__52767 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db;
var G__52768 = query;
var G__52769 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__52767,G__52768,G__52769) : handler_fn.call(null,G__52767,G__52768,G__52769));
}));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return(query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
return cljs.core.deref(cljs.core.deref(sub));
})));
}
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__52621__auto___52869 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__52622__auto___52870 = (end__52621__auto___52869 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52622__auto___52870,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__52621__auto___52869);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52758);
}} else {
var temp__5802__auto__ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5802__auto__)){
var cached = temp__5802__auto__;
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52871 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52871);

} else {
}

return cached;
} else {
var query_id = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query);
var handler_fn = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id);
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52874 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52874);

} else {
}

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5804__auto___52875 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5804__auto___52875)){
var not_reactive_52877 = temp__5804__auto___52875;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_52877], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52878 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52878);

} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
}));
var sub = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
var G__52773 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db;
var G__52774 = query;
var G__52775 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__52773,G__52774,G__52775) : handler_fn.call(null,G__52773,G__52774,G__52775));
}));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.cache_and_return(query,dynv,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
return cljs.core.deref(cljs.core.deref(sub));
})));
}
}
}
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_vals = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__52777){
var vec__52778 = p__52777;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52778,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_(signals)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_vals(f,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.deref_QMARK_(signals)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(signals) : f.call(null,signals));
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.to_seq = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals(cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_(signals)){
cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_vals(cljs.core.deref,signals);
} else {
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.deref_QMARK_(signals)){
cljs.core.deref(signals);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals], 0));

}
}
}

if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52881 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.to_seq(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id,signals)))], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.to_seq(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.map_signals(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id,signals)))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52881);

} else {
}

return dereffed_signals;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$reg_sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52882 = arguments.length;
var i__5770__auto___52883 = (0);
while(true){
if((i__5770__auto___52883 < len__5769__auto___52882)){
args__5775__auto__.push((arguments[i__5770__auto___52883]));

var G__52885 = (i__5770__auto___52883 + (1));
i__5770__auto___52883 = G__52885;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__52784 = cljs.core.count(input_args);
switch (G__52784) {
case (0):
return (function() {
var G__52888 = null;
var G__52888__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db;
});
var G__52888__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db;
});
G__52888 = function(_,___$1){
switch(arguments.length){
case 1:
return G__52888__1.call(this,_);
case 2:
return G__52888__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52888.cljs$core$IFn$_invoke$arity$1 = G__52888__1;
G__52888.cljs$core$IFn$_invoke$arity$2 = G__52888__2;
return G__52888;
})()

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__52785 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52785,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52785,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1 = (function (_){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return (function() {
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe,vecs);
});
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.subscribe,vecs);
});
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__1;
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn__2;
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$inp_fn;
})()

}
})();
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.kind,query_id,(function() {
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn = null;
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,null) : inputs_fn.call(null,query_vec,null));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52789 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52790 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52790);

try{try{var subscription = (function (){var G__52791 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__52792 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__52791,G__52792) : computation_fn.call(null,G__52791,G__52792));
})();
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52892 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52892);

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__52621__auto___52893 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__52622__auto___52894 = (end__52621__auto___52893 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52622__auto___52894,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__52621__auto___52893);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52789);
}} else {
var subscription = (function (){var G__52793 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__52794 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__52793,G__52794) : computation_fn.call(null,G__52793,G__52794));
})();
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52895 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52895);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
var day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.make_reaction((function (){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52796 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52797 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52797);

try{try{var subscription = (function (){var G__52798 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__52799 = query_vec;
var G__52800 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__52798,G__52799,G__52800) : computation_fn.call(null,G__52798,G__52799,G__52800));
})();
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52897 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52897);

} else {
}

return subscription;
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__52621__auto___52899 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__52622__auto___52900 = (end__52621__auto___52899 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52622__auto___52900,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__52621__auto___52899);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52796);
}} else {
var subscription = (function (){var G__52801 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__52802 = query_vec;
var G__52803 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__52801,G__52802,G__52803) : computation_fn.call(null,G__52801,G__52802,G__52803));
})();
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__52623__auto___52901 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__52623__auto___52901);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(reaction_id,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__2;
day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn__3;
return day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$subs$subs_handler_fn;
})()
);
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq52782){
var G__52783 = cljs.core.first(seq52782);
var seq52782__$1 = cljs.core.next(seq52782);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52783,seq52782__$1);
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.subs.js.map
