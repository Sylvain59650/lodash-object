;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["lodash-core"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require("lodash-core"));
  } else {
    fn = factory(_);
  }
}("FunctionsModule", this, function(_) {
  'use strict';

  function fn() {}

  fn.prototype.flow = function(...funcs) {
    _.flow(funcs);
  }



  return fn;

}));