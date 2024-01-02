goog.provide('malli.provider');
malli.provider._preferences = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(cljs.core.reverse(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null)], null)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Keyword(null,"any","any",1705907423),(-13),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"or","or",235744169),(-12),new cljs.core.Keyword(null,"and","and",-971899817),(-11),new cljs.core.Symbol(null,"any?","any?",-318999933,null),(-10),new cljs.core.Symbol(null,"some?","some?",234752293,null),(-9)], 0));
malli.provider._safe_QMARK_ = (function malli$provider$_safe_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39430 = arguments.length;
var i__5770__auto___39431 = (0);
while(true){
if((i__5770__auto___39431 < len__5769__auto___39430)){
args__5775__auto__.push((arguments[i__5770__auto___39431]));

var G__39432 = (i__5770__auto___39431 + (1));
i__5770__auto___39431 = G__39432;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e39078){if((e39078 instanceof Error)){
var _ = e39078;
return false;
} else {
throw e39078;

}
}}));

(malli.provider._safe_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(malli.provider._safe_QMARK_.cljs$lang$applyTo = (function (seq39076){
var G__39077 = cljs.core.first(seq39076);
var seq39076__$1 = cljs.core.next(seq39076);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39077,seq39076__$1);
}));


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
malli.provider.Hinted = (function (value,hint,__meta,__extmap,__hash){
this.value = value;
this.hint = hint;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.provider.Hinted.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(malli.provider.Hinted.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k39084,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__39092 = k39084;
var G__39092__$1 = (((G__39092 instanceof cljs.core.Keyword))?G__39092.fqn:null);
switch (G__39092__$1) {
case "value":
return self__.value;

break;
case "hint":
return self__.hint;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39084,else__5346__auto__);

}
}));

(malli.provider.Hinted.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__39093){
var vec__39094 = p__39093;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39094,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39094,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(malli.provider.Hinted.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#malli.provider.Hinted{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hint","hint",439639918),self__.hint],null))], null),self__.__extmap));
}));

(malli.provider.Hinted.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39083){
var self__ = this;
var G__39083__$1 = this;
return (new cljs.core.RecordIter((0),G__39083__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hint","hint",439639918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(malli.provider.Hinted.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(malli.provider.Hinted.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new malli.provider.Hinted(self__.value,self__.hint,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.provider.Hinted.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(malli.provider.Hinted.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1623670857 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(malli.provider.Hinted.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39085,other39086){
var self__ = this;
var this39085__$1 = this;
return (((!((other39086 == null)))) && ((((this39085__$1.constructor === other39086.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39085__$1.value,other39086.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39085__$1.hint,other39086.hint)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39085__$1.__extmap,other39086.__extmap)))))))));
}));

(malli.provider.Hinted.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"hint","hint",439639918),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new malli.provider.Hinted(self__.value,self__.hint,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(malli.provider.Hinted.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k39084){
var self__ = this;
var this__5350__auto____$1 = this;
var G__39112 = k39084;
var G__39112__$1 = (((G__39112 instanceof cljs.core.Keyword))?G__39112.fqn:null);
switch (G__39112__$1) {
case "value":
case "hint":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39084);

}
}));

(malli.provider.Hinted.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__39083){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__39113 = cljs.core.keyword_identical_QMARK_;
var expr__39114 = k__5352__auto__;
if(cljs.core.truth_((pred__39113.cljs$core$IFn$_invoke$arity$2 ? pred__39113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__39114) : pred__39113.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__39114)))){
return (new malli.provider.Hinted(G__39083,self__.hint,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39113.cljs$core$IFn$_invoke$arity$2 ? pred__39113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hint","hint",439639918),expr__39114) : pred__39113.call(null,new cljs.core.Keyword(null,"hint","hint",439639918),expr__39114)))){
return (new malli.provider.Hinted(self__.value,G__39083,self__.__meta,self__.__extmap,null));
} else {
return (new malli.provider.Hinted(self__.value,self__.hint,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__39083),null));
}
}
}));

(malli.provider.Hinted.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hint","hint",439639918),self__.hint,null))], null),self__.__extmap));
}));

(malli.provider.Hinted.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__39083){
var self__ = this;
var this__5342__auto____$1 = this;
return (new malli.provider.Hinted(self__.value,self__.hint,G__39083,self__.__extmap,self__.__hash));
}));

(malli.provider.Hinted.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(malli.provider.Hinted.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null)], null);
}));

(malli.provider.Hinted.cljs$lang$type = true);

(malli.provider.Hinted.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"malli.provider/Hinted",null,(1),null));
}));

(malli.provider.Hinted.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"malli.provider/Hinted");
}));

/**
 * Positional factory function for malli.provider/Hinted.
 */
malli.provider.__GT_Hinted = (function malli$provider$__GT_Hinted(value,hint){
return (new malli.provider.Hinted(value,hint,null,null,null));
});

/**
 * Factory function for malli.provider/Hinted, taking a map of keywords to field values.
 */
malli.provider.map__GT_Hinted = (function malli$provider$map__GT_Hinted(G__39087){
var extmap__5385__auto__ = (function (){var G__39118 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39087,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918)], 0));
if(cljs.core.record_QMARK_(G__39087)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39118);
} else {
return G__39118;
}
})();
return (new malli.provider.Hinted(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__39087),new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(G__39087),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

malli.provider._hinted = (function malli$provider$_hinted(x,hint){
return malli.provider.__GT_Hinted(x,hint);
});
malli.provider._value_hint = (function malli$provider$_value_hint(x){
if((x instanceof malli.provider.Hinted)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.value,x.hint], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(function (){var G__39121 = x;
var G__39121__$1 = (((G__39121 == null))?null:cljs.core.meta(G__39121));
if((G__39121__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("malli.provider","hint","malli.provider/hint",1344617496).cljs$core$IFn$_invoke$arity$1(G__39121__$1);
}
})()], null);
}
});
malli.provider._inferrer = (function malli$provider$_inferrer(options){
var schemas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39123_SHARP_){
return malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic(malli.core.schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__39123_SHARP_], 0));
}),cljs.core.vals(malli.registry._schemas(malli.core._registry.cljs$core$IFn$_invoke$arity$1(options))));
var form__GT_validator = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(malli.core.form,malli.core.validator),schemas));
var infer_value = (function (x){
return cljs.core.reduce_kv((function (acc,f,v){
var G__39128 = acc;
if(cljs.core.truth_(malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39128,f,(1));
} else {
return G__39128;
}
}),cljs.core.PersistentArrayMap.EMPTY,form__GT_validator);
});
var entry_inferrer = (function (infer){
return (function (acc,k,v){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(acc,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.update,k,infer,v);
});
});
var infer_map = (function (infer){
return (function (acc,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce_kv(entry_inferrer(infer),acc,x),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
});
});
var infer_seq = (function (infer){
return (function (acc,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,acc,x),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
});
});
var merge_PLUS_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__39124_SHARP_,p2__39125_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__39124_SHARP_,p2__39125_SHARP_], 0));
}),cljs.core.PersistentArrayMap.EMPTY);
return (function malli$provider$_inferrer_$_infer(acc,x){
var vec__39139 = malli.provider._value_hint(x);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(0),null);
var hint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(1),null);
var type = (((x__$1 == null))?new cljs.core.Keyword(null,"nil","nil",99600501):((cljs.core.map_QMARK_(x__$1))?new cljs.core.Keyword(null,"map","map",1371690461):((cljs.core.set_QMARK_(x__$1))?new cljs.core.Keyword(null,"set","set",304602554):((cljs.core.vector_QMARK_(x__$1))?new cljs.core.Keyword(null,"vector","vector",1902966158):((cljs.core.sequential_QMARK_(x__$1))?new cljs.core.Keyword(null,"sequential","sequential",-1082983960):new cljs.core.Keyword(null,"value","value",305978217)
)))));
var __GT_type = (function (p1__39127_SHARP_){
var $ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__39127_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
var $__$1 = (function (){var G__39142 = $;
if(cljs.core.truth_(hint)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39142,new cljs.core.Keyword(null,"hints","hints",-991113151),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),hint);
} else {
return G__39142;
}
})();
var G__39144 = type;
var G__39144__$1 = (((G__39144 instanceof cljs.core.Keyword))?G__39144.fqn:null);
switch (G__39144__$1) {
case "value":
case "nil":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$1,new cljs.core.Keyword(null,"values","values",372645556),merge_PLUS_,cljs.core.PersistentArrayMap.createAsIfByAssoc([x__$1,(1)])),new cljs.core.Keyword(null,"schemas","schemas",575070579),merge_PLUS_,infer_value(x__$1));

break;
case "map":
return infer_map(malli$provider$_inferrer_$_infer)($__$1,x__$1);

break;
case "set":
case "vector":
case "sequential":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$1,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(infer_seq(malli$provider$_inferrer_$_infer),cljs.core.PersistentArrayMap.EMPTY),x__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39144__$1)].join('')));

}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.Keyword(null,"types","types",590030639),cljs.core.update,type,__GT_type);
});
});
malli.provider._value_schema = (function malli$provider$_value_schema(p__39157){
var map__39158 = p__39157;
var map__39158__$1 = cljs.core.__destructure_map(map__39158);
var stats = map__39158__$1;
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39158__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var hints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39158__$1,new cljs.core.Keyword(null,"hints","hints",-991113151));
var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(hints));
if(and__5043__auto__){
return cljs.core.first(hints);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var hint = temp__5804__auto__;
var G__39166 = hint;
var G__39166__$1 = (((G__39166 instanceof cljs.core.Keyword))?G__39166.fqn:null);
switch (G__39166__$1) {
case "enum":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),cljs.core.keys(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(stats)));

break;
default:
return hint;

}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(schemas));
return cljs.core.ffirst(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39177){
var vec__39182 = p__39177;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39182,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(malli.provider._preferences.cljs$core$IFn$_invoke$arity$2 ? malli.provider._preferences.cljs$core$IFn$_invoke$arity$2(k,(-1)) : malli.provider._preferences.call(null,k,(-1)))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39153_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,cljs.core.val(p1__39153_SHARP_));
}),schemas))));
}
});
malli.provider._sequential_schema = (function malli$provider$_sequential_schema(p__39201,type,schema,p__39202){
var map__39206 = p__39201;
var map__39206__$1 = cljs.core.__destructure_map(map__39206);
var stats = map__39206__$1;
var tc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39206__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var map__39207 = p__39202;
var map__39207__$1 = cljs.core.__destructure_map(map__39207);
var options = map__39207__$1;
var infer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,new cljs.core.Keyword("malli.provider","infer","malli.provider/infer",-1513557228));
var tuple_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,new cljs.core.Keyword("malli.provider","tuple-threshold","malli.provider/tuple-threshold",-1099408553));
var vstats_STAR_ = (new cljs.core.Delay((function (){
var G__39218 = new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(stats);
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(G__39218) : type.call(null,G__39218));
}),null));
var data_STAR_ = (new cljs.core.Delay((function (){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vstats_STAR_)));
}),null));
var vs_STAR_ = (new cljs.core.Delay((function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39191_SHARP_){
var G__39244 = (function (){var G__39248 = cljs.core.PersistentArrayMap.EMPTY;
var G__39249 = p1__39191_SHARP_;
return (infer.cljs$core$IFn$_invoke$arity$2 ? infer.cljs$core$IFn$_invoke$arity$2(G__39248,G__39249) : infer.call(null,G__39248,G__39249));
})();
return (schema.cljs$core$IFn$_invoke$arity$1 ? schema.cljs$core$IFn$_invoke$arity$1(G__39244) : schema.call(null,G__39244));
}),x);
}),cljs.core.deref(data_STAR_));
}),null));
var tuple_QMARK__STAR_ = (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.deref(vs_STAR_)));
}),null));
var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),type);
if(and__5043__auto__){
var or__5045__auto__ = (cljs.core.truth_((function (){var and__5043__auto____$1 = (function (){var G__39263 = cljs.core.deref(vstats_STAR_);
var G__39263__$1 = (((G__39263 == null))?null:new cljs.core.Keyword(null,"hints","hints",-991113151).cljs$core$IFn$_invoke$arity$1(G__39263));
if((G__39263__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__39263__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),null], null), null));
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.deref(tuple_QMARK__STAR_);
} else {
return and__5043__auto____$1;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39193_SHARP_){
var G__39275 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,p1__39193_SHARP_);
var G__39277 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__39275,G__39277) : schema.call(null,G__39275,G__39277));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.deref(data_STAR_)))):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = (cljs.core.truth_((function (){var and__5043__auto____$1 = tuple_threshold;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tc,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vstats_STAR_)));
} else {
return and__5043__auto____$1;
}
})())?tuple_threshold:null);
if(cljs.core.truth_(temp__5804__auto__)){
var tuple_threshold__$1 = temp__5804__auto__;
if(cljs.core.truth_((function (){var and__5043__auto____$1 = (tc >= tuple_threshold__$1);
if(and__5043__auto____$1){
return cljs.core.deref(tuple_QMARK__STAR_);
} else {
return and__5043__auto____$1;
}
})())){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(vs_STAR_)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),cljs.core.first(cljs.core.deref(vs_STAR_)));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var G__39304 = new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vstats_STAR_));
var G__39305 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__39304,G__39305) : schema.call(null,G__39304,G__39305));
})()], null);
}
});
malli.provider._map_schema = (function malli$provider$_map_schema(p__39326,schema,p__39327){
var map__39329 = p__39326;
var map__39329__$1 = cljs.core.__destructure_map(map__39329);
var stats = map__39329__$1;
var tc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39329__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var map__39330 = p__39327;
var map__39330__$1 = cljs.core.__destructure_map(map__39330);
var options = map__39330__$1;
var infer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39330__$1,new cljs.core.Keyword("malli.provider","infer","malli.provider/infer",-1513557228));
var map_of_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39330__$1,new cljs.core.Keyword("malli.provider","map-of-threshold","malli.provider/map-of-threshold",606404300),(3));
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39343){
var vec__39344 = p__39343;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39344,(0),null);
var vstats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39344,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"vs","vs",-2022097090),(schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(vstats,options) : schema.call(null,vstats,options)),new cljs.core.Keyword(null,"vc","vc",194349650),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(vstats)], null);
}),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(stats));
var ks_STAR_ = (new cljs.core.Delay((function (){
var G__39354 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),entries));
var G__39355 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__39354,G__39355) : schema.call(null,G__39354,G__39355));
}),null));
var _QMARK_ks_STAR_ = (new cljs.core.Delay((function (){
var kss = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39313_SHARP_){
var G__39357 = (function (){var G__39359 = cljs.core.PersistentArrayMap.EMPTY;
var G__39360 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__39313_SHARP_);
return (infer.cljs$core$IFn$_invoke$arity$2 ? infer.cljs$core$IFn$_invoke$arity$2(G__39359,G__39360) : infer.call(null,G__39359,G__39360));
})();
var G__39358 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__39357,G__39358) : schema.call(null,G__39357,G__39358));
}),entries);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,kss))){
return cljs.core.first(kss);
} else {
return null;
}
}),null));
var vs_STAR_ = (new cljs.core.Delay((function (){
var G__39361 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vals,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(stats)], 0)));
var G__39362 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__39361,G__39362) : schema.call(null,G__39361,G__39362));
}),null));
var vss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vs","vs",-2022097090),entries);
var or__5045__auto__ = (cljs.core.truth_((function (){var G__39368 = stats;
var G__39368__$1 = (((G__39368 == null))?null:new cljs.core.Keyword(null,"hints","hints",-991113151).cljs$core$IFn$_invoke$arity$1(G__39368));
if((G__39368__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__39368__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),null], null), null));
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.deref(ks_STAR_),cljs.core.deref(vs_STAR_)], null):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_((function (){var and__5043__auto__ = (cljs.core.count(entries) >= map_of_threshold);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.deref(_QMARK_ks_STAR_);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,vss);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.deref(_QMARK_ks_STAR_),cljs.core.first(vss)], null):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39371){
var map__39372 = p__39371;
var map__39372__$1 = cljs.core.__destructure_map(map__39372);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39372__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var vs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39372__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var vc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39372__$1,new cljs.core.Keyword(null,"vc","vc",194349650));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tc,vc)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),vs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,vs], null);
}
}),entries));
}
}
});
malli.provider._decoded = (function malli$provider$_decoded(p__39373,vp,t){
var map__39374 = p__39373;
var map__39374__$1 = cljs.core.__destructure_map(map__39374);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39374__$1,new cljs.core.Keyword(null,"values","values",372645556));
var vs = cljs.core.keys(values);
var _decode = (function (f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,v){
var v_SINGLEQUOTE_ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
var or__5045__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,v_SINGLEQUOTE_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.reduced(false);
}
}),false,vs);
});
return cljs.core.reduce_kv((function (acc,s,f){
if(cljs.core.truth_(_decode(f))){
return cljs.core.reduced(s);
} else {
return acc;
}
}),t,vp);
});
malli.provider._schema = (function malli$provider$_schema(var_args){
var G__39392 = arguments.length;
switch (G__39392) {
case 1:
return malli.provider._schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.provider._schema.cljs$core$IFn$_invoke$arity$1 = (function (stats){
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2(stats,null);
}));

(malli.provider._schema.cljs$core$IFn$_invoke$arity$2 = (function (p__39396,p__39397){
var map__39398 = p__39396;
var map__39398__$1 = cljs.core.__destructure_map(map__39398);
var stats = map__39398__$1;
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39398__$1,new cljs.core.Keyword(null,"types","types",590030639));
var map__39399 = p__39397;
var map__39399__$1 = cljs.core.__destructure_map(map__39399);
var options = map__39399__$1;
var value_decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399__$1,new cljs.core.Keyword("malli.provider","value-decoders","malli.provider/value-decoders",-1333074129));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.keys(types)))){
var type = cljs.core.first(cljs.core.keys(types));
var G__39400 = type;
var G__39400__$1 = (((G__39400 instanceof cljs.core.Keyword))?G__39400.fqn:null);
switch (G__39400__$1) {
case "nil":
return new cljs.core.Keyword(null,"nil","nil",99600501);

break;
case "value":
var t = (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(types) : type.call(null,types));
var vs = malli.provider._value_schema(t);
var vp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value_decoders,vs);
var G__39401 = vs;
if(cljs.core.truth_(vp)){
return malli.provider._decoded(t,vp,G__39401);
} else {
return G__39401;
}

break;
case "set":
case "vector":
case "sequential":
return malli.provider._sequential_schema(stats,type,malli.provider._schema,options);

break;
case "map":
return malli.provider._map_schema((type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(types) : type.call(null,types)),malli.provider._schema,options);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39400__$1)].join('')));

}
} else {
if((types == null)){
return new cljs.core.Symbol(null,"any?","any?",-318999933,null);
} else {
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39405){
var vec__39406 = p__39405;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39406,(0),null);
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(stats,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.select_keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null)),options);
}),types);
var without_nils = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39387_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39387_SHARP_,new cljs.core.Keyword(null,"nil","nil",99600501));
}),children);
var vec__39402 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [children,without_nils], null));
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),c2)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560)], null),without_nils);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169)], null),without_nils)], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169)], null),children);

}
}

}
}
}));

(malli.provider._schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns a inferring function of `values -> schema`. Supports the following options:
 * 
 *   - `:malli.provider/map-of-threshold (default 3), how many identical value schemas need for :map-of
 *   - `:malli.provider/tuple-threshold, how many identical value schemas need for :tuple
 *   - `:malli.provider/value-decoders, function of `type -> target-type -> value -> decoded-value`
 */
malli.provider.provider = (function malli$provider$provider(var_args){
var G__39412 = arguments.length;
switch (G__39412) {
case 0:
return malli.provider.provider.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.provider.provider.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.provider.provider.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.provider.provider.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.provider.provider.cljs$core$IFn$_invoke$arity$1 = (function (options){
var infer = malli.provider._inferrer(options);
return (function (xs){
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,xs),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.provider","infer","malli.provider/infer",-1513557228),infer));
});
}));

(malli.provider.provider.cljs$lang$maxFixedArity = 1);

/**
 * Given an sequence of example values, returms a Schema that can all values are valid against.
 * For better performance, user [[provider]] instead. see [[provider]] for available options.
 */
malli.provider.provide = (function malli$provider$provide(var_args){
var G__39418 = arguments.length;
switch (G__39418) {
case 1:
return malli.provider.provide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.provider.provide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.provider.provide.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return malli.provider.provide.cljs$core$IFn$_invoke$arity$2(xs,null);
}));

(malli.provider.provide.cljs$core$IFn$_invoke$arity$2 = (function (xs,options){
return malli.provider.provider.cljs$core$IFn$_invoke$arity$1(options)(xs);
}));

(malli.provider.provide.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.provider.js.map
