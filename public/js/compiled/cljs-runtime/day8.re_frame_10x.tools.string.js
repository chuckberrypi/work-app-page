goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___75949 = arguments.length;
var i__5770__auto___75950 = (0);
while(true){
if((i__5770__auto___75950 < len__5769__auto___75949)){
args__5775__auto__.push((arguments[i__5770__auto___75950]));

var G__75951 = (i__5770__auto___75950 + (1));
i__5770__auto___75950 = G__75951;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__75938){
var vec__75939 = p__75938;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75939,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq75935){
var G__75936 = cljs.core.first(seq75935);
var seq75935__$1 = cljs.core.next(seq75935);
var G__75937 = cljs.core.first(seq75935__$1);
var seq75935__$2 = cljs.core.next(seq75935__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75936,G__75937,seq75935__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___75952 = arguments.length;
var i__5770__auto___75953 = (0);
while(true){
if((i__5770__auto___75953 < len__5769__auto___75952)){
args__5775__auto__.push((arguments[i__5770__auto___75953]));

var G__75954 = (i__5770__auto___75953 + (1));
i__5770__auto___75953 = G__75954;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__75945){
var vec__75946 = p__75945;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75946,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq75942){
var G__75943 = cljs.core.first(seq75942);
var seq75942__$1 = cljs.core.next(seq75942);
var G__75944 = cljs.core.first(seq75942__$1);
var seq75942__$2 = cljs.core.next(seq75942__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75943,G__75944,seq75942__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
