goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65139 = arguments.length;
var i__5770__auto___65140 = (0);
while(true){
if((i__5770__auto___65140 < len__5769__auto___65139)){
args__5775__auto__.push((arguments[i__5770__auto___65140]));

var G__65141 = (i__5770__auto___65140 + (1));
i__5770__auto___65140 = G__65141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__64368 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64368,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64368,(1),null);
var vec__64371 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64371,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64371,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64417){
var vec__64425 = p__64417;
var seq__64426 = cljs.core.seq(vec__64425);
var first__64427 = cljs.core.first(seq__64426);
var seq__64426__$1 = cljs.core.next(seq__64426);
var method_name = first__64427;
var ___$2 = seq__64426__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__64341__auto__","x__64341__auto__",-1806600617,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64342__auto__","args__64342__auto__",-1539033332,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__64343__auto__","methods__64343__auto__",-479027429,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64341__auto__","x__64341__auto__",-1806600617,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__64343__auto__","methods__64343__auto__",-479027429,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64341__auto__","x__64341__auto__",-1806600617,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64342__auto__","args__64342__auto__",-1539033332,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__64344__auto__","x__64344__auto__",856494078,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64345__auto__","args__64345__auto__",-1756684586,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__64346__auto__","meta__64346__auto__",461925593,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64344__auto__","x__64344__auto__",856494078,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__64347__auto__","method__64347__auto__",2072174617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__64346__auto__","meta__64346__auto__",461925593,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__64347__auto__","method__64347__auto__",2072174617,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__64347__auto__","method__64347__auto__",2072174617,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64344__auto__","x__64344__auto__",856494078,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__64345__auto__","args__64345__auto__",-1756684586,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__64344__auto__","x__64344__auto__",856494078,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq64352){
var G__64353 = cljs.core.first(seq64352);
var seq64352__$1 = cljs.core.next(seq64352);
var G__64354 = cljs.core.first(seq64352__$1);
var seq64352__$2 = cljs.core.next(seq64352__$1);
var G__64355 = cljs.core.first(seq64352__$2);
var seq64352__$3 = cljs.core.next(seq64352__$2);
var G__64356 = cljs.core.first(seq64352__$3);
var seq64352__$4 = cljs.core.next(seq64352__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64353,G__64354,G__64355,G__64356,seq64352__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65258 = arguments.length;
var i__5770__auto___65259 = (0);
while(true){
if((i__5770__auto___65259 < len__5769__auto___65258)){
args__5775__auto__.push((arguments[i__5770__auto___65259]));

var G__65260 = (i__5770__auto___65259 + (1));
i__5770__auto___65259 = G__65260;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__64504 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__64506 = null;
var count__64507 = (0);
var i__64508 = (0);
while(true){
if((i__64508 < count__64507)){
var vec__64691 = chunk__64506.cljs$core$IIndexed$_nth$arity$2(null,i__64508);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64691,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64691,(1),null);
var extend_via_metadata_65262 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_65263 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_65264 = sci.impl.vars.getName(proto_ns_65263);
var pns_str_65265 = (cljs.core.truth_(extend_via_metadata_65262)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_65264):null);
var seq__64717_65267 = cljs.core.seq(mmap);
var chunk__64718_65268 = null;
var count__64719_65269 = (0);
var i__64720_65270 = (0);
while(true){
if((i__64720_65270 < count__64719_65269)){
var vec__64756_65271 = chunk__64718_65268.cljs$core$IIndexed$_nth$arity$2(null,i__64720_65270);
var meth_name_65272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64756_65271,(0),null);
var f_65273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64756_65271,(1),null);
var meth_str_65274 = cljs.core.name(meth_name_65272);
var meth_sym_65275 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_65274);
var env_65276 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65277 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65276,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65264,meth_sym_65275], null));
var multi_method_65278 = cljs.core.deref(multi_method_var_65277);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65278,atype,(cljs.core.truth_(extend_via_metadata_65262)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_65265,meth_str_65274);
return ((function (seq__64717_65267,chunk__64718_65268,count__64719_65269,i__64720_65270,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65274,meth_sym_65275,env_65276,multi_method_var_65277,multi_method_65278,vec__64756_65271,meth_name_65272,f_65273,extend_via_metadata_65262,proto_ns_65263,pns_65264,pns_str_65265,vec__64691,proto,mmap){
return (function() { 
var G__65279__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65273,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65273,this$,args);
}
};
var G__65279 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__65280__i = 0, G__65280__a = new Array(arguments.length -  1);
while (G__65280__i < G__65280__a.length) {G__65280__a[G__65280__i] = arguments[G__65280__i + 1]; ++G__65280__i;}
  args = new cljs.core.IndexedSeq(G__65280__a,0,null);
} 
return G__65279__delegate.call(this,this$,args);};
G__65279.cljs$lang$maxFixedArity = 1;
G__65279.cljs$lang$applyTo = (function (arglist__65281){
var this$ = cljs.core.first(arglist__65281);
var args = cljs.core.rest(arglist__65281);
return G__65279__delegate(this$,args);
});
G__65279.cljs$core$IFn$_invoke$arity$variadic = G__65279__delegate;
return G__65279;
})()
;
;})(seq__64717_65267,chunk__64718_65268,count__64719_65269,i__64720_65270,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65274,meth_sym_65275,env_65276,multi_method_var_65277,multi_method_65278,vec__64756_65271,meth_name_65272,f_65273,extend_via_metadata_65262,proto_ns_65263,pns_65264,pns_str_65265,vec__64691,proto,mmap))
})():f_65273));


var G__65282 = seq__64717_65267;
var G__65283 = chunk__64718_65268;
var G__65284 = count__64719_65269;
var G__65285 = (i__64720_65270 + (1));
seq__64717_65267 = G__65282;
chunk__64718_65268 = G__65283;
count__64719_65269 = G__65284;
i__64720_65270 = G__65285;
continue;
} else {
var temp__5804__auto___65286 = cljs.core.seq(seq__64717_65267);
if(temp__5804__auto___65286){
var seq__64717_65287__$1 = temp__5804__auto___65286;
if(cljs.core.chunked_seq_QMARK_(seq__64717_65287__$1)){
var c__5568__auto___65288 = cljs.core.chunk_first(seq__64717_65287__$1);
var G__65289 = cljs.core.chunk_rest(seq__64717_65287__$1);
var G__65290 = c__5568__auto___65288;
var G__65291 = cljs.core.count(c__5568__auto___65288);
var G__65292 = (0);
seq__64717_65267 = G__65289;
chunk__64718_65268 = G__65290;
count__64719_65269 = G__65291;
i__64720_65270 = G__65292;
continue;
} else {
var vec__64784_65293 = cljs.core.first(seq__64717_65287__$1);
var meth_name_65294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64784_65293,(0),null);
var f_65295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64784_65293,(1),null);
var meth_str_65296 = cljs.core.name(meth_name_65294);
var meth_sym_65297 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_65296);
var env_65298 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65299 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65298,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65264,meth_sym_65297], null));
var multi_method_65300 = cljs.core.deref(multi_method_var_65299);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65300,atype,(cljs.core.truth_(extend_via_metadata_65262)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_65265,meth_str_65296);
return ((function (seq__64717_65267,chunk__64718_65268,count__64719_65269,i__64720_65270,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65296,meth_sym_65297,env_65298,multi_method_var_65299,multi_method_65300,vec__64784_65293,meth_name_65294,f_65295,seq__64717_65287__$1,temp__5804__auto___65286,extend_via_metadata_65262,proto_ns_65263,pns_65264,pns_str_65265,vec__64691,proto,mmap){
return (function() { 
var G__65339__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65295,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65295,this$,args);
}
};
var G__65339 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__65341__i = 0, G__65341__a = new Array(arguments.length -  1);
while (G__65341__i < G__65341__a.length) {G__65341__a[G__65341__i] = arguments[G__65341__i + 1]; ++G__65341__i;}
  args = new cljs.core.IndexedSeq(G__65341__a,0,null);
} 
return G__65339__delegate.call(this,this$,args);};
G__65339.cljs$lang$maxFixedArity = 1;
G__65339.cljs$lang$applyTo = (function (arglist__65342){
var this$ = cljs.core.first(arglist__65342);
var args = cljs.core.rest(arglist__65342);
return G__65339__delegate(this$,args);
});
G__65339.cljs$core$IFn$_invoke$arity$variadic = G__65339__delegate;
return G__65339;
})()
;
;})(seq__64717_65267,chunk__64718_65268,count__64719_65269,i__64720_65270,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65296,meth_sym_65297,env_65298,multi_method_var_65299,multi_method_65300,vec__64784_65293,meth_name_65294,f_65295,seq__64717_65287__$1,temp__5804__auto___65286,extend_via_metadata_65262,proto_ns_65263,pns_65264,pns_str_65265,vec__64691,proto,mmap))
})():f_65295));


var G__65343 = cljs.core.next(seq__64717_65287__$1);
var G__65344 = null;
var G__65345 = (0);
var G__65346 = (0);
seq__64717_65267 = G__65343;
chunk__64718_65268 = G__65344;
count__64719_65269 = G__65345;
i__64720_65270 = G__65346;
continue;
}
} else {
}
}
break;
}


var G__65347 = seq__64504;
var G__65348 = chunk__64506;
var G__65349 = count__64507;
var G__65350 = (i__64508 + (1));
seq__64504 = G__65347;
chunk__64506 = G__65348;
count__64507 = G__65349;
i__64508 = G__65350;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64504);
if(temp__5804__auto__){
var seq__64504__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64504__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__64504__$1);
var G__65351 = cljs.core.chunk_rest(seq__64504__$1);
var G__65352 = c__5568__auto__;
var G__65353 = cljs.core.count(c__5568__auto__);
var G__65354 = (0);
seq__64504 = G__65351;
chunk__64506 = G__65352;
count__64507 = G__65353;
i__64508 = G__65354;
continue;
} else {
var vec__64813 = cljs.core.first(seq__64504__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64813,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64813,(1),null);
var extend_via_metadata_65355 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_65356 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_65357 = sci.impl.vars.getName(proto_ns_65356);
var pns_str_65358 = (cljs.core.truth_(extend_via_metadata_65355)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_65357):null);
var seq__64817_65359 = cljs.core.seq(mmap);
var chunk__64818_65360 = null;
var count__64819_65361 = (0);
var i__64820_65362 = (0);
while(true){
if((i__64820_65362 < count__64819_65361)){
var vec__64830_65363 = chunk__64818_65360.cljs$core$IIndexed$_nth$arity$2(null,i__64820_65362);
var meth_name_65364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64830_65363,(0),null);
var f_65365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64830_65363,(1),null);
var meth_str_65366 = cljs.core.name(meth_name_65364);
var meth_sym_65367 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_65366);
var env_65368 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65369 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65368,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65357,meth_sym_65367], null));
var multi_method_65370 = cljs.core.deref(multi_method_var_65369);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65370,atype,(cljs.core.truth_(extend_via_metadata_65355)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_65358,meth_str_65366);
return ((function (seq__64817_65359,chunk__64818_65360,count__64819_65361,i__64820_65362,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65366,meth_sym_65367,env_65368,multi_method_var_65369,multi_method_65370,vec__64830_65363,meth_name_65364,f_65365,extend_via_metadata_65355,proto_ns_65356,pns_65357,pns_str_65358,vec__64813,proto,mmap,seq__64504__$1,temp__5804__auto__){
return (function() { 
var G__65371__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65365,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65365,this$,args);
}
};
var G__65371 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__65373__i = 0, G__65373__a = new Array(arguments.length -  1);
while (G__65373__i < G__65373__a.length) {G__65373__a[G__65373__i] = arguments[G__65373__i + 1]; ++G__65373__i;}
  args = new cljs.core.IndexedSeq(G__65373__a,0,null);
} 
return G__65371__delegate.call(this,this$,args);};
G__65371.cljs$lang$maxFixedArity = 1;
G__65371.cljs$lang$applyTo = (function (arglist__65374){
var this$ = cljs.core.first(arglist__65374);
var args = cljs.core.rest(arglist__65374);
return G__65371__delegate(this$,args);
});
G__65371.cljs$core$IFn$_invoke$arity$variadic = G__65371__delegate;
return G__65371;
})()
;
;})(seq__64817_65359,chunk__64818_65360,count__64819_65361,i__64820_65362,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65366,meth_sym_65367,env_65368,multi_method_var_65369,multi_method_65370,vec__64830_65363,meth_name_65364,f_65365,extend_via_metadata_65355,proto_ns_65356,pns_65357,pns_str_65358,vec__64813,proto,mmap,seq__64504__$1,temp__5804__auto__))
})():f_65365));


var G__65375 = seq__64817_65359;
var G__65376 = chunk__64818_65360;
var G__65377 = count__64819_65361;
var G__65378 = (i__64820_65362 + (1));
seq__64817_65359 = G__65375;
chunk__64818_65360 = G__65376;
count__64819_65361 = G__65377;
i__64820_65362 = G__65378;
continue;
} else {
var temp__5804__auto___65380__$1 = cljs.core.seq(seq__64817_65359);
if(temp__5804__auto___65380__$1){
var seq__64817_65382__$1 = temp__5804__auto___65380__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64817_65382__$1)){
var c__5568__auto___65383 = cljs.core.chunk_first(seq__64817_65382__$1);
var G__65384 = cljs.core.chunk_rest(seq__64817_65382__$1);
var G__65385 = c__5568__auto___65383;
var G__65386 = cljs.core.count(c__5568__auto___65383);
var G__65387 = (0);
seq__64817_65359 = G__65384;
chunk__64818_65360 = G__65385;
count__64819_65361 = G__65386;
i__64820_65362 = G__65387;
continue;
} else {
var vec__64859_65388 = cljs.core.first(seq__64817_65382__$1);
var meth_name_65389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64859_65388,(0),null);
var f_65390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64859_65388,(1),null);
var meth_str_65391 = cljs.core.name(meth_name_65389);
var meth_sym_65392 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_65391);
var env_65393 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_65394 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_65393,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_65357,meth_sym_65392], null));
var multi_method_65395 = cljs.core.deref(multi_method_var_65394);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_65395,atype,(cljs.core.truth_(extend_via_metadata_65355)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_65358,meth_str_65391);
return ((function (seq__64817_65359,chunk__64818_65360,count__64819_65361,i__64820_65362,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65391,meth_sym_65392,env_65393,multi_method_var_65394,multi_method_65395,vec__64859_65388,meth_name_65389,f_65390,seq__64817_65382__$1,temp__5804__auto___65380__$1,extend_via_metadata_65355,proto_ns_65356,pns_65357,pns_str_65358,vec__64813,proto,mmap,seq__64504__$1,temp__5804__auto__){
return (function() { 
var G__65435__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65390,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_65390,this$,args);
}
};
var G__65435 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__65436__i = 0, G__65436__a = new Array(arguments.length -  1);
while (G__65436__i < G__65436__a.length) {G__65436__a[G__65436__i] = arguments[G__65436__i + 1]; ++G__65436__i;}
  args = new cljs.core.IndexedSeq(G__65436__a,0,null);
} 
return G__65435__delegate.call(this,this$,args);};
G__65435.cljs$lang$maxFixedArity = 1;
G__65435.cljs$lang$applyTo = (function (arglist__65437){
var this$ = cljs.core.first(arglist__65437);
var args = cljs.core.rest(arglist__65437);
return G__65435__delegate(this$,args);
});
G__65435.cljs$core$IFn$_invoke$arity$variadic = G__65435__delegate;
return G__65435;
})()
;
;})(seq__64817_65359,chunk__64818_65360,count__64819_65361,i__64820_65362,seq__64504,chunk__64506,count__64507,i__64508,fq,meth_str_65391,meth_sym_65392,env_65393,multi_method_var_65394,multi_method_65395,vec__64859_65388,meth_name_65389,f_65390,seq__64817_65382__$1,temp__5804__auto___65380__$1,extend_via_metadata_65355,proto_ns_65356,pns_65357,pns_str_65358,vec__64813,proto,mmap,seq__64504__$1,temp__5804__auto__))
})():f_65390));


var G__65438 = cljs.core.next(seq__64817_65382__$1);
var G__65439 = null;
var G__65440 = (0);
var G__65441 = (0);
seq__64817_65359 = G__65438;
chunk__64818_65360 = G__65439;
count__64819_65361 = G__65440;
i__64820_65362 = G__65441;
continue;
}
} else {
}
}
break;
}


var G__65442 = cljs.core.next(seq__64504__$1);
var G__65443 = null;
var G__65444 = (0);
var G__65445 = (0);
seq__64504 = G__65442;
chunk__64506 = G__65443;
count__64507 = G__65444;
i__64508 = G__65445;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq64486){
var G__64487 = cljs.core.first(seq64486);
var seq64486__$1 = cljs.core.next(seq64486);
var G__64488 = cljs.core.first(seq64486__$1);
var seq64486__$2 = cljs.core.next(seq64486__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64487,G__64488,seq64486__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__64895){
var vec__64896 = p__64895;
var seq__64897 = cljs.core.seq(vec__64896);
var first__64898 = cljs.core.first(seq__64897);
var seq__64897__$1 = cljs.core.next(seq__64897);
var args = first__64898;
var body = seq__64897__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__64862__auto__","farg__64862__auto__",-107014186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__64863__auto__","m__64863__auto__",1891726789,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__64862__auto__","farg__64862__auto__",-107014186,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__64864__auto__","meth__64864__auto__",-1860462622,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__64863__auto__","m__64863__auto__",1891726789,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__64864__auto__","meth__64864__auto__",-1860462622,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64932){
var vec__64933 = p__64932;
var seq__64934 = cljs.core.seq(vec__64933);
var first__64935 = cljs.core.first(seq__64934);
var seq__64934__$1 = cljs.core.next(seq__64934);
var meth_name = first__64935;
var fn_body = seq__64934__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__64901_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__64901_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65488 = arguments.length;
var i__5770__auto___65489 = (0);
while(true){
if((i__5770__auto___65489 < len__5769__auto___65488)){
args__5775__auto__.push((arguments[i__5770__auto___65489]));

var G__65490 = (i__5770__auto___65489 + (1));
i__5770__auto___65489 = G__65490;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__64936_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__64936_SHARP_)));
}),impls);
var protocol_var = (function (){var G__64945 = ctx;
var G__64946 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__64947 = protocol_name;
var fexpr__64944 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__64944.cljs$core$IFn$_invoke$arity$3 ? fexpr__64944.cljs$core$IFn$_invoke$arity$3(G__64945,G__64946,G__64947) : fexpr__64944.call(null,G__64945,G__64946,G__64947));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64948){
var vec__64949 = p__64948;
var seq__64950 = cljs.core.seq(vec__64949);
var first__64951 = cljs.core.first(seq__64950);
var seq__64950__$1 = cljs.core.next(seq__64950);
var type = first__64951;
var meths = seq__64950__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq64937){
var G__64938 = cljs.core.first(seq64937);
var seq64937__$1 = cljs.core.next(seq64937);
var G__64939 = cljs.core.first(seq64937__$1);
var seq64937__$2 = cljs.core.next(seq64937__$1);
var G__64940 = cljs.core.first(seq64937__$2);
var seq64937__$3 = cljs.core.next(seq64937__$2);
var G__64941 = cljs.core.first(seq64937__$3);
var seq64937__$4 = cljs.core.next(seq64937__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64938,G__64939,G__64940,G__64941,seq64937__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65492 = arguments.length;
var i__5770__auto___65493 = (0);
while(true){
if((i__5770__auto___65493 < len__5769__auto___65492)){
args__5775__auto__.push((arguments[i__5770__auto___65493]));

var G__65494 = (i__5770__auto___65493 + (1));
i__5770__auto___65493 = G__65494;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__64982_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__64982_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65019){
var vec__65020 = p__65019;
var seq__65021 = cljs.core.seq(vec__65020);
var first__65022 = cljs.core.first(seq__65021);
var seq__65021__$1 = cljs.core.next(seq__65021);
var proto = first__65022;
var meths = seq__65021__$1;
var protocol_var = (function (){var G__65024 = ctx;
var G__65025 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__65026 = proto;
var fexpr__65023 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__65023.cljs$core$IFn$_invoke$arity$3 ? fexpr__65023.cljs$core$IFn$_invoke$arity$3(G__65024,G__65025,G__65026) : fexpr__65023.call(null,G__65024,G__65025,G__65026));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq64983){
var G__64984 = cljs.core.first(seq64983);
var seq64983__$1 = cljs.core.next(seq64983);
var G__64985 = cljs.core.first(seq64983__$1);
var seq64983__$2 = cljs.core.next(seq64983__$1);
var G__64986 = cljs.core.first(seq64983__$2);
var seq64983__$3 = cljs.core.next(seq64983__$2);
var G__64987 = cljs.core.first(seq64983__$3);
var seq64983__$4 = cljs.core.next(seq64983__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64984,G__64985,G__64986,G__64987,seq64983__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__65027_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__65027_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__65027_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__65061 = cljs.core._EQ_;
var expr__65062 = p;
if(cljs.core.truth_((pred__65061.cljs$core$IFn$_invoke$arity$2 ? pred__65061.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__65062) : pred__65061.call(null,cljs.core.IDeref,expr__65062)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__65061.cljs$core$IFn$_invoke$arity$2 ? pred__65061.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__65062) : pred__65061.call(null,cljs.core.ISwap,expr__65062)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__65061.cljs$core$IFn$_invoke$arity$2 ? pred__65061.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__65062) : pred__65061.call(null,cljs.core.IReset,expr__65062)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__65062)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__65100 = clazz;
var G__65100__$1 = (((G__65100 == null))?null:cljs.core.meta(G__65100));
if((G__65100__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__65100__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__65102_SHARP_){
return cljs.core.get_method(p1__65102_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
