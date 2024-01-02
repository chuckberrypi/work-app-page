goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23961 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23962 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23962);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24099 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24099)){
var new_db_24100 = temp__5804__auto___24099;
var fexpr__23965_24101 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23965_24101.cljs$core$IFn$_invoke$arity$1 ? fexpr__23965_24101.cljs$core$IFn$_invoke$arity$1(new_db_24100) : fexpr__23965_24101.call(null,new_db_24100));
} else {
}

var seq__23966 = cljs.core.seq(effects_without_db);
var chunk__23967 = null;
var count__23968 = (0);
var i__23969 = (0);
while(true){
if((i__23969 < count__23968)){
var vec__24002 = chunk__23967.cljs$core$IIndexed$_nth$arity$2(null,i__23969);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24002,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24002,(1),null);
var temp__5802__auto___24104 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24104)){
var effect_fn_24105 = temp__5802__auto___24104;
(effect_fn_24105.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24105.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24105.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24106 = seq__23966;
var G__24107 = chunk__23967;
var G__24108 = count__23968;
var G__24109 = (i__23969 + (1));
seq__23966 = G__24106;
chunk__23967 = G__24107;
count__23968 = G__24108;
i__23969 = G__24109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23966);
if(temp__5804__auto__){
var seq__23966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23966__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23966__$1);
var G__24111 = cljs.core.chunk_rest(seq__23966__$1);
var G__24112 = c__5568__auto__;
var G__24113 = cljs.core.count(c__5568__auto__);
var G__24114 = (0);
seq__23966 = G__24111;
chunk__23967 = G__24112;
count__23968 = G__24113;
i__23969 = G__24114;
continue;
} else {
var vec__24021 = cljs.core.first(seq__23966__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(1),null);
var temp__5802__auto___24115 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24115)){
var effect_fn_24116 = temp__5802__auto___24115;
(effect_fn_24116.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24116.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24116.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24117 = cljs.core.next(seq__23966__$1);
var G__24118 = null;
var G__24119 = (0);
var G__24120 = (0);
seq__23966 = G__24117;
chunk__23967 = G__24118;
count__23968 = G__24119;
i__23969 = G__24120;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22162__auto___24121 = re_frame.interop.now();
var duration__22163__auto___24122 = (end__22162__auto___24121 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22163__auto___24122,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22162__auto___24121);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23961);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24123 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24123)){
var new_db_24126 = temp__5804__auto___24123;
var fexpr__24024_24127 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24024_24127.cljs$core$IFn$_invoke$arity$1 ? fexpr__24024_24127.cljs$core$IFn$_invoke$arity$1(new_db_24126) : fexpr__24024_24127.call(null,new_db_24126));
} else {
}

var seq__24026 = cljs.core.seq(effects_without_db);
var chunk__24027 = null;
var count__24028 = (0);
var i__24029 = (0);
while(true){
if((i__24029 < count__24028)){
var vec__24042 = chunk__24027.cljs$core$IIndexed$_nth$arity$2(null,i__24029);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24042,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24042,(1),null);
var temp__5802__auto___24128 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24128)){
var effect_fn_24129 = temp__5802__auto___24128;
(effect_fn_24129.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24129.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24129.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24130 = seq__24026;
var G__24131 = chunk__24027;
var G__24132 = count__24028;
var G__24133 = (i__24029 + (1));
seq__24026 = G__24130;
chunk__24027 = G__24131;
count__24028 = G__24132;
i__24029 = G__24133;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24026);
if(temp__5804__auto__){
var seq__24026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24026__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24026__$1);
var G__24134 = cljs.core.chunk_rest(seq__24026__$1);
var G__24135 = c__5568__auto__;
var G__24136 = cljs.core.count(c__5568__auto__);
var G__24137 = (0);
seq__24026 = G__24134;
chunk__24027 = G__24135;
count__24028 = G__24136;
i__24029 = G__24137;
continue;
} else {
var vec__24049 = cljs.core.first(seq__24026__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24049,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24049,(1),null);
var temp__5802__auto___24138 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24138)){
var effect_fn_24139 = temp__5802__auto___24138;
(effect_fn_24139.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24139.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24139.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24140 = cljs.core.next(seq__24026__$1);
var G__24141 = null;
var G__24142 = (0);
var G__24143 = (0);
seq__24026 = G__24140;
chunk__24027 = G__24141;
count__24028 = G__24142;
i__24029 = G__24143;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24052){
var map__24053 = p__24052;
var map__24053__$1 = cljs.core.__destructure_map(map__24053);
var effect = map__24053__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24053__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24053__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24058 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24059 = null;
var count__24060 = (0);
var i__24061 = (0);
while(true){
if((i__24061 < count__24060)){
var effect = chunk__24059.cljs$core$IIndexed$_nth$arity$2(null,i__24061);
re_frame.fx.dispatch_later(effect);


var G__24144 = seq__24058;
var G__24145 = chunk__24059;
var G__24146 = count__24060;
var G__24147 = (i__24061 + (1));
seq__24058 = G__24144;
chunk__24059 = G__24145;
count__24060 = G__24146;
i__24061 = G__24147;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24058);
if(temp__5804__auto__){
var seq__24058__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24058__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24058__$1);
var G__24148 = cljs.core.chunk_rest(seq__24058__$1);
var G__24149 = c__5568__auto__;
var G__24150 = cljs.core.count(c__5568__auto__);
var G__24151 = (0);
seq__24058 = G__24148;
chunk__24059 = G__24149;
count__24060 = G__24150;
i__24061 = G__24151;
continue;
} else {
var effect = cljs.core.first(seq__24058__$1);
re_frame.fx.dispatch_later(effect);


var G__24152 = cljs.core.next(seq__24058__$1);
var G__24153 = null;
var G__24154 = (0);
var G__24155 = (0);
seq__24058 = G__24152;
chunk__24059 = G__24153;
count__24060 = G__24154;
i__24061 = G__24155;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24067 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24068 = null;
var count__24069 = (0);
var i__24070 = (0);
while(true){
if((i__24070 < count__24069)){
var vec__24078 = chunk__24068.cljs$core$IIndexed$_nth$arity$2(null,i__24070);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24078,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24078,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24159 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24159)){
var effect_fn_24160 = temp__5802__auto___24159;
(effect_fn_24160.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24160.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24160.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24162 = seq__24067;
var G__24163 = chunk__24068;
var G__24164 = count__24069;
var G__24165 = (i__24070 + (1));
seq__24067 = G__24162;
chunk__24068 = G__24163;
count__24069 = G__24164;
i__24070 = G__24165;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24067);
if(temp__5804__auto__){
var seq__24067__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24067__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24067__$1);
var G__24166 = cljs.core.chunk_rest(seq__24067__$1);
var G__24167 = c__5568__auto__;
var G__24168 = cljs.core.count(c__5568__auto__);
var G__24169 = (0);
seq__24067 = G__24166;
chunk__24068 = G__24167;
count__24069 = G__24168;
i__24070 = G__24169;
continue;
} else {
var vec__24087 = cljs.core.first(seq__24067__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24087,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24087,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24170 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24170)){
var effect_fn_24171 = temp__5802__auto___24170;
(effect_fn_24171.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24171.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24171.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24172 = cljs.core.next(seq__24067__$1);
var G__24173 = null;
var G__24174 = (0);
var G__24175 = (0);
seq__24067 = G__24172;
chunk__24068 = G__24173;
count__24069 = G__24174;
i__24070 = G__24175;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24090 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24091 = null;
var count__24092 = (0);
var i__24093 = (0);
while(true){
if((i__24093 < count__24092)){
var event = chunk__24091.cljs$core$IIndexed$_nth$arity$2(null,i__24093);
re_frame.router.dispatch(event);


var G__24176 = seq__24090;
var G__24177 = chunk__24091;
var G__24178 = count__24092;
var G__24179 = (i__24093 + (1));
seq__24090 = G__24176;
chunk__24091 = G__24177;
count__24092 = G__24178;
i__24093 = G__24179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24090);
if(temp__5804__auto__){
var seq__24090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24090__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24090__$1);
var G__24180 = cljs.core.chunk_rest(seq__24090__$1);
var G__24181 = c__5568__auto__;
var G__24182 = cljs.core.count(c__5568__auto__);
var G__24183 = (0);
seq__24090 = G__24180;
chunk__24091 = G__24181;
count__24092 = G__24182;
i__24093 = G__24183;
continue;
} else {
var event = cljs.core.first(seq__24090__$1);
re_frame.router.dispatch(event);


var G__24184 = cljs.core.next(seq__24090__$1);
var G__24185 = null;
var G__24186 = (0);
var G__24187 = (0);
seq__24090 = G__24184;
chunk__24091 = G__24185;
count__24092 = G__24186;
i__24093 = G__24187;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24094 = cljs.core.seq(value);
var chunk__24095 = null;
var count__24096 = (0);
var i__24097 = (0);
while(true){
if((i__24097 < count__24096)){
var event = chunk__24095.cljs$core$IIndexed$_nth$arity$2(null,i__24097);
clear_event(event);


var G__24188 = seq__24094;
var G__24189 = chunk__24095;
var G__24190 = count__24096;
var G__24191 = (i__24097 + (1));
seq__24094 = G__24188;
chunk__24095 = G__24189;
count__24096 = G__24190;
i__24097 = G__24191;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24094);
if(temp__5804__auto__){
var seq__24094__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24094__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24094__$1);
var G__24192 = cljs.core.chunk_rest(seq__24094__$1);
var G__24193 = c__5568__auto__;
var G__24194 = cljs.core.count(c__5568__auto__);
var G__24195 = (0);
seq__24094 = G__24192;
chunk__24095 = G__24193;
count__24096 = G__24194;
i__24097 = G__24195;
continue;
} else {
var event = cljs.core.first(seq__24094__$1);
clear_event(event);


var G__24196 = cljs.core.next(seq__24094__$1);
var G__24197 = null;
var G__24198 = (0);
var G__24199 = (0);
seq__24094 = G__24196;
chunk__24095 = G__24197;
count__24096 = G__24198;
i__24097 = G__24199;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
