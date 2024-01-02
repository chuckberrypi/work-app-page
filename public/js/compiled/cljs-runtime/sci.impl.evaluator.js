goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__63744 = xs;
args__$2 = G__63744;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__63745 = xs;
args__$2 = G__63745;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__62679 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__63746 = ctx__$1;
var G__63747 = bindings__$2;
var G__63748 = rest_let_bindings;
ctx__$1 = G__63746;
bindings__$1 = G__63747;
let_bindings__$1 = G__63748;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62679,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62679,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__63749 = nexprs;
exprs__$1 = G__63749;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__62695 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__62696 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__62695,G__62696) : sci.impl.utils.kw_identical_QMARK_.call(null,G__62695,G__62696));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62692_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__62692_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__62692_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62693_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__62693_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__62693_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__62697 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62697,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__62697;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__62699 = arguments.length;
switch (G__62699) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__62700 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62700,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62700,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__62709 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62709,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62709,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__62727 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__62728 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__62728);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__62727);
}}catch (e62712){if((e62712 instanceof Error)){
var e = e62712;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__62718 = ctx;
var G__62719 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__62720 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__62718,G__62719,G__62720) : sci.impl.evaluator.eval.call(null,G__62718,G__62719,G__62720));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__62722 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62722,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62722,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e62712;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62729_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__62729_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__62729_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62738_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__62738_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__62738_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__62749 = arguments.length;
switch (G__62749) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__62754 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__62754.cljs$core$IFn$_invoke$arity$3 ? fexpr__62754.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__62754.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___63753 = arguments.length;
var i__5770__auto___63754 = (0);
while(true){
if((i__5770__auto___63754 < len__5769__auto___63753)){
args__5775__auto__.push((arguments[i__5770__auto___63754]));

var G__63755 = (i__5770__auto___63754 + (1));
i__5770__auto___63754 = G__63755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62757_SHARP_){
if(((cljs.core.seq_QMARK_(p1__62757_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__62757_SHARP_))))){
return cljs.core.second(p1__62757_SHARP_);
} else {
return p1__62757_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__62789 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62789,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62789,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq62759){
var G__62760 = cljs.core.first(seq62759);
var seq62759__$1 = cljs.core.next(seq62759);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62760,seq62759__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__62876 = ctx;
var G__62877 = bindings;
var G__62878 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__62876,G__62877,G__62878) : sci.impl.evaluator.eval.call(null,G__62876,G__62877,G__62878));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__63772 = exprs__$3;
exprs__$2 = G__63772;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__63121 = cljs.core.count(args);
switch (G__63121) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg62925 = (function (){var G__63124 = ctx;
var G__63125 = bindings;
var G__63126 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63124,G__63125,G__63126) : sci.impl.evaluator.eval.call(null,G__63124,G__63125,G__63126));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg62925) : f.call(null,arg62925));

break;
case (2):
var arg62927 = (function (){var G__63129 = ctx;
var G__63130 = bindings;
var G__63131 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63129,G__63130,G__63131) : sci.impl.evaluator.eval.call(null,G__63129,G__63130,G__63131));
})();
var args__$1 = cljs.core.rest(args);
var arg62928 = (function (){var G__63132 = ctx;
var G__63133 = bindings;
var G__63134 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63132,G__63133,G__63134) : sci.impl.evaluator.eval.call(null,G__63132,G__63133,G__63134));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg62927,arg62928) : f.call(null,arg62927,arg62928));

break;
case (3):
var arg62930 = (function (){var G__63135 = ctx;
var G__63136 = bindings;
var G__63137 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63135,G__63136,G__63137) : sci.impl.evaluator.eval.call(null,G__63135,G__63136,G__63137));
})();
var args__$1 = cljs.core.rest(args);
var arg62931 = (function (){var G__63138 = ctx;
var G__63139 = bindings;
var G__63140 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63138,G__63139,G__63140) : sci.impl.evaluator.eval.call(null,G__63138,G__63139,G__63140));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62932 = (function (){var G__63141 = ctx;
var G__63142 = bindings;
var G__63143 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63141,G__63142,G__63143) : sci.impl.evaluator.eval.call(null,G__63141,G__63142,G__63143));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg62930,arg62931,arg62932) : f.call(null,arg62930,arg62931,arg62932));

break;
case (4):
var arg62934 = (function (){var G__63144 = ctx;
var G__63145 = bindings;
var G__63146 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63144,G__63145,G__63146) : sci.impl.evaluator.eval.call(null,G__63144,G__63145,G__63146));
})();
var args__$1 = cljs.core.rest(args);
var arg62935 = (function (){var G__63147 = ctx;
var G__63148 = bindings;
var G__63149 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63147,G__63148,G__63149) : sci.impl.evaluator.eval.call(null,G__63147,G__63148,G__63149));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62936 = (function (){var G__63150 = ctx;
var G__63151 = bindings;
var G__63152 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63150,G__63151,G__63152) : sci.impl.evaluator.eval.call(null,G__63150,G__63151,G__63152));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62937 = (function (){var G__63153 = ctx;
var G__63154 = bindings;
var G__63155 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63153,G__63154,G__63155) : sci.impl.evaluator.eval.call(null,G__63153,G__63154,G__63155));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg62934,arg62935,arg62936,arg62937) : f.call(null,arg62934,arg62935,arg62936,arg62937));

break;
case (5):
var arg62938 = (function (){var G__63156 = ctx;
var G__63157 = bindings;
var G__63158 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63156,G__63157,G__63158) : sci.impl.evaluator.eval.call(null,G__63156,G__63157,G__63158));
})();
var args__$1 = cljs.core.rest(args);
var arg62939 = (function (){var G__63159 = ctx;
var G__63160 = bindings;
var G__63161 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63159,G__63160,G__63161) : sci.impl.evaluator.eval.call(null,G__63159,G__63160,G__63161));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62940 = (function (){var G__63163 = ctx;
var G__63164 = bindings;
var G__63165 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63163,G__63164,G__63165) : sci.impl.evaluator.eval.call(null,G__63163,G__63164,G__63165));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62941 = (function (){var G__63166 = ctx;
var G__63167 = bindings;
var G__63168 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63166,G__63167,G__63168) : sci.impl.evaluator.eval.call(null,G__63166,G__63167,G__63168));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg62942 = (function (){var G__63169 = ctx;
var G__63170 = bindings;
var G__63171 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63169,G__63170,G__63171) : sci.impl.evaluator.eval.call(null,G__63169,G__63170,G__63171));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg62938,arg62939,arg62940,arg62941,arg62942) : f.call(null,arg62938,arg62939,arg62940,arg62941,arg62942));

break;
case (6):
var arg62943 = (function (){var G__63173 = ctx;
var G__63174 = bindings;
var G__63175 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63173,G__63174,G__63175) : sci.impl.evaluator.eval.call(null,G__63173,G__63174,G__63175));
})();
var args__$1 = cljs.core.rest(args);
var arg62944 = (function (){var G__63178 = ctx;
var G__63179 = bindings;
var G__63180 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63178,G__63179,G__63180) : sci.impl.evaluator.eval.call(null,G__63178,G__63179,G__63180));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62945 = (function (){var G__63181 = ctx;
var G__63182 = bindings;
var G__63183 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63181,G__63182,G__63183) : sci.impl.evaluator.eval.call(null,G__63181,G__63182,G__63183));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62946 = (function (){var G__63184 = ctx;
var G__63185 = bindings;
var G__63186 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63184,G__63185,G__63186) : sci.impl.evaluator.eval.call(null,G__63184,G__63185,G__63186));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg62947 = (function (){var G__63187 = ctx;
var G__63188 = bindings;
var G__63189 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63187,G__63188,G__63189) : sci.impl.evaluator.eval.call(null,G__63187,G__63188,G__63189));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg62948 = (function (){var G__63190 = ctx;
var G__63191 = bindings;
var G__63192 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63190,G__63191,G__63192) : sci.impl.evaluator.eval.call(null,G__63190,G__63191,G__63192));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg62943,arg62944,arg62945,arg62946,arg62947,arg62948) : f.call(null,arg62943,arg62944,arg62945,arg62946,arg62947,arg62948));

break;
case (7):
var arg62949 = (function (){var G__63193 = ctx;
var G__63194 = bindings;
var G__63195 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63193,G__63194,G__63195) : sci.impl.evaluator.eval.call(null,G__63193,G__63194,G__63195));
})();
var args__$1 = cljs.core.rest(args);
var arg62950 = (function (){var G__63196 = ctx;
var G__63197 = bindings;
var G__63198 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63196,G__63197,G__63198) : sci.impl.evaluator.eval.call(null,G__63196,G__63197,G__63198));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62951 = (function (){var G__63199 = ctx;
var G__63200 = bindings;
var G__63201 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63199,G__63200,G__63201) : sci.impl.evaluator.eval.call(null,G__63199,G__63200,G__63201));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62952 = (function (){var G__63202 = ctx;
var G__63203 = bindings;
var G__63204 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63202,G__63203,G__63204) : sci.impl.evaluator.eval.call(null,G__63202,G__63203,G__63204));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg62953 = (function (){var G__63205 = ctx;
var G__63206 = bindings;
var G__63207 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63205,G__63206,G__63207) : sci.impl.evaluator.eval.call(null,G__63205,G__63206,G__63207));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg62954 = (function (){var G__63208 = ctx;
var G__63209 = bindings;
var G__63210 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63208,G__63209,G__63210) : sci.impl.evaluator.eval.call(null,G__63208,G__63209,G__63210));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg62955 = (function (){var G__63211 = ctx;
var G__63212 = bindings;
var G__63213 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63211,G__63212,G__63213) : sci.impl.evaluator.eval.call(null,G__63211,G__63212,G__63213));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg62949,arg62950,arg62951,arg62952,arg62953,arg62954,arg62955) : f.call(null,arg62949,arg62950,arg62951,arg62952,arg62953,arg62954,arg62955));

break;
case (8):
var arg62956 = (function (){var G__63214 = ctx;
var G__63215 = bindings;
var G__63216 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63214,G__63215,G__63216) : sci.impl.evaluator.eval.call(null,G__63214,G__63215,G__63216));
})();
var args__$1 = cljs.core.rest(args);
var arg62957 = (function (){var G__63217 = ctx;
var G__63218 = bindings;
var G__63219 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63217,G__63218,G__63219) : sci.impl.evaluator.eval.call(null,G__63217,G__63218,G__63219));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62958 = (function (){var G__63220 = ctx;
var G__63221 = bindings;
var G__63222 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63220,G__63221,G__63222) : sci.impl.evaluator.eval.call(null,G__63220,G__63221,G__63222));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62959 = (function (){var G__63223 = ctx;
var G__63224 = bindings;
var G__63225 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63223,G__63224,G__63225) : sci.impl.evaluator.eval.call(null,G__63223,G__63224,G__63225));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg62960 = (function (){var G__63226 = ctx;
var G__63227 = bindings;
var G__63228 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63226,G__63227,G__63228) : sci.impl.evaluator.eval.call(null,G__63226,G__63227,G__63228));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg62961 = (function (){var G__63229 = ctx;
var G__63230 = bindings;
var G__63231 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63229,G__63230,G__63231) : sci.impl.evaluator.eval.call(null,G__63229,G__63230,G__63231));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg62962 = (function (){var G__63232 = ctx;
var G__63233 = bindings;
var G__63234 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63232,G__63233,G__63234) : sci.impl.evaluator.eval.call(null,G__63232,G__63233,G__63234));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg62963 = (function (){var G__63235 = ctx;
var G__63236 = bindings;
var G__63237 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63235,G__63236,G__63237) : sci.impl.evaluator.eval.call(null,G__63235,G__63236,G__63237));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg62956,arg62957,arg62958,arg62959,arg62960,arg62961,arg62962,arg62963) : f.call(null,arg62956,arg62957,arg62958,arg62959,arg62960,arg62961,arg62962,arg62963));

break;
case (9):
var arg62964 = (function (){var G__63238 = ctx;
var G__63239 = bindings;
var G__63240 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63238,G__63239,G__63240) : sci.impl.evaluator.eval.call(null,G__63238,G__63239,G__63240));
})();
var args__$1 = cljs.core.rest(args);
var arg62965 = (function (){var G__63241 = ctx;
var G__63242 = bindings;
var G__63243 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63241,G__63242,G__63243) : sci.impl.evaluator.eval.call(null,G__63241,G__63242,G__63243));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62966 = (function (){var G__63244 = ctx;
var G__63245 = bindings;
var G__63246 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63244,G__63245,G__63246) : sci.impl.evaluator.eval.call(null,G__63244,G__63245,G__63246));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62967 = (function (){var G__63247 = ctx;
var G__63248 = bindings;
var G__63249 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63247,G__63248,G__63249) : sci.impl.evaluator.eval.call(null,G__63247,G__63248,G__63249));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg62968 = (function (){var G__63250 = ctx;
var G__63251 = bindings;
var G__63252 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63250,G__63251,G__63252) : sci.impl.evaluator.eval.call(null,G__63250,G__63251,G__63252));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg62969 = (function (){var G__63254 = ctx;
var G__63255 = bindings;
var G__63256 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63254,G__63255,G__63256) : sci.impl.evaluator.eval.call(null,G__63254,G__63255,G__63256));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg62970 = (function (){var G__63257 = ctx;
var G__63258 = bindings;
var G__63259 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63257,G__63258,G__63259) : sci.impl.evaluator.eval.call(null,G__63257,G__63258,G__63259));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg62971 = (function (){var G__63260 = ctx;
var G__63261 = bindings;
var G__63262 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63260,G__63261,G__63262) : sci.impl.evaluator.eval.call(null,G__63260,G__63261,G__63262));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg62972 = (function (){var G__63263 = ctx;
var G__63264 = bindings;
var G__63265 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63263,G__63264,G__63265) : sci.impl.evaluator.eval.call(null,G__63263,G__63264,G__63265));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg62964,arg62965,arg62966,arg62967,arg62968,arg62969,arg62970,arg62971,arg62972) : f.call(null,arg62964,arg62965,arg62966,arg62967,arg62968,arg62969,arg62970,arg62971,arg62972));

break;
case (10):
var arg62974 = (function (){var G__63266 = ctx;
var G__63267 = bindings;
var G__63268 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63266,G__63267,G__63268) : sci.impl.evaluator.eval.call(null,G__63266,G__63267,G__63268));
})();
var args__$1 = cljs.core.rest(args);
var arg62975 = (function (){var G__63269 = ctx;
var G__63270 = bindings;
var G__63271 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63269,G__63270,G__63271) : sci.impl.evaluator.eval.call(null,G__63269,G__63270,G__63271));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62976 = (function (){var G__63272 = ctx;
var G__63273 = bindings;
var G__63274 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63272,G__63273,G__63274) : sci.impl.evaluator.eval.call(null,G__63272,G__63273,G__63274));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62977 = (function (){var G__63275 = ctx;
var G__63276 = bindings;
var G__63277 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63275,G__63276,G__63277) : sci.impl.evaluator.eval.call(null,G__63275,G__63276,G__63277));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg62978 = (function (){var G__63278 = ctx;
var G__63279 = bindings;
var G__63280 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63278,G__63279,G__63280) : sci.impl.evaluator.eval.call(null,G__63278,G__63279,G__63280));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg62979 = (function (){var G__63281 = ctx;
var G__63282 = bindings;
var G__63283 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63281,G__63282,G__63283) : sci.impl.evaluator.eval.call(null,G__63281,G__63282,G__63283));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg62980 = (function (){var G__63284 = ctx;
var G__63285 = bindings;
var G__63286 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63284,G__63285,G__63286) : sci.impl.evaluator.eval.call(null,G__63284,G__63285,G__63286));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg62981 = (function (){var G__63287 = ctx;
var G__63288 = bindings;
var G__63289 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63287,G__63288,G__63289) : sci.impl.evaluator.eval.call(null,G__63287,G__63288,G__63289));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg62982 = (function (){var G__63290 = ctx;
var G__63291 = bindings;
var G__63292 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63290,G__63291,G__63292) : sci.impl.evaluator.eval.call(null,G__63290,G__63291,G__63292));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg62983 = (function (){var G__63293 = ctx;
var G__63294 = bindings;
var G__63295 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63293,G__63294,G__63295) : sci.impl.evaluator.eval.call(null,G__63293,G__63294,G__63295));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg62974,arg62975,arg62976,arg62977,arg62978,arg62979,arg62980,arg62981,arg62982,arg62983) : f.call(null,arg62974,arg62975,arg62976,arg62977,arg62978,arg62979,arg62980,arg62981,arg62982,arg62983));

break;
case (11):
var arg62985 = (function (){var G__63296 = ctx;
var G__63297 = bindings;
var G__63298 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63296,G__63297,G__63298) : sci.impl.evaluator.eval.call(null,G__63296,G__63297,G__63298));
})();
var args__$1 = cljs.core.rest(args);
var arg62986 = (function (){var G__63299 = ctx;
var G__63300 = bindings;
var G__63301 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63299,G__63300,G__63301) : sci.impl.evaluator.eval.call(null,G__63299,G__63300,G__63301));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62987 = (function (){var G__63302 = ctx;
var G__63303 = bindings;
var G__63304 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63302,G__63303,G__63304) : sci.impl.evaluator.eval.call(null,G__63302,G__63303,G__63304));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62988 = (function (){var G__63306 = ctx;
var G__63307 = bindings;
var G__63308 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63306,G__63307,G__63308) : sci.impl.evaluator.eval.call(null,G__63306,G__63307,G__63308));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg62989 = (function (){var G__63309 = ctx;
var G__63310 = bindings;
var G__63311 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63309,G__63310,G__63311) : sci.impl.evaluator.eval.call(null,G__63309,G__63310,G__63311));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg62990 = (function (){var G__63314 = ctx;
var G__63315 = bindings;
var G__63316 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63314,G__63315,G__63316) : sci.impl.evaluator.eval.call(null,G__63314,G__63315,G__63316));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg62991 = (function (){var G__63318 = ctx;
var G__63319 = bindings;
var G__63320 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63318,G__63319,G__63320) : sci.impl.evaluator.eval.call(null,G__63318,G__63319,G__63320));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg62992 = (function (){var G__63323 = ctx;
var G__63324 = bindings;
var G__63325 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63323,G__63324,G__63325) : sci.impl.evaluator.eval.call(null,G__63323,G__63324,G__63325));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg62993 = (function (){var G__63326 = ctx;
var G__63327 = bindings;
var G__63328 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63326,G__63327,G__63328) : sci.impl.evaluator.eval.call(null,G__63326,G__63327,G__63328));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg62994 = (function (){var G__63330 = ctx;
var G__63331 = bindings;
var G__63332 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63330,G__63331,G__63332) : sci.impl.evaluator.eval.call(null,G__63330,G__63331,G__63332));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg62995 = (function (){var G__63333 = ctx;
var G__63334 = bindings;
var G__63335 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63333,G__63334,G__63335) : sci.impl.evaluator.eval.call(null,G__63333,G__63334,G__63335));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg62985,arg62986,arg62987,arg62988,arg62989,arg62990,arg62991,arg62992,arg62993,arg62994,arg62995) : f.call(null,arg62985,arg62986,arg62987,arg62988,arg62989,arg62990,arg62991,arg62992,arg62993,arg62994,arg62995));

break;
case (12):
var arg62996 = (function (){var G__63337 = ctx;
var G__63338 = bindings;
var G__63339 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63337,G__63338,G__63339) : sci.impl.evaluator.eval.call(null,G__63337,G__63338,G__63339));
})();
var args__$1 = cljs.core.rest(args);
var arg62997 = (function (){var G__63340 = ctx;
var G__63341 = bindings;
var G__63342 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63340,G__63341,G__63342) : sci.impl.evaluator.eval.call(null,G__63340,G__63341,G__63342));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg62998 = (function (){var G__63343 = ctx;
var G__63344 = bindings;
var G__63345 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63343,G__63344,G__63345) : sci.impl.evaluator.eval.call(null,G__63343,G__63344,G__63345));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg62999 = (function (){var G__63346 = ctx;
var G__63347 = bindings;
var G__63348 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63346,G__63347,G__63348) : sci.impl.evaluator.eval.call(null,G__63346,G__63347,G__63348));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63000 = (function (){var G__63349 = ctx;
var G__63350 = bindings;
var G__63351 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63349,G__63350,G__63351) : sci.impl.evaluator.eval.call(null,G__63349,G__63350,G__63351));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63001 = (function (){var G__63353 = ctx;
var G__63354 = bindings;
var G__63355 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63353,G__63354,G__63355) : sci.impl.evaluator.eval.call(null,G__63353,G__63354,G__63355));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63002 = (function (){var G__63356 = ctx;
var G__63357 = bindings;
var G__63358 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63356,G__63357,G__63358) : sci.impl.evaluator.eval.call(null,G__63356,G__63357,G__63358));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63003 = (function (){var G__63359 = ctx;
var G__63360 = bindings;
var G__63361 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63359,G__63360,G__63361) : sci.impl.evaluator.eval.call(null,G__63359,G__63360,G__63361));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63004 = (function (){var G__63362 = ctx;
var G__63363 = bindings;
var G__63364 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63362,G__63363,G__63364) : sci.impl.evaluator.eval.call(null,G__63362,G__63363,G__63364));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63005 = (function (){var G__63366 = ctx;
var G__63367 = bindings;
var G__63368 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63366,G__63367,G__63368) : sci.impl.evaluator.eval.call(null,G__63366,G__63367,G__63368));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63006 = (function (){var G__63369 = ctx;
var G__63370 = bindings;
var G__63371 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63369,G__63370,G__63371) : sci.impl.evaluator.eval.call(null,G__63369,G__63370,G__63371));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63007 = (function (){var G__63372 = ctx;
var G__63373 = bindings;
var G__63374 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63372,G__63373,G__63374) : sci.impl.evaluator.eval.call(null,G__63372,G__63373,G__63374));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg62996,arg62997,arg62998,arg62999,arg63000,arg63001,arg63002,arg63003,arg63004,arg63005,arg63006,arg63007) : f.call(null,arg62996,arg62997,arg62998,arg62999,arg63000,arg63001,arg63002,arg63003,arg63004,arg63005,arg63006,arg63007));

break;
case (13):
var arg63008 = (function (){var G__63378 = ctx;
var G__63379 = bindings;
var G__63380 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63378,G__63379,G__63380) : sci.impl.evaluator.eval.call(null,G__63378,G__63379,G__63380));
})();
var args__$1 = cljs.core.rest(args);
var arg63009 = (function (){var G__63381 = ctx;
var G__63382 = bindings;
var G__63383 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63381,G__63382,G__63383) : sci.impl.evaluator.eval.call(null,G__63381,G__63382,G__63383));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63010 = (function (){var G__63384 = ctx;
var G__63385 = bindings;
var G__63386 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63384,G__63385,G__63386) : sci.impl.evaluator.eval.call(null,G__63384,G__63385,G__63386));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63011 = (function (){var G__63387 = ctx;
var G__63388 = bindings;
var G__63389 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63387,G__63388,G__63389) : sci.impl.evaluator.eval.call(null,G__63387,G__63388,G__63389));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63012 = (function (){var G__63390 = ctx;
var G__63391 = bindings;
var G__63392 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63390,G__63391,G__63392) : sci.impl.evaluator.eval.call(null,G__63390,G__63391,G__63392));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63013 = (function (){var G__63393 = ctx;
var G__63394 = bindings;
var G__63395 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63393,G__63394,G__63395) : sci.impl.evaluator.eval.call(null,G__63393,G__63394,G__63395));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63014 = (function (){var G__63399 = ctx;
var G__63400 = bindings;
var G__63401 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63399,G__63400,G__63401) : sci.impl.evaluator.eval.call(null,G__63399,G__63400,G__63401));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63015 = (function (){var G__63402 = ctx;
var G__63403 = bindings;
var G__63404 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63402,G__63403,G__63404) : sci.impl.evaluator.eval.call(null,G__63402,G__63403,G__63404));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63016 = (function (){var G__63408 = ctx;
var G__63409 = bindings;
var G__63410 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63408,G__63409,G__63410) : sci.impl.evaluator.eval.call(null,G__63408,G__63409,G__63410));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63017 = (function (){var G__63411 = ctx;
var G__63412 = bindings;
var G__63413 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63411,G__63412,G__63413) : sci.impl.evaluator.eval.call(null,G__63411,G__63412,G__63413));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63018 = (function (){var G__63414 = ctx;
var G__63415 = bindings;
var G__63416 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63414,G__63415,G__63416) : sci.impl.evaluator.eval.call(null,G__63414,G__63415,G__63416));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63019 = (function (){var G__63417 = ctx;
var G__63418 = bindings;
var G__63419 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63417,G__63418,G__63419) : sci.impl.evaluator.eval.call(null,G__63417,G__63418,G__63419));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63020 = (function (){var G__63420 = ctx;
var G__63421 = bindings;
var G__63422 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63420,G__63421,G__63422) : sci.impl.evaluator.eval.call(null,G__63420,G__63421,G__63422));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg63008,arg63009,arg63010,arg63011,arg63012,arg63013,arg63014,arg63015,arg63016,arg63017,arg63018,arg63019,arg63020) : f.call(null,arg63008,arg63009,arg63010,arg63011,arg63012,arg63013,arg63014,arg63015,arg63016,arg63017,arg63018,arg63019,arg63020));

break;
case (14):
var arg63021 = (function (){var G__63426 = ctx;
var G__63427 = bindings;
var G__63428 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63426,G__63427,G__63428) : sci.impl.evaluator.eval.call(null,G__63426,G__63427,G__63428));
})();
var args__$1 = cljs.core.rest(args);
var arg63022 = (function (){var G__63429 = ctx;
var G__63430 = bindings;
var G__63431 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63429,G__63430,G__63431) : sci.impl.evaluator.eval.call(null,G__63429,G__63430,G__63431));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63023 = (function (){var G__63432 = ctx;
var G__63433 = bindings;
var G__63434 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63432,G__63433,G__63434) : sci.impl.evaluator.eval.call(null,G__63432,G__63433,G__63434));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63024 = (function (){var G__63435 = ctx;
var G__63436 = bindings;
var G__63437 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63435,G__63436,G__63437) : sci.impl.evaluator.eval.call(null,G__63435,G__63436,G__63437));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63025 = (function (){var G__63438 = ctx;
var G__63439 = bindings;
var G__63440 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63438,G__63439,G__63440) : sci.impl.evaluator.eval.call(null,G__63438,G__63439,G__63440));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63026 = (function (){var G__63443 = ctx;
var G__63444 = bindings;
var G__63445 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63443,G__63444,G__63445) : sci.impl.evaluator.eval.call(null,G__63443,G__63444,G__63445));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63027 = (function (){var G__63447 = ctx;
var G__63448 = bindings;
var G__63449 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63447,G__63448,G__63449) : sci.impl.evaluator.eval.call(null,G__63447,G__63448,G__63449));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63028 = (function (){var G__63450 = ctx;
var G__63451 = bindings;
var G__63452 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63450,G__63451,G__63452) : sci.impl.evaluator.eval.call(null,G__63450,G__63451,G__63452));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63029 = (function (){var G__63453 = ctx;
var G__63454 = bindings;
var G__63455 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63453,G__63454,G__63455) : sci.impl.evaluator.eval.call(null,G__63453,G__63454,G__63455));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63030 = (function (){var G__63456 = ctx;
var G__63457 = bindings;
var G__63458 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63456,G__63457,G__63458) : sci.impl.evaluator.eval.call(null,G__63456,G__63457,G__63458));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63031 = (function (){var G__63459 = ctx;
var G__63460 = bindings;
var G__63461 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63459,G__63460,G__63461) : sci.impl.evaluator.eval.call(null,G__63459,G__63460,G__63461));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63032 = (function (){var G__63464 = ctx;
var G__63465 = bindings;
var G__63466 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63464,G__63465,G__63466) : sci.impl.evaluator.eval.call(null,G__63464,G__63465,G__63466));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63033 = (function (){var G__63468 = ctx;
var G__63469 = bindings;
var G__63470 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63468,G__63469,G__63470) : sci.impl.evaluator.eval.call(null,G__63468,G__63469,G__63470));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63034 = (function (){var G__63471 = ctx;
var G__63472 = bindings;
var G__63473 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63471,G__63472,G__63473) : sci.impl.evaluator.eval.call(null,G__63471,G__63472,G__63473));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg63021,arg63022,arg63023,arg63024,arg63025,arg63026,arg63027,arg63028,arg63029,arg63030,arg63031,arg63032,arg63033,arg63034) : f.call(null,arg63021,arg63022,arg63023,arg63024,arg63025,arg63026,arg63027,arg63028,arg63029,arg63030,arg63031,arg63032,arg63033,arg63034));

break;
case (15):
var arg63035 = (function (){var G__63474 = ctx;
var G__63475 = bindings;
var G__63476 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63474,G__63475,G__63476) : sci.impl.evaluator.eval.call(null,G__63474,G__63475,G__63476));
})();
var args__$1 = cljs.core.rest(args);
var arg63036 = (function (){var G__63479 = ctx;
var G__63480 = bindings;
var G__63481 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63479,G__63480,G__63481) : sci.impl.evaluator.eval.call(null,G__63479,G__63480,G__63481));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63037 = (function (){var G__63483 = ctx;
var G__63484 = bindings;
var G__63485 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63483,G__63484,G__63485) : sci.impl.evaluator.eval.call(null,G__63483,G__63484,G__63485));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63038 = (function (){var G__63486 = ctx;
var G__63487 = bindings;
var G__63488 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63486,G__63487,G__63488) : sci.impl.evaluator.eval.call(null,G__63486,G__63487,G__63488));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63039 = (function (){var G__63489 = ctx;
var G__63490 = bindings;
var G__63491 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63489,G__63490,G__63491) : sci.impl.evaluator.eval.call(null,G__63489,G__63490,G__63491));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63040 = (function (){var G__63492 = ctx;
var G__63493 = bindings;
var G__63494 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63492,G__63493,G__63494) : sci.impl.evaluator.eval.call(null,G__63492,G__63493,G__63494));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63041 = (function (){var G__63495 = ctx;
var G__63496 = bindings;
var G__63497 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63495,G__63496,G__63497) : sci.impl.evaluator.eval.call(null,G__63495,G__63496,G__63497));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63042 = (function (){var G__63499 = ctx;
var G__63500 = bindings;
var G__63501 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63499,G__63500,G__63501) : sci.impl.evaluator.eval.call(null,G__63499,G__63500,G__63501));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63043 = (function (){var G__63504 = ctx;
var G__63505 = bindings;
var G__63506 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63504,G__63505,G__63506) : sci.impl.evaluator.eval.call(null,G__63504,G__63505,G__63506));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63044 = (function (){var G__63507 = ctx;
var G__63508 = bindings;
var G__63509 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63507,G__63508,G__63509) : sci.impl.evaluator.eval.call(null,G__63507,G__63508,G__63509));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63045 = (function (){var G__63510 = ctx;
var G__63511 = bindings;
var G__63512 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63510,G__63511,G__63512) : sci.impl.evaluator.eval.call(null,G__63510,G__63511,G__63512));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63046 = (function (){var G__63513 = ctx;
var G__63514 = bindings;
var G__63515 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63513,G__63514,G__63515) : sci.impl.evaluator.eval.call(null,G__63513,G__63514,G__63515));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63047 = (function (){var G__63516 = ctx;
var G__63517 = bindings;
var G__63518 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63516,G__63517,G__63518) : sci.impl.evaluator.eval.call(null,G__63516,G__63517,G__63518));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63048 = (function (){var G__63519 = ctx;
var G__63520 = bindings;
var G__63521 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63519,G__63520,G__63521) : sci.impl.evaluator.eval.call(null,G__63519,G__63520,G__63521));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63049 = (function (){var G__63524 = ctx;
var G__63525 = bindings;
var G__63526 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63524,G__63525,G__63526) : sci.impl.evaluator.eval.call(null,G__63524,G__63525,G__63526));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg63035,arg63036,arg63037,arg63038,arg63039,arg63040,arg63041,arg63042,arg63043,arg63044,arg63045,arg63046,arg63047,arg63048,arg63049) : f.call(null,arg63035,arg63036,arg63037,arg63038,arg63039,arg63040,arg63041,arg63042,arg63043,arg63044,arg63045,arg63046,arg63047,arg63048,arg63049));

break;
case (16):
var arg63050 = (function (){var G__63528 = ctx;
var G__63529 = bindings;
var G__63530 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63528,G__63529,G__63530) : sci.impl.evaluator.eval.call(null,G__63528,G__63529,G__63530));
})();
var args__$1 = cljs.core.rest(args);
var arg63051 = (function (){var G__63531 = ctx;
var G__63532 = bindings;
var G__63533 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63531,G__63532,G__63533) : sci.impl.evaluator.eval.call(null,G__63531,G__63532,G__63533));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63052 = (function (){var G__63534 = ctx;
var G__63535 = bindings;
var G__63536 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63534,G__63535,G__63536) : sci.impl.evaluator.eval.call(null,G__63534,G__63535,G__63536));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63053 = (function (){var G__63537 = ctx;
var G__63538 = bindings;
var G__63539 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63537,G__63538,G__63539) : sci.impl.evaluator.eval.call(null,G__63537,G__63538,G__63539));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63054 = (function (){var G__63540 = ctx;
var G__63541 = bindings;
var G__63542 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63540,G__63541,G__63542) : sci.impl.evaluator.eval.call(null,G__63540,G__63541,G__63542));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63055 = (function (){var G__63543 = ctx;
var G__63544 = bindings;
var G__63545 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63543,G__63544,G__63545) : sci.impl.evaluator.eval.call(null,G__63543,G__63544,G__63545));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63056 = (function (){var G__63546 = ctx;
var G__63547 = bindings;
var G__63548 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63546,G__63547,G__63548) : sci.impl.evaluator.eval.call(null,G__63546,G__63547,G__63548));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63057 = (function (){var G__63549 = ctx;
var G__63550 = bindings;
var G__63551 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63549,G__63550,G__63551) : sci.impl.evaluator.eval.call(null,G__63549,G__63550,G__63551));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63058 = (function (){var G__63552 = ctx;
var G__63553 = bindings;
var G__63554 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63552,G__63553,G__63554) : sci.impl.evaluator.eval.call(null,G__63552,G__63553,G__63554));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63059 = (function (){var G__63555 = ctx;
var G__63556 = bindings;
var G__63557 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63555,G__63556,G__63557) : sci.impl.evaluator.eval.call(null,G__63555,G__63556,G__63557));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63060 = (function (){var G__63558 = ctx;
var G__63559 = bindings;
var G__63560 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63558,G__63559,G__63560) : sci.impl.evaluator.eval.call(null,G__63558,G__63559,G__63560));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63061 = (function (){var G__63561 = ctx;
var G__63562 = bindings;
var G__63563 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63561,G__63562,G__63563) : sci.impl.evaluator.eval.call(null,G__63561,G__63562,G__63563));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63062 = (function (){var G__63564 = ctx;
var G__63565 = bindings;
var G__63566 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63564,G__63565,G__63566) : sci.impl.evaluator.eval.call(null,G__63564,G__63565,G__63566));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63063 = (function (){var G__63567 = ctx;
var G__63568 = bindings;
var G__63569 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63567,G__63568,G__63569) : sci.impl.evaluator.eval.call(null,G__63567,G__63568,G__63569));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63064 = (function (){var G__63570 = ctx;
var G__63571 = bindings;
var G__63572 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63570,G__63571,G__63572) : sci.impl.evaluator.eval.call(null,G__63570,G__63571,G__63572));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63065 = (function (){var G__63573 = ctx;
var G__63574 = bindings;
var G__63575 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63573,G__63574,G__63575) : sci.impl.evaluator.eval.call(null,G__63573,G__63574,G__63575));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg63050,arg63051,arg63052,arg63053,arg63054,arg63055,arg63056,arg63057,arg63058,arg63059,arg63060,arg63061,arg63062,arg63063,arg63064,arg63065) : f.call(null,arg63050,arg63051,arg63052,arg63053,arg63054,arg63055,arg63056,arg63057,arg63058,arg63059,arg63060,arg63061,arg63062,arg63063,arg63064,arg63065));

break;
case (17):
var arg63067 = (function (){var G__63576 = ctx;
var G__63577 = bindings;
var G__63578 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63576,G__63577,G__63578) : sci.impl.evaluator.eval.call(null,G__63576,G__63577,G__63578));
})();
var args__$1 = cljs.core.rest(args);
var arg63068 = (function (){var G__63579 = ctx;
var G__63580 = bindings;
var G__63581 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63579,G__63580,G__63581) : sci.impl.evaluator.eval.call(null,G__63579,G__63580,G__63581));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63069 = (function (){var G__63582 = ctx;
var G__63583 = bindings;
var G__63584 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63582,G__63583,G__63584) : sci.impl.evaluator.eval.call(null,G__63582,G__63583,G__63584));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63070 = (function (){var G__63585 = ctx;
var G__63586 = bindings;
var G__63587 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63585,G__63586,G__63587) : sci.impl.evaluator.eval.call(null,G__63585,G__63586,G__63587));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63071 = (function (){var G__63589 = ctx;
var G__63590 = bindings;
var G__63591 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63589,G__63590,G__63591) : sci.impl.evaluator.eval.call(null,G__63589,G__63590,G__63591));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63072 = (function (){var G__63592 = ctx;
var G__63593 = bindings;
var G__63594 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63592,G__63593,G__63594) : sci.impl.evaluator.eval.call(null,G__63592,G__63593,G__63594));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63073 = (function (){var G__63595 = ctx;
var G__63596 = bindings;
var G__63597 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63595,G__63596,G__63597) : sci.impl.evaluator.eval.call(null,G__63595,G__63596,G__63597));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63074 = (function (){var G__63598 = ctx;
var G__63599 = bindings;
var G__63600 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63598,G__63599,G__63600) : sci.impl.evaluator.eval.call(null,G__63598,G__63599,G__63600));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63075 = (function (){var G__63601 = ctx;
var G__63602 = bindings;
var G__63603 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63601,G__63602,G__63603) : sci.impl.evaluator.eval.call(null,G__63601,G__63602,G__63603));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63076 = (function (){var G__63604 = ctx;
var G__63605 = bindings;
var G__63606 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63604,G__63605,G__63606) : sci.impl.evaluator.eval.call(null,G__63604,G__63605,G__63606));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63077 = (function (){var G__63607 = ctx;
var G__63608 = bindings;
var G__63609 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63607,G__63608,G__63609) : sci.impl.evaluator.eval.call(null,G__63607,G__63608,G__63609));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63078 = (function (){var G__63610 = ctx;
var G__63611 = bindings;
var G__63612 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63610,G__63611,G__63612) : sci.impl.evaluator.eval.call(null,G__63610,G__63611,G__63612));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63079 = (function (){var G__63613 = ctx;
var G__63614 = bindings;
var G__63615 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63613,G__63614,G__63615) : sci.impl.evaluator.eval.call(null,G__63613,G__63614,G__63615));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63080 = (function (){var G__63616 = ctx;
var G__63617 = bindings;
var G__63618 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63616,G__63617,G__63618) : sci.impl.evaluator.eval.call(null,G__63616,G__63617,G__63618));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63081 = (function (){var G__63619 = ctx;
var G__63620 = bindings;
var G__63621 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63619,G__63620,G__63621) : sci.impl.evaluator.eval.call(null,G__63619,G__63620,G__63621));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63082 = (function (){var G__63622 = ctx;
var G__63623 = bindings;
var G__63624 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63622,G__63623,G__63624) : sci.impl.evaluator.eval.call(null,G__63622,G__63623,G__63624));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63083 = (function (){var G__63625 = ctx;
var G__63626 = bindings;
var G__63627 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63625,G__63626,G__63627) : sci.impl.evaluator.eval.call(null,G__63625,G__63626,G__63627));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg63067,arg63068,arg63069,arg63070,arg63071,arg63072,arg63073,arg63074,arg63075,arg63076,arg63077,arg63078,arg63079,arg63080,arg63081,arg63082,arg63083) : f.call(null,arg63067,arg63068,arg63069,arg63070,arg63071,arg63072,arg63073,arg63074,arg63075,arg63076,arg63077,arg63078,arg63079,arg63080,arg63081,arg63082,arg63083));

break;
case (18):
var arg63084 = (function (){var G__63628 = ctx;
var G__63629 = bindings;
var G__63630 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63628,G__63629,G__63630) : sci.impl.evaluator.eval.call(null,G__63628,G__63629,G__63630));
})();
var args__$1 = cljs.core.rest(args);
var arg63085 = (function (){var G__63631 = ctx;
var G__63632 = bindings;
var G__63633 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63631,G__63632,G__63633) : sci.impl.evaluator.eval.call(null,G__63631,G__63632,G__63633));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63086 = (function (){var G__63634 = ctx;
var G__63635 = bindings;
var G__63636 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63634,G__63635,G__63636) : sci.impl.evaluator.eval.call(null,G__63634,G__63635,G__63636));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63087 = (function (){var G__63637 = ctx;
var G__63638 = bindings;
var G__63639 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63637,G__63638,G__63639) : sci.impl.evaluator.eval.call(null,G__63637,G__63638,G__63639));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63088 = (function (){var G__63640 = ctx;
var G__63641 = bindings;
var G__63642 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63640,G__63641,G__63642) : sci.impl.evaluator.eval.call(null,G__63640,G__63641,G__63642));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63089 = (function (){var G__63643 = ctx;
var G__63644 = bindings;
var G__63645 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63643,G__63644,G__63645) : sci.impl.evaluator.eval.call(null,G__63643,G__63644,G__63645));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63090 = (function (){var G__63646 = ctx;
var G__63647 = bindings;
var G__63648 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63646,G__63647,G__63648) : sci.impl.evaluator.eval.call(null,G__63646,G__63647,G__63648));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63091 = (function (){var G__63649 = ctx;
var G__63650 = bindings;
var G__63651 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63649,G__63650,G__63651) : sci.impl.evaluator.eval.call(null,G__63649,G__63650,G__63651));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63092 = (function (){var G__63652 = ctx;
var G__63653 = bindings;
var G__63654 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63652,G__63653,G__63654) : sci.impl.evaluator.eval.call(null,G__63652,G__63653,G__63654));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63093 = (function (){var G__63655 = ctx;
var G__63656 = bindings;
var G__63657 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63655,G__63656,G__63657) : sci.impl.evaluator.eval.call(null,G__63655,G__63656,G__63657));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63094 = (function (){var G__63658 = ctx;
var G__63659 = bindings;
var G__63660 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63658,G__63659,G__63660) : sci.impl.evaluator.eval.call(null,G__63658,G__63659,G__63660));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63095 = (function (){var G__63661 = ctx;
var G__63662 = bindings;
var G__63663 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63661,G__63662,G__63663) : sci.impl.evaluator.eval.call(null,G__63661,G__63662,G__63663));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63096 = (function (){var G__63664 = ctx;
var G__63665 = bindings;
var G__63666 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63664,G__63665,G__63666) : sci.impl.evaluator.eval.call(null,G__63664,G__63665,G__63666));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63097 = (function (){var G__63667 = ctx;
var G__63668 = bindings;
var G__63669 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63667,G__63668,G__63669) : sci.impl.evaluator.eval.call(null,G__63667,G__63668,G__63669));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63098 = (function (){var G__63670 = ctx;
var G__63671 = bindings;
var G__63672 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63670,G__63671,G__63672) : sci.impl.evaluator.eval.call(null,G__63670,G__63671,G__63672));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63099 = (function (){var G__63673 = ctx;
var G__63674 = bindings;
var G__63675 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63673,G__63674,G__63675) : sci.impl.evaluator.eval.call(null,G__63673,G__63674,G__63675));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63100 = (function (){var G__63676 = ctx;
var G__63677 = bindings;
var G__63678 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63676,G__63677,G__63678) : sci.impl.evaluator.eval.call(null,G__63676,G__63677,G__63678));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63101 = (function (){var G__63679 = ctx;
var G__63680 = bindings;
var G__63681 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63679,G__63680,G__63681) : sci.impl.evaluator.eval.call(null,G__63679,G__63680,G__63681));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg63084,arg63085,arg63086,arg63087,arg63088,arg63089,arg63090,arg63091,arg63092,arg63093,arg63094,arg63095,arg63096,arg63097,arg63098,arg63099,arg63100,arg63101) : f.call(null,arg63084,arg63085,arg63086,arg63087,arg63088,arg63089,arg63090,arg63091,arg63092,arg63093,arg63094,arg63095,arg63096,arg63097,arg63098,arg63099,arg63100,arg63101));

break;
case (19):
var arg63102 = (function (){var G__63682 = ctx;
var G__63683 = bindings;
var G__63684 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63682,G__63683,G__63684) : sci.impl.evaluator.eval.call(null,G__63682,G__63683,G__63684));
})();
var args__$1 = cljs.core.rest(args);
var arg63103 = (function (){var G__63685 = ctx;
var G__63686 = bindings;
var G__63687 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63685,G__63686,G__63687) : sci.impl.evaluator.eval.call(null,G__63685,G__63686,G__63687));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg63104 = (function (){var G__63688 = ctx;
var G__63689 = bindings;
var G__63690 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63688,G__63689,G__63690) : sci.impl.evaluator.eval.call(null,G__63688,G__63689,G__63690));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg63105 = (function (){var G__63691 = ctx;
var G__63692 = bindings;
var G__63693 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63691,G__63692,G__63693) : sci.impl.evaluator.eval.call(null,G__63691,G__63692,G__63693));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg63106 = (function (){var G__63694 = ctx;
var G__63695 = bindings;
var G__63696 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63694,G__63695,G__63696) : sci.impl.evaluator.eval.call(null,G__63694,G__63695,G__63696));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg63107 = (function (){var G__63697 = ctx;
var G__63698 = bindings;
var G__63699 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63697,G__63698,G__63699) : sci.impl.evaluator.eval.call(null,G__63697,G__63698,G__63699));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg63108 = (function (){var G__63700 = ctx;
var G__63701 = bindings;
var G__63702 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63700,G__63701,G__63702) : sci.impl.evaluator.eval.call(null,G__63700,G__63701,G__63702));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg63109 = (function (){var G__63703 = ctx;
var G__63704 = bindings;
var G__63705 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63703,G__63704,G__63705) : sci.impl.evaluator.eval.call(null,G__63703,G__63704,G__63705));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg63110 = (function (){var G__63706 = ctx;
var G__63707 = bindings;
var G__63708 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63706,G__63707,G__63708) : sci.impl.evaluator.eval.call(null,G__63706,G__63707,G__63708));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg63111 = (function (){var G__63709 = ctx;
var G__63710 = bindings;
var G__63711 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63709,G__63710,G__63711) : sci.impl.evaluator.eval.call(null,G__63709,G__63710,G__63711));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg63112 = (function (){var G__63712 = ctx;
var G__63713 = bindings;
var G__63714 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63712,G__63713,G__63714) : sci.impl.evaluator.eval.call(null,G__63712,G__63713,G__63714));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg63113 = (function (){var G__63715 = ctx;
var G__63716 = bindings;
var G__63717 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63715,G__63716,G__63717) : sci.impl.evaluator.eval.call(null,G__63715,G__63716,G__63717));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg63114 = (function (){var G__63718 = ctx;
var G__63719 = bindings;
var G__63720 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63718,G__63719,G__63720) : sci.impl.evaluator.eval.call(null,G__63718,G__63719,G__63720));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg63115 = (function (){var G__63721 = ctx;
var G__63722 = bindings;
var G__63723 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63721,G__63722,G__63723) : sci.impl.evaluator.eval.call(null,G__63721,G__63722,G__63723));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg63116 = (function (){var G__63724 = ctx;
var G__63725 = bindings;
var G__63726 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63724,G__63725,G__63726) : sci.impl.evaluator.eval.call(null,G__63724,G__63725,G__63726));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg63117 = (function (){var G__63727 = ctx;
var G__63728 = bindings;
var G__63729 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63727,G__63728,G__63729) : sci.impl.evaluator.eval.call(null,G__63727,G__63728,G__63729));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg63118 = (function (){var G__63730 = ctx;
var G__63731 = bindings;
var G__63732 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63730,G__63731,G__63732) : sci.impl.evaluator.eval.call(null,G__63730,G__63731,G__63732));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg63119 = (function (){var G__63733 = ctx;
var G__63734 = bindings;
var G__63735 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63733,G__63734,G__63735) : sci.impl.evaluator.eval.call(null,G__63733,G__63734,G__63735));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg63120 = (function (){var G__63736 = ctx;
var G__63737 = bindings;
var G__63738 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__63736,G__63737,G__63738) : sci.impl.evaluator.eval.call(null,G__63736,G__63737,G__63738));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg63102,arg63103,arg63104,arg63105,arg63106,arg63107,arg63108,arg63109,arg63110,arg63111,arg63112,arg63113,arg63114,arg63115,arg63116,arg63117,arg63118,arg63119,arg63120) : f.call(null,arg63102,arg63103,arg63104,arg63105,arg63106,arg63107,arg63108,arg63109,arg63110,arg63111,arg63112,arg63113,arg63114,arg63115,arg63116,arg63117,arg63118,arg63119,arg63120));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__62467_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__62467_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__62467_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e63739){if((e63739 instanceof Error)){
var e = e63739;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e63739;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
