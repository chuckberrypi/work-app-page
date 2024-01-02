goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52997 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52999 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52999);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___53154 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___53154)){
var new_db_53155 = temp__5804__auto___53154;
var fexpr__53005_53156 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53005_53156.cljs$core$IFn$_invoke$arity$1 ? fexpr__53005_53156.cljs$core$IFn$_invoke$arity$1(new_db_53155) : fexpr__53005_53156.call(null,new_db_53155));
} else {
}

var seq__53006 = cljs.core.seq(effects_without_db);
var chunk__53007 = null;
var count__53008 = (0);
var i__53009 = (0);
while(true){
if((i__53009 < count__53008)){
var vec__53045 = chunk__53007.cljs$core$IIndexed$_nth$arity$2(null,i__53009);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(1),null);
var temp__5802__auto___53157 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___53157)){
var effect_fn_53158 = temp__5802__auto___53157;
(effect_fn_53158.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53158.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53158.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53160 = seq__53006;
var G__53161 = chunk__53007;
var G__53162 = count__53008;
var G__53163 = (i__53009 + (1));
seq__53006 = G__53160;
chunk__53007 = G__53161;
count__53008 = G__53162;
i__53009 = G__53163;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53006);
if(temp__5804__auto__){
var seq__53006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53006__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53006__$1);
var G__53165 = cljs.core.chunk_rest(seq__53006__$1);
var G__53166 = c__5568__auto__;
var G__53167 = cljs.core.count(c__5568__auto__);
var G__53168 = (0);
seq__53006 = G__53165;
chunk__53007 = G__53166;
count__53008 = G__53167;
i__53009 = G__53168;
continue;
} else {
var vec__53054 = cljs.core.first(seq__53006__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53054,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53054,(1),null);
var temp__5802__auto___53170 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___53170)){
var effect_fn_53171 = temp__5802__auto___53170;
(effect_fn_53171.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53171.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53171.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53173 = cljs.core.next(seq__53006__$1);
var G__53174 = null;
var G__53175 = (0);
var G__53176 = (0);
seq__53006 = G__53173;
chunk__53007 = G__53174;
count__53008 = G__53175;
i__53009 = G__53176;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__52621__auto___53177 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__52622__auto___53178 = (end__52621__auto___53177 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52622__auto___53178,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__52621__auto___53177);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52997);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___53179 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___53179)){
var new_db_53180 = temp__5804__auto___53179;
var fexpr__53058_53181 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53058_53181.cljs$core$IFn$_invoke$arity$1 ? fexpr__53058_53181.cljs$core$IFn$_invoke$arity$1(new_db_53180) : fexpr__53058_53181.call(null,new_db_53180));
} else {
}

var seq__53060 = cljs.core.seq(effects_without_db);
var chunk__53061 = null;
var count__53062 = (0);
var i__53063 = (0);
while(true){
if((i__53063 < count__53062)){
var vec__53080 = chunk__53061.cljs$core$IIndexed$_nth$arity$2(null,i__53063);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53080,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53080,(1),null);
var temp__5802__auto___53182 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___53182)){
var effect_fn_53183 = temp__5802__auto___53182;
(effect_fn_53183.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53183.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53183.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53184 = seq__53060;
var G__53185 = chunk__53061;
var G__53186 = count__53062;
var G__53187 = (i__53063 + (1));
seq__53060 = G__53184;
chunk__53061 = G__53185;
count__53062 = G__53186;
i__53063 = G__53187;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53060);
if(temp__5804__auto__){
var seq__53060__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53060__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53060__$1);
var G__53188 = cljs.core.chunk_rest(seq__53060__$1);
var G__53189 = c__5568__auto__;
var G__53190 = cljs.core.count(c__5568__auto__);
var G__53191 = (0);
seq__53060 = G__53188;
chunk__53061 = G__53189;
count__53062 = G__53190;
i__53063 = G__53191;
continue;
} else {
var vec__53093 = cljs.core.first(seq__53060__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53093,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53093,(1),null);
var temp__5802__auto___53192 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___53192)){
var effect_fn_53193 = temp__5802__auto___53192;
(effect_fn_53193.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53193.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53193.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53194 = cljs.core.next(seq__53060__$1);
var G__53195 = null;
var G__53196 = (0);
var G__53197 = (0);
seq__53060 = G__53194;
chunk__53061 = G__53195;
count__53062 = G__53196;
i__53063 = G__53197;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__53098){
var map__53099 = p__53098;
var map__53099__$1 = cljs.core.__destructure_map(map__53099);
var effect = map__53099__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53099__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53099__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__53101 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53102 = null;
var count__53103 = (0);
var i__53104 = (0);
while(true){
if((i__53104 < count__53103)){
var effect = chunk__53102.cljs$core$IIndexed$_nth$arity$2(null,i__53104);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__53198 = seq__53101;
var G__53199 = chunk__53102;
var G__53200 = count__53103;
var G__53201 = (i__53104 + (1));
seq__53101 = G__53198;
chunk__53102 = G__53199;
count__53103 = G__53200;
i__53104 = G__53201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53101);
if(temp__5804__auto__){
var seq__53101__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53101__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53101__$1);
var G__53202 = cljs.core.chunk_rest(seq__53101__$1);
var G__53203 = c__5568__auto__;
var G__53204 = cljs.core.count(c__5568__auto__);
var G__53205 = (0);
seq__53101 = G__53202;
chunk__53102 = G__53203;
count__53103 = G__53204;
i__53104 = G__53205;
continue;
} else {
var effect = cljs.core.first(seq__53101__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__53206 = cljs.core.next(seq__53101__$1);
var G__53207 = null;
var G__53208 = (0);
var G__53209 = (0);
seq__53101 = G__53206;
chunk__53102 = G__53207;
count__53103 = G__53208;
i__53104 = G__53209;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__53112 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53113 = null;
var count__53114 = (0);
var i__53115 = (0);
while(true){
if((i__53115 < count__53114)){
var vec__53127 = chunk__53113.cljs$core$IIndexed$_nth$arity$2(null,i__53115);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53127,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53127,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___53210 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___53210)){
var effect_fn_53211 = temp__5802__auto___53210;
(effect_fn_53211.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53211.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53211.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53212 = seq__53112;
var G__53213 = chunk__53113;
var G__53214 = count__53114;
var G__53215 = (i__53115 + (1));
seq__53112 = G__53212;
chunk__53113 = G__53213;
count__53114 = G__53214;
i__53115 = G__53215;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53112);
if(temp__5804__auto__){
var seq__53112__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53112__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53112__$1);
var G__53216 = cljs.core.chunk_rest(seq__53112__$1);
var G__53217 = c__5568__auto__;
var G__53218 = cljs.core.count(c__5568__auto__);
var G__53219 = (0);
seq__53112 = G__53216;
chunk__53113 = G__53217;
count__53114 = G__53218;
i__53115 = G__53219;
continue;
} else {
var vec__53130 = cljs.core.first(seq__53112__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53130,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53130,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___53220 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___53220)){
var effect_fn_53221 = temp__5802__auto___53220;
(effect_fn_53221.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53221.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53221.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53222 = cljs.core.next(seq__53112__$1);
var G__53223 = null;
var G__53224 = (0);
var G__53225 = (0);
seq__53112 = G__53222;
chunk__53113 = G__53223;
count__53114 = G__53224;
i__53115 = G__53225;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53135 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53136 = null;
var count__53137 = (0);
var i__53138 = (0);
while(true){
if((i__53138 < count__53137)){
var event = chunk__53136.cljs$core$IIndexed$_nth$arity$2(null,i__53138);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__53226 = seq__53135;
var G__53227 = chunk__53136;
var G__53228 = count__53137;
var G__53229 = (i__53138 + (1));
seq__53135 = G__53226;
chunk__53136 = G__53227;
count__53137 = G__53228;
i__53138 = G__53229;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53135);
if(temp__5804__auto__){
var seq__53135__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53135__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53135__$1);
var G__53230 = cljs.core.chunk_rest(seq__53135__$1);
var G__53231 = c__5568__auto__;
var G__53232 = cljs.core.count(c__5568__auto__);
var G__53233 = (0);
seq__53135 = G__53230;
chunk__53136 = G__53231;
count__53137 = G__53232;
i__53138 = G__53233;
continue;
} else {
var event = cljs.core.first(seq__53135__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__53234 = cljs.core.next(seq__53135__$1);
var G__53235 = null;
var G__53236 = (0);
var G__53237 = (0);
seq__53135 = G__53234;
chunk__53136 = G__53235;
count__53137 = G__53236;
i__53138 = G__53237;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53142 = cljs.core.seq(value);
var chunk__53143 = null;
var count__53144 = (0);
var i__53145 = (0);
while(true){
if((i__53145 < count__53144)){
var event = chunk__53143.cljs$core$IIndexed$_nth$arity$2(null,i__53145);
clear_event(event);


var G__53239 = seq__53142;
var G__53240 = chunk__53143;
var G__53241 = count__53144;
var G__53242 = (i__53145 + (1));
seq__53142 = G__53239;
chunk__53143 = G__53240;
count__53144 = G__53241;
i__53145 = G__53242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53142);
if(temp__5804__auto__){
var seq__53142__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53142__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53142__$1);
var G__53243 = cljs.core.chunk_rest(seq__53142__$1);
var G__53244 = c__5568__auto__;
var G__53245 = cljs.core.count(c__5568__auto__);
var G__53246 = (0);
seq__53142 = G__53243;
chunk__53143 = G__53244;
count__53144 = G__53245;
i__53145 = G__53246;
continue;
} else {
var event = cljs.core.first(seq__53142__$1);
clear_event(event);


var G__53247 = cljs.core.next(seq__53142__$1);
var G__53248 = null;
var G__53249 = (0);
var G__53250 = (0);
seq__53142 = G__53247;
chunk__53143 = G__53248;
count__53144 = G__53249;
i__53145 = G__53250;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
