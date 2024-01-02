goog.provide('rewrite_clj.zip.whitespace');
/**
 * Returns true when the current the node in `zloc` is a Clojure whitespace (which includes the comma).
 */
rewrite_clj.zip.whitespace.whitespace_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_QMARK_(zloc){
var G__58141 = zloc;
var G__58141__$1 = (((G__58141 == null))?null:rewrite_clj.custom_zipper.core.node(G__58141));
if((G__58141__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace.whitespace_QMARK_(G__58141__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a linebreak.
 */
rewrite_clj.zip.whitespace.linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$linebreak_QMARK_(zloc){
var G__58143 = zloc;
var G__58143__$1 = (((G__58143 == null))?null:rewrite_clj.custom_zipper.core.node(G__58143));
if((G__58143__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace.linebreak_QMARK_(G__58143__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a comment.
 */
rewrite_clj.zip.whitespace.comment_QMARK_ = (function rewrite_clj$zip$whitespace$comment_QMARK_(zloc){
var G__58144 = zloc;
var G__58144__$1 = (((G__58144 == null))?null:rewrite_clj.custom_zipper.core.node(G__58144));
if((G__58144__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment.comment_QMARK_(G__58144__$1);
}
});
/**
 * Returns true when current node in `zloc` is a whitespace but not a linebreak.
 */
rewrite_clj.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__5043__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(rewrite_clj.zip.whitespace.linebreak_QMARK_(zloc));
} else {
return and__5043__auto__;
}
});
/**
 * Returns true when current node in `zloc` is whitespace or a comment.
 */
rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__58145 = zloc;
var G__58145__$1 = (((G__58145 == null))?null:rewrite_clj.custom_zipper.core.node(G__58145));
if((G__58145__$1 == null)){
return null;
} else {
return rewrite_clj.node.extras.whitespace_or_comment_QMARK_(G__58145__$1);
}
});
/**
 * Return zipper with location moved to first location not satisfying predicate `p?` starting from the node in
 * `zloc` and traversing by function `f`.
 */
rewrite_clj.zip.whitespace.skip = (function rewrite_clj$zip$whitespace$skip(f,p_QMARK_,zloc){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_clj.custom_zipper.core.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(f,zloc)))));
});
/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc`
 * and traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-clj.zip/right]]
 */
rewrite_clj.zip.whitespace.skip_whitespace = (function rewrite_clj$zip$whitespace$skip_whitespace(var_args){
var G__58149 = arguments.length;
switch (G__58149) {
case 1:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.right,zloc);
}));

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.whitespace.skip(f,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
}));

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc` traversing left.
 */
rewrite_clj.zip.whitespace.skip_whitespace_left = (function rewrite_clj$zip$whitespace$skip_whitespace_left(zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.left,zloc);
});
/**
 * Return zipper with `n` space whitespace node inserted to the left of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_space_left = (function rewrite_clj$zip$whitespace$insert_space_left(var_args){
var G__58174 = arguments.length;
switch (G__58174) {
case 1:
return rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_clj.custom_zipper.core.insert_left(zloc,rewrite_clj.node.whitespace.spaces(n));
} else {
return zloc;
}
}));

(rewrite_clj.zip.whitespace.insert_space_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` space whitespace node inserted to the right of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_space_right = (function rewrite_clj$zip$whitespace$insert_space_right(var_args){
var G__58197 = arguments.length;
switch (G__58197) {
case 1:
return rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_clj.custom_zipper.core.insert_right(zloc,rewrite_clj.node.whitespace.spaces(n));
} else {
return zloc;
}
}));

(rewrite_clj.zip.whitespace.insert_space_right.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the left of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_newline_left = (function rewrite_clj$zip$whitespace$insert_newline_left(var_args){
var G__58205 = arguments.length;
switch (G__58205) {
case 1:
return rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.custom_zipper.core.insert_left(zloc,rewrite_clj.node.whitespace.newlines(n));
}));

(rewrite_clj.zip.whitespace.insert_newline_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the right of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_newline_right = (function rewrite_clj$zip$whitespace$insert_newline_right(var_args){
var G__58208 = arguments.length;
switch (G__58208) {
case 1:
return rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.custom_zipper.core.insert_right(zloc,rewrite_clj.node.whitespace.newlines(n));
}));

(rewrite_clj.zip.whitespace.insert_newline_right.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-left]].
 */
rewrite_clj.zip.whitespace.prepend_space = (function rewrite_clj$zip$whitespace$prepend_space(var_args){
var G__58211 = arguments.length;
switch (G__58211) {
case 2:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-right]].
 */
rewrite_clj.zip.whitespace.append_space = (function rewrite_clj$zip$whitespace$append_space(var_args){
var G__58213 = arguments.length;
switch (G__58213) {
case 2:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.whitespace.append_space.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-newline-left]].
 */
rewrite_clj.zip.whitespace.prepend_newline = (function rewrite_clj$zip$whitespace$prepend_newline(var_args){
var G__58215 = arguments.length;
switch (G__58215) {
case 2:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-newline-right]].
 */
rewrite_clj.zip.whitespace.append_newline = (function rewrite_clj$zip$whitespace$append_newline(var_args){
var G__58218 = arguments.length;
switch (G__58218) {
case 2:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.whitespace.append_newline.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.zip.whitespace.js.map
