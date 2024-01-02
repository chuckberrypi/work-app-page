goog.provide('work_app.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$primereact$button$button_cjs=shadow.js.require("module$node_modules$primereact$button$button_cjs", {});
var module$node_modules$primereact$dialog$dialog_cjs=shadow.js.require("module$node_modules$primereact$dialog$dialog_cjs", {});
var module$node_modules$primereact$scrollpanel$scrollpanel_cjs=shadow.js.require("module$node_modules$primereact$scrollpanel$scrollpanel_cjs", {});
var module$node_modules$primereact$tabview$tabview_cjs=shadow.js.require("module$node_modules$primereact$tabview$tabview_cjs", {});
var module$node_modules$primereact$toast$toast_cjs=shadow.js.require("module$node_modules$primereact$toast$toast_cjs", {});
work_app.core.conn = datascript.core.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(work_app.ds_schema.ds_schema) : datascript.core.empty_db.call(null,work_app.ds_schema.ds_schema)));
(re_posh.core.connect_BANG_.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.connect_BANG_.cljs$core$IFn$_invoke$arity$1(work_app.core.conn) : re_posh.core.connect_BANG_.call(null,work_app.core.conn));
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2(work_app.core.conn,(function (p1__36023_SHARP_){
return console.log(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(p1__36023_SHARP_)));
}));
cljs.core.add_watch(re_posh.db.store,new cljs.core.Keyword(null,"store-watch","store-watch",-1784729586),(function (k,a,new$,old){
return console.log(["RRR",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(new$))].join(''));
}));
work_app.core.confirm_dialog = (function work_app$core$confirm_dialog(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$dialog$dialog_cjs.Dialog,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","dialog-visible","work-app.subs/dialog-visible",-594417131)], null)),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__36024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","dialog-toggle","work-app.events/dialog-toggle",788448125)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__36024) : work_app.events._GT_evt.call(null,G__36024));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","dialog-body","work-app.subs/dialog-body",-1408527510)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Yes",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-check",new cljs.core.Keyword(null,"class","class",-2030961996),"p-button-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36025_36034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","dialog-confirmed","work-app.events/dialog-confirmed",-1275411289)], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__36025_36034) : work_app.events._GT_evt.call(null,G__36025_36034));

var G__36026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","dialog-toggle","work-app.events/dialog-toggle",788448125)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__36026) : work_app.events._GT_evt.call(null,G__36026));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"No",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-times",new cljs.core.Keyword(null,"class","class",-2030961996),"p-button-danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__36027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","dialog-toggle","work-app.events/dialog-toggle",788448125)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__36027) : work_app.events._GT_evt.call(null,G__36027));
})], null)], null)], null);
});
work_app.core.hello_world = (function work_app$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$toast$toast_cjs.Toast,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
var G__36028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","set-toast","work-app.events/set-toast",1818151911),el], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__36028) : work_app.events._GT_evt.call(null,G__36028));
})], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$tabview$tabview_cjs.TabView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$tabview$tabview_cjs.TabPanel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dfs-tab-panel",new cljs.core.Keyword(null,"header","header",119441134),"Matters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.matters.matters], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$tabview$tabview_cjs.TabPanel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Time Entry",new cljs.core.Keyword(null,"class","class",-2030961996),"dfs-tab-panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.time_entry.time_entry], null)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$tabview$tabview_cjs.TabPanel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"DS DB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.shared.formatted_area,work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","ds-db","work-app.subs/ds-db",1612061191)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$tabview$tabview_cjs.TabPanel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"DS DB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.shared.formatted_area,work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","ds-db-actual","work-app.subs/ds-db-actual",1836225368)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$tabview$tabview_cjs.TabPanel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"DB"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.shared.formatted_area,work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","db","work-app.subs/db",732084971)], null))], null)], null)], null)], null);
});
work_app.core.dev_setup = (function work_app$core$dev_setup(){
if(work_app.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
work_app.core.mount_root = (function work_app$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var r_node = document.getElementById("app");
reagent.dom.unmount_component_at_node(r_node);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.core.hello_world], null),r_node);
});
work_app.core.init = (function work_app$core$init(){
work_app.core.ticker = setInterval((function (){
var G__36029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","tick","work-app.events/tick",1737052786)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__36029) : work_app.events._GT_evt.call(null,G__36029));
}),(1000));

return goog.events.listen(document,"keypress",(function (e){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(32));
if(and__5043__auto__){
return e.shiftKey;
} else {
return and__5043__auto__;
}
})())){
e.preventDefault();
} else {
}

var G__36030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","key-press","work-app.events/key-press",-1858630462),e], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__36030) : work_app.events._GT_evt.call(null,G__36030));
}),(function (){var G__36032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","initialize-db","work-app.events/initialize-db",1599662938)], null);
return (work_app.events._GT_evt_sync.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt_sync.cljs$core$IFn$_invoke$arity$1(G__36032) : work_app.events._GT_evt_sync.call(null,G__36032));
})(),work_app.core.dev_setup(),work_app.core.mount_root());
});

//# sourceMappingURL=work_app.core.js.map
