goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});



sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
var G__67841 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var G__67842 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__67841,G__67842) : sci.impl.analyzer.analyze.call(null,G__67841,G__67842));
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
}catch (e67846){var _ = e67846;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)))){
return expr;
} else {
var f__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__5043__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5043__auto__;
}
})())?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__67847 = f__$1;
var G__67847__$1 = (((G__67847 == null))?null:cljs.core.meta(G__67847));
if((G__67847__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__67847__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(expr,analyzed_children){
var G__67852 = cljs.core.count(analyzed_children);
switch (G__67852) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

return sci.impl.evaluator.eval(ctx,bindings,arg1);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

sci.impl.evaluator.eval(ctx,bindings,arg1);

return sci.impl.evaluator.eval(ctx,bindings,arg2);
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_do(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(expr,analyzed_children){
var G__67854 = cljs.core.count(analyzed_children);
switch (G__67854) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg1);
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg2);
}
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg3);
}
}
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg4);
}
}
}
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg5);
}
}
}
}
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg6);
}
}
}
}
}
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg7);
}
}
}
}
}
}
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg8);
}
}
}
}
}
}
}
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg9);
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg10);
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg11);
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg12);
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg13);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg14);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg15);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg16);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
var or__5045__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5045__auto____$16)){
return or__5045__auto____$16;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg17);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
var or__5045__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5045__auto____$16)){
return or__5045__auto____$16;
} else {
var or__5045__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(or__5045__auto____$17)){
return or__5045__auto____$17;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg18);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_or(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(expr,analyzed_children){
var G__67862 = cljs.core.count(analyzed_children);
switch (G__67862) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
return sci.impl.evaluator.eval(ctx,bindings,arg1);
} else {
return and__5043__auto__;
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
return sci.impl.evaluator.eval(ctx,bindings,arg2);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
return sci.impl.evaluator.eval(ctx,bindings,arg3);
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
return sci.impl.evaluator.eval(ctx,bindings,arg4);
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
return sci.impl.evaluator.eval(ctx,bindings,arg5);
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
return sci.impl.evaluator.eval(ctx,bindings,arg6);
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
return sci.impl.evaluator.eval(ctx,bindings,arg7);
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
return sci.impl.evaluator.eval(ctx,bindings,arg8);
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
return sci.impl.evaluator.eval(ctx,bindings,arg9);
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
return sci.impl.evaluator.eval(ctx,bindings,arg10);
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
return sci.impl.evaluator.eval(ctx,bindings,arg11);
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
return sci.impl.evaluator.eval(ctx,bindings,arg12);
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
return sci.impl.evaluator.eval(ctx,bindings,arg13);
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
return sci.impl.evaluator.eval(ctx,bindings,arg14);
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
return sci.impl.evaluator.eval(ctx,bindings,arg15);
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
return sci.impl.evaluator.eval(ctx,bindings,arg16);
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
var and__5043__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5043__auto____$16)){
return sci.impl.evaluator.eval(ctx,bindings,arg17);
} else {
return and__5043__auto____$16;
}
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
var and__5043__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5043__auto____$16)){
var and__5043__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(and__5043__auto____$17)){
return sci.impl.evaluator.eval(ctx,bindings,arg18);
} else {
return and__5043__auto____$17;
}
} else {
return and__5043__auto____$16;
}
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_and(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.recur_0 = sci.impl.fns.__GT_Recur(cljs.core.PersistentVector.EMPTY);
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(expr,analyzed_children){
var G__67877 = cljs.core.count(analyzed_children);
switch (G__67877) {
case (0):
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_,_bindings){
return sci.impl.analyzer.recur_0;
}),expr);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0)], null));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1)], null));
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2)], null));
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3)], null));
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4)], null));
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5)], null));
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6)], null));
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7)], null));
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8)], null));
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9)], null));
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10)], null));
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11)], null));
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12)], null));
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13)], null));
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14)], null));
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15)], null));
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16)], null));
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17)], null));
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17),sci.impl.evaluator.eval(ctx,bindings,arg18)], null));
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),analyzed_children);
}),expr);

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67883_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__67883_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__67883_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,bindings_fn,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.bindings_fn = bindings_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k67885,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__67891 = k67885;
var G__67891__$1 = (((G__67891 instanceof cljs.core.Keyword))?G__67891.fqn:null);
switch (G__67891__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "bindings-fn":
return self__.bindings_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67885,else__5346__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__67892){
var vec__67893 = p__67892;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67893,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67893,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67884){
var self__ = this;
var G__67884__$1 = this;
return (new cljs.core.RecordIter((0),G__67884__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67886,other67887){
var self__ = this;
var this67886__$1 = this;
return (((!((other67887 == null)))) && ((((this67886__$1.constructor === other67887.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67886__$1.params,other67887.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67886__$1.body,other67887.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67886__$1.fixed_arity,other67887.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67886__$1.var_arg_name,other67887.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67886__$1.bindings_fn,other67887.bindings_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67886__$1.__extmap,other67887.__extmap)))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k67885){
var self__ = this;
var this__5350__auto____$1 = this;
var G__67902 = k67885;
var G__67902__$1 = (((G__67902 instanceof cljs.core.Keyword))?G__67902.fqn:null);
switch (G__67902__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "bindings-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67885);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__67884){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__67903 = cljs.core.keyword_identical_QMARK_;
var expr__67904 = k__5352__auto__;
if(cljs.core.truth_((pred__67903.cljs$core$IFn$_invoke$arity$2 ? pred__67903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__67904) : pred__67903.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__67904)))){
return (new sci.impl.analyzer.FnBody(G__67884,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67903.cljs$core$IFn$_invoke$arity$2 ? pred__67903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__67904) : pred__67903.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__67904)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__67884,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67903.cljs$core$IFn$_invoke$arity$2 ? pred__67903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__67904) : pred__67903.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__67904)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__67884,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67903.cljs$core$IFn$_invoke$arity$2 ? pred__67903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__67904) : pred__67903.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__67904)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__67884,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67903.cljs$core$IFn$_invoke$arity$2 ? pred__67903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__67904) : pred__67903.call(null,new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__67904)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__67884,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__67884),null));
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__67884){
var self__ = this;
var this__5342__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,G__67884,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"bindings-fn","bindings-fn",1941331478,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,bindings_fn){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,bindings_fn,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__67888){
var extmap__5385__auto__ = (function (){var G__67912 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67888,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], 0));
if(cljs.core.record_QMARK_(G__67888)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67912);
} else {
return G__67912;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__67888),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__67888),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__67888),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__67888),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(G__67888),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__67921,p__67922,macro_QMARK_){
var map__67923 = p__67921;
var map__67923__$1 = cljs.core.__destructure_map(map__67923);
var ctx = map__67923__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67923__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__67924 = p__67922;
var seq__67925 = cljs.core.seq(vec__67924);
var first__67926 = cljs.core.first(seq__67925);
var seq__67925__$1 = cljs.core.next(seq__67925);
var binding_vector = first__67926;
var body_exprs = seq__67925__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__67915_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__67915_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__67916_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__67916_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__67928 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__67928__$1 = cljs.core.__destructure_map(map__67928);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67928__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67928__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var param_bindings = cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var binding_cnt = cljs.core.count(bindings);
var vec__67929 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings),cb], null);
} else {
if(cljs.core.empty_QMARK_(bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,null], null);
} else {
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings], 0)),cb], null);
}
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67929,(0),null);
var closure_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67929,(1),null);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ana_children = sci.impl.analyzer.analyze_children(ctx__$2,body);
var body__$1 = sci.impl.analyzer.return_do(fn_expr,ana_children);
var closure_bindings__$1 = (cljs.core.truth_(closure_bindings)?cljs.core.deref(closure_bindings):null);
var closure_binding_cnt = (cljs.core.truth_(closure_bindings__$1)?cljs.core.count(closure_bindings__$1):null);
var bindings_fn = (cljs.core.truth_(closure_bindings__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding_cnt,closure_binding_cnt))?cljs.core.identity:(function (p1__67917_SHARP_){
return cljs.core.select_keys(p1__67917_SHARP_,closure_bindings__$1);
})):cljs.core.identity);
return sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,bindings_fn);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__67947 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__67948 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__67947,G__67948) : sci.impl.analyzer.analyze.call(null,G__67947,G__67948));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.expand_fn_STAR_ = (function sci$impl$analyzer$expand_fn_STAR_(ctx,p__67967,macro_QMARK_){
var vec__67968 = p__67967;
var seq__67969 = cljs.core.seq(vec__67968);
var first__67970 = cljs.core.first(seq__67969);
var seq__67969__$1 = cljs.core.next(seq__67969);
var _fn = first__67970;
var first__67970__$1 = cljs.core.first(seq__67969__$1);
var seq__67969__$2 = cljs.core.next(seq__67969__$1);
var name_QMARK_ = first__67970__$1;
var body = seq__67969__$2;
var fn_expr = vec__67968;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var self_ref = (cljs.core.truth_(fn_name)?cljs.core.volatile_BANG_(null):null);
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"self-ref","self-ref",1760385189),self_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794)):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67974,body__$2){
var map__67975 = p__67974;
var map__67975__$1 = cljs.core.__destructure_map(map__67975);
var acc = map__67975__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67975__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67975__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,body__$2,macro_QMARK_);
var var_arg_name = body__$3.var_arg_name;
var fixed_arity = body__$3.fixed_arity;
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__5043__auto__ = var_arg_name;
if(cljs.core.truth_(and__5043__auto__)){
return min_varargs;
} else {
return and__5043__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(var_arg_name);
if(and__5043__auto__){
var and__5043__auto____$1 = min_varargs;
if(cljs.core.truth_(and__5043__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__5130__auto__ = fixed_arity;
var y__5131__auto__ = max_fixed;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$3),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0)));
var struct = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084),(cljs.core.truth_(self_ref)?cljs.core.deref(self_ref):null),new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),fn_meta__$1], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref = new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
if(cljs.core.truth_(fn_meta)){
return (function (ctx,bindings){
var fn_meta__$1 = sci.impl.evaluator.handle_meta(ctx,bindings,fn_meta);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
});
} else {
return (function (ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
});
}
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(ctxfn,struct,fn_expr,null);
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var vec__67991 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67996,p__67997){
var vec__67998 = p__67996;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67998,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67998,(1),null);
var vec__68001 = p__67997;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68001,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68001,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67991,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67991,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.evaluator.eval_let(ctx__$2,bindings,new_let_bindings,body);
}),expr);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__68012){
var vec__68013 = p__68012;
var seq__68014 = cljs.core.seq(vec__68013);
var first__68015 = cljs.core.first(seq__68014);
var seq__68014__$1 = cljs.core.next(seq__68014);
var _let = first__68015;
var first__68015__$1 = cljs.core.first(seq__68014__$1);
var seq__68014__$2 = cljs.core.next(seq__68014__$1);
var let_bindings = first__68015__$1;
var exprs = seq__68014__$2;
var expr = vec__68013;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__68018 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68018,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68018,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68018,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68018,(3),null);
var G__68022_69689 = ctx;
var G__68023_69690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__68022_69689,G__68023_69690) : sci.impl.analyzer.expand_declare.call(null,G__68022_69689,G__68023_69690));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (function (){var G__68025 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__68026 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68025,G__68026) : sci.impl.analyzer.analyze.call(null,G__68025,G__68026));
})();
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,var_name,init__$1,m__$3);
}),expr);
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__68028){
var vec__68031 = p__68028;
var seq__68032 = cljs.core.seq(vec__68031);
var first__68033 = cljs.core.first(seq__68032);
var seq__68032__$1 = cljs.core.next(seq__68032);
var op = first__68033;
var first__68033__$1 = cljs.core.first(seq__68032__$1);
var seq__68032__$2 = cljs.core.next(seq__68032__$1);
var fn_name = first__68033__$1;
var body = seq__68032__$2;
var expr = vec__68031;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__68034_69694 = ctx;
var G__68035_69695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__68034_69694,G__68035_69695) : sci.impl.analyzer.expand_declare.call(null,G__68034_69694,G__68035_69695));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__68038 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68038,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68038,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5804__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var ds = temp__5804__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5804__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__68041 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68041,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68041,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var meta_map__$3 = (function (){var G__68048 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__68049 = meta_map__$2;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68048,G__68049) : sci.impl.analyzer.analyze.call(null,G__68048,G__68049));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$3,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$5 = (function (){var G__68051 = meta_map__$4;
var G__68051__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68051,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__68051);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68051__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__68051__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3(ctxfn,f__$1,f__$1);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),expr);
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__68056 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68056,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68056,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ana = (function (){var G__68064 = ctx;
var G__68065 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68064,G__68065) : sci.impl.analyzer.analyze.call(null,G__68064,G__68065));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),null,null));
}),expr);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__68068 = cljs.core.count(children);
switch (G__68068) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return null;
}
}),null,expr,null);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,else$);
}
}),null,expr,null);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var case_val = (function (){var G__68075 = ctx;
var G__68076 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68075,G__68076) : sci.impl.analyzer.analyze.call(null,G__68075,G__68076));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__68072 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__68077 = ctx;
var G__68078 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68077,G__68078) : sci.impl.analyzer.analyze.call(null,G__68077,G__68078));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68072,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68072,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__68088 = cases__$1;
var seq__68089 = cljs.core.seq(vec__68088);
var first__68090 = cljs.core.first(seq__68089);
var seq__68089__$1 = cljs.core.next(seq__68089);
var k = first__68090;
var first__68090__$1 = cljs.core.first(seq__68089__$1);
var seq__68089__$2 = cljs.core.next(seq__68089__$1);
var v = first__68090__$1;
var cases__$2 = seq__68089__$2;
if(cljs.core.seq_QMARK_(k)){
var G__69707 = cases__$2;
var G__69708 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__68088,seq__68089,first__68090,seq__68089__$1,k,first__68090__$1,seq__68089__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__68072,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__68088,seq__68089,first__68090,seq__68089__$1,k,first__68090__$1,seq__68089__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__68072,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__69707;
ret_map = G__69708;
continue;
} else {
var G__69709 = cases__$2;
var G__69710 = assoc_new(ret_map,k,v);
cases__$1 = G__69709;
ret_map = G__69710;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}):(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(f,null,expr,null);
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var body = cljs.core.next(expr);
var vec__68096 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__69711 = exprs__$1;
var G__69712 = body_exprs;
var G__69713 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__69714 = finally_expr;
exprs = G__69711;
body_exprs = G__69712;
catch_exprs = G__69713;
finally_expr = G__69714;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__69715 = exprs__$1;
var G__69716 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__69717 = catch_exprs;
var G__69718 = finally_expr;
exprs = G__69715;
body_exprs = G__69716;
catch_exprs = G__69717;
finally_expr = G__69718;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68096,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68096,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68096,(2),null);
var body__$1 = (function (){var G__68106 = ctx;
var G__68107 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68106,G__68107) : sci.impl.analyzer.analyze.call(null,G__68106,G__68107));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__68108 = c;
var seq__68109 = cljs.core.seq(vec__68108);
var first__68110 = cljs.core.first(seq__68109);
var seq__68109__$1 = cljs.core.next(seq__68109);
var _ = first__68110;
var first__68110__$1 = cljs.core.first(seq__68109__$1);
var seq__68109__$2 = cljs.core.next(seq__68109__$1);
var ex = first__68110__$1;
var first__68110__$2 = cljs.core.first(seq__68109__$2);
var seq__68109__$3 = cljs.core.next(seq__68109__$2);
var binding = first__68110__$2;
var body__$2 = seq__68109__$3;
var temp__5802__auto__ = (function (){var G__68113 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__68113)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__68113)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__68113)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__68117 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__68118 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68117,G__68118) : sci.impl.analyzer.analyze.call(null,G__68117,G__68118));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__68120 = ctx;
var G__68121 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__68120,G__68121) : sci.impl.analyzer.analyze.call(null,G__68120,G__68121));
})():null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_try(ctx__$1,bindings,body__$1,catches__$1,finally$__$1);
}),expr);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__68123){
var vec__68124 = p__68123;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68124,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68124,(1),null);
var expr = vec__68124;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
throw sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0)));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__68130){
var vec__68132 = p__68130;
var seq__68133 = cljs.core.seq(vec__68132);
var first__68134 = cljs.core.first(seq__68133);
var seq__68133__$1 = cljs.core.next(seq__68133);
var _declare = first__68134;
var names = seq__68133__$1;
var expr = vec__68132;
var cnn_69729 = sci.impl.vars.current_ns_name();
var env_69730 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_69731 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_69730),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_69729], null));
var refers_69732 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_69731);
var the_current_ns_69733__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5802__auto__ = (function (){var and__5043__auto__ = refers_69732;
if(cljs.core.truth_(and__5043__auto__)){
return refers_69732.get(name);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_69729)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_69731,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__68138 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_69729),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__68138.sci$impl$vars$IVar$unbind$arity$1(null);

return G__68138;
})());
} else {
return the_current_ns_69731;
}
}
}),the_current_ns_69731,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_69730,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_69729,the_current_ns_69733__$1);
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__68144){
var vec__68147 = p__68144;
var seq__68148 = cljs.core.seq(vec__68147);
var first__68149 = cljs.core.first(seq__68148);
var seq__68148__$1 = cljs.core.next(seq__68148);
var _dot = first__68149;
var first__68149__$1 = cljs.core.first(seq__68148__$1);
var seq__68148__$2 = cljs.core.next(seq__68148__$1);
var instance_expr = first__68149__$1;
var first__68149__$2 = cljs.core.first(seq__68148__$2);
var seq__68148__$3 = cljs.core.next(seq__68148__$2);
var method_expr = first__68149__$2;
var args = seq__68148__$3;
var expr = vec__68147;
var vec__68151 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__68152 = cljs.core.seq(vec__68151);
var first__68153 = cljs.core.first(seq__68152);
var seq__68152__$1 = cljs.core.next(seq__68152);
var method_expr__$1 = first__68153;
var args__$1 = seq__68152__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5802__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto__)){
var t = temp__5802__auto__;
var clazz = (function (){var or__5045__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return (function (ctx__$1,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$1,bindings,instance_expr__$2,meth_name,field_access,args__$2,allowed_QMARK_);
});
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$2,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null),expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__68160){
var vec__68162 = p__68160;
var seq__68163 = cljs.core.seq(vec__68162);
var first__68164 = cljs.core.first(seq__68163);
var seq__68163__$1 = cljs.core.next(seq__68163);
var method_name = first__68164;
var first__68164__$1 = cljs.core.first(seq__68163__$1);
var seq__68163__$2 = cljs.core.next(seq__68163__$1);
var obj = first__68164__$1;
var args = seq__68163__$2;
var expr = vec__68162;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__68172){
var vec__68174 = p__68172;
var seq__68175 = cljs.core.seq(vec__68174);
var first__68176 = cljs.core.first(seq__68175);
var seq__68175__$1 = cljs.core.next(seq__68175);
var _new = first__68176;
var first__68176__$1 = cljs.core.first(seq__68175__$1);
var seq__68175__$2 = cljs.core.next(seq__68175__$1);
var class_sym = first__68176__$1;
var args = seq__68175__$2;
var expr = vec__68174;
var temp__5802__auto__ = (function (){var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var temp__5804__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5804__auto__)){
var opts = temp__5804__auto__;
var or__5045__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var clazz = temp__5804__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,class_sym) : sci.impl.analyzer.analyze.call(null,ctx,class_sym));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
var var_QMARK_ = (class$ instanceof sci.impl.types.EvalVar);
var maybe_var = ((var_QMARK_)?sci.impl.types.getVal(class$):null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
if(cljs.core.truth_(maybe_record_constructor)){
var G__68181 = ctx;
var G__68182 = expr;
var G__68183 = maybe_record_constructor;
var G__68184 = args__$1;
var G__68185 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__68186 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__68181,G__68182,G__68183,G__68184,G__68185,G__68186) : sci.impl.analyzer.return_call.call(null,G__68181,G__68182,G__68183,G__68184,G__68185,G__68186));
} else {
if(var_QMARK_){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68166_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__68166_SHARP_);
}),args__$1));
}),expr);
} else {
if((class$ instanceof sci.impl.types.EvalFn)){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.evaluator.eval(ctx__$1,bindings,class$),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68167_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__68167_SHARP_);
}),args__$1));
}),expr);
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68169_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__68169_SHARP_);
}),args__$1));
}),expr);

}
}
}
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5802__auto____$1)){
var record = temp__5802__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
var G__68191 = ctx;
var G__68192 = expr;
var G__68193 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__68194 = args__$1;
var G__68195 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__68196 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__68191,G__68192,G__68193,G__68194,G__68195,G__68196) : sci.impl.analyzer.return_call.call(null,G__68191,G__68192,G__68193,G__68194,G__68195,G__68196));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__68198){
var vec__68199 = p__68198;
var seq__68200 = cljs.core.seq(vec__68199);
var first__68201 = cljs.core.first(seq__68200);
var seq__68200__$1 = cljs.core.next(seq__68200);
var constructor_sym = first__68201;
var args = seq__68200__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__68217){
var vec__68218 = p__68217;
var seq__68219 = cljs.core.seq(vec__68218);
var first__68220 = cljs.core.first(seq__68219);
var seq__68219__$1 = cljs.core.next(seq__68219);
var _ns = first__68220;
var first__68220__$1 = cljs.core.first(seq__68219__$1);
var seq__68219__$2 = cljs.core.next(seq__68219__$1);
var ns_name = first__68220__$1;
var exprs = seq__68219__$2;
var expr = vec__68218;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__68235 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68235,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68235,(1),null);
var vec__68238 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68238,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68238,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__68257 = cljs.core.first(exprs__$3);
var seq__68258 = cljs.core.seq(vec__68257);
var first__68259 = cljs.core.first(seq__68258);
var seq__68258__$1 = cljs.core.next(seq__68258);
var k = first__68259;
var args = seq__68258__$1;
var expr__$1 = vec__68257;
var G__68266 = k;
var G__68266__$1 = (((G__68266 instanceof cljs.core.Keyword))?G__68266.fqn:null);
switch (G__68266__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__69865 = cljs.core.next(exprs__$3);
var G__69866 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__68267 = k;
var G__68267__$1 = (((G__68267 instanceof cljs.core.Keyword))?G__68267.fqn:null);
switch (G__68267__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__68267,G__68267__$1,G__68266,G__68266__$1,vec__68257,seq__68258,first__68259,seq__68258__$1,k,args,expr__$1,vec__68235,docstring,exprs__$1,vec__68238,attr_map,exprs__$2,attr_map__$1,vec__68218,seq__68219,first__68220,seq__68219__$1,_ns,first__68220__$1,seq__68219__$2,ns_name,exprs,expr){
return (function() { 
var G__69878__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__69878 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__69879__i = 0, G__69879__a = new Array(arguments.length -  1);
while (G__69879__i < G__69879__a.length) {G__69879__a[G__69879__i] = arguments[G__69879__i + 1]; ++G__69879__i;}
  args__$1 = new cljs.core.IndexedSeq(G__69879__a,0,null);
} 
return G__69878__delegate.call(this,ctx__$1,args__$1);};
G__69878.cljs$lang$maxFixedArity = 1;
G__69878.cljs$lang$applyTo = (function (arglist__69880){
var ctx__$1 = cljs.core.first(arglist__69880);
var args__$1 = cljs.core.rest(arglist__69880);
return G__69878__delegate(ctx__$1,args__$1);
});
G__69878.cljs$core$IFn$_invoke$arity$variadic = G__69878__delegate;
return G__69878;
})()
;
;})(exprs__$3,ret,G__68267,G__68267__$1,G__68266,G__68266__$1,vec__68257,seq__68258,first__68259,seq__68258__$1,k,args,expr__$1,vec__68235,docstring,exprs__$1,vec__68238,attr_map,exprs__$2,attr_map__$1,vec__68218,seq__68219,first__68220,seq__68219__$1,_ns,first__68220__$1,seq__68219__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68267__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__69865;
ret = G__69866;
continue;

break;
case "gen-class":
var G__69883 = cljs.core.next(exprs__$3);
var G__69884 = ret;
exprs__$3 = G__69883;
ret = G__69884;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68266__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2(((function (exprs__$3,ret,vec__68235,docstring,exprs__$1,vec__68238,attr_map,exprs__$2,attr_map__$1,vec__68218,seq__68219,first__68220,seq__68219__$1,_ns,first__68220__$1,seq__68219__$2,ns_name,exprs,expr){
return (function (ctx__$1,_bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__68235,docstring,exprs__$1,vec__68238,attr_map,exprs__$2,attr_map__$1,vec__68218,seq__68219,first__68220,seq__68219__$1,_ns,first__68220__$1,seq__68219__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__68270){
var vec__68271 = p__68270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68271,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68271,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__68275){
var vec__68276 = p__68275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68276,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68276,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68276,(2),null);
var expr = vec__68276;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.types.setVal(obj__$1,v__$2);
}),expr);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.info(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(obj__$2),(1));
var obj__$3 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(obj__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var obj__$4 = sci.impl.evaluator.eval(ctx__$1,bindings,obj__$3);
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$4,k,v__$2);
}),expr);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,f,analyzed_children,stack){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__68287 = cljs.core.count(analyzed_children);
switch (G__68287) {
case (0):
return (function (ctx,bindings){
var fexpr__68288 = bindings.get(f);
return (fexpr__68288.cljs$core$IFn$_invoke$arity$0 ? fexpr__68288.cljs$core$IFn$_invoke$arity$0() : fexpr__68288.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__68290 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__68289 = bindings.get(f);
return (fexpr__68289.cljs$core$IFn$_invoke$arity$1 ? fexpr__68289.cljs$core$IFn$_invoke$arity$1(G__68290) : fexpr__68289.call(null,G__68290));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__68292 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68293 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__68291 = bindings.get(f);
return (fexpr__68291.cljs$core$IFn$_invoke$arity$2 ? fexpr__68291.cljs$core$IFn$_invoke$arity$2(G__68292,G__68293) : fexpr__68291.call(null,G__68292,G__68293));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__68296 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68297 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68298 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__68295 = bindings.get(f);
return (fexpr__68295.cljs$core$IFn$_invoke$arity$3 ? fexpr__68295.cljs$core$IFn$_invoke$arity$3(G__68296,G__68297,G__68298) : fexpr__68295.call(null,G__68296,G__68297,G__68298));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__68303 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68304 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68305 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68306 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__68302 = bindings.get(f);
return (fexpr__68302.cljs$core$IFn$_invoke$arity$4 ? fexpr__68302.cljs$core$IFn$_invoke$arity$4(G__68303,G__68304,G__68305,G__68306) : fexpr__68302.call(null,G__68303,G__68304,G__68305,G__68306));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__68308 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68309 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68310 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68311 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68312 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__68307 = bindings.get(f);
return (fexpr__68307.cljs$core$IFn$_invoke$arity$5 ? fexpr__68307.cljs$core$IFn$_invoke$arity$5(G__68308,G__68309,G__68310,G__68311,G__68312) : fexpr__68307.call(null,G__68308,G__68309,G__68310,G__68311,G__68312));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__68315 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68316 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68317 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68318 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68319 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68320 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__68314 = bindings.get(f);
return (fexpr__68314.cljs$core$IFn$_invoke$arity$6 ? fexpr__68314.cljs$core$IFn$_invoke$arity$6(G__68315,G__68316,G__68317,G__68318,G__68319,G__68320) : fexpr__68314.call(null,G__68315,G__68316,G__68317,G__68318,G__68319,G__68320));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__68324 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68325 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68326 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68327 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68328 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68329 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68330 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__68323 = bindings.get(f);
return (fexpr__68323.cljs$core$IFn$_invoke$arity$7 ? fexpr__68323.cljs$core$IFn$_invoke$arity$7(G__68324,G__68325,G__68326,G__68327,G__68328,G__68329,G__68330) : fexpr__68323.call(null,G__68324,G__68325,G__68326,G__68327,G__68328,G__68329,G__68330));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__68332 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68333 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68334 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68335 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68336 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68337 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68338 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68339 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__68331 = bindings.get(f);
return (fexpr__68331.cljs$core$IFn$_invoke$arity$8 ? fexpr__68331.cljs$core$IFn$_invoke$arity$8(G__68332,G__68333,G__68334,G__68335,G__68336,G__68337,G__68338,G__68339) : fexpr__68331.call(null,G__68332,G__68333,G__68334,G__68335,G__68336,G__68337,G__68338,G__68339));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__68342 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68343 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68344 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68345 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68346 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68347 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68348 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68349 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68350 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__68341 = bindings.get(f);
return (fexpr__68341.cljs$core$IFn$_invoke$arity$9 ? fexpr__68341.cljs$core$IFn$_invoke$arity$9(G__68342,G__68343,G__68344,G__68345,G__68346,G__68347,G__68348,G__68349,G__68350) : fexpr__68341.call(null,G__68342,G__68343,G__68344,G__68345,G__68346,G__68347,G__68348,G__68349,G__68350));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__68353 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68354 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68355 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68356 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68357 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68358 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68359 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68360 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68361 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68362 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__68352 = bindings.get(f);
return (fexpr__68352.cljs$core$IFn$_invoke$arity$10 ? fexpr__68352.cljs$core$IFn$_invoke$arity$10(G__68353,G__68354,G__68355,G__68356,G__68357,G__68358,G__68359,G__68360,G__68361,G__68362) : fexpr__68352.call(null,G__68353,G__68354,G__68355,G__68356,G__68357,G__68358,G__68359,G__68360,G__68361,G__68362));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__68366 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68367 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68368 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68369 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68370 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68371 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68372 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68373 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68374 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68375 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68376 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__68365 = bindings.get(f);
return (fexpr__68365.cljs$core$IFn$_invoke$arity$11 ? fexpr__68365.cljs$core$IFn$_invoke$arity$11(G__68366,G__68367,G__68368,G__68369,G__68370,G__68371,G__68372,G__68373,G__68374,G__68375,G__68376) : fexpr__68365.call(null,G__68366,G__68367,G__68368,G__68369,G__68370,G__68371,G__68372,G__68373,G__68374,G__68375,G__68376));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__68380 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68381 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68382 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68383 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68384 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68385 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68386 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68387 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68388 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68389 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68390 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68391 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__68379 = bindings.get(f);
return (fexpr__68379.cljs$core$IFn$_invoke$arity$12 ? fexpr__68379.cljs$core$IFn$_invoke$arity$12(G__68380,G__68381,G__68382,G__68383,G__68384,G__68385,G__68386,G__68387,G__68388,G__68389,G__68390,G__68391) : fexpr__68379.call(null,G__68380,G__68381,G__68382,G__68383,G__68384,G__68385,G__68386,G__68387,G__68388,G__68389,G__68390,G__68391));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__68397 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68398 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68399 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68400 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68401 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68402 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68403 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68404 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68405 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68406 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68407 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68408 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68409 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__68396 = bindings.get(f);
return (fexpr__68396.cljs$core$IFn$_invoke$arity$13 ? fexpr__68396.cljs$core$IFn$_invoke$arity$13(G__68397,G__68398,G__68399,G__68400,G__68401,G__68402,G__68403,G__68404,G__68405,G__68406,G__68407,G__68408,G__68409) : fexpr__68396.call(null,G__68397,G__68398,G__68399,G__68400,G__68401,G__68402,G__68403,G__68404,G__68405,G__68406,G__68407,G__68408,G__68409));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__68411 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68412 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68413 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68414 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68415 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68416 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68417 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68418 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68419 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68420 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68421 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68422 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68423 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68424 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__68410 = bindings.get(f);
return (fexpr__68410.cljs$core$IFn$_invoke$arity$14 ? fexpr__68410.cljs$core$IFn$_invoke$arity$14(G__68411,G__68412,G__68413,G__68414,G__68415,G__68416,G__68417,G__68418,G__68419,G__68420,G__68421,G__68422,G__68423,G__68424) : fexpr__68410.call(null,G__68411,G__68412,G__68413,G__68414,G__68415,G__68416,G__68417,G__68418,G__68419,G__68420,G__68421,G__68422,G__68423,G__68424));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__68433 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68434 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68435 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68436 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68437 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68438 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68439 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68440 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68441 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68442 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68443 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68444 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68445 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68446 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68447 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__68432 = bindings.get(f);
return (fexpr__68432.cljs$core$IFn$_invoke$arity$15 ? fexpr__68432.cljs$core$IFn$_invoke$arity$15(G__68433,G__68434,G__68435,G__68436,G__68437,G__68438,G__68439,G__68440,G__68441,G__68442,G__68443,G__68444,G__68445,G__68446,G__68447) : fexpr__68432.call(null,G__68433,G__68434,G__68435,G__68436,G__68437,G__68438,G__68439,G__68440,G__68441,G__68442,G__68443,G__68444,G__68445,G__68446,G__68447));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__68457 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68458 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68459 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68460 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68461 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68462 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68463 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68464 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68465 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68466 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68467 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68468 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68469 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68470 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68471 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68472 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__68456 = bindings.get(f);
return (fexpr__68456.cljs$core$IFn$_invoke$arity$16 ? fexpr__68456.cljs$core$IFn$_invoke$arity$16(G__68457,G__68458,G__68459,G__68460,G__68461,G__68462,G__68463,G__68464,G__68465,G__68466,G__68467,G__68468,G__68469,G__68470,G__68471,G__68472) : fexpr__68456.call(null,G__68457,G__68458,G__68459,G__68460,G__68461,G__68462,G__68463,G__68464,G__68465,G__68466,G__68467,G__68468,G__68469,G__68470,G__68471,G__68472));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__68475 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68476 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68477 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68478 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68479 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68480 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68481 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68482 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68483 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68484 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68485 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68486 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68487 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68488 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68489 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68490 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__68491 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__68474 = bindings.get(f);
return (fexpr__68474.cljs$core$IFn$_invoke$arity$17 ? fexpr__68474.cljs$core$IFn$_invoke$arity$17(G__68475,G__68476,G__68477,G__68478,G__68479,G__68480,G__68481,G__68482,G__68483,G__68484,G__68485,G__68486,G__68487,G__68488,G__68489,G__68490,G__68491) : fexpr__68474.call(null,G__68475,G__68476,G__68477,G__68478,G__68479,G__68480,G__68481,G__68482,G__68483,G__68484,G__68485,G__68486,G__68487,G__68488,G__68489,G__68490,G__68491));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__68496 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68497 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68498 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68499 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68500 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68501 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68502 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68503 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68504 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68505 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68506 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68507 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68508 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68509 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68510 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68511 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__68512 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__68513 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__68495 = bindings.get(f);
return (fexpr__68495.cljs$core$IFn$_invoke$arity$18 ? fexpr__68495.cljs$core$IFn$_invoke$arity$18(G__68496,G__68497,G__68498,G__68499,G__68500,G__68501,G__68502,G__68503,G__68504,G__68505,G__68506,G__68507,G__68508,G__68509,G__68510,G__68511,G__68512,G__68513) : fexpr__68495.call(null,G__68496,G__68497,G__68498,G__68499,G__68500,G__68501,G__68502,G__68503,G__68504,G__68505,G__68506,G__68507,G__68508,G__68509,G__68510,G__68511,G__68512,G__68513));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__68516 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68517 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68518 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68519 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68520 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68521 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68522 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68523 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68524 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68525 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68526 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68527 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68528 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68529 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68530 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68531 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__68532 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__68533 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__68534 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__68515 = bindings.get(f);
return (fexpr__68515.cljs$core$IFn$_invoke$arity$19 ? fexpr__68515.cljs$core$IFn$_invoke$arity$19(G__68516,G__68517,G__68518,G__68519,G__68520,G__68521,G__68522,G__68523,G__68524,G__68525,G__68526,G__68527,G__68528,G__68529,G__68530,G__68531,G__68532,G__68533,G__68534) : fexpr__68515.call(null,G__68516,G__68517,G__68518,G__68519,G__68520,G__68521,G__68522,G__68523,G__68524,G__68525,G__68526,G__68527,G__68528,G__68529,G__68530,G__68531,G__68532,G__68533,G__68534));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,bindings.get(f),analyzed_children);
});

}
})(),null,expr,stack);
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var G__68543 = cljs.core.count(analyzed_children);
switch (G__68543) {
case (0):
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__68544 = ctx;
var G__68545 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68544,G__68545) : f.call(null,G__68544,G__68545));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__68546 = ctx;
var G__68547 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68548 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__68546,G__68547,G__68548) : f.call(null,G__68546,G__68547,G__68548));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__68551 = ctx;
var G__68552 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68553 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68554 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__68551,G__68552,G__68553,G__68554) : f.call(null,G__68551,G__68552,G__68553,G__68554));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__68557 = ctx;
var G__68558 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68559 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68560 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68561 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__68557,G__68558,G__68559,G__68560,G__68561) : f.call(null,G__68557,G__68558,G__68559,G__68560,G__68561));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__68564 = ctx;
var G__68565 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68566 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68567 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68568 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68569 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__68564,G__68565,G__68566,G__68567,G__68568,G__68569) : f.call(null,G__68564,G__68565,G__68566,G__68567,G__68568,G__68569));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__68571 = ctx;
var G__68572 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68573 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68574 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68575 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68576 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68577 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__68571,G__68572,G__68573,G__68574,G__68575,G__68576,G__68577) : f.call(null,G__68571,G__68572,G__68573,G__68574,G__68575,G__68576,G__68577));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__68581 = ctx;
var G__68582 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68583 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68584 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68585 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68586 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68587 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68588 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__68581,G__68582,G__68583,G__68584,G__68585,G__68586,G__68587,G__68588) : f.call(null,G__68581,G__68582,G__68583,G__68584,G__68585,G__68586,G__68587,G__68588));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__68590 = ctx;
var G__68591 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68592 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68593 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68594 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68595 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68596 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68597 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68598 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__68590,G__68591,G__68592,G__68593,G__68594,G__68595,G__68596,G__68597,G__68598) : f.call(null,G__68590,G__68591,G__68592,G__68593,G__68594,G__68595,G__68596,G__68597,G__68598));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__68601 = ctx;
var G__68602 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68603 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68604 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68605 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68606 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68607 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68608 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68609 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68610 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__68601,G__68602,G__68603,G__68604,G__68605,G__68606,G__68607,G__68608,G__68609,G__68610) : f.call(null,G__68601,G__68602,G__68603,G__68604,G__68605,G__68606,G__68607,G__68608,G__68609,G__68610));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__68615 = ctx;
var G__68616 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68617 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68618 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68619 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68620 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68621 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68622 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68623 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68624 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68625 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__68615,G__68616,G__68617,G__68618,G__68619,G__68620,G__68621,G__68622,G__68623,G__68624,G__68625) : f.call(null,G__68615,G__68616,G__68617,G__68618,G__68619,G__68620,G__68621,G__68622,G__68623,G__68624,G__68625));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__68628 = ctx;
var G__68629 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68630 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68631 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68632 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68633 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68634 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68635 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68636 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68637 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68638 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68639 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__68628,G__68629,G__68630,G__68631,G__68632,G__68633,G__68634,G__68635,G__68636,G__68637,G__68638,G__68639) : f.call(null,G__68628,G__68629,G__68630,G__68631,G__68632,G__68633,G__68634,G__68635,G__68636,G__68637,G__68638,G__68639));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__68642 = ctx;
var G__68643 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68644 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68645 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68646 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68647 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68648 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68649 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68650 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68651 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68652 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68653 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68654 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__68642,G__68643,G__68644,G__68645,G__68646,G__68647,G__68648,G__68649,G__68650,G__68651,G__68652,G__68653,G__68654) : f.call(null,G__68642,G__68643,G__68644,G__68645,G__68646,G__68647,G__68648,G__68649,G__68650,G__68651,G__68652,G__68653,G__68654));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__68660 = ctx;
var G__68661 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68662 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68663 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68664 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68665 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68666 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68667 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68668 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68669 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68670 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68671 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68672 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68673 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__68660,G__68661,G__68662,G__68663,G__68664,G__68665,G__68666,G__68667,G__68668,G__68669,G__68670,G__68671,G__68672,G__68673) : f.call(null,G__68660,G__68661,G__68662,G__68663,G__68664,G__68665,G__68666,G__68667,G__68668,G__68669,G__68670,G__68671,G__68672,G__68673));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__68677 = ctx;
var G__68678 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68679 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68680 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68681 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68682 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68683 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68684 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68685 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68686 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68687 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68688 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68689 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68690 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68691 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__68677,G__68678,G__68679,G__68680,G__68681,G__68682,G__68683,G__68684,G__68685,G__68686,G__68687,G__68688,G__68689,G__68690,G__68691) : f.call(null,G__68677,G__68678,G__68679,G__68680,G__68681,G__68682,G__68683,G__68684,G__68685,G__68686,G__68687,G__68688,G__68689,G__68690,G__68691));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__68692 = ctx;
var G__68693 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68694 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68695 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68696 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68697 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68698 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68699 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68700 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68701 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68702 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68703 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68704 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68705 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68706 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68707 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__68692,G__68693,G__68694,G__68695,G__68696,G__68697,G__68698,G__68699,G__68700,G__68701,G__68702,G__68703,G__68704,G__68705,G__68706,G__68707) : f.call(null,G__68692,G__68693,G__68694,G__68695,G__68696,G__68697,G__68698,G__68699,G__68700,G__68701,G__68702,G__68703,G__68704,G__68705,G__68706,G__68707));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__68708 = ctx;
var G__68709 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68710 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68711 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68712 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68713 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68714 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68715 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68716 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68717 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68718 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68719 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68720 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68721 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68722 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68723 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68724 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__68708,G__68709,G__68710,G__68711,G__68712,G__68713,G__68714,G__68715,G__68716,G__68717,G__68718,G__68719,G__68720,G__68721,G__68722,G__68723,G__68724) : f.call(null,G__68708,G__68709,G__68710,G__68711,G__68712,G__68713,G__68714,G__68715,G__68716,G__68717,G__68718,G__68719,G__68720,G__68721,G__68722,G__68723,G__68724));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__68725 = ctx;
var G__68726 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68727 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68728 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68729 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68730 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68731 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68732 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68733 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68734 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68735 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68736 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68737 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68738 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68739 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68740 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68741 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__68742 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__68725,G__68726,G__68727,G__68728,G__68729,G__68730,G__68731,G__68732,G__68733,G__68734,G__68735,G__68736,G__68737,G__68738,G__68739,G__68740,G__68741,G__68742) : f.call(null,G__68725,G__68726,G__68727,G__68728,G__68729,G__68730,G__68731,G__68732,G__68733,G__68734,G__68735,G__68736,G__68737,G__68738,G__68739,G__68740,G__68741,G__68742));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__68743 = ctx;
var G__68744 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68745 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68746 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68747 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68748 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68749 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68750 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68751 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68752 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68753 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68754 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68755 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68756 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68757 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68758 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68759 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__68760 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__68761 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__68743,G__68744,G__68745,G__68746,G__68747,G__68748,G__68749,G__68750,G__68751,G__68752,G__68753,G__68754,G__68755,G__68756,G__68757,G__68758,G__68759,G__68760,G__68761) : f.call(null,G__68743,G__68744,G__68745,G__68746,G__68747,G__68748,G__68749,G__68750,G__68751,G__68752,G__68753,G__68754,G__68755,G__68756,G__68757,G__68758,G__68759,G__68760,G__68761));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__68762 = ctx;
var G__68763 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68764 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68765 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68766 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68767 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68768 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68769 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68770 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68771 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68772 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68773 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68774 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__68775 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__68776 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__68777 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__68778 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__68779 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__68780 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__68781 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__68762,G__68763,G__68764,G__68765,G__68766,G__68767,G__68768,G__68769,G__68770,G__68771,G__68772,G__68773,G__68774,G__68775,G__68776,G__68777,G__68778,G__68779,G__68780,G__68781) : f.call(null,G__68762,G__68763,G__68764,G__68765,G__68766,G__68767,G__68768,G__68769,G__68770,G__68771,G__68772,G__68773,G__68774,G__68775,G__68776,G__68777,G__68778,G__68779,G__68780,G__68781));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
});

}
})(),expr);
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__68786 = cljs.core.count(analyzed_children);
switch (G__68786) {
case (0):
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var fexpr__68787 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68787.cljs$core$IFn$_invoke$arity$0 ? fexpr__68787.cljs$core$IFn$_invoke$arity$0() : fexpr__68787.call(null));
});
} else {
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68789 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__68788 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68788.cljs$core$IFn$_invoke$arity$1 ? fexpr__68788.cljs$core$IFn$_invoke$arity$1(G__68789) : fexpr__68788.call(null,G__68789));
});
} else {
return (function (ctx,bindings){
var G__68790 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68790) : f.call(null,G__68790));
});
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68792 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68793 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__68791 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68791.cljs$core$IFn$_invoke$arity$2 ? fexpr__68791.cljs$core$IFn$_invoke$arity$2(G__68792,G__68793) : fexpr__68791.call(null,G__68792,G__68793));
});
} else {
return (function (ctx,bindings){
var G__68794 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68795 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68794,G__68795) : f.call(null,G__68794,G__68795));
});
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68798 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68799 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68800 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__68797 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68797.cljs$core$IFn$_invoke$arity$3 ? fexpr__68797.cljs$core$IFn$_invoke$arity$3(G__68798,G__68799,G__68800) : fexpr__68797.call(null,G__68798,G__68799,G__68800));
});
} else {
return (function (ctx,bindings){
var G__68801 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68802 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68803 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__68801,G__68802,G__68803) : f.call(null,G__68801,G__68802,G__68803));
});
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68817 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68818 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68819 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68820 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__68816 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68816.cljs$core$IFn$_invoke$arity$4 ? fexpr__68816.cljs$core$IFn$_invoke$arity$4(G__68817,G__68818,G__68819,G__68820) : fexpr__68816.call(null,G__68817,G__68818,G__68819,G__68820));
});
} else {
return (function (ctx,bindings){
var G__68821 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68822 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68823 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68824 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__68821,G__68822,G__68823,G__68824) : f.call(null,G__68821,G__68822,G__68823,G__68824));
});
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68826 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68827 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68828 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68829 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68830 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__68825 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68825.cljs$core$IFn$_invoke$arity$5 ? fexpr__68825.cljs$core$IFn$_invoke$arity$5(G__68826,G__68827,G__68828,G__68829,G__68830) : fexpr__68825.call(null,G__68826,G__68827,G__68828,G__68829,G__68830));
});
} else {
return (function (ctx,bindings){
var G__68832 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68833 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68834 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68835 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68836 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__68832,G__68833,G__68834,G__68835,G__68836) : f.call(null,G__68832,G__68833,G__68834,G__68835,G__68836));
});
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68840 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68841 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68842 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68843 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68844 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68845 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__68839 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68839.cljs$core$IFn$_invoke$arity$6 ? fexpr__68839.cljs$core$IFn$_invoke$arity$6(G__68840,G__68841,G__68842,G__68843,G__68844,G__68845) : fexpr__68839.call(null,G__68840,G__68841,G__68842,G__68843,G__68844,G__68845));
});
} else {
return (function (ctx,bindings){
var G__68847 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68848 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68849 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68850 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68851 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68852 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__68847,G__68848,G__68849,G__68850,G__68851,G__68852) : f.call(null,G__68847,G__68848,G__68849,G__68850,G__68851,G__68852));
});
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68857 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68858 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68859 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68860 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68861 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68862 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68863 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__68856 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68856.cljs$core$IFn$_invoke$arity$7 ? fexpr__68856.cljs$core$IFn$_invoke$arity$7(G__68857,G__68858,G__68859,G__68860,G__68861,G__68862,G__68863) : fexpr__68856.call(null,G__68857,G__68858,G__68859,G__68860,G__68861,G__68862,G__68863));
});
} else {
return (function (ctx,bindings){
var G__68866 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68867 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68868 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68869 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68870 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68871 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68872 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__68866,G__68867,G__68868,G__68869,G__68870,G__68871,G__68872) : f.call(null,G__68866,G__68867,G__68868,G__68869,G__68870,G__68871,G__68872));
});
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68885 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68886 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68887 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68888 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68889 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68890 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68891 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68892 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__68884 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68884.cljs$core$IFn$_invoke$arity$8 ? fexpr__68884.cljs$core$IFn$_invoke$arity$8(G__68885,G__68886,G__68887,G__68888,G__68889,G__68890,G__68891,G__68892) : fexpr__68884.call(null,G__68885,G__68886,G__68887,G__68888,G__68889,G__68890,G__68891,G__68892));
});
} else {
return (function (ctx,bindings){
var G__68895 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68896 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68897 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68898 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68899 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68900 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68901 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68902 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__68895,G__68896,G__68897,G__68898,G__68899,G__68900,G__68901,G__68902) : f.call(null,G__68895,G__68896,G__68897,G__68898,G__68899,G__68900,G__68901,G__68902));
});
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68905 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68906 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68907 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68908 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68909 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68910 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68911 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68912 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68913 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__68904 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68904.cljs$core$IFn$_invoke$arity$9 ? fexpr__68904.cljs$core$IFn$_invoke$arity$9(G__68905,G__68906,G__68907,G__68908,G__68909,G__68910,G__68911,G__68912,G__68913) : fexpr__68904.call(null,G__68905,G__68906,G__68907,G__68908,G__68909,G__68910,G__68911,G__68912,G__68913));
});
} else {
return (function (ctx,bindings){
var G__68916 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68917 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68918 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68919 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68920 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68921 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68922 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68923 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68924 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__68916,G__68917,G__68918,G__68919,G__68920,G__68921,G__68922,G__68923,G__68924) : f.call(null,G__68916,G__68917,G__68918,G__68919,G__68920,G__68921,G__68922,G__68923,G__68924));
});
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68927 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68928 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68929 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68930 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68931 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68932 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68933 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68934 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68935 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68936 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__68926 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68926.cljs$core$IFn$_invoke$arity$10 ? fexpr__68926.cljs$core$IFn$_invoke$arity$10(G__68927,G__68928,G__68929,G__68930,G__68931,G__68932,G__68933,G__68934,G__68935,G__68936) : fexpr__68926.call(null,G__68927,G__68928,G__68929,G__68930,G__68931,G__68932,G__68933,G__68934,G__68935,G__68936));
});
} else {
return (function (ctx,bindings){
var G__68937 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68938 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68939 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68940 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68941 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68942 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68943 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68944 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68945 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68946 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__68937,G__68938,G__68939,G__68940,G__68941,G__68942,G__68943,G__68944,G__68945,G__68946) : f.call(null,G__68937,G__68938,G__68939,G__68940,G__68941,G__68942,G__68943,G__68944,G__68945,G__68946));
});
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68954 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68955 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68956 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68957 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68958 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68959 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68960 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68961 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68962 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68963 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68964 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__68953 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68953.cljs$core$IFn$_invoke$arity$11 ? fexpr__68953.cljs$core$IFn$_invoke$arity$11(G__68954,G__68955,G__68956,G__68957,G__68958,G__68959,G__68960,G__68961,G__68962,G__68963,G__68964) : fexpr__68953.call(null,G__68954,G__68955,G__68956,G__68957,G__68958,G__68959,G__68960,G__68961,G__68962,G__68963,G__68964));
});
} else {
return (function (ctx,bindings){
var G__68966 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68967 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68968 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68969 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68970 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68971 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68972 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68973 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68974 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68975 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68976 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__68966,G__68967,G__68968,G__68969,G__68970,G__68971,G__68972,G__68973,G__68974,G__68975,G__68976) : f.call(null,G__68966,G__68967,G__68968,G__68969,G__68970,G__68971,G__68972,G__68973,G__68974,G__68975,G__68976));
});
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__68979 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68980 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68981 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68982 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68983 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68984 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__68985 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__68986 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__68987 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__68988 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__68989 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__68990 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__68978 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__68978.cljs$core$IFn$_invoke$arity$12 ? fexpr__68978.cljs$core$IFn$_invoke$arity$12(G__68979,G__68980,G__68981,G__68982,G__68983,G__68984,G__68985,G__68986,G__68987,G__68988,G__68989,G__68990) : fexpr__68978.call(null,G__68979,G__68980,G__68981,G__68982,G__68983,G__68984,G__68985,G__68986,G__68987,G__68988,G__68989,G__68990));
});
} else {
return (function (ctx,bindings){
var G__68994 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__68995 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__68996 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__68997 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__68998 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__68999 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69000 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69001 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69002 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69003 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69004 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69005 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__68994,G__68995,G__68996,G__68997,G__68998,G__68999,G__69000,G__69001,G__69002,G__69003,G__69004,G__69005) : f.call(null,G__68994,G__68995,G__68996,G__68997,G__68998,G__68999,G__69000,G__69001,G__69002,G__69003,G__69004,G__69005));
});
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__69015 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69016 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69017 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69018 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69019 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69020 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69021 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69022 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69023 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69024 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69025 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69026 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69027 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__69014 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__69014.cljs$core$IFn$_invoke$arity$13 ? fexpr__69014.cljs$core$IFn$_invoke$arity$13(G__69015,G__69016,G__69017,G__69018,G__69019,G__69020,G__69021,G__69022,G__69023,G__69024,G__69025,G__69026,G__69027) : fexpr__69014.call(null,G__69015,G__69016,G__69017,G__69018,G__69019,G__69020,G__69021,G__69022,G__69023,G__69024,G__69025,G__69026,G__69027));
});
} else {
return (function (ctx,bindings){
var G__69034 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69035 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69036 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69037 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69038 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69039 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69040 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69041 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69042 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69043 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69044 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69045 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69046 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__69034,G__69035,G__69036,G__69037,G__69038,G__69039,G__69040,G__69041,G__69042,G__69043,G__69044,G__69045,G__69046) : f.call(null,G__69034,G__69035,G__69036,G__69037,G__69038,G__69039,G__69040,G__69041,G__69042,G__69043,G__69044,G__69045,G__69046));
});
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__69054 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69055 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69056 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69057 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69058 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69059 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69060 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69061 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69062 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69063 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69064 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69065 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69066 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69067 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__69053 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__69053.cljs$core$IFn$_invoke$arity$14 ? fexpr__69053.cljs$core$IFn$_invoke$arity$14(G__69054,G__69055,G__69056,G__69057,G__69058,G__69059,G__69060,G__69061,G__69062,G__69063,G__69064,G__69065,G__69066,G__69067) : fexpr__69053.call(null,G__69054,G__69055,G__69056,G__69057,G__69058,G__69059,G__69060,G__69061,G__69062,G__69063,G__69064,G__69065,G__69066,G__69067));
});
} else {
return (function (ctx,bindings){
var G__69069 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69070 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69071 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69072 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69073 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69074 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69075 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69076 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69077 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69078 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69079 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69080 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69081 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69082 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__69069,G__69070,G__69071,G__69072,G__69073,G__69074,G__69075,G__69076,G__69077,G__69078,G__69079,G__69080,G__69081,G__69082) : f.call(null,G__69069,G__69070,G__69071,G__69072,G__69073,G__69074,G__69075,G__69076,G__69077,G__69078,G__69079,G__69080,G__69081,G__69082));
});
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__69084 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69085 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69086 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69087 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69088 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69089 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69090 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69091 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69092 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69093 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69094 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69095 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69096 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69097 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69098 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__69083 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__69083.cljs$core$IFn$_invoke$arity$15 ? fexpr__69083.cljs$core$IFn$_invoke$arity$15(G__69084,G__69085,G__69086,G__69087,G__69088,G__69089,G__69090,G__69091,G__69092,G__69093,G__69094,G__69095,G__69096,G__69097,G__69098) : fexpr__69083.call(null,G__69084,G__69085,G__69086,G__69087,G__69088,G__69089,G__69090,G__69091,G__69092,G__69093,G__69094,G__69095,G__69096,G__69097,G__69098));
});
} else {
return (function (ctx,bindings){
var G__69110 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69111 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69112 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69113 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69114 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69115 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69116 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69117 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69118 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69119 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69120 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69121 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69122 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69123 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69124 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__69110,G__69111,G__69112,G__69113,G__69114,G__69115,G__69116,G__69117,G__69118,G__69119,G__69120,G__69121,G__69122,G__69123,G__69124) : f.call(null,G__69110,G__69111,G__69112,G__69113,G__69114,G__69115,G__69116,G__69117,G__69118,G__69119,G__69120,G__69121,G__69122,G__69123,G__69124));
});
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__69136 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69137 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69138 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69139 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69140 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69141 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69142 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69144 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69145 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69146 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69147 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69148 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69149 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69150 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69151 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69152 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__69135 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__69135.cljs$core$IFn$_invoke$arity$16 ? fexpr__69135.cljs$core$IFn$_invoke$arity$16(G__69136,G__69137,G__69138,G__69139,G__69140,G__69141,G__69142,G__69144,G__69145,G__69146,G__69147,G__69148,G__69149,G__69150,G__69151,G__69152) : fexpr__69135.call(null,G__69136,G__69137,G__69138,G__69139,G__69140,G__69141,G__69142,G__69144,G__69145,G__69146,G__69147,G__69148,G__69149,G__69150,G__69151,G__69152));
});
} else {
return (function (ctx,bindings){
var G__69159 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69160 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69161 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69162 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69163 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69164 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69165 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69166 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69167 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69168 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69169 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69170 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69171 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69172 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69173 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69174 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__69159,G__69160,G__69161,G__69162,G__69163,G__69164,G__69165,G__69166,G__69167,G__69168,G__69169,G__69170,G__69171,G__69172,G__69173,G__69174) : f.call(null,G__69159,G__69160,G__69161,G__69162,G__69163,G__69164,G__69165,G__69166,G__69167,G__69168,G__69169,G__69170,G__69171,G__69172,G__69173,G__69174));
});
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__69191 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69192 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69193 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69194 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69195 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69196 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69197 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69198 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69199 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69200 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69201 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69202 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69203 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69204 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69205 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69206 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__69207 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__69190 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__69190.cljs$core$IFn$_invoke$arity$17 ? fexpr__69190.cljs$core$IFn$_invoke$arity$17(G__69191,G__69192,G__69193,G__69194,G__69195,G__69196,G__69197,G__69198,G__69199,G__69200,G__69201,G__69202,G__69203,G__69204,G__69205,G__69206,G__69207) : fexpr__69190.call(null,G__69191,G__69192,G__69193,G__69194,G__69195,G__69196,G__69197,G__69198,G__69199,G__69200,G__69201,G__69202,G__69203,G__69204,G__69205,G__69206,G__69207));
});
} else {
return (function (ctx,bindings){
var G__69218 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69219 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69220 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69221 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69222 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69223 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69224 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69225 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69226 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69227 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69228 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69229 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69230 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69231 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69232 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69233 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__69234 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__69218,G__69219,G__69220,G__69221,G__69222,G__69223,G__69224,G__69225,G__69226,G__69227,G__69228,G__69229,G__69230,G__69231,G__69232,G__69233,G__69234) : f.call(null,G__69218,G__69219,G__69220,G__69221,G__69222,G__69223,G__69224,G__69225,G__69226,G__69227,G__69228,G__69229,G__69230,G__69231,G__69232,G__69233,G__69234));
});
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__69243 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69244 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69245 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69246 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69247 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69248 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69249 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69250 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69251 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69252 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69253 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69254 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69255 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69256 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69257 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69258 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__69259 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__69260 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__69242 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__69242.cljs$core$IFn$_invoke$arity$18 ? fexpr__69242.cljs$core$IFn$_invoke$arity$18(G__69243,G__69244,G__69245,G__69246,G__69247,G__69248,G__69249,G__69250,G__69251,G__69252,G__69253,G__69254,G__69255,G__69256,G__69257,G__69258,G__69259,G__69260) : fexpr__69242.call(null,G__69243,G__69244,G__69245,G__69246,G__69247,G__69248,G__69249,G__69250,G__69251,G__69252,G__69253,G__69254,G__69255,G__69256,G__69257,G__69258,G__69259,G__69260));
});
} else {
return (function (ctx,bindings){
var G__69263 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69264 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69265 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69266 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69267 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69268 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69269 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69270 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69271 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69272 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69273 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69274 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69275 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69276 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69277 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69278 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__69279 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__69280 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__69263,G__69264,G__69265,G__69266,G__69267,G__69268,G__69269,G__69270,G__69271,G__69272,G__69273,G__69274,G__69275,G__69276,G__69277,G__69278,G__69279,G__69280) : f.call(null,G__69263,G__69264,G__69265,G__69266,G__69267,G__69268,G__69269,G__69270,G__69271,G__69272,G__69273,G__69274,G__69275,G__69276,G__69277,G__69278,G__69279,G__69280));
});
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__69294 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69295 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69296 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69297 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69298 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69299 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69300 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69301 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69302 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69303 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69304 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69305 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69306 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69307 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69308 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69309 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__69310 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__69311 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__69312 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__69293 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__69293.cljs$core$IFn$_invoke$arity$19 ? fexpr__69293.cljs$core$IFn$_invoke$arity$19(G__69294,G__69295,G__69296,G__69297,G__69298,G__69299,G__69300,G__69301,G__69302,G__69303,G__69304,G__69305,G__69306,G__69307,G__69308,G__69309,G__69310,G__69311,G__69312) : fexpr__69293.call(null,G__69294,G__69295,G__69296,G__69297,G__69298,G__69299,G__69300,G__69301,G__69302,G__69303,G__69304,G__69305,G__69306,G__69307,G__69308,G__69309,G__69310,G__69311,G__69312));
});
} else {
return (function (ctx,bindings){
var G__69320 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__69321 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__69322 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__69323 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__69324 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__69325 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__69326 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__69327 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__69328 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__69329 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__69330 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__69331 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__69332 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__69333 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__69334 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__69335 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__69336 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__69337 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__69338 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__69320,G__69321,G__69322,G__69323,G__69324,G__69325,G__69326,G__69327,G__69328,G__69329,G__69330,G__69331,G__69332,G__69333,G__69334,G__69335,G__69336,G__69337,G__69338) : f.call(null,G__69320,G__69321,G__69322,G__69323,G__69324,G__69325,G__69326,G__69327,G__69328,G__69329,G__69330,G__69331,G__69332,G__69333,G__69334,G__69335,G__69336,G__69337,G__69338));
});
}

break;
default:
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f)),analyzed_children);
});
} else {
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
});
}

}
})(),null,expr,stack);
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_ctx__$1,_bindings){
return snd;
}),expr);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__69354 = ctx;
var G__69355 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__69354,G__69355) : sci.impl.analyzer.analyze.call(null,G__69354,G__69355));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var ns_sym = sci.impl.evaluator.eval(ctx__$1,bindings,ns_expr);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),expr);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = special_sym;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5043__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__5045__auto__ = special_sym;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__5043__auto__ = f_meta;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = f_meta;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5043__auto__;
}
})())){
var vec__69376 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69376,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69376,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = idx;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),expr);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(eval_QMARK_);
if(and__5043__auto__){
var or__5045__auto__ = special_sym;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__5043__auto__;
}
})())){
var G__69383 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__69383)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__69383)){
return sci.impl.analyzer.return_and(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__69383)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__69383)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__69383)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__69383)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__69383)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__69383)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__69383)){
return sci.impl.analyzer.return_do(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__69383)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__69383)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__69383)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__69383)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__69383)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__69383)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__69383)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__69383)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__69383)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__69383)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__69383)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__69383)){
return sci.impl.analyzer.return_recur(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__69383)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__69383)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__69383)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__69383)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__69383)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__69383)){
return sci.impl.analyzer.return_or(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69383)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__5043__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__5043__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v__$1) : sci.impl.analyzer.analyze.call(null,ctx,v__$1));
})()
));
return expanded;
} else {
var temp__5802__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5802__auto__)){
var f__$2 = temp__5802__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5802__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5802__auto____$1)){
var op = temp__5802__auto____$1;
var G__69394 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__69394)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__69394)){
return sci.impl.analyzer.return_binding_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1)))){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.vars.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}catch (e69390){if((e69390 instanceof Error)){
var e = e69390;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(null,null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0))));
} else {
throw e69390;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__69397 = ccount;
switch (G__69397) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.evaluator.eval(ctx__$1,bindings,arg));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.evaluator.eval(ctx__$1,bindings,arg0),sci.impl.evaluator.eval(ctx__$1,bindings,arg1));
}),expr);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
var f__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,f__$1);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,the_map);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx,children);
if((cljs.core.count(analyzed_children) <= (16))){
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.array_map,analyzed_children,null,null);
} else {
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.hash_map,analyzed_children,null,null);
}
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (((cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)))));
var analyzed_map = ((constant_map_QMARK_)?expr:((cljs.core.not(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ctx)))?sci.impl.analyzer.return_map(ctx,expr):cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs))
));
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__69411 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__69412 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__69411,G__69412) : sci.impl.analyzer.analyze.call(null,G__69411,G__69412));
})():null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
var ret = (cljs.core.truth_(analyzed_meta__$1)?(((analyzed_map instanceof sci.impl.types.EvalFn))?sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.handle_meta(ctx__$1,bindings,analyzed_meta__$1);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_map);
return cljs.core.with_meta(coll,md);
}),expr):cljs.core.with_meta(analyzed_map,analyzed_meta__$1)):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,_f1,f2,expr,m){
var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m)):null);
var must_eval = (((!(constant_coll_QMARK_))) || ((!((m === analyzed_meta)))));
var analyzed_coll = (((!(must_eval)))?expr:(cljs.core.truth_(m)?(function (){var ef = sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_meta);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,ef);
return cljs.core.with_meta(coll,md);
}),expr);
})():sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null)));
return analyzed_coll;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69423_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__69423_SHARP_);
}),vs__$1)));
}),js_val);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var arr = [];
var seq__69428_71264 = cljs.core.seq(vs);
var chunk__69429_71265 = null;
var count__69430_71266 = (0);
var i__69431_71267 = (0);
while(true){
if((i__69431_71267 < count__69430_71266)){
var x_71269 = chunk__69429_71265.cljs$core$IIndexed$_nth$arity$2(null,i__69431_71267);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_71269));


var G__71271 = seq__69428_71264;
var G__71272 = chunk__69429_71265;
var G__71273 = count__69430_71266;
var G__71274 = (i__69431_71267 + (1));
seq__69428_71264 = G__71271;
chunk__69429_71265 = G__71272;
count__69430_71266 = G__71273;
i__69431_71267 = G__71274;
continue;
} else {
var temp__5804__auto___71276 = cljs.core.seq(seq__69428_71264);
if(temp__5804__auto___71276){
var seq__69428_71284__$1 = temp__5804__auto___71276;
if(cljs.core.chunked_seq_QMARK_(seq__69428_71284__$1)){
var c__5568__auto___71285 = cljs.core.chunk_first(seq__69428_71284__$1);
var G__71286 = cljs.core.chunk_rest(seq__69428_71284__$1);
var G__71287 = c__5568__auto___71285;
var G__71288 = cljs.core.count(c__5568__auto___71285);
var G__71289 = (0);
seq__69428_71264 = G__71286;
chunk__69429_71265 = G__71287;
count__69430_71266 = G__71288;
i__69431_71267 = G__71289;
continue;
} else {
var x_71290 = cljs.core.first(seq__69428_71284__$1);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_71290));


var G__71292 = cljs.core.next(seq__69428_71284__$1);
var G__71293 = null;
var G__71294 = (0);
var G__71295 = (0);
seq__69428_71264 = G__71292;
chunk__69429_71265 = G__71293;
count__69430_71266 = G__71294;
i__69431_71267 = G__71295;
continue;
}
} else {
}
}
break;
}

return arr;
}),js_val);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__69441 = arguments.length;
switch (G__69441) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return expr;
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
