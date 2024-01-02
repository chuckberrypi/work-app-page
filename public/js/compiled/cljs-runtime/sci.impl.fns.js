goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__64361 = (fixed_arity | (0));
switch (G__64361) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64363 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__64362){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64363,G__64362);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65580 = cljs.core._nth(recur_val,(0));
G__64362 = G__65580;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64366 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__64365){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64366,G__64365);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65581 = cljs.core._nth(recur_val,(0));
G__64365 = G__65581;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64376 = cljs.core._nth(params,(0));
var G__64377 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__64374,G__64375){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64376,G__64374);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64377,G__64375);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65582 = cljs.core._nth(recur_val,(0));
var G__65583 = cljs.core._nth(recur_val,(1));
G__64374 = G__65582;
G__64375 = G__65583;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64380 = cljs.core._nth(params,(0));
var G__64381 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__64378,G__64379){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64380,G__64378);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64381,G__64379);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65584 = cljs.core._nth(recur_val,(0));
var G__65585 = cljs.core._nth(recur_val,(1));
G__64378 = G__65584;
G__64379 = G__65585;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64385 = cljs.core._nth(params,(0));
var G__64386 = cljs.core._nth(params,(1));
var G__64387 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__64382,G__64383,G__64384){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64385,G__64382);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64386,G__64383);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64387,G__64384);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65588 = cljs.core._nth(recur_val,(0));
var G__65589 = cljs.core._nth(recur_val,(1));
var G__65590 = cljs.core._nth(recur_val,(2));
G__64382 = G__65588;
G__64383 = G__65589;
G__64384 = G__65590;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64391 = cljs.core._nth(params,(0));
var G__64392 = cljs.core._nth(params,(1));
var G__64393 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__64388,G__64389,G__64390){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64391,G__64388);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64392,G__64389);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64393,G__64390);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65591 = cljs.core._nth(recur_val,(0));
var G__65592 = cljs.core._nth(recur_val,(1));
var G__65593 = cljs.core._nth(recur_val,(2));
G__64388 = G__65591;
G__64389 = G__65592;
G__64390 = G__65593;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64398 = cljs.core._nth(params,(0));
var G__64399 = cljs.core._nth(params,(1));
var G__64400 = cljs.core._nth(params,(2));
var G__64401 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__64394,G__64395,G__64396,G__64397){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64398,G__64394);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64399,G__64395);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64400,G__64396);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64401,G__64397);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65594 = cljs.core._nth(recur_val,(0));
var G__65595 = cljs.core._nth(recur_val,(1));
var G__65596 = cljs.core._nth(recur_val,(2));
var G__65597 = cljs.core._nth(recur_val,(3));
G__64394 = G__65594;
G__64395 = G__65595;
G__64396 = G__65596;
G__64397 = G__65597;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64407 = cljs.core._nth(params,(0));
var G__64408 = cljs.core._nth(params,(1));
var G__64409 = cljs.core._nth(params,(2));
var G__64410 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__64403,G__64404,G__64405,G__64406){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64407,G__64403);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64408,G__64404);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64409,G__64405);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64410,G__64406);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65598 = cljs.core._nth(recur_val,(0));
var G__65599 = cljs.core._nth(recur_val,(1));
var G__65600 = cljs.core._nth(recur_val,(2));
var G__65601 = cljs.core._nth(recur_val,(3));
G__64403 = G__65598;
G__64404 = G__65599;
G__64405 = G__65600;
G__64406 = G__65601;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64420 = cljs.core._nth(params,(0));
var G__64421 = cljs.core._nth(params,(1));
var G__64422 = cljs.core._nth(params,(2));
var G__64423 = cljs.core._nth(params,(3));
var G__64424 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__64414,G__64415,G__64416,G__64418,G__64419){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64420,G__64414);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64421,G__64415);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64422,G__64416);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64423,G__64418);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64424,G__64419);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65603 = cljs.core._nth(recur_val,(0));
var G__65604 = cljs.core._nth(recur_val,(1));
var G__65605 = cljs.core._nth(recur_val,(2));
var G__65606 = cljs.core._nth(recur_val,(3));
var G__65607 = cljs.core._nth(recur_val,(4));
G__64414 = G__65603;
G__64415 = G__65604;
G__64416 = G__65605;
G__64418 = G__65606;
G__64419 = G__65607;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64437 = cljs.core._nth(params,(0));
var G__64438 = cljs.core._nth(params,(1));
var G__64439 = cljs.core._nth(params,(2));
var G__64440 = cljs.core._nth(params,(3));
var G__64441 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__64432,G__64433,G__64434,G__64435,G__64436){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64437,G__64432);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64438,G__64433);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64439,G__64434);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64440,G__64435);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64441,G__64436);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65610 = cljs.core._nth(recur_val,(0));
var G__65611 = cljs.core._nth(recur_val,(1));
var G__65612 = cljs.core._nth(recur_val,(2));
var G__65613 = cljs.core._nth(recur_val,(3));
var G__65614 = cljs.core._nth(recur_val,(4));
G__64432 = G__65610;
G__64433 = G__65611;
G__64434 = G__65612;
G__64435 = G__65613;
G__64436 = G__65614;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64452 = cljs.core._nth(params,(0));
var G__64453 = cljs.core._nth(params,(1));
var G__64454 = cljs.core._nth(params,(2));
var G__64455 = cljs.core._nth(params,(3));
var G__64456 = cljs.core._nth(params,(4));
var G__64457 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__64446,G__64447,G__64448,G__64449,G__64450,G__64451){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64452,G__64446);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64453,G__64447);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64454,G__64448);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64455,G__64449);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64456,G__64450);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64457,G__64451);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65615 = cljs.core._nth(recur_val,(0));
var G__65616 = cljs.core._nth(recur_val,(1));
var G__65617 = cljs.core._nth(recur_val,(2));
var G__65618 = cljs.core._nth(recur_val,(3));
var G__65619 = cljs.core._nth(recur_val,(4));
var G__65620 = cljs.core._nth(recur_val,(5));
G__64446 = G__65615;
G__64447 = G__65616;
G__64448 = G__65617;
G__64449 = G__65618;
G__64450 = G__65619;
G__64451 = G__65620;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64464 = cljs.core._nth(params,(0));
var G__64465 = cljs.core._nth(params,(1));
var G__64466 = cljs.core._nth(params,(2));
var G__64467 = cljs.core._nth(params,(3));
var G__64468 = cljs.core._nth(params,(4));
var G__64469 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__64458,G__64459,G__64460,G__64461,G__64462,G__64463){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64464,G__64458);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64465,G__64459);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64466,G__64460);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64467,G__64461);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64468,G__64462);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64469,G__64463);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65624 = cljs.core._nth(recur_val,(0));
var G__65625 = cljs.core._nth(recur_val,(1));
var G__65626 = cljs.core._nth(recur_val,(2));
var G__65627 = cljs.core._nth(recur_val,(3));
var G__65628 = cljs.core._nth(recur_val,(4));
var G__65629 = cljs.core._nth(recur_val,(5));
G__64458 = G__65624;
G__64459 = G__65625;
G__64460 = G__65626;
G__64461 = G__65627;
G__64462 = G__65628;
G__64463 = G__65629;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64477 = cljs.core._nth(params,(0));
var G__64478 = cljs.core._nth(params,(1));
var G__64479 = cljs.core._nth(params,(2));
var G__64480 = cljs.core._nth(params,(3));
var G__64481 = cljs.core._nth(params,(4));
var G__64482 = cljs.core._nth(params,(5));
var G__64483 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__64470,G__64471,G__64472,G__64473,G__64474,G__64475,G__64476){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64477,G__64470);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64478,G__64471);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64479,G__64472);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64480,G__64473);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64481,G__64474);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64482,G__64475);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64483,G__64476);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65630 = cljs.core._nth(recur_val,(0));
var G__65631 = cljs.core._nth(recur_val,(1));
var G__65632 = cljs.core._nth(recur_val,(2));
var G__65633 = cljs.core._nth(recur_val,(3));
var G__65634 = cljs.core._nth(recur_val,(4));
var G__65635 = cljs.core._nth(recur_val,(5));
var G__65636 = cljs.core._nth(recur_val,(6));
G__64470 = G__65630;
G__64471 = G__65631;
G__64472 = G__65632;
G__64473 = G__65633;
G__64474 = G__65634;
G__64475 = G__65635;
G__64476 = G__65636;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64497 = cljs.core._nth(params,(0));
var G__64498 = cljs.core._nth(params,(1));
var G__64499 = cljs.core._nth(params,(2));
var G__64500 = cljs.core._nth(params,(3));
var G__64501 = cljs.core._nth(params,(4));
var G__64502 = cljs.core._nth(params,(5));
var G__64503 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__64490,G__64491,G__64492,G__64493,G__64494,G__64495,G__64496){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64497,G__64490);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64498,G__64491);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64499,G__64492);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64500,G__64493);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64501,G__64494);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64502,G__64495);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64503,G__64496);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65638 = cljs.core._nth(recur_val,(0));
var G__65639 = cljs.core._nth(recur_val,(1));
var G__65640 = cljs.core._nth(recur_val,(2));
var G__65641 = cljs.core._nth(recur_val,(3));
var G__65642 = cljs.core._nth(recur_val,(4));
var G__65643 = cljs.core._nth(recur_val,(5));
var G__65644 = cljs.core._nth(recur_val,(6));
G__64490 = G__65638;
G__64491 = G__65639;
G__64492 = G__65640;
G__64493 = G__65641;
G__64494 = G__65642;
G__64495 = G__65643;
G__64496 = G__65644;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64528 = cljs.core._nth(params,(0));
var G__64529 = cljs.core._nth(params,(1));
var G__64530 = cljs.core._nth(params,(2));
var G__64531 = cljs.core._nth(params,(3));
var G__64532 = cljs.core._nth(params,(4));
var G__64533 = cljs.core._nth(params,(5));
var G__64534 = cljs.core._nth(params,(6));
var G__64535 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__64520,G__64521,G__64522,G__64523,G__64524,G__64525,G__64526,G__64527){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64528,G__64520);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64529,G__64521);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64530,G__64522);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64531,G__64523);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64532,G__64524);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64533,G__64525);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64534,G__64526);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64535,G__64527);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65653 = cljs.core._nth(recur_val,(0));
var G__65654 = cljs.core._nth(recur_val,(1));
var G__65655 = cljs.core._nth(recur_val,(2));
var G__65656 = cljs.core._nth(recur_val,(3));
var G__65657 = cljs.core._nth(recur_val,(4));
var G__65658 = cljs.core._nth(recur_val,(5));
var G__65659 = cljs.core._nth(recur_val,(6));
var G__65660 = cljs.core._nth(recur_val,(7));
G__64520 = G__65653;
G__64521 = G__65654;
G__64522 = G__65655;
G__64523 = G__65656;
G__64524 = G__65657;
G__64525 = G__65658;
G__64526 = G__65659;
G__64527 = G__65660;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64548 = cljs.core._nth(params,(0));
var G__64549 = cljs.core._nth(params,(1));
var G__64550 = cljs.core._nth(params,(2));
var G__64551 = cljs.core._nth(params,(3));
var G__64552 = cljs.core._nth(params,(4));
var G__64553 = cljs.core._nth(params,(5));
var G__64554 = cljs.core._nth(params,(6));
var G__64555 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__64540,G__64541,G__64542,G__64543,G__64544,G__64545,G__64546,G__64547){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64548,G__64540);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64549,G__64541);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64550,G__64542);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64551,G__64543);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64552,G__64544);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64553,G__64545);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64554,G__64546);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64555,G__64547);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65661 = cljs.core._nth(recur_val,(0));
var G__65662 = cljs.core._nth(recur_val,(1));
var G__65663 = cljs.core._nth(recur_val,(2));
var G__65664 = cljs.core._nth(recur_val,(3));
var G__65665 = cljs.core._nth(recur_val,(4));
var G__65666 = cljs.core._nth(recur_val,(5));
var G__65667 = cljs.core._nth(recur_val,(6));
var G__65668 = cljs.core._nth(recur_val,(7));
G__64540 = G__65661;
G__64541 = G__65662;
G__64542 = G__65663;
G__64543 = G__65664;
G__64544 = G__65665;
G__64545 = G__65666;
G__64546 = G__65667;
G__64547 = G__65668;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64571 = cljs.core._nth(params,(0));
var G__64572 = cljs.core._nth(params,(1));
var G__64573 = cljs.core._nth(params,(2));
var G__64574 = cljs.core._nth(params,(3));
var G__64575 = cljs.core._nth(params,(4));
var G__64576 = cljs.core._nth(params,(5));
var G__64577 = cljs.core._nth(params,(6));
var G__64578 = cljs.core._nth(params,(7));
var G__64579 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__64562,G__64563,G__64564,G__64565,G__64566,G__64567,G__64568,G__64569,G__64570){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64571,G__64562);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64572,G__64563);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64573,G__64564);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64574,G__64565);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64575,G__64566);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64576,G__64567);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64577,G__64568);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64578,G__64569);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64579,G__64570);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65673 = cljs.core._nth(recur_val,(0));
var G__65674 = cljs.core._nth(recur_val,(1));
var G__65675 = cljs.core._nth(recur_val,(2));
var G__65676 = cljs.core._nth(recur_val,(3));
var G__65677 = cljs.core._nth(recur_val,(4));
var G__65678 = cljs.core._nth(recur_val,(5));
var G__65679 = cljs.core._nth(recur_val,(6));
var G__65680 = cljs.core._nth(recur_val,(7));
var G__65681 = cljs.core._nth(recur_val,(8));
G__64562 = G__65673;
G__64563 = G__65674;
G__64564 = G__65675;
G__64565 = G__65676;
G__64566 = G__65677;
G__64567 = G__65678;
G__64568 = G__65679;
G__64569 = G__65680;
G__64570 = G__65681;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64596 = cljs.core._nth(params,(0));
var G__64597 = cljs.core._nth(params,(1));
var G__64598 = cljs.core._nth(params,(2));
var G__64599 = cljs.core._nth(params,(3));
var G__64600 = cljs.core._nth(params,(4));
var G__64601 = cljs.core._nth(params,(5));
var G__64602 = cljs.core._nth(params,(6));
var G__64603 = cljs.core._nth(params,(7));
var G__64604 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__64587,G__64588,G__64589,G__64590,G__64591,G__64592,G__64593,G__64594,G__64595){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64596,G__64587);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64597,G__64588);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64598,G__64589);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64599,G__64590);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64600,G__64591);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64601,G__64592);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64602,G__64593);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64603,G__64594);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64604,G__64595);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65684 = cljs.core._nth(recur_val,(0));
var G__65685 = cljs.core._nth(recur_val,(1));
var G__65686 = cljs.core._nth(recur_val,(2));
var G__65687 = cljs.core._nth(recur_val,(3));
var G__65688 = cljs.core._nth(recur_val,(4));
var G__65689 = cljs.core._nth(recur_val,(5));
var G__65690 = cljs.core._nth(recur_val,(6));
var G__65691 = cljs.core._nth(recur_val,(7));
var G__65692 = cljs.core._nth(recur_val,(8));
G__64587 = G__65684;
G__64588 = G__65685;
G__64589 = G__65686;
G__64590 = G__65687;
G__64591 = G__65688;
G__64592 = G__65689;
G__64593 = G__65690;
G__64594 = G__65691;
G__64595 = G__65692;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64628 = cljs.core._nth(params,(0));
var G__64629 = cljs.core._nth(params,(1));
var G__64630 = cljs.core._nth(params,(2));
var G__64631 = cljs.core._nth(params,(3));
var G__64632 = cljs.core._nth(params,(4));
var G__64633 = cljs.core._nth(params,(5));
var G__64634 = cljs.core._nth(params,(6));
var G__64635 = cljs.core._nth(params,(7));
var G__64636 = cljs.core._nth(params,(8));
var G__64637 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__64618,G__64619,G__64620,G__64621,G__64622,G__64623,G__64624,G__64625,G__64626,G__64627){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64628,G__64618);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64629,G__64619);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64630,G__64620);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64631,G__64621);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64632,G__64622);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64633,G__64623);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64634,G__64624);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64635,G__64625);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64636,G__64626);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64637,G__64627);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65694 = cljs.core._nth(recur_val,(0));
var G__65695 = cljs.core._nth(recur_val,(1));
var G__65696 = cljs.core._nth(recur_val,(2));
var G__65697 = cljs.core._nth(recur_val,(3));
var G__65698 = cljs.core._nth(recur_val,(4));
var G__65699 = cljs.core._nth(recur_val,(5));
var G__65700 = cljs.core._nth(recur_val,(6));
var G__65701 = cljs.core._nth(recur_val,(7));
var G__65702 = cljs.core._nth(recur_val,(8));
var G__65703 = cljs.core._nth(recur_val,(9));
G__64618 = G__65694;
G__64619 = G__65695;
G__64620 = G__65696;
G__64621 = G__65697;
G__64622 = G__65698;
G__64623 = G__65699;
G__64624 = G__65700;
G__64625 = G__65701;
G__64626 = G__65702;
G__64627 = G__65703;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64652 = cljs.core._nth(params,(0));
var G__64653 = cljs.core._nth(params,(1));
var G__64654 = cljs.core._nth(params,(2));
var G__64655 = cljs.core._nth(params,(3));
var G__64656 = cljs.core._nth(params,(4));
var G__64657 = cljs.core._nth(params,(5));
var G__64658 = cljs.core._nth(params,(6));
var G__64659 = cljs.core._nth(params,(7));
var G__64660 = cljs.core._nth(params,(8));
var G__64661 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__64642,G__64643,G__64644,G__64645,G__64646,G__64647,G__64648,G__64649,G__64650,G__64651){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64652,G__64642);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64653,G__64643);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64654,G__64644);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64655,G__64645);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64656,G__64646);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64657,G__64647);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64658,G__64648);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64659,G__64649);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64660,G__64650);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64661,G__64651);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65709 = cljs.core._nth(recur_val,(0));
var G__65710 = cljs.core._nth(recur_val,(1));
var G__65711 = cljs.core._nth(recur_val,(2));
var G__65712 = cljs.core._nth(recur_val,(3));
var G__65713 = cljs.core._nth(recur_val,(4));
var G__65714 = cljs.core._nth(recur_val,(5));
var G__65715 = cljs.core._nth(recur_val,(6));
var G__65716 = cljs.core._nth(recur_val,(7));
var G__65717 = cljs.core._nth(recur_val,(8));
var G__65718 = cljs.core._nth(recur_val,(9));
G__64642 = G__65709;
G__64643 = G__65710;
G__64644 = G__65711;
G__64645 = G__65712;
G__64646 = G__65713;
G__64647 = G__65714;
G__64648 = G__65715;
G__64649 = G__65716;
G__64650 = G__65717;
G__64651 = G__65718;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64676 = cljs.core._nth(params,(0));
var G__64677 = cljs.core._nth(params,(1));
var G__64678 = cljs.core._nth(params,(2));
var G__64679 = cljs.core._nth(params,(3));
var G__64680 = cljs.core._nth(params,(4));
var G__64681 = cljs.core._nth(params,(5));
var G__64682 = cljs.core._nth(params,(6));
var G__64683 = cljs.core._nth(params,(7));
var G__64684 = cljs.core._nth(params,(8));
var G__64685 = cljs.core._nth(params,(9));
var G__64686 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__64665,G__64666,G__64667,G__64668,G__64669,G__64670,G__64671,G__64672,G__64673,G__64674,G__64675){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64676,G__64665);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64677,G__64666);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64678,G__64667);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64679,G__64668);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64680,G__64669);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64681,G__64670);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64682,G__64671);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64683,G__64672);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64684,G__64673);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64685,G__64674);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64686,G__64675);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65724 = cljs.core._nth(recur_val,(0));
var G__65725 = cljs.core._nth(recur_val,(1));
var G__65726 = cljs.core._nth(recur_val,(2));
var G__65727 = cljs.core._nth(recur_val,(3));
var G__65728 = cljs.core._nth(recur_val,(4));
var G__65729 = cljs.core._nth(recur_val,(5));
var G__65730 = cljs.core._nth(recur_val,(6));
var G__65731 = cljs.core._nth(recur_val,(7));
var G__65732 = cljs.core._nth(recur_val,(8));
var G__65733 = cljs.core._nth(recur_val,(9));
var G__65734 = cljs.core._nth(recur_val,(10));
G__64665 = G__65724;
G__64666 = G__65725;
G__64667 = G__65726;
G__64668 = G__65727;
G__64669 = G__65728;
G__64670 = G__65729;
G__64671 = G__65730;
G__64672 = G__65731;
G__64673 = G__65732;
G__64674 = G__65733;
G__64675 = G__65734;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64705 = cljs.core._nth(params,(0));
var G__64706 = cljs.core._nth(params,(1));
var G__64707 = cljs.core._nth(params,(2));
var G__64708 = cljs.core._nth(params,(3));
var G__64709 = cljs.core._nth(params,(4));
var G__64710 = cljs.core._nth(params,(5));
var G__64711 = cljs.core._nth(params,(6));
var G__64712 = cljs.core._nth(params,(7));
var G__64713 = cljs.core._nth(params,(8));
var G__64714 = cljs.core._nth(params,(9));
var G__64715 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__64694,G__64695,G__64696,G__64697,G__64698,G__64699,G__64700,G__64701,G__64702,G__64703,G__64704){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64705,G__64694);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64706,G__64695);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64707,G__64696);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64708,G__64697);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64709,G__64698);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64710,G__64699);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64711,G__64700);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64712,G__64701);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64713,G__64702);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64714,G__64703);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64715,G__64704);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65737 = cljs.core._nth(recur_val,(0));
var G__65738 = cljs.core._nth(recur_val,(1));
var G__65739 = cljs.core._nth(recur_val,(2));
var G__65740 = cljs.core._nth(recur_val,(3));
var G__65741 = cljs.core._nth(recur_val,(4));
var G__65742 = cljs.core._nth(recur_val,(5));
var G__65743 = cljs.core._nth(recur_val,(6));
var G__65744 = cljs.core._nth(recur_val,(7));
var G__65745 = cljs.core._nth(recur_val,(8));
var G__65746 = cljs.core._nth(recur_val,(9));
var G__65747 = cljs.core._nth(recur_val,(10));
G__64694 = G__65737;
G__64695 = G__65738;
G__64696 = G__65739;
G__64697 = G__65740;
G__64698 = G__65741;
G__64699 = G__65742;
G__64700 = G__65743;
G__64701 = G__65744;
G__64702 = G__65745;
G__64703 = G__65746;
G__64704 = G__65747;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64741 = cljs.core._nth(params,(0));
var G__64742 = cljs.core._nth(params,(1));
var G__64743 = cljs.core._nth(params,(2));
var G__64744 = cljs.core._nth(params,(3));
var G__64745 = cljs.core._nth(params,(4));
var G__64746 = cljs.core._nth(params,(5));
var G__64747 = cljs.core._nth(params,(6));
var G__64748 = cljs.core._nth(params,(7));
var G__64749 = cljs.core._nth(params,(8));
var G__64750 = cljs.core._nth(params,(9));
var G__64751 = cljs.core._nth(params,(10));
var G__64752 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__64729,G__64730,G__64731,G__64732,G__64733,G__64734,G__64735,G__64736,G__64737,G__64738,G__64739,G__64740){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64741,G__64729);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64742,G__64730);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64743,G__64731);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64744,G__64732);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64745,G__64733);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64746,G__64734);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64747,G__64735);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64748,G__64736);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64749,G__64737);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64750,G__64738);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64751,G__64739);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__64752,G__64740);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65755 = cljs.core._nth(recur_val,(0));
var G__65756 = cljs.core._nth(recur_val,(1));
var G__65757 = cljs.core._nth(recur_val,(2));
var G__65758 = cljs.core._nth(recur_val,(3));
var G__65759 = cljs.core._nth(recur_val,(4));
var G__65760 = cljs.core._nth(recur_val,(5));
var G__65761 = cljs.core._nth(recur_val,(6));
var G__65762 = cljs.core._nth(recur_val,(7));
var G__65763 = cljs.core._nth(recur_val,(8));
var G__65764 = cljs.core._nth(recur_val,(9));
var G__65765 = cljs.core._nth(recur_val,(10));
var G__65766 = cljs.core._nth(recur_val,(11));
G__64729 = G__65755;
G__64730 = G__65756;
G__64731 = G__65757;
G__64732 = G__65758;
G__64733 = G__65759;
G__64734 = G__65760;
G__64735 = G__65761;
G__64736 = G__65762;
G__64737 = G__65763;
G__64738 = G__65764;
G__64739 = G__65765;
G__64740 = G__65766;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64772 = cljs.core._nth(params,(0));
var G__64773 = cljs.core._nth(params,(1));
var G__64774 = cljs.core._nth(params,(2));
var G__64775 = cljs.core._nth(params,(3));
var G__64776 = cljs.core._nth(params,(4));
var G__64777 = cljs.core._nth(params,(5));
var G__64778 = cljs.core._nth(params,(6));
var G__64779 = cljs.core._nth(params,(7));
var G__64780 = cljs.core._nth(params,(8));
var G__64781 = cljs.core._nth(params,(9));
var G__64782 = cljs.core._nth(params,(10));
var G__64783 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__64760,G__64761,G__64762,G__64763,G__64764,G__64765,G__64766,G__64767,G__64768,G__64769,G__64770,G__64771){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64772,G__64760);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64773,G__64761);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64774,G__64762);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64775,G__64763);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64776,G__64764);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64777,G__64765);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64778,G__64766);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64779,G__64767);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64780,G__64768);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64781,G__64769);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64782,G__64770);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__64783,G__64771);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65768 = cljs.core._nth(recur_val,(0));
var G__65769 = cljs.core._nth(recur_val,(1));
var G__65770 = cljs.core._nth(recur_val,(2));
var G__65771 = cljs.core._nth(recur_val,(3));
var G__65772 = cljs.core._nth(recur_val,(4));
var G__65773 = cljs.core._nth(recur_val,(5));
var G__65774 = cljs.core._nth(recur_val,(6));
var G__65775 = cljs.core._nth(recur_val,(7));
var G__65776 = cljs.core._nth(recur_val,(8));
var G__65777 = cljs.core._nth(recur_val,(9));
var G__65778 = cljs.core._nth(recur_val,(10));
var G__65779 = cljs.core._nth(recur_val,(11));
G__64760 = G__65768;
G__64761 = G__65769;
G__64762 = G__65770;
G__64763 = G__65771;
G__64764 = G__65772;
G__64765 = G__65773;
G__64766 = G__65774;
G__64767 = G__65775;
G__64768 = G__65776;
G__64769 = G__65777;
G__64770 = G__65778;
G__64771 = G__65779;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64800 = cljs.core._nth(params,(0));
var G__64801 = cljs.core._nth(params,(1));
var G__64802 = cljs.core._nth(params,(2));
var G__64803 = cljs.core._nth(params,(3));
var G__64804 = cljs.core._nth(params,(4));
var G__64805 = cljs.core._nth(params,(5));
var G__64806 = cljs.core._nth(params,(6));
var G__64807 = cljs.core._nth(params,(7));
var G__64808 = cljs.core._nth(params,(8));
var G__64809 = cljs.core._nth(params,(9));
var G__64810 = cljs.core._nth(params,(10));
var G__64811 = cljs.core._nth(params,(11));
var G__64812 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__64787,G__64788,G__64789,G__64790,G__64791,G__64792,G__64793,G__64794,G__64795,G__64796,G__64797,G__64798,G__64799){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64800,G__64787);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64801,G__64788);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64802,G__64789);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64803,G__64790);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64804,G__64791);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64805,G__64792);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64806,G__64793);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64807,G__64794);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64808,G__64795);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64809,G__64796);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64810,G__64797);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__64811,G__64798);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__64812,G__64799);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65780 = cljs.core._nth(recur_val,(0));
var G__65781 = cljs.core._nth(recur_val,(1));
var G__65782 = cljs.core._nth(recur_val,(2));
var G__65783 = cljs.core._nth(recur_val,(3));
var G__65784 = cljs.core._nth(recur_val,(4));
var G__65785 = cljs.core._nth(recur_val,(5));
var G__65786 = cljs.core._nth(recur_val,(6));
var G__65787 = cljs.core._nth(recur_val,(7));
var G__65788 = cljs.core._nth(recur_val,(8));
var G__65789 = cljs.core._nth(recur_val,(9));
var G__65790 = cljs.core._nth(recur_val,(10));
var G__65791 = cljs.core._nth(recur_val,(11));
var G__65792 = cljs.core._nth(recur_val,(12));
G__64787 = G__65780;
G__64788 = G__65781;
G__64789 = G__65782;
G__64790 = G__65783;
G__64791 = G__65784;
G__64792 = G__65785;
G__64793 = G__65786;
G__64794 = G__65787;
G__64795 = G__65788;
G__64796 = G__65789;
G__64797 = G__65790;
G__64798 = G__65791;
G__64799 = G__65792;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64846 = cljs.core._nth(params,(0));
var G__64847 = cljs.core._nth(params,(1));
var G__64848 = cljs.core._nth(params,(2));
var G__64849 = cljs.core._nth(params,(3));
var G__64850 = cljs.core._nth(params,(4));
var G__64851 = cljs.core._nth(params,(5));
var G__64852 = cljs.core._nth(params,(6));
var G__64853 = cljs.core._nth(params,(7));
var G__64854 = cljs.core._nth(params,(8));
var G__64855 = cljs.core._nth(params,(9));
var G__64856 = cljs.core._nth(params,(10));
var G__64857 = cljs.core._nth(params,(11));
var G__64858 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__64833,G__64834,G__64835,G__64836,G__64837,G__64838,G__64839,G__64840,G__64841,G__64842,G__64843,G__64844,G__64845){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64846,G__64833);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64847,G__64834);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64848,G__64835);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64849,G__64836);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64850,G__64837);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64851,G__64838);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64852,G__64839);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64853,G__64840);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64854,G__64841);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64855,G__64842);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64856,G__64843);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__64857,G__64844);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__64858,G__64845);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65801 = cljs.core._nth(recur_val,(0));
var G__65802 = cljs.core._nth(recur_val,(1));
var G__65803 = cljs.core._nth(recur_val,(2));
var G__65804 = cljs.core._nth(recur_val,(3));
var G__65805 = cljs.core._nth(recur_val,(4));
var G__65806 = cljs.core._nth(recur_val,(5));
var G__65807 = cljs.core._nth(recur_val,(6));
var G__65808 = cljs.core._nth(recur_val,(7));
var G__65809 = cljs.core._nth(recur_val,(8));
var G__65810 = cljs.core._nth(recur_val,(9));
var G__65811 = cljs.core._nth(recur_val,(10));
var G__65812 = cljs.core._nth(recur_val,(11));
var G__65813 = cljs.core._nth(recur_val,(12));
G__64833 = G__65801;
G__64834 = G__65802;
G__64835 = G__65803;
G__64836 = G__65804;
G__64837 = G__65805;
G__64838 = G__65806;
G__64839 = G__65807;
G__64840 = G__65808;
G__64841 = G__65809;
G__64842 = G__65810;
G__64843 = G__65811;
G__64844 = G__65812;
G__64845 = G__65813;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64880 = cljs.core._nth(params,(0));
var G__64881 = cljs.core._nth(params,(1));
var G__64882 = cljs.core._nth(params,(2));
var G__64883 = cljs.core._nth(params,(3));
var G__64884 = cljs.core._nth(params,(4));
var G__64885 = cljs.core._nth(params,(5));
var G__64886 = cljs.core._nth(params,(6));
var G__64887 = cljs.core._nth(params,(7));
var G__64888 = cljs.core._nth(params,(8));
var G__64889 = cljs.core._nth(params,(9));
var G__64890 = cljs.core._nth(params,(10));
var G__64891 = cljs.core._nth(params,(11));
var G__64892 = cljs.core._nth(params,(12));
var G__64893 = cljs.core._nth(params,(13));
var G__64894 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__64865,G__64866,G__64867,G__64868,G__64869,G__64870,G__64871,G__64872,G__64873,G__64874,G__64875,G__64876,G__64877,G__64878,G__64879){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64880,G__64865);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64881,G__64866);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64882,G__64867);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64883,G__64868);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64884,G__64869);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64885,G__64870);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64886,G__64871);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64887,G__64872);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64888,G__64873);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64889,G__64874);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64890,G__64875);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__64891,G__64876);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__64892,G__64877);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__64893,G__64878);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__64894,G__64879);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65829 = cljs.core._nth(recur_val,(0));
var G__65830 = cljs.core._nth(recur_val,(1));
var G__65831 = cljs.core._nth(recur_val,(2));
var G__65832 = cljs.core._nth(recur_val,(3));
var G__65833 = cljs.core._nth(recur_val,(4));
var G__65834 = cljs.core._nth(recur_val,(5));
var G__65835 = cljs.core._nth(recur_val,(6));
var G__65836 = cljs.core._nth(recur_val,(7));
var G__65837 = cljs.core._nth(recur_val,(8));
var G__65838 = cljs.core._nth(recur_val,(9));
var G__65839 = cljs.core._nth(recur_val,(10));
var G__65840 = cljs.core._nth(recur_val,(11));
var G__65841 = cljs.core._nth(recur_val,(12));
var G__65842 = cljs.core._nth(recur_val,(13));
var G__65843 = cljs.core._nth(recur_val,(14));
G__64865 = G__65829;
G__64866 = G__65830;
G__64867 = G__65831;
G__64868 = G__65832;
G__64869 = G__65833;
G__64870 = G__65834;
G__64871 = G__65835;
G__64872 = G__65836;
G__64873 = G__65837;
G__64874 = G__65838;
G__64875 = G__65839;
G__64876 = G__65840;
G__64877 = G__65841;
G__64878 = G__65842;
G__64879 = G__65843;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__64917 = cljs.core._nth(params,(0));
var G__64918 = cljs.core._nth(params,(1));
var G__64919 = cljs.core._nth(params,(2));
var G__64920 = cljs.core._nth(params,(3));
var G__64921 = cljs.core._nth(params,(4));
var G__64922 = cljs.core._nth(params,(5));
var G__64923 = cljs.core._nth(params,(6));
var G__64924 = cljs.core._nth(params,(7));
var G__64925 = cljs.core._nth(params,(8));
var G__64926 = cljs.core._nth(params,(9));
var G__64927 = cljs.core._nth(params,(10));
var G__64928 = cljs.core._nth(params,(11));
var G__64929 = cljs.core._nth(params,(12));
var G__64930 = cljs.core._nth(params,(13));
var G__64931 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__64902,G__64903,G__64904,G__64905,G__64906,G__64907,G__64908,G__64909,G__64910,G__64911,G__64912,G__64913,G__64914,G__64915,G__64916){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__64917,G__64902);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64918,G__64903);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64919,G__64904);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64920,G__64905);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64921,G__64906);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64922,G__64907);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64923,G__64908);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64924,G__64909);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64925,G__64910);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64926,G__64911);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64927,G__64912);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__64928,G__64913);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__64929,G__64914);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__64930,G__64915);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__64931,G__64916);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65847 = cljs.core._nth(recur_val,(0));
var G__65848 = cljs.core._nth(recur_val,(1));
var G__65849 = cljs.core._nth(recur_val,(2));
var G__65850 = cljs.core._nth(recur_val,(3));
var G__65851 = cljs.core._nth(recur_val,(4));
var G__65852 = cljs.core._nth(recur_val,(5));
var G__65853 = cljs.core._nth(recur_val,(6));
var G__65854 = cljs.core._nth(recur_val,(7));
var G__65855 = cljs.core._nth(recur_val,(8));
var G__65856 = cljs.core._nth(recur_val,(9));
var G__65857 = cljs.core._nth(recur_val,(10));
var G__65858 = cljs.core._nth(recur_val,(11));
var G__65859 = cljs.core._nth(recur_val,(12));
var G__65860 = cljs.core._nth(recur_val,(13));
var G__65861 = cljs.core._nth(recur_val,(14));
G__64902 = G__65847;
G__64903 = G__65848;
G__64904 = G__65849;
G__64905 = G__65850;
G__64906 = G__65851;
G__64907 = G__65852;
G__64908 = G__65853;
G__64909 = G__65854;
G__64910 = G__65855;
G__64911 = G__65856;
G__64912 = G__65857;
G__64913 = G__65858;
G__64914 = G__65859;
G__64915 = G__65860;
G__64916 = G__65861;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__64967 = cljs.core._nth(params,(0));
var G__64968 = cljs.core._nth(params,(1));
var G__64969 = cljs.core._nth(params,(2));
var G__64970 = cljs.core._nth(params,(3));
var G__64971 = cljs.core._nth(params,(4));
var G__64972 = cljs.core._nth(params,(5));
var G__64973 = cljs.core._nth(params,(6));
var G__64974 = cljs.core._nth(params,(7));
var G__64975 = cljs.core._nth(params,(8));
var G__64976 = cljs.core._nth(params,(9));
var G__64977 = cljs.core._nth(params,(10));
var G__64978 = cljs.core._nth(params,(11));
var G__64979 = cljs.core._nth(params,(12));
var G__64980 = cljs.core._nth(params,(13));
var G__64981 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__64952,G__64953,G__64954,G__64955,G__64956,G__64957,G__64958,G__64959,G__64960,G__64961,G__64962,G__64963,G__64964,G__64965,G__64966){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__64967,G__64952);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__64968,G__64953);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__64969,G__64954);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__64970,G__64955);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__64971,G__64956);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__64972,G__64957);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__64973,G__64958);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__64974,G__64959);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__64975,G__64960);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__64976,G__64961);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__64977,G__64962);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__64978,G__64963);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__64979,G__64964);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__64980,G__64965);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__64981,G__64966);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65866 = cljs.core._nth(recur_val,(0));
var G__65867 = cljs.core._nth(recur_val,(1));
var G__65868 = cljs.core._nth(recur_val,(2));
var G__65869 = cljs.core._nth(recur_val,(3));
var G__65870 = cljs.core._nth(recur_val,(4));
var G__65871 = cljs.core._nth(recur_val,(5));
var G__65872 = cljs.core._nth(recur_val,(6));
var G__65873 = cljs.core._nth(recur_val,(7));
var G__65874 = cljs.core._nth(recur_val,(8));
var G__65875 = cljs.core._nth(recur_val,(9));
var G__65876 = cljs.core._nth(recur_val,(10));
var G__65877 = cljs.core._nth(recur_val,(11));
var G__65878 = cljs.core._nth(recur_val,(12));
var G__65879 = cljs.core._nth(recur_val,(13));
var G__65880 = cljs.core._nth(recur_val,(14));
G__64952 = G__65866;
G__64953 = G__65867;
G__64954 = G__65868;
G__64955 = G__65869;
G__64956 = G__65870;
G__64957 = G__65871;
G__64958 = G__65872;
G__64959 = G__65873;
G__64960 = G__65874;
G__64961 = G__65875;
G__64962 = G__65876;
G__64963 = G__65877;
G__64964 = G__65878;
G__64965 = G__65879;
G__64966 = G__65880;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__65004 = cljs.core._nth(params,(0));
var G__65005 = cljs.core._nth(params,(1));
var G__65006 = cljs.core._nth(params,(2));
var G__65007 = cljs.core._nth(params,(3));
var G__65008 = cljs.core._nth(params,(4));
var G__65009 = cljs.core._nth(params,(5));
var G__65010 = cljs.core._nth(params,(6));
var G__65011 = cljs.core._nth(params,(7));
var G__65012 = cljs.core._nth(params,(8));
var G__65013 = cljs.core._nth(params,(9));
var G__65014 = cljs.core._nth(params,(10));
var G__65015 = cljs.core._nth(params,(11));
var G__65016 = cljs.core._nth(params,(12));
var G__65017 = cljs.core._nth(params,(13));
var G__65018 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__64989,G__64990,G__64991,G__64992,G__64993,G__64994,G__64995,G__64996,G__64997,G__64998,G__64999,G__65000,G__65001,G__65002,G__65003){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__65004,G__64989);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65005,G__64990);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65006,G__64991);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65007,G__64992);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65008,G__64993);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65009,G__64994);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65010,G__64995);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65011,G__64996);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65012,G__64997);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65013,G__64998);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65014,G__64999);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65015,G__65000);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65016,G__65001);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65017,G__65002);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65018,G__65003);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65885 = cljs.core._nth(recur_val,(0));
var G__65886 = cljs.core._nth(recur_val,(1));
var G__65887 = cljs.core._nth(recur_val,(2));
var G__65888 = cljs.core._nth(recur_val,(3));
var G__65889 = cljs.core._nth(recur_val,(4));
var G__65890 = cljs.core._nth(recur_val,(5));
var G__65891 = cljs.core._nth(recur_val,(6));
var G__65892 = cljs.core._nth(recur_val,(7));
var G__65893 = cljs.core._nth(recur_val,(8));
var G__65894 = cljs.core._nth(recur_val,(9));
var G__65895 = cljs.core._nth(recur_val,(10));
var G__65896 = cljs.core._nth(recur_val,(11));
var G__65897 = cljs.core._nth(recur_val,(12));
var G__65898 = cljs.core._nth(recur_val,(13));
var G__65899 = cljs.core._nth(recur_val,(14));
G__64989 = G__65885;
G__64990 = G__65886;
G__64991 = G__65887;
G__64992 = G__65888;
G__64993 = G__65889;
G__64994 = G__65890;
G__64995 = G__65891;
G__64996 = G__65892;
G__64997 = G__65893;
G__64998 = G__65894;
G__64999 = G__65895;
G__65000 = G__65896;
G__65001 = G__65897;
G__65002 = G__65898;
G__65003 = G__65899;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65044 = cljs.core._nth(params,(0));
var G__65045 = cljs.core._nth(params,(1));
var G__65046 = cljs.core._nth(params,(2));
var G__65047 = cljs.core._nth(params,(3));
var G__65048 = cljs.core._nth(params,(4));
var G__65049 = cljs.core._nth(params,(5));
var G__65050 = cljs.core._nth(params,(6));
var G__65051 = cljs.core._nth(params,(7));
var G__65052 = cljs.core._nth(params,(8));
var G__65053 = cljs.core._nth(params,(9));
var G__65054 = cljs.core._nth(params,(10));
var G__65055 = cljs.core._nth(params,(11));
var G__65056 = cljs.core._nth(params,(12));
var G__65057 = cljs.core._nth(params,(13));
var G__65058 = cljs.core._nth(params,(14));
var G__65059 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__65028,G__65029,G__65030,G__65031,G__65032,G__65033,G__65034,G__65035,G__65036,G__65037,G__65038,G__65039,G__65040,G__65041,G__65042,G__65043){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65044,G__65028);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65045,G__65029);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65046,G__65030);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65047,G__65031);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65048,G__65032);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65049,G__65033);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65050,G__65034);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65051,G__65035);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65052,G__65036);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65053,G__65037);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65054,G__65038);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65055,G__65039);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65056,G__65040);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65057,G__65041);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65058,G__65042);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65059,G__65043);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65903 = cljs.core._nth(recur_val,(0));
var G__65904 = cljs.core._nth(recur_val,(1));
var G__65905 = cljs.core._nth(recur_val,(2));
var G__65906 = cljs.core._nth(recur_val,(3));
var G__65907 = cljs.core._nth(recur_val,(4));
var G__65908 = cljs.core._nth(recur_val,(5));
var G__65909 = cljs.core._nth(recur_val,(6));
var G__65910 = cljs.core._nth(recur_val,(7));
var G__65911 = cljs.core._nth(recur_val,(8));
var G__65912 = cljs.core._nth(recur_val,(9));
var G__65913 = cljs.core._nth(recur_val,(10));
var G__65914 = cljs.core._nth(recur_val,(11));
var G__65915 = cljs.core._nth(recur_val,(12));
var G__65916 = cljs.core._nth(recur_val,(13));
var G__65917 = cljs.core._nth(recur_val,(14));
var G__65918 = cljs.core._nth(recur_val,(15));
G__65028 = G__65903;
G__65029 = G__65904;
G__65030 = G__65905;
G__65031 = G__65906;
G__65032 = G__65907;
G__65033 = G__65908;
G__65034 = G__65909;
G__65035 = G__65910;
G__65036 = G__65911;
G__65037 = G__65912;
G__65038 = G__65913;
G__65039 = G__65914;
G__65040 = G__65915;
G__65041 = G__65916;
G__65042 = G__65917;
G__65043 = G__65918;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__65084 = cljs.core._nth(params,(0));
var G__65085 = cljs.core._nth(params,(1));
var G__65086 = cljs.core._nth(params,(2));
var G__65087 = cljs.core._nth(params,(3));
var G__65088 = cljs.core._nth(params,(4));
var G__65089 = cljs.core._nth(params,(5));
var G__65090 = cljs.core._nth(params,(6));
var G__65091 = cljs.core._nth(params,(7));
var G__65092 = cljs.core._nth(params,(8));
var G__65093 = cljs.core._nth(params,(9));
var G__65094 = cljs.core._nth(params,(10));
var G__65095 = cljs.core._nth(params,(11));
var G__65096 = cljs.core._nth(params,(12));
var G__65097 = cljs.core._nth(params,(13));
var G__65098 = cljs.core._nth(params,(14));
var G__65099 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__65068,G__65069,G__65070,G__65071,G__65072,G__65073,G__65074,G__65075,G__65076,G__65077,G__65078,G__65079,G__65080,G__65081,G__65082,G__65083){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__65084,G__65068);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65085,G__65069);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65086,G__65070);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65087,G__65071);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65088,G__65072);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65089,G__65073);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65090,G__65074);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65091,G__65075);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65092,G__65076);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65093,G__65077);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65094,G__65078);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65095,G__65079);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65096,G__65080);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65097,G__65081);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65098,G__65082);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65099,G__65083);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65922 = cljs.core._nth(recur_val,(0));
var G__65923 = cljs.core._nth(recur_val,(1));
var G__65924 = cljs.core._nth(recur_val,(2));
var G__65925 = cljs.core._nth(recur_val,(3));
var G__65926 = cljs.core._nth(recur_val,(4));
var G__65927 = cljs.core._nth(recur_val,(5));
var G__65928 = cljs.core._nth(recur_val,(6));
var G__65929 = cljs.core._nth(recur_val,(7));
var G__65930 = cljs.core._nth(recur_val,(8));
var G__65931 = cljs.core._nth(recur_val,(9));
var G__65932 = cljs.core._nth(recur_val,(10));
var G__65933 = cljs.core._nth(recur_val,(11));
var G__65934 = cljs.core._nth(recur_val,(12));
var G__65935 = cljs.core._nth(recur_val,(13));
var G__65936 = cljs.core._nth(recur_val,(14));
var G__65937 = cljs.core._nth(recur_val,(15));
G__65068 = G__65922;
G__65069 = G__65923;
G__65070 = G__65924;
G__65071 = G__65925;
G__65072 = G__65926;
G__65073 = G__65927;
G__65074 = G__65928;
G__65075 = G__65929;
G__65076 = G__65930;
G__65077 = G__65931;
G__65078 = G__65932;
G__65079 = G__65933;
G__65080 = G__65934;
G__65081 = G__65935;
G__65082 = G__65936;
G__65083 = G__65937;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65120 = cljs.core._nth(params,(0));
var G__65121 = cljs.core._nth(params,(1));
var G__65122 = cljs.core._nth(params,(2));
var G__65123 = cljs.core._nth(params,(3));
var G__65124 = cljs.core._nth(params,(4));
var G__65125 = cljs.core._nth(params,(5));
var G__65126 = cljs.core._nth(params,(6));
var G__65127 = cljs.core._nth(params,(7));
var G__65128 = cljs.core._nth(params,(8));
var G__65129 = cljs.core._nth(params,(9));
var G__65130 = cljs.core._nth(params,(10));
var G__65131 = cljs.core._nth(params,(11));
var G__65132 = cljs.core._nth(params,(12));
var G__65133 = cljs.core._nth(params,(13));
var G__65134 = cljs.core._nth(params,(14));
var G__65135 = cljs.core._nth(params,(15));
var G__65136 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__65103,G__65104,G__65105,G__65106,G__65107,G__65108,G__65109,G__65110,G__65111,G__65112,G__65113,G__65114,G__65115,G__65116,G__65117,G__65118,G__65119){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65120,G__65103);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65121,G__65104);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65122,G__65105);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65123,G__65106);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65124,G__65107);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65125,G__65108);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65126,G__65109);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65127,G__65110);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65128,G__65111);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65129,G__65112);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65130,G__65113);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65131,G__65114);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65132,G__65115);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65133,G__65116);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65134,G__65117);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65135,G__65118);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65136,G__65119);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65943 = cljs.core._nth(recur_val,(0));
var G__65944 = cljs.core._nth(recur_val,(1));
var G__65945 = cljs.core._nth(recur_val,(2));
var G__65946 = cljs.core._nth(recur_val,(3));
var G__65947 = cljs.core._nth(recur_val,(4));
var G__65948 = cljs.core._nth(recur_val,(5));
var G__65949 = cljs.core._nth(recur_val,(6));
var G__65950 = cljs.core._nth(recur_val,(7));
var G__65951 = cljs.core._nth(recur_val,(8));
var G__65952 = cljs.core._nth(recur_val,(9));
var G__65953 = cljs.core._nth(recur_val,(10));
var G__65954 = cljs.core._nth(recur_val,(11));
var G__65955 = cljs.core._nth(recur_val,(12));
var G__65956 = cljs.core._nth(recur_val,(13));
var G__65957 = cljs.core._nth(recur_val,(14));
var G__65958 = cljs.core._nth(recur_val,(15));
var G__65959 = cljs.core._nth(recur_val,(16));
G__65103 = G__65943;
G__65104 = G__65944;
G__65105 = G__65945;
G__65106 = G__65946;
G__65107 = G__65947;
G__65108 = G__65948;
G__65109 = G__65949;
G__65110 = G__65950;
G__65111 = G__65951;
G__65112 = G__65952;
G__65113 = G__65953;
G__65114 = G__65954;
G__65115 = G__65955;
G__65116 = G__65956;
G__65117 = G__65957;
G__65118 = G__65958;
G__65119 = G__65959;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__65159 = cljs.core._nth(params,(0));
var G__65160 = cljs.core._nth(params,(1));
var G__65161 = cljs.core._nth(params,(2));
var G__65162 = cljs.core._nth(params,(3));
var G__65163 = cljs.core._nth(params,(4));
var G__65164 = cljs.core._nth(params,(5));
var G__65165 = cljs.core._nth(params,(6));
var G__65166 = cljs.core._nth(params,(7));
var G__65167 = cljs.core._nth(params,(8));
var G__65168 = cljs.core._nth(params,(9));
var G__65169 = cljs.core._nth(params,(10));
var G__65170 = cljs.core._nth(params,(11));
var G__65171 = cljs.core._nth(params,(12));
var G__65172 = cljs.core._nth(params,(13));
var G__65173 = cljs.core._nth(params,(14));
var G__65174 = cljs.core._nth(params,(15));
var G__65175 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__65142,G__65143,G__65144,G__65145,G__65146,G__65147,G__65148,G__65149,G__65150,G__65151,G__65152,G__65153,G__65154,G__65155,G__65156,G__65157,G__65158){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__65159,G__65142);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65160,G__65143);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65161,G__65144);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65162,G__65145);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65163,G__65146);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65164,G__65147);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65165,G__65148);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65166,G__65149);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65167,G__65150);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65168,G__65151);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65169,G__65152);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65170,G__65153);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65171,G__65154);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65172,G__65155);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65173,G__65156);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65174,G__65157);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65175,G__65158);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65962 = cljs.core._nth(recur_val,(0));
var G__65963 = cljs.core._nth(recur_val,(1));
var G__65964 = cljs.core._nth(recur_val,(2));
var G__65965 = cljs.core._nth(recur_val,(3));
var G__65966 = cljs.core._nth(recur_val,(4));
var G__65967 = cljs.core._nth(recur_val,(5));
var G__65968 = cljs.core._nth(recur_val,(6));
var G__65969 = cljs.core._nth(recur_val,(7));
var G__65970 = cljs.core._nth(recur_val,(8));
var G__65971 = cljs.core._nth(recur_val,(9));
var G__65972 = cljs.core._nth(recur_val,(10));
var G__65973 = cljs.core._nth(recur_val,(11));
var G__65974 = cljs.core._nth(recur_val,(12));
var G__65975 = cljs.core._nth(recur_val,(13));
var G__65976 = cljs.core._nth(recur_val,(14));
var G__65977 = cljs.core._nth(recur_val,(15));
var G__65978 = cljs.core._nth(recur_val,(16));
G__65142 = G__65962;
G__65143 = G__65963;
G__65144 = G__65964;
G__65145 = G__65965;
G__65146 = G__65966;
G__65147 = G__65967;
G__65148 = G__65968;
G__65149 = G__65969;
G__65150 = G__65970;
G__65151 = G__65971;
G__65152 = G__65972;
G__65153 = G__65973;
G__65154 = G__65974;
G__65155 = G__65975;
G__65156 = G__65976;
G__65157 = G__65977;
G__65158 = G__65978;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65204 = cljs.core._nth(params,(0));
var G__65205 = cljs.core._nth(params,(1));
var G__65206 = cljs.core._nth(params,(2));
var G__65207 = cljs.core._nth(params,(3));
var G__65208 = cljs.core._nth(params,(4));
var G__65209 = cljs.core._nth(params,(5));
var G__65210 = cljs.core._nth(params,(6));
var G__65211 = cljs.core._nth(params,(7));
var G__65212 = cljs.core._nth(params,(8));
var G__65213 = cljs.core._nth(params,(9));
var G__65214 = cljs.core._nth(params,(10));
var G__65215 = cljs.core._nth(params,(11));
var G__65216 = cljs.core._nth(params,(12));
var G__65217 = cljs.core._nth(params,(13));
var G__65218 = cljs.core._nth(params,(14));
var G__65219 = cljs.core._nth(params,(15));
var G__65220 = cljs.core._nth(params,(16));
var G__65221 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__65186,G__65187,G__65188,G__65189,G__65190,G__65191,G__65192,G__65193,G__65194,G__65195,G__65196,G__65197,G__65198,G__65199,G__65200,G__65201,G__65202,G__65203){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65204,G__65186);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65205,G__65187);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65206,G__65188);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65207,G__65189);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65208,G__65190);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65209,G__65191);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65210,G__65192);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65211,G__65193);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65212,G__65194);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65213,G__65195);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65214,G__65196);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65215,G__65197);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65216,G__65198);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65217,G__65199);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65218,G__65200);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65219,G__65201);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65220,G__65202);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__65221,G__65203);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__65982 = cljs.core._nth(recur_val,(0));
var G__65983 = cljs.core._nth(recur_val,(1));
var G__65984 = cljs.core._nth(recur_val,(2));
var G__65985 = cljs.core._nth(recur_val,(3));
var G__65986 = cljs.core._nth(recur_val,(4));
var G__65987 = cljs.core._nth(recur_val,(5));
var G__65988 = cljs.core._nth(recur_val,(6));
var G__65989 = cljs.core._nth(recur_val,(7));
var G__65990 = cljs.core._nth(recur_val,(8));
var G__65991 = cljs.core._nth(recur_val,(9));
var G__65992 = cljs.core._nth(recur_val,(10));
var G__65993 = cljs.core._nth(recur_val,(11));
var G__65994 = cljs.core._nth(recur_val,(12));
var G__65995 = cljs.core._nth(recur_val,(13));
var G__65996 = cljs.core._nth(recur_val,(14));
var G__65997 = cljs.core._nth(recur_val,(15));
var G__65998 = cljs.core._nth(recur_val,(16));
var G__65999 = cljs.core._nth(recur_val,(17));
G__65186 = G__65982;
G__65187 = G__65983;
G__65188 = G__65984;
G__65189 = G__65985;
G__65190 = G__65986;
G__65191 = G__65987;
G__65192 = G__65988;
G__65193 = G__65989;
G__65194 = G__65990;
G__65195 = G__65991;
G__65196 = G__65992;
G__65197 = G__65993;
G__65198 = G__65994;
G__65199 = G__65995;
G__65200 = G__65996;
G__65201 = G__65997;
G__65202 = G__65998;
G__65203 = G__65999;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__65240 = cljs.core._nth(params,(0));
var G__65241 = cljs.core._nth(params,(1));
var G__65242 = cljs.core._nth(params,(2));
var G__65243 = cljs.core._nth(params,(3));
var G__65244 = cljs.core._nth(params,(4));
var G__65245 = cljs.core._nth(params,(5));
var G__65246 = cljs.core._nth(params,(6));
var G__65247 = cljs.core._nth(params,(7));
var G__65248 = cljs.core._nth(params,(8));
var G__65249 = cljs.core._nth(params,(9));
var G__65250 = cljs.core._nth(params,(10));
var G__65251 = cljs.core._nth(params,(11));
var G__65252 = cljs.core._nth(params,(12));
var G__65253 = cljs.core._nth(params,(13));
var G__65254 = cljs.core._nth(params,(14));
var G__65255 = cljs.core._nth(params,(15));
var G__65256 = cljs.core._nth(params,(16));
var G__65257 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__65222,G__65223,G__65224,G__65225,G__65226,G__65227,G__65228,G__65229,G__65230,G__65231,G__65232,G__65233,G__65234,G__65235,G__65236,G__65237,G__65238,G__65239){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__65240,G__65222);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65241,G__65223);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65242,G__65224);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65243,G__65225);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65244,G__65226);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65245,G__65227);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65246,G__65228);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65247,G__65229);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65248,G__65230);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65249,G__65231);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65250,G__65232);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65251,G__65233);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65252,G__65234);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65253,G__65235);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65254,G__65236);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65255,G__65237);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65256,G__65238);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__65257,G__65239);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__66005 = cljs.core._nth(recur_val,(0));
var G__66006 = cljs.core._nth(recur_val,(1));
var G__66007 = cljs.core._nth(recur_val,(2));
var G__66008 = cljs.core._nth(recur_val,(3));
var G__66009 = cljs.core._nth(recur_val,(4));
var G__66010 = cljs.core._nth(recur_val,(5));
var G__66011 = cljs.core._nth(recur_val,(6));
var G__66012 = cljs.core._nth(recur_val,(7));
var G__66013 = cljs.core._nth(recur_val,(8));
var G__66014 = cljs.core._nth(recur_val,(9));
var G__66015 = cljs.core._nth(recur_val,(10));
var G__66016 = cljs.core._nth(recur_val,(11));
var G__66017 = cljs.core._nth(recur_val,(12));
var G__66018 = cljs.core._nth(recur_val,(13));
var G__66019 = cljs.core._nth(recur_val,(14));
var G__66020 = cljs.core._nth(recur_val,(15));
var G__66021 = cljs.core._nth(recur_val,(16));
var G__66022 = cljs.core._nth(recur_val,(17));
G__65222 = G__66005;
G__65223 = G__66006;
G__65224 = G__66007;
G__65225 = G__66008;
G__65226 = G__66009;
G__65227 = G__66010;
G__65228 = G__66011;
G__65229 = G__66012;
G__65230 = G__66013;
G__65231 = G__66014;
G__65232 = G__66015;
G__65233 = G__66016;
G__65234 = G__66017;
G__65235 = G__66018;
G__65236 = G__66019;
G__65237 = G__66020;
G__65238 = G__66021;
G__65239 = G__66022;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65320 = cljs.core._nth(params,(0));
var G__65321 = cljs.core._nth(params,(1));
var G__65322 = cljs.core._nth(params,(2));
var G__65323 = cljs.core._nth(params,(3));
var G__65324 = cljs.core._nth(params,(4));
var G__65325 = cljs.core._nth(params,(5));
var G__65326 = cljs.core._nth(params,(6));
var G__65327 = cljs.core._nth(params,(7));
var G__65328 = cljs.core._nth(params,(8));
var G__65329 = cljs.core._nth(params,(9));
var G__65330 = cljs.core._nth(params,(10));
var G__65331 = cljs.core._nth(params,(11));
var G__65332 = cljs.core._nth(params,(12));
var G__65333 = cljs.core._nth(params,(13));
var G__65334 = cljs.core._nth(params,(14));
var G__65335 = cljs.core._nth(params,(15));
var G__65336 = cljs.core._nth(params,(16));
var G__65337 = cljs.core._nth(params,(17));
var G__65338 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__65301,G__65302,G__65303,G__65304,G__65305,G__65306,G__65307,G__65308,G__65309,G__65310,G__65311,G__65312,G__65313,G__65314,G__65315,G__65316,G__65317,G__65318,G__65319){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65320,G__65301);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65321,G__65302);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65322,G__65303);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65323,G__65304);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65324,G__65305);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65325,G__65306);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65326,G__65307);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65327,G__65308);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65328,G__65309);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65329,G__65310);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65330,G__65311);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65331,G__65312);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65332,G__65313);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65333,G__65314);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65334,G__65315);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65335,G__65316);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65336,G__65317);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__65337,G__65318);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__65338,G__65319);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__66024 = cljs.core._nth(recur_val,(0));
var G__66025 = cljs.core._nth(recur_val,(1));
var G__66026 = cljs.core._nth(recur_val,(2));
var G__66027 = cljs.core._nth(recur_val,(3));
var G__66028 = cljs.core._nth(recur_val,(4));
var G__66029 = cljs.core._nth(recur_val,(5));
var G__66030 = cljs.core._nth(recur_val,(6));
var G__66031 = cljs.core._nth(recur_val,(7));
var G__66032 = cljs.core._nth(recur_val,(8));
var G__66033 = cljs.core._nth(recur_val,(9));
var G__66034 = cljs.core._nth(recur_val,(10));
var G__66035 = cljs.core._nth(recur_val,(11));
var G__66036 = cljs.core._nth(recur_val,(12));
var G__66037 = cljs.core._nth(recur_val,(13));
var G__66038 = cljs.core._nth(recur_val,(14));
var G__66039 = cljs.core._nth(recur_val,(15));
var G__66040 = cljs.core._nth(recur_val,(16));
var G__66041 = cljs.core._nth(recur_val,(17));
var G__66042 = cljs.core._nth(recur_val,(18));
G__65301 = G__66024;
G__65302 = G__66025;
G__65303 = G__66026;
G__65304 = G__66027;
G__65305 = G__66028;
G__65306 = G__66029;
G__65307 = G__66030;
G__65308 = G__66031;
G__65309 = G__66032;
G__65310 = G__66033;
G__65311 = G__66034;
G__65312 = G__66035;
G__65313 = G__66036;
G__65314 = G__66037;
G__65315 = G__66038;
G__65316 = G__66039;
G__65317 = G__66040;
G__65318 = G__66041;
G__65319 = G__66042;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__65415 = cljs.core._nth(params,(0));
var G__65416 = cljs.core._nth(params,(1));
var G__65417 = cljs.core._nth(params,(2));
var G__65418 = cljs.core._nth(params,(3));
var G__65419 = cljs.core._nth(params,(4));
var G__65420 = cljs.core._nth(params,(5));
var G__65421 = cljs.core._nth(params,(6));
var G__65422 = cljs.core._nth(params,(7));
var G__65423 = cljs.core._nth(params,(8));
var G__65424 = cljs.core._nth(params,(9));
var G__65425 = cljs.core._nth(params,(10));
var G__65426 = cljs.core._nth(params,(11));
var G__65427 = cljs.core._nth(params,(12));
var G__65428 = cljs.core._nth(params,(13));
var G__65429 = cljs.core._nth(params,(14));
var G__65430 = cljs.core._nth(params,(15));
var G__65431 = cljs.core._nth(params,(16));
var G__65432 = cljs.core._nth(params,(17));
var G__65433 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__65396,G__65397,G__65398,G__65399,G__65400,G__65401,G__65402,G__65403,G__65404,G__65405,G__65406,G__65407,G__65408,G__65409,G__65410,G__65411,G__65412,G__65413,G__65414){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__65415,G__65396);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65416,G__65397);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65417,G__65398);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65418,G__65399);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65419,G__65400);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65420,G__65401);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65421,G__65402);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65422,G__65403);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65423,G__65404);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65424,G__65405);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65425,G__65406);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65426,G__65407);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65427,G__65408);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65428,G__65409);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65429,G__65410);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65430,G__65411);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65431,G__65412);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__65432,G__65413);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__65433,G__65414);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__66050 = cljs.core._nth(recur_val,(0));
var G__66051 = cljs.core._nth(recur_val,(1));
var G__66052 = cljs.core._nth(recur_val,(2));
var G__66053 = cljs.core._nth(recur_val,(3));
var G__66054 = cljs.core._nth(recur_val,(4));
var G__66055 = cljs.core._nth(recur_val,(5));
var G__66056 = cljs.core._nth(recur_val,(6));
var G__66057 = cljs.core._nth(recur_val,(7));
var G__66058 = cljs.core._nth(recur_val,(8));
var G__66059 = cljs.core._nth(recur_val,(9));
var G__66060 = cljs.core._nth(recur_val,(10));
var G__66061 = cljs.core._nth(recur_val,(11));
var G__66062 = cljs.core._nth(recur_val,(12));
var G__66063 = cljs.core._nth(recur_val,(13));
var G__66064 = cljs.core._nth(recur_val,(14));
var G__66065 = cljs.core._nth(recur_val,(15));
var G__66066 = cljs.core._nth(recur_val,(16));
var G__66067 = cljs.core._nth(recur_val,(17));
var G__66068 = cljs.core._nth(recur_val,(18));
G__65396 = G__66050;
G__65397 = G__66051;
G__65398 = G__66052;
G__65399 = G__66053;
G__65400 = G__66054;
G__65401 = G__66055;
G__65402 = G__66056;
G__65403 = G__66057;
G__65404 = G__66058;
G__65405 = G__66059;
G__65406 = G__66060;
G__65407 = G__66061;
G__65408 = G__66062;
G__65409 = G__66063;
G__65410 = G__66064;
G__65411 = G__66065;
G__65412 = G__66066;
G__65413 = G__66067;
G__65414 = G__66068;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__65468 = cljs.core._nth(params,(0));
var G__65469 = cljs.core._nth(params,(1));
var G__65470 = cljs.core._nth(params,(2));
var G__65471 = cljs.core._nth(params,(3));
var G__65472 = cljs.core._nth(params,(4));
var G__65473 = cljs.core._nth(params,(5));
var G__65474 = cljs.core._nth(params,(6));
var G__65475 = cljs.core._nth(params,(7));
var G__65476 = cljs.core._nth(params,(8));
var G__65477 = cljs.core._nth(params,(9));
var G__65478 = cljs.core._nth(params,(10));
var G__65479 = cljs.core._nth(params,(11));
var G__65480 = cljs.core._nth(params,(12));
var G__65481 = cljs.core._nth(params,(13));
var G__65482 = cljs.core._nth(params,(14));
var G__65483 = cljs.core._nth(params,(15));
var G__65484 = cljs.core._nth(params,(16));
var G__65485 = cljs.core._nth(params,(17));
var G__65486 = cljs.core._nth(params,(18));
var G__65487 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__65448,G__65449,G__65450,G__65451,G__65452,G__65453,G__65454,G__65455,G__65456,G__65457,G__65458,G__65459,G__65460,G__65461,G__65462,G__65463,G__65464,G__65465,G__65466,G__65467){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__65468,G__65448);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65469,G__65449);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65470,G__65450);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65471,G__65451);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65472,G__65452);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65473,G__65453);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65474,G__65454);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65475,G__65455);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65476,G__65456);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65477,G__65457);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65478,G__65458);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65479,G__65459);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65480,G__65460);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65481,G__65461);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65482,G__65462);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65483,G__65463);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65484,G__65464);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__65485,G__65465);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__65486,G__65466);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__65487,G__65467);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__66072 = cljs.core._nth(recur_val,(0));
var G__66073 = cljs.core._nth(recur_val,(1));
var G__66074 = cljs.core._nth(recur_val,(2));
var G__66075 = cljs.core._nth(recur_val,(3));
var G__66076 = cljs.core._nth(recur_val,(4));
var G__66077 = cljs.core._nth(recur_val,(5));
var G__66078 = cljs.core._nth(recur_val,(6));
var G__66079 = cljs.core._nth(recur_val,(7));
var G__66080 = cljs.core._nth(recur_val,(8));
var G__66081 = cljs.core._nth(recur_val,(9));
var G__66082 = cljs.core._nth(recur_val,(10));
var G__66083 = cljs.core._nth(recur_val,(11));
var G__66084 = cljs.core._nth(recur_val,(12));
var G__66085 = cljs.core._nth(recur_val,(13));
var G__66086 = cljs.core._nth(recur_val,(14));
var G__66087 = cljs.core._nth(recur_val,(15));
var G__66088 = cljs.core._nth(recur_val,(16));
var G__66089 = cljs.core._nth(recur_val,(17));
var G__66090 = cljs.core._nth(recur_val,(18));
var G__66091 = cljs.core._nth(recur_val,(19));
G__65448 = G__66072;
G__65449 = G__66073;
G__65450 = G__66074;
G__65451 = G__66075;
G__65452 = G__66076;
G__65453 = G__66077;
G__65454 = G__66078;
G__65455 = G__66079;
G__65456 = G__66080;
G__65457 = G__66081;
G__65458 = G__66082;
G__65459 = G__66083;
G__65460 = G__66084;
G__65461 = G__66085;
G__65462 = G__66086;
G__65463 = G__66087;
G__65464 = G__66088;
G__65465 = G__66089;
G__65466 = G__66090;
G__65467 = G__66091;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
} else {
var G__65521 = cljs.core._nth(params,(0));
var G__65522 = cljs.core._nth(params,(1));
var G__65523 = cljs.core._nth(params,(2));
var G__65524 = cljs.core._nth(params,(3));
var G__65525 = cljs.core._nth(params,(4));
var G__65526 = cljs.core._nth(params,(5));
var G__65527 = cljs.core._nth(params,(6));
var G__65528 = cljs.core._nth(params,(7));
var G__65529 = cljs.core._nth(params,(8));
var G__65530 = cljs.core._nth(params,(9));
var G__65531 = cljs.core._nth(params,(10));
var G__65532 = cljs.core._nth(params,(11));
var G__65533 = cljs.core._nth(params,(12));
var G__65534 = cljs.core._nth(params,(13));
var G__65535 = cljs.core._nth(params,(14));
var G__65536 = cljs.core._nth(params,(15));
var G__65537 = cljs.core._nth(params,(16));
var G__65538 = cljs.core._nth(params,(17));
var G__65539 = cljs.core._nth(params,(18));
var G__65540 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__65501,G__65502,G__65503,G__65504,G__65505,G__65506,G__65507,G__65508,G__65509,G__65510,G__65511,G__65512,G__65513,G__65514,G__65515,G__65516,G__65517,G__65518,G__65519,G__65520){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__65521,G__65501);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__65522,G__65502);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__65523,G__65503);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__65524,G__65504);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__65525,G__65505);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__65526,G__65506);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__65527,G__65507);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__65528,G__65508);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__65529,G__65509);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__65530,G__65510);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__65531,G__65511);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__65532,G__65512);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__65533,G__65513);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__65534,G__65514);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__65535,G__65515);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__65536,G__65516);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__65537,G__65517);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__65538,G__65518);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__65539,G__65519);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__65540,G__65520);
var ret__63801__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___63802__auto__ = (ret__63801__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___63802__auto__){
var recur_val = sci.impl.types.getVal(ret__63801__auto__);
var G__66094 = cljs.core._nth(recur_val,(0));
var G__66095 = cljs.core._nth(recur_val,(1));
var G__66096 = cljs.core._nth(recur_val,(2));
var G__66097 = cljs.core._nth(recur_val,(3));
var G__66098 = cljs.core._nth(recur_val,(4));
var G__66099 = cljs.core._nth(recur_val,(5));
var G__66100 = cljs.core._nth(recur_val,(6));
var G__66101 = cljs.core._nth(recur_val,(7));
var G__66102 = cljs.core._nth(recur_val,(8));
var G__66103 = cljs.core._nth(recur_val,(9));
var G__66104 = cljs.core._nth(recur_val,(10));
var G__66105 = cljs.core._nth(recur_val,(11));
var G__66106 = cljs.core._nth(recur_val,(12));
var G__66107 = cljs.core._nth(recur_val,(13));
var G__66108 = cljs.core._nth(recur_val,(14));
var G__66109 = cljs.core._nth(recur_val,(15));
var G__66110 = cljs.core._nth(recur_val,(16));
var G__66111 = cljs.core._nth(recur_val,(17));
var G__66112 = cljs.core._nth(recur_val,(18));
var G__66113 = cljs.core._nth(recur_val,(19));
G__65501 = G__66094;
G__65502 = G__66095;
G__65503 = G__66096;
G__65504 = G__66097;
G__65505 = G__66098;
G__65506 = G__66099;
G__65507 = G__66100;
G__65508 = G__66101;
G__65509 = G__66102;
G__65510 = G__66103;
G__65511 = G__66104;
G__65512 = G__66105;
G__65513 = G__66106;
G__65514 = G__66107;
G__65515 = G__66108;
G__65516 = G__66109;
G__65517 = G__66110;
G__65518 = G__66111;
G__65519 = G__66112;
G__65520 = G__66113;
continue;
} else {
return ret__63801__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__66116 = cljs.core.next(args_STAR_);
var G__66117 = cljs.core.next(params__$1);
var G__66118 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__66116;
params__$1 = G__66117;
ret = G__66118;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__65552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65552,(0),null);
var vec__65555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65552,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65555,(0),null);
var G__66119 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__66119;
continue;
} else {
var G__66120 = recur_val;
args = G__66120;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66121__i = 0, G__66121__a = new Array(arguments.length -  0);
while (G__66121__i < G__66121__a.length) {G__66121__a[G__66121__i] = arguments[G__66121__i + 0]; ++G__66121__i;}
  args = new cljs.core.IndexedSeq(G__66121__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__66122){
var args = cljs.core.seq(arglist__66122);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__66124 = cljs.core.next(args_STAR_);
var G__66125 = cljs.core.next(params__$1);
var G__66126 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__66124;
params__$1 = G__66125;
ret = G__66126;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__65558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65558,(0),null);
var vec__65561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65558,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65561,(0),null);
var G__66132 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__66132;
continue;
} else {
var G__66134 = recur_val;
args = G__66134;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66136__i = 0, G__66136__a = new Array(arguments.length -  0);
while (G__66136__i < G__66136__a.length) {G__66136__a[G__66136__i] = arguments[G__66136__i + 0]; ++G__66136__i;}
  args = new cljs.core.IndexedSeq(G__66136__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__66137){
var args = cljs.core.seq(arglist__66137);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__66144__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__66144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66145__i = 0, G__66145__a = new Array(arguments.length -  0);
while (G__66145__i < G__66145__a.length) {G__66145__a[G__66145__i] = arguments[G__66145__i + 0]; ++G__66145__i;}
  args = new cljs.core.IndexedSeq(G__66145__a,0,null);
} 
return G__66144__delegate.call(this,args);};
G__66144.cljs$lang$maxFixedArity = 0;
G__66144.cljs$lang$applyTo = (function (arglist__66146){
var args = cljs.core.seq(arglist__66146);
return G__66144__delegate(args);
});
G__66144.cljs$core$IFn$_invoke$arity$variadic = G__66144__delegate;
return G__66144;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__65571_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__65571_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
