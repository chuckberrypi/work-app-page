goog.provide('re_dnd.events');
if((typeof re_dnd !== 'undefined') && (typeof re_dnd.events !== 'undefined') && (typeof re_dnd.events.reg_event_listeners !== 'undefined')){
} else {
re_dnd.events.reg_event_listeners = cljs.core.memoize((function (){
document.body.addEventListener("mousemove",(function (p1__33678_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","mouse-moves","dnd/mouse-moves",-815978407),(p1__33678_SHARP_.clientX + window.scrollX),(p1__33678_SHARP_.clientY + window.scrollY)], null));
}));

document.body.addEventListener("mousedown",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","set-mouse-button-status","dnd/set-mouse-button-status",-1181771033),true], null));
}));

return document.body.addEventListener("mouseup",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","set-mouse-button-status","dnd/set-mouse-button-status",-1181771033),false], null));
}));
}));
}
re_dnd.events.flip_args = (function re_dnd$events$flip_args(f,x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x));
});
re_dnd.events.bounding_rect = (function re_dnd$events$bounding_rect(e){
if((e == null)){
return null;
} else {
var rect = e.getBoundingClientRect();
var pos = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),rect.top,new cljs.core.Keyword(null,"left","left",-399115937),rect.left,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rect.bottom,new cljs.core.Keyword(null,"right","right",-452581833),rect.right], null);
var pos_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pos,new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core._PLUS_,window.scrollY),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core._PLUS_,window.scrollX),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),cljs.core._PLUS_,window.scrollY),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core._PLUS_,window.scrollX);
return pos_SINGLEQUOTE_;
}
});
re_dnd.events.collides_QMARK_ = (function re_dnd$events$collides_QMARK_(p__33698,p__33699){
var map__33700 = p__33698;
var map__33700__$1 = cljs.core.__destructure_map(map__33700);
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33700__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var l1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33700__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var t1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33700__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var b1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33700__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var map__33701 = p__33699;
var map__33701__$1 = cljs.core.__destructure_map(map__33701);
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var l2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var t2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var b2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
return (!((((r1 < l2)) || ((((l1 > r2)) || ((((b1 < t2)) || ((t1 > b2)))))))));
});
/**
 * Moves a boundingClientRect with x and y pixels
 */
re_dnd.events.translate = (function re_dnd$events$translate(sub,x,y){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(sub,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core._,x),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core._PLUS_,y),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),cljs.core._,y);
});
re_dnd.events.set_all_draggables_to_idle = (function re_dnd$events$set_all_draggables_to_idle(db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345)], null),(function (o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33702){
var vec__33703 = p__33702;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v_SINGLEQUOTE_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_SINGLEQUOTE_,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861)),new cljs.core.Keyword(null,"position","position",-2011731912));
}),v)], null);
}),o));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439)], null),(function (o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33707){
var vec__33708 = p__33707;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33708,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861))], null);
}),o));
}));
});
re_dnd.events.insert_at_pos = (function re_dnd$events$insert_at_pos(pos,hmap,e){
var vec__33714 = cljs.core.split_at(pos,hmap);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(h,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t], 0));
});
re_dnd.events.move_element_in_list = (function re_dnd$events$move_element_in_list(m,k,new_pos){
var comparator = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),new cljs.core.Keyword(null,"id","id",-1388402092));
var e = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(comparator,m));
var vec__33717 = cljs.core.split_at(new_pos,m);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33717,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33717,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,95,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),m),k,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new_pos], null);
}),null)),null,471723767);

return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(comparator,h),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(comparator,t)], 0));
});
re_dnd.events.positions = (function re_dnd$events$positions(pred,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return idx;
} else {
return null;
}
}),coll);
});
re_dnd.events.index_of = (function re_dnd$events$index_of(search,coll){
return cljs.core.first(re_dnd.events.positions(cljs.core.PersistentHashSet.createAsIfByAssoc([search]),coll));
});
re_dnd.events.get_position_of_element = (function re_dnd$events$get_position_of_element(db,dz_id,elt_id){
var elts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),dz_id], null));
return re_dnd.events.index_of(elt_id,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),elts));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","move-up","dnd/move-up",-1153041699),(function (p__33720,p__33721){
var map__33722 = p__33720;
var map__33722__$1 = cljs.core.__destructure_map(map__33722);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33723 = p__33721;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33723,(0),null);
var dz_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33723,(1),null);
var elt_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33723,(2),null);
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zone-options","drop-zone-options",-1717069765),dz_id], null));
var idx = re_dnd.events.get_position_of_element(db,dz_id,elt_id);
var disp = (cljs.core.truth_(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dz_id,elt_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dz_id,elt_id,(idx - (1))], null)], null)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","move-drop-zone-element","dnd/move-drop-zone-element",448651774),dz_id,elt_id,(idx - (1))], null));
if((idx > (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),disp], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","move-down","dnd/move-down",-1148211927),(function (p__33726,p__33727){
var map__33728 = p__33726;
var map__33728__$1 = cljs.core.__destructure_map(map__33728);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33728__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33729 = p__33727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(0),null);
var dz_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(1),null);
var elt_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(2),null);
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zone-options","drop-zone-options",-1717069765),dz_id], null));
var num_elts = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),dz_id], null)));
var idx = re_dnd.events.get_position_of_element(db,dz_id,elt_id);
var disp = (cljs.core.truth_(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dz_id,elt_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dz_id,elt_id,((idx + (1)) + (1))], null)], null)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","move-drop-zone-element","dnd/move-drop-zone-element",448651774),dz_id,elt_id,((idx + (1)) + (1))], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),disp], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","delete-drop-zone-element","dnd/delete-drop-zone-element",-412557972),(function (db,p__33734){
var vec__33735 = p__33734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(0),null);
var dz_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(1),null);
var elt_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),dz_id], null),(function (p1__33733_SHARP_,p2__33732_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__33738){
var map__33739 = p__33738;
var map__33739__$1 = cljs.core.__destructure_map(map__33739);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33739__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__33732_SHARP_,id);
}),p1__33733_SHARP_);
}),elt_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","move-drop-zone-element","dnd/move-drop-zone-element",448651774),(function (db,p__33740){
var vec__33741 = p__33740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(0),null);
var dz_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(1),null);
var e_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(2),null);
var new_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),dz_id], null),re_dnd.events.move_element_in_list,e_id,(function (){var or__5045__auto__ = new_pos;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})());
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","add-drop-zone-element","dnd/add-drop-zone-element",1341480146),(function (db,p__33744){
var vec__33745 = p__33744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745,(0),null);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745,(1),null);
var map__33748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745,(2),null);
var map__33748__$1 = cljs.core.__destructure_map(map__33748);
var elt = map__33748__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33748__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33748__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dropped_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745,(3),null);
if(cljs.core.truth_(id)){
} else {
throw (new Error(["Assert failed: ","Please set a :id key in the second parameter of options.","\n","id"].join('')));
}

if(cljs.core.truth_(type)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-dnd.events",null,164,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Please set a :type key in the second parameter of options"], null);
}),null)),null,286573299);
}

if(cljs.core.not(dropped_position)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),drop_zone_id], null),(function (){var elts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),drop_zone_id], null));
var dropped_position__$1 = cljs.core.count(elts);
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_dnd.events.insert_at_pos,dropped_position__$1);
})(),elt);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),drop_zone_id], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_dnd.events.insert_at_pos,dropped_position),elt);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","initialize-drop-zone","dnd/initialize-drop-zone",-1208767849),(function (p__33749,p__33750){
var map__33751 = p__33749;
var map__33751__$1 = cljs.core.__destructure_map(map__33751);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33751__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33752 = p__33750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(2),null);
var initial_elements = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(3),null);
re_dnd.events.reg_event_listeners();

var initial_disps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (elt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","add-drop-zone-element","dnd/add-drop-zone-element",1341480146),id,elt], null);
}),initial_elements);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zone-options","drop-zone-options",-1717069765),id], null),opts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),id], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),initial_disps], null);
}));
re_dnd.events.find_first_dragging_element = (function re_dnd$events$find_first_dragging_element(db){
var d = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__33755){
var vec__33756 = p__33755;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33756,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33756,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439)], null))));
var d_SINGLEQUOTE_ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33759){
var vec__33760 = p__33759;
var dz_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33760,(0),null);
var dz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33760,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dz_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"dragging","dragging",1185097613)),new cljs.core.Keyword(null,"status","status",-1997798413)),dz)))], null);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345)], null)))));
if(cljs.core.truth_(d)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,d], null);
} else {
return d_SINGLEQUOTE_;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","set-mouse-button-status","dnd/set-mouse-button-status",-1181771033),(function (p__33763,p__33764){
var map__33765 = p__33763;
var map__33765__$1 = cljs.core.__destructure_map(map__33765);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33765__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33766 = p__33764;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33766,(0),null);
var down_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33766,(1),null);
var vec__33769 = re_dnd.events.find_first_dragging_element(db);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33769,(0),null);
var draggable_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33769,(1),null);
var G__33772 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mouse-button","mouse-button",-1144616840),down_QMARK_)], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(down_QMARK_);
if(and__5043__auto__){
return draggable_id;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33772,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","end-drag","dnd/end-drag",1040235494),draggable_id,drop_zone_id], null));
} else {
return G__33772;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","mouse-moves","dnd/mouse-moves",-815978407),(function (p__33773,p__33774){
var map__33775 = p__33773;
var map__33775__$1 = cljs.core.__destructure_map(map__33775);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33775__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33776 = p__33774;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33776,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33776,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33776,(2),null);
var db_SINGLEQUOTE_ = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouse-button","mouse-button",-1144616840).cljs$core$IFn$_invoke$arity$1(db))){
var vec__33779 = re_dnd.events.find_first_dragging_element(db);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779,(0),null);
var draggable_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779,(1),null);
if(cljs.core.truth_(draggable_id)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db_SINGLEQUOTE_,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","drag-move","dnd/drag-move",-1244339700),draggable_id,drop_zone_id,x,y], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db_SINGLEQUOTE_], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db_SINGLEQUOTE_], null);
}
}));
re_dnd.events.clear_selection = (function re_dnd$events$clear_selection(){
var sel = document.selection;
if(cljs.core.truth_((function (){var and__5043__auto__ = sel;
if(cljs.core.truth_(and__5043__auto__)){
return sel.hasOwnProperty("empty");
} else {
return and__5043__auto__;
}
})())){
return sel.empty();
} else {
if(cljs.core.truth_(window.getSelection)){
window.getSelection().removeAllRanges();
} else {
}

var temp__5802__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5802__auto__)){
var ae = temp__5802__auto__;
var tag_name = ae.nodeName.toLowerCase();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text",ae.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("input",tag_name)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("textarea",tag_name)))){
return (ae.selectionStart = ae.selectionEnd);
} else {
return null;
}
} else {
return null;
}
}
});
re_dnd.events.update_dz_elt = (function re_dnd$events$update_dz_elt(db,drop_zone_id,elt_id,f){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zones","drop-zones",59111345),drop_zone_id], null),(function (elts,id_SINGLEQUOTE_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_SINGLEQUOTE_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
} else {
return e;
}
}),elts);
}),elt_id);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","drag-move","dnd/drag-move",-1244339700),(function (db,p__33782){
var vec__33783 = p__33782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33783,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33783,(1),null);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33783,(2),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33783,(3),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33783,(4),null);
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

if(cljs.core.truth_(id)){
re_dnd.events.clear_selection();
} else {
}

var pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x - window.scrollX) - (20)),new cljs.core.Keyword(null,"y","y",-1757859776),((y - window.scrollY) - (20))], null);
var change = (function (prev){
var offset = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(prev);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(prev)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(prev))], null);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev,pos], 0)),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset)),new cljs.core.Keyword(null,"offset","offset",296498311),offset);
});
if(cljs.core.truth_(drop_zone_id)){
return re_dnd.events.update_dz_elt(db,drop_zone_id,id,(function (e){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"position","position",-2011731912),change);
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439),id,new cljs.core.Keyword(null,"position","position",-2011731912)], null),change);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","hover","dnd/hover",-341306885),(function (db,p__33786){
var vec__33787 = p__33786;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787,(1),null);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787,(2),null);
var hover_in_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787,(3),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouse-button","mouse-button",-1144616840).cljs$core$IFn$_invoke$arity$1(db))){
return db;
} else {
if(cljs.core.truth_(drop_zone_id)){
return re_dnd.events.update_dz_elt(db,drop_zone_id,id,(function (e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword(null,"status","status",-1997798413),(cljs.core.truth_(hover_in_QMARK_)?new cljs.core.Keyword(null,"hover","hover",-341141711):new cljs.core.Keyword(null,"idle","idle",-2007156861)));
}));
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439),id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),(cljs.core.truth_(hover_in_QMARK_)?new cljs.core.Keyword(null,"hover","hover",-341141711):null));
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","start-drag","dnd/start-drag",463911537),(function (db,p__33790){
var vec__33791 = p__33790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(1),null);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(2),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(3),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(4),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(5),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(6),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,300,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["start-drag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(drop_zone_id),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),", x: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", y: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),", w: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),", h: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null);
}),null)),null,-677534221);

var pos = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - window.scrollX),new cljs.core.Keyword(null,"y","y",-1757859776),(y - window.scrollY),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,305,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),y,window.scrollY], null);
}),null)),null,-2094226967);

if(cljs.core.truth_(drop_zone_id)){
return re_dnd.events.update_dz_elt(db,drop_zone_id,id,(function (e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(e,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"dragging","dragging",1185097613),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),pos], 0));
}));
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439),id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"dragging","dragging",1185097613)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"draggables","draggables",-765941439),id,new cljs.core.Keyword(null,"position","position",-2011731912)], null),pos);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("dnd","end-drag","dnd/end-drag",1040235494),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vimsical.re-frame.cofx.inject","sub","vimsical.re-frame.cofx.inject/sub",-22900579),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","get-colliding-drop-zone-and-index","dnd/get-colliding-drop-zone-and-index",159954181)], null))], null),(function (p__33794,p__33795){
var map__33796 = p__33794;
var map__33796__$1 = cljs.core.__destructure_map(map__33796);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33796__$1,new cljs.core.Keyword(null,"db","db",993250759));
var drop_zones_being_hit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33796__$1,new cljs.core.Keyword("dnd","get-colliding-drop-zone-and-index","dnd/get-colliding-drop-zone-and-index",159954181));
var vec__33797 = p__33795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33797,(0),null);
var source_draggable_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33797,(1),null);
var source_drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33797,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,326,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drop_zones_being_hit_QMARK_], null);
}),null)),null,1542616995);

var disps = (function (){var iter__5523__auto__ = (function re_dnd$events$iter__33800(s__33801){
return (new cljs.core.LazySeq(null,(function (){
var s__33801__$1 = s__33801;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33801__$1);
if(temp__5804__auto__){
var s__33801__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33801__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33801__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33803 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33802 = (0);
while(true){
if((i__33802 < size__5522__auto__)){
var vec__33804 = cljs.core._nth(c__5521__auto__,i__33802);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(0),null);
var vec__33807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(1),null);
var vec__33810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33807,(0),null);
var dropped_element_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(1),null);
cljs.core.chunk_append(b__33803,(function (){var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zone-options","drop-zone-options",-1717069765),drop_zone_id], null));
var ___$1 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,329,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__33802,options,vec__33804,drop_zone_id,vec__33807,vec__33810,dropped_element_id,index,c__5521__auto__,size__5522__auto__,b__33803,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [options], null);
});})(i__33802,options,vec__33804,drop_zone_id,vec__33807,vec__33810,dropped_element_id,index,c__5521__auto__,size__5522__auto__,b__33803,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id))
,null)),null,1296807934);
var drag_target_hit_dispatch = (cljs.core.truth_(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_drop_zone_id,source_draggable_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drop_zone_id,dropped_element_id,index], null)], null)):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-dnd.events",null,335,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__33802,options,___$1,vec__33804,drop_zone_id,vec__33807,vec__33810,dropped_element_id,index,c__5521__auto__,size__5522__auto__,b__33803,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No options found for drop-zone-id: ",drop_zone_id,", make sure it is properly initialized. Ignoring"], null);
});})(i__33802,options,___$1,vec__33804,drop_zone_id,vec__33807,vec__33810,dropped_element_id,index,c__5521__auto__,size__5522__auto__,b__33803,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id))
,null)),null,-882606008);

return null;
})()
);
return drag_target_hit_dispatch;
})());

var G__33899 = (i__33802 + (1));
i__33802 = G__33899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33803),re_dnd$events$iter__33800(cljs.core.chunk_rest(s__33801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33803),null);
}
} else {
var vec__33813 = cljs.core.first(s__33801__$2);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33813,(0),null);
var vec__33816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33813,(1),null);
var vec__33819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33816,(0),null);
var dropped_element_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33819,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33819,(1),null);
return cljs.core.cons((function (){var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dnd","state","dnd/state",-1988591737),new cljs.core.Keyword(null,"drop-zone-options","drop-zone-options",-1717069765),drop_zone_id], null));
var ___$1 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,329,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (options,vec__33813,drop_zone_id,vec__33816,vec__33819,dropped_element_id,index,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [options], null);
});})(options,vec__33813,drop_zone_id,vec__33816,vec__33819,dropped_element_id,index,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id))
,null)),null,-796717348);
var drag_target_hit_dispatch = (cljs.core.truth_(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-dispatch","drop-dispatch",1880381170).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_drop_zone_id,source_draggable_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drop_zone_id,dropped_element_id,index], null)], null)):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-dnd.events",null,335,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (options,___$1,vec__33813,drop_zone_id,vec__33816,vec__33819,dropped_element_id,index,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No options found for drop-zone-id: ",drop_zone_id,", make sure it is properly initialized. Ignoring"], null);
});})(options,___$1,vec__33813,drop_zone_id,vec__33816,vec__33819,dropped_element_id,index,s__33801__$2,temp__5804__auto__,map__33796,map__33796__$1,db,drop_zones_being_hit_QMARK_,vec__33797,_,source_draggable_id,source_drop_zone_id))
,null)),null,1664931487);

return null;
})()
);
return drag_target_hit_dispatch;
})(),re_dnd$events$iter__33800(cljs.core.rest(s__33801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(drop_zones_being_hit_QMARK_);
})();
var disps__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,disps);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,341,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dispatches: ",disps__$1], null);
}),null)),null,-2121962923);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),re_dnd.events.set_all_draggables_to_idle(db),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.vec(disps__$1)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dnd","reorder-drop","dnd/reorder-drop",-1025100541),(function (db,p__33822){
var vec__33823 = p__33822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(0),null);
var drop_zone_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(1),null);
var dropped_element_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(2),null);
var drag_box = re_dnd.events.bounding_rect(document.getElementById("drag-box"));
var drop_zone = re_dnd.events.bounding_rect(document.getElementById(["drop-zone-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(drop_zone_id)].join('')));
if((((drop_zone == null)) || ((drag_box == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,355,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No dragbox / dropzone"], null);
}),null)),null,362162158);

return db;
} else {
if(re_dnd.events.collides_QMARK_(drag_box,drop_zone)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,359,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Colliding!"], null);
}),null)),null,752186718);

return db;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-dnd.events",null,364,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No collide"], null);
}),null)),null,422135911);

return db;

}
}
}));

//# sourceMappingURL=re_dnd.events.js.map
