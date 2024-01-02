goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22184){
var map__22185 = p__22184;
var map__22185__$1 = cljs.core.__destructure_map(map__22185);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22185__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22185__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22185__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22185__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22188_22217 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22189_22218 = null;
var count__22190_22219 = (0);
var i__22191_22220 = (0);
while(true){
if((i__22191_22220 < count__22190_22219)){
var vec__22203_22221 = chunk__22189_22218.cljs$core$IIndexed$_nth$arity$2(null,i__22191_22220);
var k_22222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22203_22221,(0),null);
var cb_22223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22203_22221,(1),null);
try{var G__22207_22224 = cljs.core.deref(re_frame.trace.traces);
(cb_22223.cljs$core$IFn$_invoke$arity$1 ? cb_22223.cljs$core$IFn$_invoke$arity$1(G__22207_22224) : cb_22223.call(null,G__22207_22224));
}catch (e22206){var e_22225 = e22206;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22222,"while storing",cljs.core.deref(re_frame.trace.traces),e_22225], 0));
}

var G__22226 = seq__22188_22217;
var G__22227 = chunk__22189_22218;
var G__22228 = count__22190_22219;
var G__22229 = (i__22191_22220 + (1));
seq__22188_22217 = G__22226;
chunk__22189_22218 = G__22227;
count__22190_22219 = G__22228;
i__22191_22220 = G__22229;
continue;
} else {
var temp__5804__auto___22230 = cljs.core.seq(seq__22188_22217);
if(temp__5804__auto___22230){
var seq__22188_22231__$1 = temp__5804__auto___22230;
if(cljs.core.chunked_seq_QMARK_(seq__22188_22231__$1)){
var c__5568__auto___22232 = cljs.core.chunk_first(seq__22188_22231__$1);
var G__22233 = cljs.core.chunk_rest(seq__22188_22231__$1);
var G__22234 = c__5568__auto___22232;
var G__22235 = cljs.core.count(c__5568__auto___22232);
var G__22236 = (0);
seq__22188_22217 = G__22233;
chunk__22189_22218 = G__22234;
count__22190_22219 = G__22235;
i__22191_22220 = G__22236;
continue;
} else {
var vec__22209_22237 = cljs.core.first(seq__22188_22231__$1);
var k_22238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209_22237,(0),null);
var cb_22239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22209_22237,(1),null);
try{var G__22213_22240 = cljs.core.deref(re_frame.trace.traces);
(cb_22239.cljs$core$IFn$_invoke$arity$1 ? cb_22239.cljs$core$IFn$_invoke$arity$1(G__22213_22240) : cb_22239.call(null,G__22213_22240));
}catch (e22212){var e_22241 = e22212;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22238,"while storing",cljs.core.deref(re_frame.trace.traces),e_22241], 0));
}

var G__22242 = cljs.core.next(seq__22188_22231__$1);
var G__22243 = null;
var G__22244 = (0);
var G__22245 = (0);
seq__22188_22217 = G__22242;
chunk__22189_22218 = G__22243;
count__22190_22219 = G__22244;
i__22191_22220 = G__22245;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
