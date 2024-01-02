goog.provide('posh.plugin_base');
posh.plugin_base.missing_pull_result = (function posh$plugin_base$missing_pull_result(dcfg,pull_expr){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.plugin_base.safe_pull = (function posh$plugin_base$safe_pull(dcfg,db,query,id){
if(cljs.core.integer_QMARK_(id)){
var fexpr__25105 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25105.cljs$core$IFn$_invoke$arity$3 ? fexpr__25105.cljs$core$IFn$_invoke$arity$3(db,query,id) : fexpr__25105.call(null,db,query,id));
} else {
if(cljs.core.vector_QMARK_(id)){
var temp__5802__auto__ = (function (){var fexpr__25106 = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25106.cljs$core$IFn$_invoke$arity$2 ? fexpr__25106.cljs$core$IFn$_invoke$arity$2(db,id) : fexpr__25106.call(null,db,id));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var eid = temp__5802__auto__;
var fexpr__25107 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25107.cljs$core$IFn$_invoke$arity$3 ? fexpr__25107.cljs$core$IFn$_invoke$arity$3(db,query,eid) : fexpr__25107.call(null,db,query,eid));
} else {
return posh.plugin_base.missing_pull_result(dcfg,query);
}
} else {
if((id == null)){
return posh.plugin_base.missing_pull_result(dcfg,query);
} else {
return null;
}
}
}
});
posh.plugin_base.set_conn_listener_BANG_ = (function posh$plugin_base$set_conn_listener_BANG_(dcfg,posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
var G__25116_25264 = conn;
var G__25117_25265 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766);
var G__25118_25266 = (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posh_vars,var$);
} else {
return null;
}
});
var fexpr__25115_25267 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__25115_25267.cljs$core$IFn$_invoke$arity$3 ? fexpr__25115_25267.cljs$core$IFn$_invoke$arity$3(G__25116_25264,G__25117_25265,G__25118_25266) : fexpr__25115_25267.call(null,G__25116_25264,G__25117_25265,G__25118_25266));

cljs.core.add_watch(conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
}));

var G__25125_25268 = conn;
var G__25126_25269 = new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061);
var G__25127_25270 = (function (tx_report){
var map__25128 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__25128__$1 = cljs.core.__destructure_map(map__25128);
var ratoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25128__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__25129 = cljs.core.seq(changed);
var chunk__25130 = null;
var count__25131 = (0);
var i__25132 = (0);
while(true){
if((i__25132 < count__25131)){
var vec__25139 = chunk__25130.cljs$core$IIndexed$_nth$arity$2(null,i__25132);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25139,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__25272 = seq__25129;
var G__25273 = chunk__25130;
var G__25274 = count__25131;
var G__25275 = (i__25132 + (1));
seq__25129 = G__25272;
chunk__25130 = G__25273;
count__25131 = G__25274;
i__25132 = G__25275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25129);
if(temp__5804__auto__){
var seq__25129__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25129__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25129__$1);
var G__25277 = cljs.core.chunk_rest(seq__25129__$1);
var G__25278 = c__5568__auto__;
var G__25279 = cljs.core.count(c__5568__auto__);
var G__25280 = (0);
seq__25129 = G__25277;
chunk__25130 = G__25278;
count__25131 = G__25279;
i__25132 = G__25280;
continue;
} else {
var vec__25142 = cljs.core.first(seq__25129__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25142,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__25281 = cljs.core.next(seq__25129__$1);
var G__25282 = null;
var G__25283 = (0);
var G__25284 = (0);
seq__25129 = G__25281;
chunk__25130 = G__25282;
count__25131 = G__25283;
i__25132 = G__25284;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__25124_25271 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__25124_25271.cljs$core$IFn$_invoke$arity$3 ? fexpr__25124_25271.cljs$core$IFn$_invoke$arity$3(G__25125_25268,G__25126_25269,G__25127_25270) : fexpr__25124_25271.call(null,G__25125_25268,G__25126_25269,G__25127_25270));

return conn;
});
posh.plugin_base.posh_BANG_ = (function posh$plugin_base$posh_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25285 = arguments.length;
var i__5770__auto___25286 = (0);
while(true){
if((i__5770__auto___25286 < len__5769__auto___25285)){
args__5775__auto__.push((arguments[i__5770__auto___25286]));

var G__25287 = (i__5770__auto___25286 + (1));
i__5770__auto___25286 = G__25287;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,conns){
var posh_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_(posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.empty_tree(dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY], 0));
while(true){
if(cljs.core.empty_QMARK_(conns__$1)){
return posh_tree;
} else {
var G__25289 = (n + (1));
var G__25290 = cljs.core.rest(conns__$1);
var G__25291 = (function (){var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,posh.plugin_base.set_conn_listener_BANG_(dcfg,posh_atom,cljs.core.first(conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.first(conns__$1))));
})();
n = G__25289;
conns__$1 = G__25290;
posh_tree = G__25291;
continue;
}
break;
}
})());
}));

(posh.plugin_base.posh_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.plugin_base.posh_BANG_.cljs$lang$applyTo = (function (seq25145){
var G__25146 = cljs.core.first(seq25145);
var seq25145__$1 = cljs.core.next(seq25145);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25146,seq25145__$1);
}));

posh.plugin_base.get_conn_var = (function posh$plugin_base$get_conn_var(dcfg,conn,var$){
var fexpr__25150 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
return (fexpr__25150.cljs$core$IFn$_invoke$arity$1 ? fexpr__25150.cljs$core$IFn$_invoke$arity$1(var$) : fexpr__25150.call(null,var$));
});
posh.plugin_base.get_posh_atom = (function posh$plugin_base$get_posh_atom(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__25153 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25153.cljs$core$IFn$_invoke$arity$1 ? fexpr__25153.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__25153.call(null,poshdb_or_conn));
})())){
return posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom(poshdb_or_conn);
}
});
posh.plugin_base.get_db = (function posh$plugin_base$get_db(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__25156 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25156.cljs$core$IFn$_invoke$arity$1 ? fexpr__25156.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__25156.call(null,poshdb_or_conn));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.plugin_base.rm_posh_item = (function posh$plugin_base$rm_posh_item(dcfg,posh_atom,storage_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key)], 0));
}));
});
posh.plugin_base.make_query_reaction = (function posh$plugin_base$make_query_reaction(var_args){
var G__25160 = arguments.length;
switch (G__25160) {
case 5:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,posh_atom,storage_key,add_query_fn,options){
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
var posh_atom_with_query = (add_query_fn.cljs$core$IFn$_invoke$arity$1 ? add_query_fn.cljs$core$IFn$_invoke$arity$1(posh_atom_val) : add_query_fn.call(null,posh_atom_val));
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var fexpr__25164 = new cljs.core.Keyword(null,"ratom","ratom",-126521267).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25164.cljs$core$IFn$_invoke$arity$1 ? fexpr__25164.cljs$core$IFn$_invoke$arity$1(query_result) : fexpr__25164.call(null,query_result));
}
})();
var query_reaction = (function (){var G__25166 = (function (){
return cljs.core.deref(query_ratom);
});
var G__25167 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__25168 = (function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key)], 0));
}));
}
});
var fexpr__25165 = new cljs.core.Keyword(null,"make-reaction","make-reaction",295148585).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25165.cljs$core$IFn$_invoke$arity$3 ? fexpr__25165.cljs$core$IFn$_invoke$arity$3(G__25166,G__25167,G__25168) : fexpr__25165.call(null,G__25166,G__25167,G__25168));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction)], 0));
}))),storage_key);
}
}));

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,posh_atom,storage_key,add_query_fn){
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.make_query_reaction.cljs$lang$maxFixedArity = 5);

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.plugin_base.pull = (function posh$plugin_base$pull(var_args){
var G__25172 = arguments.length;
switch (G__25172) {
case 5:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eid,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__25170_SHARP_){
return posh.core.add_pull(p1__25170_SHARP_,true_poshdb,pull_pattern,eid);
}),options);
}));

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eid){
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_info = (function posh$plugin_base$pull_info(dcfg,poshdb,pull_pattern,eid){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_pull(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.plugin_base.pull_many = (function posh$plugin_base$pull_many(var_args){
var G__25191 = arguments.length;
switch (G__25191) {
case 5:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eids,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),true_poshdb,pull_pattern,eids], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__25188_SHARP_){
return posh.core.add_pull_many(p1__25188_SHARP_,true_poshdb,pull_pattern,eids);
}),options);
}));

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eids){
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eids,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull_many.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_tx = (function posh$plugin_base$pull_tx(dcfg,tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pull-tx is deprecated. Calling pull without your tx-patterns."], 0));

return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4(dcfg,poshdb,pull_pattern,eid);
});
posh.plugin_base.parse_q_query = (function posh$plugin_base$parse_q_query(dcfg,query){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__25192,query_item){
var vec__25193 = p__25192;
var parsed_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25193,(0),null);
var last_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25193,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$4(parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.plugin_base.q_args_count = (function posh$plugin_base$q_args_count(dcfg,query){
var parsed_query = posh.plugin_base.parse_q_query(dcfg,query);
var temp__5802__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__5802__auto__)){
var in_clause = temp__5802__auto__;
return cljs.core.count(in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.plugin_base.q = (function posh$plugin_base$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25305 = arguments.length;
var i__5770__auto___25306 = (0);
while(true){
if((i__5770__auto___25306 < len__5769__auto___25305)){
args__5775__auto__.push((arguments[i__5770__auto___25306]));

var G__25307 = (i__5770__auto___25306 + (1));
i__5770__auto___25306 = G__25307;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var n_query_args = posh.plugin_base.q_args_count(dcfg,query);
var vec__25202 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n_query_args + (1)),cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25202,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25202,(1),null);
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25196_SHARP_){
if(cljs.core.truth_((function (){var fexpr__25205 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25205.cljs$core$IFn$_invoke$arity$1 ? fexpr__25205.cljs$core$IFn$_invoke$arity$1(p1__25196_SHARP_) : fexpr__25205.call(null,p1__25196_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__25196_SHARP_);
} else {
return p1__25196_SHARP_;
}
}),args__$1);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25197_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__25197_SHARP_);
}),args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__25198_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,p1__25198_SHARP_,query),true_poshdb_args);
}),options);
}));

(posh.plugin_base.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q.cljs$lang$applyTo = (function (seq25199){
var G__25200 = cljs.core.first(seq25199);
var seq25199__$1 = cljs.core.next(seq25199);
var G__25201 = cljs.core.first(seq25199__$1);
var seq25199__$2 = cljs.core.next(seq25199__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25200,G__25201,seq25199__$2);
}));

posh.plugin_base.q_info = (function posh$plugin_base$q_info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25310 = arguments.length;
var i__5770__auto___25311 = (0);
while(true){
if((i__5770__auto___25311 < len__5769__auto___25310)){
args__5775__auto__.push((arguments[i__5770__auto___25311]));

var G__25312 = (i__5770__auto___25311 + (1));
i__5770__auto___25311 = G__25312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25206_SHARP_){
if(cljs.core.truth_((function (){var fexpr__25221 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25221.cljs$core$IFn$_invoke$arity$1 ? fexpr__25221.cljs$core$IFn$_invoke$arity$1(p1__25206_SHARP_) : fexpr__25221.call(null,p1__25206_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__25206_SHARP_);
} else {
return p1__25206_SHARP_;
}
}),args);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25207_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__25207_SHARP_);
}),args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_q(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
}));

(posh.plugin_base.q_info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q_info.cljs$lang$applyTo = (function (seq25208){
var G__25209 = cljs.core.first(seq25208);
var seq25208__$1 = cljs.core.next(seq25208);
var G__25210 = cljs.core.first(seq25208__$1);
var seq25208__$2 = cljs.core.next(seq25208__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25209,G__25210,seq25208__$2);
}));

posh.plugin_base.q_tx = (function posh$plugin_base$q_tx(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25313 = arguments.length;
var i__5770__auto___25314 = (0);
while(true){
if((i__5770__auto___25314 < len__5769__auto___25313)){
args__5775__auto__.push((arguments[i__5770__auto___25314]));

var G__25315 = (i__5770__auto___25314 + (1));
i__5770__auto___25314 = G__25315;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,tx_patterns,query,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["q-tx is deprecated. Calling q without your tx-patterns."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(posh.plugin_base.q,dcfg,query,args);
}));

(posh.plugin_base.q_tx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(posh.plugin_base.q_tx.cljs$lang$applyTo = (function (seq25233){
var G__25234 = cljs.core.first(seq25233);
var seq25233__$1 = cljs.core.next(seq25233);
var G__25235 = cljs.core.first(seq25233__$1);
var seq25233__$2 = cljs.core.next(seq25233__$1);
var G__25236 = cljs.core.first(seq25233__$2);
var seq25233__$3 = cljs.core.next(seq25233__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25234,G__25235,G__25236,seq25233__$3);
}));

posh.plugin_base.filter_tx = (function posh$plugin_base$filter_tx(dcfg,poshdb,tx_patterns){
return posh.stateful.add_filter_tx(posh.plugin_base.get_db(dcfg,poshdb),tx_patterns);
});
posh.plugin_base.filter_pull = (function posh$plugin_base$filter_pull(dcfg,poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull(posh.plugin_base.get_db(dcfg,poshdb),pull_pattern,eid);
});
posh.plugin_base.filter_q = (function posh$plugin_base$filter_q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25317 = arguments.length;
var i__5770__auto___25318 = (0);
while(true){
if((i__5770__auto___25318 < len__5769__auto___25317)){
args__5775__auto__.push((arguments[i__5770__auto___25318]));

var G__25319 = (i__5770__auto___25318 + (1));
i__5770__auto___25318 = G__25319;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25247_SHARP_){
if(cljs.core.truth_((function (){var fexpr__25254 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25254.cljs$core$IFn$_invoke$arity$1 ? fexpr__25254.cljs$core$IFn$_invoke$arity$1(p1__25247_SHARP_) : fexpr__25254.call(null,p1__25247_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__25247_SHARP_);
} else {
return p1__25247_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.stateful.add_filter_q,query,true_poshdb_args);
}));

(posh.plugin_base.filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.filter_q.cljs$lang$applyTo = (function (seq25248){
var G__25249 = cljs.core.first(seq25248);
var seq25248__$1 = cljs.core.next(seq25248);
var G__25250 = cljs.core.first(seq25248__$1);
var seq25248__$2 = cljs.core.next(seq25248__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25249,G__25250,seq25248__$2);
}));

posh.plugin_base.transact_BANG_ = (function posh$plugin_base$transact_BANG_(dcfg,poshdb_or_conn,txs){
var G__25256 = (cljs.core.truth_((function (){var fexpr__25258 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25258.cljs$core$IFn$_invoke$arity$1 ? fexpr__25258.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__25258.call(null,poshdb_or_conn));
})())?poshdb_or_conn:posh.stateful.poshdb__GT_conn(poshdb_or_conn));
var G__25257 = txs;
var fexpr__25255 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__25255.cljs$core$IFn$_invoke$arity$2 ? fexpr__25255.cljs$core$IFn$_invoke$arity$2(G__25256,G__25257) : fexpr__25255.call(null,G__25256,G__25257));
});

//# sourceMappingURL=posh.plugin_base.js.map
