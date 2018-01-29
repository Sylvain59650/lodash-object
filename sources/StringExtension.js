/**
 * @license
 * Lodash-Object  4.7.6
 * Copyright Sylvain Longepée
 * Released under MIT license <https://github.com/Sylvain59650/lodash-object/blob/master/LICENSE>
 * Based on Lodash 4.7.4 <https://lodash.com/>
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
}("StringExtensionModule", this, function(_) {
  'use strict';

  String.prototype.camelCase = function() { return _.camelCase(this); }

  /*String.prototype.camelize = function() {
    var s = this.trim().replace(/(\-|_|\s)+(.)?/g, function(mathc, sep, c) {
      return (c ? c.toUpperCase() : '');
    });
    return s;
  }*/

  String.prototype.kebabCase = function() { return _.kebabCase(this); }

  String.prototype.snakeCase = function() { return _.snakeCase(this); }

  String.prototype.startCase = function(searchFor, position) { return _.startCase(this, searchFor, position || 0); }


  String.prototype.dasherize = function() {
    return this.trim().replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
  }

  return String;

}));