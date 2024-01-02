goog.provide('work_app.matter_subs');
var G__41637_41720 = new cljs.core.Keyword("work-app.matter-subs","client-matters-query","work-app.matter-subs/client-matters-query",-60828853);
var G__41638_41721 = (function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Symbol(null,"?m-name","?m-name",1301536426,null),new cljs.core.Symbol(null,"?c-name","?c-name",-113752895,null),new cljs.core.Symbol(null,"?m-num","?m-num",-208142852,null),new cljs.core.Symbol(null,"?c-num","?c-num",391717661,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","name","matter/name",643423984),new cljs.core.Symbol(null,"?m-name","?m-name",1301536426,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","number","matter/number",-1659652091),new cljs.core.Symbol(null,"?m-num","?m-num",-208142852,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","name","client/name",924271622),new cljs.core.Symbol(null,"?c-name","?c-name",-113752895,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","number","client/number",-1936785665),new cljs.core.Symbol(null,"?c-num","?c-num",391717661,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null),new cljs.core.Keyword("client","matters","client/matters",-896248603),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__41637_41720,G__41638_41721) : re_posh.core.reg_sub.call(null,G__41637_41720,G__41638_41721));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.matter-subs","client-matters","work-app.matter-subs/client-matters",1137923080),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","client-matters-query","work-app.matter-subs/client-matters-query",-60828853)], null));
}),(function (cms){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41639){
var vec__41640 = p__41639;
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(0),null);
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(1),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(2),null);
var c_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(3),null);
var m_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(4),null);
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(5),null);
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m-id","m-id",1795173264),m_id,new cljs.core.Keyword(null,"cm","cm",540591536),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_num),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m_num)].join(''),new cljs.core.Keyword(null,"client-name","client-name",1843891115),c_name,new cljs.core.Keyword(null,"matter-name","matter-name",-359115844),m_name], null));
}),cms);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.matter-subs","client-opts","work-app.matter-subs/client-opts",-388682124),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","client-matters-query","work-app.matter-subs/client-matters-query",-60828853)], null));
}),(function (cms){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41643){
var vec__41644 = p__41643;
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(0),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(1),null);
var c_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(2),null);
var m_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(3),null);
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41644,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),c_id,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_num),")"].join('')], null);
}),cms));
})], 0));
var G__41651_41725 = new cljs.core.Keyword("work-app.matter-subs","code-ids","work-app.matter-subs/code-ids",1358344667);
var G__41652_41726 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?code-id","?code-id",-1672663700,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"?code-id","?code-id",-1672663700,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__41651_41725,G__41652_41726) : re_posh.core.reg_query_sub.call(null,G__41651_41725,G__41652_41726));
var G__41654_41727 = new cljs.core.Keyword("work-app.matter-subs","get-matter-codes","work-app.matter-subs/get-matter-codes",890546621);
var G__41655_41728 = (function (p__41658){
var vec__41662 = p__41658;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41662,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41662,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","code-ids","work-app.matter-subs/code-ids",1358344667),m_id], null));
});
var G__41656_41729 = (function (code_ids){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.vec(code_ids)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__41654_41727,G__41655_41728,G__41656_41729) : re_posh.core.reg_sub.call(null,G__41654_41727,G__41655_41728,G__41656_41729));
work_app.matter_subs.str_range = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
work_app.matter_subs.give_code_key = (function work_app$matter_subs$give_code_key(p__41669,key){
var map__41670 = p__41669;
var map__41670__$1 = cljs.core.__destructure_map(map__41670);
var code_map = map__41670__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41670__$1,new cljs.core.Keyword("code","code","code/code",-1648422023));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41670__$1,new cljs.core.Keyword("code","label","code/label",1716728861));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41670__$1,new cljs.core.Keyword("code","children","code/children",-945628113));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41670__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var G__41672 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)," \u2014 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),new cljs.core.Keyword(null,"data","data",-232669377),id], null);
var G__41672__$1 = (cljs.core.truth_(children)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41672,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__41676){
var vec__41677 = p__41676;
var sub_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41677,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41677,(1),null);
var G__41680 = child;
var G__41681 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_key)].join('');
return (work_app.matter_subs.give_code_key.cljs$core$IFn$_invoke$arity$2 ? work_app.matter_subs.give_code_key.cljs$core$IFn$_invoke$arity$2(G__41680,G__41681) : work_app.matter_subs.give_code_key.call(null,G__41680,G__41681));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,work_app.matter_subs.str_range,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("code","code","code/code",-1648422023),children)))):G__41672);
if(cljs.core.not(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41672__$1,new cljs.core.Keyword(null,"leaf","leaf",1306118732),true);
} else {
return G__41672__$1;
}
});
work_app.matter_subs.key_codes = (function work_app$matter_subs$key_codes(codes){
return cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__41686){
var vec__41687 = p__41686;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41687,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41687,(1),null);
return work_app.matter_subs.give_code_key(c,k);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,work_app.matter_subs.str_range,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("code","code","code/code",-1648422023),codes))));
});
var codes_41730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("code","label","code/label",1716728861),"A Label",new cljs.core.Keyword("code","code","code/code",-1648422023),"A",new cljs.core.Keyword("code","children","code/children",-945628113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("code","label","code/label",1716728861),"AA Label",new cljs.core.Keyword("code","code","code/code",-1648422023),"A1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("code","label","code/label",1716728861),"AA Label",new cljs.core.Keyword("code","code","code/code",-1648422023),"A2"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("code","label","code/label",1716728861),"B Label",new cljs.core.Keyword("code","code","code/code",-1648422023),"B",new cljs.core.Keyword("code","children","code/children",-945628113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("code","label","code/label",1716728861),"BB Label",new cljs.core.Keyword("code","code","code/code",-1648422023),"B1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("code","label","code/label",1716728861),"BB Label",new cljs.core.Keyword("code","code","code/code",-1648422023),"B2"], null)], null)], null)], null);
cljs.core.tree_seq((function (_){
return true;
}),new cljs.core.Keyword("code","children","code/children",-945628113),cljs.core.first(codes_41730));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.matter-subs","matter-code-menu-opts","work-app.matter-subs/matter-code-menu-opts",1660266215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (m_id){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","get-matter-codes","work-app.matter-subs/get-matter-codes",890546621)], null));
}),(function (codes,_){
return work_app.matter_subs.key_codes(codes);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.matter-subs","key->code-id","work-app.matter-subs/key->code-id",968506535),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (m_id){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","matter-code-menu-opts","work-app.matter-subs/matter-code-menu-opts",1660266215)], null));
}),(function (code_opts,p__41710){
var vec__41711 = p__41710;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711,(1),null);
return "test";
})], 0));

//# sourceMappingURL=work_app.matter_subs.js.map
