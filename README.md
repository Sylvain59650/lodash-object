 <div class="Note" style="color:orange;font-style:italic">
 
  The lastest version of this document is available on [Github > lodash-object](https://github.com/Sylvain59650/lodash-object/blob/master/README.md)
</div>




# lodash-object
Wrapper for lodash for work with objects

lodash-object takes lodash functions on tables, strings and mathematical calculations but allows to work in object..

Instead of writing
<code>

  var myArray = [1, 2, 3, 4];

  _.remove(myArray,function(n) { return n % 2 == 0; });
</code>

you will write

<code>
  
  var myArray = [1, 2, 3, 4];

  myArray.remove(function(n) { return n % 2 == 0; });
</code>


# Installation
<code>

  npm install lodash lodash-object --save

OR

  bower install lodash lodash-object --save
</code>

# References in browser 
<code>

  &lt;script src="./node_modules/lodash/lodash.min.js"&gt;&lt;/script&gt;
</code>

to extend the functionality of tables
 <code>

  &lt;script src="./node_modules/lodash-object/dist/Array.js"&gt;&lt;/script&gt;
</code>

to extend the functionality of strings
<code>

  &lt;script src="./node_modules/lodash-object/dist/String.js"&gt;&lt;/script&gt;
</code>

to extend the mathematical features
<code>

  &lt;script src="./node_modules/lodash-object/dist/Math.js"&gt;&lt;/script&gt;
</code>


These APIs have the same function names as those of Lodash. See [Lodash documentation](https://lodash.com/docs/4.17.4) for Lodash features.

# Contents

# Array Extension

 - [chunk](docs/Array.md#chunk)
 - [compact](docs/Array.md#)
 - [concat](docs/Array.md#)
 - [difference](docs/Array.md#)
 - [differenceBy](docs/Array.md#)
 - [differenceWith](docs/Array.md#)
 - [drop](docs/Array.md#)
 - [dropRight](docs/Array.md#)
 - [dropRightWhile](docs/Array.md#)
 - [dropWhile](docs/Array.md#)
 - [fill](docs/Array.md#)
 - [findIndex](docs/Array.md#)
 - [findLastIndex](docs/Array.md#)
 - [first](docs/Array.md#)
 - [flatten](docs/Array.md#)
 - [flattenDeep](docs/Array.md#)
 - [flattenDepth](docs/Array.md#)
 - [fromPairs](docs/Array.md#)
 - [head](docs/Array.md#)
 - [indexOf](docs/Array.md#)
 - [initial](docs/Array.md#)
 - [intersection](docs/Array.md#)
 - [intersectionBy](docs/Array.md#)
 - [intersectionWith](docs/Array.md#)
 - [join](docs/Array.md#)
 - [last](docs/Array.md#)
 - [lastIndexOf](docs/Array.md#)
 - [nth](docs/Array.md#)
 - [pull](docs/Array.md#)
 - [pullAll](docs/Array.md#)
 - [pullAllBy](docs/Array.md#)
 - [pullAllWith](docs/Array.md#)
 - [pullAt](docs/Array.md#)
 - [remove](docs/Array.md#)
 - [reverse](docs/Array.md#)
 - [slice](docs/Array.md#)
 - [sortedIndex](docs/Array.md#)
 - [sortedIndexBy](docs/Array.md#)
 - [sortedIndexOf](docs/Array.md#)
 - [sortedLastIndex](docs/Array.md#)
 - [sortedLastIndexBy](docs/Array.md#)
 - [sortedLastIndexOf](docs/Array.md#)
 - [sortedUniq](docs/Array.md#)
 - [sortedUniqBy](docs/Array.md#)
 - [tail](docs/Array.md#)
 - [take](docs/Array.md#)
 - [takeRight](docs/Array.md#)
 - [takeRightWhile](docs/Array.md#)
 - [takeWhile](docs/Array.md#)
 - [union](docs/Array.md#)
 - [unionBy](docs/Array.md#)
 - [unionWith](docs/Array.md#)
 - [uniq](docs/Array.md#)
 - [uniqBy](docs/Array.md#)
 - [uniqWith](docs/Array.md#uniqWith)
 - [unzip](docs/Array.md#)
 - [unzipWith](docs/Array.md#)
 - [without](docs/Array.md#)
 - [xor](docs/Array.md#)
 - [xorBy](docs/Array.md#)
 - [xorWith](docs/Array.md#)
 - [zip](docs/Array.md#)
 - [zipObject](docs/Array.md#)
 - [zipObjectDeep](docs/Array.md#)
 - [zipWith](docs/Array.md#)
 - [countBy](docs/Array.md#countBy)
 - [every](docs/Array.md#)
 - [filter](docs/Array.md#)
 - [find](docs/Array.md#)
 - [findLast](docs/Array.md#)
 - [flatMap](docs/Array.md#)
 - [flatMapDeep](docs/Array.md#)
 - [flatMapDepth](docs/Array.md#)
 - [forEach]docs/Array.md(#forEach)
 - [forEachRight](docs/Array.md#)
 - [groupBy](docs/Array.md#)
 - [includes](docs/Array.md#)
 - [invokeMap](docs/Array.md#)
 - [keyBy](docs/Array.md#)
 - [map](docs/Array.md#)
 - [orderBy](docs/Array.md#)
 - [partition](docs/Array.md#)
 - [reduce](docs/Array.md#)
 - [reduceRight](docs/Array.md#)
 - [reject](docs/Array.md#)
 - [sample](docs/Array.md#)
 - [sampleSize](docs/Array.md#)
 - [shuffle](docs/Array.md#)
 - [size](docs/Array.md#)
 - [some](docs/Array.md#)
 - [sortBy](docs/Array.md#sortBy)
 - [toJson](docs/Array.md#)

# String Extension

 - [camelCase](#)
 - [capitalize](#)
 - [deburr](#)
 - [endsWith](#)
 - [escape](#)
 - [escapeRegExp](#)
 - [kebabCase](#)
 - [lowerCase](#)
 - [lowerFirst](#)
 - [pad](#)
 - [padEnd](#)
 - [padStart](#)
 - [parseInt](#)
 - [repeat](#)
 - [replace](#)
 - [snakeCase](#)
 - [split](#)
 - [startCase](#)
 - [startsWith](#)
 - [template](#)
 - [toLower](#)
 - [toUpper](#)
 - [trim](#)
 - [trimEnd](#)
 - [trimStart](#)
 - [truncate](#)
 - [unescape](#)
 - [upperCase](#)
 - [upperFirst](#)
 - [words](#)

# Math Extension

 - [add](#)
 - [ceil](#)
 - [divide](#)
 - [floor](#)
 - [max](#)
 - [maxBy](#)
 - [mean](#)
 - [meanBy](#)
 - [min](#)
 - [minBy](#)
 - [multiply](#)
 - [round](#)
 - [subtract](#)
 - [sum](#)
 - [sumBy](#)
 - [clamp](#)
 - [inRange](#)
 - [random](#)


