# lodash-object
 
<div style="display:inline">

[![Build Status](https://travis-ci.org/Sylvain59650/lodash-object.png?branch=master)](https://travis-ci.org/Sylvain59650/lodash-object)
![package](https://img.shields.io/github/package-json/v/Sylvain59650/lodash-object.svg)
![npm bundle size (minified)](https://img.shields.io/lodash-object/react.svg)
![dependencies](https://img.shields.io/david/Sylvain59650/lodash-object.svg)
[![dependencies graph](https://img.shields.io/badge/dependencies-graph-blue.svg)](http://npm.anvaka.com/#/view/2d/lodash-object)
![license](https://img.shields.io/npm/l/lodash-object.svg)
[![HitCount](http://hits.dwyl.com/Sylvain59650/lodash-object.svg)](http://hits.dwyl.com/Sylvain59650/lodash-object)
</div>

 <div class="Note" style="color:orange;font-style:italic">
 
The lastest version of this document is available on [Github > lodash-object](https://github.com/Sylvain59650/lodash-object/blob/master/README.md)


</div>

Wrapper for lodash for work with objects

lodash-object takes lodash functions on tables, strings and mathematical calculations but allows to work in object..

If you work with objects and manipulate tables, take a look at [linq-to-objects](https://www.npmjs.com/package/linq-to-objects).

Instead of writing
```html
    var myArray = [1, 2, 3, 4];
    _.remove(myArray,function(n) { return n % 2 == 0; });
    var three = _.filter(myArray,function(x) {return x==3});
```

you will write

```html
    var myArray = [1, 2, 3, 4];
    myArray.remove(function(n) { return n % 2 == 0; });
    var three = myArray.filter(function(x) {return x==3});
```
OR
```html
  with ES6
   var myArray = [1, 2, 3, 4];
    myArray.remove(n => n%2 == 0);
    var three = myArray.filter(x => x == 3);
```
# Installation
<code>

    npm install lodash-object --save

OR

    yarn add lodash-object --save
</code>

# References in Node.js
```html
    require("lodash-object");
```

# References in browser 

```html
   <script src="./node_modules/lodash/lodash.min.js"></script>
```

to extend the functionality of tables
```html
  <script src="./node_modules/lodash-object/distrib/Array.min.js"></script>
```


to extend the functionality of strings
```html
  <script src="./node_modules/lodash-object/distrib/String.min.js"></script>
```

to extend the functionality of strings with rare functions
```html
  <script src="./node_modules/lodash-object/distrib/StringExtension.min.js"></script>
```

to extend the mathematical features
```html
  <script  src="./node_modules/lodash-object/distrib/Math.min.js"></script>
```

These APIs have the same function names as those of Lodash. See [Lodash documentation](https://lodash.com/docs/4.17.5) for Lodash features.

# Table Of Contents

**Note** See the complete documentation on [github]((https://github.com/Sylvain59650/lodash-object/blob/master/README.md))

# Array Extension
 - [chunk](docs/Array.md#chunk)
 - [clear](docs/Array.md#clear)
 - [compact](docs/Array.md#compact)
 - [concat](docs/Array.md#concat)
 - [difference](docs/Array.md#difference)
 - [differenceBy](docs/Array.md#differenceby)
 - [differenceWith](docs/Array.md#differencewith)
 - [drop](docs/Array.md#drop)
 - [dropRight](docs/Array.md#dropright)
 - [dropRightWhile](docs/Array.md#droprightwhile)
 - [dropWhile](docs/Array.md#dropwhile)
 - [equals](docs/Array.md#equals)
 - [every](docs/Array.md#every)
 - [fill](docs/Array.md#fill)
 - [findIndex](docs/Array.md#findindex)
 - [findLastIndex](docs/Array.md#findlastindex)
 - [first](docs/Array.md#first)
 - [flatten](docs/Array.md#flatten)
 - [flattenDeep](docs/Array.md#flattendeep)
 - [flattenDepth](docs/Array.md#flattendepth)
 - [fromPairs](docs/Array.md#flattendepth)
 - [head](docs/Array.md#head)
 - [includes](docs/Array/md#includes)
 - [includesAll](docs/Array/md#includesall)
 - [indexOf](docs/Array.md#indexof)
 - [initial](docs/Array.md#initial)
 - [intersection](docs/Array.md#intersection)
 - [intersectionBy](docs/Array.md#intersectionby)
 - [intersectionWith](docs/Array.md#intersectionwith)
 - [join](docs/Array.md#join)
 - [last](docs/Array.md#last)
 - [lastIndexOf](docs/Array.md#lastindexof)
 - [nth](docs/Array.md#nth)
 - [pull](docs/Array.md#pull)
 - [pullAll](docs/Array.md#pullall)
 - [pullAllBy](docs/Array.md#pullallby)
 - [pullAllWith](docs/Array.md#pullallwith)
 - [pullAt](docs/Array.md#pullat)
 - [remove](docs/Array.md#remove)
 - [replace](docs/Array.md#replace)
 - [reverse](docs/Array.md#reverse)
 - [slice](docs/Array.md#slice)
 - [sortedIndex](docs/Array.md#sortedindex)
 - [sortedIndexBy](docs/Array.md#sortedindexby)
 - [sortedIndexOf](docs/Array.md#sortedindexof)
 - [sortedLastIndex](docs/Array.md#sortedlastindex)
 - [sortedLastIndexBy](docs/Array.md#sortedlastindexby)
 - [sortedLastIndexOf](docs/Array.md#sortedlastindexof)
 - [sortedUniq](docs/Array.md#sorteduniq)
 - [sortedUniqBy](docs/Array.md#sorteduniqby)
 - [tail](docs/Array.md#tail)
 - [take](docs/Array.md#take)
 - [takeRight](docs/Array.md#takeright)
 - [takeRightWhile](docs/Array.md#takerightwhile)
 - [takeWhile](docs/Array.md#takewhile)
 - [union](docs/Array.md#union)
 - [unionBy](docs/Array.md#unionby)
 - [unionWith](docs/Array.md#unionwith)
 - [uniq](docs/Array.md#uniq)
 - [uniqBy](docs/Array.md#uniqby)
 - [uniqWith](docs/Array.md#uniqwith)
 - [unzip](docs/Array.md#unzip)
 - [unzipWith](docs/Array.md#unzipWith)
 - [without](docs/Array.md#without)
 - [xor](docs/Array.md#xor)
 - [xorBy](docs/Array.md#xorBy)
 - [xorWith](docs/Array.md#xorwith)
 - [zip](docs/Array.md#zip)
 - [zipObject](docs/Array.md#zipobject)
 - [zipObjectDeep](docs/Array.md#zipobjectdeep)
 - [zipWith](docs/Array.md#zipwith)
 - [countBy](docs/Array.md#countby)
 - [every](docs/Array.md#every)
 - [filter](docs/Array.md#filter)
 - [find](docs/Array.md#find)
 - [findLast](docs/Array.md#findlast)
 - [flatMap](docs/Array.md#flatmap)
 - [flatMapDeep](docs/Array.md#flatmapdeep)
 - [flatMapDepth](docs/Array.md#flatmapdepth)
 - [forEach](docs/Array.md#foreach)
 - [forEachRight](docs/Array.md#foreachright)
 - [groupBy](docs/Array.md#groupby)
 - [includes](docs/Array.md#includes)
 - [invokeMap](docs/Array.md#invokemap)
 - [keyBy](docs/Array.md#keyby)
 - [map](docs/Array.md#map)
 - [orderBy](docs/Array.md#orderBy)
 - [partition](docs/Array.md#partition)
 - [reduce](docs/Array.md#reduce)
 - [reduceRight](docs/Array.md#reduceright)
 - [reject](docs/Array.md#reject)
 - [sample](docs/Array.md#sample)
 - [sampleSize](docs/Array.md#samplesize)
 - [shuffle](docs/Array.md#shuffle)
 - [some](docs/Array.md#some)
 - [sortBy](docs/Array.md#sortby)
 - [toJson](docs/Array.md#tojson)

# String Extension
 - [between](docs/String.md#between) 
 - [capitalize](docs/String.md#capitalize) 
 - [chompLeft](docs/String.md#chompLeft) 
 - [chompRight](docs/String.md#chompRight)
 - [collapseWhitespace](docs/String.md#collapsewhitespace)
 - [count](docs/String.md#count) 
 - [endsWith](docs/String.md#endswith)
 - [equalsIgnoreCase](docs/String.md#equalsignorecase)
 - [escape](docs/String.md#escape)
 - [escapeRegExp](docs/String.md#escaperegexp)
 - [includes](docs/String.md#includes)
 - [indexOfAny](docs/String.md#indexofany)
 - [isNullOrEmpty](docs/String.md#isnullorempty)
 - [isNullOrWhiteSpace](docs/String.md#isnullorwhiteSpace)
 - [latinize](docs/String.md#latinize)
 - [lines](docs/String.md#lines)
 - [lowerFirst](docs/String.md#lowerfirst)
 - [pad](docs/String.md#pad)
 - [padEnd](docs/String.md#padend)
 - [padStart](docs/String.md#padStart)
 - [repeat](docs/String.md#repeat)
 - [replace](docs/String.md#replace)
 - [reverse](docs/String.md#reverse)
 - [split](docs/String.md#split)
 - [strip](docs/String.md#strip)
 - [startsWith](docs/String.md#startswith)
 - [toCharArray](docs/String.md#tochararray)
 - [toLowerCase](docs/String.md#tolowercase)
 - [toUpperCase](docs/String.md#touppercase)
 - [trim](docs/String.md#trim)
 - [trimEnd](docs/String.md#trimend)
 - [trimStart](docs/String.md#trimstart)
 - [truncate](docs/String.md#truncate)
 - [unescape](docs/String.md#unescape)
 - [upperFirst](docs/String.md#upperfirst)
 - [words](docs/String.md#words)

# functions on character strings rarely used
- [camelCase](docs/StringForDev.md#camelcase)
- [kebabCase](docs/StringForDev.md#kebabcase)
- [snakeCase](docs/StringForDev.md#snakecase)
- [startCase](docs/StringForDev.md#startcase)
 
# Math Extension

 - [add](docs/Math.md#add)
 - [ceil](docs/Math.md#ceil)
 - [divide](docs/Math.md#divide)
 - [floor](docs/Math.md#floor)
 - [max](docs/Math.md#max)
 - [maxBy](docs/Math.md#maxby)
 - [mean](docs/Math.md#mean)
 - [meanBy](docs/Math.md#meanby)
 - [min](docs/Math.md#min)
 - [minBy](docs/Math.md#minby)
 - [multiply](docs/Math.md#multiply)
 - [round](docs/Math.md#round)
 - [subtract](docs/Math.md#subtract)
 - [sum](docs/Math.md#sum)
 - [sumBy](docs/Math.md#sumby)
 - [clamp](docs/Math.md#clamp)
 - [inRange](docs/Math.md#inrange)
 - [random](docs/Math.md#random)


