var _ = require("../node_modules/lodash/lodash.min.js");
var fn = require("../sources/Functions.js");

function square(n) {
  return n * n;
}

//var addSquare = fn.flow([_.add, square]);
//console.log(addSquare(1 + 2, 3));
// => 9