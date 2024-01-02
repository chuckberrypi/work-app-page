goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__31325 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31326 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31326);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__31327 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__31328 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__31328);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31327);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__31325);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__31330 = arguments.length;
switch (G__31330) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__31331 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31331,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31331,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__31334_31351 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__31335_31352 = null;
var count__31336_31353 = (0);
var i__31337_31354 = (0);
while(true){
if((i__31337_31354 < count__31336_31353)){
var vec__31344_31355 = chunk__31335_31352.cljs$core$IIndexed$_nth$arity$2(null,i__31337_31354);
var container_31356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31344_31355,(0),null);
var comp_31357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31344_31355,(1),null);
reagent.dom.re_render_component(comp_31357,container_31356);


var G__31358 = seq__31334_31351;
var G__31359 = chunk__31335_31352;
var G__31360 = count__31336_31353;
var G__31361 = (i__31337_31354 + (1));
seq__31334_31351 = G__31358;
chunk__31335_31352 = G__31359;
count__31336_31353 = G__31360;
i__31337_31354 = G__31361;
continue;
} else {
var temp__5804__auto___31362 = cljs.core.seq(seq__31334_31351);
if(temp__5804__auto___31362){
var seq__31334_31363__$1 = temp__5804__auto___31362;
if(cljs.core.chunked_seq_QMARK_(seq__31334_31363__$1)){
var c__5568__auto___31364 = cljs.core.chunk_first(seq__31334_31363__$1);
var G__31365 = cljs.core.chunk_rest(seq__31334_31363__$1);
var G__31366 = c__5568__auto___31364;
var G__31367 = cljs.core.count(c__5568__auto___31364);
var G__31368 = (0);
seq__31334_31351 = G__31365;
chunk__31335_31352 = G__31366;
count__31336_31353 = G__31367;
i__31337_31354 = G__31368;
continue;
} else {
var vec__31347_31369 = cljs.core.first(seq__31334_31363__$1);
var container_31370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31347_31369,(0),null);
var comp_31371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31347_31369,(1),null);
reagent.dom.re_render_component(comp_31371,container_31370);


var G__31372 = cljs.core.next(seq__31334_31363__$1);
var G__31373 = null;
var G__31374 = (0);
var G__31375 = (0);
seq__31334_31351 = G__31372;
chunk__31335_31352 = G__31373;
count__31336_31353 = G__31374;
i__31337_31354 = G__31375;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
