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
    root.Math = factory(_);
  }
}("MathModule", this, function(_) {
  'use strict';

  Math.add = function(nb1, nb2) { return _.add(nb1, nb2); }
  Math.ceil = function(number, precision = 0) { return _.ceil(number, precision); }
  Math.divide = function(dividend, divisor) { return _.divide(dividend, divisor); }
  Math.floor = function(number, precision = 0) { return _.floor(number, precision); }
  Math.max = function(array) { return _.max(array); }
  Math.maxBy = function(array, iteratee) { return _.maxBy(array, iteratee); }
  Math.mean = function(array) { return _.mean(array); }
  Math.meanBy = function(array, iteratee) { return _.meanBy(array, iteratee); }
  Math.minBy = function(array, iteratee) { return _.minBy(array, iteratee); }
  Math.min = function(array) { return _.min(array); }
  Math.multiply = function(multiplier, multiplicand) { return _.multiply(multiplier, multiplicand); }
  Math.round = function(number, precision = 0) { return _.round(number, precision); }
  Math.subtract = function(minuend, subtrahend) { return _.subtract(minuend, subtrahend); }
  Math.sum = function(array) { return _.sum(array); }
  Math.sumBy = function(array, iteratee) { return _.sumBy(array, iteratee); }

  Math.random = function(lower = 0, upper = 1, floating) { return _.random(lower, upper, floating); }
  Math.inRange = function(number, start = 0, end) { return _.inRange(number, start, end); }
  Math.clamp = function(number, lower, upper) { return _.clamp(number, lower, upper); }


  return Math;

}));