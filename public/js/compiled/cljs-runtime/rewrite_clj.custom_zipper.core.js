goog.provide('rewrite_clj.custom_zipper.core');
rewrite_clj.custom_zipper.core.custom_zipper = (function rewrite_clj$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),root,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.List.EMPTY], null);
});
rewrite_clj.custom_zipper.core.zipper = (function rewrite_clj$custom_zipper$core$zipper(root){
return clojure.zip.zipper(rewrite_clj.node.protocols.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.protocols.children),rewrite_clj.node.protocols.replace_children,root);
});
rewrite_clj.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$core$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625).cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.node = (function rewrite_clj$custom_zipper$core$node(G__57123){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57123))){
var zloc = G__57123;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node(G__57123);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_clj.custom_zipper.core.branch_QMARK_ = (function rewrite_clj$custom_zipper$core$branch_QMARK_(G__57125){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57125))){
var zloc = G__57125;
return rewrite_clj.node.protocols.inner_QMARK_(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_(G__57125);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_clj.custom_zipper.core.children = (function rewrite_clj$custom_zipper$core$children(G__57126){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57126))){
var map__57129 = G__57126;
var map__57129__$1 = cljs.core.__destructure_map(map__57129);
var zloc = map__57129__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57129__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
return cljs.core.seq(rewrite_clj.node.protocols.children(node));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children(G__57126);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_clj.custom_zipper.core.make_node = (function rewrite_clj$custom_zipper$core$make_node(G__57130,G__57131,G__57132){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57130))){
var _zloc = G__57130;
var node = G__57131;
var children = G__57132;
return rewrite_clj.node.protocols.replace_children(node,children);
} else {
return clojure.zip.make_node(G__57130,G__57131,G__57132);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position = (function rewrite_clj$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 *   `end-col` is exclusive.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position_span = (function rewrite_clj$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_clj.custom_zipper.core.position(zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_clj.node.protocols._PLUS_extent(start_pos,rewrite_clj.node.protocols.extent(rewrite_clj.custom_zipper.core.node(zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.lefts = (function rewrite_clj$custom_zipper$core$lefts(G__57134){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57134))){
var zloc = G__57134;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts(G__57134);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_clj.custom_zipper.core.down = (function rewrite_clj$custom_zipper$core$down(G__57136){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57136))){
var zloc = G__57136;
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
var map__57139 = zloc;
var map__57139__$1 = cljs.core.__destructure_map(map__57139);
var vec__57140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57139__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57140,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57140,(1),null);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57139__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__57143 = rewrite_clj.custom_zipper.core.children(zloc);
var seq__57144 = cljs.core.seq(vec__57143);
var first__57145 = cljs.core.first(seq__57144);
var seq__57144__$1 = cljs.core.next(seq__57144);
var c = first__57145;
var cnext = seq__57144__$1;
var cs = vec__57143;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_clj.node.protocols.leader_length(node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null),cljs.core.meta(zloc));
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down(G__57136);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_clj.custom_zipper.core.up = (function rewrite_clj$custom_zipper$core$up(G__57146){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57146))){
var zloc = G__57146;
var map__57148 = zloc;
var map__57148__$1 = cljs.core.__destructure_map(map__57148);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57148__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,left),cljs.core.cons(node,right)))], 0));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up(G__57146);
}
});
/**
 * Zips all the way up `zloc` and returns the root node, reflecting any changes.
 */
rewrite_clj.custom_zipper.core.root = (function rewrite_clj$custom_zipper$core$root(G__57153){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57153))){
var zloc = G__57153;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return rewrite_clj.custom_zipper.core.node(zloc);
} else {
var p = rewrite_clj.custom_zipper.core.up(zloc);
if(cljs.core.truth_(p)){
var G__57258 = p;
G__57153 = G__57258;
continue;
} else {
return rewrite_clj.custom_zipper.core.node(zloc);
}
}
} else {
return clojure.zip.root(G__57153);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.right = (function rewrite_clj$custom_zipper$core$right(G__57161){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57161))){
var zloc = G__57161;
var map__57167 = zloc;
var map__57167__$1 = cljs.core.__destructure_map(map__57167);
var vec__57168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__57169 = cljs.core.seq(vec__57168);
var first__57170 = cljs.core.first(seq__57169);
var seq__57169__$1 = cljs.core.next(seq__57169);
var r = first__57170;
var rnext = seq__57169__$1;
var right = vec__57168;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57167__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return right;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(node))], 0));
} else {
return null;
}
} else {
return clojure.zip.right(G__57161);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.rightmost = (function rewrite_clj$custom_zipper$core$rightmost(G__57176){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57176))){
var zloc = G__57176;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var next = temp__5802__auto__;
var G__57259 = next;
G__57176 = G__57259;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost(G__57176);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.left = (function rewrite_clj$custom_zipper$core$left(G__57177){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57177))){
var zloc = G__57177;
var map__57180 = zloc;
var map__57180__$1 = cljs.core.__destructure_map(map__57180);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57180__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57180__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57180__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57180__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(left);
} else {
return and__5043__auto__;
}
})())){
var vec__57184 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57184,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57184,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(node,right)], 0));
} else {
return null;
}
} else {
return clojure.zip.left(G__57177);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.leftmost = (function rewrite_clj$custom_zipper$core$leftmost(G__57191){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57191))){
var zloc = G__57191;
var map__57193 = zloc;
var map__57193__$1 = cljs.core.__destructure_map(map__57193);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57193__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57193__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57193__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57193__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(left);
} else {
return and__5043__auto__;
}
})())){
var vec__57196 = cljs.core.first(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57196,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57196,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right], 0))], 0));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost(G__57191);
}
});
/**
 * Returns zipper with `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_clj.custom_zipper.core.insert_left = (function rewrite_clj$custom_zipper$core$insert_left(G__57199,G__57200){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57199))){
var zloc = G__57199;
var item = G__57200;
var map__57205 = zloc;
var map__57205__$1 = cljs.core.__destructure_map(map__57205);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57205__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57205__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57205__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(item))], 0));
}
} else {
return clojure.zip.insert_left(G__57199,G__57200);
}
});
/**
 * Returns zipper with `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_right = (function rewrite_clj$custom_zipper$core$insert_right(G__57210,G__57211){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57210))){
var zloc = G__57210;
var item = G__57211;
var map__57213 = zloc;
var map__57213__$1 = cljs.core.__destructure_map(map__57213);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57213__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57213__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(item,right)], 0));
}
} else {
return clojure.zip.insert_right(G__57210,G__57211);
}
});
/**
 * Returns zipper with `node` replacing current node in `zloc`, without moving location.
 */
rewrite_clj.custom_zipper.core.replace = (function rewrite_clj$custom_zipper$core$replace(G__57214,G__57215){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57214))){
var zloc = G__57214;
var node = G__57215;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),node], 0));
} else {
return clojure.zip.replace(G__57214,G__57215);
}
});
/**
 * Returns zipper with value of `(apply f current-node args)` replacing current node in `zloc`.
 * 
 * The result of `f` should be a rewrite-clj node.
 */
rewrite_clj.custom_zipper.core.edit = (function rewrite_clj$custom_zipper$core$edit(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57263 = arguments.length;
var i__5770__auto___57264 = (0);
while(true){
if((i__5770__auto___57264 < len__5769__auto___57263)){
args__5775__auto__.push((arguments[i__5770__auto___57264]));

var G__57265 = (i__5770__auto___57264 + (1));
i__5770__auto___57264 = G__57265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return rewrite_clj.custom_zipper.core.replace(zloc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_clj.custom_zipper.core.node(zloc),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_clj.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq57216){
var G__57217 = cljs.core.first(seq57216);
var seq57216__$1 = cljs.core.next(seq57216);
var G__57218 = cljs.core.first(seq57216__$1);
var seq57216__$2 = cljs.core.next(seq57216__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57217,G__57218,seq57216__$2);
}));

/**
 * Returns zipper with `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_child = (function rewrite_clj$custom_zipper$core$insert_child(G__57222,G__57223){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57222))){
var zloc = G__57222;
var item = G__57223;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.cons(item,rewrite_clj.custom_zipper.core.children(zloc))));
} else {
return clojure.zip.insert_child(G__57222,G__57223);
}
});
/**
 * Returns zipper with `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_clj.custom_zipper.core.append_child = (function rewrite_clj$custom_zipper$core$append_child(G__57226,G__57227){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57226))){
var zloc = G__57226;
var item = G__57227;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.children(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child(G__57226,G__57227);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_clj.custom_zipper.core.next = (function rewrite_clj$custom_zipper$core$next(G__57228){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57228))){
var zloc = G__57228;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return zloc;
} else {
var or__5045__auto__ = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.up(p))){
var or__5045__auto____$2 = rewrite_clj.custom_zipper.core.right(rewrite_clj.custom_zipper.core.up(p));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var G__57266 = rewrite_clj.custom_zipper.core.up(p);
p = G__57266;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"end?","end?",-1423391609),true);
}
break;
}
}
}
}
} else {
return clojure.zip.next(G__57228);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_clj.custom_zipper.core.prev = (function rewrite_clj$custom_zipper$core$prev(G__57230){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57230))){
var zloc = G__57230;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5802__auto____$1 = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var child = temp__5802__auto____$1;
var G__57267 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__57267;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_clj.custom_zipper.core.up(zloc);
}
} else {
return clojure.zip.prev(G__57230);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_clj.custom_zipper.core.end_QMARK_ = (function rewrite_clj$custom_zipper$core$end_QMARK_(G__57236){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57236))){
var zloc = G__57236;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_(G__57236);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_clj.custom_zipper.core.remove = (function rewrite_clj$custom_zipper$core$remove(G__57238){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__57238))){
var zloc = G__57238;
var map__57240 = zloc;
var map__57240__$1 = cljs.core.__destructure_map(map__57240);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57240__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
var zloc__$1 = (function (){var vec__57245 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57245,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57245,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
})();
while(true){
var temp__5802__auto__ = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
var G__57269 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__57269;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),right)], 0));
}
}
} else {
return clojure.zip.remove(G__57238);
}
});

//# sourceMappingURL=rewrite_clj.custom_zipper.core.js.map
