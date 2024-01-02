goog.provide('posh.lib.q_analyze');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.empty_QMARK_(ls);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__24098 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24098) : stop_at_QMARK_.call(null,G__24098));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__24102 = stop_at_QMARK_;
var G__24103 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__24102,G__24103) : posh.lib.q_analyze.take_until.call(null,G__24102,G__24103));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.empty_QMARK_(ls);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__24110 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24110) : rest_at_QMARK_.call(null,G__24110));
}
})())){
return ls;
} else {
var G__24769 = rest_at_QMARK_;
var G__24770 = cljs.core.rest(ls);
rest_at_QMARK_ = G__24769;
ls = G__24770;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__24124 = split_at_QMARK_;
var G__24125 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__24124,G__24125) : posh.lib.q_analyze.split_list_at.call(null,G__24124,G__24125));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__24156 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__24156) : posh.lib.q_analyze.get_all_vars.call(null,G__24156));
})(),(function (){var G__24157 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__24157) : posh.lib.q_analyze.get_all_vars.call(null,G__24157));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24158 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__24158) : posh.lib.q_analyze.get_all_vars.call(null,G__24158));
})(),cljs.core.first(query));
} else {
var G__24161 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__24161) : posh.lib.q_analyze.get_all_vars.call(null,G__24161));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__5043__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__5043__auto__;
}
})())){
var G__24200 = cljs.core.rest(eav);
var G__24201 = (n - (1));
var G__24202 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__24203 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__24200,G__24201,G__24202,G__24203) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__24200,G__24201,G__24202,G__24203));
} else {
var var$ = posh.lib.q_analyze.qvar_gen();
var G__24204 = cljs.core.rest(eav);
var G__24205 = (n - (1));
var G__24206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__24207 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__24204,G__24205,G__24206,G__24207) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__24204,G__24205,G__24206,G__24207));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__24208 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__24208) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__24208));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__24209 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__24209) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__24209));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__24210 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24210) : posh.lib.q_analyze.get_eavs.call(null,G__24210));
})(),(function (){var G__24211 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24211) : posh.lib.q_analyze.get_eavs.call(null,G__24211));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__24212 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24212) : posh.lib.q_analyze.get_eavs.call(null,G__24212));
})(),(function (){var G__24213 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24213) : posh.lib.q_analyze.get_eavs.call(null,G__24213));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__24214 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24214) : posh.lib.q_analyze.get_eavs.call(null,G__24214));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_24215 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_24215)) && ((cljs.core.count(ocr_24215) === 2)))){
try{var ocr_24215_0__24218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24215,(0));
if(((cljs.core.vector_QMARK_(ocr_24215_0__24218)) && ((cljs.core.count(ocr_24215_0__24218) === 5)))){
try{var ocr_24215_0__24218_0__24220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24215_0__24218,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24215_0__24218_0__24220,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24215_0__24218,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24215_0__24218,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24215_0__24218,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24215,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__24233 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24233) : posh.lib.q_analyze.get_eavs.call(null,G__24233));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e24231){if((e24231 instanceof Error)){
var e__23058__auto__ = e24231;
if((e__23058__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto__;
}
} else {
throw e24231;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24229){if((e24229 instanceof Error)){
var e__23058__auto__ = e24229;
if((e__23058__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto__;
}
} else {
throw e24229;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24227){if((e24227 instanceof Error)){
var e__23058__auto__ = e24227;
if((e__23058__auto__ === cljs.core.match.backtrack)){
var G__24228 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24228) : posh.lib.q_analyze.get_eavs.call(null,G__24228));
} else {
throw e__23058__auto__;
}
} else {
throw e24227;

}
}} else {
var G__24234 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__24234) : posh.lib.q_analyze.get_eavs.call(null,G__24234));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__24237){
var vec__24238 = p__24237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24238,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24241_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__24241_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__24241_SHARP_);
} else {
return p1__24241_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__24244 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__24244) : posh.lib.q_analyze.count_qvars.call(null,G__24244));
})(),(function (){var G__24245 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__24245) : posh.lib.q_analyze.count_qvars.call(null,G__24245));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__24246 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__24246) : posh.lib.q_analyze.count_qvars.call(null,G__24246));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__5523__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__24247(s__24248){
return (new cljs.core.LazySeq(null,(function (){
var s__24248__$1 = s__24248;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24248__$1);
if(temp__5804__auto__){
var s__24248__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24248__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24248__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24250 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24249 = (0);
while(true){
if((i__24249 < size__5522__auto__)){
var r = cljs.core._nth(c__5521__auto__,i__24249);
cljs.core.chunk_append(b__24250,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__24780 = (i__24249 + (1));
i__24249 = G__24780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24250),posh$lib$q_analyze$fill_qvar_set_$_iter__24247(cljs.core.chunk_rest(s__24248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24250),null);
}
} else {
var r = cljs.core.first(s__24248__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__24247(cljs.core.rest(s__24248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__24257 = cljs.core.first(seq1);
var G__24258 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24257,G__24258) : f.call(null,G__24257,G__24258));
})(),(function (){var G__24260 = f;
var G__24261 = cljs.core.rest(seq1);
var G__24262 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__24260,G__24261,G__24262) : posh.lib.q_analyze.seq_merge_with.call(null,G__24260,G__24261,G__24262));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__24269){
var vec__24273 = p__24269;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24273,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24273,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24273,(2),null);
var eav = vec__24273;
var vec__24276 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24276,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24276,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24276,(2),null);
var iter__5523__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__24280(s__24281){
return (new cljs.core.LazySeq(null,(function (){
var s__24281__$1 = s__24281;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24281__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var ee = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__24281__$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__24280_$_iter__24282(s__24283){
return (new cljs.core.LazySeq(null,((function (s__24281__$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (){
var s__24283__$1 = s__24283;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24283__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var aa = cljs.core.first(xs__6360__auto____$1);
var iterys__5519__auto__ = ((function (s__24283__$1,s__24281__$1,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__24280_$_iter__24282_$_iter__24285(s__24286){
return (new cljs.core.LazySeq(null,((function (s__24283__$1,s__24281__$1,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (){
var s__24286__$1 = s__24286;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__24286__$1);
if(temp__5804__auto____$2){
var s__24286__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__24286__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24286__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24288 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24287 = (0);
while(true){
if((i__24287 < size__5522__auto__)){
var vv = cljs.core._nth(c__5521__auto__,i__24287);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__24287,s__24286__$1,s__24283__$1,s__24281__$1,vv,c__5521__auto__,size__5522__auto__,b__24288,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (p1__24265_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__24265_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__24287,s__24286__$1,s__24283__$1,s__24281__$1,vv,c__5521__auto__,size__5522__auto__,b__24288,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__24287,s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,vv,c__5521__auto__,size__5522__auto__,b__24288,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (p__24289){
var vec__24290 = p__24289;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24290,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24290,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = var_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__5043__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__24287,s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,vv,c__5521__auto__,size__5522__auto__,b__24288,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__24287,s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,exposed_qvars,vv,c__5521__auto__,size__5522__auto__,b__24288,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (p1__24267_SHARP_){
if(cljs.core.truth_(p1__24267_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__24287,s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,exposed_qvars,vv,c__5521__auto__,size__5522__auto__,b__24288,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)))));
})()){
cljs.core.chunk_append(b__24288,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__24788 = (i__24287 + (1));
i__24287 = G__24788;
continue;
} else {
var G__24789 = (i__24287 + (1));
i__24287 = G__24789;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24288),posh$lib$q_analyze$pattern_from_eav__old_$_iter__24280_$_iter__24282_$_iter__24285(cljs.core.chunk_rest(s__24286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24288),null);
}
} else {
var vv = cljs.core.first(s__24286__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__24286__$1,s__24283__$1,s__24281__$1,vv,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (p1__24265_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__24265_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__24286__$1,s__24283__$1,s__24281__$1,vv,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,vv,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (p__24298){
var vec__24299 = p__24298;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24299,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24299,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = var_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__5043__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,vv,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,exposed_qvars,vv,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav){
return (function (p1__24267_SHARP_){
if(cljs.core.truth_(p1__24267_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__24286__$1,s__24283__$1,s__24281__$1,wildcard_count,exposed_qvars,vv,s__24286__$2,temp__5804__auto____$2,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)))));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__24280_$_iter__24282_$_iter__24285(cljs.core.rest(s__24286__$2)));
} else {
var G__24793 = cljs.core.rest(s__24286__$2);
s__24286__$1 = G__24793;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__24283__$1,s__24281__$1,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,null,null));
});})(s__24283__$1,s__24281__$1,aa,xs__6360__auto____$1,temp__5804__auto____$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__24280_$_iter__24282(cljs.core.rest(s__24283__$1)));
} else {
var G__24801 = cljs.core.rest(s__24283__$1);
s__24283__$1 = G__24801;
continue;
}
} else {
return null;
}
break;
}
});})(s__24281__$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
,null,null));
});})(s__24281__$1,ee,xs__6360__auto__,temp__5804__auto__,vec__24276,qe,qa,qv,vec__24273,e,a,v,eav))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__24280(cljs.core.rest(s__24281__$1)));
} else {
var G__24805 = cljs.core.rest(s__24281__$1);
s__24281__$1 = G__24805;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_24308 = cljs.core.vec(eav);
var ocr_24309 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_24308)) && ((cljs.core.count(ocr_24308) === 3)))){
try{var ocr_24308_0__24348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_0__24348,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24308_1__24351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_1__24351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24308_2__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_2__24353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24530){if((e24530 instanceof Error)){
var e__23058__auto__ = e24530;
if((e__23058__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_24309)) && ((cljs.core.count(ocr_24309) === 3)))){
try{var ocr_24309_2__24369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24369 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24533){if((e24533 instanceof Error)){
var e__23058__auto____$1 = e24533;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24369 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24534){if((e24534 instanceof Error)){
var e__23058__auto____$2 = e24534;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$2;
}
} else {
throw e24534;

}
}} else {
throw e__23058__auto____$1;
}
} else {
throw e24533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24531){if((e24531 instanceof Error)){
var e__23058__auto____$1 = e24531;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24531;

}
}} else {
throw e__23058__auto__;
}
} else {
throw e24530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24523){if((e24523 instanceof Error)){
var e__23058__auto__ = e24523;
if((e__23058__auto__ === cljs.core.match.backtrack)){
try{var ocr_24308_2__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_2__24353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_24309)) && ((cljs.core.count(ocr_24309) === 3)))){
try{var ocr_24309_1__24373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24373 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24526){if((e24526 instanceof Error)){
var e__23058__auto____$1 = e24526;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24309_1__24373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24373 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24527){if((e24527 instanceof Error)){
var e__23058__auto____$2 = e24527;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$2;
}
} else {
throw e24527;

}
}} else {
throw e__23058__auto____$1;
}
} else {
throw e24526;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24525){if((e24525 instanceof Error)){
var e__23058__auto____$1 = e24525;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24524){if((e24524 instanceof Error)){
var e__23058__auto____$1 = e24524;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24524;

}
}} else {
throw e__23058__auto__;
}
} else {
throw e24523;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24400){if((e24400 instanceof Error)){
var e__23058__auto__ = e24400;
if((e__23058__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_24309)) && ((cljs.core.count(ocr_24309) === 3)))){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === false)){
try{var ocr_24308_1__24351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_1__24351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24308_2__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_2__24353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24522){if((e24522 instanceof Error)){
var e__23058__auto____$1 = e24522;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24522;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24521){if((e24521 instanceof Error)){
var e__23058__auto____$1 = e24521;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24403){if((e24403 instanceof Error)){
var e__23058__auto____$1 = e24403;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === true)){
try{var ocr_24308_2__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_2__24353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24308_1__24351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_1__24351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24518){if((e24518 instanceof Error)){
var e__23058__auto____$2 = e24518;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24519){if((e24519 instanceof Error)){
var e__23058__auto____$3 = e24519;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24520){if((e24520 instanceof Error)){
var e__23058__auto____$4 = e24520;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24520;

}
}} else {
throw e__23058__auto____$3;
}
} else {
throw e24519;

}
}} else {
throw e__23058__auto____$2;
}
} else {
throw e24518;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24517){if((e24517 instanceof Error)){
var e__23058__auto____$2 = e24517;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$2;
}
} else {
throw e24517;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24404){if((e24404 instanceof Error)){
var e__23058__auto____$2 = e24404;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === false)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
try{var ocr_24308_2__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_2__24353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24516){if((e24516 instanceof Error)){
var e__23058__auto____$3 = e24516;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$3;
}
} else {
throw e24516;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24513){if((e24513 instanceof Error)){
var e__23058__auto____$3 = e24513;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
try{var ocr_24308_2__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_2__24353,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24515){if((e24515 instanceof Error)){
var e__23058__auto____$4 = e24515;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24515;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24514){if((e24514 instanceof Error)){
var e__23058__auto____$4 = e24514;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24514;

}
}} else {
throw e__23058__auto____$3;
}
} else {
throw e24513;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24406){if((e24406 instanceof Error)){
var e__23058__auto____$3 = e24406;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === true)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === true)){
try{var ocr_24308_1__24351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_1__24351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24512){if((e24512 instanceof Error)){
var e__23058__auto____$4 = e24512;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24512;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24511){if((e24511 instanceof Error)){
var e__23058__auto____$4 = e24511;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24511;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24407){if((e24407 instanceof Error)){
var e__23058__auto____$4 = e24407;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === false)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === true)){
try{var ocr_24308_1__24351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_1__24351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24510){if((e24510 instanceof Error)){
var e__23058__auto____$5 = e24510;
if((e__23058__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$5;
}
} else {
throw e24510;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24509){if((e24509 instanceof Error)){
var e__23058__auto____$5 = e24509;
if((e__23058__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$5;
}
} else {
throw e24509;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24408){if((e24408 instanceof Error)){
var e__23058__auto____$5 = e24408;
if((e__23058__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === true)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === false)){
try{var ocr_24308_1__24351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_1__24351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24506){if((e24506 instanceof Error)){
var e__23058__auto____$6 = e24506;
if((e__23058__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$6;
}
} else {
throw e24506;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24505){if((e24505 instanceof Error)){
var e__23058__auto____$6 = e24505;
if((e__23058__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$6;
}
} else {
throw e24505;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24409){if((e24409 instanceof Error)){
var e__23058__auto____$6 = e24409;
if((e__23058__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === false)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === false)){
try{var ocr_24308_1__24351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_1__24351,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24502){if((e24502 instanceof Error)){
var e__23058__auto____$7 = e24502;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$7;
}
} else {
throw e24502;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24501){if((e24501 instanceof Error)){
var e__23058__auto____$7 = e24501;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$7;
}
} else {
throw e24501;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24411){if((e24411 instanceof Error)){
var e__23058__auto____$7 = e24411;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === true)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
try{var ocr_24308_0__24348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_0__24348,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24498){if((e24498 instanceof Error)){
var e__23058__auto____$8 = e24498;
if((e__23058__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$8;
}
} else {
throw e24498;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24497){if((e24497 instanceof Error)){
var e__23058__auto____$8 = e24497;
if((e__23058__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$8;
}
} else {
throw e24497;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24412){if((e24412 instanceof Error)){
var e__23058__auto____$8 = e24412;
if((e__23058__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === false)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
try{var ocr_24308_0__24348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_0__24348,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24496){if((e24496 instanceof Error)){
var e__23058__auto____$9 = e24496;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$9;
}
} else {
throw e24496;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24495){if((e24495 instanceof Error)){
var e__23058__auto____$9 = e24495;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$9;
}
} else {
throw e24495;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24413){if((e24413 instanceof Error)){
var e__23058__auto____$9 = e24413;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === true)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
try{var ocr_24308_0__24348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_0__24348,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24493){if((e24493 instanceof Error)){
var e__23058__auto____$10 = e24493;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$10;
}
} else {
throw e24493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24492){if((e24492 instanceof Error)){
var e__23058__auto____$10 = e24492;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$10;
}
} else {
throw e24492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24414){if((e24414 instanceof Error)){
var e__23058__auto____$10 = e24414;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === false)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
try{var ocr_24308_0__24348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24308_0__24348,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24491){if((e24491 instanceof Error)){
var e__23058__auto____$11 = e24491;
if((e__23058__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$11;
}
} else {
throw e24491;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24490){if((e24490 instanceof Error)){
var e__23058__auto____$11 = e24490;
if((e__23058__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$11;
}
} else {
throw e24490;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24417){if((e24417 instanceof Error)){
var e__23058__auto____$11 = e24417;
if((e__23058__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === true)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === true)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24487){if((e24487 instanceof Error)){
var e__23058__auto____$12 = e24487;
if((e__23058__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$12;
}
} else {
throw e24487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24474){if((e24474 instanceof Error)){
var e__23058__auto____$12 = e24474;
if((e__23058__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === false)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24483){if((e24483 instanceof Error)){
var e__23058__auto____$13 = e24483;
if((e__23058__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$13;
}
} else {
throw e24483;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24478){if((e24478 instanceof Error)){
var e__23058__auto____$13 = e24478;
if((e__23058__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === true)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24480){if((e24480 instanceof Error)){
var e__23058__auto____$14 = e24480;
if((e__23058__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$14;
}
} else {
throw e24480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24479){if((e24479 instanceof Error)){
var e__23058__auto____$14 = e24479;
if((e__23058__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$14;
}
} else {
throw e24479;

}
}} else {
throw e__23058__auto____$13;
}
} else {
throw e24478;

}
}} else {
throw e__23058__auto____$12;
}
} else {
throw e24474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24419){if((e24419 instanceof Error)){
var e__23058__auto____$12 = e24419;
if((e__23058__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === false)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === true)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24445){if((e24445 instanceof Error)){
var e__23058__auto____$13 = e24445;
if((e__23058__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$13;
}
} else {
throw e24445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24441){if((e24441 instanceof Error)){
var e__23058__auto____$13 = e24441;
if((e__23058__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$13;
}
} else {
throw e24441;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24420){if((e24420 instanceof Error)){
var e__23058__auto____$13 = e24420;
if((e__23058__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === true)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === false)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24440){if((e24440 instanceof Error)){
var e__23058__auto____$14 = e24440;
if((e__23058__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$14;
}
} else {
throw e24440;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24438){if((e24438 instanceof Error)){
var e__23058__auto____$14 = e24438;
if((e__23058__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$14;
}
} else {
throw e24438;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24421){if((e24421 instanceof Error)){
var e__23058__auto____$14 = e24421;
if((e__23058__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_24309_2__24384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(2));
if((ocr_24309_2__24384 === false)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === true)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24435){if((e24435 instanceof Error)){
var e__23058__auto____$15 = e24435;
if((e__23058__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$15;
}
} else {
throw e24435;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24423){if((e24423 instanceof Error)){
var e__23058__auto____$15 = e24423;
if((e__23058__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_24309_0__24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(0));
if((ocr_24309_0__24382 === false)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24428){if((e24428 instanceof Error)){
var e__23058__auto____$16 = e24428;
if((e__23058__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_24309_1__24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24309,(1));
if((ocr_24309_1__24383 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24308,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24429){if((e24429 instanceof Error)){
var e__23058__auto____$17 = e24429;
if((e__23058__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$17;
}
} else {
throw e24429;

}
}} else {
throw e__23058__auto____$16;
}
} else {
throw e24428;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24424){if((e24424 instanceof Error)){
var e__23058__auto____$16 = e24424;
if((e__23058__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$16;
}
} else {
throw e24424;

}
}} else {
throw e__23058__auto____$15;
}
} else {
throw e24423;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24422){if((e24422 instanceof Error)){
var e__23058__auto____$15 = e24422;
if((e__23058__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$15;
}
} else {
throw e24422;

}
}} else {
throw e__23058__auto____$14;
}
} else {
throw e24421;

}
}} else {
throw e__23058__auto____$13;
}
} else {
throw e24420;

}
}} else {
throw e__23058__auto____$12;
}
} else {
throw e24419;

}
}} else {
throw e__23058__auto____$11;
}
} else {
throw e24417;

}
}} else {
throw e__23058__auto____$10;
}
} else {
throw e24414;

}
}} else {
throw e__23058__auto____$9;
}
} else {
throw e24413;

}
}} else {
throw e__23058__auto____$8;
}
} else {
throw e24412;

}
}} else {
throw e__23058__auto____$7;
}
} else {
throw e24411;

}
}} else {
throw e__23058__auto____$6;
}
} else {
throw e24409;

}
}} else {
throw e__23058__auto____$5;
}
} else {
throw e24408;

}
}} else {
throw e__23058__auto____$4;
}
} else {
throw e24407;

}
}} else {
throw e__23058__auto____$3;
}
} else {
throw e24406;

}
}} else {
throw e__23058__auto____$2;
}
} else {
throw e24404;

}
}} else {
throw e__23058__auto____$1;
}
} else {
throw e24403;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24401){if((e24401 instanceof Error)){
var e__23058__auto____$1 = e24401;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24401;

}
}} else {
throw e__23058__auto__;
}
} else {
throw e24400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24399){if((e24399 instanceof Error)){
var e__23058__auto__ = e24399;
if((e__23058__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__23058__auto__;
}
} else {
throw e24399;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_24540 = cljs.core.vec(eav);
var ocr_24541 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_24540)) && ((cljs.core.count(ocr_24540) === 3)))){
try{var ocr_24540_0__24566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_0__24566,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24540_1__24567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_1__24567,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24540_2__24568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_2__24568,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e24668){if((e24668 instanceof Error)){
var e__23058__auto__ = e24668;
if((e__23058__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_24541)) && ((cljs.core.count(ocr_24541) === 3)))){
try{var ocr_24541_2__24571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24571 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24673){if((e24673 instanceof Error)){
var e__23058__auto____$1 = e24673;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24571 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24674){if((e24674 instanceof Error)){
var e__23058__auto____$2 = e24674;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$2;
}
} else {
throw e24674;

}
}} else {
throw e__23058__auto____$1;
}
} else {
throw e24673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24671){if((e24671 instanceof Error)){
var e__23058__auto____$1 = e24671;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24671;

}
}} else {
throw e__23058__auto__;
}
} else {
throw e24668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24657){if((e24657 instanceof Error)){
var e__23058__auto__ = e24657;
if((e__23058__auto__ === cljs.core.match.backtrack)){
try{var ocr_24540_2__24568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_2__24568,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_24541)) && ((cljs.core.count(ocr_24541) === 3)))){
try{var ocr_24541_1__24573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24573 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24663){if((e24663 instanceof Error)){
var e__23058__auto____$1 = e24663;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24541_1__24573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24573 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24664){if((e24664 instanceof Error)){
var e__23058__auto____$2 = e24664;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$2;
}
} else {
throw e24664;

}
}} else {
throw e__23058__auto____$1;
}
} else {
throw e24663;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24662){if((e24662 instanceof Error)){
var e__23058__auto____$1 = e24662;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24658){if((e24658 instanceof Error)){
var e__23058__auto____$1 = e24658;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24658;

}
}} else {
throw e__23058__auto__;
}
} else {
throw e24657;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24581){if((e24581 instanceof Error)){
var e__23058__auto__ = e24581;
if((e__23058__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_24541)) && ((cljs.core.count(ocr_24541) === 3)))){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === false)){
try{var ocr_24540_1__24567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_1__24567,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24540_2__24568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_2__24568,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24656){if((e24656 instanceof Error)){
var e__23058__auto____$1 = e24656;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24656;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24655){if((e24655 instanceof Error)){
var e__23058__auto____$1 = e24655;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24583){if((e24583 instanceof Error)){
var e__23058__auto____$1 = e24583;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === true)){
try{var ocr_24540_2__24568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_2__24568,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24540_1__24567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_1__24567,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24652){if((e24652 instanceof Error)){
var e__23058__auto____$2 = e24652;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24653){if((e24653 instanceof Error)){
var e__23058__auto____$3 = e24653;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24654){if((e24654 instanceof Error)){
var e__23058__auto____$4 = e24654;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24654;

}
}} else {
throw e__23058__auto____$3;
}
} else {
throw e24653;

}
}} else {
throw e__23058__auto____$2;
}
} else {
throw e24652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24651){if((e24651 instanceof Error)){
var e__23058__auto____$2 = e24651;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$2;
}
} else {
throw e24651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24584){if((e24584 instanceof Error)){
var e__23058__auto____$2 = e24584;
if((e__23058__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === false)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === true)){
try{var ocr_24540_2__24568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_2__24568,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24644){if((e24644 instanceof Error)){
var e__23058__auto____$3 = e24644;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$3;
}
} else {
throw e24644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24643){if((e24643 instanceof Error)){
var e__23058__auto____$3 = e24643;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$3;
}
} else {
throw e24643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24585){if((e24585 instanceof Error)){
var e__23058__auto____$3 = e24585;
if((e__23058__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === true)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === true)){
try{var ocr_24540_1__24567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_1__24567,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24638){if((e24638 instanceof Error)){
var e__23058__auto____$4 = e24638;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24638;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24634){if((e24634 instanceof Error)){
var e__23058__auto____$4 = e24634;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$4;
}
} else {
throw e24634;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24586){if((e24586 instanceof Error)){
var e__23058__auto____$4 = e24586;
if((e__23058__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === false)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === true)){
try{var ocr_24540_1__24567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_1__24567,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24630){if((e24630 instanceof Error)){
var e__23058__auto____$5 = e24630;
if((e__23058__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$5;
}
} else {
throw e24630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24629){if((e24629 instanceof Error)){
var e__23058__auto____$5 = e24629;
if((e__23058__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$5;
}
} else {
throw e24629;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24587){if((e24587 instanceof Error)){
var e__23058__auto____$5 = e24587;
if((e__23058__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === true)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === false)){
try{var ocr_24540_1__24567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_1__24567,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24624){if((e24624 instanceof Error)){
var e__23058__auto____$6 = e24624;
if((e__23058__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$6;
}
} else {
throw e24624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24621){if((e24621 instanceof Error)){
var e__23058__auto____$6 = e24621;
if((e__23058__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === true)){
try{var ocr_24540_0__24566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_0__24566,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24623){if((e24623 instanceof Error)){
var e__23058__auto____$7 = e24623;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$7;
}
} else {
throw e24623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24622){if((e24622 instanceof Error)){
var e__23058__auto____$7 = e24622;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$7;
}
} else {
throw e24622;

}
}} else {
throw e__23058__auto____$6;
}
} else {
throw e24621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24588){if((e24588 instanceof Error)){
var e__23058__auto____$6 = e24588;
if((e__23058__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === false)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === true)){
try{var ocr_24540_0__24566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_0__24566,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24620){if((e24620 instanceof Error)){
var e__23058__auto____$7 = e24620;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$7;
}
} else {
throw e24620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24619){if((e24619 instanceof Error)){
var e__23058__auto____$7 = e24619;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$7;
}
} else {
throw e24619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24589){if((e24589 instanceof Error)){
var e__23058__auto____$7 = e24589;
if((e__23058__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === true)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === false)){
try{var ocr_24540_0__24566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_24540_0__24566,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24618){if((e24618 instanceof Error)){
var e__23058__auto____$8 = e24618;
if((e__23058__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$8;
}
} else {
throw e24618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24612){if((e24612 instanceof Error)){
var e__23058__auto____$8 = e24612;
if((e__23058__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === true)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24616){if((e24616 instanceof Error)){
var e__23058__auto____$9 = e24616;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24617){if((e24617 instanceof Error)){
var e__23058__auto____$10 = e24617;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$10;
}
} else {
throw e24617;

}
}} else {
throw e__23058__auto____$9;
}
} else {
throw e24616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24613){if((e24613 instanceof Error)){
var e__23058__auto____$9 = e24613;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === false)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24615){if((e24615 instanceof Error)){
var e__23058__auto____$10 = e24615;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$10;
}
} else {
throw e24615;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24614){if((e24614 instanceof Error)){
var e__23058__auto____$10 = e24614;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$10;
}
} else {
throw e24614;

}
}} else {
throw e__23058__auto____$9;
}
} else {
throw e24613;

}
}} else {
throw e__23058__auto____$8;
}
} else {
throw e24612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24590){if((e24590 instanceof Error)){
var e__23058__auto____$8 = e24590;
if((e__23058__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === false)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === true)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24611){if((e24611 instanceof Error)){
var e__23058__auto____$9 = e24611;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$9;
}
} else {
throw e24611;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24610){if((e24610 instanceof Error)){
var e__23058__auto____$9 = e24610;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$9;
}
} else {
throw e24610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24591){if((e24591 instanceof Error)){
var e__23058__auto____$9 = e24591;
if((e__23058__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === true)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === false)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24609){if((e24609 instanceof Error)){
var e__23058__auto____$10 = e24609;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$10;
}
} else {
throw e24609;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24604){if((e24604 instanceof Error)){
var e__23058__auto____$10 = e24604;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$10;
}
} else {
throw e24604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24594){if((e24594 instanceof Error)){
var e__23058__auto____$10 = e24594;
if((e__23058__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_24541_2__24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(2));
if((ocr_24541_2__24577 === false)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === true)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24603){if((e24603 instanceof Error)){
var e__23058__auto____$11 = e24603;
if((e__23058__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$11;
}
} else {
throw e24603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24597){if((e24597 instanceof Error)){
var e__23058__auto____$11 = e24597;
if((e__23058__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_24541_0__24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(0));
if((ocr_24541_0__24575 === false)){
try{var ocr_24541_1__24576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24541,(1));
if((ocr_24541_1__24576 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_24540,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24600){if((e24600 instanceof Error)){
var e__23058__auto____$12 = e24600;
if((e__23058__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$12;
}
} else {
throw e24600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24599){if((e24599 instanceof Error)){
var e__23058__auto____$12 = e24599;
if((e__23058__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$12;
}
} else {
throw e24599;

}
}} else {
throw e__23058__auto____$11;
}
} else {
throw e24597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24595){if((e24595 instanceof Error)){
var e__23058__auto____$11 = e24595;
if((e__23058__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$11;
}
} else {
throw e24595;

}
}} else {
throw e__23058__auto____$10;
}
} else {
throw e24594;

}
}} else {
throw e__23058__auto____$9;
}
} else {
throw e24591;

}
}} else {
throw e__23058__auto____$8;
}
} else {
throw e24590;

}
}} else {
throw e__23058__auto____$7;
}
} else {
throw e24589;

}
}} else {
throw e__23058__auto____$6;
}
} else {
throw e24588;

}
}} else {
throw e__23058__auto____$5;
}
} else {
throw e24587;

}
}} else {
throw e__23058__auto____$4;
}
} else {
throw e24586;

}
}} else {
throw e__23058__auto____$3;
}
} else {
throw e24585;

}
}} else {
throw e__23058__auto____$2;
}
} else {
throw e24584;

}
}} else {
throw e__23058__auto____$1;
}
} else {
throw e24583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24582){if((e24582 instanceof Error)){
var e__23058__auto____$1 = e24582;
if((e__23058__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23058__auto____$1;
}
} else {
throw e24582;

}
}} else {
throw e__23058__auto__;
}
} else {
throw e24581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24580){if((e24580 instanceof Error)){
var e__23058__auto__ = e24580;
if((e__23058__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__23058__auto__;
}
} else {
throw e24580;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24680){
var vec__24681 = p__24680;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24681,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__24679_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__24679_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24689){
var vec__24690 = p__24689;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24690,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24690,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__24687_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__24687_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__24693 = cljs.core.rest(ins);
var G__24694 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__24693,G__24694) : posh.lib.q_analyze.just_qvars.call(null,G__24693,G__24694));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24695_SHARP_){
return cljs.core.zipmap(qvars,p1__24695_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__24699 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24699,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24699,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24699,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24699,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__24899 = var$;
var G__24900 = dbvarmap;
var G__24901 = cljs.core.rest(dbeavs);
var$ = G__24899;
dbvarmap = G__24900;
dbeavs = G__24901;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__24702 = cljs.core.rest(vars);
var G__24703 = dbvarmap;
var G__24704 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__24702,G__24703,G__24704) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__24702,G__24703,G__24704));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__24903 = (n + (1));
var G__24904 = cljs.core.rest(xs__$1);
n = G__24903;
xs__$1 = G__24904;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__5043__auto__ = cljs.core.map_QMARK_(arg);
if(and__5043__auto__){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24705_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__24705_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__24705_SHARP_) : type.call(null,p1__24705_SHARP_));
} else {
return p1__24705_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__24709 = cljs.core.rest(ins);
var G__24710 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__24709,G__24710) : posh.lib.q_analyze.make_dbarg_map.call(null,G__24709,G__24710));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24711){
var vec__24712 = p__24711;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24712,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24712,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24716_SHARP_,p2__24715_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__24715_SHARP_)){
return p1__24716_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__24722 = cljs.core._EQ_;
var expr__24723 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__24722.cljs$core$IFn$_invoke$arity$2 ? pred__24722.cljs$core$IFn$_invoke$arity$2((1),expr__24723) : pred__24722.call(null,(1),expr__24723)))){
return true;
} else {
if(cljs.core.truth_((pred__24722.cljs$core$IFn$_invoke$arity$2 ? pred__24722.cljs$core$IFn$_invoke$arity$2((3),expr__24723) : pred__24722.call(null,(3),expr__24723)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__24913 = cljs.core.first(remaining);
var G__24914 = cljs.core.rest(remaining);
clause = G__24913;
remaining = G__24914;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__24915 = cljs.core.first(remaining);
var G__24916 = cljs.core.rest(remaining);
clause = G__24915;
remaining = G__24916;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__5523__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__24725(s__24726){
return (new cljs.core.LazySeq(null,(function (){
var s__24726__$1 = s__24726;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24726__$1);
if(temp__5804__auto__){
var s__24726__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24726__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24726__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24728 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24727 = (0);
while(true){
if((i__24727 < size__5522__auto__)){
var var_value = cljs.core._nth(c__5521__auto__,i__24727);
cljs.core.chunk_append(b__24728,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__24918 = (i__24727 + (1));
i__24727 = G__24918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24728),posh$lib$q_analyze$resolve_any_idents_$_iter__24725(cljs.core.chunk_rest(s__24726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24728),null);
}
} else {
var var_value = cljs.core.first(s__24726__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__24725(cljs.core.rest(s__24726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24740){
var vec__24741 = p__24740;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24741,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24741,(1),null);
var or__5045__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24744){
var vec__24745 = p__24744;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24745,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24748){
var vec__24749 = p__24748;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24752){
var vec__24753 = p__24752;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24753,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24753,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__24757 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__24758 = cljs.core.vec(r);
var fexpr__24756 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__24756.cljs$core$IFn$_invoke$arity$2 ? fexpr__24756.cljs$core$IFn$_invoke$arity$2(G__24757,G__24758) : fexpr__24756.call(null,G__24757,G__24758));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24759){
var vec__24760 = p__24759;
var seq__24761 = cljs.core.seq(vec__24760);
var first__24762 = cljs.core.first(seq__24761);
var seq__24761__$1 = cljs.core.next(seq__24761);
var db = first__24762;
var eav = seq__24761__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5802__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5802__auto__)){
var var_value = temp__5802__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24763){
var vec__24764 = p__24763;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24764,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__24735_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__24735_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__24735_SHARP_) : linked_qvars.call(null,p1__24735_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__24735_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__24736_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__24736_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__24736_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
