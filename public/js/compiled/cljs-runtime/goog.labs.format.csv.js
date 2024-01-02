goog.provide("goog.labs.format.csv");
goog.provide("goog.labs.format.csv.ParseError");
goog.provide("goog.labs.format.csv.Token");
goog.require("goog.asserts");
goog.require("goog.debug.Error");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.string.newlines");
goog.labs.format.csv.ENABLE_VERBOSE_DEBUGGING = goog.DEBUG;
goog.labs.format.csv.ParseError = function(text, index, opt_message) {
  let message;
  this.position = null;
  if (goog.labs.format.csv.ENABLE_VERBOSE_DEBUGGING) {
    message = opt_message || "";
    const info = goog.labs.format.csv.ParseError.findLineInfo_(text, index);
    if (info) {
      const lineNumber = info.lineIndex + 1;
      const columnNumber = index - info.line.startLineIndex + 1;
      this.position = {line:lineNumber, column:columnNumber};
      message += goog.string.subs(" at line %s column %s", lineNumber, columnNumber);
      message += "\n" + goog.labs.format.csv.ParseError.getLineDebugString_(info.line.getContent(), columnNumber);
    }
  }
  goog.labs.format.csv.ParseError.base(this, "constructor", message);
};
goog.inherits(goog.labs.format.csv.ParseError, goog.debug.Error);
goog.labs.format.csv.ParseError.prototype.name = "ParseError";
goog.labs.format.csv.ParseError.findLineInfo_ = function(str, index) {
  const lines = goog.string.newlines.getLines(str);
  const lineIndex = lines.findIndex(function(line) {
    return line.startLineIndex <= index && line.endLineIndex > index;
  });
  if (typeof lineIndex === "number") {
    const line = lines[lineIndex];
    return {line:line, lineIndex:lineIndex};
  }
  return null;
};
goog.labs.format.csv.ParseError.getLineDebugString_ = function(str, column) {
  let returnString = str + "\n";
  returnString += goog.string.repeat(" ", column - 1) + "^";
  return returnString;
};
goog.labs.format.csv.Token;
goog.labs.format.csv.parse = function(text, opt_ignoreErrors, opt_delimiter) {
  let index = 0;
  const delimiter = opt_delimiter || ",";
  goog.asserts.assert(delimiter.length == 1, "Delimiter must be a single character.");
  goog.asserts.assert(delimiter != "\r" && opt_delimiter != "\n", "Cannot use newline or carriage return as delimiter.");
  const EOF = goog.labs.format.csv.Sentinels_.EOF;
  const EOR = goog.labs.format.csv.Sentinels_.EOR;
  const NEWLINE = goog.labs.format.csv.Sentinels_.NEWLINE;
  const EMPTY = goog.labs.format.csv.Sentinels_.EMPTY;
  let pushBackToken = null;
  let sawComma = false;
  function pushBack(t) {
    goog.labs.format.csv.assertToken_(t);
    goog.asserts.assert(pushBackToken === null);
    pushBackToken = t;
  }
  function nextToken() {
    if (pushBackToken != null) {
      const c = pushBackToken;
      pushBackToken = null;
      return c;
    }
    if (index >= text.length) {
      return EOF;
    }
    const chr = text.charAt(index++);
    goog.labs.format.csv.assertToken_(chr);
    let isNewline = false;
    if (chr == "\n") {
      isNewline = true;
    } else if (chr == "\r") {
      if (index < text.length && text.charAt(index) == "\n") {
        index++;
      }
      isNewline = true;
    }
    if (isNewline) {
      return NEWLINE;
    }
    return chr;
  }
  function readQuotedField() {
    const start = index;
    let end = null;
    for (let token = nextToken(); token != EOF; token = nextToken()) {
      if (token == '"') {
        end = index - 1;
        token = nextToken();
        if (token == '"') {
          end = null;
          continue;
        }
        if (token == delimiter || token == EOF || token == NEWLINE) {
          if (token == NEWLINE) {
            pushBack(token);
          }
          if (token == delimiter) {
            sawComma = true;
          }
          break;
        }
        if (!opt_ignoreErrors) {
          throw new goog.labs.format.csv.ParseError(text, index - 1, 'Unexpected character "' + token + '" after quote mark');
        } else {
          const prefix = '"' + text.substring(start, index);
          const suffix = readField();
          if (suffix == EOR) {
            pushBack(NEWLINE);
            return prefix;
          } else {
            return prefix + suffix;
          }
        }
      }
    }
    if (end === null) {
      if (!opt_ignoreErrors) {
        throw new goog.labs.format.csv.ParseError(text, text.length - 1, "Unexpected end of text after open quote");
      } else {
        end = text.length;
      }
    }
    return text.substring(start, end).replace(/""/g, '"');
  }
  function readField() {
    const start = index;
    const didSeeComma = sawComma;
    sawComma = false;
    let token = nextToken();
    if (token == EMPTY) {
      return EOR;
    }
    if (token == EOF || token == NEWLINE) {
      if (didSeeComma) {
        pushBack(EMPTY);
        return "";
      }
      return EOR;
    }
    if (token == '"') {
      return readQuotedField();
    }
    while (true) {
      if (token == EOF || token == NEWLINE) {
        pushBack(token);
        break;
      }
      if (token == delimiter) {
        sawComma = true;
        break;
      }
      if (token == '"' && !opt_ignoreErrors) {
        throw new goog.labs.format.csv.ParseError(text, index - 1, "Unexpected quote mark");
      }
      token = nextToken();
    }
    const returnString = token == EOF ? text.substring(start) : text.substring(start, index - 1);
    return returnString.replace(/[\r\n]+/g, "");
  }
  function readRecord() {
    if (index >= text.length) {
      return EOF;
    }
    const record = [];
    for (let field = readField(); field != EOR; field = readField()) {
      record.push(field);
    }
    return record;
  }
  const records = [];
  for (let record = readRecord(); record != EOF; record = readRecord()) {
    records.push(record);
  }
  return records;
};
goog.labs.format.csv.Sentinels_ = {EMPTY:{}, EOF:{}, EOR:{}, NEWLINE:{}};
goog.labs.format.csv.isCharacterString_ = function(str) {
  return typeof str === "string" && str.length == 1;
};
goog.labs.format.csv.assertToken_ = function(o) {
  if (typeof o === "string") {
    goog.asserts.assertString(o);
    goog.asserts.assert(goog.labs.format.csv.isCharacterString_(o), "Should be a string of length 1 or a sentinel.");
  } else {
    goog.asserts.assert(goog.object.containsValue(goog.labs.format.csv.Sentinels_, o), "Should be a string of length 1 or a sentinel.");
  }
};

//# sourceMappingURL=goog.labs.format.csv.js.map
