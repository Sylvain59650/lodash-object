/**
 * @license
 * Lodash-Object  4.7.18
 * Copyright Sylvain Longepée
 * Released under MIT license <https://github.com/Sylvain59650/lodash-object/blob/master/LICENSE>
 * Based on Lodash 4.7.17 <https://lodash.com/>
 */

;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["lodash"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require("lodash"));
  } else {
    root.String = factory(_);
  }
}("StringModule", this, function(_) {
  'use strict';

  String.prototype.camelCase = function() { return _.camelCase(this); }

  //C
  String.prototype.capitalize = function() { return _.capitalize(this); }

  String.prototype.deburr = function() { return _.deburr(this); }

  //C
  String.prototype.endsWith = function(searchFor, position) { return _.endsWith(this, searchFor, position); }
  String.prototype.escape = function() { return _.escape(this); }
  String.prototype.escapeRegExp = function() { return _.escapeRegExp(this); }
  String.prototype.kebabCase = function() { return _.kebabCase(this); }
  String.prototype.lowerCase = function() { return _.lowerCase(this); }
  String.prototype.lowerFirst = function() { return _.lowerFirst(this); }
  String.prototype.pad = function(length, chars) { return _.pad(this, length, chars); }
  String.prototype.padEnd = function(length, chars) { return _.padEnd(this, length, chars); }
  String.prototype.padStart = function(length, chars) { return _.padStart(this, length, chars); }
  String.prototype.parseInt = function(radix = 10) { return _.parseInt(this, radix); }
  String.prototype.repeat = function(n = 1) { return _.repeat(this, n); }
  String.prototype.snakeCase = function() { return _.snakeCase(this); }

  //C
  String.prototype.split = function(separator, limit) { return _.split(this, separator, limit); }
  String.prototype.startCase = function(searchFor, position = 0) { return _.startCase(this, searchFor, position); }

  //C
  String.prototype.startsWith = function() { return _.startsWith(this); }
  String.prototype.template = function(options = {}) { return _.template(this, options); }
  String.prototype.toLower = function() { return _.toLower(this); }
  String.prototype.toUpper = function() { return _.toUpper(this); }

  //C
  String.prototype.trim = function() { return _.trim(this); }

  //C
  String.prototype.trimEnd = function() { return _.trimEnd(this); }

  //C
  String.prototype.trimStart = function() { return _.trimStart(this); }
  String.prototype.truncate = function(options = {}) { return _.truncate(this, options); }
  String.prototype.unescape = function() { return _.unescape(this); }
  String.prototype.upperCase = function() { return _.upperCase(this); }
  String.prototype.upperFirst = function() { return _.upperFirst(this); }
  String.prototype.words = function(pattern) { return _.words(this, pattern); }


  return String;

}));