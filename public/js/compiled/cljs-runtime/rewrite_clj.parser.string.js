goog.provide('rewrite_clj.parser.string');
/**
 * Flush buffer and add string to the given vector.
 */
rewrite_clj.parser.string.flush_into = (function rewrite_clj$parser$string$flush_into(lines,buf){
var s = buf.toString();
buf.clear();

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,s);
});
rewrite_clj.parser.string.read_string_data = (function rewrite_clj$parser$string$read_string_data(reader){
rewrite_clj.reader.ignore(reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = rewrite_clj.reader.next(reader);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if(((cljs.core.not(escape_QMARK_)) && ((c === "\"")))){
return rewrite_clj.parser.string.flush_into(lines,buf);
} else {
if((c === "\n")){
var G__58071 = escape_QMARK_;
var G__58072 = rewrite_clj.parser.string.flush_into(lines,buf);
escape_QMARK_ = G__58071;
lines = G__58072;
continue;
} else {
buf.append(c);

var G__58073 = ((cljs.core.not(escape_QMARK_)) && ((c === "\\")));
var G__58074 = lines;
escape_QMARK_ = G__58073;
lines = G__58074;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function rewrite_clj$parser$string$parse_string(reader){
return rewrite_clj.node.stringz.string_node(rewrite_clj.parser.string.read_string_data(reader));
});
rewrite_clj.parser.string.parse_regex = (function rewrite_clj$parser$string$parse_regex(reader){
var h = rewrite_clj.parser.string.read_string_data(reader);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",h);
});

//# sourceMappingURL=rewrite_clj.parser.string.js.map
