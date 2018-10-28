;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["lodash-core"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require("lodash-core"));
  } else {
    String = factory(_);
  }
}("StringExtensionModule", this, function(_) {
  'use strict';

  String.prototype.camelCase = function() { return _.camelCase(this); }

  String.prototype.kebabCase = function() { return _.kebabCase(this); }

  String.prototype.snakeCase = function() { return _.snakeCase(this); }

  String.prototype.startCase = function(searchFor, position) { return _.startCase(this, searchFor, position || 0); }

  String.prototype.dasherize = function() {
    return this.trim().replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
  }

  return String;

}));