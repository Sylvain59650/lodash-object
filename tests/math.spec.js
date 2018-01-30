var _ = require("../node_modules/lodash/lodash.min.js");
require("../distrib/Math.min.js");
var arrayOfPoint = [{
  x: 1,
  y: 2
}, {
  x: 3,
  y: 4
}, {
  x: 1,
  y: 6
}];
var ints = [1, 2, 3, 4, 5];


console.log("Math.add", Math.add(6, 4));
console.log("Math.sum", Math.sum([6, 4]));


console.log("Math.random", Math.random(2, 10));