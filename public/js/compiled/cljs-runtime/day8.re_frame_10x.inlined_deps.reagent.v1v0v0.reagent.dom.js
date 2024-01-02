goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__52378 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52379 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52379);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__52382 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52383 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52383);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52382);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52378);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(comp,container,null);
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
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__52389 = arguments.length;
switch (G__52389) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var vec__52391 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52391,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52391,(1),null);
var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
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
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var seq__52400_52422 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__52401_52423 = null;
var count__52402_52424 = (0);
var i__52403_52425 = (0);
while(true){
if((i__52403_52425 < count__52402_52424)){
var vec__52410_52426 = chunk__52401_52423.cljs$core$IIndexed$_nth$arity$2(null,i__52403_52425);
var container_52427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52410_52426,(0),null);
var comp_52428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52410_52426,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_52428,container_52427);


var G__52429 = seq__52400_52422;
var G__52430 = chunk__52401_52423;
var G__52431 = count__52402_52424;
var G__52432 = (i__52403_52425 + (1));
seq__52400_52422 = G__52429;
chunk__52401_52423 = G__52430;
count__52402_52424 = G__52431;
i__52403_52425 = G__52432;
continue;
} else {
var temp__5804__auto___52433 = cljs.core.seq(seq__52400_52422);
if(temp__5804__auto___52433){
var seq__52400_52434__$1 = temp__5804__auto___52433;
if(cljs.core.chunked_seq_QMARK_(seq__52400_52434__$1)){
var c__5568__auto___52435 = cljs.core.chunk_first(seq__52400_52434__$1);
var G__52436 = cljs.core.chunk_rest(seq__52400_52434__$1);
var G__52437 = c__5568__auto___52435;
var G__52438 = cljs.core.count(c__5568__auto___52435);
var G__52439 = (0);
seq__52400_52422 = G__52436;
chunk__52401_52423 = G__52437;
count__52402_52424 = G__52438;
i__52403_52425 = G__52439;
continue;
} else {
var vec__52413_52440 = cljs.core.first(seq__52400_52434__$1);
var container_52441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52413_52440,(0),null);
var comp_52442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52413_52440,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_52442,container_52441);


var G__52443 = cljs.core.next(seq__52400_52434__$1);
var G__52444 = null;
var G__52445 = (0);
var G__52446 = (0);
seq__52400_52422 = G__52443;
chunk__52401_52423 = G__52444;
count__52402_52424 = G__52445;
i__52403_52425 = G__52446;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.js.map
