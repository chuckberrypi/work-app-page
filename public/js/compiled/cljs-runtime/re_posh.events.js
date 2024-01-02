goog.provide('re_posh.events');
re_posh.events.reg_event_ds = (function re_posh$events$reg_event_ds(var_args){
var G__29042 = arguments.length;
switch (G__29042) {
case 3:
return re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$3 = (function (event_name,interceptors,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(event_name,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859))], null),interceptors)),(function (p__29051,signal){
var map__29052 = p__29051;
var map__29052__$1 = cljs.core.__destructure_map(map__29052);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29052__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),(handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(ds,signal) : handler.call(null,ds,signal))], null);
}));
}));

(re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$2 = (function (event_name,handler){
return re_posh.events.reg_event_ds.cljs$core$IFn$_invoke$arity$3(event_name,cljs.core.PersistentVector.EMPTY,handler);
}));

(re_posh.events.reg_event_ds.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=re_posh.events.js.map
