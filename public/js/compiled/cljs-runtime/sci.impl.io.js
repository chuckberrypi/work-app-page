goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__62708 = arguments.length;
switch (G__62708) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__62736 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62737 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62737);

try{var G__62739 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__62739);

return G__62739;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62736);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__62740 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62741 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62741);

try{var G__62742 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__62742);

return G__62742;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62740);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__62750 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62751 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62751);

try{var G__62753 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__62753);

return G__62753;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62750);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__62755 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__62756 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__62756);

try{var G__62758 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__62758);

return G__62758;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__62755);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__62762 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__62763 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62763);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62762);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63375 = arguments.length;
var i__5770__auto___63376 = (0);
while(true){
if((i__5770__auto___63376 < len__5769__auto___63375)){
args__5775__auto__.push((arguments[i__5770__auto___63376]));

var G__63377 = (i__5770__auto___63376 + (1));
i__5770__auto___63376 = G__63377;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62771 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62772 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62773 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62774 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62775 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62776 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62777 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62778 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62779 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62780 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62781 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62782 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62783 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62784 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62778);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62779);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62780);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62781);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62782);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62783);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62784);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62777);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62776);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62775);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62774);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62773);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62772);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62771);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq62767){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62767));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__62785 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__62786 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62786);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62785);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63405 = arguments.length;
var i__5770__auto___63406 = (0);
while(true){
if((i__5770__auto___63406 < len__5769__auto___63405)){
args__5775__auto__.push((arguments[i__5770__auto___63406]));

var G__63407 = (i__5770__auto___63406 + (1));
i__5770__auto___63406 = G__63407;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62804 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62805 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62806 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62807 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62808 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62809 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__62810 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62811 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62812 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62813 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62814 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62815 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62810);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62811);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62812);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62813);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62814);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62815);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62809);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62808);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62807);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62806);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62805);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62804);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq62788){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62788));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63423 = arguments.length;
var i__5770__auto___63424 = (0);
while(true){
if((i__5770__auto___63424 < len__5769__auto___63423)){
args__5775__auto__.push((arguments[i__5770__auto___63424]));

var G__63425 = (i__5770__auto___63424 + (1));
i__5770__auto___63424 = G__63425;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62824 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62825 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62826 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62827 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62828 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62829 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62830 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62831 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62832 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62833 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62834 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62835 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62836 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62837 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62831);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62832);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62833);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62834);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62835);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62836);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62837);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62830);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62829);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62828);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62827);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62826);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62825);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62824);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq62816){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62816));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63441 = arguments.length;
var i__5770__auto___63442 = (0);
while(true){
if((i__5770__auto___63442 < len__5769__auto___63441)){
args__5775__auto__.push((arguments[i__5770__auto___63442]));

var G__63446 = (i__5770__auto___63442 + (1));
i__5770__auto___63442 = G__63446;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62839 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62840 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62841 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62842 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62843 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62844 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__62845 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62846 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62847 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62848 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62849 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62850 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62845);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62846);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62847);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62848);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62849);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62850);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62844);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62843);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62842);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62841);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62840);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62839);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq62838){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62838));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63462 = arguments.length;
var i__5770__auto___63463 = (0);
while(true){
if((i__5770__auto___63463 < len__5769__auto___63462)){
args__5775__auto__.push((arguments[i__5770__auto___63463]));

var G__63467 = (i__5770__auto___63463 + (1));
i__5770__auto___63463 = G__63467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62852 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62853 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62854 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62855 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62856 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62857 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62858 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62859 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62860 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__62861 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62862 = null;
var _STAR_print_newline_STAR__temp_val__62863 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62858);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62859);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62860);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62861);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62862);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62863);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62857);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62856);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62855);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62854);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62853);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62852);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq62851){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62851));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63477 = arguments.length;
var i__5770__auto___63478 = (0);
while(true){
if((i__5770__auto___63478 < len__5769__auto___63477)){
args__5775__auto__.push((arguments[i__5770__auto___63478]));

var G__63482 = (i__5770__auto___63478 + (1));
i__5770__auto___63478 = G__63482;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__62879 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62880 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62881 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62882 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62883 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62884 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__62885 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62886 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62887 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62888 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62889 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62890 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62885);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62886);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62887);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62888);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62889);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62890);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62884);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62883);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62882);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62881);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62880);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62879);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq62871){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62871));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63498 = arguments.length;
var i__5770__auto___63502 = (0);
while(true){
if((i__5770__auto___63502 < len__5769__auto___63498)){
args__5775__auto__.push((arguments[i__5770__auto___63502]));

var G__63503 = (i__5770__auto___63502 + (1));
i__5770__auto___63502 = G__63503;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__62901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__62902 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__62903 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__62904 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__62905 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__62906 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__62907 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__62908 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__62909 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__62910 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__62911 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__62912 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__62913 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__62914 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62908);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__62909);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__62910);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__62911);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__62912);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__62913);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62914);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62907);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__62906);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__62905);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__62904);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__62903);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__62902);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62901);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq62895){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62895));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63522 = arguments.length;
var i__5770__auto___63523 = (0);
while(true){
if((i__5770__auto___63523 < len__5769__auto___63522)){
args__5775__auto__.push((arguments[i__5770__auto___63523]));

var G__63527 = (i__5770__auto___63523 + (1));
i__5770__auto___63523 = G__63527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__62923__auto__","s__62923__auto__",206547631,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__62924__auto__","x__62924__auto__",-499881360,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62923__auto__","s__62923__auto__",206547631,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__62924__auto__","x__62924__auto__",-499881360,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__62923__auto__","s__62923__auto__",206547631,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq62926){
var G__62929 = cljs.core.first(seq62926);
var seq62926__$1 = cljs.core.next(seq62926);
var G__62933 = cljs.core.first(seq62926__$1);
var seq62926__$2 = cljs.core.next(seq62926__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62929,G__62933,seq62926__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
