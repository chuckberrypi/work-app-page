goog.provide('rewrite_clj.custom_zipper.utils');
rewrite_clj.custom_zipper.utils.update_in_path = (function rewrite_clj$custom_zipper$utils$update_in_path(p__58161,k,f){
var vec__58162 = p__58161;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58162,(1),null);
var loc = vec__58162;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,k);
if(cljs.core.seq(v)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_right = (function rewrite_clj$custom_zipper$utils$remove_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__58165 = loc;
var map__58165__$1 = cljs.core.__destructure_map(map__58165);
var vec__58166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__58167 = cljs.core.seq(vec__58166);
var first__58168 = cljs.core.first(seq__58167);
var seq__58167__$1 = cljs.core.next(seq__58167);
var _r = first__58168;
var rs = seq__58167__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"right","right",-452581833),rs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0));
} else {
return rewrite_clj.custom_zipper.utils.update_in_path(loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
}
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_left = (function rewrite_clj$custom_zipper$utils$remove_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__58169 = loc;
var map__58169__$1 = cljs.core.__destructure_map(map__58169);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var temp__5802__auto__ = cljs.core.peek(left);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__58171 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0));
} else {
return loc;
}
} else {
return rewrite_clj.custom_zipper.utils.update_in_path(loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_right_while = (function rewrite_clj$custom_zipper$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right(zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var rloc = temp__5802__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc) : p_QMARK_.call(null,rloc)))){
var G__58198 = rewrite_clj.custom_zipper.utils.remove_right(zloc__$1);
zloc__$1 = G__58198;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_left_while = (function rewrite_clj$custom_zipper$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left(zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(lloc) : p_QMARK_.call(null,lloc)))){
var G__58200 = rewrite_clj.custom_zipper.utils.remove_left(zloc__$1);
zloc__$1 = G__58200;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_left = (function rewrite_clj$custom_zipper$utils$remove_and_move_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__58177 = loc;
var map__58177__$1 = cljs.core.__destructure_map(map__58177);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58177__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.seq(left)){
var vec__58178 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58178,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58178,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
} else {
return null;
}
} else {
var vec__58181 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(0),null);
var map__58184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(1),null);
var map__58184__$1 = cljs.core.__destructure_map(map__58184);
var path = map__58184__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"l","l",1395893423));
if(cljs.core.seq(l)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta(loc));
} else {
return null;
}
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_right = (function rewrite_clj$custom_zipper$utils$remove_and_move_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__58186 = loc;
var map__58186__$1 = cljs.core.__destructure_map(map__58186);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.seq(right)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),cljs.core.first(right),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.next(right)], 0));
} else {
return null;
}
} else {
var vec__58187 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58187,(0),null);
var map__58190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58187,(1),null);
var map__58190__$1 = cljs.core.__destructure_map(map__58190);
var path = map__58190__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58190__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.seq(r)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta(loc));
} else {
return null;
}
}
});
/**
 * Remove the current node and move up.
 *  `[a [b |c d]] -> [a |[b d]]`
 *  `[a [|b c d]] -> [a |[c d]]`
 */
rewrite_clj.custom_zipper.utils.remove_and_move_up = (function rewrite_clj$custom_zipper$utils$remove_and_move_up(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__58191 = loc;
var map__58191__$1 = cljs.core.__destructure_map(map__58191);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58191__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.seq(left)){
return rewrite_clj.custom_zipper.core.up(rewrite_clj.custom_zipper.core.remove(loc));
} else {
return rewrite_clj.custom_zipper.core.remove(loc);
}
} else {
var vec__58192 = loc;
var _node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58192,(0),null);
var map__58195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58192,(1),null);
var map__58195__$1 = cljs.core.__destructure_map(map__58195);
var path = map__58195__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((ppath == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((cljs.core.count(l) > (0))){
return rewrite_clj.custom_zipper.core.up(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc)));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.custom_zipper.core.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__5043__auto__ = ppath;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__5043__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
}
});

//# sourceMappingURL=rewrite_clj.custom_zipper.utils.js.map
