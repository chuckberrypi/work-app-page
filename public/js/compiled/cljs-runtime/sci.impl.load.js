goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__61934){
var vec__61935 = p__61934;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61935,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (k instanceof cljs.core.Symbol);
if(and__5043__auto__){
var and__5043__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__61941){
var map__61946 = p__61941;
var map__61946__$1 = cljs.core.__destructure_map(map__61946);
var _parsed_libspec = map__61946__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__61947 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61947,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___62102 = (function (){var G__61950 = the_loaded_ns;
var G__61950__$1 = (((G__61950 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__61950));
var G__61950__$2 = (((G__61950__$1 == null))?null:cljs.core.meta(G__61950__$1));
if((G__61950__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__61950__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___62102)){
var on_loaded_62104 = temp__5804__auto___62102;
var G__61951_62105 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_62104.cljs$core$IFn$_invoke$arity$1 ? on_loaded_62104.cljs$core$IFn$_invoke$arity$1(G__61951_62105) : on_loaded_62104.call(null,G__61951_62105));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var map__61955 = opts;
var map__61955__$1 = cljs.core.__destructure_map(map__61955);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = reload_all;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return uberscript;
}
}
}
})();
var temp__5802__auto___62108 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5802__auto___62108)){
var the_loaded_ns_62109 = temp__5802__auto___62108;
var loading_62110 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5043__auto__ = loading_62110;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_62110.indexOf(lib))));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_62110,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_62109,lib,opts));
}
} else {
var temp__5802__auto___62113__$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___62113__$1)){
var load_fn_62114 = temp__5802__auto___62113__$1;
var temp__5802__auto___62115__$2 = (function (){var G__61956 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_62114.cljs$core$IFn$_invoke$arity$1 ? load_fn_62114.cljs$core$IFn$_invoke$arity$1(G__61956) : load_fn_62114.call(null,G__61956));
})();
if(cljs.core.truth_(temp__5802__auto___62115__$2)){
var map__61957_62116 = temp__5802__auto___62115__$2;
var map__61957_62117__$1 = cljs.core.__destructure_map(map__61957_62116);
var file_62118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61957_62117__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_62119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61957_62117__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_62121__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_62118]));

try{var fexpr__61959_62122 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__61959_62122.cljs$core$IFn$_invoke$arity$2 ? fexpr__61959_62122.cljs$core$IFn$_invoke$arity$2(ctx_62121__$1,source_62119) : fexpr__61959_62122.call(null,ctx_62121__$1,source_62119));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e61958){if((e61958 instanceof Error)){
var e_62123 = e61958;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_62123;
} else {
throw e61958;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5045__auto___62124 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5045__auto___62124)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62130 = arguments.length;
var i__5770__auto___62131 = (0);
while(true){
if((i__5770__auto___62131 < len__5769__auto___62130)){
args__5775__auto__.push((arguments[i__5770__auto___62131]));

var G__62132 = (i__5770__auto___62131 + (1));
i__5770__auto___62131 = G__62132;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5043__auto__ = prefix;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq61960){
var G__61961 = cljs.core.first(seq61960);
var seq61960__$1 = cljs.core.next(seq61960);
var G__61962 = cljs.core.first(seq61960__$1);
var seq61960__$2 = cljs.core.next(seq61960__$1);
var G__61963 = cljs.core.first(seq61960__$2);
var seq61960__$3 = cljs.core.next(seq61960__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61961,G__61962,G__61963,seq61960__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_62139 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_62140 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_62139,flags));
if(unsupported_62140){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_62140)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__61975 = cljs.core.seq(args_STAR___$1);
var chunk__61976 = null;
var count__61977 = (0);
var i__61978 = (0);
while(true){
if((i__61978 < count__61977)){
var arg = chunk__61976.cljs$core$IIndexed$_nth$arity$2(null,i__61978);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__62007_62144 = arg;
var seq__62008_62145 = cljs.core.seq(vec__62007_62144);
var first__62009_62146 = cljs.core.first(seq__62008_62145);
var seq__62008_62147__$1 = cljs.core.next(seq__62008_62145);
var prefix_62148 = first__62009_62146;
var args_STAR__62149__$2 = seq__62008_62147__$1;
if((prefix_62148 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__62010_62152 = cljs.core.seq(args_STAR__62149__$2);
var chunk__62011_62153 = null;
var count__62012_62154 = (0);
var i__62013_62155 = (0);
while(true){
if((i__62013_62155 < count__62012_62154)){
var arg_62156__$1 = chunk__62011_62153.cljs$core$IIndexed$_nth$arity$2(null,i__62013_62155);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62148,sci.impl.load.prependss(arg_62156__$1,opts));


var G__62157 = seq__62010_62152;
var G__62158 = chunk__62011_62153;
var G__62159 = count__62012_62154;
var G__62160 = (i__62013_62155 + (1));
seq__62010_62152 = G__62157;
chunk__62011_62153 = G__62158;
count__62012_62154 = G__62159;
i__62013_62155 = G__62160;
continue;
} else {
var temp__5804__auto___62161 = cljs.core.seq(seq__62010_62152);
if(temp__5804__auto___62161){
var seq__62010_62162__$1 = temp__5804__auto___62161;
if(cljs.core.chunked_seq_QMARK_(seq__62010_62162__$1)){
var c__5568__auto___62163 = cljs.core.chunk_first(seq__62010_62162__$1);
var G__62164 = cljs.core.chunk_rest(seq__62010_62162__$1);
var G__62165 = c__5568__auto___62163;
var G__62166 = cljs.core.count(c__5568__auto___62163);
var G__62167 = (0);
seq__62010_62152 = G__62164;
chunk__62011_62153 = G__62165;
count__62012_62154 = G__62166;
i__62013_62155 = G__62167;
continue;
} else {
var arg_62168__$1 = cljs.core.first(seq__62010_62162__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62148,sci.impl.load.prependss(arg_62168__$1,opts));


var G__62169 = cljs.core.next(seq__62010_62162__$1);
var G__62170 = null;
var G__62171 = (0);
var G__62172 = (0);
seq__62010_62152 = G__62169;
chunk__62011_62153 = G__62170;
count__62012_62154 = G__62171;
i__62013_62155 = G__62172;
continue;
}
} else {
}
}
break;
}
}


var G__62174 = seq__61975;
var G__62175 = chunk__61976;
var G__62176 = count__61977;
var G__62177 = (i__61978 + (1));
seq__61975 = G__62174;
chunk__61976 = G__62175;
count__61977 = G__62176;
i__61978 = G__62177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61975);
if(temp__5804__auto__){
var seq__61975__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61975__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__61975__$1);
var G__62179 = cljs.core.chunk_rest(seq__61975__$1);
var G__62180 = c__5568__auto__;
var G__62181 = cljs.core.count(c__5568__auto__);
var G__62182 = (0);
seq__61975 = G__62179;
chunk__61976 = G__62180;
count__61977 = G__62181;
i__61978 = G__62182;
continue;
} else {
var arg = cljs.core.first(seq__61975__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__62020_62183 = arg;
var seq__62021_62184 = cljs.core.seq(vec__62020_62183);
var first__62022_62185 = cljs.core.first(seq__62021_62184);
var seq__62021_62186__$1 = cljs.core.next(seq__62021_62184);
var prefix_62187 = first__62022_62185;
var args_STAR__62188__$2 = seq__62021_62186__$1;
if((prefix_62187 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__62024_62192 = cljs.core.seq(args_STAR__62188__$2);
var chunk__62025_62193 = null;
var count__62026_62194 = (0);
var i__62027_62195 = (0);
while(true){
if((i__62027_62195 < count__62026_62194)){
var arg_62196__$1 = chunk__62025_62193.cljs$core$IIndexed$_nth$arity$2(null,i__62027_62195);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62187,sci.impl.load.prependss(arg_62196__$1,opts));


var G__62198 = seq__62024_62192;
var G__62199 = chunk__62025_62193;
var G__62200 = count__62026_62194;
var G__62201 = (i__62027_62195 + (1));
seq__62024_62192 = G__62198;
chunk__62025_62193 = G__62199;
count__62026_62194 = G__62200;
i__62027_62195 = G__62201;
continue;
} else {
var temp__5804__auto___62205__$1 = cljs.core.seq(seq__62024_62192);
if(temp__5804__auto___62205__$1){
var seq__62024_62206__$1 = temp__5804__auto___62205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62024_62206__$1)){
var c__5568__auto___62207 = cljs.core.chunk_first(seq__62024_62206__$1);
var G__62208 = cljs.core.chunk_rest(seq__62024_62206__$1);
var G__62209 = c__5568__auto___62207;
var G__62210 = cljs.core.count(c__5568__auto___62207);
var G__62211 = (0);
seq__62024_62192 = G__62208;
chunk__62025_62193 = G__62209;
count__62026_62194 = G__62210;
i__62027_62195 = G__62211;
continue;
} else {
var arg_62212__$1 = cljs.core.first(seq__62024_62206__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_62187,sci.impl.load.prependss(arg_62212__$1,opts));


var G__62213 = cljs.core.next(seq__62024_62206__$1);
var G__62214 = null;
var G__62215 = (0);
var G__62216 = (0);
seq__62024_62192 = G__62213;
chunk__62025_62193 = G__62214;
count__62026_62194 = G__62215;
i__62027_62195 = G__62216;
continue;
}
} else {
}
}
break;
}
}


var G__62217 = cljs.core.next(seq__61975__$1);
var G__62218 = null;
var G__62219 = (0);
var G__62220 = (0);
seq__61975 = G__62217;
chunk__61976 = G__62218;
count__61977 = G__62219;
i__61978 = G__62220;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62221 = arguments.length;
var i__5770__auto___62222 = (0);
while(true){
if((i__5770__auto___62222 < len__5769__auto___62221)){
args__5775__auto__.push((arguments[i__5770__auto___62222]));

var G__62223 = (i__5770__auto___62222 + (1));
i__5770__auto___62222 = G__62223;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq62034){
var G__62035 = cljs.core.first(seq62034);
var seq62034__$1 = cljs.core.next(seq62034);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62035,seq62034__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62225 = arguments.length;
var i__5770__auto___62226 = (0);
while(true){
if((i__5770__auto___62226 < len__5769__auto___62225)){
args__5775__auto__.push((arguments[i__5770__auto___62226]));

var G__62227 = (i__5770__auto___62226 + (1));
i__5770__auto___62226 = G__62227;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq62037){
var G__62038 = cljs.core.first(seq62037);
var seq62037__$1 = cljs.core.next(seq62037);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62038,seq62037__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__62041 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62041,(1),null);
var G__62044_62228 = k;
var G__62044_62229__$1 = (((G__62044_62228 instanceof cljs.core.Keyword))?G__62044_62228.fqn:null);
switch (G__62044_62229__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym){
return (function (acc,p__62047){
var vec__62048 = p__62047;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62048,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62048,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__62044_62228,G__62044_62229__$1,vec__62041,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62044_62229__$1)].join('')));

}

var G__62236 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__62236;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = to_do;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5043__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62240 = arguments.length;
var i__5770__auto___62241 = (0);
while(true){
if((i__5770__auto___62241 < len__5769__auto___62240)){
args__5775__auto__.push((arguments[i__5770__auto___62241]));

var G__62242 = (i__5770__auto___62241 + (1));
i__5770__auto___62241 = G__62242;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq62077){
var G__62078 = cljs.core.first(seq62077);
var seq62077__$1 = cljs.core.next(seq62077);
var G__62079 = cljs.core.first(seq62077__$1);
var seq62077__$2 = cljs.core.next(seq62077__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62078,G__62079,seq62077__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
