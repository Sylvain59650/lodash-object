var _ = require("../node_modules/lodash/lodash.min.js");
require("../sources/Object.js");

var users = new JSON({
  'barney': { 'age': 36, 'active': true },
  'fred': { 'age': 40, 'active': false },
  'pebbles': { 'age': 1, 'active': true }
});


//console.log(_.findKey(users, function(o) { return o.age < 40; }));

console.log(users.findKey(function(o) { return o.age < 40; }));
// => 'barney' (iteration order is not guaranteed)

users.forIn(function(value, key) {
  console.log(key);
});