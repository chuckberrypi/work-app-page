goog.provide('re_dnd.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","position","dnd/position",-2011896502),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33826){
var vec__33827 = p__33826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33827,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33827,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439),id,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
})], 0));
re_dnd.subs.get_dz_element = (function re_dnd$subs$get_dz_element(db,dz_id,draggable_id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,draggable_id),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),dz_id], null))));
});
/**
 * DOM lookup, returns {:x 0 :y 0} if not found
 */
re_dnd.subs.drag_box_parent_bounding_rect = (function re_dnd$subs$drag_box_parent_bounding_rect(){
var e = document.getElementById("drag-box");
var p = (cljs.core.truth_(e)?(function (){var G__33835 = e;
var G__33835__$1 = (((G__33835 == null))?null:G__33835.parentNode);
var G__33835__$2 = (((G__33835__$1 == null))?null:G__33835__$1.parentNode);
if((G__33835__$2 == null)){
return null;
} else {
return re_dnd.events.bounding_rect(G__33835__$2);
}
})():null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","drag-box","dnd/drag-box",62973653),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var vec__33839 = re_dnd.events.find_first_dragging_element(db);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33839,(0),null);
var draggable_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33839,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = drop_zone_id;
if(cljs.core.truth_(and__5043__auto__)){
return draggable_id;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(re_dnd.subs.get_dz_element(db,drop_zone_id,draggable_id));
} else {
if(cljs.core.truth_(draggable_id)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439),draggable_id,new cljs.core.Keyword(null,"position","position",-2011731912)], null));
} else {
return null;
}
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","db","dnd/db",985287405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return db;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","drag-status","dnd/drag-status",723364076),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33846){
var vec__33847 = p__33846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847,(1),null);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847,(2),null);
if(cljs.core.truth_(drop_zone_id)){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(re_dnd.subs.get_dz_element(db,drop_zone_id,id));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439),id,new cljs.core.Keyword(null,"status","status",-1997798413)], null));
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","draggable-overlaps?","dnd/draggable-overlaps?",2119561635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33850){
var vec__33851 = p__33850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(1),null);
var drop_zone = re_dnd.events.bounding_rect(document.getElementById(["drop-zone-",cljs.core.name(id)].join('')));
var drag_box = re_dnd.events.bounding_rect(document.getElementById("drag-box"));
var collides_QMARK_ = re_dnd.events.collides_QMARK_(drop_zone,drag_box);
return collides_QMARK_;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","mouse-position","dnd/mouse-position",1042729846),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492)], null));
})], 0));
/**
 * Returns a list of tuples of [<dropzone-id> <index>]
 */
re_dnd.subs.calculate_drop_zone_collisions = (function re_dnd$subs$calculate_drop_zone_collisions(dropzone_elements){
var drag_box = re_dnd.events.bounding_rect(document.getElementById("drag-box"));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33856){
var vec__33857 = p__33856;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33857,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33857,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),i))?(function (){var dropped_rect = re_dnd.events.bounding_rect(document.getElementById(["dropped-element-",cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e))].join('')));
if((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(drag_box) <= new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dropped_rect))){
return (0);
} else {
return (1);
}
})():i)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__33860){
var vec__33861 = p__33860;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33861,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33861,(1),null);
if(cljs.core.not(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e))){
return false;
} else {
var dropped_rect = re_dnd.events.bounding_rect(document.getElementById(["dropped-element-",cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e))].join('')));
return re_dnd.events.collides_QMARK_(dropped_rect,drag_box);
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),e], null);
}),dropzone_elements)));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","dropped-item-overlap-id","dnd/dropped-item-overlap-id",578618650),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33864,_){
var vec__33865 = p__33864;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33865,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33865,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","mouse-position","dnd/mouse-position",1042729846)], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","draggable-overlaps?","dnd/draggable-overlaps?",2119561635),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dropped-elements","dnd/dropped-elements",-38279954),id], null))], null);
}),(function (p__33868){
var vec__33869 = p__33868;
var mouse_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33869,(0),null);
var draggable_overlaps_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33869,(1),null);
var dropzone_elements = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33869,(2),null);
if(cljs.core.not(draggable_overlaps_QMARK_)){
return null;
} else {
return cljs.core.ffirst(re_dnd.subs.calculate_drop_zone_collisions(dropzone_elements));
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","dragged-element","dnd/dragged-element",-1757320987),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var draggable_being_dragged = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33872_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__33872_SHARP_));
}),cljs.core.vals(new cljs.core.Keyword(null,"draggables","draggables",-765941439).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dnd","state","dnd/state",-1988591737).cljs$core$IFn$_invoke$arity$1(db)))));
var droppeditem_being_dragged = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33873_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__33873_SHARP_));
}),cljs.core.flatten(cljs.core.vals(new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dnd","state","dnd/state",-1988591737).cljs$core$IFn$_invoke$arity$1(db))))));
var or__5045__auto__ = draggable_being_dragged;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return droppeditem_being_dragged;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","dragdrop-options","dnd/dragdrop-options",2056466727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33876){
var vec__33877 = p__33876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33877,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33877,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zone-options","drop-zone-options",-1717069765),id], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","dropped-elements-with-drop-marker","dnd/dropped-elements-with-drop-marker",259051112),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33881,_){
var vec__33882 = p__33881;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33882,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33882,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dragged-element","dnd/dragged-element",-1757320987)], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dragdrop-options","dnd/dragdrop-options",2056466727),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dropped-item-overlap-id","dnd/dropped-item-overlap-id",578618650),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","draggable-overlaps?","dnd/draggable-overlaps?",2119561635),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dropped-elements","dnd/dropped-elements",-38279954),id], null))], null);
}),(function (p__33885){
var vec__33886 = p__33885;
var dragged_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(1),null);
var overlap_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(2),null);
var overlap_dropzone_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(3),null);
var dropzone_elements = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(4),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = overlap_dropzone_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return overlap_id;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return dragged_element;
} else {
return and__5043__auto__;
}
})())){
var dm = new cljs.core.Keyword(null,"drop-marker","drop-marker",1945315090).cljs$core$IFn$_invoke$arity$1(options);
var sep = (cljs.core.truth_(dm)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),dm,new cljs.core.Keyword(null,"id","id",-1388402092),dm], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("dnd","drop-marker","dnd/drop-marker",1945149496),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("dnd","drop-marker","dnd/drop-marker",1945149496)], null));
var parts = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__33880_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlap_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33880_SHARP_));
}),dropzone_elements);
var dragbox = re_dnd.events.bounding_rect(document.getElementById("drag-box"));
var overlap_elt = (cljs.core.truth_(overlap_id)?re_dnd.events.bounding_rect(document.getElementById(["dropped-element-",cljs.core.name(overlap_id)].join(''))):null);
var sz = cljs.core.count(parts);
return cljs.core.flatten((function (){var G__33890 = sz;
switch (G__33890) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),sep], null);

break;
case (2):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlap_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(parts)))){
if((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dragbox) <= new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(overlap_elt))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep,cljs.core.first(parts),cljs.core.last(parts)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),sep,cljs.core.last(parts)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.last(parts),sep], null);
}

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.second(parts),sep,cljs.core.last(parts)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33890)].join('')));

}
})());
} else {
return dropzone_elements;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","get-colliding-drop-zone-and-index","dnd/get-colliding-drop-zone-and-index",159954181),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","mouse-position","dnd/mouse-position",1042729846)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","drop-zones","dnd/drop-zones",58744011)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","dragged-element","dnd/dragged-element",-1757320987)], null),(function (p__33891){
var vec__33892 = p__33891;
var mouse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(0),null);
var drop_zones = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(1),null);
var dragged_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33892,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__33895){
var vec__33896 = p__33895;
var dz_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(0),null);
var dz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(1),null);
var drag_box = re_dnd.events.bounding_rect(document.getElementById("drag-box"));
var dz_box = re_dnd.events.bounding_rect(document.getElementById(["drop-zone-",cljs.core.name(dz_id)].join('')));
var k = ((re_dnd.events.collides_QMARK_(drag_box,dz_box))?dz_id:null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,re_dnd.subs.calculate_drop_zone_collisions(dz)], null);
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__33900){
var vec__33901 = p__33900;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33901,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33901,(1),null);
return (k == null);
}))),drop_zones);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","drop-zones","dnd/drop-zones",58744011),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dnd","dropped-elements","dnd/dropped-elements",-38279954),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__33905){
var vec__33906 = p__33905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33906,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33906,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),id], null));
})], 0));

//# sourceMappingURL=re_dnd.subs.js.map
