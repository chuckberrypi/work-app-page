goog.provide('datascript.impl.entity');





datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if(((typeof eid === 'number') || (((cljs.core.sequential_QMARK_(eid)) || ((eid instanceof cljs.core.Keyword)))))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5804__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__5804__auto__)){
var e = temp__5804__auto__;
if(datascript.db.numeric_eid_exists_QMARK_(db,e)){
var G__26940 = db;
var G__26941 = e;
var G__26942 = cljs.core.volatile_BANG_(false);
var G__26943 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__26940,G__26941,G__26942,G__26943) : datascript.impl.entity.__GT_Entity.call(null,G__26940,G__26941,G__26942,G__26943));
} else {
return null;
}
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26946_SHARP_,p2__26947_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26946_SHARP_,datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__26947_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26948_SHARP_,p2__26949_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26948_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__26949_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__5802__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__5802__auto__)){
var datoms = temp__5802__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26954_SHARP_,p2__26955_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26954_SHARP_,datascript.impl.entity.entity(db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__26955_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__5523__auto__ = (function datascript$impl$entity$js_seq_$_iter__26960(s__26961){
return (new cljs.core.LazySeq(null,(function (){
var s__26961__$1 = s__26961;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26961__$1);
if(temp__5804__auto__){
var s__26961__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26961__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26961__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26963 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26962 = (0);
while(true){
if((i__26962 < size__5522__auto__)){
var vec__26974 = cljs.core._nth(c__5521__auto__,i__26962);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26974,(1),null);
cljs.core.chunk_append(b__26963,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__27201 = (i__26962 + (1));
i__26962 = G__27201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26963),datascript$impl$entity$js_seq_$_iter__26960(cljs.core.chunk_rest(s__26961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26963),null);
}
} else {
var vec__26981 = cljs.core.first(s__26961__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__26960(cljs.core.rest(s__26961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__27202 = null;
var G__27202__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__27025 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__27026 = null;
var count__27027 = (0);
var i__27028 = (0);
while(true){
if((i__27028 < count__27027)){
var vec__27042 = chunk__27026.cljs$core$IIndexed$_nth$arity$2(null,i__27028);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27042,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__27203 = seq__27025;
var G__27204 = chunk__27026;
var G__27205 = count__27027;
var G__27206 = (i__27028 + (1));
seq__27025 = G__27203;
chunk__27026 = G__27204;
count__27027 = G__27205;
i__27028 = G__27206;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27025);
if(temp__5804__auto__){
var seq__27025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27025__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27025__$1);
var G__27208 = cljs.core.chunk_rest(seq__27025__$1);
var G__27209 = c__5568__auto__;
var G__27210 = cljs.core.count(c__5568__auto__);
var G__27211 = (0);
seq__27025 = G__27208;
chunk__27026 = G__27209;
count__27027 = G__27210;
i__27028 = G__27211;
continue;
} else {
var vec__27048 = cljs.core.first(seq__27025__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27048,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__27213 = cljs.core.next(seq__27025__$1);
var G__27214 = null;
var G__27215 = (0);
var G__27216 = (0);
seq__27025 = G__27213;
chunk__27026 = G__27214;
count__27027 = G__27215;
i__27028 = G__27216;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__27202__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__27053 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__27054 = null;
var count__27055 = (0);
var i__27056 = (0);
while(true){
if((i__27056 < count__27055)){
var vec__27077 = chunk__27054.cljs$core$IIndexed$_nth$arity$2(null,i__27056);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(1),null);
f.call(use_as_this,v,a,this$);


var G__27218 = seq__27053;
var G__27219 = chunk__27054;
var G__27220 = count__27055;
var G__27221 = (i__27056 + (1));
seq__27053 = G__27218;
chunk__27054 = G__27219;
count__27055 = G__27220;
i__27056 = G__27221;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27053);
if(temp__5804__auto__){
var seq__27053__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27053__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27053__$1);
var G__27223 = cljs.core.chunk_rest(seq__27053__$1);
var G__27224 = c__5568__auto__;
var G__27225 = cljs.core.count(c__5568__auto__);
var G__27226 = (0);
seq__27053 = G__27223;
chunk__27054 = G__27224;
count__27055 = G__27225;
i__27056 = G__27226;
continue;
} else {
var vec__27085 = cljs.core.first(seq__27053__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27085,(1),null);
f.call(use_as_this,v,a,this$);


var G__27227 = cljs.core.next(seq__27053__$1);
var G__27228 = null;
var G__27229 = (0);
var G__27230 = (0);
seq__27053 = G__27227;
chunk__27054 = G__27228;
count__27055 = G__27229;
i__27056 = G__27230;
continue;
}
} else {
return null;
}
}
break;
}
});
G__27202 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__27202__1.call(this,f);
case 2:
return G__27202__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27202.cljs$core$IFn$_invoke$arity$1 = G__27202__1;
G__27202.cljs$core$IFn$_invoke$arity$2 = G__27202__2;
return G__27202;
})()
);

(datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__27088 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__27088);
} else {
return G__27088;
}
}
}
}));

(datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
}));

(datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
}));

(datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
}));

(datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
}));

(datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return (!((this$.get(attr) == null)));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count(cljs.core.deref(self__.cache));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.hash_entity.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.hash_entity.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.hash_entity.call(null,this$__$1));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)) : datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353))));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq(cljs.core.deref(self__.cache));
}));

(datascript.impl.entity.Entity.prototype.call = (function (unused__10314__auto__){
var self__ = this;
var self__ = this;
var G__27137 = (arguments.length - (1));
switch (G__27137) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(datascript.impl.entity.Entity.prototype.apply = (function (self__,args27012){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27012)));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
}));

(datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
}));

(datascript.impl.entity.Entity.cljs$lang$type = true);

(datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity");

(datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"datascript.impl.entity/Entity");
}));

/**
 * Positional factory function for datascript.impl.entity/Entity.
 */
datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return (((that instanceof datascript.impl.entity.Entity)) && ((((this$.db === that.db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid)))));
});
datascript.impl.entity.hash_entity = (function datascript$impl$entity$hash_entity(e){
return datascript.db.combine_hashes(cljs.core.hash(e.eid),goog.getUid(e.db));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var G__27161 = arguments.length;
switch (G__27161) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
}));

(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var temp__5806__auto__ = (function (){var fexpr__27172 = cljs.core.deref(this$.cache);
return (fexpr__27172.cljs$core$IFn$_invoke$arity$1 ? fexpr__27172.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__27172.call(null,attr));
})();
if((temp__5806__auto__ == null)){
if(cljs.core.truth_(cljs.core.deref(this$.touched))){
return not_found;
} else {
var temp__5806__auto____$1 = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if((temp__5806__auto____$1 == null)){
return not_found;
} else {
var datoms = temp__5806__auto____$1;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(this$.cache),attr,value));

return value;
}
}
} else {
var v = temp__5806__auto__;
return v;
}
}
}
}));

(datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3);

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(datascript.impl.entity.entity_QMARK_(e)){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref(e.touched))){
} else {
var temp__5804__auto___27246 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5804__auto___27246)){
var datoms_27247 = temp__5804__auto___27246;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_27247)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity",datascript.impl.entity.Entity);

//# sourceMappingURL=datascript.impl.entity.js.map
