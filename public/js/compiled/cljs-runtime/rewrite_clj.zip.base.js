goog.provide('rewrite_clj.zip.base');
/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-clj.parse]]).
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(var_args){
var G__58238 = arguments.length;
switch (G__58238) {
case 1:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.options.set_opts((cljs.core.truth_(new cljs.core.Keyword(null,"track-position?","track-position?",1860535489).cljs$core$IFn$_invoke$arity$1(opts))?rewrite_clj.custom_zipper.core.custom_zipper(node):rewrite_clj.custom_zipper.core.zipper(node)),opts);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-clj.parse]]),
 *   and move to the first non-whitespace/non-comment child. If node is not forms node, is wrapped in forms node
 *   for a consistent root.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(var_args){
var G__58240 = arguments.length;
switch (G__58240) {
case 1:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
var node__$1 = node;
var opts__$1 = opts;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node__$1),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node__$1,opts__$1);
var or__5045__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_clj.custom_zipper.core.down(top));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return top;
}
} else {
var G__58268 = rewrite_clj.node.forms.forms_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node__$1], null));
var G__58269 = opts__$1;
node__$1 = G__58268;
opts__$1 = G__58269;
continue;
}
break;
}
}));

(rewrite_clj.zip.base.edn.cljs$lang$maxFixedArity = 2);

/**
 * Return tag of current node in `zloc`.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__58241 = zloc;
var G__58241__$1 = (((G__58241 == null))?null:rewrite_clj.custom_zipper.core.node(G__58241));
if((G__58241__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.tag(G__58241__$1);
}
});
/**
 * Return true if current node's element type in `zloc` can be [[sexpr]]-ed.
 * 
 * See [related docs in user guide](/doc/01-user-guide.adoc#not-all-clojure-is-sexpr-able)
 */
rewrite_clj.zip.base.sexpr_able_QMARK_ = (function rewrite_clj$zip$base$sexpr_able_QMARK_(zloc){
var G__58242 = zloc;
var G__58242__$1 = (((G__58242 == null))?null:rewrite_clj.custom_zipper.core.node(G__58242));
if((G__58242__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr_able_QMARK_(G__58242__$1);
}
});
/**
 * Return s-expression (the Clojure form) of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__58247 = zloc;
var G__58247__$1 = (((G__58247 == null))?null:rewrite_clj.custom_zipper.core.node(G__58247));
if((G__58247__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$2(G__58247__$1,rewrite_clj.zip.options.get_opts(zloc));
}
});
/**
 * Return s-expression (the Clojure forms) of children of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__58248 = zloc;
var G__58248__$1 = (((G__58248 == null))?null:rewrite_clj.custom_zipper.core.node(G__58248));
if((G__58248__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.child_sexprs.cljs$core$IFn$_invoke$arity$2(G__58248__$1,rewrite_clj.zip.options.get_opts(zloc));
}
});
/**
 * Return length of printable [[string]] of current node in `zloc`.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__5045__auto__ = (function (){var G__58249 = zloc;
var G__58249__$1 = (((G__58249 == null))?null:rewrite_clj.custom_zipper.core.node(G__58249));
if((G__58249__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.length(G__58249__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_clj.zip.base.value = (function rewrite_clj$zip$base$value(zloc){
var G__58250 = zloc;
var G__58250__$1 = (((G__58250 == null))?null:rewrite_clj.custom_zipper.core.node(G__58250));
if((G__58250__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.value(G__58250__$1);
}
});
/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(var_args){
var G__58253 = arguments.length;
switch (G__58253) {
case 1:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var G__58254 = s;
var G__58254__$1 = (((G__58254 == null))?null:rewrite_clj.parser.parse_string_all(G__58254));
if((G__58254__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2(G__58254__$1,opts);
}
}));

(rewrite_clj.zip.base.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__58255 = zloc;
var G__58255__$1 = (((G__58255 == null))?null:rewrite_clj.custom_zipper.core.node(G__58255));
if((G__58255__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string(G__58255__$1);
}
});
/**
 * DEPRECATED. Renamed to [[string]].
 */
rewrite_clj.zip.base.__GT_string = (function rewrite_clj$zip$base$__GT_string(zloc){
return rewrite_clj.zip.base.string(zloc);
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__58257 = zloc;
var G__58257__$1 = (((G__58257 == null))?null:rewrite_clj.custom_zipper.core.root(G__58257));
if((G__58257__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string(G__58257__$1);
}
});
/**
 * DEPRECATED. Renamed to [[root-string]].
 */
rewrite_clj.zip.base.__GT_root_string = (function rewrite_clj$zip$base$__GT_root_string(zloc){
return rewrite_clj.zip.base.root_string(zloc);
});
rewrite_clj.zip.base.print_BANG_ = (function rewrite_clj$zip$base$print_BANG_(s,_writer){
return cljs.core.string_print(s);
});
/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print = (function rewrite_clj$zip$base$print(var_args){
var G__58259 = arguments.length;
switch (G__58259) {
case 2:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__58261 = zloc;
var G__58261__$1 = (((G__58261 == null))?null:rewrite_clj.zip.base.string(G__58261));
if((G__58261__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_(G__58261__$1,writer);
}
}));

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.base.print.cljs$lang$maxFixedArity = 2);

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print_root = (function rewrite_clj$zip$base$print_root(var_args){
var G__58263 = arguments.length;
switch (G__58263) {
case 2:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__58264 = zloc;
var G__58264__$1 = (((G__58264 == null))?null:rewrite_clj.zip.base.root_string(G__58264));
if((G__58264__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_(G__58264__$1,writer);
}
}));

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.base.print_root.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.zip.base.js.map
