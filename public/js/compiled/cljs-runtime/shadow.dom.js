goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_17780 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_17780(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_17781 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_17781(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16655 = coll;
var G__16656 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16655,G__16656) : shadow.dom.lazy_native_coll_seq.call(null,G__16655,G__16656));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16733 = arguments.length;
switch (G__16733) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16737 = arguments.length;
switch (G__16737) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16745 = arguments.length;
switch (G__16745) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16751 = arguments.length;
switch (G__16751) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16757 = arguments.length;
switch (G__16757) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16762 = arguments.length;
switch (G__16762) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16772){if((e16772 instanceof Object)){
var e = e16772;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16772;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16784 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16785 = null;
var count__16786 = (0);
var i__16787 = (0);
while(true){
if((i__16787 < count__16786)){
var el = chunk__16785.cljs$core$IIndexed$_nth$arity$2(null,i__16787);
var handler_17797__$1 = ((function (seq__16784,chunk__16785,count__16786,i__16787,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16784,chunk__16785,count__16786,i__16787,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_17797__$1);


var G__17798 = seq__16784;
var G__17799 = chunk__16785;
var G__17800 = count__16786;
var G__17801 = (i__16787 + (1));
seq__16784 = G__17798;
chunk__16785 = G__17799;
count__16786 = G__17800;
i__16787 = G__17801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16784);
if(temp__5804__auto__){
var seq__16784__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16784__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16784__$1);
var G__17802 = cljs.core.chunk_rest(seq__16784__$1);
var G__17803 = c__5568__auto__;
var G__17804 = cljs.core.count(c__5568__auto__);
var G__17805 = (0);
seq__16784 = G__17802;
chunk__16785 = G__17803;
count__16786 = G__17804;
i__16787 = G__17805;
continue;
} else {
var el = cljs.core.first(seq__16784__$1);
var handler_17806__$1 = ((function (seq__16784,chunk__16785,count__16786,i__16787,el,seq__16784__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16784,chunk__16785,count__16786,i__16787,el,seq__16784__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_17806__$1);


var G__17807 = cljs.core.next(seq__16784__$1);
var G__17808 = null;
var G__17809 = (0);
var G__17810 = (0);
seq__16784 = G__17807;
chunk__16785 = G__17808;
count__16786 = G__17809;
i__16787 = G__17810;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16796 = arguments.length;
switch (G__16796) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__16809 = cljs.core.seq(events);
var chunk__16810 = null;
var count__16811 = (0);
var i__16812 = (0);
while(true){
if((i__16812 < count__16811)){
var vec__16828 = chunk__16810.cljs$core$IIndexed$_nth$arity$2(null,i__16812);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16828,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__17812 = seq__16809;
var G__17813 = chunk__16810;
var G__17814 = count__16811;
var G__17815 = (i__16812 + (1));
seq__16809 = G__17812;
chunk__16810 = G__17813;
count__16811 = G__17814;
i__16812 = G__17815;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16809);
if(temp__5804__auto__){
var seq__16809__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16809__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16809__$1);
var G__17816 = cljs.core.chunk_rest(seq__16809__$1);
var G__17817 = c__5568__auto__;
var G__17818 = cljs.core.count(c__5568__auto__);
var G__17819 = (0);
seq__16809 = G__17816;
chunk__16810 = G__17817;
count__16811 = G__17818;
i__16812 = G__17819;
continue;
} else {
var vec__16834 = cljs.core.first(seq__16809__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__17820 = cljs.core.next(seq__16809__$1);
var G__17821 = null;
var G__17822 = (0);
var G__17823 = (0);
seq__16809 = G__17820;
chunk__16810 = G__17821;
count__16811 = G__17822;
i__16812 = G__17823;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__16840 = cljs.core.seq(styles);
var chunk__16841 = null;
var count__16842 = (0);
var i__16843 = (0);
while(true){
if((i__16843 < count__16842)){
var vec__16860 = chunk__16841.cljs$core$IIndexed$_nth$arity$2(null,i__16843);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16860,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__17827 = seq__16840;
var G__17828 = chunk__16841;
var G__17829 = count__16842;
var G__17830 = (i__16843 + (1));
seq__16840 = G__17827;
chunk__16841 = G__17828;
count__16842 = G__17829;
i__16843 = G__17830;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16840);
if(temp__5804__auto__){
var seq__16840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16840__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16840__$1);
var G__17831 = cljs.core.chunk_rest(seq__16840__$1);
var G__17832 = c__5568__auto__;
var G__17833 = cljs.core.count(c__5568__auto__);
var G__17834 = (0);
seq__16840 = G__17831;
chunk__16841 = G__17832;
count__16842 = G__17833;
i__16843 = G__17834;
continue;
} else {
var vec__16866 = cljs.core.first(seq__16840__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__17835 = cljs.core.next(seq__16840__$1);
var G__17836 = null;
var G__17837 = (0);
var G__17838 = (0);
seq__16840 = G__17835;
chunk__16841 = G__17836;
count__16842 = G__17837;
i__16843 = G__17838;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__16871_17839 = key;
var G__16871_17840__$1 = (((G__16871_17839 instanceof cljs.core.Keyword))?G__16871_17839.fqn:null);
switch (G__16871_17840__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_17842 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_17842,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_17842,"aria-");
}
})())){
el.setAttribute(ks_17842,value);
} else {
(el[ks_17842] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16926){
var map__16929 = p__16926;
var map__16929__$1 = cljs.core.__destructure_map(map__16929);
var props = map__16929__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16929__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16934 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16934,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16934,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16934,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16960 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16960,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16960;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16975 = arguments.length;
switch (G__16975) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16984){
var vec__16986 = p__16984;
var seq__16987 = cljs.core.seq(vec__16986);
var first__16988 = cljs.core.first(seq__16987);
var seq__16987__$1 = cljs.core.next(seq__16987);
var nn = first__16988;
var first__16988__$1 = cljs.core.first(seq__16987__$1);
var seq__16987__$2 = cljs.core.next(seq__16987__$1);
var np = first__16988__$1;
var nc = seq__16987__$2;
var node = vec__16986;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16990 = nn;
var G__16991 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16990,G__16991) : create_fn.call(null,G__16990,G__16991));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16992 = nn;
var G__16993 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16992,G__16993) : create_fn.call(null,G__16992,G__16993));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16995 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(1),null);
var seq__16998_17847 = cljs.core.seq(node_children);
var chunk__16999_17848 = null;
var count__17000_17849 = (0);
var i__17001_17850 = (0);
while(true){
if((i__17001_17850 < count__17000_17849)){
var child_struct_17851 = chunk__16999_17848.cljs$core$IIndexed$_nth$arity$2(null,i__17001_17850);
var children_17853 = shadow.dom.dom_node(child_struct_17851);
if(cljs.core.seq_QMARK_(children_17853)){
var seq__17176_17854 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_17853));
var chunk__17178_17855 = null;
var count__17179_17856 = (0);
var i__17180_17857 = (0);
while(true){
if((i__17180_17857 < count__17179_17856)){
var child_17858 = chunk__17178_17855.cljs$core$IIndexed$_nth$arity$2(null,i__17180_17857);
if(cljs.core.truth_(child_17858)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17858);


var G__17859 = seq__17176_17854;
var G__17860 = chunk__17178_17855;
var G__17861 = count__17179_17856;
var G__17862 = (i__17180_17857 + (1));
seq__17176_17854 = G__17859;
chunk__17178_17855 = G__17860;
count__17179_17856 = G__17861;
i__17180_17857 = G__17862;
continue;
} else {
var G__17863 = seq__17176_17854;
var G__17864 = chunk__17178_17855;
var G__17865 = count__17179_17856;
var G__17866 = (i__17180_17857 + (1));
seq__17176_17854 = G__17863;
chunk__17178_17855 = G__17864;
count__17179_17856 = G__17865;
i__17180_17857 = G__17866;
continue;
}
} else {
var temp__5804__auto___17867 = cljs.core.seq(seq__17176_17854);
if(temp__5804__auto___17867){
var seq__17176_17868__$1 = temp__5804__auto___17867;
if(cljs.core.chunked_seq_QMARK_(seq__17176_17868__$1)){
var c__5568__auto___17869 = cljs.core.chunk_first(seq__17176_17868__$1);
var G__17870 = cljs.core.chunk_rest(seq__17176_17868__$1);
var G__17871 = c__5568__auto___17869;
var G__17872 = cljs.core.count(c__5568__auto___17869);
var G__17873 = (0);
seq__17176_17854 = G__17870;
chunk__17178_17855 = G__17871;
count__17179_17856 = G__17872;
i__17180_17857 = G__17873;
continue;
} else {
var child_17874 = cljs.core.first(seq__17176_17868__$1);
if(cljs.core.truth_(child_17874)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17874);


var G__17875 = cljs.core.next(seq__17176_17868__$1);
var G__17876 = null;
var G__17877 = (0);
var G__17878 = (0);
seq__17176_17854 = G__17875;
chunk__17178_17855 = G__17876;
count__17179_17856 = G__17877;
i__17180_17857 = G__17878;
continue;
} else {
var G__17879 = cljs.core.next(seq__17176_17868__$1);
var G__17880 = null;
var G__17881 = (0);
var G__17882 = (0);
seq__17176_17854 = G__17879;
chunk__17178_17855 = G__17880;
count__17179_17856 = G__17881;
i__17180_17857 = G__17882;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_17853);
}


var G__17883 = seq__16998_17847;
var G__17884 = chunk__16999_17848;
var G__17885 = count__17000_17849;
var G__17886 = (i__17001_17850 + (1));
seq__16998_17847 = G__17883;
chunk__16999_17848 = G__17884;
count__17000_17849 = G__17885;
i__17001_17850 = G__17886;
continue;
} else {
var temp__5804__auto___17887 = cljs.core.seq(seq__16998_17847);
if(temp__5804__auto___17887){
var seq__16998_17888__$1 = temp__5804__auto___17887;
if(cljs.core.chunked_seq_QMARK_(seq__16998_17888__$1)){
var c__5568__auto___17889 = cljs.core.chunk_first(seq__16998_17888__$1);
var G__17890 = cljs.core.chunk_rest(seq__16998_17888__$1);
var G__17891 = c__5568__auto___17889;
var G__17892 = cljs.core.count(c__5568__auto___17889);
var G__17893 = (0);
seq__16998_17847 = G__17890;
chunk__16999_17848 = G__17891;
count__17000_17849 = G__17892;
i__17001_17850 = G__17893;
continue;
} else {
var child_struct_17894 = cljs.core.first(seq__16998_17888__$1);
var children_17895 = shadow.dom.dom_node(child_struct_17894);
if(cljs.core.seq_QMARK_(children_17895)){
var seq__17247_17896 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_17895));
var chunk__17249_17897 = null;
var count__17250_17898 = (0);
var i__17251_17899 = (0);
while(true){
if((i__17251_17899 < count__17250_17898)){
var child_17900 = chunk__17249_17897.cljs$core$IIndexed$_nth$arity$2(null,i__17251_17899);
if(cljs.core.truth_(child_17900)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17900);


var G__17901 = seq__17247_17896;
var G__17902 = chunk__17249_17897;
var G__17903 = count__17250_17898;
var G__17904 = (i__17251_17899 + (1));
seq__17247_17896 = G__17901;
chunk__17249_17897 = G__17902;
count__17250_17898 = G__17903;
i__17251_17899 = G__17904;
continue;
} else {
var G__17905 = seq__17247_17896;
var G__17906 = chunk__17249_17897;
var G__17907 = count__17250_17898;
var G__17908 = (i__17251_17899 + (1));
seq__17247_17896 = G__17905;
chunk__17249_17897 = G__17906;
count__17250_17898 = G__17907;
i__17251_17899 = G__17908;
continue;
}
} else {
var temp__5804__auto___17909__$1 = cljs.core.seq(seq__17247_17896);
if(temp__5804__auto___17909__$1){
var seq__17247_17910__$1 = temp__5804__auto___17909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17247_17910__$1)){
var c__5568__auto___17911 = cljs.core.chunk_first(seq__17247_17910__$1);
var G__17912 = cljs.core.chunk_rest(seq__17247_17910__$1);
var G__17913 = c__5568__auto___17911;
var G__17914 = cljs.core.count(c__5568__auto___17911);
var G__17915 = (0);
seq__17247_17896 = G__17912;
chunk__17249_17897 = G__17913;
count__17250_17898 = G__17914;
i__17251_17899 = G__17915;
continue;
} else {
var child_17916 = cljs.core.first(seq__17247_17910__$1);
if(cljs.core.truth_(child_17916)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_17916);


var G__17917 = cljs.core.next(seq__17247_17910__$1);
var G__17918 = null;
var G__17919 = (0);
var G__17920 = (0);
seq__17247_17896 = G__17917;
chunk__17249_17897 = G__17918;
count__17250_17898 = G__17919;
i__17251_17899 = G__17920;
continue;
} else {
var G__17921 = cljs.core.next(seq__17247_17910__$1);
var G__17922 = null;
var G__17923 = (0);
var G__17924 = (0);
seq__17247_17896 = G__17921;
chunk__17249_17897 = G__17922;
count__17250_17898 = G__17923;
i__17251_17899 = G__17924;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_17895);
}


var G__17925 = cljs.core.next(seq__16998_17888__$1);
var G__17926 = null;
var G__17927 = (0);
var G__17928 = (0);
seq__16998_17847 = G__17925;
chunk__16999_17848 = G__17926;
count__17000_17849 = G__17927;
i__17001_17850 = G__17928;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17302 = cljs.core.seq(node);
var chunk__17303 = null;
var count__17304 = (0);
var i__17305 = (0);
while(true){
if((i__17305 < count__17304)){
var n = chunk__17303.cljs$core$IIndexed$_nth$arity$2(null,i__17305);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__17930 = seq__17302;
var G__17931 = chunk__17303;
var G__17932 = count__17304;
var G__17933 = (i__17305 + (1));
seq__17302 = G__17930;
chunk__17303 = G__17931;
count__17304 = G__17932;
i__17305 = G__17933;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17302);
if(temp__5804__auto__){
var seq__17302__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17302__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17302__$1);
var G__17934 = cljs.core.chunk_rest(seq__17302__$1);
var G__17935 = c__5568__auto__;
var G__17936 = cljs.core.count(c__5568__auto__);
var G__17937 = (0);
seq__17302 = G__17934;
chunk__17303 = G__17935;
count__17304 = G__17936;
i__17305 = G__17937;
continue;
} else {
var n = cljs.core.first(seq__17302__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__17938 = cljs.core.next(seq__17302__$1);
var G__17939 = null;
var G__17940 = (0);
var G__17941 = (0);
seq__17302 = G__17938;
chunk__17303 = G__17939;
count__17304 = G__17940;
i__17305 = G__17941;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17357 = arguments.length;
switch (G__17357) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17391 = arguments.length;
switch (G__17391) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17428 = arguments.length;
switch (G__17428) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17949 = arguments.length;
var i__5770__auto___17950 = (0);
while(true){
if((i__5770__auto___17950 < len__5769__auto___17949)){
args__5775__auto__.push((arguments[i__5770__auto___17950]));

var G__17951 = (i__5770__auto___17950 + (1));
i__5770__auto___17950 = G__17951;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17452_17952 = cljs.core.seq(nodes);
var chunk__17453_17953 = null;
var count__17454_17954 = (0);
var i__17455_17955 = (0);
while(true){
if((i__17455_17955 < count__17454_17954)){
var node_17956 = chunk__17453_17953.cljs$core$IIndexed$_nth$arity$2(null,i__17455_17955);
fragment.appendChild(shadow.dom._to_dom(node_17956));


var G__17960 = seq__17452_17952;
var G__17961 = chunk__17453_17953;
var G__17962 = count__17454_17954;
var G__17963 = (i__17455_17955 + (1));
seq__17452_17952 = G__17960;
chunk__17453_17953 = G__17961;
count__17454_17954 = G__17962;
i__17455_17955 = G__17963;
continue;
} else {
var temp__5804__auto___17964 = cljs.core.seq(seq__17452_17952);
if(temp__5804__auto___17964){
var seq__17452_17965__$1 = temp__5804__auto___17964;
if(cljs.core.chunked_seq_QMARK_(seq__17452_17965__$1)){
var c__5568__auto___17966 = cljs.core.chunk_first(seq__17452_17965__$1);
var G__17967 = cljs.core.chunk_rest(seq__17452_17965__$1);
var G__17968 = c__5568__auto___17966;
var G__17969 = cljs.core.count(c__5568__auto___17966);
var G__17970 = (0);
seq__17452_17952 = G__17967;
chunk__17453_17953 = G__17968;
count__17454_17954 = G__17969;
i__17455_17955 = G__17970;
continue;
} else {
var node_17971 = cljs.core.first(seq__17452_17965__$1);
fragment.appendChild(shadow.dom._to_dom(node_17971));


var G__17972 = cljs.core.next(seq__17452_17965__$1);
var G__17973 = null;
var G__17974 = (0);
var G__17975 = (0);
seq__17452_17952 = G__17972;
chunk__17453_17953 = G__17973;
count__17454_17954 = G__17974;
i__17455_17955 = G__17975;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17444){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17444));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17459_17977 = cljs.core.seq(scripts);
var chunk__17460_17978 = null;
var count__17461_17979 = (0);
var i__17462_17980 = (0);
while(true){
if((i__17462_17980 < count__17461_17979)){
var vec__17469_17981 = chunk__17460_17978.cljs$core$IIndexed$_nth$arity$2(null,i__17462_17980);
var script_tag_17982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469_17981,(0),null);
var script_body_17983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469_17981,(1),null);
eval(script_body_17983);


var G__17984 = seq__17459_17977;
var G__17985 = chunk__17460_17978;
var G__17986 = count__17461_17979;
var G__17987 = (i__17462_17980 + (1));
seq__17459_17977 = G__17984;
chunk__17460_17978 = G__17985;
count__17461_17979 = G__17986;
i__17462_17980 = G__17987;
continue;
} else {
var temp__5804__auto___17992 = cljs.core.seq(seq__17459_17977);
if(temp__5804__auto___17992){
var seq__17459_17993__$1 = temp__5804__auto___17992;
if(cljs.core.chunked_seq_QMARK_(seq__17459_17993__$1)){
var c__5568__auto___17994 = cljs.core.chunk_first(seq__17459_17993__$1);
var G__17995 = cljs.core.chunk_rest(seq__17459_17993__$1);
var G__17996 = c__5568__auto___17994;
var G__17997 = cljs.core.count(c__5568__auto___17994);
var G__17998 = (0);
seq__17459_17977 = G__17995;
chunk__17460_17978 = G__17996;
count__17461_17979 = G__17997;
i__17462_17980 = G__17998;
continue;
} else {
var vec__17472_17999 = cljs.core.first(seq__17459_17993__$1);
var script_tag_18000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17472_17999,(0),null);
var script_body_18001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17472_17999,(1),null);
eval(script_body_18001);


var G__18002 = cljs.core.next(seq__17459_17993__$1);
var G__18003 = null;
var G__18004 = (0);
var G__18005 = (0);
seq__17459_17977 = G__18002;
chunk__17460_17978 = G__18003;
count__17461_17979 = G__18004;
i__17462_17980 = G__18005;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17475){
var vec__17476 = p__17475;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17476,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17476,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17480 = arguments.length;
switch (G__17480) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17490 = cljs.core.seq(style_keys);
var chunk__17491 = null;
var count__17492 = (0);
var i__17493 = (0);
while(true){
if((i__17493 < count__17492)){
var it = chunk__17491.cljs$core$IIndexed$_nth$arity$2(null,i__17493);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18012 = seq__17490;
var G__18013 = chunk__17491;
var G__18014 = count__17492;
var G__18015 = (i__17493 + (1));
seq__17490 = G__18012;
chunk__17491 = G__18013;
count__17492 = G__18014;
i__17493 = G__18015;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17490);
if(temp__5804__auto__){
var seq__17490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17490__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17490__$1);
var G__18019 = cljs.core.chunk_rest(seq__17490__$1);
var G__18020 = c__5568__auto__;
var G__18021 = cljs.core.count(c__5568__auto__);
var G__18022 = (0);
seq__17490 = G__18019;
chunk__17491 = G__18020;
count__17492 = G__18021;
i__17493 = G__18022;
continue;
} else {
var it = cljs.core.first(seq__17490__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18024 = cljs.core.next(seq__17490__$1);
var G__18025 = null;
var G__18026 = (0);
var G__18027 = (0);
seq__17490 = G__18024;
chunk__17491 = G__18025;
count__17492 = G__18026;
i__17493 = G__18027;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17503,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17516 = k17503;
var G__17516__$1 = (((G__17516 instanceof cljs.core.Keyword))?G__17516.fqn:null);
switch (G__17516__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17503,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17517){
var vec__17518 = p__17517;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17518,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17518,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17502){
var self__ = this;
var G__17502__$1 = this;
return (new cljs.core.RecordIter((0),G__17502__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17504,other17505){
var self__ = this;
var this17504__$1 = this;
return (((!((other17505 == null)))) && ((((this17504__$1.constructor === other17505.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17504__$1.x,other17505.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17504__$1.y,other17505.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17504__$1.__extmap,other17505.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17503){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17521 = k17503;
var G__17521__$1 = (((G__17521 instanceof cljs.core.Keyword))?G__17521.fqn:null);
switch (G__17521__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17503);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17502){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17522 = cljs.core.keyword_identical_QMARK_;
var expr__17523 = k__5352__auto__;
if(cljs.core.truth_((pred__17522.cljs$core$IFn$_invoke$arity$2 ? pred__17522.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17523) : pred__17522.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17523)))){
return (new shadow.dom.Coordinate(G__17502,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17522.cljs$core$IFn$_invoke$arity$2 ? pred__17522.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17523) : pred__17522.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17523)))){
return (new shadow.dom.Coordinate(self__.x,G__17502,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17502),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17502){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17502,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17509){
var extmap__5385__auto__ = (function (){var G__17525 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17509,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17509)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17525);
} else {
return G__17525;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17509),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17509),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17533,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17551 = k17533;
var G__17551__$1 = (((G__17551 instanceof cljs.core.Keyword))?G__17551.fqn:null);
switch (G__17551__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17533,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17552){
var vec__17557 = p__17552;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17557,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17557,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17532){
var self__ = this;
var G__17532__$1 = this;
return (new cljs.core.RecordIter((0),G__17532__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17534,other17535){
var self__ = this;
var this17534__$1 = this;
return (((!((other17535 == null)))) && ((((this17534__$1.constructor === other17535.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17534__$1.w,other17535.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17534__$1.h,other17535.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17534__$1.__extmap,other17535.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17533){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17583 = k17533;
var G__17583__$1 = (((G__17583 instanceof cljs.core.Keyword))?G__17583.fqn:null);
switch (G__17583__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17533);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17532){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17584 = cljs.core.keyword_identical_QMARK_;
var expr__17585 = k__5352__auto__;
if(cljs.core.truth_((pred__17584.cljs$core$IFn$_invoke$arity$2 ? pred__17584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17585) : pred__17584.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17585)))){
return (new shadow.dom.Size(G__17532,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17584.cljs$core$IFn$_invoke$arity$2 ? pred__17584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17585) : pred__17584.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17585)))){
return (new shadow.dom.Size(self__.w,G__17532,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17532),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17532){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17532,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17538){
var extmap__5385__auto__ = (function (){var G__17598 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17538,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17538)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17598);
} else {
return G__17598;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17538),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17538),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18118 = (i + (1));
var G__18119 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18118;
ret = G__18119;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17642){
var vec__17646 = p__17642;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17646,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__17651 = arguments.length;
switch (G__17651) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18135 = ps;
var G__18136 = (i + (1));
el__$1 = G__18135;
i = G__18136;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__17655 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__17659_18138 = cljs.core.seq(props);
var chunk__17660_18139 = null;
var count__17661_18140 = (0);
var i__17662_18141 = (0);
while(true){
if((i__17662_18141 < count__17661_18140)){
var vec__17673_18142 = chunk__17660_18139.cljs$core$IIndexed$_nth$arity$2(null,i__17662_18141);
var k_18143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17673_18142,(0),null);
var v_18144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17673_18142,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18143);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18143),v_18144);


var G__18145 = seq__17659_18138;
var G__18146 = chunk__17660_18139;
var G__18147 = count__17661_18140;
var G__18148 = (i__17662_18141 + (1));
seq__17659_18138 = G__18145;
chunk__17660_18139 = G__18146;
count__17661_18140 = G__18147;
i__17662_18141 = G__18148;
continue;
} else {
var temp__5804__auto___18149 = cljs.core.seq(seq__17659_18138);
if(temp__5804__auto___18149){
var seq__17659_18150__$1 = temp__5804__auto___18149;
if(cljs.core.chunked_seq_QMARK_(seq__17659_18150__$1)){
var c__5568__auto___18151 = cljs.core.chunk_first(seq__17659_18150__$1);
var G__18152 = cljs.core.chunk_rest(seq__17659_18150__$1);
var G__18153 = c__5568__auto___18151;
var G__18154 = cljs.core.count(c__5568__auto___18151);
var G__18155 = (0);
seq__17659_18138 = G__18152;
chunk__17660_18139 = G__18153;
count__17661_18140 = G__18154;
i__17662_18141 = G__18155;
continue;
} else {
var vec__17680_18156 = cljs.core.first(seq__17659_18150__$1);
var k_18157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17680_18156,(0),null);
var v_18158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17680_18156,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18157);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18157),v_18158);


var G__18168 = cljs.core.next(seq__17659_18150__$1);
var G__18169 = null;
var G__18170 = (0);
var G__18171 = (0);
seq__17659_18138 = G__18168;
chunk__17660_18139 = G__18169;
count__17661_18140 = G__18170;
i__17662_18141 = G__18171;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__17693 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17693,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17693,(1),null);
var seq__17696_18172 = cljs.core.seq(node_children);
var chunk__17698_18173 = null;
var count__17699_18174 = (0);
var i__17700_18175 = (0);
while(true){
if((i__17700_18175 < count__17699_18174)){
var child_struct_18176 = chunk__17698_18173.cljs$core$IIndexed$_nth$arity$2(null,i__17700_18175);
if((!((child_struct_18176 == null)))){
if(typeof child_struct_18176 === 'string'){
var text_18177 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18177),child_struct_18176].join(''));
} else {
var children_18178 = shadow.dom.svg_node(child_struct_18176);
if(cljs.core.seq_QMARK_(children_18178)){
var seq__17735_18179 = cljs.core.seq(children_18178);
var chunk__17737_18180 = null;
var count__17738_18181 = (0);
var i__17739_18182 = (0);
while(true){
if((i__17739_18182 < count__17738_18181)){
var child_18183 = chunk__17737_18180.cljs$core$IIndexed$_nth$arity$2(null,i__17739_18182);
if(cljs.core.truth_(child_18183)){
node.appendChild(child_18183);


var G__18184 = seq__17735_18179;
var G__18185 = chunk__17737_18180;
var G__18186 = count__17738_18181;
var G__18187 = (i__17739_18182 + (1));
seq__17735_18179 = G__18184;
chunk__17737_18180 = G__18185;
count__17738_18181 = G__18186;
i__17739_18182 = G__18187;
continue;
} else {
var G__18188 = seq__17735_18179;
var G__18189 = chunk__17737_18180;
var G__18190 = count__17738_18181;
var G__18191 = (i__17739_18182 + (1));
seq__17735_18179 = G__18188;
chunk__17737_18180 = G__18189;
count__17738_18181 = G__18190;
i__17739_18182 = G__18191;
continue;
}
} else {
var temp__5804__auto___18192 = cljs.core.seq(seq__17735_18179);
if(temp__5804__auto___18192){
var seq__17735_18193__$1 = temp__5804__auto___18192;
if(cljs.core.chunked_seq_QMARK_(seq__17735_18193__$1)){
var c__5568__auto___18194 = cljs.core.chunk_first(seq__17735_18193__$1);
var G__18195 = cljs.core.chunk_rest(seq__17735_18193__$1);
var G__18196 = c__5568__auto___18194;
var G__18197 = cljs.core.count(c__5568__auto___18194);
var G__18198 = (0);
seq__17735_18179 = G__18195;
chunk__17737_18180 = G__18196;
count__17738_18181 = G__18197;
i__17739_18182 = G__18198;
continue;
} else {
var child_18199 = cljs.core.first(seq__17735_18193__$1);
if(cljs.core.truth_(child_18199)){
node.appendChild(child_18199);


var G__18200 = cljs.core.next(seq__17735_18193__$1);
var G__18201 = null;
var G__18202 = (0);
var G__18203 = (0);
seq__17735_18179 = G__18200;
chunk__17737_18180 = G__18201;
count__17738_18181 = G__18202;
i__17739_18182 = G__18203;
continue;
} else {
var G__18204 = cljs.core.next(seq__17735_18193__$1);
var G__18205 = null;
var G__18206 = (0);
var G__18207 = (0);
seq__17735_18179 = G__18204;
chunk__17737_18180 = G__18205;
count__17738_18181 = G__18206;
i__17739_18182 = G__18207;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18178);
}
}


var G__18208 = seq__17696_18172;
var G__18209 = chunk__17698_18173;
var G__18210 = count__17699_18174;
var G__18211 = (i__17700_18175 + (1));
seq__17696_18172 = G__18208;
chunk__17698_18173 = G__18209;
count__17699_18174 = G__18210;
i__17700_18175 = G__18211;
continue;
} else {
var G__18212 = seq__17696_18172;
var G__18213 = chunk__17698_18173;
var G__18214 = count__17699_18174;
var G__18215 = (i__17700_18175 + (1));
seq__17696_18172 = G__18212;
chunk__17698_18173 = G__18213;
count__17699_18174 = G__18214;
i__17700_18175 = G__18215;
continue;
}
} else {
var temp__5804__auto___18216 = cljs.core.seq(seq__17696_18172);
if(temp__5804__auto___18216){
var seq__17696_18217__$1 = temp__5804__auto___18216;
if(cljs.core.chunked_seq_QMARK_(seq__17696_18217__$1)){
var c__5568__auto___18218 = cljs.core.chunk_first(seq__17696_18217__$1);
var G__18219 = cljs.core.chunk_rest(seq__17696_18217__$1);
var G__18220 = c__5568__auto___18218;
var G__18221 = cljs.core.count(c__5568__auto___18218);
var G__18222 = (0);
seq__17696_18172 = G__18219;
chunk__17698_18173 = G__18220;
count__17699_18174 = G__18221;
i__17700_18175 = G__18222;
continue;
} else {
var child_struct_18223 = cljs.core.first(seq__17696_18217__$1);
if((!((child_struct_18223 == null)))){
if(typeof child_struct_18223 === 'string'){
var text_18224 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18224),child_struct_18223].join(''));
} else {
var children_18225 = shadow.dom.svg_node(child_struct_18223);
if(cljs.core.seq_QMARK_(children_18225)){
var seq__17744_18226 = cljs.core.seq(children_18225);
var chunk__17746_18227 = null;
var count__17747_18228 = (0);
var i__17748_18229 = (0);
while(true){
if((i__17748_18229 < count__17747_18228)){
var child_18230 = chunk__17746_18227.cljs$core$IIndexed$_nth$arity$2(null,i__17748_18229);
if(cljs.core.truth_(child_18230)){
node.appendChild(child_18230);


var G__18231 = seq__17744_18226;
var G__18232 = chunk__17746_18227;
var G__18233 = count__17747_18228;
var G__18234 = (i__17748_18229 + (1));
seq__17744_18226 = G__18231;
chunk__17746_18227 = G__18232;
count__17747_18228 = G__18233;
i__17748_18229 = G__18234;
continue;
} else {
var G__18235 = seq__17744_18226;
var G__18236 = chunk__17746_18227;
var G__18237 = count__17747_18228;
var G__18238 = (i__17748_18229 + (1));
seq__17744_18226 = G__18235;
chunk__17746_18227 = G__18236;
count__17747_18228 = G__18237;
i__17748_18229 = G__18238;
continue;
}
} else {
var temp__5804__auto___18239__$1 = cljs.core.seq(seq__17744_18226);
if(temp__5804__auto___18239__$1){
var seq__17744_18240__$1 = temp__5804__auto___18239__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17744_18240__$1)){
var c__5568__auto___18241 = cljs.core.chunk_first(seq__17744_18240__$1);
var G__18242 = cljs.core.chunk_rest(seq__17744_18240__$1);
var G__18243 = c__5568__auto___18241;
var G__18244 = cljs.core.count(c__5568__auto___18241);
var G__18245 = (0);
seq__17744_18226 = G__18242;
chunk__17746_18227 = G__18243;
count__17747_18228 = G__18244;
i__17748_18229 = G__18245;
continue;
} else {
var child_18246 = cljs.core.first(seq__17744_18240__$1);
if(cljs.core.truth_(child_18246)){
node.appendChild(child_18246);


var G__18247 = cljs.core.next(seq__17744_18240__$1);
var G__18248 = null;
var G__18249 = (0);
var G__18250 = (0);
seq__17744_18226 = G__18247;
chunk__17746_18227 = G__18248;
count__17747_18228 = G__18249;
i__17748_18229 = G__18250;
continue;
} else {
var G__18251 = cljs.core.next(seq__17744_18240__$1);
var G__18252 = null;
var G__18253 = (0);
var G__18254 = (0);
seq__17744_18226 = G__18251;
chunk__17746_18227 = G__18252;
count__17747_18228 = G__18253;
i__17748_18229 = G__18254;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18225);
}
}


var G__18255 = cljs.core.next(seq__17696_18217__$1);
var G__18256 = null;
var G__18257 = (0);
var G__18258 = (0);
seq__17696_18172 = G__18255;
chunk__17698_18173 = G__18256;
count__17699_18174 = G__18257;
i__17700_18175 = G__18258;
continue;
} else {
var G__18259 = cljs.core.next(seq__17696_18217__$1);
var G__18260 = null;
var G__18261 = (0);
var G__18262 = (0);
seq__17696_18172 = G__18259;
chunk__17698_18173 = G__18260;
count__17699_18174 = G__18261;
i__17700_18175 = G__18262;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18263 = arguments.length;
var i__5770__auto___18264 = (0);
while(true){
if((i__5770__auto___18264 < len__5769__auto___18263)){
args__5775__auto__.push((arguments[i__5770__auto___18264]));

var G__18265 = (i__5770__auto___18264 + (1));
i__5770__auto___18264 = G__18265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq17755){
var G__17756 = cljs.core.first(seq17755);
var seq17755__$1 = cljs.core.next(seq17755);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17756,seq17755__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__17761 = arguments.length;
switch (G__17761) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13781__auto___18267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13782__auto__ = (function (){var switch__13473__auto__ = (function (state_17769){
var state_val_17770 = (state_17769[(1)]);
if((state_val_17770 === (1))){
var state_17769__$1 = state_17769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17769__$1,(2),once_or_cleanup);
} else {
if((state_val_17770 === (2))){
var inst_17766 = (state_17769[(2)]);
var inst_17767 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_17769__$1 = (function (){var statearr_17774 = state_17769;
(statearr_17774[(7)] = inst_17766);

return statearr_17774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17769__$1,inst_17767);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13474__auto__ = null;
var shadow$dom$state_machine__13474__auto____0 = (function (){
var statearr_17775 = [null,null,null,null,null,null,null,null];
(statearr_17775[(0)] = shadow$dom$state_machine__13474__auto__);

(statearr_17775[(1)] = (1));

return statearr_17775;
});
var shadow$dom$state_machine__13474__auto____1 = (function (state_17769){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_17769);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e17776){var ex__13477__auto__ = e17776;
var statearr_17777_18268 = state_17769;
(statearr_17777_18268[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_17769[(4)]))){
var statearr_17778_18269 = state_17769;
(statearr_17778_18269[(1)] = cljs.core.first((state_17769[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18270 = state_17769;
state_17769 = G__18270;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
shadow$dom$state_machine__13474__auto__ = function(state_17769){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13474__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13474__auto____1.call(this,state_17769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13474__auto____0;
shadow$dom$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13474__auto____1;
return shadow$dom$state_machine__13474__auto__;
})()
})();
var state__13783__auto__ = (function (){var statearr_17779 = f__13782__auto__();
(statearr_17779[(6)] = c__13781__auto___18267);

return statearr_17779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13783__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
