goog.provide('re_dnd.views');
if((typeof re_dnd !== 'undefined') && (typeof re_dnd.views !== 'undefined') && (typeof re_dnd.views.dropped_widget !== 'undefined')){
} else {
re_dnd.views.dropped_widget = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33830 = cljs.core.get_global_hierarchy;
return (fexpr__33830.cljs$core$IFn$_invoke$arity$0 ? fexpr__33830.cljs$core$IFn$_invoke$arity$0() : fexpr__33830.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-dnd.views","dropped-widget"),(function (p__33831){
var map__33832 = p__33831;
var map__33832__$1 = cljs.core.__destructure_map(map__33832);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33832__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33832__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
re_dnd.views.dropped_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dnd","drop-marker","dnd/drop-marker",1945149496),(function (p__33833){
var map__33834 = p__33833;
var map__33834__$1 = cljs.core.__destructure_map(map__33834);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33834__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33834__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drop-marker","div.drop-marker",1784546440)], null);
}));
if((typeof re_dnd !== 'undefined') && (typeof re_dnd.views !== 'undefined') && (typeof re_dnd.views.drag_handle !== 'undefined')){
} else {
re_dnd.views.drag_handle = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33836 = cljs.core.get_global_hierarchy;
return (fexpr__33836.cljs$core$IFn$_invoke$arity$0 ? fexpr__33836.cljs$core$IFn$_invoke$arity$0() : fexpr__33836.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-dnd.views","drag-handle"),(function (p__33837){
var map__33838 = p__33837;
var map__33838__$1 = cljs.core.__destructure_map(map__33838);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33838__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33838__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
re_dnd.views.drag_handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dnd","drop-marker","dnd/drop-marker",1945149496),(function (p__33842){
var map__33843 = p__33842;
var map__33843__$1 = cljs.core.__destructure_map(map__33843);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33843__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33843__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drop-marker","div.drop-marker",1784546440)], null);
}));
re_dnd.views.drag_handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33844){
var map__33845 = p__33844;
var map__33845__$1 = cljs.core.__destructure_map(map__33845);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33845__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drop-marker","div.drop-marker",1784546440)], null);
}));
re_dnd.views.start_drag_fn = (function re_dnd$views$start_drag_fn(id,drop_zone_id,e,e2){
var p = (function (){var or__5045__auto__ = goog.dom.getAncestorByClass(e.target,"dropped-element");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.dom.getAncestorByClass(e.target,"draggable");
}
})();
var bounds = goog.style.getBounds(p);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","start-drag","dnd/start-drag",463911537),id,drop_zone_id,bounds.left,bounds.top,bounds.width,bounds.height], null));
});
re_dnd.views.hover_fn = (function re_dnd$views$hover_fn(elt_id,drop_zone_id,hover_in_QMARK_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","hover","dnd/hover",-341306885),elt_id,drop_zone_id,hover_in_QMARK_], null));
});
re_dnd.views.draggable = (function re_dnd$views$draggable(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 1:
return re_dnd.views.draggable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_dnd.views.draggable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_dnd.views.draggable.cljs$core$IFn$_invoke$arity$1 = (function (id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_dnd.views.draggable,id,null], null);
}));

(re_dnd.views.draggable.cljs$core$IFn$_invoke$arity$2 = (function (id,body){
var drag_status = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","drag-status","dnd/drag-status",723364076),id,null], null));
return (function (id__$1,body__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable","div.draggable",-249226727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_dnd.views.start_drag_fn,id__$1,null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_dnd.views.hover_fn,id__$1,null,true),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_dnd.views.hover_fn,id__$1,null,false)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover","hover",-341141711),cljs.core.deref(drag_status)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drag-mask","div.drag-mask",118626705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null):null),(cljs.core.truth_(body__$1)?body__$1:null)], null);
});
}));

(re_dnd.views.draggable.cljs$lang$maxFixedArity = 2);

re_dnd.views.reorder_fn = (function re_dnd$views$reorder_fn(drop_zone_id,dropped_element_id,e){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","reorder-drop","dnd/reorder-drop",-1025100541),drop_zone_id,dropped_element_id], null));
});
re_dnd.views.dropped_element = (function re_dnd$views$dropped_element(id,de){
var drag_status = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","drag-status","dnd/drag-status",723364076),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de),id], null));
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dragdrop-options","dnd/dragdrop-options",2056466727),id], null));
return (function (id__$1,de__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropped-element.row","div.dropped-element.row",76586411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["dropped-element-",cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1))].join('')], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drag-handle.col-md-1","div.drag-handle.col-md-1",-1755441365),(cljs.core.truth_(new cljs.core.Keyword(null,"three-part-drag-handle","three-part-drag-handle",377096409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?null:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_dnd.views.hover_fn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1),id__$1,true),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_dnd.views.hover_fn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1),id__$1,false),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_dnd.views.start_drag_fn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1),id__$1),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_dnd.views.reorder_fn,id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1))], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"three-part-drag-handle","three-part-drag-handle",377096409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-caret-up","i.zmdi.zmdi-caret-up",-1537923190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","move-up","dnd/move-up",-1153041699),id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1)], null));
})], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"three-part-drag-handle","three-part-drag-handle",377096409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-menu","i.zmdi.zmdi-menu",504886446),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_dnd.views.hover_fn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1),id__$1,true),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_dnd.views.hover_fn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1),id__$1,false),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_dnd.views.start_drag_fn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1),id__$1),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_dnd.views.reorder_fn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1),id__$1)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"three-part-drag-handle","three-part-drag-handle",377096409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-caret-down","i.zmdi.zmdi-caret-down",521440024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","move-down","dnd/move-down",-1148211927),id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1)], null));
})], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_dnd.views.drag_handle,de__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropped-element-body.col-md-11","div.dropped-element-body.col-md-11",-1907462758),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_dnd.views.dropped_widget,de__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de__$1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"both","both",-393648840)], null)], null)], null)], null);
});
});
re_dnd.views.drop_zone = (function re_dnd$views$drop_zone(var_args){
var G__33875 = arguments.length;
switch (G__33875) {
case 1:
return re_dnd.views.drop_zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_dnd.views.drop_zone.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_dnd.views.drop_zone.cljs$core$IFn$_invoke$arity$1 = (function (id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_dnd.views.drop_zone,id,null], null);
}));

(re_dnd.views.drop_zone.cljs$core$IFn$_invoke$arity$2 = (function (id,body){
var dropped_elements = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dropped-elements-with-drop-marker","dnd/dropped-elements-with-drop-marker",259051112),id], null));
var overlaps_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","draggable-overlaps?","dnd/draggable-overlaps?",2119561635),id], null));
return (function (id__$1,body__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drop-zone","div.drop-zone",76598628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["drop-zone-",cljs.core.name(id__$1)].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(cljs.core.deref(overlaps_QMARK_))?"highlight":"")], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (de){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_dnd.views.dropped_element,id__$1,de], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(de)], null));
}),cljs.core.deref(dropped_elements)),(cljs.core.truth_(body__$1)?body__$1:null)], null);
});
}));

(re_dnd.views.drop_zone.cljs$lang$maxFixedArity = 2);

/**
 * Box floating around following the mouse
 */
re_dnd.views.drag_box = (function re_dnd$views$drag_box(){
var s = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","drag-box","dnd/drag-box",62973653)], null));
return (function (){
var map__33889 = cljs.core.deref(s);
var map__33889__$1 = cljs.core.__destructure_map(map__33889);
var drag_box = map__33889__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33889__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33889__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33889__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33889__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#drag-box.drag-box","div#drag-box.drag-box",-93168514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),(((drag_box == null))?"none":null),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('')], null)], null)], null);
});
});

//# sourceMappingURL=re_dnd.views.js.map
