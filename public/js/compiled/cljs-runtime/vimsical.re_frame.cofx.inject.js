goog.provide('vimsical.re_frame.cofx.inject');
vimsical.re_frame.cofx.inject.ignore_dispose_QMARK_ = (function vimsical$re_frame$cofx$inject$ignore_dispose_QMARK_(query_vector){
return new cljs.core.Keyword(null,"ignore-dispose","ignore-dispose",1886270732).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_vector));
});
/**
 * Dispose of `ratom-or-reaction` iff it has no watches.
 */
vimsical.re_frame.cofx.inject.dispose_maybe = (function vimsical$re_frame$cofx$inject$dispose_maybe(query_vector,ratom_or_reaction){
if(cljs.core.seq(ratom_or_reaction.watches)){
return null;
} else {
if(cljs.core.truth_(vimsical.re_frame.cofx.inject.ignore_dispose_QMARK_(query_vector))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Disposing of injected subscription:",query_vector], 0));
}

return re_frame.interop.dispose_BANG_(ratom_or_reaction);
}
});
if((typeof vimsical !== 'undefined') && (typeof vimsical.re_frame !== 'undefined') && (typeof vimsical.re_frame.cofx !== 'undefined') && (typeof vimsical.re_frame.cofx.inject !== 'undefined') && (typeof vimsical.re_frame.cofx.inject.inject !== 'undefined')){
} else {
/**
 * Inject the `:sub` cofx.
 * 
 *   If `query-vector-or-event->query-vector-fn` is a subscription vector, subscribe and
 *   dereference that subscription before assoc'ing its value in the coeffects map
 *   under the id of the subscription and disposing of it.
 * 
 *   If `query-vector-or-event->query-vector-fn` is a fn, it should take a single
 *   argument which is the event args vector for that handler (similar to the
 *   2-arity of `re-frame.core/reg-sub`). Its return value should be a query-vector
 *   or nil. From there on the behavior is similar to when passing a query-vector.
 * 
 *   NOTE that if there are no components subscribed to that subscription the cofx
 *   will dispose of it in order to prevent leaks. However there is a performance
 *   penalty to doing this since we pay for a re-frame subscription cache miss
 *   every time we inject it. In such cases the cofx will log a warning which can
 *   be ignored by setting `:ignore-dispose` on the subscription vector's meta. A
 *   rule of thumb for what to do here would be that if an injected sub is disposed
 *   of very often, we should either rework the subscription graph so that it ends
 *   up used by a component and thus cached, or we should extract the db lookup
 *   logic into a function that can be used to get the value straight from the db
 *   inside the handler. It seems safe to decide to ignore the warning when the
 *   disposal doesn't happen too often and it is just more convenient to reuse the
 *   subscription's logic.
 * 
 *   Examples:
 * 
 *   (require '[vimsical.re-frame.cofx.inject :as inject])
 * 
 *   ;; Injecting a simple subscription:
 * 
 *   (re-frame/reg-sub ::simple ...)
 * 
 *   (re-frame/reg-event-fx
 * ::simple-handler
 * [(re-frame/inject-cofx ::inject/sub [::simple]]]
 * (fn [{:as cofx {::keys [simple]} params]
 *   ...)
 * 
 * 
 *   ;; Injecting a dynamic subscription depending on the event parameters:
 * 
 *   (re-frame/reg-sub ::dynamic (fn [_ [_ arg1 arg2]] ...))
 * 
 *   (re-frame/reg-event-fx
 * ::dynamic-handler
 * [(re-frame/inject-cofx ::inject/sub
 *    (fn [[_ arg1 arg2]]
 *      ...
 *      [::dynamic arg1 arg2]))]
 * (fn [{:as cofx {::keys [dynamic]} [_ arg1 arg-2]]
 *   ...)
 *   
 */
vimsical.re_frame.cofx.inject.inject = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29895 = cljs.core.get_global_hierarchy;
return (fexpr__29895.cljs$core$IFn$_invoke$arity$0 ? fexpr__29895.cljs$core$IFn$_invoke$arity$0() : fexpr__29895.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("vimsical.re-frame.cofx.inject","inject"),(function (coeffects,query_vector_or_event__GT_query_vector_fn){
if(cljs.core.vector_QMARK_(query_vector_or_event__GT_query_vector_fn)){
return new cljs.core.Keyword("vimsical.re-frame.cofx.inject","query-vector","vimsical.re-frame.cofx.inject/query-vector",-2122974239);
} else {
if(cljs.core.ifn_QMARK_(query_vector_or_event__GT_query_vector_fn)){
return new cljs.core.Keyword("vimsical.re-frame.cofx.inject","event->query-vector-fn","vimsical.re-frame.cofx.inject/event->query-vector-fn",786631585);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
vimsical.re_frame.cofx.inject.inject.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("vimsical.re-frame.cofx.inject","query-vector","vimsical.re-frame.cofx.inject/query-vector",-2122974239),(function (coeffects,p__29901){
var vec__29903 = p__29901;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(0),null);
var query_vector = vec__29903;
var sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(query_vector);
var val = cljs.core.deref(sub);
vimsical.re_frame.cofx.inject.dispose_maybe(query_vector,sub);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,id,val);
}));
vimsical.re_frame.cofx.inject.inject.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("vimsical.re-frame.cofx.inject","event->query-vector-fn","vimsical.re-frame.cofx.inject/event->query-vector-fn",786631585),(function (p__29906,event__GT_query_vector_fn){
var map__29907 = p__29906;
var map__29907__$1 = cljs.core.__destructure_map(map__29907);
var coeffects = map__29907__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29907__$1,new cljs.core.Keyword(null,"event","event",301435442));
var temp__5806__auto__ = (event__GT_query_vector_fn.cljs$core$IFn$_invoke$arity$1 ? event__GT_query_vector_fn.cljs$core$IFn$_invoke$arity$1(event) : event__GT_query_vector_fn.call(null,event));
if((temp__5806__auto__ == null)){
return coeffects;
} else {
var vec__29909 = temp__5806__auto__;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(0),null);
var query_vector = vec__29909;
var sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(query_vector);
var val = cljs.core.deref(sub);
vimsical.re_frame.cofx.inject.dispose_maybe(query_vector,sub);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,id,val);
}
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("vimsical.re-frame.cofx.inject","sub","vimsical.re-frame.cofx.inject/sub",-22900579),vimsical.re_frame.cofx.inject.inject);

//# sourceMappingURL=vimsical.re_frame.cofx.inject.js.map
