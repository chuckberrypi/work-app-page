goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19651){
var map__19652 = p__19651;
var map__19652__$1 = cljs.core.__destructure_map(map__19652);
var m = map__19652__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19652__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19656_20092 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19657_20093 = null;
var count__19658_20094 = (0);
var i__19659_20095 = (0);
while(true){
if((i__19659_20095 < count__19658_20094)){
var f_20096 = chunk__19657_20093.cljs$core$IIndexed$_nth$arity$2(null,i__19659_20095);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20096], 0));


var G__20097 = seq__19656_20092;
var G__20098 = chunk__19657_20093;
var G__20099 = count__19658_20094;
var G__20100 = (i__19659_20095 + (1));
seq__19656_20092 = G__20097;
chunk__19657_20093 = G__20098;
count__19658_20094 = G__20099;
i__19659_20095 = G__20100;
continue;
} else {
var temp__5804__auto___20101 = cljs.core.seq(seq__19656_20092);
if(temp__5804__auto___20101){
var seq__19656_20102__$1 = temp__5804__auto___20101;
if(cljs.core.chunked_seq_QMARK_(seq__19656_20102__$1)){
var c__5568__auto___20103 = cljs.core.chunk_first(seq__19656_20102__$1);
var G__20104 = cljs.core.chunk_rest(seq__19656_20102__$1);
var G__20105 = c__5568__auto___20103;
var G__20106 = cljs.core.count(c__5568__auto___20103);
var G__20107 = (0);
seq__19656_20092 = G__20104;
chunk__19657_20093 = G__20105;
count__19658_20094 = G__20106;
i__19659_20095 = G__20107;
continue;
} else {
var f_20108 = cljs.core.first(seq__19656_20102__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20108], 0));


var G__20109 = cljs.core.next(seq__19656_20102__$1);
var G__20110 = null;
var G__20111 = (0);
var G__20112 = (0);
seq__19656_20092 = G__20109;
chunk__19657_20093 = G__20110;
count__19658_20094 = G__20111;
i__19659_20095 = G__20112;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20113 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20113], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20113)))?cljs.core.second(arglists_20113):arglists_20113)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19660_20114 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19661_20115 = null;
var count__19662_20116 = (0);
var i__19663_20117 = (0);
while(true){
if((i__19663_20117 < count__19662_20116)){
var vec__19711_20118 = chunk__19661_20115.cljs$core$IIndexed$_nth$arity$2(null,i__19663_20117);
var name_20119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19711_20118,(0),null);
var map__19714_20120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19711_20118,(1),null);
var map__19714_20121__$1 = cljs.core.__destructure_map(map__19714_20120);
var doc_20122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19714_20121__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19714_20121__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20119], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20123], 0));

if(cljs.core.truth_(doc_20122)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20122], 0));
} else {
}


var G__20124 = seq__19660_20114;
var G__20125 = chunk__19661_20115;
var G__20126 = count__19662_20116;
var G__20127 = (i__19663_20117 + (1));
seq__19660_20114 = G__20124;
chunk__19661_20115 = G__20125;
count__19662_20116 = G__20126;
i__19663_20117 = G__20127;
continue;
} else {
var temp__5804__auto___20128 = cljs.core.seq(seq__19660_20114);
if(temp__5804__auto___20128){
var seq__19660_20129__$1 = temp__5804__auto___20128;
if(cljs.core.chunked_seq_QMARK_(seq__19660_20129__$1)){
var c__5568__auto___20130 = cljs.core.chunk_first(seq__19660_20129__$1);
var G__20131 = cljs.core.chunk_rest(seq__19660_20129__$1);
var G__20132 = c__5568__auto___20130;
var G__20133 = cljs.core.count(c__5568__auto___20130);
var G__20134 = (0);
seq__19660_20114 = G__20131;
chunk__19661_20115 = G__20132;
count__19662_20116 = G__20133;
i__19663_20117 = G__20134;
continue;
} else {
var vec__19768_20135 = cljs.core.first(seq__19660_20129__$1);
var name_20136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19768_20135,(0),null);
var map__19771_20137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19768_20135,(1),null);
var map__19771_20138__$1 = cljs.core.__destructure_map(map__19771_20137);
var doc_20139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19771_20138__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19771_20138__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20136], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20140], 0));

if(cljs.core.truth_(doc_20139)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20139], 0));
} else {
}


var G__20141 = cljs.core.next(seq__19660_20129__$1);
var G__20142 = null;
var G__20143 = (0);
var G__20144 = (0);
seq__19660_20114 = G__20141;
chunk__19661_20115 = G__20142;
count__19662_20116 = G__20143;
i__19663_20117 = G__20144;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19780 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19781 = null;
var count__19782 = (0);
var i__19783 = (0);
while(true){
if((i__19783 < count__19782)){
var role = chunk__19781.cljs$core$IIndexed$_nth$arity$2(null,i__19783);
var temp__5804__auto___20145__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20145__$1)){
var spec_20146 = temp__5804__auto___20145__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20146)], 0));
} else {
}


var G__20147 = seq__19780;
var G__20148 = chunk__19781;
var G__20149 = count__19782;
var G__20150 = (i__19783 + (1));
seq__19780 = G__20147;
chunk__19781 = G__20148;
count__19782 = G__20149;
i__19783 = G__20150;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19780);
if(temp__5804__auto____$1){
var seq__19780__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19780__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19780__$1);
var G__20151 = cljs.core.chunk_rest(seq__19780__$1);
var G__20152 = c__5568__auto__;
var G__20153 = cljs.core.count(c__5568__auto__);
var G__20154 = (0);
seq__19780 = G__20151;
chunk__19781 = G__20152;
count__19782 = G__20153;
i__19783 = G__20154;
continue;
} else {
var role = cljs.core.first(seq__19780__$1);
var temp__5804__auto___20155__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20155__$2)){
var spec_20156 = temp__5804__auto___20155__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20156)], 0));
} else {
}


var G__20157 = cljs.core.next(seq__19780__$1);
var G__20158 = null;
var G__20159 = (0);
var G__20160 = (0);
seq__19780 = G__20157;
chunk__19781 = G__20158;
count__19782 = G__20159;
i__19783 = G__20160;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20161 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20162 = cljs.core.ex_cause(t);
via = G__20161;
t = G__20162;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19888 = datafied_throwable;
var map__19888__$1 = cljs.core.__destructure_map(map__19888);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19888__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19890 = cljs.core.last(via);
var map__19890__$1 = cljs.core.__destructure_map(map__19890);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19890__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19890__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19891 = data;
var map__19891__$1 = cljs.core.__destructure_map(map__19891);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19891__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19891__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19891__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19892 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19892__$1 = cljs.core.__destructure_map(map__19892);
var top_data = map__19892__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19957 = phase;
var G__19957__$1 = (((G__19957 instanceof cljs.core.Keyword))?G__19957.fqn:null);
switch (G__19957__$1) {
case "read-source":
var map__19970 = data;
var map__19970__$1 = cljs.core.__destructure_map(map__19970);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19970__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19970__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19989 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19989__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19989,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19989);
var G__19989__$2 = (cljs.core.truth_((function (){var fexpr__19994 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19994.cljs$core$IFn$_invoke$arity$1 ? fexpr__19994.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19994.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19989__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19989__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19989__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19989__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20009 = top_data;
var G__20009__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20009,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20009);
var G__20009__$2 = (cljs.core.truth_((function (){var fexpr__20010 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20010.cljs$core$IFn$_invoke$arity$1 ? fexpr__20010.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20010.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20009__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20009__$1);
var G__20009__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20009__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20009__$2);
var G__20009__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20009__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20009__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20009__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20009__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20012 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20012,(3),null);
var G__20015 = top_data;
var G__20015__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20015,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20015);
var G__20015__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20015__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20015__$1);
var G__20015__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20015__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20015__$2);
var G__20015__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20015__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20015__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20015__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20015__$4;
}

break;
case "execution":
var vec__20021 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19876_SHARP_){
var or__5045__auto__ = (p1__19876_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20036 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20036.cljs$core$IFn$_invoke$arity$1 ? fexpr__20036.cljs$core$IFn$_invoke$arity$1(p1__19876_SHARP_) : fexpr__20036.call(null,p1__19876_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20037 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20037__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20037,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20037);
var G__20037__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20037__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20037__$1);
var G__20037__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20037__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20037__$2);
var G__20037__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20037__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20037__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20037__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20037__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19957__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20049){
var map__20050 = p__20049;
var map__20050__$1 = cljs.core.__destructure_map(map__20050);
var triage_data = map__20050__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20050__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20051 = phase;
var G__20051__$1 = (((G__20051 instanceof cljs.core.Keyword))?G__20051.fqn:null);
switch (G__20051__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20052 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20053 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20054 = loc;
var G__20055 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20057_20174 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20058_20175 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20059_20176 = true;
var _STAR_print_fn_STAR__temp_val__20060_20177 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20059_20176);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20060_20177);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20047_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20047_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20058_20175);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20057_20174);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20052,G__20053,G__20054,G__20055) : format.call(null,G__20052,G__20053,G__20054,G__20055));

break;
case "macroexpansion":
var G__20061 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20062 = cause_type;
var G__20063 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20064 = loc;
var G__20065 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20061,G__20062,G__20063,G__20064,G__20065) : format.call(null,G__20061,G__20062,G__20063,G__20064,G__20065));

break;
case "compile-syntax-check":
var G__20066 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20067 = cause_type;
var G__20068 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20069 = loc;
var G__20070 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20066,G__20067,G__20068,G__20069,G__20070) : format.call(null,G__20066,G__20067,G__20068,G__20069,G__20070));

break;
case "compilation":
var G__20071 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20072 = cause_type;
var G__20073 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20074 = loc;
var G__20075 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20071,G__20072,G__20073,G__20074,G__20075) : format.call(null,G__20071,G__20072,G__20073,G__20074,G__20075));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20076 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20077 = symbol;
var G__20078 = loc;
var G__20079 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20080_20182 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20081_20183 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20082_20184 = true;
var _STAR_print_fn_STAR__temp_val__20083_20185 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20082_20184);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20083_20185);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20048_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20048_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20081_20183);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20080_20182);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20076,G__20077,G__20078,G__20079) : format.call(null,G__20076,G__20077,G__20078,G__20079));
} else {
var G__20084 = "Execution error%s at %s(%s).\n%s\n";
var G__20085 = cause_type;
var G__20086 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20087 = loc;
var G__20088 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20084,G__20085,G__20086,G__20087,G__20088) : format.call(null,G__20084,G__20085,G__20086,G__20087,G__20088));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20051__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
