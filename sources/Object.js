;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["lodash-core"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require("lodash-core"));
  } else {
    JSON = factory(_);
  }
}("ObjectsModule", this, function(_) {
  'use strict';


  function JSON() {}


  JSON.prototype.findKey = function(predicate) {
    return _.findKey(this.self, predicate);
  }

  JSON.prototype.forIn = function(iteratee) {
    _.forIn(this.self, iteratee);
  }


  return JSON;

}));