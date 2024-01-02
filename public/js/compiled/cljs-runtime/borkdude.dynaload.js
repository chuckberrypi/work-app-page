goog.provide('borkdude.dynaload');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
borkdude.dynaload.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(borkdude.dynaload.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(borkdude.dynaload.LazyVar.prototype.call = (function (unused__10314__auto__){
var self__ = this;
var self__ = this;
var G__31503 = (arguments.length - (1));
switch (G__31503) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(borkdude.dynaload.LazyVar.prototype.apply = (function (self__,args31499){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args31499)));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__31507 = cljs.core.deref(this$);
return (fexpr__31507.cljs$core$IFn$_invoke$arity$0 ? fexpr__31507.cljs$core$IFn$_invoke$arity$0() : fexpr__31507.call(null));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__31508 = cljs.core.deref(this$);
return (fexpr__31508.cljs$core$IFn$_invoke$arity$1 ? fexpr__31508.cljs$core$IFn$_invoke$arity$1(a) : fexpr__31508.call(null,a));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__31509 = cljs.core.deref(this$);
return (fexpr__31509.cljs$core$IFn$_invoke$arity$2 ? fexpr__31509.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__31509.call(null,a,b));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__31510 = cljs.core.deref(this$);
return (fexpr__31510.cljs$core$IFn$_invoke$arity$3 ? fexpr__31510.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__31510.call(null,a,b,c));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__31513 = cljs.core.deref(this$);
return (fexpr__31513.cljs$core$IFn$_invoke$arity$4 ? fexpr__31513.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__31513.call(null,a,b,c,d));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__31515 = cljs.core.deref(this$);
return (fexpr__31515.cljs$core$IFn$_invoke$arity$5 ? fexpr__31515.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__31515.call(null,a,b,c,d,e));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var this$ = this;
var fexpr__31516 = cljs.core.deref(this$);
return (fexpr__31516.cljs$core$IFn$_invoke$arity$6 ? fexpr__31516.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__31516.call(null,a,b,c,d,e,f__$1));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var this$ = this;
var fexpr__31517 = cljs.core.deref(this$);
return (fexpr__31517.cljs$core$IFn$_invoke$arity$7 ? fexpr__31517.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__31517.call(null,a,b,c,d,e,f__$1,g));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var this$ = this;
var fexpr__31518 = cljs.core.deref(this$);
return (fexpr__31518.cljs$core$IFn$_invoke$arity$8 ? fexpr__31518.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__31518.call(null,a,b,c,d,e,f__$1,g,h));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__31519 = cljs.core.deref(this$);
return (fexpr__31519.cljs$core$IFn$_invoke$arity$9 ? fexpr__31519.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__31519.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__31522 = cljs.core.deref(this$);
return (fexpr__31522.cljs$core$IFn$_invoke$arity$10 ? fexpr__31522.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__31522.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__31523 = cljs.core.deref(this$);
return (fexpr__31523.cljs$core$IFn$_invoke$arity$11 ? fexpr__31523.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__31523.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__31527 = cljs.core.deref(this$);
return (fexpr__31527.cljs$core$IFn$_invoke$arity$12 ? fexpr__31527.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__31527.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__31536 = cljs.core.deref(this$);
return (fexpr__31536.cljs$core$IFn$_invoke$arity$13 ? fexpr__31536.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__31536.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__31549 = cljs.core.deref(this$);
return (fexpr__31549.cljs$core$IFn$_invoke$arity$14 ? fexpr__31549.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__31549.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__31550 = cljs.core.deref(this$);
return (fexpr__31550.cljs$core$IFn$_invoke$arity$15 ? fexpr__31550.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__31550.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__31559 = cljs.core.deref(this$);
return (fexpr__31559.cljs$core$IFn$_invoke$arity$16 ? fexpr__31559.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__31559.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__31564 = cljs.core.deref(this$);
return (fexpr__31564.cljs$core$IFn$_invoke$arity$17 ? fexpr__31564.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__31564.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__31565 = cljs.core.deref(this$);
return (fexpr__31565.cljs$core$IFn$_invoke$arity$18 ? fexpr__31565.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__31565.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__31566 = cljs.core.deref(this$);
return (fexpr__31566.cljs$core$IFn$_invoke$arity$19 ? fexpr__31566.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__31566.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__31567 = cljs.core.deref(this$);
return (fexpr__31567.cljs$core$IFn$_invoke$arity$20 ? fexpr__31567.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__31567.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(borkdude.dynaload.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(borkdude.dynaload.LazyVar.cljs$lang$type = true);

(borkdude.dynaload.LazyVar.cljs$lang$ctorStr = "borkdude.dynaload/LazyVar");

(borkdude.dynaload.LazyVar.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"borkdude.dynaload/LazyVar");
}));

/**
 * Positional factory function for borkdude.dynaload/LazyVar.
 */
borkdude.dynaload.__GT_LazyVar = (function borkdude$dynaload$__GT_LazyVar(f,cached){
return (new borkdude.dynaload.LazyVar(f,cached));
});


//# sourceMappingURL=borkdude.dynaload.js.map