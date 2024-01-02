goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62005 = cljs.core.get_global_hierarchy;
return (fexpr__62005.cljs$core$IFn$_invoke$arity$0 ? fexpr__62005.cljs$core$IFn$_invoke$arity$0() : fexpr__62005.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__62006.cljs$core$IFn$_invoke$arity$1 ? fexpr__62006.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__62006.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62014 = cljs.core.get_global_hierarchy;
return (fexpr__62014.cljs$core$IFn$_invoke$arity$0 ? fexpr__62014.cljs$core$IFn$_invoke$arity$0() : fexpr__62014.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__62015 = cljs.core.get_global_hierarchy;
return (fexpr__62015.cljs$core$IFn$_invoke$arity$0 ? fexpr__62015.cljs$core$IFn$_invoke$arity$0() : fexpr__62015.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__62046 = null;
var G__62046__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__62018.cljs$core$IFn$_invoke$arity$2 ? fexpr__62018.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__62018.call(null,ref,f));
});
var G__62046__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__62019.cljs$core$IFn$_invoke$arity$3 ? fexpr__62019.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__62019.call(null,ref,f,a1));
});
var G__62046__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__62023.cljs$core$IFn$_invoke$arity$4 ? fexpr__62023.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__62023.call(null,ref,f,a1,a2));
});
var G__62046__5 = (function() { 
var G__62051__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__62051 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__62052__i = 0, G__62052__a = new Array(arguments.length -  4);
while (G__62052__i < G__62052__a.length) {G__62052__a[G__62052__i] = arguments[G__62052__i + 4]; ++G__62052__i;}
  args = new cljs.core.IndexedSeq(G__62052__a,0,null);
} 
return G__62051__delegate.call(this,ref,f,a1,a2,args);};
G__62051.cljs$lang$maxFixedArity = 4;
G__62051.cljs$lang$applyTo = (function (arglist__62053){
var ref = cljs.core.first(arglist__62053);
arglist__62053 = cljs.core.next(arglist__62053);
var f = cljs.core.first(arglist__62053);
arglist__62053 = cljs.core.next(arglist__62053);
var a1 = cljs.core.first(arglist__62053);
arglist__62053 = cljs.core.next(arglist__62053);
var a2 = cljs.core.first(arglist__62053);
var args = cljs.core.rest(arglist__62053);
return G__62051__delegate(ref,f,a1,a2,args);
});
G__62051.cljs$core$IFn$_invoke$arity$variadic = G__62051__delegate;
return G__62051;
})()
;
G__62046 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__62046__2.call(this,ref,f);
case 3:
return G__62046__3.call(this,ref,f,a1);
case 4:
return G__62046__4.call(this,ref,f,a1,a2);
default:
var G__62054 = null;
if (arguments.length > 4) {
var G__62055__i = 0, G__62055__a = new Array(arguments.length -  4);
while (G__62055__i < G__62055__a.length) {G__62055__a[G__62055__i] = arguments[G__62055__i + 4]; ++G__62055__i;}
G__62054 = new cljs.core.IndexedSeq(G__62055__a,0,null);
}
return G__62046__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__62054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62046.cljs$lang$maxFixedArity = 4;
G__62046.cljs$lang$applyTo = G__62046__5.cljs$lang$applyTo;
G__62046.cljs$core$IFn$_invoke$arity$2 = G__62046__2;
G__62046.cljs$core$IFn$_invoke$arity$3 = G__62046__3;
G__62046.cljs$core$IFn$_invoke$arity$4 = G__62046__4;
G__62046.cljs$core$IFn$_invoke$arity$variadic = G__62046__5.cljs$core$IFn$_invoke$arity$variadic;
return G__62046;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__62028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__62028.cljs$core$IFn$_invoke$arity$2 ? fexpr__62028.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__62028.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__62056__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__62056 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__62057__i = 0, G__62057__a = new Array(arguments.length -  2);
while (G__62057__i < G__62057__a.length) {G__62057__a[G__62057__i] = arguments[G__62057__i + 2]; ++G__62057__i;}
  args = new cljs.core.IndexedSeq(G__62057__a,0,null);
} 
return G__62056__delegate.call(this,ref,f,args);};
G__62056.cljs$lang$maxFixedArity = 2;
G__62056.cljs$lang$applyTo = (function (arglist__62058){
var ref = cljs.core.first(arglist__62058);
arglist__62058 = cljs.core.next(arglist__62058);
var f = cljs.core.first(arglist__62058);
var args = cljs.core.rest(arglist__62058);
return G__62056__delegate(ref,f,args);
});
G__62056.cljs$core$IFn$_invoke$arity$variadic = G__62056__delegate;
return G__62056;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62059 = arguments.length;
var i__5770__auto___62060 = (0);
while(true){
if((i__5770__auto___62060 < len__5769__auto___62059)){
args__5775__auto__.push((arguments[i__5770__auto___62060]));

var G__62061 = (i__5770__auto___62060 + (1));
i__5770__auto___62060 = G__62061;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq62030){
var G__62031 = cljs.core.first(seq62030);
var seq62030__$1 = cljs.core.next(seq62030);
var G__62032 = cljs.core.first(seq62030__$1);
var seq62030__$2 = cljs.core.next(seq62030__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62031,G__62032,seq62030__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
