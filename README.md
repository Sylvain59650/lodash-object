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

 - [chunk](#)
 - [compact](#)
 - [concat](#)
 - [difference](#)
 - [differenceBy](#)
 - [differenceWith](#)
 - [drop](#)
 - [dropRight](#)
 - [dropRightWhile](#)
 - [dropWhile](#)
 - [fill](#)
 - [findIndex](#)
 - [findLastIndex](#)
 - [first](#)
 - [flatten](#)
 - [flattenDeep](#)
 - [flattenDepth](#)
 - [fromPairs](#)
 - [head](#)
 - [indexOf](#)
 - [initial](#)
 - [intersection](#)
 - [intersectionBy](#)
 - [intersectionWith](#)
 - [join](#)
 - [last](#)
 - [lastIndexOf](#)
 - [nth](#)
 - [pull](#)
 - [pullAll](#)
 - [pullAllBy](#)
 - [pullAllWith](#)
 - [pullAt](#)
 - [remove](#)
 - [reverse](#)
 - [slice](#)
 - [sortedIndex](#)
 - [sortedIndexBy](#)
 - [sortedIndexOf](#)
 - [sortedLastIndex](#)
 - [sortedLastIndexBy](#)
 - [sortedLastIndexOf](#)
 - [sortedUniq](#)
 - [sortedUniqBy](#)
 - [tail](#)
 - [take](#)
 - [takeRight](#)
 - [takeRightWhile](#)
 - [takeWhile](#)
 - [union](#)
 - [unionBy](#)
 - [unionWith](#)
 - [uniq](#)
 - [uniqBy](#)
 - [uniqWith](#)
 - [unzip](#)
 - [unzipWith](#)
 - [without](#)
 - [xor](#)
 - [xorBy](#)
 - [xorWith](#)
 - [zip](#)
 - [zipObject](#)
 - [zipObjectDeep](#)
 - [zipWith](#)
 - [countBy](#)
 - [each](#)
 - [eachRight](#)
 - [every](#)
 - [filter](#)
 - [find](#)
 - [findLast](#)
 - [flatMap](#)
 - [flatMapDeep](#)
 - [flatMapDepth](#)
 - [forEach](#)
 - [forEachRight](#)
 - [groupBy](#)
 - [includes](#)
 - [invokeMap](#)
 - [keyBy](#)
 - [map](#)
 - [orderBy](#)
 - [partition](#)
 - [reduce](#)
 - [reduceRight](#)
 - [reject](#)
 - [sample](#)
 - [sampleSize](#)
 - [shuffle](#)
 - [size](#)
 - [some](#)
 - [sortBy](#)
 - [toJson](#)

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


