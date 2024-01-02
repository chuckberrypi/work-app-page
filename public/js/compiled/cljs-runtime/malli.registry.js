goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_31520 = (function (this$,type){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.registry._schema[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5394__auto__.call(null,this$,type));
} else {
var m__5392__auto__ = (malli.registry._schema["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5392__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_31520(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_31521 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (malli.registry._schemas[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (malli.registry._schemas["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_31521(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31432 = (function (m,fm,meta31433){
this.m = m;
this.fm = fm;
this.meta31433 = meta31433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31434,meta31433__$1){
var self__ = this;
var _31434__$1 = this;
return (new malli.registry.t_malli$registry31432(self__.m,self__.fm,meta31433__$1));
}));

(malli.registry.t_malli$registry31432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31434){
var self__ = this;
var _31434__$1 = this;
return self__.meta31433;
}));

(malli.registry.t_malli$registry31432.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31432.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry31432.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry31432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta31433","meta31433",-295340531,null)], null);
}));

(malli.registry.t_malli$registry31432.cljs$lang$type = true);

(malli.registry.t_malli$registry31432.cljs$lang$ctorStr = "malli.registry/t_malli$registry31432");

(malli.registry.t_malli$registry31432.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31432");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31432.
 */
malli.registry.__GT_t_malli$registry31432 = (function malli$registry$__GT_t_malli$registry31432(m,fm,meta31433){
return (new malli.registry.t_malli$registry31432(m,fm,meta31433));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry31432(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31440 = (function (m,meta31441){
this.m = m;
this.meta31441 = meta31441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31442,meta31441__$1){
var self__ = this;
var _31442__$1 = this;
return (new malli.registry.t_malli$registry31440(self__.m,meta31441__$1));
}));

(malli.registry.t_malli$registry31440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31442){
var self__ = this;
var _31442__$1 = this;
return self__.meta31441;
}));

(malli.registry.t_malli$registry31440.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31440.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry31440.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry31440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta31441","meta31441",-1192371797,null)], null);
}));

(malli.registry.t_malli$registry31440.cljs$lang$type = true);

(malli.registry.t_malli$registry31440.cljs$lang$ctorStr = "malli.registry/t_malli$registry31440");

(malli.registry.t_malli$registry31440.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31440");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31440.
 */
malli.registry.__GT_t_malli$registry31440 = (function malli$registry$__GT_t_malli$registry31440(m,meta31441){
return (new malli.registry.t_malli$registry31440(m,meta31441));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry31440(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31445 = (function (meta31446){
this.meta31446 = meta31446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31447,meta31446__$1){
var self__ = this;
var _31447__$1 = this;
return (new malli.registry.t_malli$registry31445(meta31446__$1));
}));

(malli.registry.t_malli$registry31445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31447){
var self__ = this;
var _31447__$1 = this;
return self__.meta31446;
}));

(malli.registry.t_malli$registry31445.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31445.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry31445.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry31445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31446","meta31446",573102029,null)], null);
}));

(malli.registry.t_malli$registry31445.cljs$lang$type = true);

(malli.registry.t_malli$registry31445.cljs$lang$ctorStr = "malli.registry/t_malli$registry31445");

(malli.registry.t_malli$registry31445.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31445");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31445.
 */
malli.registry.__GT_t_malli$registry31445 = (function malli$registry$__GT_t_malli$registry31445(meta31446){
return (new malli.registry.t_malli$registry31445(meta31446));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry31445(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31451 = (function (_QMARK_registries,registries,meta31452){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta31452 = meta31452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31453,meta31452__$1){
var self__ = this;
var _31453__$1 = this;
return (new malli.registry.t_malli$registry31451(self__._QMARK_registries,self__.registries,meta31452__$1));
}));

(malli.registry.t_malli$registry31451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31453){
var self__ = this;
var _31453__$1 = this;
return self__.meta31452;
}));

(malli.registry.t_malli$registry31451.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31451.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__31449_SHARP_){
return malli.registry._schema(p1__31449_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry31451.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry31451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta31452","meta31452",466801931,null)], null);
}));

(malli.registry.t_malli$registry31451.cljs$lang$type = true);

(malli.registry.t_malli$registry31451.cljs$lang$ctorStr = "malli.registry/t_malli$registry31451");

(malli.registry.t_malli$registry31451.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31451");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31451.
 */
malli.registry.__GT_t_malli$registry31451 = (function malli$registry$__GT_t_malli$registry31451(_QMARK_registries,registries,meta31452){
return (new malli.registry.t_malli$registry31451(_QMARK_registries,registries,meta31452));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31524 = arguments.length;
var i__5770__auto___31525 = (0);
while(true){
if((i__5770__auto___31525 < len__5769__auto___31524)){
args__5775__auto__.push((arguments[i__5770__auto___31525]));

var G__31526 = (i__5770__auto___31525 + (1));
i__5770__auto___31525 = G__31526;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry31451(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq31450){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31450));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31484 = (function (db,meta31485){
this.db = db;
this.meta31485 = meta31485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31486,meta31485__$1){
var self__ = this;
var _31486__$1 = this;
return (new malli.registry.t_malli$registry31484(self__.db,meta31485__$1));
}));

(malli.registry.t_malli$registry31484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31486){
var self__ = this;
var _31486__$1 = this;
return self__.meta31485;
}));

(malli.registry.t_malli$registry31484.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31484.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry31484.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry31484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta31485","meta31485",-2070177569,null)], null);
}));

(malli.registry.t_malli$registry31484.cljs$lang$type = true);

(malli.registry.t_malli$registry31484.cljs$lang$ctorStr = "malli.registry/t_malli$registry31484");

(malli.registry.t_malli$registry31484.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31484");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31484.
 */
malli.registry.__GT_t_malli$registry31484 = (function malli$registry$__GT_t_malli$registry31484(db,meta31485){
return (new malli.registry.t_malli$registry31484(db,meta31485));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry31484(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31494 = (function (meta31495){
this.meta31495 = meta31495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31496,meta31495__$1){
var self__ = this;
var _31496__$1 = this;
return (new malli.registry.t_malli$registry31494(meta31495__$1));
}));

(malli.registry.t_malli$registry31494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31496){
var self__ = this;
var _31496__$1 = this;
return self__.meta31495;
}));

(malli.registry.t_malli$registry31494.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31494.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry31494.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry31494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31495","meta31495",-1530575937,null)], null);
}));

(malli.registry.t_malli$registry31494.cljs$lang$type = true);

(malli.registry.t_malli$registry31494.cljs$lang$ctorStr = "malli.registry/t_malli$registry31494");

(malli.registry.t_malli$registry31494.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31494");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31494.
 */
malli.registry.__GT_t_malli$registry31494 = (function malli$registry$__GT_t_malli$registry31494(meta31495){
return (new malli.registry.t_malli$registry31494(meta31495));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry31494(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry31500 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta31501){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta31501 = meta31501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry31500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31502,meta31501__$1){
var self__ = this;
var _31502__$1 = this;
return (new malli.registry.t_malli$registry31500(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta31501__$1));
}));

(malli.registry.t_malli$registry31500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31502){
var self__ = this;
var _31502__$1 = this;
return self__.meta31501;
}));

(malli.registry.t_malli$registry31500.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry31500.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5045__auto__ = (function (){var fexpr__31504 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__31504.cljs$core$IFn$_invoke$arity$1 ? fexpr__31504.cljs$core$IFn$_invoke$arity$1(name) : fexpr__31504.call(null,name));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = (function (){var G__31505 = name;
var G__31506 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__31505,G__31506) : self__.provider.call(null,G__31505,G__31506));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry31500.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry31500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta31501","meta31501",-1263710171,null)], null);
}));

(malli.registry.t_malli$registry31500.cljs$lang$type = true);

(malli.registry.t_malli$registry31500.cljs$lang$ctorStr = "malli.registry/t_malli$registry31500");

(malli.registry.t_malli$registry31500.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"malli.registry/t_malli$registry31500");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry31500.
 */
malli.registry.__GT_t_malli$registry31500 = (function malli$registry$__GT_t_malli$registry31500(default_registry,provider,cache_STAR_,registry_STAR_,meta31501){
return (new malli.registry.t_malli$registry31500(default_registry,provider,cache_STAR_,registry_STAR_,meta31501));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry31500(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
