var _ = require("../node_modules/lodash/lodash.min.js");
require("../distrib/String.min.js");

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

console.log("words", "fred, barney, & pebbles".words().toJson());
// => ['fred', 'barney', 'pebbles']

console.log("words", "fred, barney, & pebbles".words(/[^, ]+/g).toJson());
// => ['fred', 'barney', '&', 'pebbles']