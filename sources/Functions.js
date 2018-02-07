/* Lodash-Object  4.7.7
 * Copyright Sylvain Longepée
 * Released under MIT license <https://github.com/Sylvain59650/lodash-object/blob/master/LICENSE>
 * Based on Lodash 4.7.5 <https://lodash.com/>
 */

;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["lodash"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require("lodash"));
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