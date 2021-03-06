;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["lodash-core"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require("lodash-core"));
  } else {
    String = factory(_);
  }
}("StringModule", this, function(_) {
  'use strict';


  //C
  String.prototype.capitalize = function() { return _.capitalize(this); }

  String.prototype.latinize = function() { return _.deburr(this); }

  //C
  String.prototype.endsWith = function(searchFor, position) { return _.endsWith(this, searchFor, position); }
  String.prototype.escape = function() { return _.escape(this); }
  String.prototype.escapeRegExp = function() { return _.escapeRegExp(this); }
    //String.prototype.lowerCase = function() { return _.lowerCase(this); }
  String.prototype.lowerFirst = function() { return _.lowerFirst(this); }
  String.prototype.pad = function(length, chars) { return _.pad(this, length, chars); }
  String.prototype.padEnd = function(length, chars) { return _.padEnd(this, length, chars); }
  String.prototype.padStart = function(length, chars) { return _.padStart(this, length, chars); }
  String.prototype.repeat = function(n = 1) { return _.repeat(this, n); }

  //C //IE
  if (!String.prototype.split) {
    String.prototype.split = function(separator, limit) {
      // if (this.split) {
      //   return this.split(separator, limit);
      // }
      return _.split(this, separator, limit);
    }
  }

  //C
  String.prototype.startsWith = function() { return _.startsWith(this); }
  String.prototype.template = function(options = {}) { return _.template(this, options); }
    //String.prototype.toLower = function() { return _.toLower(this); }
    //String.prototype.toUpper = function() { return _.toUpper(this); }

  //C
  String.prototype.trim = function() { return _.trim(this); }

  //C
  String.prototype.trimEnd = function() { return _.trimEnd(this); }

  //C
  String.prototype.trimStart = function() { return _.trimStart(this); }
  String.prototype.truncate = function(options = {}) { return _.truncate(this, options); }
  String.prototype.unescape = function() { return _.unescape(this); }
    //String.prototype.upperCase = function() { return _.upperCase(this); }
  String.prototype.upperFirst = function() { return _.upperFirst(this); }
  String.prototype.words = function(pattern) { return _.words(this, pattern); }


  String.prototype.count = function(substr) {
    var count = 0
    var pos = this.indexOf(substr)
    while (pos >= 0) {
      count += 1
      pos = this.indexOf(substr, pos + 1)
    }

    return count
  }

  String.prototype.between = function(left, right) {
    var startPos = this.indexOf(left);
    var endPos = this.indexOf(right, startPos + left.length);
    if (endPos == -1 && right != null)
      return "";
    else if (endPos == -1 && right == null)
      return this.substring(startPos + left.length);
    else
      return this.slice(startPos + left.length, endPos);
  }




  String.prototype.chompLeft = function(prefix) {
    if (this.indexOf(prefix) === 0) {
      return this.slice(prefix.length);
    } else {
      return this;
    }
  }

  String.prototype.chompRight = function(suffix) {
    if (this.endsWith(suffix)) {
      return this.slice(0, this.length - suffix.length);
    } else {
      return this;
    }
  }

  String.prototype.collapseWhitespace = function() {
    return this.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
  }

  //C
  String.prototype.includes = function(ss) {
    return this.s.indexOf(ss) >= 0;
  }



  String.prototype.lines = function() {
    return this.replace(/\r\n/g, '\n').split('\n');
  }

  String.prototype.strip = function() {
    var ss = this;
    for (var i = 0, n = arguments.length; i < n; i++) {
      ss = ss.split(arguments[i]).join('');
    }
    return ss;
  }



  String.prototype.insertAt = function(position, str) { return this.substr(0, position) + str + this.substr(position); }

  String.prototype.reverse = function() { return this.split("").reverse().join(""); }

  String.prototype.equalsIgnoreCase = function(st) {
    if (st == null || this.length != st.length) return false;
    for (var i = 0; i < this.length; i++) {
      var c1 = this.charCodeAt(i);
      var c2 = st.charCodeAt(i);
      if (c1 != c2) {
        if (c1 > c2) {
          if (c1 >= 97 && c1 <= 122) c1 = c1 - 32;
        } else {
          if (c2 >= 97 && c2 <= 122) c2 = c2 - 32;
        }
        if (c1 != c2) return false;
      }
    }
    return true;
  }

  String.prototype.indexOfAny = function(arrayOfChars, startPosition, endPosition) {
    var arr = arrayOfChars.split("");
    for (var i = startPosition || 0; i < endPosition || this.length; i++) {
      var c = this.charCodeAt(i);
      for (var j = 0; j < arr.length; j++) {
        var c2 = arr[j].charCodeAt(0);
        if (c == c2) return i;
      }
    }
    return -1;
  }

  String.isNullOrEmpty = function(st) {
    return (st == null || st == undefined || st === "");
  }

  String.isNullOrWhiteSpace = function(st) {
    return String.isNullOrEmpty(st) || st.trim().length === 0;
  }

  String.prototype.toCharArray = function() {
    return this.split("");
  }

  //https://vocajs.com/
  return String;

}));