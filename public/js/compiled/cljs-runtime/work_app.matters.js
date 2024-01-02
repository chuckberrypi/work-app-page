goog.provide('work_app.matters');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$formik$dist$index=shadow.js.require("module$node_modules$formik$dist$index", {});
var module$node_modules$primereact$button$button_cjs=shadow.js.require("module$node_modules$primereact$button$button_cjs", {});
var module$node_modules$primereact$column$column_cjs=shadow.js.require("module$node_modules$primereact$column$column_cjs", {});
var module$node_modules$primereact$datatable$datatable_cjs=shadow.js.require("module$node_modules$primereact$datatable$datatable_cjs", {});
var module$node_modules$primereact$dialog$dialog_cjs=shadow.js.require("module$node_modules$primereact$dialog$dialog_cjs", {});
var module$node_modules$primereact$dropdown$dropdown_cjs=shadow.js.require("module$node_modules$primereact$dropdown$dropdown_cjs", {});
var module$node_modules$primereact$inputmask$inputmask_cjs=shadow.js.require("module$node_modules$primereact$inputmask$inputmask_cjs", {});
var module$node_modules$primereact$inputtext$inputtext_cjs=shadow.js.require("module$node_modules$primereact$inputtext$inputtext_cjs", {});
var module$node_modules$primereact$selectbutton$selectbutton_cjs=shadow.js.require("module$node_modules$primereact$selectbutton$selectbutton_cjs", {});
work_app.matters.input_form_new_cm = (function work_app$matters$input_form_new_cm(){
var formik = module$node_modules$formik$dist$index.useFormik(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initialValues","initialValues",-2055525019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c-num","c-num",1611632000),"",new cljs.core.Keyword(null,"m-num","m-num",81000627),"",new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"",new cljs.core.Keyword(null,"m-name","m-name",-1838368401),""], null),new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (p1__32810_SHARP_){
var G__32811_32949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","toggle-new-cm-dialog-showing","work-app.matter-events/toggle-new-cm-dialog-showing",548953577)], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32811_32949) : work_app.events._GT_evt.call(null,G__32811_32949));

var G__32812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-client-matter","work-app.matter-events/add-new-client-matter",204426496),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__32810_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32812) : work_app.events._GT_evt.call(null,G__32812));
})], null)));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),formik.handleSubmit,new cljs.core.Keyword(null,"class","class",-2030961996),"p-fluid"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Formik Vals: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(formik.values))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"c-num"], null),"Client Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputmask$inputmask_cjs.InputMask,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"c-num",new cljs.core.Keyword(null,"name","name",1843675177),"c-num",new cljs.core.Keyword(null,"mask","mask",-585748447),"999999",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"999999",new cljs.core.Keyword(null,"slot-char","slot-char",-1331548257),"*",new cljs.core.Keyword(null,"value","value",305978217),formik.values.c_num,new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"c-name"], null),"Client Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputtext$inputtext_cjs.InputText,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"c-name",new cljs.core.Keyword(null,"name","name",1843675177),"c-name",new cljs.core.Keyword(null,"value","value",305978217),formik.values.c_name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"m-num"], null),"Matter Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputmask$inputmask_cjs.InputMask,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"m-num",new cljs.core.Keyword(null,"name","name",1843675177),"m-num",new cljs.core.Keyword(null,"mask","mask",-585748447),"999999",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"999999",new cljs.core.Keyword(null,"slot-char","slot-char",-1331548257),"*",new cljs.core.Keyword(null,"value","value",305978217),formik.values.m_num,new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"m-name"], null),"Matter Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputtext$inputtext_cjs.InputText,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"m-name",new cljs.core.Keyword(null,"name","name",1843675177),"m-name",new cljs.core.Keyword(null,"value","value",305978217),formik.values.m_name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Matter",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-plus"], null)], null)], null);
});
work_app.matters.input_form_selected_cm = (function work_app$matters$input_form_selected_cm(){
var client_opts = work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","client-opts","work-app.matter-subs/client-opts",-388682124)], null));
var initial_val = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(client_opts));
var formik = module$node_modules$formik$dist$index.useFormik(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initialValues","initialValues",-2055525019),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),initial_val,new cljs.core.Keyword(null,"m-num","m-num",81000627),cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_val),new cljs.core.Keyword(null,"m-name","m-name",-1838368401),""], null),new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (p1__32815_SHARP_){
var vls = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__32815_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var G__32819_32952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","toggle-new-cm-dialog-showing","work-app.matter-events/toggle-new-cm-dialog-showing",548953577)], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32819_32952) : work_app.events._GT_evt.call(null,G__32819_32952));

var G__32821_32953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),cljs.core.str.cljs$core$IFn$_invoke$arity$1(vls)], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32821_32953) : work_app.events._GT_evt.call(null,G__32821_32953));

var G__32822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-matter","work-app.matter-events/add-new-matter",2101231876),vls], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32822) : work_app.events._GT_evt.call(null,G__32822));
})], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),formik.handleSubmit,new cljs.core.Keyword(null,"class","class",-2030961996),"p-fluid"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"client-id"], null),"Client"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$dropdown$dropdown_cjs.Dropdown,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"client-id",new cljs.core.Keyword(null,"name","name",1843675177),"client-id",new cljs.core.Keyword(null,"filter","filter",-948537934),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"options","options",99638489),client_opts,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(formik.values),"client-id"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"m-num"], null),"Matter Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputmask$inputmask_cjs.InputMask,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m-num",new cljs.core.Keyword(null,"name","name",1843675177),"m-num",new cljs.core.Keyword(null,"mask","mask",-585748447),"999999",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"999999",new cljs.core.Keyword(null,"slot-char","slot-char",-1331548257),"*",new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"m-name"], null),"Matter Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputtext$inputtext_cjs.InputText,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"m-name",new cljs.core.Keyword(null,"name","name",1843675177),"m-name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Add",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-plus"], null)], null)], null);
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
work_app.matters.Row_opts = (function (cm,__meta,__extmap,__hash){
this.cm = cm;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(work_app.matters.Row_opts.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(work_app.matters.Row_opts.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k32836,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__32883 = k32836;
var G__32883__$1 = (((G__32883 instanceof cljs.core.Keyword))?G__32883.fqn:null);
switch (G__32883__$1) {
case "cm":
return self__.cm;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32836,else__5346__auto__);

}
}));

(work_app.matters.Row_opts.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__32884){
var vec__32885 = p__32884;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32885,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32885,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(work_app.matters.Row_opts.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#work-app.matters.Row-opts{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cm","cm",540591536),self__.cm],null))], null),self__.__extmap));
}));

(work_app.matters.Row_opts.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32835){
var self__ = this;
var G__32835__$1 = this;
return (new cljs.core.RecordIter((0),G__32835__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cm","cm",540591536)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(work_app.matters.Row_opts.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(work_app.matters.Row_opts.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new work_app.matters.Row_opts(self__.cm,self__.__meta,self__.__extmap,self__.__hash));
}));

(work_app.matters.Row_opts.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(work_app.matters.Row_opts.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1886719892 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(work_app.matters.Row_opts.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32838,other32839){
var self__ = this;
var this32838__$1 = this;
return (((!((other32839 == null)))) && ((((this32838__$1.constructor === other32839.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32838__$1.cm,other32839.cm)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32838__$1.__extmap,other32839.__extmap)))))));
}));

(work_app.matters.Row_opts.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cm","cm",540591536),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new work_app.matters.Row_opts(self__.cm,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(work_app.matters.Row_opts.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k32836){
var self__ = this;
var this__5350__auto____$1 = this;
var G__32913 = k32836;
var G__32913__$1 = (((G__32913 instanceof cljs.core.Keyword))?G__32913.fqn:null);
switch (G__32913__$1) {
case "cm":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32836);

}
}));

(work_app.matters.Row_opts.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__32835){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__32914 = cljs.core.keyword_identical_QMARK_;
var expr__32915 = k__5352__auto__;
if(cljs.core.truth_((pred__32914.cljs$core$IFn$_invoke$arity$2 ? pred__32914.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cm","cm",540591536),expr__32915) : pred__32914.call(null,new cljs.core.Keyword(null,"cm","cm",540591536),expr__32915)))){
return (new work_app.matters.Row_opts(G__32835,self__.__meta,self__.__extmap,null));
} else {
return (new work_app.matters.Row_opts(self__.cm,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__32835),null));
}
}));

(work_app.matters.Row_opts.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cm","cm",540591536),self__.cm,null))], null),self__.__extmap));
}));

(work_app.matters.Row_opts.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__32835){
var self__ = this;
var this__5342__auto____$1 = this;
return (new work_app.matters.Row_opts(self__.cm,G__32835,self__.__extmap,self__.__hash));
}));

(work_app.matters.Row_opts.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(work_app.matters.Row_opts.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cm","cm",-2113844233,null)], null);
}));

(work_app.matters.Row_opts.cljs$lang$type = true);

(work_app.matters.Row_opts.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"work-app.matters/Row-opts",null,(1),null));
}));

(work_app.matters.Row_opts.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"work-app.matters/Row-opts");
}));

/**
 * Positional factory function for work-app.matters/Row-opts.
 */
work_app.matters.__GT_Row_opts = (function work_app$matters$__GT_Row_opts(cm){
return (new work_app.matters.Row_opts(cm,null,null,null));
});

/**
 * Factory function for work-app.matters/Row-opts, taking a map of keywords to field values.
 */
work_app.matters.map__GT_Row_opts = (function work_app$matters$map__GT_Row_opts(G__32858){
var extmap__5385__auto__ = (function (){var G__32918 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32858,new cljs.core.Keyword(null,"cm","cm",540591536));
if(cljs.core.record_QMARK_(G__32858)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32918);
} else {
return G__32918;
}
})();
return (new work_app.matters.Row_opts(new cljs.core.Keyword(null,"cm","cm",540591536).cljs$core$IFn$_invoke$arity$1(G__32858),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

work_app.matters.copy_cm_button = (function work_app$matters$copy_cm_button(data){
var cm = data.cm;
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null),cm], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-copy",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),cm], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32919) : work_app.events._GT_evt.call(null,G__32919));
})], null)], null)], null)], null));
});
work_app.matters.edit_dialog = (function work_app$matters$edit_dialog(client_num,matter_num){
var map__32921 = work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","matters-matter","work-app.subs/matters-matter",899046157),client_num,matter_num], null));
var map__32921__$1 = cljs.core.__destructure_map(map__32921);
var data = map__32921__$1;
var client_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32921__$1,new cljs.core.Keyword(null,"client-name","client-name",1843891115));
var client_num__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32921__$1,new cljs.core.Keyword(null,"client-num","client-num",-1900559089));
var matter_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32921__$1,new cljs.core.Keyword(null,"matter-name","matter-name",-359115844));
var matter_num__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32921__$1,new cljs.core.Keyword(null,"matter-num","matter-num",-1351918268));
var formik = module$node_modules$formik$dist$index.useFormik(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initialValues","initialValues",-2055525019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"matter-num","matter-num",-1351918268),matter_num__$1,new cljs.core.Keyword(null,"matter-name","matter-name",-359115844),matter_name,new cljs.core.Keyword(null,"client-num","client-num",-1900559089),client_num__$1,new cljs.core.Keyword(null,"client-name","client-name",1843891115),client_name], null),new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),(function (p1__32920_SHARP_){
var packet = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old","old",-1825222690),data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new","new",-2085437848),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__32920_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], 0));
console.log(["New Vals: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(packet)].join(''));

var G__32922_32983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-toggle-edit-dialog-showing","work-app.events/matters-toggle-edit-dialog-showing",1661565174),data], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32922_32983) : work_app.events._GT_evt.call(null,G__32922_32983));

var G__32923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-edit-matter","work-app.events/matters-edit-matter",53605894),packet], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32923) : work_app.events._GT_evt.call(null,G__32923));
})], null)));
var clj_formik_vals = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(formik.values,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$dialog$dialog_cjs.Dialog,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","matter-edit-dialog-showing","work-app.subs/matter-edit-dialog-showing",1108180820),matter_num__$1], null)),new cljs.core.Keyword(null,"position","position",-2011731912),"top",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__32924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-toggle-edit-dialog-showing","work-app.events/matters-toggle-edit-dialog-showing",1661565174),data], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32924) : work_app.events._GT_evt.call(null,G__32924));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["formik.values: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_formik_vals)].join('')], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),formik.handleSubmit,new cljs.core.Keyword(null,"class","class",-2030961996),"p-fluid"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"client-num"], null),"Client Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputmask$inputmask_cjs.InputMask,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"client-num",new cljs.core.Keyword(null,"name","name",1843675177),"client-num",new cljs.core.Keyword(null,"mask","mask",-585748447),"999999",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"999999",new cljs.core.Keyword(null,"slot-char","slot-char",-1331548257),"*",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"client-num","client-num",-1900559089).cljs$core$IFn$_invoke$arity$1(clj_formik_vals),new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"client-name"], null),"Client Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputtext$inputtext_cjs.InputText,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"client-name",new cljs.core.Keyword(null,"name","name",1843675177),"client-name",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"client-name","client-name",1843891115).cljs$core$IFn$_invoke$arity$1(clj_formik_vals),new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"matter-num"], null),"Matter Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputmask$inputmask_cjs.InputMask,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"matter-num",new cljs.core.Keyword(null,"name","name",1843675177),"matter-num",new cljs.core.Keyword(null,"mask","mask",-585748447),"999999",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"999999",new cljs.core.Keyword(null,"slot-char","slot-char",-1331548257),"*",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"matter-num","matter-num",-1351918268).cljs$core$IFn$_invoke$arity$1(clj_formik_vals),new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"field"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html-for","html-for",594503920),"matter-name"], null),"Matter Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputtext$inputtext_cjs.InputText,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"matter-name",new cljs.core.Keyword(null,"name","name",1843675177),"matter-name",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"matter-name","matter-name",-359115844).cljs$core$IFn$_invoke$arity$1(clj_formik_vals),new cljs.core.Keyword(null,"on-change","on-change",-732046149),formik.handleChange], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Submit",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-plus"], null)], null)], null)], null);
});
work_app.matters.edit_delete_buttons = (function work_app$matters$edit_delete_buttons(data){
var map__32925 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__32925__$1 = cljs.core.__destructure_map(map__32925);
var d = map__32925__$1;
var client_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32925__$1,new cljs.core.Keyword(null,"client-num","client-num",-1900559089));
var matter_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32925__$1,new cljs.core.Keyword(null,"matter-num","matter-num",-1351918268));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.matters.edit_dialog,client_num,matter_num], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-pencil",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-toggle-edit-dialog-showing","work-app.events/matters-toggle-edit-dialog-showing",1661565174),d], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32926) : work_app.events._GT_evt.call(null,G__32926));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-trash",new cljs.core.Keyword(null,"class","class",-2030961996),"p-button-danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-delete-matter","work-app.events/matters-delete-matter",1722746536),d], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32927) : work_app.events._GT_evt.call(null,G__32927));
})], null)], null)], null));
});
work_app.matters.new_dialog = (function work_app$matters$new_dialog(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$dialog$dialog_cjs.Dialog,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"390px",new cljs.core.Keyword(null,"height","height",1025178622),"490px"], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","matters-new-cm-dialog-showing","work-app.subs/matters-new-cm-dialog-showing",1202687642)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),"top",new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__32930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","toggle-new-cm-dialog-showing","work-app.matter-events/toggle-new-cm-dialog-showing",548953577)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32930) : work_app.events._GT_evt.call(null,G__32930));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$selectbutton$selectbutton_cjs.SelectButton,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"options","options",99638489),["New Client","Existing Client"],new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__32931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-toggle-new-or-existing-cm","work-app.events/matters-toggle-new-or-existing-cm",-1782470261)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32931) : work_app.events._GT_evt.call(null,G__32931));
}),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","matters-dialog-new-cm?","work-app.subs/matters-dialog-new-cm?",1641708372)], null)))?"New Client":"Existing Client")], null)], null),(cljs.core.truth_(work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","matters-dialog-new-cm?","work-app.subs/matters-dialog-new-cm?",1641708372)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.matters.input_form_new_cm], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.matters.input_form_selected_cm], null))], null);
});
work_app.matters.matters = (function work_app$matters$matters(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"New Matter",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-plus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__32936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","toggle-new-cm-dialog-showing","work-app.matter-events/toggle-new-cm-dialog-showing",548953577)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__32936) : work_app.events._GT_evt.call(null,G__32936));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.matters.new_dialog], null),(function (){var cms = work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","client-matters","work-app.matter-subs/client-matters",1137923080)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["cms: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cms)].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$matters$matters_$_iter__32939(s__32940){
return (new cljs.core.LazySeq(null,(function (){
var s__32940__$1 = s__32940;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32940__$1);
if(temp__5804__auto__){
var s__32940__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32940__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32940__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32942 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32941 = (0);
while(true){
if((i__32941 < size__5522__auto__)){
var map__32945 = cljs.core._nth(c__5521__auto__,i__32941);
var map__32945__$1 = cljs.core.__destructure_map(map__32945);
var m_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32945__$1,new cljs.core.Keyword(null,"m-id","m-id",1795173264));
cljs.core.chunk_append(b__32942,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","matter-code-menu-opts","work-app.matter-subs/matter-code-menu-opts",1660266215)], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m_id], null)));

var G__32987 = (i__32941 + (1));
i__32941 = G__32987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32942),work_app$matters$matters_$_iter__32939(cljs.core.chunk_rest(s__32940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32942),null);
}
} else {
var map__32948 = cljs.core.first(s__32940__$2);
var map__32948__$1 = cljs.core.__destructure_map(map__32948);
var m_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32948__$1,new cljs.core.Keyword(null,"m-id","m-id",1795173264));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","matter-code-menu-opts","work-app.matter-subs/matter-code-menu-opts",1660266215)], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m_id], null)),work_app$matters$matters_$_iter__32939(cljs.core.rest(s__32940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})()),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$datatable$datatable_cjs.DataTable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$column$column_cjs.Column,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"client-name",new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"header","header",119441134),"Client"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$column$column_cjs.Column,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"matter-name",new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"header","header",119441134),"Matter"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$column$column_cjs.Column,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"cm",new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"header","header",119441134),"Client/Matter No",new cljs.core.Keyword(null,"body","body",-2049205669),work_app.matters.copy_cm_button], null)], null)], null)], null);
})()], null);
});

//# sourceMappingURL=work_app.matters.js.map
