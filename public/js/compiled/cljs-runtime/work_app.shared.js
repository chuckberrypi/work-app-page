goog.provide('work_app.shared');
work_app.shared.allow_drop = (function work_app$shared$allow_drop(e){
return e.preventDefault();
});
work_app.shared.copy_rich_text = (function work_app$shared$copy_rich_text(text){
var listener = (function (e){
e.preventDefault();

e.clipboardData.setData("text/html",text);

return e.clipboardData.setData("text/plain",text);
});
document.addEventListener("copy",listener);

document.execCommand("copy");

return document.removeEventListener("copy",listener);
});
work_app.shared.log_clipboard = (function work_app$shared$log_clipboard(){
var listener = (function (e){
e.preventDefault();

console.log(["Text/html: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.clipboardData.getData("text/html"))].join(''));

return console.log(["Text/plain: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.clipboardData.getData("text/plain"))].join(''));
});
document.addEventListener("do",listener);

document.execCommand("do");

return document.removeEventListener("do",listener);
});
work_app.shared.formatted_area = (function work_app$shared$formatted_area(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41622_41630 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41623_41631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41624_41632 = true;
var _STAR_print_fn_STAR__temp_val__41625_41633 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41624_41632);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41625_41633);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41623_41631);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41622_41630);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()], null)], null);
});
work_app.shared._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);

//# sourceMappingURL=work_app.shared.js.map
