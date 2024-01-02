goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13862 = (function (f,blockable,meta13863){
this.f = f;
this.blockable = blockable;
this.meta13863 = meta13863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13864,meta13863__$1){
var self__ = this;
var _13864__$1 = this;
return (new cljs.core.async.t_cljs$core$async13862(self__.f,self__.blockable,meta13863__$1));
}));

(cljs.core.async.t_cljs$core$async13862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13864){
var self__ = this;
var _13864__$1 = this;
return self__.meta13863;
}));

(cljs.core.async.t_cljs$core$async13862.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13863","meta13863",933819918,null)], null);
}));

(cljs.core.async.t_cljs$core$async13862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13862");

(cljs.core.async.t_cljs$core$async13862.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13862.
 */
cljs.core.async.__GT_t_cljs$core$async13862 = (function cljs$core$async$__GT_t_cljs$core$async13862(f,blockable,meta13863){
return (new cljs.core.async.t_cljs$core$async13862(f,blockable,meta13863));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13860 = arguments.length;
switch (G__13860) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13862(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13876 = arguments.length;
switch (G__13876) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13886 = arguments.length;
switch (G__13886) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13893 = arguments.length;
switch (G__13893) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16566 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16566) : fn1.call(null,val_16566));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16566) : fn1.call(null,val_16566));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13901 = arguments.length;
switch (G__13901) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___16570 = n;
var x_16571 = (0);
while(true){
if((x_16571 < n__5636__auto___16570)){
(a[x_16571] = x_16571);

var G__16572 = (x_16571 + (1));
x_16571 = G__16572;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13905 = (function (flag,meta13906){
this.flag = flag;
this.meta13906 = meta13906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13907,meta13906__$1){
var self__ = this;
var _13907__$1 = this;
return (new cljs.core.async.t_cljs$core$async13905(self__.flag,meta13906__$1));
}));

(cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13907){
var self__ = this;
var _13907__$1 = this;
return self__.meta13906;
}));

(cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13906","meta13906",-1392303832,null)], null);
}));

(cljs.core.async.t_cljs$core$async13905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13905");

(cljs.core.async.t_cljs$core$async13905.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13905.
 */
cljs.core.async.__GT_t_cljs$core$async13905 = (function cljs$core$async$__GT_t_cljs$core$async13905(flag,meta13906){
return (new cljs.core.async.t_cljs$core$async13905(flag,meta13906));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13905(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13926 = (function (flag,cb,meta13927){
this.flag = flag;
this.cb = cb;
this.meta13927 = meta13927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13928,meta13927__$1){
var self__ = this;
var _13928__$1 = this;
return (new cljs.core.async.t_cljs$core$async13926(self__.flag,self__.cb,meta13927__$1));
}));

(cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13928){
var self__ = this;
var _13928__$1 = this;
return self__.meta13927;
}));

(cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13927","meta13927",100327155,null)], null);
}));

(cljs.core.async.t_cljs$core$async13926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13926");

(cljs.core.async.t_cljs$core$async13926.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13926.
 */
cljs.core.async.__GT_t_cljs$core$async13926 = (function cljs$core$async$__GT_t_cljs$core$async13926(flag,cb,meta13927){
return (new cljs.core.async.t_cljs$core$async13926(flag,cb,meta13927));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13926(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13931_SHARP_){
var G__13936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13931_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13936) : fret.call(null,G__13936));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13932_SHARP_){
var G__13937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13932_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13937) : fret.call(null,G__13937));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16579 = (i + (1));
i = G__16579;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16581 = arguments.length;
var i__5770__auto___16582 = (0);
while(true){
if((i__5770__auto___16582 < len__5769__auto___16581)){
args__5775__auto__.push((arguments[i__5770__auto___16582]));

var G__16583 = (i__5770__auto___16582 + (1));
i__5770__auto___16582 = G__16583;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13973){
var map__13974 = p__13973;
var map__13974__$1 = cljs.core.__destructure_map(map__13974);
var opts = map__13974__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13948){
var G__13953 = cljs.core.first(seq13948);
var seq13948__$1 = cljs.core.next(seq13948);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13953,seq13948__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13998 = arguments.length;
switch (G__13998) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13781__auto___16590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14029){
var state_val_14030 = (state_14029[(1)]);
if((state_val_14030 === (7))){
var inst_14024 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
var statearr_14035_16593 = state_14029__$1;
(statearr_14035_16593[(2)] = inst_14024);

(statearr_14035_16593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (1))){
var state_14029__$1 = state_14029;
var statearr_14036_16594 = state_14029__$1;
(statearr_14036_16594[(2)] = null);

(statearr_14036_16594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (4))){
var inst_14006 = (state_14029[(7)]);
var inst_14006__$1 = (state_14029[(2)]);
var inst_14007 = (inst_14006__$1 == null);
var state_14029__$1 = (function (){var statearr_14037 = state_14029;
(statearr_14037[(7)] = inst_14006__$1);

return statearr_14037;
})();
if(cljs.core.truth_(inst_14007)){
var statearr_14038_16595 = state_14029__$1;
(statearr_14038_16595[(1)] = (5));

} else {
var statearr_14039_16596 = state_14029__$1;
(statearr_14039_16596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (13))){
var state_14029__$1 = state_14029;
var statearr_14040_16597 = state_14029__$1;
(statearr_14040_16597[(2)] = null);

(statearr_14040_16597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (6))){
var inst_14006 = (state_14029[(7)]);
var state_14029__$1 = state_14029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14029__$1,(11),to,inst_14006);
} else {
if((state_val_14030 === (3))){
var inst_14026 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14029__$1,inst_14026);
} else {
if((state_val_14030 === (12))){
var state_14029__$1 = state_14029;
var statearr_14051_16598 = state_14029__$1;
(statearr_14051_16598[(2)] = null);

(statearr_14051_16598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (2))){
var state_14029__$1 = state_14029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14029__$1,(4),from);
} else {
if((state_val_14030 === (11))){
var inst_14016 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
if(cljs.core.truth_(inst_14016)){
var statearr_14056_16599 = state_14029__$1;
(statearr_14056_16599[(1)] = (12));

} else {
var statearr_14057_16600 = state_14029__$1;
(statearr_14057_16600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (9))){
var state_14029__$1 = state_14029;
var statearr_14058_16601 = state_14029__$1;
(statearr_14058_16601[(2)] = null);

(statearr_14058_16601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (5))){
var state_14029__$1 = state_14029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14062_16606 = state_14029__$1;
(statearr_14062_16606[(1)] = (8));

} else {
var statearr_14063_16607 = state_14029__$1;
(statearr_14063_16607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (14))){
var inst_14022 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
var statearr_14064_16608 = state_14029__$1;
(statearr_14064_16608[(2)] = inst_14022);

(statearr_14064_16608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (10))){
var inst_14013 = (state_14029[(2)]);
var state_14029__$1 = state_14029;
var statearr_14065_16609 = state_14029__$1;
(statearr_14065_16609[(2)] = inst_14013);

(statearr_14065_16609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14030 === (8))){
var inst_14010 = cljs.core.async.close_BANG_(to);
var state_14029__$1 = state_14029;
var statearr_14066_16611 = state_14029__$1;
(statearr_14066_16611[(2)] = inst_14010);

(statearr_14066_16611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_14069 = [null,null,null,null,null,null,null,null];
(statearr_14069[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_14069[(1)] = (1));

return statearr_14069;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_14029){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14029);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14070){var ex__13477__auto__ = e14070;
var statearr_14071_16618 = state_14029;
(statearr_14071_16618[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14029[(4)]))){
var statearr_14074_16619 = state_14029;
(statearr_14074_16619[(1)] = cljs.core.first((state_14029[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16620 = state_14029;
state_14029 = G__16620;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_14029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_14029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14078 = f__13782__auto__();
(statearr_14078[(6)] = c__13781__auto___16590);

return statearr_14078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14085){
var vec__14086 = p__14085;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(1),null);
var job = vec__14086;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13781__auto___16621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14098){
var state_val_14099 = (state_14098[(1)]);
if((state_val_14099 === (1))){
var state_14098__$1 = state_14098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14098__$1,(2),res,v);
} else {
if((state_val_14099 === (2))){
var inst_14094 = (state_14098[(2)]);
var inst_14096 = cljs.core.async.close_BANG_(res);
var state_14098__$1 = (function (){var statearr_14106 = state_14098;
(statearr_14106[(7)] = inst_14094);

return statearr_14106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14098__$1,inst_14096);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_14109 = [null,null,null,null,null,null,null,null];
(statearr_14109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_14109[(1)] = (1));

return statearr_14109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_14098){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14098);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14113){var ex__13477__auto__ = e14113;
var statearr_14114_16622 = state_14098;
(statearr_14114_16622[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14098[(4)]))){
var statearr_14115_16623 = state_14098;
(statearr_14115_16623[(1)] = cljs.core.first((state_14098[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16624 = state_14098;
state_14098 = G__16624;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_14098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_14098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14120 = f__13782__auto__();
(statearr_14120[(6)] = c__13781__auto___16621);

return statearr_14120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14132){
var vec__14133 = p__14132;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(1),null);
var job = vec__14133;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___16625 = n;
var __16626 = (0);
while(true){
if((__16626 < n__5636__auto___16625)){
var G__14143_16627 = type;
var G__14143_16628__$1 = (((G__14143_16627 instanceof cljs.core.Keyword))?G__14143_16627.fqn:null);
switch (G__14143_16628__$1) {
case "compute":
var c__13781__auto___16630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16626,c__13781__auto___16630,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async){
return (function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = ((function (__16626,c__13781__auto___16630,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async){
return (function (state_14156){
var state_val_14157 = (state_14156[(1)]);
if((state_val_14157 === (1))){
var state_14156__$1 = state_14156;
var statearr_14160_16631 = state_14156__$1;
(statearr_14160_16631[(2)] = null);

(statearr_14160_16631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (2))){
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14156__$1,(4),jobs);
} else {
if((state_val_14157 === (3))){
var inst_14154 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14156__$1,inst_14154);
} else {
if((state_val_14157 === (4))){
var inst_14146 = (state_14156[(2)]);
var inst_14147 = process__$1(inst_14146);
var state_14156__$1 = state_14156;
if(cljs.core.truth_(inst_14147)){
var statearr_14161_16632 = state_14156__$1;
(statearr_14161_16632[(1)] = (5));

} else {
var statearr_14162_16633 = state_14156__$1;
(statearr_14162_16633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (5))){
var state_14156__$1 = state_14156;
var statearr_14163_16634 = state_14156__$1;
(statearr_14163_16634[(2)] = null);

(statearr_14163_16634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (6))){
var state_14156__$1 = state_14156;
var statearr_14165_16635 = state_14156__$1;
(statearr_14165_16635[(2)] = null);

(statearr_14165_16635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14157 === (7))){
var inst_14152 = (state_14156[(2)]);
var state_14156__$1 = state_14156;
var statearr_14167_16636 = state_14156__$1;
(statearr_14167_16636[(2)] = inst_14152);

(statearr_14167_16636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16626,c__13781__auto___16630,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async))
;
return ((function (__16626,switch__13473__auto__,c__13781__auto___16630,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_14194 = [null,null,null,null,null,null,null];
(statearr_14194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_14194[(1)] = (1));

return statearr_14194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_14156){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14156);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14197){var ex__13477__auto__ = e14197;
var statearr_14198_16637 = state_14156;
(statearr_14198_16637[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14156[(4)]))){
var statearr_14203_16638 = state_14156;
(statearr_14203_16638[(1)] = cljs.core.first((state_14156[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16639 = state_14156;
state_14156 = G__16639;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_14156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_14156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
;})(__16626,switch__13473__auto__,c__13781__auto___16630,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async))
})();
var state__13783__auto__ = (function (){var statearr_14213 = f__13782__auto__();
(statearr_14213[(6)] = c__13781__auto___16630);

return statearr_14213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
});})(__16626,c__13781__auto___16630,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async))
);


break;
case "async":
var c__13781__auto___16640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16626,c__13781__auto___16640,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async){
return (function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = ((function (__16626,c__13781__auto___16640,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async){
return (function (state_14294){
var state_val_14295 = (state_14294[(1)]);
if((state_val_14295 === (1))){
var state_14294__$1 = state_14294;
var statearr_14301_16642 = state_14294__$1;
(statearr_14301_16642[(2)] = null);

(statearr_14301_16642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (2))){
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14294__$1,(4),jobs);
} else {
if((state_val_14295 === (3))){
var inst_14292 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14294__$1,inst_14292);
} else {
if((state_val_14295 === (4))){
var inst_14257 = (state_14294[(2)]);
var inst_14283 = async(inst_14257);
var state_14294__$1 = state_14294;
if(cljs.core.truth_(inst_14283)){
var statearr_14316_16644 = state_14294__$1;
(statearr_14316_16644[(1)] = (5));

} else {
var statearr_14319_16645 = state_14294__$1;
(statearr_14319_16645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (5))){
var state_14294__$1 = state_14294;
var statearr_14322_16646 = state_14294__$1;
(statearr_14322_16646[(2)] = null);

(statearr_14322_16646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (6))){
var state_14294__$1 = state_14294;
var statearr_14324_16650 = state_14294__$1;
(statearr_14324_16650[(2)] = null);

(statearr_14324_16650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14295 === (7))){
var inst_14288 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
var statearr_14331_16651 = state_14294__$1;
(statearr_14331_16651[(2)] = inst_14288);

(statearr_14331_16651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16626,c__13781__auto___16640,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async))
;
return ((function (__16626,switch__13473__auto__,c__13781__auto___16640,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_14332 = [null,null,null,null,null,null,null];
(statearr_14332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_14332[(1)] = (1));

return statearr_14332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_14294){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14294);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14344){var ex__13477__auto__ = e14344;
var statearr_14345_16652 = state_14294;
(statearr_14345_16652[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14294[(4)]))){
var statearr_14347_16653 = state_14294;
(statearr_14347_16653[(1)] = cljs.core.first((state_14294[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16654 = state_14294;
state_14294 = G__16654;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
;})(__16626,switch__13473__auto__,c__13781__auto___16640,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async))
})();
var state__13783__auto__ = (function (){var statearr_14350 = f__13782__auto__();
(statearr_14350[(6)] = c__13781__auto___16640);

return statearr_14350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
});})(__16626,c__13781__auto___16640,G__14143_16627,G__14143_16628__$1,n__5636__auto___16625,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14143_16628__$1)].join('')));

}

var G__16657 = (__16626 + (1));
__16626 = G__16657;
continue;
} else {
}
break;
}

var c__13781__auto___16658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14385){
var state_val_14386 = (state_14385[(1)]);
if((state_val_14386 === (7))){
var inst_14375 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
var statearr_14391_16659 = state_14385__$1;
(statearr_14391_16659[(2)] = inst_14375);

(statearr_14391_16659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (1))){
var state_14385__$1 = state_14385;
var statearr_14392_16660 = state_14385__$1;
(statearr_14392_16660[(2)] = null);

(statearr_14392_16660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (4))){
var inst_14356 = (state_14385[(7)]);
var inst_14356__$1 = (state_14385[(2)]);
var inst_14357 = (inst_14356__$1 == null);
var state_14385__$1 = (function (){var statearr_14395 = state_14385;
(statearr_14395[(7)] = inst_14356__$1);

return statearr_14395;
})();
if(cljs.core.truth_(inst_14357)){
var statearr_14396_16661 = state_14385__$1;
(statearr_14396_16661[(1)] = (5));

} else {
var statearr_14397_16662 = state_14385__$1;
(statearr_14397_16662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (6))){
var inst_14356 = (state_14385[(7)]);
var inst_14365 = (state_14385[(8)]);
var inst_14365__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14366 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14367 = [inst_14356,inst_14365__$1];
var inst_14368 = (new cljs.core.PersistentVector(null,2,(5),inst_14366,inst_14367,null));
var state_14385__$1 = (function (){var statearr_14398 = state_14385;
(statearr_14398[(8)] = inst_14365__$1);

return statearr_14398;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14385__$1,(8),jobs,inst_14368);
} else {
if((state_val_14386 === (3))){
var inst_14377 = (state_14385[(2)]);
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14385__$1,inst_14377);
} else {
if((state_val_14386 === (2))){
var state_14385__$1 = state_14385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14385__$1,(4),from);
} else {
if((state_val_14386 === (9))){
var inst_14372 = (state_14385[(2)]);
var state_14385__$1 = (function (){var statearr_14399 = state_14385;
(statearr_14399[(9)] = inst_14372);

return statearr_14399;
})();
var statearr_14400_16663 = state_14385__$1;
(statearr_14400_16663[(2)] = null);

(statearr_14400_16663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (5))){
var inst_14362 = cljs.core.async.close_BANG_(jobs);
var state_14385__$1 = state_14385;
var statearr_14401_16664 = state_14385__$1;
(statearr_14401_16664[(2)] = inst_14362);

(statearr_14401_16664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14386 === (8))){
var inst_14365 = (state_14385[(8)]);
var inst_14370 = (state_14385[(2)]);
var state_14385__$1 = (function (){var statearr_14402 = state_14385;
(statearr_14402[(10)] = inst_14370);

return statearr_14402;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14385__$1,(9),results,inst_14365);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_14403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_14403[(1)] = (1));

return statearr_14403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_14385){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14385);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14405){var ex__13477__auto__ = e14405;
var statearr_14406_16666 = state_14385;
(statearr_14406_16666[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14385[(4)]))){
var statearr_14407_16667 = state_14385;
(statearr_14407_16667[(1)] = cljs.core.first((state_14385[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16668 = state_14385;
state_14385 = G__16668;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_14385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_14385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14408 = f__13782__auto__();
(statearr_14408[(6)] = c__13781__auto___16658);

return statearr_14408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


var c__13781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14450){
var state_val_14451 = (state_14450[(1)]);
if((state_val_14451 === (7))){
var inst_14446 = (state_14450[(2)]);
var state_14450__$1 = state_14450;
var statearr_14453_16669 = state_14450__$1;
(statearr_14453_16669[(2)] = inst_14446);

(statearr_14453_16669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (20))){
var state_14450__$1 = state_14450;
var statearr_14454_16670 = state_14450__$1;
(statearr_14454_16670[(2)] = null);

(statearr_14454_16670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (1))){
var state_14450__$1 = state_14450;
var statearr_14455_16671 = state_14450__$1;
(statearr_14455_16671[(2)] = null);

(statearr_14455_16671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (4))){
var inst_14413 = (state_14450[(7)]);
var inst_14413__$1 = (state_14450[(2)]);
var inst_14414 = (inst_14413__$1 == null);
var state_14450__$1 = (function (){var statearr_14456 = state_14450;
(statearr_14456[(7)] = inst_14413__$1);

return statearr_14456;
})();
if(cljs.core.truth_(inst_14414)){
var statearr_14457_16672 = state_14450__$1;
(statearr_14457_16672[(1)] = (5));

} else {
var statearr_14458_16673 = state_14450__$1;
(statearr_14458_16673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (15))){
var inst_14427 = (state_14450[(8)]);
var state_14450__$1 = state_14450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14450__$1,(18),to,inst_14427);
} else {
if((state_val_14451 === (21))){
var inst_14441 = (state_14450[(2)]);
var state_14450__$1 = state_14450;
var statearr_14463_16674 = state_14450__$1;
(statearr_14463_16674[(2)] = inst_14441);

(statearr_14463_16674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (13))){
var inst_14443 = (state_14450[(2)]);
var state_14450__$1 = (function (){var statearr_14480 = state_14450;
(statearr_14480[(9)] = inst_14443);

return statearr_14480;
})();
var statearr_14481_16677 = state_14450__$1;
(statearr_14481_16677[(2)] = null);

(statearr_14481_16677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (6))){
var inst_14413 = (state_14450[(7)]);
var state_14450__$1 = state_14450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14450__$1,(11),inst_14413);
} else {
if((state_val_14451 === (17))){
var inst_14435 = (state_14450[(2)]);
var state_14450__$1 = state_14450;
if(cljs.core.truth_(inst_14435)){
var statearr_14487_16684 = state_14450__$1;
(statearr_14487_16684[(1)] = (19));

} else {
var statearr_14488_16685 = state_14450__$1;
(statearr_14488_16685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (3))){
var inst_14448 = (state_14450[(2)]);
var state_14450__$1 = state_14450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14450__$1,inst_14448);
} else {
if((state_val_14451 === (12))){
var inst_14424 = (state_14450[(10)]);
var state_14450__$1 = state_14450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14450__$1,(14),inst_14424);
} else {
if((state_val_14451 === (2))){
var state_14450__$1 = state_14450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14450__$1,(4),results);
} else {
if((state_val_14451 === (19))){
var state_14450__$1 = state_14450;
var statearr_14512_16689 = state_14450__$1;
(statearr_14512_16689[(2)] = null);

(statearr_14512_16689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (11))){
var inst_14424 = (state_14450[(2)]);
var state_14450__$1 = (function (){var statearr_14521 = state_14450;
(statearr_14521[(10)] = inst_14424);

return statearr_14521;
})();
var statearr_14526_16690 = state_14450__$1;
(statearr_14526_16690[(2)] = null);

(statearr_14526_16690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (9))){
var state_14450__$1 = state_14450;
var statearr_14527_16691 = state_14450__$1;
(statearr_14527_16691[(2)] = null);

(statearr_14527_16691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (5))){
var state_14450__$1 = state_14450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14528_16692 = state_14450__$1;
(statearr_14528_16692[(1)] = (8));

} else {
var statearr_14529_16693 = state_14450__$1;
(statearr_14529_16693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (14))){
var inst_14427 = (state_14450[(8)]);
var inst_14429 = (state_14450[(11)]);
var inst_14427__$1 = (state_14450[(2)]);
var inst_14428 = (inst_14427__$1 == null);
var inst_14429__$1 = cljs.core.not(inst_14428);
var state_14450__$1 = (function (){var statearr_14530 = state_14450;
(statearr_14530[(8)] = inst_14427__$1);

(statearr_14530[(11)] = inst_14429__$1);

return statearr_14530;
})();
if(inst_14429__$1){
var statearr_14531_16694 = state_14450__$1;
(statearr_14531_16694[(1)] = (15));

} else {
var statearr_14532_16695 = state_14450__$1;
(statearr_14532_16695[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (16))){
var inst_14429 = (state_14450[(11)]);
var state_14450__$1 = state_14450;
var statearr_14533_16696 = state_14450__$1;
(statearr_14533_16696[(2)] = inst_14429);

(statearr_14533_16696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (10))){
var inst_14421 = (state_14450[(2)]);
var state_14450__$1 = state_14450;
var statearr_14534_16697 = state_14450__$1;
(statearr_14534_16697[(2)] = inst_14421);

(statearr_14534_16697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (18))){
var inst_14432 = (state_14450[(2)]);
var state_14450__$1 = state_14450;
var statearr_14535_16698 = state_14450__$1;
(statearr_14535_16698[(2)] = inst_14432);

(statearr_14535_16698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14451 === (8))){
var inst_14418 = cljs.core.async.close_BANG_(to);
var state_14450__$1 = state_14450;
var statearr_14536_16699 = state_14450__$1;
(statearr_14536_16699[(2)] = inst_14418);

(statearr_14536_16699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_14537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_14537[(1)] = (1));

return statearr_14537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_14450){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14450);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14538){var ex__13477__auto__ = e14538;
var statearr_14539_16700 = state_14450;
(statearr_14539_16700[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14450[(4)]))){
var statearr_14540_16701 = state_14450;
(statearr_14540_16701[(1)] = cljs.core.first((state_14450[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16702 = state_14450;
state_14450 = G__16702;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_14450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_14450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14541 = f__13782__auto__();
(statearr_14541[(6)] = c__13781__auto__);

return statearr_14541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));

return c__13781__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14543 = arguments.length;
switch (G__14543) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14545 = arguments.length;
switch (G__14545) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14547 = arguments.length;
switch (G__14547) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13781__auto___16709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14583){
var state_val_14584 = (state_14583[(1)]);
if((state_val_14584 === (7))){
var inst_14579 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
var statearr_14587_16710 = state_14583__$1;
(statearr_14587_16710[(2)] = inst_14579);

(statearr_14587_16710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (1))){
var state_14583__$1 = state_14583;
var statearr_14590_16711 = state_14583__$1;
(statearr_14590_16711[(2)] = null);

(statearr_14590_16711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (4))){
var inst_14559 = (state_14583[(7)]);
var inst_14559__$1 = (state_14583[(2)]);
var inst_14561 = (inst_14559__$1 == null);
var state_14583__$1 = (function (){var statearr_14592 = state_14583;
(statearr_14592[(7)] = inst_14559__$1);

return statearr_14592;
})();
if(cljs.core.truth_(inst_14561)){
var statearr_14595_16712 = state_14583__$1;
(statearr_14595_16712[(1)] = (5));

} else {
var statearr_14599_16713 = state_14583__$1;
(statearr_14599_16713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (13))){
var state_14583__$1 = state_14583;
var statearr_14601_16714 = state_14583__$1;
(statearr_14601_16714[(2)] = null);

(statearr_14601_16714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (6))){
var inst_14559 = (state_14583[(7)]);
var inst_14566 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14559) : p.call(null,inst_14559));
var state_14583__$1 = state_14583;
if(cljs.core.truth_(inst_14566)){
var statearr_14603_16715 = state_14583__$1;
(statearr_14603_16715[(1)] = (9));

} else {
var statearr_14606_16716 = state_14583__$1;
(statearr_14606_16716[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (3))){
var inst_14581 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14583__$1,inst_14581);
} else {
if((state_val_14584 === (12))){
var state_14583__$1 = state_14583;
var statearr_14607_16717 = state_14583__$1;
(statearr_14607_16717[(2)] = null);

(statearr_14607_16717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (2))){
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14583__$1,(4),ch);
} else {
if((state_val_14584 === (11))){
var inst_14559 = (state_14583[(7)]);
var inst_14570 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14583__$1,(8),inst_14570,inst_14559);
} else {
if((state_val_14584 === (9))){
var state_14583__$1 = state_14583;
var statearr_14613_16718 = state_14583__$1;
(statearr_14613_16718[(2)] = tc);

(statearr_14613_16718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (5))){
var inst_14563 = cljs.core.async.close_BANG_(tc);
var inst_14564 = cljs.core.async.close_BANG_(fc);
var state_14583__$1 = (function (){var statearr_14615 = state_14583;
(statearr_14615[(8)] = inst_14563);

return statearr_14615;
})();
var statearr_14616_16719 = state_14583__$1;
(statearr_14616_16719[(2)] = inst_14564);

(statearr_14616_16719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (14))){
var inst_14577 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
var statearr_14617_16721 = state_14583__$1;
(statearr_14617_16721[(2)] = inst_14577);

(statearr_14617_16721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (10))){
var state_14583__$1 = state_14583;
var statearr_14619_16722 = state_14583__$1;
(statearr_14619_16722[(2)] = fc);

(statearr_14619_16722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (8))){
var inst_14572 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
if(cljs.core.truth_(inst_14572)){
var statearr_14620_16726 = state_14583__$1;
(statearr_14620_16726[(1)] = (12));

} else {
var statearr_14621_16727 = state_14583__$1;
(statearr_14621_16727[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_14624 = [null,null,null,null,null,null,null,null,null];
(statearr_14624[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_14624[(1)] = (1));

return statearr_14624;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_14583){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14583);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14625){var ex__13477__auto__ = e14625;
var statearr_14626_16728 = state_14583;
(statearr_14626_16728[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14583[(4)]))){
var statearr_14627_16729 = state_14583;
(statearr_14627_16729[(1)] = cljs.core.first((state_14583[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16730 = state_14583;
state_14583 = G__16730;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_14583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_14583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14628 = f__13782__auto__();
(statearr_14628[(6)] = c__13781__auto___16709);

return statearr_14628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14658){
var state_val_14659 = (state_14658[(1)]);
if((state_val_14659 === (7))){
var inst_14654 = (state_14658[(2)]);
var state_14658__$1 = state_14658;
var statearr_14662_16732 = state_14658__$1;
(statearr_14662_16732[(2)] = inst_14654);

(statearr_14662_16732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (1))){
var inst_14633 = init;
var inst_14634 = inst_14633;
var state_14658__$1 = (function (){var statearr_14664 = state_14658;
(statearr_14664[(7)] = inst_14634);

return statearr_14664;
})();
var statearr_14665_16734 = state_14658__$1;
(statearr_14665_16734[(2)] = null);

(statearr_14665_16734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (4))){
var inst_14637 = (state_14658[(8)]);
var inst_14637__$1 = (state_14658[(2)]);
var inst_14639 = (inst_14637__$1 == null);
var state_14658__$1 = (function (){var statearr_14666 = state_14658;
(statearr_14666[(8)] = inst_14637__$1);

return statearr_14666;
})();
if(cljs.core.truth_(inst_14639)){
var statearr_14667_16736 = state_14658__$1;
(statearr_14667_16736[(1)] = (5));

} else {
var statearr_14669_16739 = state_14658__$1;
(statearr_14669_16739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (6))){
var inst_14644 = (state_14658[(9)]);
var inst_14634 = (state_14658[(7)]);
var inst_14637 = (state_14658[(8)]);
var inst_14644__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14634,inst_14637) : f.call(null,inst_14634,inst_14637));
var inst_14646 = cljs.core.reduced_QMARK_(inst_14644__$1);
var state_14658__$1 = (function (){var statearr_14671 = state_14658;
(statearr_14671[(9)] = inst_14644__$1);

return statearr_14671;
})();
if(inst_14646){
var statearr_14672_16740 = state_14658__$1;
(statearr_14672_16740[(1)] = (8));

} else {
var statearr_14675_16742 = state_14658__$1;
(statearr_14675_16742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (3))){
var inst_14656 = (state_14658[(2)]);
var state_14658__$1 = state_14658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14658__$1,inst_14656);
} else {
if((state_val_14659 === (2))){
var state_14658__$1 = state_14658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14658__$1,(4),ch);
} else {
if((state_val_14659 === (9))){
var inst_14644 = (state_14658[(9)]);
var inst_14634 = inst_14644;
var state_14658__$1 = (function (){var statearr_14677 = state_14658;
(statearr_14677[(7)] = inst_14634);

return statearr_14677;
})();
var statearr_14678_16744 = state_14658__$1;
(statearr_14678_16744[(2)] = null);

(statearr_14678_16744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (5))){
var inst_14634 = (state_14658[(7)]);
var state_14658__$1 = state_14658;
var statearr_14684_16746 = state_14658__$1;
(statearr_14684_16746[(2)] = inst_14634);

(statearr_14684_16746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (10))){
var inst_14652 = (state_14658[(2)]);
var state_14658__$1 = state_14658;
var statearr_14690_16747 = state_14658__$1;
(statearr_14690_16747[(2)] = inst_14652);

(statearr_14690_16747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14659 === (8))){
var inst_14644 = (state_14658[(9)]);
var inst_14648 = cljs.core.deref(inst_14644);
var state_14658__$1 = state_14658;
var statearr_14691_16749 = state_14658__$1;
(statearr_14691_16749[(2)] = inst_14648);

(statearr_14691_16749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13474__auto____0 = (function (){
var statearr_14695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14695[(0)] = cljs$core$async$reduce_$_state_machine__13474__auto__);

(statearr_14695[(1)] = (1));

return statearr_14695;
});
var cljs$core$async$reduce_$_state_machine__13474__auto____1 = (function (state_14658){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14658);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14697){var ex__13477__auto__ = e14697;
var statearr_14699_16752 = state_14658;
(statearr_14699_16752[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14658[(4)]))){
var statearr_14701_16753 = state_14658;
(statearr_14701_16753[(1)] = cljs.core.first((state_14658[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16755 = state_14658;
state_14658 = G__16755;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13474__auto__ = function(state_14658){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13474__auto____1.call(this,state_14658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13474__auto____0;
cljs$core$async$reduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13474__auto____1;
return cljs$core$async$reduce_$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14704 = f__13782__auto__();
(statearr_14704[(6)] = c__13781__auto__);

return statearr_14704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));

return c__13781__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14714){
var state_val_14716 = (state_14714[(1)]);
if((state_val_14716 === (1))){
var inst_14709 = cljs.core.async.reduce(f__$1,init,ch);
var state_14714__$1 = state_14714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14714__$1,(2),inst_14709);
} else {
if((state_val_14716 === (2))){
var inst_14711 = (state_14714[(2)]);
var inst_14712 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14711) : f__$1.call(null,inst_14711));
var state_14714__$1 = state_14714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14714__$1,inst_14712);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13474__auto____0 = (function (){
var statearr_14724 = [null,null,null,null,null,null,null];
(statearr_14724[(0)] = cljs$core$async$transduce_$_state_machine__13474__auto__);

(statearr_14724[(1)] = (1));

return statearr_14724;
});
var cljs$core$async$transduce_$_state_machine__13474__auto____1 = (function (state_14714){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14714);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14726){var ex__13477__auto__ = e14726;
var statearr_14728_16763 = state_14714;
(statearr_14728_16763[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14714[(4)]))){
var statearr_14730_16764 = state_14714;
(statearr_14730_16764[(1)] = cljs.core.first((state_14714[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16765 = state_14714;
state_14714 = G__16765;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13474__auto__ = function(state_14714){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13474__auto____1.call(this,state_14714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13474__auto____0;
cljs$core$async$transduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13474__auto____1;
return cljs$core$async$transduce_$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14731 = f__13782__auto__();
(statearr_14731[(6)] = c__13781__auto__);

return statearr_14731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));

return c__13781__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14737 = arguments.length;
switch (G__14737) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_14771){
var state_val_14772 = (state_14771[(1)]);
if((state_val_14772 === (7))){
var inst_14749 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14774_16767 = state_14771__$1;
(statearr_14774_16767[(2)] = inst_14749);

(statearr_14774_16767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (1))){
var inst_14742 = cljs.core.seq(coll);
var inst_14743 = inst_14742;
var state_14771__$1 = (function (){var statearr_14777 = state_14771;
(statearr_14777[(7)] = inst_14743);

return statearr_14777;
})();
var statearr_14778_16768 = state_14771__$1;
(statearr_14778_16768[(2)] = null);

(statearr_14778_16768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (4))){
var inst_14743 = (state_14771[(7)]);
var inst_14747 = cljs.core.first(inst_14743);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14771__$1,(7),ch,inst_14747);
} else {
if((state_val_14772 === (13))){
var inst_14765 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14789_16769 = state_14771__$1;
(statearr_14789_16769[(2)] = inst_14765);

(statearr_14789_16769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (6))){
var inst_14752 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
if(cljs.core.truth_(inst_14752)){
var statearr_14790_16770 = state_14771__$1;
(statearr_14790_16770[(1)] = (8));

} else {
var statearr_14792_16771 = state_14771__$1;
(statearr_14792_16771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (3))){
var inst_14769 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14771__$1,inst_14769);
} else {
if((state_val_14772 === (12))){
var state_14771__$1 = state_14771;
var statearr_14793_16773 = state_14771__$1;
(statearr_14793_16773[(2)] = null);

(statearr_14793_16773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (2))){
var inst_14743 = (state_14771[(7)]);
var state_14771__$1 = state_14771;
if(cljs.core.truth_(inst_14743)){
var statearr_14796_16774 = state_14771__$1;
(statearr_14796_16774[(1)] = (4));

} else {
var statearr_14797_16775 = state_14771__$1;
(statearr_14797_16775[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (11))){
var inst_14761 = cljs.core.async.close_BANG_(ch);
var state_14771__$1 = state_14771;
var statearr_14800_16776 = state_14771__$1;
(statearr_14800_16776[(2)] = inst_14761);

(statearr_14800_16776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (9))){
var state_14771__$1 = state_14771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14805_16777 = state_14771__$1;
(statearr_14805_16777[(1)] = (11));

} else {
var statearr_14807_16778 = state_14771__$1;
(statearr_14807_16778[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (5))){
var inst_14743 = (state_14771[(7)]);
var state_14771__$1 = state_14771;
var statearr_14809_16779 = state_14771__$1;
(statearr_14809_16779[(2)] = inst_14743);

(statearr_14809_16779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (10))){
var inst_14767 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
var statearr_14810_16780 = state_14771__$1;
(statearr_14810_16780[(2)] = inst_14767);

(statearr_14810_16780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (8))){
var inst_14743 = (state_14771[(7)]);
var inst_14757 = cljs.core.next(inst_14743);
var inst_14743__$1 = inst_14757;
var state_14771__$1 = (function (){var statearr_14813 = state_14771;
(statearr_14813[(7)] = inst_14743__$1);

return statearr_14813;
})();
var statearr_14816_16781 = state_14771__$1;
(statearr_14816_16781[(2)] = null);

(statearr_14816_16781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_14818 = [null,null,null,null,null,null,null,null];
(statearr_14818[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_14818[(1)] = (1));

return statearr_14818;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_14771){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_14771);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e14819){var ex__13477__auto__ = e14819;
var statearr_14822_16782 = state_14771;
(statearr_14822_16782[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_14771[(4)]))){
var statearr_14825_16783 = state_14771;
(statearr_14825_16783[(1)] = cljs.core.first((state_14771[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16788 = state_14771;
state_14771 = G__16788;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_14771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_14771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_14826 = f__13782__auto__();
(statearr_14826[(6)] = c__13781__auto__);

return statearr_14826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));

return c__13781__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14833 = arguments.length;
switch (G__14833) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16790 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16790(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16791 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16791(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16792 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16792(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16794 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16794(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14876 = (function (ch,cs,meta14877){
this.ch = ch;
this.cs = cs;
this.meta14877 = meta14877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14878,meta14877__$1){
var self__ = this;
var _14878__$1 = this;
return (new cljs.core.async.t_cljs$core$async14876(self__.ch,self__.cs,meta14877__$1));
}));

(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14878){
var self__ = this;
var _14878__$1 = this;
return self__.meta14877;
}));

(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14876.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14877","meta14877",155737185,null)], null);
}));

(cljs.core.async.t_cljs$core$async14876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14876");

(cljs.core.async.t_cljs$core$async14876.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14876.
 */
cljs.core.async.__GT_t_cljs$core$async14876 = (function cljs$core$async$__GT_t_cljs$core$async14876(ch,cs,meta14877){
return (new cljs.core.async.t_cljs$core$async14876(ch,cs,meta14877));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14876(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13781__auto___16797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_15095){
var state_val_15096 = (state_15095[(1)]);
if((state_val_15096 === (7))){
var inst_15085 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15101_16798 = state_15095__$1;
(statearr_15101_16798[(2)] = inst_15085);

(statearr_15101_16798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (20))){
var inst_14965 = (state_15095[(7)]);
var inst_14983 = cljs.core.first(inst_14965);
var inst_14984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14983,(0),null);
var inst_14985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14983,(1),null);
var state_15095__$1 = (function (){var statearr_15102 = state_15095;
(statearr_15102[(8)] = inst_14984);

return statearr_15102;
})();
if(cljs.core.truth_(inst_14985)){
var statearr_15106_16799 = state_15095__$1;
(statearr_15106_16799[(1)] = (22));

} else {
var statearr_15107_16800 = state_15095__$1;
(statearr_15107_16800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (27))){
var inst_15019 = (state_15095[(9)]);
var inst_15021 = (state_15095[(10)]);
var inst_15030 = (state_15095[(11)]);
var inst_14930 = (state_15095[(12)]);
var inst_15030__$1 = cljs.core._nth(inst_15019,inst_15021);
var inst_15031 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15030__$1,inst_14930,done);
var state_15095__$1 = (function (){var statearr_15114 = state_15095;
(statearr_15114[(11)] = inst_15030__$1);

return statearr_15114;
})();
if(cljs.core.truth_(inst_15031)){
var statearr_15115_16801 = state_15095__$1;
(statearr_15115_16801[(1)] = (30));

} else {
var statearr_15116_16802 = state_15095__$1;
(statearr_15116_16802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (1))){
var state_15095__$1 = state_15095;
var statearr_15119_16803 = state_15095__$1;
(statearr_15119_16803[(2)] = null);

(statearr_15119_16803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (24))){
var inst_14965 = (state_15095[(7)]);
var inst_14990 = (state_15095[(2)]);
var inst_14994 = cljs.core.next(inst_14965);
var inst_14939 = inst_14994;
var inst_14940 = null;
var inst_14941 = (0);
var inst_14942 = (0);
var state_15095__$1 = (function (){var statearr_15121 = state_15095;
(statearr_15121[(13)] = inst_14940);

(statearr_15121[(14)] = inst_14939);

(statearr_15121[(15)] = inst_14990);

(statearr_15121[(16)] = inst_14942);

(statearr_15121[(17)] = inst_14941);

return statearr_15121;
})();
var statearr_15122_16805 = state_15095__$1;
(statearr_15122_16805[(2)] = null);

(statearr_15122_16805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (39))){
var state_15095__$1 = state_15095;
var statearr_15128_16806 = state_15095__$1;
(statearr_15128_16806[(2)] = null);

(statearr_15128_16806[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (4))){
var inst_14930 = (state_15095[(12)]);
var inst_14930__$1 = (state_15095[(2)]);
var inst_14931 = (inst_14930__$1 == null);
var state_15095__$1 = (function (){var statearr_15129 = state_15095;
(statearr_15129[(12)] = inst_14930__$1);

return statearr_15129;
})();
if(cljs.core.truth_(inst_14931)){
var statearr_15130_16807 = state_15095__$1;
(statearr_15130_16807[(1)] = (5));

} else {
var statearr_15131_16808 = state_15095__$1;
(statearr_15131_16808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (15))){
var inst_14940 = (state_15095[(13)]);
var inst_14939 = (state_15095[(14)]);
var inst_14942 = (state_15095[(16)]);
var inst_14941 = (state_15095[(17)]);
var inst_14961 = (state_15095[(2)]);
var inst_14962 = (inst_14942 + (1));
var tmp15123 = inst_14940;
var tmp15124 = inst_14939;
var tmp15125 = inst_14941;
var inst_14939__$1 = tmp15124;
var inst_14940__$1 = tmp15123;
var inst_14941__$1 = tmp15125;
var inst_14942__$1 = inst_14962;
var state_15095__$1 = (function (){var statearr_15132 = state_15095;
(statearr_15132[(13)] = inst_14940__$1);

(statearr_15132[(14)] = inst_14939__$1);

(statearr_15132[(16)] = inst_14942__$1);

(statearr_15132[(18)] = inst_14961);

(statearr_15132[(17)] = inst_14941__$1);

return statearr_15132;
})();
var statearr_15141_16813 = state_15095__$1;
(statearr_15141_16813[(2)] = null);

(statearr_15141_16813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (21))){
var inst_15000 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15150_16814 = state_15095__$1;
(statearr_15150_16814[(2)] = inst_15000);

(statearr_15150_16814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (31))){
var inst_15030 = (state_15095[(11)]);
var inst_15034 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15030);
var state_15095__$1 = state_15095;
var statearr_15151_16818 = state_15095__$1;
(statearr_15151_16818[(2)] = inst_15034);

(statearr_15151_16818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (32))){
var inst_15019 = (state_15095[(9)]);
var inst_15021 = (state_15095[(10)]);
var inst_15020 = (state_15095[(19)]);
var inst_15018 = (state_15095[(20)]);
var inst_15036 = (state_15095[(2)]);
var inst_15037 = (inst_15021 + (1));
var tmp15146 = inst_15019;
var tmp15147 = inst_15020;
var tmp15148 = inst_15018;
var inst_15018__$1 = tmp15148;
var inst_15019__$1 = tmp15146;
var inst_15020__$1 = tmp15147;
var inst_15021__$1 = inst_15037;
var state_15095__$1 = (function (){var statearr_15152 = state_15095;
(statearr_15152[(9)] = inst_15019__$1);

(statearr_15152[(10)] = inst_15021__$1);

(statearr_15152[(19)] = inst_15020__$1);

(statearr_15152[(20)] = inst_15018__$1);

(statearr_15152[(21)] = inst_15036);

return statearr_15152;
})();
var statearr_15153_16819 = state_15095__$1;
(statearr_15153_16819[(2)] = null);

(statearr_15153_16819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (40))){
var inst_15058 = (state_15095[(22)]);
var inst_15062 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15058);
var state_15095__$1 = state_15095;
var statearr_15154_16820 = state_15095__$1;
(statearr_15154_16820[(2)] = inst_15062);

(statearr_15154_16820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (33))){
var inst_15041 = (state_15095[(23)]);
var inst_15045 = cljs.core.chunked_seq_QMARK_(inst_15041);
var state_15095__$1 = state_15095;
if(inst_15045){
var statearr_15155_16824 = state_15095__$1;
(statearr_15155_16824[(1)] = (36));

} else {
var statearr_15157_16825 = state_15095__$1;
(statearr_15157_16825[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (13))){
var inst_14955 = (state_15095[(24)]);
var inst_14958 = cljs.core.async.close_BANG_(inst_14955);
var state_15095__$1 = state_15095;
var statearr_15158_16826 = state_15095__$1;
(statearr_15158_16826[(2)] = inst_14958);

(statearr_15158_16826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (22))){
var inst_14984 = (state_15095[(8)]);
var inst_14987 = cljs.core.async.close_BANG_(inst_14984);
var state_15095__$1 = state_15095;
var statearr_15160_16827 = state_15095__$1;
(statearr_15160_16827[(2)] = inst_14987);

(statearr_15160_16827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (36))){
var inst_15041 = (state_15095[(23)]);
var inst_15047 = cljs.core.chunk_first(inst_15041);
var inst_15048 = cljs.core.chunk_rest(inst_15041);
var inst_15055 = cljs.core.count(inst_15047);
var inst_15018 = inst_15048;
var inst_15019 = inst_15047;
var inst_15020 = inst_15055;
var inst_15021 = (0);
var state_15095__$1 = (function (){var statearr_15161 = state_15095;
(statearr_15161[(9)] = inst_15019);

(statearr_15161[(10)] = inst_15021);

(statearr_15161[(19)] = inst_15020);

(statearr_15161[(20)] = inst_15018);

return statearr_15161;
})();
var statearr_15162_16831 = state_15095__$1;
(statearr_15162_16831[(2)] = null);

(statearr_15162_16831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (41))){
var inst_15041 = (state_15095[(23)]);
var inst_15064 = (state_15095[(2)]);
var inst_15065 = cljs.core.next(inst_15041);
var inst_15018 = inst_15065;
var inst_15019 = null;
var inst_15020 = (0);
var inst_15021 = (0);
var state_15095__$1 = (function (){var statearr_15165 = state_15095;
(statearr_15165[(9)] = inst_15019);

(statearr_15165[(10)] = inst_15021);

(statearr_15165[(25)] = inst_15064);

(statearr_15165[(19)] = inst_15020);

(statearr_15165[(20)] = inst_15018);

return statearr_15165;
})();
var statearr_15170_16832 = state_15095__$1;
(statearr_15170_16832[(2)] = null);

(statearr_15170_16832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (43))){
var state_15095__$1 = state_15095;
var statearr_15172_16833 = state_15095__$1;
(statearr_15172_16833[(2)] = null);

(statearr_15172_16833[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (29))){
var inst_15073 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15176_16837 = state_15095__$1;
(statearr_15176_16837[(2)] = inst_15073);

(statearr_15176_16837[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (44))){
var inst_15082 = (state_15095[(2)]);
var state_15095__$1 = (function (){var statearr_15177 = state_15095;
(statearr_15177[(26)] = inst_15082);

return statearr_15177;
})();
var statearr_15179_16838 = state_15095__$1;
(statearr_15179_16838[(2)] = null);

(statearr_15179_16838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (6))){
var inst_15010 = (state_15095[(27)]);
var inst_15009 = cljs.core.deref(cs);
var inst_15010__$1 = cljs.core.keys(inst_15009);
var inst_15011 = cljs.core.count(inst_15010__$1);
var inst_15012 = cljs.core.reset_BANG_(dctr,inst_15011);
var inst_15017 = cljs.core.seq(inst_15010__$1);
var inst_15018 = inst_15017;
var inst_15019 = null;
var inst_15020 = (0);
var inst_15021 = (0);
var state_15095__$1 = (function (){var statearr_15180 = state_15095;
(statearr_15180[(9)] = inst_15019);

(statearr_15180[(10)] = inst_15021);

(statearr_15180[(19)] = inst_15020);

(statearr_15180[(28)] = inst_15012);

(statearr_15180[(27)] = inst_15010__$1);

(statearr_15180[(20)] = inst_15018);

return statearr_15180;
})();
var statearr_15181_16839 = state_15095__$1;
(statearr_15181_16839[(2)] = null);

(statearr_15181_16839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (28))){
var inst_15018 = (state_15095[(20)]);
var inst_15041 = (state_15095[(23)]);
var inst_15041__$1 = cljs.core.seq(inst_15018);
var state_15095__$1 = (function (){var statearr_15183 = state_15095;
(statearr_15183[(23)] = inst_15041__$1);

return statearr_15183;
})();
if(inst_15041__$1){
var statearr_15185_16844 = state_15095__$1;
(statearr_15185_16844[(1)] = (33));

} else {
var statearr_15186_16845 = state_15095__$1;
(statearr_15186_16845[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (25))){
var inst_15021 = (state_15095[(10)]);
var inst_15020 = (state_15095[(19)]);
var inst_15023 = (inst_15021 < inst_15020);
var inst_15024 = inst_15023;
var state_15095__$1 = state_15095;
if(cljs.core.truth_(inst_15024)){
var statearr_15188_16849 = state_15095__$1;
(statearr_15188_16849[(1)] = (27));

} else {
var statearr_15189_16850 = state_15095__$1;
(statearr_15189_16850[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (34))){
var state_15095__$1 = state_15095;
var statearr_15190_16851 = state_15095__$1;
(statearr_15190_16851[(2)] = null);

(statearr_15190_16851[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (17))){
var state_15095__$1 = state_15095;
var statearr_15195_16852 = state_15095__$1;
(statearr_15195_16852[(2)] = null);

(statearr_15195_16852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (3))){
var inst_15087 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15095__$1,inst_15087);
} else {
if((state_val_15096 === (12))){
var inst_15005 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15199_16853 = state_15095__$1;
(statearr_15199_16853[(2)] = inst_15005);

(statearr_15199_16853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (2))){
var state_15095__$1 = state_15095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15095__$1,(4),ch);
} else {
if((state_val_15096 === (23))){
var state_15095__$1 = state_15095;
var statearr_15204_16854 = state_15095__$1;
(statearr_15204_16854[(2)] = null);

(statearr_15204_16854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (35))){
var inst_15071 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15205_16858 = state_15095__$1;
(statearr_15205_16858[(2)] = inst_15071);

(statearr_15205_16858[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (19))){
var inst_14965 = (state_15095[(7)]);
var inst_14975 = cljs.core.chunk_first(inst_14965);
var inst_14976 = cljs.core.chunk_rest(inst_14965);
var inst_14977 = cljs.core.count(inst_14975);
var inst_14939 = inst_14976;
var inst_14940 = inst_14975;
var inst_14941 = inst_14977;
var inst_14942 = (0);
var state_15095__$1 = (function (){var statearr_15211 = state_15095;
(statearr_15211[(13)] = inst_14940);

(statearr_15211[(14)] = inst_14939);

(statearr_15211[(16)] = inst_14942);

(statearr_15211[(17)] = inst_14941);

return statearr_15211;
})();
var statearr_15215_16859 = state_15095__$1;
(statearr_15215_16859[(2)] = null);

(statearr_15215_16859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (11))){
var inst_14939 = (state_15095[(14)]);
var inst_14965 = (state_15095[(7)]);
var inst_14965__$1 = cljs.core.seq(inst_14939);
var state_15095__$1 = (function (){var statearr_15217 = state_15095;
(statearr_15217[(7)] = inst_14965__$1);

return statearr_15217;
})();
if(inst_14965__$1){
var statearr_15218_16864 = state_15095__$1;
(statearr_15218_16864[(1)] = (16));

} else {
var statearr_15219_16865 = state_15095__$1;
(statearr_15219_16865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (9))){
var inst_15007 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15221_16869 = state_15095__$1;
(statearr_15221_16869[(2)] = inst_15007);

(statearr_15221_16869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (5))){
var inst_14937 = cljs.core.deref(cs);
var inst_14938 = cljs.core.seq(inst_14937);
var inst_14939 = inst_14938;
var inst_14940 = null;
var inst_14941 = (0);
var inst_14942 = (0);
var state_15095__$1 = (function (){var statearr_15222 = state_15095;
(statearr_15222[(13)] = inst_14940);

(statearr_15222[(14)] = inst_14939);

(statearr_15222[(16)] = inst_14942);

(statearr_15222[(17)] = inst_14941);

return statearr_15222;
})();
var statearr_15224_16870 = state_15095__$1;
(statearr_15224_16870[(2)] = null);

(statearr_15224_16870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (14))){
var state_15095__$1 = state_15095;
var statearr_15225_16872 = state_15095__$1;
(statearr_15225_16872[(2)] = null);

(statearr_15225_16872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (45))){
var inst_15079 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15226_16873 = state_15095__$1;
(statearr_15226_16873[(2)] = inst_15079);

(statearr_15226_16873[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (26))){
var inst_15010 = (state_15095[(27)]);
var inst_15075 = (state_15095[(2)]);
var inst_15076 = cljs.core.seq(inst_15010);
var state_15095__$1 = (function (){var statearr_15227 = state_15095;
(statearr_15227[(29)] = inst_15075);

return statearr_15227;
})();
if(inst_15076){
var statearr_15228_16874 = state_15095__$1;
(statearr_15228_16874[(1)] = (42));

} else {
var statearr_15229_16875 = state_15095__$1;
(statearr_15229_16875[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (16))){
var inst_14965 = (state_15095[(7)]);
var inst_14973 = cljs.core.chunked_seq_QMARK_(inst_14965);
var state_15095__$1 = state_15095;
if(inst_14973){
var statearr_15230_16876 = state_15095__$1;
(statearr_15230_16876[(1)] = (19));

} else {
var statearr_15231_16877 = state_15095__$1;
(statearr_15231_16877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (38))){
var inst_15068 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15233_16878 = state_15095__$1;
(statearr_15233_16878[(2)] = inst_15068);

(statearr_15233_16878[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (30))){
var state_15095__$1 = state_15095;
var statearr_15234_16880 = state_15095__$1;
(statearr_15234_16880[(2)] = null);

(statearr_15234_16880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (10))){
var inst_14940 = (state_15095[(13)]);
var inst_14942 = (state_15095[(16)]);
var inst_14954 = cljs.core._nth(inst_14940,inst_14942);
var inst_14955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14954,(0),null);
var inst_14956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14954,(1),null);
var state_15095__$1 = (function (){var statearr_15235 = state_15095;
(statearr_15235[(24)] = inst_14955);

return statearr_15235;
})();
if(cljs.core.truth_(inst_14956)){
var statearr_15236_16881 = state_15095__$1;
(statearr_15236_16881[(1)] = (13));

} else {
var statearr_15241_16882 = state_15095__$1;
(statearr_15241_16882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (18))){
var inst_15003 = (state_15095[(2)]);
var state_15095__$1 = state_15095;
var statearr_15242_16883 = state_15095__$1;
(statearr_15242_16883[(2)] = inst_15003);

(statearr_15242_16883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (42))){
var state_15095__$1 = state_15095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15095__$1,(45),dchan);
} else {
if((state_val_15096 === (37))){
var inst_15058 = (state_15095[(22)]);
var inst_15041 = (state_15095[(23)]);
var inst_14930 = (state_15095[(12)]);
var inst_15058__$1 = cljs.core.first(inst_15041);
var inst_15059 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15058__$1,inst_14930,done);
var state_15095__$1 = (function (){var statearr_15245 = state_15095;
(statearr_15245[(22)] = inst_15058__$1);

return statearr_15245;
})();
if(cljs.core.truth_(inst_15059)){
var statearr_15246_16884 = state_15095__$1;
(statearr_15246_16884[(1)] = (39));

} else {
var statearr_15247_16885 = state_15095__$1;
(statearr_15247_16885[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15096 === (8))){
var inst_14942 = (state_15095[(16)]);
var inst_14941 = (state_15095[(17)]);
var inst_14948 = (inst_14942 < inst_14941);
var inst_14949 = inst_14948;
var state_15095__$1 = state_15095;
if(cljs.core.truth_(inst_14949)){
var statearr_15250_16886 = state_15095__$1;
(statearr_15250_16886[(1)] = (10));

} else {
var statearr_15252_16887 = state_15095__$1;
(statearr_15252_16887[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13474__auto__ = null;
var cljs$core$async$mult_$_state_machine__13474__auto____0 = (function (){
var statearr_15259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15259[(0)] = cljs$core$async$mult_$_state_machine__13474__auto__);

(statearr_15259[(1)] = (1));

return statearr_15259;
});
var cljs$core$async$mult_$_state_machine__13474__auto____1 = (function (state_15095){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15095);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15261){var ex__13477__auto__ = e15261;
var statearr_15262_16888 = state_15095;
(statearr_15262_16888[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15095[(4)]))){
var statearr_15263_16889 = state_15095;
(statearr_15263_16889[(1)] = cljs.core.first((state_15095[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16890 = state_15095;
state_15095 = G__16890;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13474__auto__ = function(state_15095){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13474__auto____1.call(this,state_15095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13474__auto____0;
cljs$core$async$mult_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13474__auto____1;
return cljs$core$async$mult_$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_15267 = f__13782__auto__();
(statearr_15267[(6)] = c__13781__auto___16797);

return statearr_15267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15271 = arguments.length;
switch (G__15271) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16894 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16894(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16895 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16895(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16896 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16896(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16897 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16897(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16898 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16898(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16901 = arguments.length;
var i__5770__auto___16902 = (0);
while(true){
if((i__5770__auto___16902 < len__5769__auto___16901)){
args__5775__auto__.push((arguments[i__5770__auto___16902]));

var G__16903 = (i__5770__auto___16902 + (1));
i__5770__auto___16902 = G__16903;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15305){
var map__15309 = p__15305;
var map__15309__$1 = cljs.core.__destructure_map(map__15309);
var opts = map__15309__$1;
var statearr_15310_16904 = state;
(statearr_15310_16904[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15311_16905 = state;
(statearr_15311_16905[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15313_16906 = state;
(statearr_15313_16906[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15298){
var G__15299 = cljs.core.first(seq15298);
var seq15298__$1 = cljs.core.next(seq15298);
var G__15300 = cljs.core.first(seq15298__$1);
var seq15298__$2 = cljs.core.next(seq15298__$1);
var G__15301 = cljs.core.first(seq15298__$2);
var seq15298__$3 = cljs.core.next(seq15298__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15299,G__15300,G__15301,seq15298__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15318 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15319){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15319 = meta15319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15320,meta15319__$1){
var self__ = this;
var _15320__$1 = this;
return (new cljs.core.async.t_cljs$core$async15318(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15319__$1));
}));

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15320){
var self__ = this;
var _15320__$1 = this;
return self__.meta15319;
}));

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15318.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15319","meta15319",-1733414388,null)], null);
}));

(cljs.core.async.t_cljs$core$async15318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15318");

(cljs.core.async.t_cljs$core$async15318.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15318.
 */
cljs.core.async.__GT_t_cljs$core$async15318 = (function cljs$core$async$__GT_t_cljs$core$async15318(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15319){
return (new cljs.core.async.t_cljs$core$async15318(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15319));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15318(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13781__auto___16910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_15407){
var state_val_15409 = (state_15407[(1)]);
if((state_val_15409 === (7))){
var inst_15365 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
if(cljs.core.truth_(inst_15365)){
var statearr_15414_16911 = state_15407__$1;
(statearr_15414_16911[(1)] = (8));

} else {
var statearr_15415_16912 = state_15407__$1;
(statearr_15415_16912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (20))){
var inst_15358 = (state_15407[(7)]);
var state_15407__$1 = state_15407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15407__$1,(23),out,inst_15358);
} else {
if((state_val_15409 === (1))){
var inst_15335 = calc_state();
var inst_15337 = cljs.core.__destructure_map(inst_15335);
var inst_15338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15337,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15337,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15337,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15341 = inst_15335;
var state_15407__$1 = (function (){var statearr_15421 = state_15407;
(statearr_15421[(8)] = inst_15341);

(statearr_15421[(9)] = inst_15339);

(statearr_15421[(10)] = inst_15338);

(statearr_15421[(11)] = inst_15340);

return statearr_15421;
})();
var statearr_15423_16915 = state_15407__$1;
(statearr_15423_16915[(2)] = null);

(statearr_15423_16915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (24))){
var inst_15345 = (state_15407[(12)]);
var inst_15341 = inst_15345;
var state_15407__$1 = (function (){var statearr_15425 = state_15407;
(statearr_15425[(8)] = inst_15341);

return statearr_15425;
})();
var statearr_15427_16916 = state_15407__$1;
(statearr_15427_16916[(2)] = null);

(statearr_15427_16916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (4))){
var inst_15358 = (state_15407[(7)]);
var inst_15360 = (state_15407[(13)]);
var inst_15357 = (state_15407[(2)]);
var inst_15358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15357,(0),null);
var inst_15359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15357,(1),null);
var inst_15360__$1 = (inst_15358__$1 == null);
var state_15407__$1 = (function (){var statearr_15432 = state_15407;
(statearr_15432[(7)] = inst_15358__$1);

(statearr_15432[(13)] = inst_15360__$1);

(statearr_15432[(14)] = inst_15359);

return statearr_15432;
})();
if(cljs.core.truth_(inst_15360__$1)){
var statearr_15433_16917 = state_15407__$1;
(statearr_15433_16917[(1)] = (5));

} else {
var statearr_15434_16918 = state_15407__$1;
(statearr_15434_16918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (15))){
var inst_15380 = (state_15407[(15)]);
var inst_15346 = (state_15407[(16)]);
var inst_15380__$1 = cljs.core.empty_QMARK_(inst_15346);
var state_15407__$1 = (function (){var statearr_15436 = state_15407;
(statearr_15436[(15)] = inst_15380__$1);

return statearr_15436;
})();
if(inst_15380__$1){
var statearr_15438_16919 = state_15407__$1;
(statearr_15438_16919[(1)] = (17));

} else {
var statearr_15440_16920 = state_15407__$1;
(statearr_15440_16920[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (21))){
var inst_15345 = (state_15407[(12)]);
var inst_15341 = inst_15345;
var state_15407__$1 = (function (){var statearr_15444 = state_15407;
(statearr_15444[(8)] = inst_15341);

return statearr_15444;
})();
var statearr_15445_16921 = state_15407__$1;
(statearr_15445_16921[(2)] = null);

(statearr_15445_16921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (13))){
var inst_15373 = (state_15407[(2)]);
var inst_15374 = calc_state();
var inst_15341 = inst_15374;
var state_15407__$1 = (function (){var statearr_15446 = state_15407;
(statearr_15446[(8)] = inst_15341);

(statearr_15446[(17)] = inst_15373);

return statearr_15446;
})();
var statearr_15447_16922 = state_15407__$1;
(statearr_15447_16922[(2)] = null);

(statearr_15447_16922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (22))){
var inst_15400 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
var statearr_15448_16923 = state_15407__$1;
(statearr_15448_16923[(2)] = inst_15400);

(statearr_15448_16923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (6))){
var inst_15359 = (state_15407[(14)]);
var inst_15363 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15359,change);
var state_15407__$1 = state_15407;
var statearr_15451_16924 = state_15407__$1;
(statearr_15451_16924[(2)] = inst_15363);

(statearr_15451_16924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (25))){
var state_15407__$1 = state_15407;
var statearr_15455_16925 = state_15407__$1;
(statearr_15455_16925[(2)] = null);

(statearr_15455_16925[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (17))){
var inst_15347 = (state_15407[(18)]);
var inst_15359 = (state_15407[(14)]);
var inst_15382 = (inst_15347.cljs$core$IFn$_invoke$arity$1 ? inst_15347.cljs$core$IFn$_invoke$arity$1(inst_15359) : inst_15347.call(null,inst_15359));
var inst_15383 = cljs.core.not(inst_15382);
var state_15407__$1 = state_15407;
var statearr_15457_16927 = state_15407__$1;
(statearr_15457_16927[(2)] = inst_15383);

(statearr_15457_16927[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (3))){
var inst_15404 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15407__$1,inst_15404);
} else {
if((state_val_15409 === (12))){
var state_15407__$1 = state_15407;
var statearr_15460_16928 = state_15407__$1;
(statearr_15460_16928[(2)] = null);

(statearr_15460_16928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (2))){
var inst_15341 = (state_15407[(8)]);
var inst_15345 = (state_15407[(12)]);
var inst_15345__$1 = cljs.core.__destructure_map(inst_15341);
var inst_15346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15345__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15345__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15345__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15407__$1 = (function (){var statearr_15468 = state_15407;
(statearr_15468[(12)] = inst_15345__$1);

(statearr_15468[(16)] = inst_15346);

(statearr_15468[(18)] = inst_15347);

return statearr_15468;
})();
return cljs.core.async.ioc_alts_BANG_(state_15407__$1,(4),inst_15348);
} else {
if((state_val_15409 === (23))){
var inst_15391 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
if(cljs.core.truth_(inst_15391)){
var statearr_15470_16930 = state_15407__$1;
(statearr_15470_16930[(1)] = (24));

} else {
var statearr_15471_16931 = state_15407__$1;
(statearr_15471_16931[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (19))){
var inst_15386 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
var statearr_15475_16932 = state_15407__$1;
(statearr_15475_16932[(2)] = inst_15386);

(statearr_15475_16932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (11))){
var inst_15359 = (state_15407[(14)]);
var inst_15370 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15359);
var state_15407__$1 = state_15407;
var statearr_15477_16933 = state_15407__$1;
(statearr_15477_16933[(2)] = inst_15370);

(statearr_15477_16933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (9))){
var inst_15377 = (state_15407[(19)]);
var inst_15346 = (state_15407[(16)]);
var inst_15359 = (state_15407[(14)]);
var inst_15377__$1 = (inst_15346.cljs$core$IFn$_invoke$arity$1 ? inst_15346.cljs$core$IFn$_invoke$arity$1(inst_15359) : inst_15346.call(null,inst_15359));
var state_15407__$1 = (function (){var statearr_15478 = state_15407;
(statearr_15478[(19)] = inst_15377__$1);

return statearr_15478;
})();
if(cljs.core.truth_(inst_15377__$1)){
var statearr_15479_16938 = state_15407__$1;
(statearr_15479_16938[(1)] = (14));

} else {
var statearr_15480_16940 = state_15407__$1;
(statearr_15480_16940[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (5))){
var inst_15360 = (state_15407[(13)]);
var state_15407__$1 = state_15407;
var statearr_15481_16942 = state_15407__$1;
(statearr_15481_16942[(2)] = inst_15360);

(statearr_15481_16942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (14))){
var inst_15377 = (state_15407[(19)]);
var state_15407__$1 = state_15407;
var statearr_15482_16943 = state_15407__$1;
(statearr_15482_16943[(2)] = inst_15377);

(statearr_15482_16943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (26))){
var inst_15396 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
var statearr_15483_16947 = state_15407__$1;
(statearr_15483_16947[(2)] = inst_15396);

(statearr_15483_16947[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (16))){
var inst_15388 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
if(cljs.core.truth_(inst_15388)){
var statearr_15484_16948 = state_15407__$1;
(statearr_15484_16948[(1)] = (20));

} else {
var statearr_15485_16949 = state_15407__$1;
(statearr_15485_16949[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (10))){
var inst_15402 = (state_15407[(2)]);
var state_15407__$1 = state_15407;
var statearr_15486_16952 = state_15407__$1;
(statearr_15486_16952[(2)] = inst_15402);

(statearr_15486_16952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (18))){
var inst_15380 = (state_15407[(15)]);
var state_15407__$1 = state_15407;
var statearr_15487_16954 = state_15407__$1;
(statearr_15487_16954[(2)] = inst_15380);

(statearr_15487_16954[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15409 === (8))){
var inst_15358 = (state_15407[(7)]);
var inst_15368 = (inst_15358 == null);
var state_15407__$1 = state_15407;
if(cljs.core.truth_(inst_15368)){
var statearr_15491_16955 = state_15407__$1;
(statearr_15491_16955[(1)] = (11));

} else {
var statearr_15492_16956 = state_15407__$1;
(statearr_15492_16956[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13474__auto__ = null;
var cljs$core$async$mix_$_state_machine__13474__auto____0 = (function (){
var statearr_15500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15500[(0)] = cljs$core$async$mix_$_state_machine__13474__auto__);

(statearr_15500[(1)] = (1));

return statearr_15500;
});
var cljs$core$async$mix_$_state_machine__13474__auto____1 = (function (state_15407){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15407);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15501){var ex__13477__auto__ = e15501;
var statearr_15503_16961 = state_15407;
(statearr_15503_16961[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15407[(4)]))){
var statearr_15506_16962 = state_15407;
(statearr_15506_16962[(1)] = cljs.core.first((state_15407[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16963 = state_15407;
state_15407 = G__16963;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13474__auto__ = function(state_15407){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13474__auto____1.call(this,state_15407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13474__auto____0;
cljs$core$async$mix_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13474__auto____1;
return cljs$core$async$mix_$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_15513 = f__13782__auto__();
(statearr_15513[(6)] = c__13781__auto___16910);

return statearr_15513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16965 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16965(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16970 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16970(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16976 = (function() {
var G__16977 = null;
var G__16977__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16977__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16977 = function(p,v){
switch(arguments.length){
case 1:
return G__16977__1.call(this,p);
case 2:
return G__16977__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16977.cljs$core$IFn$_invoke$arity$1 = G__16977__1;
G__16977.cljs$core$IFn$_invoke$arity$2 = G__16977__2;
return G__16977;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15550 = arguments.length;
switch (G__15550) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16976(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16976(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15581 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15582){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15582 = meta15582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15583,meta15582__$1){
var self__ = this;
var _15583__$1 = this;
return (new cljs.core.async.t_cljs$core$async15581(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15582__$1));
}));

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15583){
var self__ = this;
var _15583__$1 = this;
return self__.meta15582;
}));

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15581.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15582","meta15582",-560946794,null)], null);
}));

(cljs.core.async.t_cljs$core$async15581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15581");

(cljs.core.async.t_cljs$core$async15581.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15581.
 */
cljs.core.async.__GT_t_cljs$core$async15581 = (function cljs$core$async$__GT_t_cljs$core$async15581(ch,topic_fn,buf_fn,mults,ensure_mult,meta15582){
return (new cljs.core.async.t_cljs$core$async15581(ch,topic_fn,buf_fn,mults,ensure_mult,meta15582));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15572 = arguments.length;
switch (G__15572) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15561_SHARP_){
if(cljs.core.truth_((p1__15561_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15561_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15561_SHARP_.call(null,topic)))){
return p1__15561_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15561_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15581(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13781__auto___17002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_15676){
var state_val_15677 = (state_15676[(1)]);
if((state_val_15677 === (7))){
var inst_15668 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15679_17007 = state_15676__$1;
(statearr_15679_17007[(2)] = inst_15668);

(statearr_15679_17007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (20))){
var state_15676__$1 = state_15676;
var statearr_15680_17014 = state_15676__$1;
(statearr_15680_17014[(2)] = null);

(statearr_15680_17014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (1))){
var state_15676__$1 = state_15676;
var statearr_15681_17015 = state_15676__$1;
(statearr_15681_17015[(2)] = null);

(statearr_15681_17015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (24))){
var inst_15650 = (state_15676[(7)]);
var inst_15660 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15650);
var state_15676__$1 = state_15676;
var statearr_15682_17016 = state_15676__$1;
(statearr_15682_17016[(2)] = inst_15660);

(statearr_15682_17016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (4))){
var inst_15602 = (state_15676[(8)]);
var inst_15602__$1 = (state_15676[(2)]);
var inst_15603 = (inst_15602__$1 == null);
var state_15676__$1 = (function (){var statearr_15683 = state_15676;
(statearr_15683[(8)] = inst_15602__$1);

return statearr_15683;
})();
if(cljs.core.truth_(inst_15603)){
var statearr_15684_17017 = state_15676__$1;
(statearr_15684_17017[(1)] = (5));

} else {
var statearr_15685_17018 = state_15676__$1;
(statearr_15685_17018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (15))){
var inst_15644 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15686_17019 = state_15676__$1;
(statearr_15686_17019[(2)] = inst_15644);

(statearr_15686_17019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (21))){
var inst_15665 = (state_15676[(2)]);
var state_15676__$1 = (function (){var statearr_15687 = state_15676;
(statearr_15687[(9)] = inst_15665);

return statearr_15687;
})();
var statearr_15688_17023 = state_15676__$1;
(statearr_15688_17023[(2)] = null);

(statearr_15688_17023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (13))){
var inst_15626 = (state_15676[(10)]);
var inst_15628 = cljs.core.chunked_seq_QMARK_(inst_15626);
var state_15676__$1 = state_15676;
if(inst_15628){
var statearr_15689_17028 = state_15676__$1;
(statearr_15689_17028[(1)] = (16));

} else {
var statearr_15690_17030 = state_15676__$1;
(statearr_15690_17030[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (22))){
var inst_15657 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
if(cljs.core.truth_(inst_15657)){
var statearr_15691_17032 = state_15676__$1;
(statearr_15691_17032[(1)] = (23));

} else {
var statearr_15692_17033 = state_15676__$1;
(statearr_15692_17033[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (6))){
var inst_15650 = (state_15676[(7)]);
var inst_15652 = (state_15676[(11)]);
var inst_15602 = (state_15676[(8)]);
var inst_15650__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15602) : topic_fn.call(null,inst_15602));
var inst_15651 = cljs.core.deref(mults);
var inst_15652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15651,inst_15650__$1);
var state_15676__$1 = (function (){var statearr_15694 = state_15676;
(statearr_15694[(7)] = inst_15650__$1);

(statearr_15694[(11)] = inst_15652__$1);

return statearr_15694;
})();
if(cljs.core.truth_(inst_15652__$1)){
var statearr_15695_17037 = state_15676__$1;
(statearr_15695_17037[(1)] = (19));

} else {
var statearr_15696_17038 = state_15676__$1;
(statearr_15696_17038[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (25))){
var inst_15662 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15697_17041 = state_15676__$1;
(statearr_15697_17041[(2)] = inst_15662);

(statearr_15697_17041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (17))){
var inst_15626 = (state_15676[(10)]);
var inst_15635 = cljs.core.first(inst_15626);
var inst_15636 = cljs.core.async.muxch_STAR_(inst_15635);
var inst_15637 = cljs.core.async.close_BANG_(inst_15636);
var inst_15638 = cljs.core.next(inst_15626);
var inst_15612 = inst_15638;
var inst_15613 = null;
var inst_15614 = (0);
var inst_15615 = (0);
var state_15676__$1 = (function (){var statearr_15701 = state_15676;
(statearr_15701[(12)] = inst_15613);

(statearr_15701[(13)] = inst_15612);

(statearr_15701[(14)] = inst_15637);

(statearr_15701[(15)] = inst_15615);

(statearr_15701[(16)] = inst_15614);

return statearr_15701;
})();
var statearr_15702_17046 = state_15676__$1;
(statearr_15702_17046[(2)] = null);

(statearr_15702_17046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (3))){
var inst_15670 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15676__$1,inst_15670);
} else {
if((state_val_15677 === (12))){
var inst_15646 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15703_17049 = state_15676__$1;
(statearr_15703_17049[(2)] = inst_15646);

(statearr_15703_17049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (2))){
var state_15676__$1 = state_15676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15676__$1,(4),ch);
} else {
if((state_val_15677 === (23))){
var state_15676__$1 = state_15676;
var statearr_15704_17051 = state_15676__$1;
(statearr_15704_17051[(2)] = null);

(statearr_15704_17051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (19))){
var inst_15652 = (state_15676[(11)]);
var inst_15602 = (state_15676[(8)]);
var inst_15655 = cljs.core.async.muxch_STAR_(inst_15652);
var state_15676__$1 = state_15676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15676__$1,(22),inst_15655,inst_15602);
} else {
if((state_val_15677 === (11))){
var inst_15612 = (state_15676[(13)]);
var inst_15626 = (state_15676[(10)]);
var inst_15626__$1 = cljs.core.seq(inst_15612);
var state_15676__$1 = (function (){var statearr_15705 = state_15676;
(statearr_15705[(10)] = inst_15626__$1);

return statearr_15705;
})();
if(inst_15626__$1){
var statearr_15706_17053 = state_15676__$1;
(statearr_15706_17053[(1)] = (13));

} else {
var statearr_15707_17054 = state_15676__$1;
(statearr_15707_17054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (9))){
var inst_15648 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15711_17058 = state_15676__$1;
(statearr_15711_17058[(2)] = inst_15648);

(statearr_15711_17058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (5))){
var inst_15609 = cljs.core.deref(mults);
var inst_15610 = cljs.core.vals(inst_15609);
var inst_15611 = cljs.core.seq(inst_15610);
var inst_15612 = inst_15611;
var inst_15613 = null;
var inst_15614 = (0);
var inst_15615 = (0);
var state_15676__$1 = (function (){var statearr_15713 = state_15676;
(statearr_15713[(12)] = inst_15613);

(statearr_15713[(13)] = inst_15612);

(statearr_15713[(15)] = inst_15615);

(statearr_15713[(16)] = inst_15614);

return statearr_15713;
})();
var statearr_15714_17060 = state_15676__$1;
(statearr_15714_17060[(2)] = null);

(statearr_15714_17060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (14))){
var state_15676__$1 = state_15676;
var statearr_15719_17061 = state_15676__$1;
(statearr_15719_17061[(2)] = null);

(statearr_15719_17061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (16))){
var inst_15626 = (state_15676[(10)]);
var inst_15630 = cljs.core.chunk_first(inst_15626);
var inst_15631 = cljs.core.chunk_rest(inst_15626);
var inst_15632 = cljs.core.count(inst_15630);
var inst_15612 = inst_15631;
var inst_15613 = inst_15630;
var inst_15614 = inst_15632;
var inst_15615 = (0);
var state_15676__$1 = (function (){var statearr_15720 = state_15676;
(statearr_15720[(12)] = inst_15613);

(statearr_15720[(13)] = inst_15612);

(statearr_15720[(15)] = inst_15615);

(statearr_15720[(16)] = inst_15614);

return statearr_15720;
})();
var statearr_15721_17065 = state_15676__$1;
(statearr_15721_17065[(2)] = null);

(statearr_15721_17065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (10))){
var inst_15613 = (state_15676[(12)]);
var inst_15612 = (state_15676[(13)]);
var inst_15615 = (state_15676[(15)]);
var inst_15614 = (state_15676[(16)]);
var inst_15620 = cljs.core._nth(inst_15613,inst_15615);
var inst_15621 = cljs.core.async.muxch_STAR_(inst_15620);
var inst_15622 = cljs.core.async.close_BANG_(inst_15621);
var inst_15623 = (inst_15615 + (1));
var tmp15715 = inst_15613;
var tmp15716 = inst_15612;
var tmp15717 = inst_15614;
var inst_15612__$1 = tmp15716;
var inst_15613__$1 = tmp15715;
var inst_15614__$1 = tmp15717;
var inst_15615__$1 = inst_15623;
var state_15676__$1 = (function (){var statearr_15722 = state_15676;
(statearr_15722[(12)] = inst_15613__$1);

(statearr_15722[(13)] = inst_15612__$1);

(statearr_15722[(15)] = inst_15615__$1);

(statearr_15722[(16)] = inst_15614__$1);

(statearr_15722[(17)] = inst_15622);

return statearr_15722;
})();
var statearr_15724_17073 = state_15676__$1;
(statearr_15724_17073[(2)] = null);

(statearr_15724_17073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (18))){
var inst_15641 = (state_15676[(2)]);
var state_15676__$1 = state_15676;
var statearr_15725_17074 = state_15676__$1;
(statearr_15725_17074[(2)] = inst_15641);

(statearr_15725_17074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15677 === (8))){
var inst_15615 = (state_15676[(15)]);
var inst_15614 = (state_15676[(16)]);
var inst_15617 = (inst_15615 < inst_15614);
var inst_15618 = inst_15617;
var state_15676__$1 = state_15676;
if(cljs.core.truth_(inst_15618)){
var statearr_15726_17076 = state_15676__$1;
(statearr_15726_17076[(1)] = (10));

} else {
var statearr_15727_17077 = state_15676__$1;
(statearr_15727_17077[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_15729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15729[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_15729[(1)] = (1));

return statearr_15729;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_15676){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15676);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15731){var ex__13477__auto__ = e15731;
var statearr_15733_17081 = state_15676;
(statearr_15733_17081[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15676[(4)]))){
var statearr_15734_17082 = state_15676;
(statearr_15734_17082[(1)] = cljs.core.first((state_15676[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17084 = state_15676;
state_15676 = G__17084;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_15676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_15676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_15736 = f__13782__auto__();
(statearr_15736[(6)] = c__13781__auto___17002);

return statearr_15736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15743 = arguments.length;
switch (G__15743) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15750 = arguments.length;
switch (G__15750) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15756 = arguments.length;
switch (G__15756) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13781__auto___17105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_15832){
var state_val_15835 = (state_15832[(1)]);
if((state_val_15835 === (7))){
var state_15832__$1 = state_15832;
var statearr_15870_17107 = state_15832__$1;
(statearr_15870_17107[(2)] = null);

(statearr_15870_17107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (1))){
var state_15832__$1 = state_15832;
var statearr_15871_17108 = state_15832__$1;
(statearr_15871_17108[(2)] = null);

(statearr_15871_17108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (4))){
var inst_15765 = (state_15832[(7)]);
var inst_15767 = (state_15832[(8)]);
var inst_15770 = (inst_15767 < inst_15765);
var state_15832__$1 = state_15832;
if(cljs.core.truth_(inst_15770)){
var statearr_15876_17112 = state_15832__$1;
(statearr_15876_17112[(1)] = (6));

} else {
var statearr_15877_17113 = state_15832__$1;
(statearr_15877_17113[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (15))){
var inst_15801 = (state_15832[(9)]);
var inst_15808 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15801);
var state_15832__$1 = state_15832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15832__$1,(17),out,inst_15808);
} else {
if((state_val_15835 === (13))){
var inst_15801 = (state_15832[(9)]);
var inst_15801__$1 = (state_15832[(2)]);
var inst_15802 = cljs.core.some(cljs.core.nil_QMARK_,inst_15801__$1);
var state_15832__$1 = (function (){var statearr_15878 = state_15832;
(statearr_15878[(9)] = inst_15801__$1);

return statearr_15878;
})();
if(cljs.core.truth_(inst_15802)){
var statearr_15879_17115 = state_15832__$1;
(statearr_15879_17115[(1)] = (14));

} else {
var statearr_15880_17116 = state_15832__$1;
(statearr_15880_17116[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (6))){
var state_15832__$1 = state_15832;
var statearr_15881_17119 = state_15832__$1;
(statearr_15881_17119[(2)] = null);

(statearr_15881_17119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (17))){
var inst_15810 = (state_15832[(2)]);
var state_15832__$1 = (function (){var statearr_15892 = state_15832;
(statearr_15892[(10)] = inst_15810);

return statearr_15892;
})();
var statearr_15893_17121 = state_15832__$1;
(statearr_15893_17121[(2)] = null);

(statearr_15893_17121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (3))){
var inst_15815 = (state_15832[(2)]);
var state_15832__$1 = state_15832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15832__$1,inst_15815);
} else {
if((state_val_15835 === (12))){
var _ = (function (){var statearr_15895 = state_15832;
(statearr_15895[(4)] = cljs.core.rest((state_15832[(4)])));

return statearr_15895;
})();
var state_15832__$1 = state_15832;
var ex15889 = (state_15832__$1[(2)]);
var statearr_15896_17123 = state_15832__$1;
(statearr_15896_17123[(5)] = ex15889);


if((ex15889 instanceof Object)){
var statearr_15897_17124 = state_15832__$1;
(statearr_15897_17124[(1)] = (11));

(statearr_15897_17124[(5)] = null);

} else {
throw ex15889;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (2))){
var inst_15764 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15765 = cnt;
var inst_15767 = (0);
var state_15832__$1 = (function (){var statearr_15905 = state_15832;
(statearr_15905[(7)] = inst_15765);

(statearr_15905[(8)] = inst_15767);

(statearr_15905[(11)] = inst_15764);

return statearr_15905;
})();
var statearr_15906_17128 = state_15832__$1;
(statearr_15906_17128[(2)] = null);

(statearr_15906_17128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (11))){
var inst_15776 = (state_15832[(2)]);
var inst_15777 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15832__$1 = (function (){var statearr_15909 = state_15832;
(statearr_15909[(12)] = inst_15776);

return statearr_15909;
})();
var statearr_15911_17136 = state_15832__$1;
(statearr_15911_17136[(2)] = inst_15777);

(statearr_15911_17136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (9))){
var inst_15767 = (state_15832[(8)]);
var _ = (function (){var statearr_15923 = state_15832;
(statearr_15923[(4)] = cljs.core.cons((12),(state_15832[(4)])));

return statearr_15923;
})();
var inst_15784 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15767) : chs__$1.call(null,inst_15767));
var inst_15785 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15767) : done.call(null,inst_15767));
var inst_15786 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15784,inst_15785);
var ___$1 = (function (){var statearr_15924 = state_15832;
(statearr_15924[(4)] = cljs.core.rest((state_15832[(4)])));

return statearr_15924;
})();
var state_15832__$1 = state_15832;
var statearr_15925_17140 = state_15832__$1;
(statearr_15925_17140[(2)] = inst_15786);

(statearr_15925_17140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (5))){
var inst_15796 = (state_15832[(2)]);
var state_15832__$1 = (function (){var statearr_15926 = state_15832;
(statearr_15926[(13)] = inst_15796);

return statearr_15926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15832__$1,(13),dchan);
} else {
if((state_val_15835 === (14))){
var inst_15805 = cljs.core.async.close_BANG_(out);
var state_15832__$1 = state_15832;
var statearr_15927_17142 = state_15832__$1;
(statearr_15927_17142[(2)] = inst_15805);

(statearr_15927_17142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (16))){
var inst_15813 = (state_15832[(2)]);
var state_15832__$1 = state_15832;
var statearr_15928_17143 = state_15832__$1;
(statearr_15928_17143[(2)] = inst_15813);

(statearr_15928_17143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (10))){
var inst_15767 = (state_15832[(8)]);
var inst_15789 = (state_15832[(2)]);
var inst_15790 = (inst_15767 + (1));
var inst_15767__$1 = inst_15790;
var state_15832__$1 = (function (){var statearr_15929 = state_15832;
(statearr_15929[(14)] = inst_15789);

(statearr_15929[(8)] = inst_15767__$1);

return statearr_15929;
})();
var statearr_15930_17147 = state_15832__$1;
(statearr_15930_17147[(2)] = null);

(statearr_15930_17147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (8))){
var inst_15794 = (state_15832[(2)]);
var state_15832__$1 = state_15832;
var statearr_15931_17148 = state_15832__$1;
(statearr_15931_17148[(2)] = inst_15794);

(statearr_15931_17148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_15933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15933[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_15933[(1)] = (1));

return statearr_15933;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_15832){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15832);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15934){var ex__13477__auto__ = e15934;
var statearr_15935_17152 = state_15832;
(statearr_15935_17152[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15832[(4)]))){
var statearr_15937_17154 = state_15832;
(statearr_15937_17154[(1)] = cljs.core.first((state_15832[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17155 = state_15832;
state_15832 = G__17155;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_15832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_15832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_15938 = f__13782__auto__();
(statearr_15938[(6)] = c__13781__auto___17105);

return statearr_15938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15943 = arguments.length;
switch (G__15943) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13781__auto___17161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_15977){
var state_val_15978 = (state_15977[(1)]);
if((state_val_15978 === (7))){
var inst_15955 = (state_15977[(7)]);
var inst_15954 = (state_15977[(8)]);
var inst_15954__$1 = (state_15977[(2)]);
var inst_15955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15954__$1,(0),null);
var inst_15956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15954__$1,(1),null);
var inst_15957 = (inst_15955__$1 == null);
var state_15977__$1 = (function (){var statearr_15981 = state_15977;
(statearr_15981[(7)] = inst_15955__$1);

(statearr_15981[(8)] = inst_15954__$1);

(statearr_15981[(9)] = inst_15956);

return statearr_15981;
})();
if(cljs.core.truth_(inst_15957)){
var statearr_15982_17163 = state_15977__$1;
(statearr_15982_17163[(1)] = (8));

} else {
var statearr_15983_17164 = state_15977__$1;
(statearr_15983_17164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15978 === (1))){
var inst_15944 = cljs.core.vec(chs);
var inst_15945 = inst_15944;
var state_15977__$1 = (function (){var statearr_15984 = state_15977;
(statearr_15984[(10)] = inst_15945);

return statearr_15984;
})();
var statearr_15986_17168 = state_15977__$1;
(statearr_15986_17168[(2)] = null);

(statearr_15986_17168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15978 === (4))){
var inst_15945 = (state_15977[(10)]);
var state_15977__$1 = state_15977;
return cljs.core.async.ioc_alts_BANG_(state_15977__$1,(7),inst_15945);
} else {
if((state_val_15978 === (6))){
var inst_15972 = (state_15977[(2)]);
var state_15977__$1 = state_15977;
var statearr_15989_17170 = state_15977__$1;
(statearr_15989_17170[(2)] = inst_15972);

(statearr_15989_17170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15978 === (3))){
var inst_15974 = (state_15977[(2)]);
var state_15977__$1 = state_15977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15977__$1,inst_15974);
} else {
if((state_val_15978 === (2))){
var inst_15945 = (state_15977[(10)]);
var inst_15947 = cljs.core.count(inst_15945);
var inst_15948 = (inst_15947 > (0));
var state_15977__$1 = state_15977;
if(cljs.core.truth_(inst_15948)){
var statearr_15993_17173 = state_15977__$1;
(statearr_15993_17173[(1)] = (4));

} else {
var statearr_15994_17175 = state_15977__$1;
(statearr_15994_17175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15978 === (11))){
var inst_15945 = (state_15977[(10)]);
var inst_15965 = (state_15977[(2)]);
var tmp15990 = inst_15945;
var inst_15945__$1 = tmp15990;
var state_15977__$1 = (function (){var statearr_15999 = state_15977;
(statearr_15999[(10)] = inst_15945__$1);

(statearr_15999[(11)] = inst_15965);

return statearr_15999;
})();
var statearr_16000_17182 = state_15977__$1;
(statearr_16000_17182[(2)] = null);

(statearr_16000_17182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15978 === (9))){
var inst_15955 = (state_15977[(7)]);
var state_15977__$1 = state_15977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15977__$1,(11),out,inst_15955);
} else {
if((state_val_15978 === (5))){
var inst_15970 = cljs.core.async.close_BANG_(out);
var state_15977__$1 = state_15977;
var statearr_16002_17184 = state_15977__$1;
(statearr_16002_17184[(2)] = inst_15970);

(statearr_16002_17184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15978 === (10))){
var inst_15968 = (state_15977[(2)]);
var state_15977__$1 = state_15977;
var statearr_16004_17187 = state_15977__$1;
(statearr_16004_17187[(2)] = inst_15968);

(statearr_16004_17187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15978 === (8))){
var inst_15955 = (state_15977[(7)]);
var inst_15954 = (state_15977[(8)]);
var inst_15945 = (state_15977[(10)]);
var inst_15956 = (state_15977[(9)]);
var inst_15960 = (function (){var cs = inst_15945;
var vec__15950 = inst_15954;
var v = inst_15955;
var c = inst_15956;
return (function (p1__15940_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15940_SHARP_);
});
})();
var inst_15961 = cljs.core.filterv(inst_15960,inst_15945);
var inst_15945__$1 = inst_15961;
var state_15977__$1 = (function (){var statearr_16005 = state_15977;
(statearr_16005[(10)] = inst_15945__$1);

return statearr_16005;
})();
var statearr_16006_17190 = state_15977__$1;
(statearr_16006_17190[(2)] = null);

(statearr_16006_17190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16007[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16007[(1)] = (1));

return statearr_16007;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_15977){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15977);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16008){var ex__13477__auto__ = e16008;
var statearr_16009_17194 = state_15977;
(statearr_16009_17194[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15977[(4)]))){
var statearr_16010_17195 = state_15977;
(statearr_16010_17195[(1)] = cljs.core.first((state_15977[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17197 = state_15977;
state_15977 = G__17197;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_15977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_15977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_16012 = f__13782__auto__();
(statearr_16012[(6)] = c__13781__auto___17161);

return statearr_16012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16014 = arguments.length;
switch (G__16014) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13781__auto___17203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_16041){
var state_val_16042 = (state_16041[(1)]);
if((state_val_16042 === (7))){
var inst_16023 = (state_16041[(7)]);
var inst_16023__$1 = (state_16041[(2)]);
var inst_16024 = (inst_16023__$1 == null);
var inst_16025 = cljs.core.not(inst_16024);
var state_16041__$1 = (function (){var statearr_16043 = state_16041;
(statearr_16043[(7)] = inst_16023__$1);

return statearr_16043;
})();
if(inst_16025){
var statearr_16044_17206 = state_16041__$1;
(statearr_16044_17206[(1)] = (8));

} else {
var statearr_16045_17208 = state_16041__$1;
(statearr_16045_17208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (1))){
var inst_16017 = (0);
var state_16041__$1 = (function (){var statearr_16046 = state_16041;
(statearr_16046[(8)] = inst_16017);

return statearr_16046;
})();
var statearr_16047_17209 = state_16041__$1;
(statearr_16047_17209[(2)] = null);

(statearr_16047_17209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (4))){
var state_16041__$1 = state_16041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16041__$1,(7),ch);
} else {
if((state_val_16042 === (6))){
var inst_16036 = (state_16041[(2)]);
var state_16041__$1 = state_16041;
var statearr_16048_17211 = state_16041__$1;
(statearr_16048_17211[(2)] = inst_16036);

(statearr_16048_17211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (3))){
var inst_16038 = (state_16041[(2)]);
var inst_16039 = cljs.core.async.close_BANG_(out);
var state_16041__$1 = (function (){var statearr_16049 = state_16041;
(statearr_16049[(9)] = inst_16038);

return statearr_16049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16041__$1,inst_16039);
} else {
if((state_val_16042 === (2))){
var inst_16017 = (state_16041[(8)]);
var inst_16019 = (inst_16017 < n);
var state_16041__$1 = state_16041;
if(cljs.core.truth_(inst_16019)){
var statearr_16050_17215 = state_16041__$1;
(statearr_16050_17215[(1)] = (4));

} else {
var statearr_16055_17216 = state_16041__$1;
(statearr_16055_17216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (11))){
var inst_16017 = (state_16041[(8)]);
var inst_16028 = (state_16041[(2)]);
var inst_16029 = (inst_16017 + (1));
var inst_16017__$1 = inst_16029;
var state_16041__$1 = (function (){var statearr_16056 = state_16041;
(statearr_16056[(10)] = inst_16028);

(statearr_16056[(8)] = inst_16017__$1);

return statearr_16056;
})();
var statearr_16057_17218 = state_16041__$1;
(statearr_16057_17218[(2)] = null);

(statearr_16057_17218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (9))){
var state_16041__$1 = state_16041;
var statearr_16058_17219 = state_16041__$1;
(statearr_16058_17219[(2)] = null);

(statearr_16058_17219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (5))){
var state_16041__$1 = state_16041;
var statearr_16059_17221 = state_16041__$1;
(statearr_16059_17221[(2)] = null);

(statearr_16059_17221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (10))){
var inst_16033 = (state_16041[(2)]);
var state_16041__$1 = state_16041;
var statearr_16060_17224 = state_16041__$1;
(statearr_16060_17224[(2)] = inst_16033);

(statearr_16060_17224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16042 === (8))){
var inst_16023 = (state_16041[(7)]);
var state_16041__$1 = state_16041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16041__$1,(11),out,inst_16023);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16061[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16061[(1)] = (1));

return statearr_16061;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_16041){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16041);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16062){var ex__13477__auto__ = e16062;
var statearr_16063_17229 = state_16041;
(statearr_16063_17229[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16041[(4)]))){
var statearr_16064_17231 = state_16041;
(statearr_16064_17231[(1)] = cljs.core.first((state_16041[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17234 = state_16041;
state_16041 = G__17234;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_16041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_16041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_16065 = f__13782__auto__();
(statearr_16065[(6)] = c__13781__auto___17203);

return statearr_16065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16075 = (function (f,ch,meta16068,_,fn1,meta16076){
this.f = f;
this.ch = ch;
this.meta16068 = meta16068;
this._ = _;
this.fn1 = fn1;
this.meta16076 = meta16076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16077,meta16076__$1){
var self__ = this;
var _16077__$1 = this;
return (new cljs.core.async.t_cljs$core$async16075(self__.f,self__.ch,self__.meta16068,self__._,self__.fn1,meta16076__$1));
}));

(cljs.core.async.t_cljs$core$async16075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16077){
var self__ = this;
var _16077__$1 = this;
return self__.meta16076;
}));

(cljs.core.async.t_cljs$core$async16075.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16075.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16066_SHARP_){
var G__16078 = (((p1__16066_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16066_SHARP_) : self__.f.call(null,p1__16066_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16078) : f1.call(null,G__16078));
});
}));

(cljs.core.async.t_cljs$core$async16075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16068","meta16068",-1199449575,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16067","cljs.core.async/t_cljs$core$async16067",-1729805582,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16076","meta16076",1304422398,null)], null);
}));

(cljs.core.async.t_cljs$core$async16075.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16075");

(cljs.core.async.t_cljs$core$async16075.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16075");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16075.
 */
cljs.core.async.__GT_t_cljs$core$async16075 = (function cljs$core$async$__GT_t_cljs$core$async16075(f,ch,meta16068,_,fn1,meta16076){
return (new cljs.core.async.t_cljs$core$async16075(f,ch,meta16068,_,fn1,meta16076));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16067 = (function (f,ch,meta16068){
this.f = f;
this.ch = ch;
this.meta16068 = meta16068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16069,meta16068__$1){
var self__ = this;
var _16069__$1 = this;
return (new cljs.core.async.t_cljs$core$async16067(self__.f,self__.ch,meta16068__$1));
}));

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16069){
var self__ = this;
var _16069__$1 = this;
return self__.meta16068;
}));

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16075(self__.f,self__.ch,self__.meta16068,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16079 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16079) : self__.f.call(null,G__16079));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16067.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16068","meta16068",-1199449575,null)], null);
}));

(cljs.core.async.t_cljs$core$async16067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16067");

(cljs.core.async.t_cljs$core$async16067.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16067.
 */
cljs.core.async.__GT_t_cljs$core$async16067 = (function cljs$core$async$__GT_t_cljs$core$async16067(f,ch,meta16068){
return (new cljs.core.async.t_cljs$core$async16067(f,ch,meta16068));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16067(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16081 = (function (f,ch,meta16082){
this.f = f;
this.ch = ch;
this.meta16082 = meta16082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16083,meta16082__$1){
var self__ = this;
var _16083__$1 = this;
return (new cljs.core.async.t_cljs$core$async16081(self__.f,self__.ch,meta16082__$1));
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16083){
var self__ = this;
var _16083__$1 = this;
return self__.meta16082;
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16082","meta16082",-677461928,null)], null);
}));

(cljs.core.async.t_cljs$core$async16081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16081");

(cljs.core.async.t_cljs$core$async16081.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16081.
 */
cljs.core.async.__GT_t_cljs$core$async16081 = (function cljs$core$async$__GT_t_cljs$core$async16081(f,ch,meta16082){
return (new cljs.core.async.t_cljs$core$async16081(f,ch,meta16082));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16081(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16089 = (function (p,ch,meta16090){
this.p = p;
this.ch = ch;
this.meta16090 = meta16090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16091,meta16090__$1){
var self__ = this;
var _16091__$1 = this;
return (new cljs.core.async.t_cljs$core$async16089(self__.p,self__.ch,meta16090__$1));
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16091){
var self__ = this;
var _16091__$1 = this;
return self__.meta16090;
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16090","meta16090",1490069935,null)], null);
}));

(cljs.core.async.t_cljs$core$async16089.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16089");

(cljs.core.async.t_cljs$core$async16089.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16089");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16089.
 */
cljs.core.async.__GT_t_cljs$core$async16089 = (function cljs$core$async$__GT_t_cljs$core$async16089(p,ch,meta16090){
return (new cljs.core.async.t_cljs$core$async16089(p,ch,meta16090));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16089(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16106 = arguments.length;
switch (G__16106) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13781__auto___17267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_16145){
var state_val_16146 = (state_16145[(1)]);
if((state_val_16146 === (7))){
var inst_16141 = (state_16145[(2)]);
var state_16145__$1 = state_16145;
var statearr_16147_17271 = state_16145__$1;
(statearr_16147_17271[(2)] = inst_16141);

(statearr_16147_17271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (1))){
var state_16145__$1 = state_16145;
var statearr_16148_17272 = state_16145__$1;
(statearr_16148_17272[(2)] = null);

(statearr_16148_17272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (4))){
var inst_16127 = (state_16145[(7)]);
var inst_16127__$1 = (state_16145[(2)]);
var inst_16128 = (inst_16127__$1 == null);
var state_16145__$1 = (function (){var statearr_16150 = state_16145;
(statearr_16150[(7)] = inst_16127__$1);

return statearr_16150;
})();
if(cljs.core.truth_(inst_16128)){
var statearr_16151_17274 = state_16145__$1;
(statearr_16151_17274[(1)] = (5));

} else {
var statearr_16152_17275 = state_16145__$1;
(statearr_16152_17275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (6))){
var inst_16127 = (state_16145[(7)]);
var inst_16132 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16127) : p.call(null,inst_16127));
var state_16145__$1 = state_16145;
if(cljs.core.truth_(inst_16132)){
var statearr_16153_17278 = state_16145__$1;
(statearr_16153_17278[(1)] = (8));

} else {
var statearr_16154_17279 = state_16145__$1;
(statearr_16154_17279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (3))){
var inst_16143 = (state_16145[(2)]);
var state_16145__$1 = state_16145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16145__$1,inst_16143);
} else {
if((state_val_16146 === (2))){
var state_16145__$1 = state_16145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16145__$1,(4),ch);
} else {
if((state_val_16146 === (11))){
var inst_16135 = (state_16145[(2)]);
var state_16145__$1 = state_16145;
var statearr_16157_17281 = state_16145__$1;
(statearr_16157_17281[(2)] = inst_16135);

(statearr_16157_17281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (9))){
var state_16145__$1 = state_16145;
var statearr_16159_17283 = state_16145__$1;
(statearr_16159_17283[(2)] = null);

(statearr_16159_17283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (5))){
var inst_16130 = cljs.core.async.close_BANG_(out);
var state_16145__$1 = state_16145;
var statearr_16160_17285 = state_16145__$1;
(statearr_16160_17285[(2)] = inst_16130);

(statearr_16160_17285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (10))){
var inst_16138 = (state_16145[(2)]);
var state_16145__$1 = (function (){var statearr_16161 = state_16145;
(statearr_16161[(8)] = inst_16138);

return statearr_16161;
})();
var statearr_16162_17289 = state_16145__$1;
(statearr_16162_17289[(2)] = null);

(statearr_16162_17289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16146 === (8))){
var inst_16127 = (state_16145[(7)]);
var state_16145__$1 = state_16145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16145__$1,(11),out,inst_16127);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16164 = [null,null,null,null,null,null,null,null,null];
(statearr_16164[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16164[(1)] = (1));

return statearr_16164;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_16145){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16145);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16166){var ex__13477__auto__ = e16166;
var statearr_16167_17291 = state_16145;
(statearr_16167_17291[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16145[(4)]))){
var statearr_16168_17292 = state_16145;
(statearr_16168_17292[(1)] = cljs.core.first((state_16145[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17294 = state_16145;
state_16145 = G__17294;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_16145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_16145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_16169 = f__13782__auto__();
(statearr_16169[(6)] = c__13781__auto___17267);

return statearr_16169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16173 = arguments.length;
switch (G__16173) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13781__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_16239){
var state_val_16240 = (state_16239[(1)]);
if((state_val_16240 === (7))){
var inst_16231 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16242_17307 = state_16239__$1;
(statearr_16242_17307[(2)] = inst_16231);

(statearr_16242_17307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (20))){
var inst_16201 = (state_16239[(7)]);
var inst_16212 = (state_16239[(2)]);
var inst_16213 = cljs.core.next(inst_16201);
var inst_16187 = inst_16213;
var inst_16188 = null;
var inst_16189 = (0);
var inst_16190 = (0);
var state_16239__$1 = (function (){var statearr_16243 = state_16239;
(statearr_16243[(8)] = inst_16212);

(statearr_16243[(9)] = inst_16187);

(statearr_16243[(10)] = inst_16188);

(statearr_16243[(11)] = inst_16190);

(statearr_16243[(12)] = inst_16189);

return statearr_16243;
})();
var statearr_16244_17309 = state_16239__$1;
(statearr_16244_17309[(2)] = null);

(statearr_16244_17309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (1))){
var state_16239__$1 = state_16239;
var statearr_16245_17310 = state_16239__$1;
(statearr_16245_17310[(2)] = null);

(statearr_16245_17310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (4))){
var inst_16176 = (state_16239[(13)]);
var inst_16176__$1 = (state_16239[(2)]);
var inst_16177 = (inst_16176__$1 == null);
var state_16239__$1 = (function (){var statearr_16246 = state_16239;
(statearr_16246[(13)] = inst_16176__$1);

return statearr_16246;
})();
if(cljs.core.truth_(inst_16177)){
var statearr_16247_17314 = state_16239__$1;
(statearr_16247_17314[(1)] = (5));

} else {
var statearr_16248_17315 = state_16239__$1;
(statearr_16248_17315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (15))){
var state_16239__$1 = state_16239;
var statearr_16252_17316 = state_16239__$1;
(statearr_16252_17316[(2)] = null);

(statearr_16252_17316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (21))){
var state_16239__$1 = state_16239;
var statearr_16253_17319 = state_16239__$1;
(statearr_16253_17319[(2)] = null);

(statearr_16253_17319[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (13))){
var inst_16187 = (state_16239[(9)]);
var inst_16188 = (state_16239[(10)]);
var inst_16190 = (state_16239[(11)]);
var inst_16189 = (state_16239[(12)]);
var inst_16197 = (state_16239[(2)]);
var inst_16198 = (inst_16190 + (1));
var tmp16249 = inst_16187;
var tmp16250 = inst_16188;
var tmp16251 = inst_16189;
var inst_16187__$1 = tmp16249;
var inst_16188__$1 = tmp16250;
var inst_16189__$1 = tmp16251;
var inst_16190__$1 = inst_16198;
var state_16239__$1 = (function (){var statearr_16254 = state_16239;
(statearr_16254[(9)] = inst_16187__$1);

(statearr_16254[(10)] = inst_16188__$1);

(statearr_16254[(14)] = inst_16197);

(statearr_16254[(11)] = inst_16190__$1);

(statearr_16254[(12)] = inst_16189__$1);

return statearr_16254;
})();
var statearr_16255_17321 = state_16239__$1;
(statearr_16255_17321[(2)] = null);

(statearr_16255_17321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (22))){
var state_16239__$1 = state_16239;
var statearr_16256_17322 = state_16239__$1;
(statearr_16256_17322[(2)] = null);

(statearr_16256_17322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (6))){
var inst_16176 = (state_16239[(13)]);
var inst_16185 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16176) : f.call(null,inst_16176));
var inst_16186 = cljs.core.seq(inst_16185);
var inst_16187 = inst_16186;
var inst_16188 = null;
var inst_16189 = (0);
var inst_16190 = (0);
var state_16239__$1 = (function (){var statearr_16257 = state_16239;
(statearr_16257[(9)] = inst_16187);

(statearr_16257[(10)] = inst_16188);

(statearr_16257[(11)] = inst_16190);

(statearr_16257[(12)] = inst_16189);

return statearr_16257;
})();
var statearr_16258_17323 = state_16239__$1;
(statearr_16258_17323[(2)] = null);

(statearr_16258_17323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (17))){
var inst_16201 = (state_16239[(7)]);
var inst_16205 = cljs.core.chunk_first(inst_16201);
var inst_16206 = cljs.core.chunk_rest(inst_16201);
var inst_16207 = cljs.core.count(inst_16205);
var inst_16187 = inst_16206;
var inst_16188 = inst_16205;
var inst_16189 = inst_16207;
var inst_16190 = (0);
var state_16239__$1 = (function (){var statearr_16259 = state_16239;
(statearr_16259[(9)] = inst_16187);

(statearr_16259[(10)] = inst_16188);

(statearr_16259[(11)] = inst_16190);

(statearr_16259[(12)] = inst_16189);

return statearr_16259;
})();
var statearr_16260_17324 = state_16239__$1;
(statearr_16260_17324[(2)] = null);

(statearr_16260_17324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (3))){
var inst_16233 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16239__$1,inst_16233);
} else {
if((state_val_16240 === (12))){
var inst_16221 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16261_17325 = state_16239__$1;
(statearr_16261_17325[(2)] = inst_16221);

(statearr_16261_17325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (2))){
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16239__$1,(4),in$);
} else {
if((state_val_16240 === (23))){
var inst_16229 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16262_17330 = state_16239__$1;
(statearr_16262_17330[(2)] = inst_16229);

(statearr_16262_17330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (19))){
var inst_16216 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16263_17331 = state_16239__$1;
(statearr_16263_17331[(2)] = inst_16216);

(statearr_16263_17331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (11))){
var inst_16187 = (state_16239[(9)]);
var inst_16201 = (state_16239[(7)]);
var inst_16201__$1 = cljs.core.seq(inst_16187);
var state_16239__$1 = (function (){var statearr_16264 = state_16239;
(statearr_16264[(7)] = inst_16201__$1);

return statearr_16264;
})();
if(inst_16201__$1){
var statearr_16265_17332 = state_16239__$1;
(statearr_16265_17332[(1)] = (14));

} else {
var statearr_16266_17333 = state_16239__$1;
(statearr_16266_17333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (9))){
var inst_16223 = (state_16239[(2)]);
var inst_16224 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16239__$1 = (function (){var statearr_16268 = state_16239;
(statearr_16268[(15)] = inst_16223);

return statearr_16268;
})();
if(cljs.core.truth_(inst_16224)){
var statearr_16269_17334 = state_16239__$1;
(statearr_16269_17334[(1)] = (21));

} else {
var statearr_16270_17335 = state_16239__$1;
(statearr_16270_17335[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (5))){
var inst_16179 = cljs.core.async.close_BANG_(out);
var state_16239__$1 = state_16239;
var statearr_16271_17336 = state_16239__$1;
(statearr_16271_17336[(2)] = inst_16179);

(statearr_16271_17336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (14))){
var inst_16201 = (state_16239[(7)]);
var inst_16203 = cljs.core.chunked_seq_QMARK_(inst_16201);
var state_16239__$1 = state_16239;
if(inst_16203){
var statearr_16272_17337 = state_16239__$1;
(statearr_16272_17337[(1)] = (17));

} else {
var statearr_16273_17338 = state_16239__$1;
(statearr_16273_17338[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (16))){
var inst_16219 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16274_17339 = state_16239__$1;
(statearr_16274_17339[(2)] = inst_16219);

(statearr_16274_17339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (10))){
var inst_16188 = (state_16239[(10)]);
var inst_16190 = (state_16239[(11)]);
var inst_16195 = cljs.core._nth(inst_16188,inst_16190);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16239__$1,(13),out,inst_16195);
} else {
if((state_val_16240 === (18))){
var inst_16201 = (state_16239[(7)]);
var inst_16210 = cljs.core.first(inst_16201);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16239__$1,(20),out,inst_16210);
} else {
if((state_val_16240 === (8))){
var inst_16190 = (state_16239[(11)]);
var inst_16189 = (state_16239[(12)]);
var inst_16192 = (inst_16190 < inst_16189);
var inst_16193 = inst_16192;
var state_16239__$1 = state_16239;
if(cljs.core.truth_(inst_16193)){
var statearr_16275_17340 = state_16239__$1;
(statearr_16275_17340[(1)] = (10));

} else {
var statearr_16276_17341 = state_16239__$1;
(statearr_16276_17341[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_16277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16277[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__);

(statearr_16277[(1)] = (1));

return statearr_16277;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____1 = (function (state_16239){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16239);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16278){var ex__13477__auto__ = e16278;
var statearr_16279_17345 = state_16239;
(statearr_16279_17345[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16239[(4)]))){
var statearr_16280_17346 = state_16239;
(statearr_16280_17346[(1)] = cljs.core.first((state_16239[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17347 = state_16239;
state_16239 = G__17347;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__ = function(state_16239){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____1.call(this,state_16239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_16281 = f__13782__auto__();
(statearr_16281[(6)] = c__13781__auto__);

return statearr_16281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));

return c__13781__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16283 = arguments.length;
switch (G__16283) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16288 = arguments.length;
switch (G__16288) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16293 = arguments.length;
switch (G__16293) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13781__auto___17352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_16318){
var state_val_16319 = (state_16318[(1)]);
if((state_val_16319 === (7))){
var inst_16313 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
var statearr_16321_17353 = state_16318__$1;
(statearr_16321_17353[(2)] = inst_16313);

(statearr_16321_17353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (1))){
var inst_16294 = null;
var state_16318__$1 = (function (){var statearr_16322 = state_16318;
(statearr_16322[(7)] = inst_16294);

return statearr_16322;
})();
var statearr_16323_17355 = state_16318__$1;
(statearr_16323_17355[(2)] = null);

(statearr_16323_17355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (4))){
var inst_16297 = (state_16318[(8)]);
var inst_16297__$1 = (state_16318[(2)]);
var inst_16298 = (inst_16297__$1 == null);
var inst_16299 = cljs.core.not(inst_16298);
var state_16318__$1 = (function (){var statearr_16324 = state_16318;
(statearr_16324[(8)] = inst_16297__$1);

return statearr_16324;
})();
if(inst_16299){
var statearr_16325_17356 = state_16318__$1;
(statearr_16325_17356[(1)] = (5));

} else {
var statearr_16326_17358 = state_16318__$1;
(statearr_16326_17358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (6))){
var state_16318__$1 = state_16318;
var statearr_16327_17359 = state_16318__$1;
(statearr_16327_17359[(2)] = null);

(statearr_16327_17359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (3))){
var inst_16315 = (state_16318[(2)]);
var inst_16316 = cljs.core.async.close_BANG_(out);
var state_16318__$1 = (function (){var statearr_16328 = state_16318;
(statearr_16328[(9)] = inst_16315);

return statearr_16328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16318__$1,inst_16316);
} else {
if((state_val_16319 === (2))){
var state_16318__$1 = state_16318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16318__$1,(4),ch);
} else {
if((state_val_16319 === (11))){
var inst_16297 = (state_16318[(8)]);
var inst_16307 = (state_16318[(2)]);
var inst_16294 = inst_16297;
var state_16318__$1 = (function (){var statearr_16329 = state_16318;
(statearr_16329[(7)] = inst_16294);

(statearr_16329[(10)] = inst_16307);

return statearr_16329;
})();
var statearr_16330_17360 = state_16318__$1;
(statearr_16330_17360[(2)] = null);

(statearr_16330_17360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (9))){
var inst_16297 = (state_16318[(8)]);
var state_16318__$1 = state_16318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16318__$1,(11),out,inst_16297);
} else {
if((state_val_16319 === (5))){
var inst_16297 = (state_16318[(8)]);
var inst_16294 = (state_16318[(7)]);
var inst_16302 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16297,inst_16294);
var state_16318__$1 = state_16318;
if(inst_16302){
var statearr_16332_17361 = state_16318__$1;
(statearr_16332_17361[(1)] = (8));

} else {
var statearr_16333_17362 = state_16318__$1;
(statearr_16333_17362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (10))){
var inst_16310 = (state_16318[(2)]);
var state_16318__$1 = state_16318;
var statearr_16334_17363 = state_16318__$1;
(statearr_16334_17363[(2)] = inst_16310);

(statearr_16334_17363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16319 === (8))){
var inst_16294 = (state_16318[(7)]);
var tmp16331 = inst_16294;
var inst_16294__$1 = tmp16331;
var state_16318__$1 = (function (){var statearr_16335 = state_16318;
(statearr_16335[(7)] = inst_16294__$1);

return statearr_16335;
})();
var statearr_16336_17364 = state_16318__$1;
(statearr_16336_17364[(2)] = null);

(statearr_16336_17364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16337[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16337[(1)] = (1));

return statearr_16337;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_16318){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16318);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16338){var ex__13477__auto__ = e16338;
var statearr_16339_17365 = state_16318;
(statearr_16339_17365[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16318[(4)]))){
var statearr_16340_17366 = state_16318;
(statearr_16340_17366[(1)] = cljs.core.first((state_16318[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17379 = state_16318;
state_16318 = G__17379;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_16318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_16318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_16341 = f__13782__auto__();
(statearr_16341[(6)] = c__13781__auto___17352);

return statearr_16341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16347 = arguments.length;
switch (G__16347) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13781__auto___17381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_16385){
var state_val_16386 = (state_16385[(1)]);
if((state_val_16386 === (7))){
var inst_16381 = (state_16385[(2)]);
var state_16385__$1 = state_16385;
var statearr_16387_17382 = state_16385__$1;
(statearr_16387_17382[(2)] = inst_16381);

(statearr_16387_17382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (1))){
var inst_16348 = (new Array(n));
var inst_16349 = inst_16348;
var inst_16350 = (0);
var state_16385__$1 = (function (){var statearr_16389 = state_16385;
(statearr_16389[(7)] = inst_16349);

(statearr_16389[(8)] = inst_16350);

return statearr_16389;
})();
var statearr_16390_17383 = state_16385__$1;
(statearr_16390_17383[(2)] = null);

(statearr_16390_17383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (4))){
var inst_16353 = (state_16385[(9)]);
var inst_16353__$1 = (state_16385[(2)]);
var inst_16354 = (inst_16353__$1 == null);
var inst_16355 = cljs.core.not(inst_16354);
var state_16385__$1 = (function (){var statearr_16391 = state_16385;
(statearr_16391[(9)] = inst_16353__$1);

return statearr_16391;
})();
if(inst_16355){
var statearr_16392_17384 = state_16385__$1;
(statearr_16392_17384[(1)] = (5));

} else {
var statearr_16393_17385 = state_16385__$1;
(statearr_16393_17385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (15))){
var inst_16375 = (state_16385[(2)]);
var state_16385__$1 = state_16385;
var statearr_16394_17386 = state_16385__$1;
(statearr_16394_17386[(2)] = inst_16375);

(statearr_16394_17386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (13))){
var state_16385__$1 = state_16385;
var statearr_16396_17387 = state_16385__$1;
(statearr_16396_17387[(2)] = null);

(statearr_16396_17387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (6))){
var inst_16350 = (state_16385[(8)]);
var inst_16371 = (inst_16350 > (0));
var state_16385__$1 = state_16385;
if(cljs.core.truth_(inst_16371)){
var statearr_16397_17389 = state_16385__$1;
(statearr_16397_17389[(1)] = (12));

} else {
var statearr_16398_17390 = state_16385__$1;
(statearr_16398_17390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (3))){
var inst_16383 = (state_16385[(2)]);
var state_16385__$1 = state_16385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16385__$1,inst_16383);
} else {
if((state_val_16386 === (12))){
var inst_16349 = (state_16385[(7)]);
var inst_16373 = cljs.core.vec(inst_16349);
var state_16385__$1 = state_16385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16385__$1,(15),out,inst_16373);
} else {
if((state_val_16386 === (2))){
var state_16385__$1 = state_16385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16385__$1,(4),ch);
} else {
if((state_val_16386 === (11))){
var inst_16365 = (state_16385[(2)]);
var inst_16366 = (new Array(n));
var inst_16349 = inst_16366;
var inst_16350 = (0);
var state_16385__$1 = (function (){var statearr_16399 = state_16385;
(statearr_16399[(7)] = inst_16349);

(statearr_16399[(10)] = inst_16365);

(statearr_16399[(8)] = inst_16350);

return statearr_16399;
})();
var statearr_16400_17392 = state_16385__$1;
(statearr_16400_17392[(2)] = null);

(statearr_16400_17392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (9))){
var inst_16349 = (state_16385[(7)]);
var inst_16363 = cljs.core.vec(inst_16349);
var state_16385__$1 = state_16385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16385__$1,(11),out,inst_16363);
} else {
if((state_val_16386 === (5))){
var inst_16349 = (state_16385[(7)]);
var inst_16358 = (state_16385[(11)]);
var inst_16353 = (state_16385[(9)]);
var inst_16350 = (state_16385[(8)]);
var inst_16357 = (inst_16349[inst_16350] = inst_16353);
var inst_16358__$1 = (inst_16350 + (1));
var inst_16359 = (inst_16358__$1 < n);
var state_16385__$1 = (function (){var statearr_16401 = state_16385;
(statearr_16401[(12)] = inst_16357);

(statearr_16401[(11)] = inst_16358__$1);

return statearr_16401;
})();
if(cljs.core.truth_(inst_16359)){
var statearr_16402_17393 = state_16385__$1;
(statearr_16402_17393[(1)] = (8));

} else {
var statearr_16403_17394 = state_16385__$1;
(statearr_16403_17394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (14))){
var inst_16378 = (state_16385[(2)]);
var inst_16379 = cljs.core.async.close_BANG_(out);
var state_16385__$1 = (function (){var statearr_16405 = state_16385;
(statearr_16405[(13)] = inst_16378);

return statearr_16405;
})();
var statearr_16406_17395 = state_16385__$1;
(statearr_16406_17395[(2)] = inst_16379);

(statearr_16406_17395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (10))){
var inst_16369 = (state_16385[(2)]);
var state_16385__$1 = state_16385;
var statearr_16407_17396 = state_16385__$1;
(statearr_16407_17396[(2)] = inst_16369);

(statearr_16407_17396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16386 === (8))){
var inst_16349 = (state_16385[(7)]);
var inst_16358 = (state_16385[(11)]);
var tmp16404 = inst_16349;
var inst_16349__$1 = tmp16404;
var inst_16350 = inst_16358;
var state_16385__$1 = (function (){var statearr_16408 = state_16385;
(statearr_16408[(7)] = inst_16349__$1);

(statearr_16408[(8)] = inst_16350);

return statearr_16408;
})();
var statearr_16409_17398 = state_16385__$1;
(statearr_16409_17398[(2)] = null);

(statearr_16409_17398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16411[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16411[(1)] = (1));

return statearr_16411;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_16385){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16385);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16414){var ex__13477__auto__ = e16414;
var statearr_16415_17399 = state_16385;
(statearr_16415_17399[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16385[(4)]))){
var statearr_16416_17400 = state_16385;
(statearr_16416_17400[(1)] = cljs.core.first((state_16385[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17401 = state_16385;
state_16385 = G__17401;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_16385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_16385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_16417 = f__13782__auto__();
(statearr_16417[(6)] = c__13781__auto___17381);

return statearr_16417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16443 = arguments.length;
switch (G__16443) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13781__auto___17406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_16488){
var state_val_16489 = (state_16488[(1)]);
if((state_val_16489 === (7))){
var inst_16484 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16490_17407 = state_16488__$1;
(statearr_16490_17407[(2)] = inst_16484);

(statearr_16490_17407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (1))){
var inst_16444 = [];
var inst_16445 = inst_16444;
var inst_16446 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16488__$1 = (function (){var statearr_16504 = state_16488;
(statearr_16504[(7)] = inst_16446);

(statearr_16504[(8)] = inst_16445);

return statearr_16504;
})();
var statearr_16505_17426 = state_16488__$1;
(statearr_16505_17426[(2)] = null);

(statearr_16505_17426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (4))){
var inst_16449 = (state_16488[(9)]);
var inst_16449__$1 = (state_16488[(2)]);
var inst_16450 = (inst_16449__$1 == null);
var inst_16451 = cljs.core.not(inst_16450);
var state_16488__$1 = (function (){var statearr_16506 = state_16488;
(statearr_16506[(9)] = inst_16449__$1);

return statearr_16506;
})();
if(inst_16451){
var statearr_16507_17429 = state_16488__$1;
(statearr_16507_17429[(1)] = (5));

} else {
var statearr_16508_17430 = state_16488__$1;
(statearr_16508_17430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (15))){
var inst_16445 = (state_16488[(8)]);
var inst_16476 = cljs.core.vec(inst_16445);
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16488__$1,(18),out,inst_16476);
} else {
if((state_val_16489 === (13))){
var inst_16471 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16509_17431 = state_16488__$1;
(statearr_16509_17431[(2)] = inst_16471);

(statearr_16509_17431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (6))){
var inst_16445 = (state_16488[(8)]);
var inst_16473 = inst_16445.length;
var inst_16474 = (inst_16473 > (0));
var state_16488__$1 = state_16488;
if(cljs.core.truth_(inst_16474)){
var statearr_16510_17432 = state_16488__$1;
(statearr_16510_17432[(1)] = (15));

} else {
var statearr_16511_17433 = state_16488__$1;
(statearr_16511_17433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (17))){
var inst_16481 = (state_16488[(2)]);
var inst_16482 = cljs.core.async.close_BANG_(out);
var state_16488__$1 = (function (){var statearr_16512 = state_16488;
(statearr_16512[(10)] = inst_16481);

return statearr_16512;
})();
var statearr_16513_17434 = state_16488__$1;
(statearr_16513_17434[(2)] = inst_16482);

(statearr_16513_17434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (3))){
var inst_16486 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16488__$1,inst_16486);
} else {
if((state_val_16489 === (12))){
var inst_16445 = (state_16488[(8)]);
var inst_16464 = cljs.core.vec(inst_16445);
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16488__$1,(14),out,inst_16464);
} else {
if((state_val_16489 === (2))){
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16488__$1,(4),ch);
} else {
if((state_val_16489 === (11))){
var inst_16453 = (state_16488[(11)]);
var inst_16449 = (state_16488[(9)]);
var inst_16445 = (state_16488[(8)]);
var inst_16461 = inst_16445.push(inst_16449);
var tmp16514 = inst_16445;
var inst_16445__$1 = tmp16514;
var inst_16446 = inst_16453;
var state_16488__$1 = (function (){var statearr_16515 = state_16488;
(statearr_16515[(12)] = inst_16461);

(statearr_16515[(7)] = inst_16446);

(statearr_16515[(8)] = inst_16445__$1);

return statearr_16515;
})();
var statearr_16516_17435 = state_16488__$1;
(statearr_16516_17435[(2)] = null);

(statearr_16516_17435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (9))){
var inst_16446 = (state_16488[(7)]);
var inst_16457 = cljs.core.keyword_identical_QMARK_(inst_16446,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16488__$1 = state_16488;
var statearr_16517_17436 = state_16488__$1;
(statearr_16517_17436[(2)] = inst_16457);

(statearr_16517_17436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (5))){
var inst_16453 = (state_16488[(11)]);
var inst_16449 = (state_16488[(9)]);
var inst_16446 = (state_16488[(7)]);
var inst_16454 = (state_16488[(13)]);
var inst_16453__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16449) : f.call(null,inst_16449));
var inst_16454__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16453__$1,inst_16446);
var state_16488__$1 = (function (){var statearr_16520 = state_16488;
(statearr_16520[(11)] = inst_16453__$1);

(statearr_16520[(13)] = inst_16454__$1);

return statearr_16520;
})();
if(inst_16454__$1){
var statearr_16522_17437 = state_16488__$1;
(statearr_16522_17437[(1)] = (8));

} else {
var statearr_16523_17438 = state_16488__$1;
(statearr_16523_17438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (14))){
var inst_16453 = (state_16488[(11)]);
var inst_16449 = (state_16488[(9)]);
var inst_16466 = (state_16488[(2)]);
var inst_16467 = [];
var inst_16468 = inst_16467.push(inst_16449);
var inst_16445 = inst_16467;
var inst_16446 = inst_16453;
var state_16488__$1 = (function (){var statearr_16524 = state_16488;
(statearr_16524[(14)] = inst_16466);

(statearr_16524[(7)] = inst_16446);

(statearr_16524[(8)] = inst_16445);

(statearr_16524[(15)] = inst_16468);

return statearr_16524;
})();
var statearr_16525_17439 = state_16488__$1;
(statearr_16525_17439[(2)] = null);

(statearr_16525_17439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (16))){
var state_16488__$1 = state_16488;
var statearr_16526_17440 = state_16488__$1;
(statearr_16526_17440[(2)] = null);

(statearr_16526_17440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (10))){
var inst_16459 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
if(cljs.core.truth_(inst_16459)){
var statearr_16527_17441 = state_16488__$1;
(statearr_16527_17441[(1)] = (11));

} else {
var statearr_16528_17442 = state_16488__$1;
(statearr_16528_17442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (18))){
var inst_16478 = (state_16488[(2)]);
var state_16488__$1 = state_16488;
var statearr_16529_17443 = state_16488__$1;
(statearr_16529_17443[(2)] = inst_16478);

(statearr_16529_17443[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16489 === (8))){
var inst_16454 = (state_16488[(13)]);
var state_16488__$1 = state_16488;
var statearr_16530_17451 = state_16488__$1;
(statearr_16530_17451[(2)] = inst_16454);

(statearr_16530_17451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16531[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16531[(1)] = (1));

return statearr_16531;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_16488){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16488);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16532){var ex__13477__auto__ = e16532;
var statearr_16533_17456 = state_16488;
(statearr_16533_17456[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16488[(4)]))){
var statearr_16534_17457 = state_16488;
(statearr_16534_17457[(1)] = cljs.core.first((state_16488[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17458 = state_16488;
state_16488 = G__17458;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_16488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_16488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_16539 = f__13782__auto__();
(statearr_16539[(6)] = c__13781__auto___17406);

return statearr_16539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
