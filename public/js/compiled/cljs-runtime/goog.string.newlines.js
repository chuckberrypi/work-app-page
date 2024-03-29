goog.provide("goog.string.newlines");
goog.provide("goog.string.newlines.Line");
goog.string.newlines.splitLines = function(str, opt_keepNewlines) {
  const lines = goog.string.newlines.getLines(str);
  return lines.map(function(line) {
    return opt_keepNewlines ? line.getFullLine() : line.getContent();
  });
};
goog.string.newlines.Line = function(string, startLineIndex, endContentIndex, endLineIndex) {
  this.string = string;
  this.startLineIndex = startLineIndex;
  this.endContentIndex = endContentIndex;
  this.endLineIndex = endLineIndex;
};
goog.string.newlines.Line.prototype.getContent = function() {
  return this.string.substring(this.startLineIndex, this.endContentIndex);
};
goog.string.newlines.Line.prototype.getFullLine = function() {
  return this.string.substring(this.startLineIndex, this.endLineIndex);
};
goog.string.newlines.Line.prototype.getNewline = function() {
  return this.string.substring(this.endContentIndex, this.endLineIndex);
};
goog.string.newlines.getLines = function(str) {
  const re = RegExp("\r\n|\r|\n", "g");
  let sliceIndex = 0;
  let result;
  const lines = [];
  while (result = re.exec(str)) {
    const line = new goog.string.newlines.Line(str, sliceIndex, result.index, result.index + result[0].length);
    lines.push(line);
    sliceIndex = re.lastIndex;
  }
  if (sliceIndex < str.length) {
    const line = new goog.string.newlines.Line(str, sliceIndex, str.length, str.length);
    lines.push(line);
  }
  return lines;
};

//# sourceMappingURL=goog.string.newlines.js.map
