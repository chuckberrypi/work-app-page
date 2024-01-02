goog.provide('work_app.nrl');
var module$node_modules$primereact$splitbutton$splitbutton_cjs=shadow.js.require("module$node_modules$primereact$splitbutton$splitbutton_cjs", {});
var module$node_modules$primereact$button$button_cjs=shadow.js.require("module$node_modules$primereact$button$button_cjs", {});
work_app.nrl.nrl_comp = (function work_app$nrl$nrl_comp(p__32813){
var map__32814 = p__32813;
var map__32814__$1 = cljs.core.__destructure_map(map__32814);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,new cljs.core.Keyword(null,"url","url",276297046));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$splitbutton$splitbutton_cjs.SplitButton,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy Link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var link = ["<a href=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"</a>"].join('');
var G__32816_32897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toast","work-app.events/toast",-1762477261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"summary","summary",380847952),link,new cljs.core.Keyword(null,"detail","detail",-1545345025),"copied to clipboard"], null)], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32816_32897) : work_app.events._GT_evt.call(null,G__32816_32897));

var G__32817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),link], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32817) : work_app.events._GT_evt.call(null,G__32817));
}),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy URL",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
var G__32824 = (function (){var G__32825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),url], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32825) : work_app.events._GT_evt.call(null,G__32825));
})();
var fexpr__32823 = (function (){var G__32832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toast","work-app.events/toast",-1762477261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"summary","summary",380847952),url,new cljs.core.Keyword(null,"detail","detail",-1545345025),"copied to clipboard"], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32832) : work_app.events._GT_evt.call(null,G__32832));
})();
return (fexpr__32823.cljs$core$IFn$_invoke$arity$1 ? fexpr__32823.cljs$core$IFn$_invoke$arity$1(G__32824) : fexpr__32823.call(null,G__32824));
})], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Remove",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"4px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var fexpr__32840 = (function (){var G__32846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","nrl-remove","work-app.events/nrl-remove",-98893484),id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32846) : work_app.events._GT_evt.call(null,G__32846));
})();
return (fexpr__32840.cljs$core$IFn$_invoke$arity$0 ? fexpr__32840.cljs$core$IFn$_invoke$arity$0() : fexpr__32840.call(null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"3px"], null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"href","href",-793805698),url], null),name], null)], null);
});
work_app.nrl.is_nrl_QMARK_ = (function work_app$nrl$is_nrl_QMARK_(file){
var name = file.name;
var ext = name.slice((-3));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,"nrl");
});
work_app.nrl.file_conts__GT_url = (function work_app$nrl$file_conts__GT_url(conts){
var lines = conts.split("\n");
var main_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,(1));
var map__32850 = (function (){var $ = main_line;
var $__$1 = $.split("!");
var $__$2 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32847_SHARP_){
return ((0) < cljs.core.count(p1__32847_SHARP_));
}),$__$1);
var $__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32848_SHARP_){
return p1__32848_SHARP_.split(":");
}),$__$2);
var $__$4 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (l){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32849_SHARP_){
return ((0) < cljs.core.count(p1__32849_SHARP_));
}),l);
}),$__$3);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32854){
var vec__32855 = p__32854;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32855,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,$__$4);
})();
var map__32850__$1 = cljs.core.__destructure_map(map__32850);
var m = map__32850__$1;
var database = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32850__$1,"database");
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32850__$1,"document");
var session = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32850__$1,"session");
var nrtdms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32850__$1,"nrtdms");
var vec__32851 = document__$1.split(",");
var doc_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32851,(0),null);
var doc_ver = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32851,(1),null);
var dms_str = "dms=PDX-MIDDLE";
var lib_str = ["lib=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(database.toLowerCase())].join('');
var num_str = ["num=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_no)].join('');
var ver_str = ["ver=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_ver)].join('');
var version_value = ((((4) >= cljs.core.count(lines)))?(0):cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,(3))));
var latest_str = ["latest=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version_value)].join('');
return ["iwl:",cljs.core.str.cljs$core$IFn$_invoke$arity$1([dms_str,lib_str,num_str,ver_str,latest_str].join("&&"))].join('');
});
work_app.nrl.consume_dropped_file = (function work_app$nrl$consume_dropped_file(file){
var freader = (new FileReader());
var name = file.name;
(freader.onload = (function (){
var G__32862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","nrl-add","work-app.events/nrl-add",-1595075211),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"url","url",276297046),work_app.nrl.file_conts__GT_url(freader.result)], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32862) : work_app.events._GT_evt.call(null,G__32862));
}));

return freader.readAsBinaryString(file);
});
work_app.nrl.drop_handler = (function work_app$nrl$drop_handler(e){
e.preventDefault();

var files_obj = e.dataTransfer.files;
var files = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32865_SHARP_){
return files_obj.item(p1__32865_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(files_obj.length)));
var nrl_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(work_app.nrl.is_nrl_QMARK_,files);
var seq__32875 = cljs.core.seq(files);
var chunk__32876 = null;
var count__32877 = (0);
var i__32878 = (0);
while(true){
if((i__32878 < count__32877)){
var file = chunk__32876.cljs$core$IIndexed$_nth$arity$2(null,i__32878);
work_app.nrl.consume_dropped_file(file);


var G__32898 = seq__32875;
var G__32899 = chunk__32876;
var G__32900 = count__32877;
var G__32901 = (i__32878 + (1));
seq__32875 = G__32898;
chunk__32876 = G__32899;
count__32877 = G__32900;
i__32878 = G__32901;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32875);
if(temp__5804__auto__){
var seq__32875__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32875__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32875__$1);
var G__32902 = cljs.core.chunk_rest(seq__32875__$1);
var G__32903 = c__5568__auto__;
var G__32904 = cljs.core.count(c__5568__auto__);
var G__32905 = (0);
seq__32875 = G__32902;
chunk__32876 = G__32903;
count__32877 = G__32904;
i__32878 = G__32905;
continue;
} else {
var file = cljs.core.first(seq__32875__$1);
work_app.nrl.consume_dropped_file(file);


var G__32906 = cljs.core.next(seq__32875__$1);
var G__32907 = null;
var G__32908 = (0);
var G__32909 = (0);
seq__32875 = G__32906;
chunk__32876 = G__32907;
count__32877 = G__32908;
i__32878 = G__32909;
continue;
}
} else {
return null;
}
}
break;
}
});
work_app.nrl.nrl = (function work_app$nrl$nrl(){
var nrls = work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","nrls","work-app.subs/nrls",807587295)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"nrlDropZone",new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),work_app.shared.allow_drop,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),work_app.shared.allow_drop,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (p1__32888_SHARP_){
return p1__32888_SHARP_.dataTransfer.setData("text/plain","");
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),work_app.nrl.drop_handler,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"300px"], null)], null),((((0) < cljs.core.count(nrls)))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$nrl$nrl_$_iter__32889(s__32890){
return (new cljs.core.LazySeq(null,(function (){
var s__32890__$1 = s__32890;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32890__$1);
if(temp__5804__auto__){
var s__32890__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32890__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32890__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32892 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32891 = (0);
while(true){
if((i__32891 < size__5522__auto__)){
var nrl = cljs.core._nth(c__5521__auto__,i__32891);
cljs.core.chunk_append(b__32892,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.nrl.nrl_comp,nrl], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(nrl))], null)));

var G__32912 = (i__32891 + (1));
i__32891 = G__32912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32892),work_app$nrl$nrl_$_iter__32889(cljs.core.chunk_rest(s__32890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32892),null);
}
} else {
var nrl = cljs.core.first(s__32890__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.nrl.nrl_comp,nrl], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(nrl))], null)),work_app$nrl$nrl_$_iter__32889(cljs.core.rest(s__32890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(nrls);
})()):null),((((0) < cljs.core.count(nrls)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"label","label",1718410804),"Clear All",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","nrl-remove-all","work-app.events/nrl-remove-all",-18302133)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32893) : work_app.events._GT_evt.call(null,G__32893));
})], null)], null):null)], null);
});

//# sourceMappingURL=work_app.nrl.js.map
