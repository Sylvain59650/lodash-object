var _ = require("../node_modules/lodash/lodash.min.js");
require("../distrib/Array.min.js");
require("../distrib/String.min.js");
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

//console.log([0, 1, false, 2, '', 3].compact());
// => [1, 2, 3]

//console.log(_.head(arrayOfPoint), arrayOfPoint.head());
console.log(arrayOfPoint.first());

console.log("tail", arrayOfPoint.tail().toJson());
console.log("concat", _.concat(arrayOfPoint, 5).toJson(), arrayOfPoint.concat(5).toJson());
console.log("concat", _.concat(arrayOfPoint, 5, 6).toJson(), arrayOfPoint.concat(5, 6).toJson());
console.log("difference", _.difference(ints, 5, 6).toJson(), ints.difference(5, 6).toJson());

console.log("differenceBy", _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x').toJson(), [{ 'x': 2 }, { 'x': 1 }].differenceBy([{ 'x': 1 }], 'x').toJson());



var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log("findLastIndex", _.findLastIndex(users, function(o) { return o.user == 'pebbles'; }),
  users.findLastIndex(function(o) { return o.user == 'pebbles'; }));
// => 2

// The `_.matches` iteratee shorthand.
console.log("findLastIndex", _.findLastIndex(users, { 'user': 'barney', 'active': true }), users.findLastIndex({ 'user': 'barney', 'active': true }));
// => 0

// The `_.matchesProperty` iteratee shorthand.
console.log("findLastIndex",
  _.findLastIndex(users, ['active', false]), users.findLastIndex(['active', false]));
// => 2

// The `_.property` iteratee shorthand.
console.log("findLastIndex",
  _.findLastIndex(users, 'active'), users.findLastIndex('active'));
// => 0

console.log("fill", [1, 2, 3, 4].fill(6, 0, 2).toJson());
console.log("fill", [1, 2, 3, 4].fill(6).toJson());


console.log("flattenDeep", [1, [2, [3, [4]], 5]].flattenDeep().toJson());
// => [1, 2, 3, 4, 5]

console.log("fromPairs", [
  ['a', 1],
  ['b', 2]
].fromPairs());
// => { 'a': 1, 'b': 2 }


console.log("intersection", _.intersection([2, 1], [1, 2]).toJson(), [2, 1].intersection([1, 2]).toJson());
// => [2]

console.log("join", _.join(['a', 'b', 'c'], '~'), ['a', 'b', 'c'].join('~'));
// => 'a~b~c'

console.log("sortedIndex", _.sortedIndex([30, 50], 40), [30, 50].sortedIndex(40));
// => 1

var array = ["a", "b", "c", "a", "b", "c"];
var array2 = ["a", "b", "c", "a", "b", "c"];
console.log("pull", _.pull(array, "a").toJson(), array2.pull("a").toJson());
// => ['b', 'b']


var array = [1, 2, 3, 4];
//var evens = _.remove(array, function(n) {return n % 2 == 0;});

console.log("remove", array.remove(function(n) { return n % 2 == 0; }).toJson());
// => [1, 3]

// => [2, 4]

var array = ['a', 'b', 'c', 'd'];
var pulled = array.pullAt([1, 3]);

console.log("pullAt", array.toJson(), pulled.toJson());
// => ['a', 'c']

var arr = [1, 1, 2, 8, 7, 9, 7, 2, 6, 1, 4];
console.log("sortedUniq", arr.sortedUniq().toJson());
console.log("sortedUniq", arr.toJson());
// => [1, 2]


console.log("sortedUniqBy", [1.1, 1.2, 2.3, 2.4].sortedUniqBy(Math.floor).toJson());
// => [1.1, 2.3]

var arr1 = [1, 1, 2, 8];
var arr2 = [2, 7, 9, 7];
var arr3 = [6, 1, 4];
console.log("union", arr1.union(arr2, arr3).toJson());

console.log("without", arr1.without(1, 8).toJson());


console.log("xor", _.xor([2, 1], [2, 3]).toJson(), [2, 1].xor([2, 3]).toJson());
// => [1, 3]

console.log("xorBy", _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor).toJson(), [2.1, 1.2].xorBy(Math.floor, [2.3, 3.4]).toJson());
// => [1.2, 3.4]

// The `_.property` iteratee shorthand.
console.log("xorBy", _.xorBy('x', [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }]).toJson(), [{ 'x': 1 }].xorBy('x', [{ 'x': 2 }, { 'x': 1 }]).toJson());
// => [{ 'x': 2 }]


var arr4 = ['a', 'b'];
console.log("zip", _.zip(arr4, [1, 2]).toJson());
console.log("zip", Array.zip(arr4, [1, 2], [true, false]).toJson());
// => [['a', 1, true], ['b', 2, false]]

console.log("zipObject", ['a', 'b'].zipObject([1, 2]));
// => { 'a': 1, 'b': 2 }

console.log("zipObjectDeep", ['a.b[0].c', 'a.b[1].d'].zipObjectDeep([1, 2]));
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }


console.log("countBy", [6.1, 4.2, 6.3].countBy(Math.floor));
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
console.log("countBy", ['one', 'two', 'three'].countBy('length'));
// => { '3': 2, '5': 1 }





console.log("words", "fred, barney, & pebbles".words().toJson());
// => ['fred', 'barney', 'pebbles']

console.log("words", "fred, barney, & pebbles".words(/[^, ]+/g).toJson());
// => ['fred', 'barney', '&', 'pebbles']


console.log("Math.add", Math.add(6, 4));
console.log("Math.sum", Math.sum([6, 4]));


console.log("Math.random", Math.random(2, 10));

[1, 2].forEach(function(value) {
  console.log("forEach", value);
});
// => Logs `1` then `2`.



console.log("every", [true, 1, null, 'yes'].every(Boolean));
// => false

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred', 'age': 40, 'active': false }
];

// The `_.matches` iteratee shorthand.
console.log("every", users.every({ 'user': 'barney', 'active': false }));
// => false

// The `_.matchesProperty` iteratee shorthand.
console.log("every", users.every(['active', false]));
// => true

// The `_.property` iteratee shorthand.
console.log("every", users.every('active'));
// => false

var users = [
  { 'user': 'fred', 'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred', 'age': 40 },
  { 'user': 'barney', 'age': 34 },
  { user: "gustave", age: 36 },
  { user: "mathieu", age: 41 },
  { user: "barney", age: 38 },
  { user: "fred", age: 50 },
  { user: "barney", age: 37 }
];

users = users.sortBy([function(o) { return o.user; }]);
console.log("sortBy user", users.toJson());
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

users = users.sortBy(['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
console.log("sortBy user,age", users.toJson());

users = users.filter(function(item) { return item.age >= 36; });
console.log("filter age>=36", users.toJson());

users = users.filter((item) => { return item.age < 48; });
console.log("filter age<48", users.toJson());


var st = "123123123456789123456789123654654987";

console.log(st.count("123"));

console.log('<a>foo</a>'.between('<a>', '</a>')); // => 'foo'
console.log('<a>foo</a></a>'.between('<a>', '</a>')); // => 'foo'
console.log('<a><a>foo</a></a>'.between('<a>', '</a>')); // => '<a>foo'
console.log('<a>foo'.between('<a>', '</a>')); // => ''
console.log('Some strings } are very {weird}, dont you think?'.between('{', '}')); // => 'weird'
console.log('This is a test string'.between('test')); // => ' string'
console.log('This is a test string'.between('', 'test')); // => 'This is a '




console.log('foobar'.chompLeft('foo')); //'bar'
console.log('foobar'.chompLeft('bar')); //'foobar'


console.log('foobar'.chompRight('bar')); //'foo'
console.log('foobar'.chompRight('foo')); //'foobar'

console.log('  String   \t libraries are   \n\n\t fun\n!  '.collapseWhitespace()); //'String libraries are fun !'

var stuff = "My name is JP\nJavaScript is my fav language\r\nWhat is your fav language?"
var lines = stuff.lines();

console.log(lines);

console.log(' 1 2 3--__--4 5 6-7__8__9--0'.strip(' ', '_', '-')); //'1234567890'
console.log('can words also be stripped out?'.strip('words', 'also', 'be')); //'can    stripped out?'


console.log('hellword'.insertAt(4, "o "));
console.log('123456789'.reverse());

console.log('123456789'.equalsIgnoreCase('123456789'));
console.log('123456789'.equalsIgnoreCase('1234567890'));

console.log('123456789'.equalsIgnoreCase(null));

console.log('!=)àç_è-("é&^$ù*!:;,.ABCDEFGHIJKLMNOPQRSTUVWXYZ'.equalsIgnoreCase('!=)àç_è-("é&^$ù*!:;,.ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()));

console.log("azertyui*opmlkjhgf$qsdfghùwxcv!gt".indexOfAny("!$ù*"));

console.log(String.isNullOrEmpty("azertyui"));
var a;
console.log(String.isNullOrEmpty(a));
a = "";
console.log(String.isNullOrEmpty(a));

console.log(String.isNullOrEmpty(null));
console.log(String.isNullOrEmpty("toto"));

console.log(String.isNullOrWhiteSpace("toto"));
console.log(String.isNullOrWhiteSpace("\t"));

console.log("toto".toCharArray());

console.log(_.escape("<h1>toto</h1>"));

console.log("1234567890".insertAt(3, "--"));

console.log("123456789-987654321!123456789%987654".indexOfAny("%!-"));