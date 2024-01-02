goog.provide('work_app.subs');
goog.scope(function(){
  work_app.subs.goog$module$goog$object = goog.module.get('goog.object');
});
work_app.subs._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-dialog-visible","work-app.subs/group-dialog-visible",-466831745),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__28995){
var vec__29000 = p__28995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(0),null);
var matter_id28927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(1),null);
var group_id28928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28927,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28928,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"group-dialog-visible","group-dialog-visible",329370587)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","db-dialog-visible","work-app.subs/db-dialog-visible",53152984),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29011){
var vec__29012 = p__29011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29012,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"db-dialog-visible","db-dialog-visible",294780980)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","code-slider-visible","work-app.subs/code-slider-visible",-127433101),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29019){
var vec__29021 = p__29019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29021,(0),null);
var code_id28929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29021,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"codes","codes",-760505543),code_id28929,new cljs.core.Keyword(null,"code-slider-visible","code-slider-visible",147885079)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-order","work-app.subs/matter-order",74435687),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29031){
var vec__29034 = p__29031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034,(0),null);
var matter_id28930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28930,new cljs.core.Keyword(null,"order","order",-1254677256)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","move-dialog-visible","work-app.subs/move-dialog-visible",-798684953),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29043){
var vec__29044 = p__29043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29044,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"move-dialog-visible","move-dialog-visible",-518900725)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-slider-locked","work-app.subs/group-slider-locked",-1332314566),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29051){
var vec__29053 = p__29051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29053,(0),null);
var matter_id28931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29053,(1),null);
var group_id28932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29053,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28931,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28932,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"group-slider-locked","group-slider-locked",-2113934562)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","dragged-task","work-app.subs/dragged-task",-1833010780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29062){
var vec__29065 = p__29062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29065,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"dragged-task","dragged-task",-1565171000)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","collapsed","work-app.subs/collapsed",-1436370399),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29074){
var vec__29076 = p__29074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(0),null);
var e_id28933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"gen","gen",142575302),e_id28933,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","code-edit-mode","work-app.subs/code-edit-mode",1415576489),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29087){
var vec__29088 = p__29087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(0),null);
var code_id28934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"codes","codes",-760505543),code_id28934,new cljs.core.Keyword(null,"code-edit-mode","code-edit-mode",1152985221)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-date","work-app.subs/task-date",-1972668824),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29098){
var vec__29100 = p__29098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(0),null);
var matter_id28935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(1),null);
var group_id28936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(2),null);
var task_id28937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29100,(3),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28935,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28936,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id28937,new cljs.core.Keyword(null,"task-date","task-date",836895036)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","dialog-visible","work-app.subs/dialog-visible",-594417131),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29112){
var vec__29113 = p__29112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29113,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"dialog-visible","dialog-visible",-855829135)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","elapsed","work-app.subs/elapsed",-1016340806),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29123){
var vec__29127 = p__29123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29127,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-slider-locked","work-app.subs/task-slider-locked",-1592538336),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29139){
var vec__29141 = p__29139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29141,(0),null);
var matter_id28938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29141,(1),null);
var group_id28939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29141,(2),null);
var task_id28940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29141,(3),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28938,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28939,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id28940,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"task-slider-locked","task-slider-locked",-1333999612)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","code-map","work-app.subs/code-map",1699580498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29153){
var vec__29154 = p__29153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29154,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"codes","codes",-760505543)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","cal-date","work-app.subs/cal-date",1315360462),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29162){
var vec__29163 = p__29162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29163,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cal","cal",1451495619),new cljs.core.Keyword(null,"cal-date","cal-date",1102571458)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-id-map","work-app.subs/matter-id-map",1891077289),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29170){
var vec__29171 = p__29170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"matter-id-map","matter-id-map",1633847189)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","sidebar-filter","work-app.subs/sidebar-filter",1571543016),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29179){
var vec__29180 = p__29179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29180,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sidebar-filter","sidebar-filter",1294253764)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","time-selected-code","work-app.subs/time-selected-code",1356482457),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29188){
var vec__29189 = p__29188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29189,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-selected-code","time-selected-code",1090614461)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","time-matters","work-app.subs/time-matters",-19407434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29197){
var vec__29198 = p__29197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29198,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-name-edit","work-app.subs/matter-name-edit",1073060971),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29206){
var vec__29209 = p__29206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29209,(0),null);
var matter_id28941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29209,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28941,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"matter-name-edit","matter-name-edit",810070359)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","client-matters","work-app.subs/client-matters",-2049554014),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29219){
var vec__29220 = p__29219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29220,(0),null);
var client_id28942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29220,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"clients","clients",1436018090),client_id28942,new cljs.core.Keyword(null,"matters","matters",-108834512)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","t-slider-locked","work-app.subs/t-slider-locked",1751403348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29227){
var vec__29228 = p__29227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(0),null);
var t_id28943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29228,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),t_id28943,new cljs.core.Keyword(null,"t-slider-locked","t-slider-locked",-654352832)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-edit-dialog-showing","work-app.subs/matter-edit-dialog-showing",1108180820),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29236){
var vec__29239 = p__29236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(0),null);
var client_id28944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(1),null);
var matter_id28945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"clients","clients",1436018090),client_id28944,new cljs.core.Keyword(null,"matters","matters",-108834512),matter_id28945,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"matters-edit-dialog-showing","matters-edit-dialog-showing",-1179583516)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-time","work-app.subs/task-time",751859108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29251){
var vec__29252 = p__29251;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(0),null);
var matter_id28946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(1),null);
var group_id28947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(2),null);
var task_id28948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(3),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28946,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28947,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id28948,new cljs.core.Keyword(null,"time","time",1385887882)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","time-selected-code-key-and-id","work-app.subs/time-selected-code-key-and-id",-688504090),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29266){
var vec__29267 = p__29266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29267,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"time-selected-code-key-and-id","time-selected-code-key-and-id",-917546998)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","code-sliders-locked","work-app.subs/code-sliders-locked",-2005690265),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29271){
var vec__29274 = p__29271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29274,(0),null);
var code_id28949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29274,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"codes","codes",-760505543),code_id28949,new cljs.core.Keyword(null,"code-sliders-locked","code-sliders-locked",2043454779)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-group-map","work-app.subs/matter-group-map",-1452006384),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29283){
var vec__29285 = p__29283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29285,(0),null);
var matter_id28950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29285,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28950,new cljs.core.Keyword(null,"groups","groups",-136896102)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-description","work-app.subs/task-description",-128746024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29293){
var vec__29296 = p__29293;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29296,(0),null);
var matter_id28951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29296,(1),null);
var group_id28952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29296,(2),null);
var task_id28953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29296,(3),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28951,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28952,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id28953,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","dialog-confirm-event","work-app.subs/dialog-confirm-event",1135160083),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29306){
var vec__29308 = p__29306;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"dialog-confirm-event","dialog-confirm-event",873473535)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-id-map","work-app.subs/task-id-map",776440821),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29322){
var vec__29324 = p__29322;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29324,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"task-id-map","task-id-map",1072726289)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matters-new-cm-dialog-showing","work-app.subs/matters-new-cm-dialog-showing",1202687642),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29332){
var vec__29333 = p__29332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29333,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"matters-new-cm-dialog-showing","matters-new-cm-dialog-showing",941193606)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-number","work-app.subs/matter-number",994645512),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29343){
var vec__29344 = p__29343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(0),null);
var client_id28954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(1),null);
var matter_id28955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29344,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"clients","clients",1436018090),client_id28954,new cljs.core.Keyword(null,"matters","matters",-108834512),matter_id28955,new cljs.core.Keyword(null,"number","number",1570378438)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","drag-over-position","work-app.subs/drag-over-position",1239170817),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29352){
var vec__29353 = p__29352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29353,(0),null);
var t_id28956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29353,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),t_id28956,new cljs.core.Keyword(null,"drag-over-position","drag-over-position",977757229)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","clients","work-app.subs/clients",1161221846),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29360){
var vec__29363 = p__29360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"clients","clients",1436018090)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-sliders-showing","work-app.subs/group-sliders-showing",1962249345),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29374){
var vec__29377 = p__29374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377,(0),null);
var matter_id28957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377,(1),null);
var group_id28958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28957,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28958,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"group-sliders-showing","group-sliders-showing",1694409117)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-id","work-app.subs/matter-id",-2011347356),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29392){
var vec__29394 = p__29392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29394,(0),null);
var matter_id28959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29394,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28959,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-order","work-app.subs/task-order",1427462389),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29408){
var vec__29409 = p__29408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(0),null);
var matter_id28960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(1),null);
var group_id28961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(2),null);
var task_id28962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29409,(3),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28960,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28961,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id28962,new cljs.core.Keyword(null,"order","order",-1254677256)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","ticker-tasks","work-app.subs/ticker-tasks",111547897),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29412){
var vec__29415 = p__29412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"ticker-tasks","ticker-tasks",388964709)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-tiered-menu-ref","work-app.subs/group-tiered-menu-ref",-1143387382),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29419){
var vec__29420 = p__29419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(0),null);
var matter_id28963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(1),null);
var group_id28964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28963,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28964,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"group-tiered-menu-ref","group-tiered-menu-ref",-1409255890)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","slider-dialog-visible","work-app.subs/slider-dialog-visible",122307784),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29426){
var vec__29427 = p__29426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29427,(0),null);
var e_id28965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29427,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"gen","gen",142575302),e_id28965,new cljs.core.Keyword(null,"slider-dialog-visible","slider-dialog-visible",-1212999140)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","slider-dialog-locked","work-app.subs/slider-dialog-locked",-538647722),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29435){
var vec__29437 = p__29435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29437,(0),null);
var e_id28966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29437,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"gen","gen",142575302),e_id28966,new cljs.core.Keyword(null,"slider-dialog-locked","slider-dialog-locked",-276070734)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","t-already-focused","work-app.subs/t-already-focused",1403951896),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29445){
var vec__29446 = p__29445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(0),null);
var t_id28967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),t_id28967,new cljs.core.Keyword(null,"t-already-focused","t-already-focused",1666565628)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","draggable","work-app.subs/draggable",1935668599),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29452){
var vec__29455 = p__29452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29455,(0),null);
var e_id28968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29455,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"gen","gen",142575302),e_id28968,new cljs.core.Keyword(null,"draggable","draggable",1676206163)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","timer-id","work-app.subs/timer-id",1375211715),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29462){
var vec__29463 = p__29462;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29463,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"ticker-tasks","ticker-tasks",388964709),new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330),new cljs.core.Keyword(null,"task-id","task-id",-1045480126)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-last-active-timer","work-app.subs/matter-last-active-timer",-910615584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29470){
var vec__29472 = p__29470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29472,(0),null);
var m_id28969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29472,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"matters","matters",-108834512),m_id28969,new cljs.core.Keyword(null,"matter-last-active-timer","matter-last-active-timer",-98554172)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-checked","work-app.subs/task-checked",-391156136),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29479){
var vec__29481 = p__29479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481,(0),null);
var matter_id28970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481,(1),null);
var group_id28971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481,(2),null);
var task_id28972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481,(3),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28970,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28971,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id28972,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"task-checked","task-checked",1480874420)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-collapsed","work-app.subs/matter-collapsed",991628238),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29491){
var vec__29492 = p__29491;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29492,(0),null);
var m_id28973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29492,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"matters","matters",-108834512),m_id28973,new cljs.core.Keyword(null,"matter-collapsed","matter-collapsed",716207794)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","active-timer-t-id","work-app.subs/active-timer-t-id",1088511530),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29503){
var vec__29504 = p__29503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"active-timer-t-id","active-timer-t-id",1345874638)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","edit-mode","work-app.subs/edit-mode",1663445509),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29512){
var vec__29513 = p__29512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29513,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-order","work-app.subs/group-order",1559947488),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29520){
var vec__29521 = p__29520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(0),null);
var matter_id28974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(1),null);
var group_id28975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28974,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28975,new cljs.core.Keyword(null,"order","order",-1254677256)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-last-active-task","work-app.subs/matter-last-active-task",-1355326862),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29528){
var vec__29529 = p__29528;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29529,(0),null);
var matter_id28976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29529,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28976,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"matter-last-active-task","matter-last-active-task",-1093794466)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","dialog-body","work-app.subs/dialog-body",-1408527510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29540){
var vec__29543 = p__29540;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29543,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"dialog-body","dialog-body",-1149850034)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","time-selected-date","work-app.subs/time-selected-date",1257549244),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29550){
var vec__29553 = p__29550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29553,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"time-selected-date","time-selected-date",1514903776)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","nrls","work-app.subs/nrls",807587295),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29560){
var vec__29561 = p__29560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29561,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nrls","nrls",2125067539)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-name","work-app.subs/matter-name",448899800),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29568){
var vec__29569 = p__29568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29569,(0),null);
var client_id28977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29569,(1),null);
var matter_id28978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29569,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"clients","clients",1436018090),client_id28977,new cljs.core.Keyword(null,"matters","matters",-108834512),matter_id28978,new cljs.core.Keyword(null,"name","name",1843675177)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","code-collapsed","work-app.subs/code-collapsed",-1198999804),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29580){
var vec__29583 = p__29580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583,(0),null);
var code_id28979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"codes","codes",-760505543),code_id28979,new cljs.core.Keyword(null,"code-collapsed","code-collapsed",-922906584)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","t-checked","work-app.subs/t-checked",-244046952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29587){
var vec__29588 = p__29587;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(0),null);
var t_id28980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),t_id28980,new cljs.core.Keyword(null,"t-checked","t-checked",1090729580)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-debouncer","work-app.subs/task-debouncer",-3542843),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29593){
var vec__29594 = p__29593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29594,(0),null);
var t_id28981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29594,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),t_id28981,new cljs.core.Keyword(null,"task-debouncer","task-debouncer",239237601)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-selected-code","work-app.subs/group-selected-code",1959418137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29601){
var vec__29602 = p__29601;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29602,(0),null);
var matter_id28982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29602,(1),null);
var group_id28983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29602,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28982,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28983,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"group-selected-code","group-selected-code",1700567549)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","cm-dropdown-val","work-app.subs/cm-dropdown-val",-506889652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29609){
var vec__29610 = p__29609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29610,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"cm-dropdown-val","cm-dropdown-val",242258344)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","active-timer","work-app.subs/active-timer",-1716310662),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29617){
var vec__29619 = p__29617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29619,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"ticker-tasks","ticker-tasks",388964709),new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","toast","work-app.subs/toast",326597773),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29625){
var vec__29626 = p__29625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29626,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"toast","toast",68598129)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","task-already-focused","work-app.subs/task-already-focused",-15453819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29633){
var vec__29634 = p__29633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29634,(0),null);
var matter_id28984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29634,(1),null);
var group_id28985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29634,(2),null);
var task_id28986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29634,(3),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28984,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28985,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id28986,new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"task-already-focused","task-already-focused",249756377)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-tasks","work-app.subs/group-tasks",-1037867741),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29646){
var vec__29647 = p__29646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(0),null);
var matter_id28987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(1),null);
var group_id28988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28987,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28988,new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","active-timer-m-id","work-app.subs/active-timer-m-id",-380132449),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29654){
var vec__29655 = p__29654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29655,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"active-timer-m-id","active-timer-m-id",-104694141)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","group-id","work-app.subs/group-id",-1578821438),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__28778__auto__,p__29660){
var vec__29661 = p__29660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(0),null);
var matter_id28989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(1),null);
var group_id28990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__28778__auto__,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time-matters","time-matters",-1250766694),matter_id28989,new cljs.core.Keyword(null,"groups","groups",-136896102),group_id28990,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
})], 0));
work_app.subs.time_lit_code_strs = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L100 Case Assessment, Development and Administration\nL110 Fact Investigation/Development\nL120 Analysis/Strategy\nL130 Experts/Consultants\nL140 Document/File Management\nL150 Budgeting\nL160 Settlement/Non-Binding ADR\nL190 Other Case Assessment, Development and Administration","L200 Pre-Trial Pleadings and Motions\nL210 Pleadings\nL220 Preliminary Injunctions/Provisional Remedies\nL230 Court Mandated Conferences\nL240 Dispositive Motions\nL250 Other Written Motions and Submissions\nL260 Class Action Certification and Notice","L300 Discovery\nL310 Written Discovery\nL320 Document Production\nL330 Depositions\nL340 Expert Discovery\nL350 Discovery Motions\nL390 Other Discovery","L400 Trial Preparation and Trial\nL410 Fact Witnesses\nL420 Expert Witnesses\nL430 Written Motions and Submissions\nL440 Other Trial Preparation and Support\nL450 Trial and Hearing Attendance\nL460 Post-Trial Motions and Submissions\nL470 Enforcement","L500 Appeal\nL510 Appellate Motions and Submissions\nL520 Appellate Briefs\nL530 Oral Argument","A100 Activities\nA101 Plan and prepare for\nA102 Research\nA103 Draft/revise\nA104 Review/analyze\nA105 Communicate (in firm)\nA106 Communicate (with client)\nA107 Communicate (other outside counsel)\nA108 Communicate (other external)\nA109 Appear for/attend\nA110 Manage data/files\nA111 Other","E100 Expenses\nE101 Copying\nE102 Outside printing\nE103 Word processing\nE104 Facsimile\nE105 Telephone\nE106 Online research\nE107 Delivery services/messengers\nE108 Postage\nE109 Local travel\nE110 Out-of-town travel\nE111 Meals\nE112 Court fees\nE113 Subpoena fees\nE114 Witness fees\nE115 Deposition transcripts\nE116 Trial transcripts\nE117 Trial exhibits\nE118 Litigation support vendors\nE119 Experts\nE120 Private investigators\nE121 Arbitrators/mediators\nE122 Local counsel\nE123 Other professionals\nE124 Other"], null);
work_app.subs.time_lit_code_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29674){
var vec__29675 = p__29674;
var key_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29675,(0),null);
var st = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29675,(1),null);
var vec__29680 = clojure.string.split_lines(st);
var seq__29681 = cljs.core.seq(vec__29680);
var first__29682 = cljs.core.first(seq__29681);
var seq__29681__$1 = cljs.core.next(seq__29681);
var first = first__29682;
var rest = seq__29681__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__29686){
var vec__29688 = p__29686;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_base),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),s);
}),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_base),first]),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),rest));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),work_app.subs.time_lit_code_strs)));
work_app.subs.time_lit_code_opts = cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29708){
var vec__29709 = p__29708;
var key_base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29709,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29709,(1),null);
var vec__29714 = clojure.string.split_lines(s);
var seq__29715 = cljs.core.seq(vec__29714);
var first__29716 = cljs.core.first(seq__29715);
var seq__29715__$1 = cljs.core.next(seq__29715);
var first = first__29716;
var rest = seq__29715__$1;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_base),new cljs.core.Keyword(null,"label","label",1718410804),first,new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-inbox",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29722){
var vec__29723 = p__29722;
var key_leaf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_base),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_leaf)].join(''),new cljs.core.Keyword(null,"label","label",1718410804),code,new cljs.core.Keyword(null,"leaf","leaf",1306118732),true], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),rest))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),work_app.subs.time_lit_code_strs)));
work_app.subs.time_lit_codes_opts_ds = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__29734){
var vec__29736 = p__29734;
var group_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29736,(0),null);
var vec__29739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29736,(1),null);
var seq__29740 = cljs.core.seq(vec__29739);
var first__29741 = cljs.core.first(seq__29740);
var seq__29740__$1 = cljs.core.next(seq__29740);
var frst = first__29741;
var rest = seq__29740__$1;
var key_base = cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_i);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("code","key","code/key",-1519659910),key_base,new cljs.core.Keyword("code","label","code/label",1716728861),frst,new cljs.core.Keyword("code","code","code/code",-1648422023),cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(frst,/ /)),new cljs.core.Keyword("code","children","code/children",-945628113),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__29747){
var vec__29748 = p__29747;
var key_leaf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("code","key","code/key",-1519659910),[key_base,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_leaf)].join(''),new cljs.core.Keyword("code","label","code/label",1716728861),code], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),rest))], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.split_lines,work_app.subs.time_lit_code_strs)));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","identity","work-app.subs/identity",-775004193),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,p__29755){
var vec__29757 = p__29755;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29757,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29757,(1),null);
return e;
})], 0));
var G__29761_30029 = new cljs.core.Keyword("work-app.subs","ds-db-inter","work-app.subs/ds-db-inter",-856409381);
var G__29762_30030 = (function (ds,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null)], null);
});
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__29761_30029,G__29762_30030) : re_posh.core.reg_sub.call(null,G__29761_30029,G__29762_30030));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","ds-db","work-app.subs/ds-db",1612061191),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","ds-db-inter","work-app.subs/ds-db-inter",-856409381)], null));
}),(function (datoms){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,datoms);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","ds-db-actual","work-app.subs/ds-db-actual",1836225368),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","ds-db-inter","work-app.subs/ds-db-inter",-856409381)], null));
}),(function (datoms){
return datascript.core.db_with(datascript.core.db(datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(work_app.ds_schema.ds_schema)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__29784){
var vec__29785 = p__29784;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
}),datoms));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","db","work-app.subs/db",732084971),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return db;
})], 0));
var G__29795_30038 = new cljs.core.Keyword("work-app.subs","pull-entity","work-app.subs/pull-entity",-1783949093);
var G__29796_30039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__29795_30038,G__29796_30039) : re_posh.core.reg_pull_sub.call(null,G__29795_30038,G__29796_30039));
var G__29798_30042 = new cljs.core.Keyword("work-app.subs","pull-entities","work-app.subs/pull-entities",-1870530034);
var G__29799_30043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
(re_posh.core.reg_pull_many_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_many_sub.cljs$core$IFn$_invoke$arity$2(G__29798_30042,G__29799_30043) : re_posh.core.reg_pull_many_sub.call(null,G__29798_30042,G__29799_30043));
work_app.subs.client_to_matter_id_map = (function work_app$subs$client_to_matter_id_map(client){

var map__29825 = client;
var map__29825__$1 = cljs.core.__destructure_map(map__29825);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29825__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29825__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29825__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var matters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29825__$1,new cljs.core.Keyword(null,"matters","matters",-108834512));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,matter){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(matter),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"matter-id","matter-id",914791808),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(matter),new cljs.core.Keyword(null,"matter-name","matter-name",-359115844),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(matter),new cljs.core.Keyword(null,"matter-number","matter-number",717382436),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(matter),new cljs.core.Keyword(null,"client-id","client-id",-464622140),id,new cljs.core.Keyword(null,"client-name","client-name",1843891115),name,new cljs.core.Keyword(null,"client-number","client-number",-1919106465),number,new cljs.core.Keyword(null,"cm-number","cm-number",-633094046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(number),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(matter))].join('')], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(matters));
});
var G__29851_30049 = new cljs.core.Keyword("work-app.subs","matters-with-tasks-ds","work-app.subs/matters-with-tasks-ds",922339992);
var G__29852_30050 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__29851_30049,G__29852_30050) : re_posh.core.reg_query_sub.call(null,G__29851_30049,G__29852_30050));
var G__29863_30051 = new cljs.core.Keyword("work-app.subs","matter-codes","work-app.subs/matter-codes",974603297);
var G__29864_30052 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?codes","?codes",-915642743,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"?codes","?codes",-915642743,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__29863_30051,G__29864_30052) : re_posh.core.reg_query_sub.call(null,G__29863_30051,G__29864_30052));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matters-edit-dialog-data","work-app.subs/matters-edit-dialog-data",1017240472),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__29878){
var vec__29879 = p__29878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"edit-dialog-data","edit-dialog-data",-252363273)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matters-dialog-new-cm?","work-app.subs/matters-dialog-new-cm?",1641708372),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"new-dialog-cm?","new-dialog-cm?",-971526197)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-id-info-map","work-app.subs/matter-id-info-map",-1704245178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","clients","work-app.subs/clients",1161221846)], null));
}),(function (client_map){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_app.subs.client_to_matter_id_map,cljs.core.vals(client_map)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("work-app.subs","matter-id-info","work-app.subs/matter-id-info",-1732030682),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (matter_id){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","matter-id-info-map","work-app.subs/matter-id-info-map",-1704245178)], null));
}),(function (matter_info_map,p__29903){
var vec__29904 = p__29903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29904,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29904,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(matter_info_map,matter_id);
})], 0));

//# sourceMappingURL=work_app.subs.js.map
