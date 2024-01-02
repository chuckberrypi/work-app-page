goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21095 = arguments.length;
var i__5770__auto___21096 = (0);
while(true){
if((i__5770__auto___21096 < len__5769__auto___21095)){
args__5775__auto__.push((arguments[i__5770__auto___21096]));

var G__21097 = (i__5770__auto___21096 + (1));
i__5770__auto___21096 = G__21097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20693){
var G__20694 = cljs.core.first(seq20693);
var seq20693__$1 = cljs.core.next(seq20693);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20694,seq20693__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20698 = cljs.core.seq(sources);
var chunk__20699 = null;
var count__20700 = (0);
var i__20701 = (0);
while(true){
if((i__20701 < count__20700)){
var map__20711 = chunk__20699.cljs$core$IIndexed$_nth$arity$2(null,i__20701);
var map__20711__$1 = cljs.core.__destructure_map(map__20711);
var src = map__20711__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20712){var e_21098 = e20712;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21098);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21098.message)].join('')));
}

var G__21099 = seq__20698;
var G__21100 = chunk__20699;
var G__21101 = count__20700;
var G__21102 = (i__20701 + (1));
seq__20698 = G__21099;
chunk__20699 = G__21100;
count__20700 = G__21101;
i__20701 = G__21102;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20698);
if(temp__5804__auto__){
var seq__20698__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20698__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20698__$1);
var G__21103 = cljs.core.chunk_rest(seq__20698__$1);
var G__21104 = c__5568__auto__;
var G__21105 = cljs.core.count(c__5568__auto__);
var G__21106 = (0);
seq__20698 = G__21103;
chunk__20699 = G__21104;
count__20700 = G__21105;
i__20701 = G__21106;
continue;
} else {
var map__20714 = cljs.core.first(seq__20698__$1);
var map__20714__$1 = cljs.core.__destructure_map(map__20714);
var src = map__20714__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20714__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20714__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20714__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20714__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20715){var e_21107 = e20715;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21107);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21107.message)].join('')));
}

var G__21109 = cljs.core.next(seq__20698__$1);
var G__21110 = null;
var G__21111 = (0);
var G__21112 = (0);
seq__20698 = G__21109;
chunk__20699 = G__21110;
count__20700 = G__21111;
i__20701 = G__21112;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20720 = cljs.core.seq(js_requires);
var chunk__20721 = null;
var count__20722 = (0);
var i__20723 = (0);
while(true){
if((i__20723 < count__20722)){
var js_ns = chunk__20721.cljs$core$IIndexed$_nth$arity$2(null,i__20723);
var require_str_21113 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21113);


var G__21114 = seq__20720;
var G__21115 = chunk__20721;
var G__21116 = count__20722;
var G__21117 = (i__20723 + (1));
seq__20720 = G__21114;
chunk__20721 = G__21115;
count__20722 = G__21116;
i__20723 = G__21117;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20720);
if(temp__5804__auto__){
var seq__20720__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20720__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20720__$1);
var G__21118 = cljs.core.chunk_rest(seq__20720__$1);
var G__21119 = c__5568__auto__;
var G__21120 = cljs.core.count(c__5568__auto__);
var G__21121 = (0);
seq__20720 = G__21118;
chunk__20721 = G__21119;
count__20722 = G__21120;
i__20723 = G__21121;
continue;
} else {
var js_ns = cljs.core.first(seq__20720__$1);
var require_str_21122 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21122);


var G__21123 = cljs.core.next(seq__20720__$1);
var G__21124 = null;
var G__21125 = (0);
var G__21126 = (0);
seq__20720 = G__21123;
chunk__20721 = G__21124;
count__20722 = G__21125;
i__20723 = G__21126;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20731){
var map__20732 = p__20731;
var map__20732__$1 = cljs.core.__destructure_map(map__20732);
var msg = map__20732__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20734(s__20735){
return (new cljs.core.LazySeq(null,(function (){
var s__20735__$1 = s__20735;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20735__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20744 = cljs.core.first(xs__6360__auto__);
var map__20744__$1 = cljs.core.__destructure_map(map__20744);
var src = map__20744__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20735__$1,map__20744,map__20744__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20732,map__20732__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20734_$_iter__20736(s__20737){
return (new cljs.core.LazySeq(null,((function (s__20735__$1,map__20744,map__20744__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20732,map__20732__$1,msg,info,reload_info){
return (function (){
var s__20737__$1 = s__20737;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20737__$1);
if(temp__5804__auto____$1){
var s__20737__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20737__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20737__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20739 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20738 = (0);
while(true){
if((i__20738 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20738);
cljs.core.chunk_append(b__20739,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21130 = (i__20738 + (1));
i__20738 = G__21130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20739),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20734_$_iter__20736(cljs.core.chunk_rest(s__20737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20739),null);
}
} else {
var warning = cljs.core.first(s__20737__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20734_$_iter__20736(cljs.core.rest(s__20737__$2)));
}
} else {
return null;
}
break;
}
});})(s__20735__$1,map__20744,map__20744__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20732,map__20732__$1,msg,info,reload_info))
,null,null));
});})(s__20735__$1,map__20744,map__20744__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20732,map__20732__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20734(cljs.core.rest(s__20735__$1)));
} else {
var G__21131 = cljs.core.rest(s__20735__$1);
s__20735__$1 = G__21131;
continue;
}
} else {
var G__21132 = cljs.core.rest(s__20735__$1);
s__20735__$1 = G__21132;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20765_21133 = cljs.core.seq(warnings);
var chunk__20766_21134 = null;
var count__20767_21135 = (0);
var i__20768_21136 = (0);
while(true){
if((i__20768_21136 < count__20767_21135)){
var map__20773_21137 = chunk__20766_21134.cljs$core$IIndexed$_nth$arity$2(null,i__20768_21136);
var map__20773_21138__$1 = cljs.core.__destructure_map(map__20773_21137);
var w_21139 = map__20773_21138__$1;
var msg_21140__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20773_21138__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20773_21138__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20773_21138__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20773_21138__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21143)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21141),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21142),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21140__$1)].join(''));


var G__21144 = seq__20765_21133;
var G__21145 = chunk__20766_21134;
var G__21146 = count__20767_21135;
var G__21147 = (i__20768_21136 + (1));
seq__20765_21133 = G__21144;
chunk__20766_21134 = G__21145;
count__20767_21135 = G__21146;
i__20768_21136 = G__21147;
continue;
} else {
var temp__5804__auto___21148 = cljs.core.seq(seq__20765_21133);
if(temp__5804__auto___21148){
var seq__20765_21149__$1 = temp__5804__auto___21148;
if(cljs.core.chunked_seq_QMARK_(seq__20765_21149__$1)){
var c__5568__auto___21150 = cljs.core.chunk_first(seq__20765_21149__$1);
var G__21151 = cljs.core.chunk_rest(seq__20765_21149__$1);
var G__21152 = c__5568__auto___21150;
var G__21153 = cljs.core.count(c__5568__auto___21150);
var G__21154 = (0);
seq__20765_21133 = G__21151;
chunk__20766_21134 = G__21152;
count__20767_21135 = G__21153;
i__20768_21136 = G__21154;
continue;
} else {
var map__20779_21155 = cljs.core.first(seq__20765_21149__$1);
var map__20779_21156__$1 = cljs.core.__destructure_map(map__20779_21155);
var w_21157 = map__20779_21156__$1;
var msg_21158__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779_21156__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779_21156__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779_21156__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779_21156__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21161)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21159),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21160),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21158__$1)].join(''));


var G__21162 = cljs.core.next(seq__20765_21149__$1);
var G__21163 = null;
var G__21164 = (0);
var G__21165 = (0);
seq__20765_21133 = G__21162;
chunk__20766_21134 = G__21163;
count__20767_21135 = G__21164;
i__20768_21136 = G__21165;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20730_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20730_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20786){
var map__20787 = p__20786;
var map__20787__$1 = cljs.core.__destructure_map(map__20787);
var msg = map__20787__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20788 = cljs.core.seq(updates);
var chunk__20790 = null;
var count__20791 = (0);
var i__20792 = (0);
while(true){
if((i__20792 < count__20791)){
var path = chunk__20790.cljs$core$IIndexed$_nth$arity$2(null,i__20792);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20928_21170 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20932_21171 = null;
var count__20933_21172 = (0);
var i__20934_21173 = (0);
while(true){
if((i__20934_21173 < count__20933_21172)){
var node_21174 = chunk__20932_21171.cljs$core$IIndexed$_nth$arity$2(null,i__20934_21173);
if(cljs.core.not(node_21174.shadow$old)){
var path_match_21175 = shadow.cljs.devtools.client.browser.match_paths(node_21174.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21175)){
var new_link_21176 = (function (){var G__20969 = node_21174.cloneNode(true);
G__20969.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21175),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20969;
})();
(node_21174.shadow$old = true);

(new_link_21176.onload = ((function (seq__20928_21170,chunk__20932_21171,count__20933_21172,i__20934_21173,seq__20788,chunk__20790,count__20791,i__20792,new_link_21176,path_match_21175,node_21174,path,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__20970_21177 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20972_21178 = null;
var count__20973_21179 = (0);
var i__20974_21180 = (0);
while(true){
if((i__20974_21180 < count__20973_21179)){
var map__20978_21181 = chunk__20972_21178.cljs$core$IIndexed$_nth$arity$2(null,i__20974_21180);
var map__20978_21182__$1 = cljs.core.__destructure_map(map__20978_21181);
var task_21183 = map__20978_21182__$1;
var fn_str_21184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978_21182__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978_21182__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21186 = goog.getObjectByName(fn_str_21184,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21185)].join(''));

(fn_obj_21186.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21186.cljs$core$IFn$_invoke$arity$2(path,new_link_21176) : fn_obj_21186.call(null,path,new_link_21176));


var G__21189 = seq__20970_21177;
var G__21190 = chunk__20972_21178;
var G__21191 = count__20973_21179;
var G__21192 = (i__20974_21180 + (1));
seq__20970_21177 = G__21189;
chunk__20972_21178 = G__21190;
count__20973_21179 = G__21191;
i__20974_21180 = G__21192;
continue;
} else {
var temp__5804__auto___21193 = cljs.core.seq(seq__20970_21177);
if(temp__5804__auto___21193){
var seq__20970_21194__$1 = temp__5804__auto___21193;
if(cljs.core.chunked_seq_QMARK_(seq__20970_21194__$1)){
var c__5568__auto___21195 = cljs.core.chunk_first(seq__20970_21194__$1);
var G__21196 = cljs.core.chunk_rest(seq__20970_21194__$1);
var G__21197 = c__5568__auto___21195;
var G__21198 = cljs.core.count(c__5568__auto___21195);
var G__21199 = (0);
seq__20970_21177 = G__21196;
chunk__20972_21178 = G__21197;
count__20973_21179 = G__21198;
i__20974_21180 = G__21199;
continue;
} else {
var map__20979_21200 = cljs.core.first(seq__20970_21194__$1);
var map__20979_21201__$1 = cljs.core.__destructure_map(map__20979_21200);
var task_21202 = map__20979_21201__$1;
var fn_str_21203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20979_21201__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20979_21201__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21205 = goog.getObjectByName(fn_str_21203,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21204)].join(''));

(fn_obj_21205.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21205.cljs$core$IFn$_invoke$arity$2(path,new_link_21176) : fn_obj_21205.call(null,path,new_link_21176));


var G__21206 = cljs.core.next(seq__20970_21194__$1);
var G__21207 = null;
var G__21208 = (0);
var G__21209 = (0);
seq__20970_21177 = G__21206;
chunk__20972_21178 = G__21207;
count__20973_21179 = G__21208;
i__20974_21180 = G__21209;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21174);
});})(seq__20928_21170,chunk__20932_21171,count__20933_21172,i__20934_21173,seq__20788,chunk__20790,count__20791,i__20792,new_link_21176,path_match_21175,node_21174,path,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21175], 0));

goog.dom.insertSiblingAfter(new_link_21176,node_21174);


var G__21210 = seq__20928_21170;
var G__21211 = chunk__20932_21171;
var G__21212 = count__20933_21172;
var G__21213 = (i__20934_21173 + (1));
seq__20928_21170 = G__21210;
chunk__20932_21171 = G__21211;
count__20933_21172 = G__21212;
i__20934_21173 = G__21213;
continue;
} else {
var G__21214 = seq__20928_21170;
var G__21215 = chunk__20932_21171;
var G__21216 = count__20933_21172;
var G__21217 = (i__20934_21173 + (1));
seq__20928_21170 = G__21214;
chunk__20932_21171 = G__21215;
count__20933_21172 = G__21216;
i__20934_21173 = G__21217;
continue;
}
} else {
var G__21218 = seq__20928_21170;
var G__21219 = chunk__20932_21171;
var G__21220 = count__20933_21172;
var G__21221 = (i__20934_21173 + (1));
seq__20928_21170 = G__21218;
chunk__20932_21171 = G__21219;
count__20933_21172 = G__21220;
i__20934_21173 = G__21221;
continue;
}
} else {
var temp__5804__auto___21222 = cljs.core.seq(seq__20928_21170);
if(temp__5804__auto___21222){
var seq__20928_21223__$1 = temp__5804__auto___21222;
if(cljs.core.chunked_seq_QMARK_(seq__20928_21223__$1)){
var c__5568__auto___21224 = cljs.core.chunk_first(seq__20928_21223__$1);
var G__21225 = cljs.core.chunk_rest(seq__20928_21223__$1);
var G__21226 = c__5568__auto___21224;
var G__21227 = cljs.core.count(c__5568__auto___21224);
var G__21228 = (0);
seq__20928_21170 = G__21225;
chunk__20932_21171 = G__21226;
count__20933_21172 = G__21227;
i__20934_21173 = G__21228;
continue;
} else {
var node_21230 = cljs.core.first(seq__20928_21223__$1);
if(cljs.core.not(node_21230.shadow$old)){
var path_match_21231 = shadow.cljs.devtools.client.browser.match_paths(node_21230.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21231)){
var new_link_21232 = (function (){var G__20980 = node_21230.cloneNode(true);
G__20980.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21231),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20980;
})();
(node_21230.shadow$old = true);

(new_link_21232.onload = ((function (seq__20928_21170,chunk__20932_21171,count__20933_21172,i__20934_21173,seq__20788,chunk__20790,count__20791,i__20792,new_link_21232,path_match_21231,node_21230,seq__20928_21223__$1,temp__5804__auto___21222,path,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__20981_21233 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20983_21234 = null;
var count__20984_21235 = (0);
var i__20985_21236 = (0);
while(true){
if((i__20985_21236 < count__20984_21235)){
var map__20989_21237 = chunk__20983_21234.cljs$core$IIndexed$_nth$arity$2(null,i__20985_21236);
var map__20989_21238__$1 = cljs.core.__destructure_map(map__20989_21237);
var task_21239 = map__20989_21238__$1;
var fn_str_21240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20989_21238__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20989_21238__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21243 = goog.getObjectByName(fn_str_21240,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21241)].join(''));

(fn_obj_21243.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21243.cljs$core$IFn$_invoke$arity$2(path,new_link_21232) : fn_obj_21243.call(null,path,new_link_21232));


var G__21246 = seq__20981_21233;
var G__21247 = chunk__20983_21234;
var G__21248 = count__20984_21235;
var G__21249 = (i__20985_21236 + (1));
seq__20981_21233 = G__21246;
chunk__20983_21234 = G__21247;
count__20984_21235 = G__21248;
i__20985_21236 = G__21249;
continue;
} else {
var temp__5804__auto___21251__$1 = cljs.core.seq(seq__20981_21233);
if(temp__5804__auto___21251__$1){
var seq__20981_21252__$1 = temp__5804__auto___21251__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20981_21252__$1)){
var c__5568__auto___21253 = cljs.core.chunk_first(seq__20981_21252__$1);
var G__21254 = cljs.core.chunk_rest(seq__20981_21252__$1);
var G__21255 = c__5568__auto___21253;
var G__21256 = cljs.core.count(c__5568__auto___21253);
var G__21257 = (0);
seq__20981_21233 = G__21254;
chunk__20983_21234 = G__21255;
count__20984_21235 = G__21256;
i__20985_21236 = G__21257;
continue;
} else {
var map__20990_21258 = cljs.core.first(seq__20981_21252__$1);
var map__20990_21259__$1 = cljs.core.__destructure_map(map__20990_21258);
var task_21260 = map__20990_21259__$1;
var fn_str_21261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20990_21259__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20990_21259__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21263 = goog.getObjectByName(fn_str_21261,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21262)].join(''));

(fn_obj_21263.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21263.cljs$core$IFn$_invoke$arity$2(path,new_link_21232) : fn_obj_21263.call(null,path,new_link_21232));


var G__21264 = cljs.core.next(seq__20981_21252__$1);
var G__21265 = null;
var G__21266 = (0);
var G__21267 = (0);
seq__20981_21233 = G__21264;
chunk__20983_21234 = G__21265;
count__20984_21235 = G__21266;
i__20985_21236 = G__21267;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21230);
});})(seq__20928_21170,chunk__20932_21171,count__20933_21172,i__20934_21173,seq__20788,chunk__20790,count__20791,i__20792,new_link_21232,path_match_21231,node_21230,seq__20928_21223__$1,temp__5804__auto___21222,path,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21231], 0));

goog.dom.insertSiblingAfter(new_link_21232,node_21230);


var G__21271 = cljs.core.next(seq__20928_21223__$1);
var G__21272 = null;
var G__21273 = (0);
var G__21274 = (0);
seq__20928_21170 = G__21271;
chunk__20932_21171 = G__21272;
count__20933_21172 = G__21273;
i__20934_21173 = G__21274;
continue;
} else {
var G__21275 = cljs.core.next(seq__20928_21223__$1);
var G__21276 = null;
var G__21277 = (0);
var G__21278 = (0);
seq__20928_21170 = G__21275;
chunk__20932_21171 = G__21276;
count__20933_21172 = G__21277;
i__20934_21173 = G__21278;
continue;
}
} else {
var G__21279 = cljs.core.next(seq__20928_21223__$1);
var G__21280 = null;
var G__21281 = (0);
var G__21282 = (0);
seq__20928_21170 = G__21279;
chunk__20932_21171 = G__21280;
count__20933_21172 = G__21281;
i__20934_21173 = G__21282;
continue;
}
}
} else {
}
}
break;
}


var G__21283 = seq__20788;
var G__21284 = chunk__20790;
var G__21285 = count__20791;
var G__21286 = (i__20792 + (1));
seq__20788 = G__21283;
chunk__20790 = G__21284;
count__20791 = G__21285;
i__20792 = G__21286;
continue;
} else {
var G__21287 = seq__20788;
var G__21288 = chunk__20790;
var G__21289 = count__20791;
var G__21290 = (i__20792 + (1));
seq__20788 = G__21287;
chunk__20790 = G__21288;
count__20791 = G__21289;
i__20792 = G__21290;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20788);
if(temp__5804__auto__){
var seq__20788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20788__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20788__$1);
var G__21291 = cljs.core.chunk_rest(seq__20788__$1);
var G__21292 = c__5568__auto__;
var G__21293 = cljs.core.count(c__5568__auto__);
var G__21294 = (0);
seq__20788 = G__21291;
chunk__20790 = G__21292;
count__20791 = G__21293;
i__20792 = G__21294;
continue;
} else {
var path = cljs.core.first(seq__20788__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20991_21295 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20995_21296 = null;
var count__20996_21297 = (0);
var i__20997_21298 = (0);
while(true){
if((i__20997_21298 < count__20996_21297)){
var node_21299 = chunk__20995_21296.cljs$core$IIndexed$_nth$arity$2(null,i__20997_21298);
if(cljs.core.not(node_21299.shadow$old)){
var path_match_21300 = shadow.cljs.devtools.client.browser.match_paths(node_21299.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21300)){
var new_link_21301 = (function (){var G__21036 = node_21299.cloneNode(true);
G__21036.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21300),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21036;
})();
(node_21299.shadow$old = true);

(new_link_21301.onload = ((function (seq__20991_21295,chunk__20995_21296,count__20996_21297,i__20997_21298,seq__20788,chunk__20790,count__20791,i__20792,new_link_21301,path_match_21300,node_21299,path,seq__20788__$1,temp__5804__auto__,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__21037_21302 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21039_21303 = null;
var count__21040_21304 = (0);
var i__21041_21305 = (0);
while(true){
if((i__21041_21305 < count__21040_21304)){
var map__21049_21306 = chunk__21039_21303.cljs$core$IIndexed$_nth$arity$2(null,i__21041_21305);
var map__21049_21307__$1 = cljs.core.__destructure_map(map__21049_21306);
var task_21308 = map__21049_21307__$1;
var fn_str_21309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21049_21307__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21049_21307__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21311 = goog.getObjectByName(fn_str_21309,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21310)].join(''));

(fn_obj_21311.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21311.cljs$core$IFn$_invoke$arity$2(path,new_link_21301) : fn_obj_21311.call(null,path,new_link_21301));


var G__21312 = seq__21037_21302;
var G__21313 = chunk__21039_21303;
var G__21314 = count__21040_21304;
var G__21315 = (i__21041_21305 + (1));
seq__21037_21302 = G__21312;
chunk__21039_21303 = G__21313;
count__21040_21304 = G__21314;
i__21041_21305 = G__21315;
continue;
} else {
var temp__5804__auto___21316__$1 = cljs.core.seq(seq__21037_21302);
if(temp__5804__auto___21316__$1){
var seq__21037_21317__$1 = temp__5804__auto___21316__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21037_21317__$1)){
var c__5568__auto___21318 = cljs.core.chunk_first(seq__21037_21317__$1);
var G__21319 = cljs.core.chunk_rest(seq__21037_21317__$1);
var G__21320 = c__5568__auto___21318;
var G__21321 = cljs.core.count(c__5568__auto___21318);
var G__21322 = (0);
seq__21037_21302 = G__21319;
chunk__21039_21303 = G__21320;
count__21040_21304 = G__21321;
i__21041_21305 = G__21322;
continue;
} else {
var map__21050_21323 = cljs.core.first(seq__21037_21317__$1);
var map__21050_21324__$1 = cljs.core.__destructure_map(map__21050_21323);
var task_21325 = map__21050_21324__$1;
var fn_str_21326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21050_21324__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21050_21324__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21328 = goog.getObjectByName(fn_str_21326,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21327)].join(''));

(fn_obj_21328.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21328.cljs$core$IFn$_invoke$arity$2(path,new_link_21301) : fn_obj_21328.call(null,path,new_link_21301));


var G__21329 = cljs.core.next(seq__21037_21317__$1);
var G__21330 = null;
var G__21331 = (0);
var G__21332 = (0);
seq__21037_21302 = G__21329;
chunk__21039_21303 = G__21330;
count__21040_21304 = G__21331;
i__21041_21305 = G__21332;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21299);
});})(seq__20991_21295,chunk__20995_21296,count__20996_21297,i__20997_21298,seq__20788,chunk__20790,count__20791,i__20792,new_link_21301,path_match_21300,node_21299,path,seq__20788__$1,temp__5804__auto__,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21300], 0));

goog.dom.insertSiblingAfter(new_link_21301,node_21299);


var G__21333 = seq__20991_21295;
var G__21334 = chunk__20995_21296;
var G__21335 = count__20996_21297;
var G__21336 = (i__20997_21298 + (1));
seq__20991_21295 = G__21333;
chunk__20995_21296 = G__21334;
count__20996_21297 = G__21335;
i__20997_21298 = G__21336;
continue;
} else {
var G__21337 = seq__20991_21295;
var G__21338 = chunk__20995_21296;
var G__21339 = count__20996_21297;
var G__21340 = (i__20997_21298 + (1));
seq__20991_21295 = G__21337;
chunk__20995_21296 = G__21338;
count__20996_21297 = G__21339;
i__20997_21298 = G__21340;
continue;
}
} else {
var G__21341 = seq__20991_21295;
var G__21342 = chunk__20995_21296;
var G__21343 = count__20996_21297;
var G__21344 = (i__20997_21298 + (1));
seq__20991_21295 = G__21341;
chunk__20995_21296 = G__21342;
count__20996_21297 = G__21343;
i__20997_21298 = G__21344;
continue;
}
} else {
var temp__5804__auto___21345__$1 = cljs.core.seq(seq__20991_21295);
if(temp__5804__auto___21345__$1){
var seq__20991_21346__$1 = temp__5804__auto___21345__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20991_21346__$1)){
var c__5568__auto___21347 = cljs.core.chunk_first(seq__20991_21346__$1);
var G__21348 = cljs.core.chunk_rest(seq__20991_21346__$1);
var G__21349 = c__5568__auto___21347;
var G__21350 = cljs.core.count(c__5568__auto___21347);
var G__21351 = (0);
seq__20991_21295 = G__21348;
chunk__20995_21296 = G__21349;
count__20996_21297 = G__21350;
i__20997_21298 = G__21351;
continue;
} else {
var node_21353 = cljs.core.first(seq__20991_21346__$1);
if(cljs.core.not(node_21353.shadow$old)){
var path_match_21354 = shadow.cljs.devtools.client.browser.match_paths(node_21353.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21354)){
var new_link_21355 = (function (){var G__21052 = node_21353.cloneNode(true);
G__21052.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21354),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21052;
})();
(node_21353.shadow$old = true);

(new_link_21355.onload = ((function (seq__20991_21295,chunk__20995_21296,count__20996_21297,i__20997_21298,seq__20788,chunk__20790,count__20791,i__20792,new_link_21355,path_match_21354,node_21353,seq__20991_21346__$1,temp__5804__auto___21345__$1,path,seq__20788__$1,temp__5804__auto__,map__20787,map__20787__$1,msg,updates,reload_info){
return (function (e){
var seq__21053_21356 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21055_21357 = null;
var count__21056_21358 = (0);
var i__21057_21359 = (0);
while(true){
if((i__21057_21359 < count__21056_21358)){
var map__21064_21360 = chunk__21055_21357.cljs$core$IIndexed$_nth$arity$2(null,i__21057_21359);
var map__21064_21361__$1 = cljs.core.__destructure_map(map__21064_21360);
var task_21362 = map__21064_21361__$1;
var fn_str_21363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064_21361__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064_21361__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21365 = goog.getObjectByName(fn_str_21363,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21364)].join(''));

(fn_obj_21365.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21365.cljs$core$IFn$_invoke$arity$2(path,new_link_21355) : fn_obj_21365.call(null,path,new_link_21355));


var G__21366 = seq__21053_21356;
var G__21367 = chunk__21055_21357;
var G__21368 = count__21056_21358;
var G__21369 = (i__21057_21359 + (1));
seq__21053_21356 = G__21366;
chunk__21055_21357 = G__21367;
count__21056_21358 = G__21368;
i__21057_21359 = G__21369;
continue;
} else {
var temp__5804__auto___21370__$2 = cljs.core.seq(seq__21053_21356);
if(temp__5804__auto___21370__$2){
var seq__21053_21371__$1 = temp__5804__auto___21370__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21053_21371__$1)){
var c__5568__auto___21372 = cljs.core.chunk_first(seq__21053_21371__$1);
var G__21373 = cljs.core.chunk_rest(seq__21053_21371__$1);
var G__21374 = c__5568__auto___21372;
var G__21375 = cljs.core.count(c__5568__auto___21372);
var G__21376 = (0);
seq__21053_21356 = G__21373;
chunk__21055_21357 = G__21374;
count__21056_21358 = G__21375;
i__21057_21359 = G__21376;
continue;
} else {
var map__21068_21377 = cljs.core.first(seq__21053_21371__$1);
var map__21068_21378__$1 = cljs.core.__destructure_map(map__21068_21377);
var task_21379 = map__21068_21378__$1;
var fn_str_21380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21378__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21378__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21382 = goog.getObjectByName(fn_str_21380,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21381)].join(''));

(fn_obj_21382.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21382.cljs$core$IFn$_invoke$arity$2(path,new_link_21355) : fn_obj_21382.call(null,path,new_link_21355));


var G__21383 = cljs.core.next(seq__21053_21371__$1);
var G__21384 = null;
var G__21385 = (0);
var G__21386 = (0);
seq__21053_21356 = G__21383;
chunk__21055_21357 = G__21384;
count__21056_21358 = G__21385;
i__21057_21359 = G__21386;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21353);
});})(seq__20991_21295,chunk__20995_21296,count__20996_21297,i__20997_21298,seq__20788,chunk__20790,count__20791,i__20792,new_link_21355,path_match_21354,node_21353,seq__20991_21346__$1,temp__5804__auto___21345__$1,path,seq__20788__$1,temp__5804__auto__,map__20787,map__20787__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21354], 0));

goog.dom.insertSiblingAfter(new_link_21355,node_21353);


var G__21388 = cljs.core.next(seq__20991_21346__$1);
var G__21389 = null;
var G__21390 = (0);
var G__21391 = (0);
seq__20991_21295 = G__21388;
chunk__20995_21296 = G__21389;
count__20996_21297 = G__21390;
i__20997_21298 = G__21391;
continue;
} else {
var G__21392 = cljs.core.next(seq__20991_21346__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__20991_21295 = G__21392;
chunk__20995_21296 = G__21393;
count__20996_21297 = G__21394;
i__20997_21298 = G__21395;
continue;
}
} else {
var G__21397 = cljs.core.next(seq__20991_21346__$1);
var G__21398 = null;
var G__21399 = (0);
var G__21400 = (0);
seq__20991_21295 = G__21397;
chunk__20995_21296 = G__21398;
count__20996_21297 = G__21399;
i__20997_21298 = G__21400;
continue;
}
}
} else {
}
}
break;
}


var G__21401 = cljs.core.next(seq__20788__$1);
var G__21402 = null;
var G__21403 = (0);
var G__21404 = (0);
seq__20788 = G__21401;
chunk__20790 = G__21402;
count__20791 = G__21403;
i__20792 = G__21404;
continue;
} else {
var G__21405 = cljs.core.next(seq__20788__$1);
var G__21406 = null;
var G__21407 = (0);
var G__21408 = (0);
seq__20788 = G__21405;
chunk__20790 = G__21406;
count__20791 = G__21407;
i__20792 = G__21408;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21069){
var map__21070 = p__21069;
var map__21070__$1 = cljs.core.__destructure_map(map__21070);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21070__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21075){
var map__21076 = p__21075;
var map__21076__$1 = cljs.core.__destructure_map(map__21076);
var _ = map__21076__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21077,done,error){
var map__21078 = p__21077;
var map__21078__$1 = cljs.core.__destructure_map(map__21078);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21078__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21079,done,error){
var map__21080 = p__21079;
var map__21080__$1 = cljs.core.__destructure_map(map__21080);
var msg = map__21080__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21083){
var map__21084 = p__21083;
var map__21084__$1 = cljs.core.__destructure_map(map__21084);
var src = map__21084__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21085 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21085) : done.call(null,G__21085));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21086){
var map__21087 = p__21086;
var map__21087__$1 = cljs.core.__destructure_map(map__21087);
var msg__$1 = map__21087__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21088){var ex = e21088;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21089){
var map__21090 = p__21089;
var map__21090__$1 = cljs.core.__destructure_map(map__21090);
var env = map__21090__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21091){
var map__21092 = p__21091;
var map__21092__$1 = cljs.core.__destructure_map(map__21092);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21092__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21092__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21093){
var map__21094 = p__21093;
var map__21094__$1 = cljs.core.__destructure_map(map__21094);
var svc = map__21094__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
