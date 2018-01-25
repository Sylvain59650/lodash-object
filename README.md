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
 - [compact](docs/Array.md#compact)
 - [concat](docs/Array.md#concat)
 - [difference](docs/Array.md#difference)
 - [differenceBy](docs/Array.md#differenceby)
 - [differenceWith](docs/Array.md#differencewith)
 - [drop](docs/Array.md#drop)
 - [dropRight](docs/Array.md#dropright)
 - [dropRightWhile](docs/Array.md#droprightwhile)
 - [dropWhile](docs/Array.md#dropwhile)
 - [fill](docs/Array.md#fill)
 - [findIndex](docs/Array.md#findindex)
 - [findLastIndex](docs/Array.md#findlastindex)
 - [first](docs/Array.md#first)
 - [flatten](docs/Array.md#flatten)
 - [flattenDeep](docs/Array.md#flattendeep)
 - [flattenDepth](docs/Array.md#flattendepth)
 - [fromPairs](docs/Array.md#flattendepth)
 - [head](docs/Array.md#head)
 - [indexOf](docs/Array.md#indexof)
 - [initial](docs/Array.md#initial)
 - [intersection](docs/Array.md#intersection)
 - [intersectionBy](docs/Array.md#intersectionby)
 - [intersectionWith](docs/Array.md#intersectionwith)
 - [join](docs/Array.md#join)
 - [last](docs/Array.md#last)
 - [lastIndexOf](docs/Array.md#lastIndexOf)
 - [nth](docs/Array.md#nth)
 - [pull](docs/Array.md#pull)
 - [pullAll](docs/Array.md#pullall)
 - [pullAllBy](docs/Array.md#pullallby)
 - [pullAllWith](docs/Array.md#pullallwith)
 - [pullAt](docs/Array.md#pullat)
 - [remove](docs/Array.md#remove)
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
 - [xorWith](docs/Array.md#xorWith)
 - [zip](docs/Array.md#zip)
 - [zipObject](docs/Array.md#zipObject)
 - [zipObjectDeep](docs/Array.md#zipObjectDeep)
 - [zipWith](docs/Array.md#zipWith)
 - [countBy](docs/Array.md#countby)
 - [every](docs/Array.md#every)
 - [filter](docs/Array.md#filter)
 - [find](docs/Array.md#find)
 - [findLast](docs/Array.md#findLast)
 - [flatMap](docs/Array.md#flatMap)
 - [flatMapDeep](docs/Array.md#flatMapDeep)
 - [flatMapDepth](docs/Array.md#flatMapDepth)
 - [forEach](docs/Array.md#forEach)
 - [forEachRight](docs/Array.md#forEachRight)
 - [groupBy](docs/Array.md#groupBy)
 - [includes](docs/Array.md#includes)
 - [invokeMap](docs/Array.md#invokeMap)
 - [keyBy](docs/Array.md#keyBy)
 - [map](docs/Array.md#.m)
 - [orderBy](docs/Array.md#orderBy)
 - [partition](docs/Array.md#partition)
 - [reduce](docs/Array.md#reduce)
 - [reduceRight](docs/Array.md#reduceRight)
 - [reject](docs/Array.md#reject)
 - [sample](docs/Array.md#sample)
 - [sampleSize](docs/Array.md#sampleSize)
 - [shuffle](docs/Array.md#shuffle)
 - [some](docs/Array.md#some)
 - [sortBy](docs/Array.md#sortBy)
 - [toJson](docs/Array.md#toJson)

# String Extension

 - [camelCase](docs/String.md#camelcase)
 - [capitalize](docs/String.md#capitalize)
 - [deburr](docs/String.md#deburr)
 - [endsWith](docs/String.md#endswith)
 - [escape](docs/String.md#escape)
 - [escapeRegExp](docs/String.md#escapeRegExp)
 - [kebabCase](docs/String.md#kebabCase)
 - [lowerFirst](docs/String.md#lowerFirst)
 - [pad](docs/String.md#pad)
 - [padEnd](docs/String.md#padEnd)
 - [padStart](docs/String.md#padStart)
 - [repeat](docs/String.md#repeat)
 - [replace](docs/String.md#replace)
 - [snakeCase](docs/String.md#snakeCase)
 - [split](docs/String.md#split)
 - [startCase](docs/String.md#startCase)
 - [startsWith](docs/String.md#startsWith)
 - [toLowerCase](docs/String.md#toLowerCase)
 - [toUpperCase](docs/String.md#toUpperCase)
 - [trim](docs/String.md#trim)
 - [trimEnd](docs/String.md#trimEnd)
 - [trimStart](docs/String.md#trimStart)
 - [truncate](docs/String.md#truncate)
 - [unescape](docs/String.md#unescape)
 - [upperFirst](docs/String.md#upperFirst)
 - [words](docs/String.md#words)

# Math Extension

 - [add](docs/Math.md#add)
 - [ceil](docs/Math.md#ceil)
 - [divide](docs/Math.md#divide)
 - [floor](docs/Math.md#floor)
 - [max](docs/Math.md#max)
 - [maxBy](docs/Math.md#maxBy)
 - [mean](docs/Math.md#mean)
 - [meanBy](docs/Math.md#meanBy)
 - [min](docs/Math.md#min)
 - [minBy](docs/Math.md#minBy)
 - [multiply](docs/Math.md#multiply)
 - [round](docs/Math.md#round)
 - [subtract](docs/Math.md#subtract)
 - [sum](docs/Math.md#sum)
 - [sumBy](docs/Math.md#sumBy)
 - [clamp](docs/Math.md#clamp)
 - [inRange](docs/Math.md#inRange)
 - [random](docs/Math.md#random)


