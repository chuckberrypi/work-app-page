goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13993){
var map__13994 = p__13993;
var map__13994__$1 = cljs.core.__destructure_map(map__13994);
var runtime = map__13994__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13994__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14393 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14393)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14000 = runtime;
var G__14001 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14393);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14000,G__14001) : shadow.remote.runtime.shared.process.call(null,G__14000,G__14001));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14002,res){
var map__14003 = p__14002;
var map__14003__$1 = cljs.core.__destructure_map(map__14003);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14028 = res;
var G__14028__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14028,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14028);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14028__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14028__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14034 = arguments.length;
switch (G__14034) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14045,msg,handlers,timeout_after_ms){
var map__14046 = p__14045;
var map__14046__$1 = cljs.core.__destructure_map(map__14046);
var runtime = map__14046__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14409 = arguments.length;
var i__5770__auto___14410 = (0);
while(true){
if((i__5770__auto___14410 < len__5769__auto___14409)){
args__5775__auto__.push((arguments[i__5770__auto___14410]));

var G__14415 = (i__5770__auto___14410 + (1));
i__5770__auto___14410 = G__14415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14116,ev,args){
var map__14119 = p__14116;
var map__14119__$1 = cljs.core.__destructure_map(map__14119);
var runtime = map__14119__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14123 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14126 = null;
var count__14127 = (0);
var i__14128 = (0);
while(true){
if((i__14128 < count__14127)){
var ext = chunk__14126.cljs$core$IIndexed$_nth$arity$2(null,i__14128);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14459 = seq__14123;
var G__14460 = chunk__14126;
var G__14461 = count__14127;
var G__14462 = (i__14128 + (1));
seq__14123 = G__14459;
chunk__14126 = G__14460;
count__14127 = G__14461;
i__14128 = G__14462;
continue;
} else {
var G__14464 = seq__14123;
var G__14465 = chunk__14126;
var G__14466 = count__14127;
var G__14467 = (i__14128 + (1));
seq__14123 = G__14464;
chunk__14126 = G__14465;
count__14127 = G__14466;
i__14128 = G__14467;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14123);
if(temp__5804__auto__){
var seq__14123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14123__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14123__$1);
var G__14468 = cljs.core.chunk_rest(seq__14123__$1);
var G__14469 = c__5568__auto__;
var G__14470 = cljs.core.count(c__5568__auto__);
var G__14471 = (0);
seq__14123 = G__14468;
chunk__14126 = G__14469;
count__14127 = G__14470;
i__14128 = G__14471;
continue;
} else {
var ext = cljs.core.first(seq__14123__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14472 = cljs.core.next(seq__14123__$1);
var G__14473 = null;
var G__14474 = (0);
var G__14475 = (0);
seq__14123 = G__14472;
chunk__14126 = G__14473;
count__14127 = G__14474;
i__14128 = G__14475;
continue;
} else {
var G__14476 = cljs.core.next(seq__14123__$1);
var G__14477 = null;
var G__14478 = (0);
var G__14479 = (0);
seq__14123 = G__14476;
chunk__14126 = G__14477;
count__14127 = G__14478;
i__14128 = G__14479;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14079){
var G__14080 = cljs.core.first(seq14079);
var seq14079__$1 = cljs.core.next(seq14079);
var G__14081 = cljs.core.first(seq14079__$1);
var seq14079__$2 = cljs.core.next(seq14079__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14080,G__14081,seq14079__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14204,p__14205){
var map__14206 = p__14204;
var map__14206__$1 = cljs.core.__destructure_map(map__14206);
var runtime = map__14206__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14206__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14207 = p__14205;
var map__14207__$1 = cljs.core.__destructure_map(map__14207);
var msg = map__14207__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14207__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__14227 = cljs.core.deref(state_ref);
var map__14227__$1 = cljs.core.__destructure_map(map__14227);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14227__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14227__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14254,msg){
var map__14255 = p__14254;
var map__14255__$1 = cljs.core.__destructure_map(map__14255);
var runtime = map__14255__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14255__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14317,key,p__14318){
var map__14320 = p__14317;
var map__14320__$1 = cljs.core.__destructure_map(map__14320);
var state = map__14320__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14320__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14321 = p__14318;
var map__14321__$1 = cljs.core.__destructure_map(map__14321);
var spec = map__14321__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14321__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14337,key,spec){
var map__14338 = p__14337;
var map__14338__$1 = cljs.core.__destructure_map(map__14338);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14338__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14339_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14339_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14340_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14340_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14341_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14341_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14342_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14342_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14343_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14343_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14348,key){
var map__14349 = p__14348;
var map__14349__$1 = cljs.core.__destructure_map(map__14349);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14349__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14351,msg){
var map__14352 = p__14351;
var map__14352__$1 = cljs.core.__destructure_map(map__14352);
var runtime = map__14352__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14352__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14359,p__14360){
var map__14361 = p__14359;
var map__14361__$1 = cljs.core.__destructure_map(map__14361);
var runtime = map__14361__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14361__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14363 = p__14360;
var map__14363__$1 = cljs.core.__destructure_map(map__14363);
var msg = map__14363__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14363__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14363__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14379 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14381 = null;
var count__14382 = (0);
var i__14383 = (0);
while(true){
if((i__14383 < count__14382)){
var map__14389 = chunk__14381.cljs$core$IIndexed$_nth$arity$2(null,i__14383);
var map__14389__$1 = cljs.core.__destructure_map(map__14389);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14492 = seq__14379;
var G__14493 = chunk__14381;
var G__14494 = count__14382;
var G__14495 = (i__14383 + (1));
seq__14379 = G__14492;
chunk__14381 = G__14493;
count__14382 = G__14494;
i__14383 = G__14495;
continue;
} else {
var G__14496 = seq__14379;
var G__14497 = chunk__14381;
var G__14498 = count__14382;
var G__14499 = (i__14383 + (1));
seq__14379 = G__14496;
chunk__14381 = G__14497;
count__14382 = G__14498;
i__14383 = G__14499;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14379);
if(temp__5804__auto__){
var seq__14379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14379__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14379__$1);
var G__14500 = cljs.core.chunk_rest(seq__14379__$1);
var G__14501 = c__5568__auto__;
var G__14502 = cljs.core.count(c__5568__auto__);
var G__14503 = (0);
seq__14379 = G__14500;
chunk__14381 = G__14501;
count__14382 = G__14502;
i__14383 = G__14503;
continue;
} else {
var map__14390 = cljs.core.first(seq__14379__$1);
var map__14390__$1 = cljs.core.__destructure_map(map__14390);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14390__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14504 = cljs.core.next(seq__14379__$1);
var G__14505 = null;
var G__14506 = (0);
var G__14507 = (0);
seq__14379 = G__14504;
chunk__14381 = G__14505;
count__14382 = G__14506;
i__14383 = G__14507;
continue;
} else {
var G__14508 = cljs.core.next(seq__14379__$1);
var G__14509 = null;
var G__14510 = (0);
var G__14511 = (0);
seq__14379 = G__14508;
chunk__14381 = G__14509;
count__14382 = G__14510;
i__14383 = G__14511;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
