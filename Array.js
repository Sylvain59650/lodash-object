/**
 * @license
 * Lodash-Object 
 * Copyright Sylvain Longepée
 * Released under MIT license <https://github.com/Sylvain59650/lodash-object/blob/master/LICENSE>
 * Based on Lodash 4.7.17 <https://lodash.com/>
 */
Array.prototype.chunk = function(size = 1) { return _.chunk(this, size); }

Array.prototype.compact = function() { return _.compact(this); }


Array.prototype.concat = function(...args) { return _.concat(this, args); }

Array.prototype.difference = function(args) { return _.difference(this, args); }

Array.prototype.differenceBy = function(args, iteratee) { return _.differenceBy(this, args, iteratee); }

Array.prototype.differenceWith = function(values, comparator) { return _.differenceWith(this, values, comparator); }

Array.prototype.drop = function(n = 1) { return _.drop(this, n); }

Array.prototype.dropRight = function(n = 1) { return _.dropRight(this, n); }

Array.prototype.dropRightWhile = function(predicate) { return _.dropRightWhile(this, predicate); }
Array.prototype.dropWhile = function(predicate) { return _.dropWhile(this, predicate); }
Array.prototype.fill = function(value, start = 0, end) { return _.fill(this, value, start, end); }
Array.prototype.findIndex = function(predicate, fromIndex = 0) { return _.findIndex(this, predicate, fromIndex); }
Array.prototype.findLastIndex = function(predicate, fromIndex) { return _.findLastIndex(this, predicate, fromIndex); }
Array.prototype.first = function() { return _.first(this); }
Array.prototype.head = function() { return _.head(this); }
Array.prototype.flatten = function() { return _.flatten(this); }
Array.prototype.flattenDeep = function() { return _.flattenDeep(this); }
Array.prototype.flattenDepth = function(depth) { return _.flattenDepth(this, depth); }
Array.prototype.fromPairs = function() { return _.fromPairs(this); }

Array.prototype.indexOf = function(value, fromIndex) { return _.indexOf(this, value, fromIndex); }
Array.prototype.initial = function() { return _.initial(this); }
Array.prototype.intersection = function(...arrays) { return _.intersection(this, arrays); }
Array.prototype.intersectionBy = function(iteratee) { return _.intersectionBy(this, iteratee); }
Array.prototype.intersectionWith = function(comparator) { return _.intersectionWith(this, comparator); }
Array.prototype.join = function(separator = ',') { return _.join(this, separator); }
Array.prototype.last = function() { return _.last(this); }
Array.prototype.lastIndexOf = function(value, fromIndex) { return _.lastIndexOf(this, value, fromIndex); }
Array.prototype.nth = function(n = 0) { return _.nth(this, n); }
Array.prototype.pull = function(...values) { return _.pull(this, ...values); }
Array.prototype.pullAll = function(values) { return _.pullAll(this, values); }

Array.prototype.pullAllBy = function(values, iteratee) { return _.pullAllBy(this, values, iteratee); }
Array.prototype.pullAllWith = function(values, comparator) { return _.pullAllWith(this, values, comparator); }
Array.prototype.pullAt = function(indexes) { _.pullAt(this, indexes); return this; }
Array.prototype.pullAtFrom = function(indexes) { return _.pullAt(this, indexes); }
Array.prototype.remove = function(predicate) { _.remove(this, predicate); return this; }
Array.prototype.removeFrom = function(predicate) { return _.remove(this, predicate); }
Array.prototype.reverse = function() { return _.reverse(this); }

Array.prototype.slice = function(start, end) { return _.slice(this, start, end); }
Array.prototype.sortedIndex = function(value) { return _.sortedIndex(this, value); }
Array.prototype.sortedIndexBy = function(value, iteratee) { return _.sortedIndexBy(this, value, iteratee); }
Array.prototype.sortedIndexOf = function(value) { return _.sortedIndexOf(this, value); }
Array.prototype.sortedLastIndex = function(value) { return _.sortedLastIndex(this, value); }
Array.prototype.sortedLastIndexBy = function(value, iteratee) { return _.sortedLastIndexBy(this, value, iteratee); }
Array.prototype.sortedLastIndexOf = function(value) { return _.sortedLastIndexOf(this, value); }
Array.prototype.sortedUniq = function() { return _.sortedUniq(this); }
Array.prototype.sortedUniqBy = function(iteratee) { return _.sortedUniqBy(this, iteratee); }
Array.prototype.tail = function() { return _.tail(this); }
Array.prototype.take = function(n = 1) { return _.take(this, n); }
Array.prototype.takeRight = function(n = 1) { return _.takeRight(this, n); }
Array.prototype.takeRightWhile = function(predicate) { return _.takeRightWhile(this, predicate); }
Array.prototype.takeWhile = function(predicate) { return _.takeWhile(this, predicate); }
Array.prototype.union = function(...arrays) { return _.union(this, ...arrays); }
Array.prototype.unionBy = function(iteratee) { return _.unionBy(this, iteratee); }
Array.prototype.unionWith = function(comparator) { return _.unionWith(this, comparator); }
Array.prototype.unzip = function() { return _.unzip(this); }
Array.prototype.unzipWith = function(iteratee) { return _.unzipWith(this, iteratee); }
Array.prototype.without = function(...values) { return _.without(this, ...values); }
Array.prototype.xor = function(...arrays) { return _.xor(this, ...arrays); }
Array.prototype.xorBy = function(iteratee, ...arrays) { return _.xorBy(this, ...arrays, iteratee); }
Array.prototype.xorWith = function(arrays, comparator) { return _.xorWith(this, arrays, comparator); }
Array.prototype.zip = function(...arrays) { return _.zip(this, ...arrays); }
Array.prototype.zipObject = function(values) { return _.zipObject(this, values); }
Array.prototype.zipObjectDeep = function(values) { return _.zipObjectDeep(this, values); }
Array.prototype.zipWith = function(iteratee) { return _.zipWith(this, iteratee); }


Array.prototype.countBy = function(iteratee) { return _.countBy(this, iteratee); }

Array.prototype.forEach = function(iteratee) { return _.forEach(this, iteratee); }

Array.prototype.forEachReverse = function(iteratee) { _.forEachRight(this, iteratee); }

Array.prototype.every = function(predicate) { return _.every(this, predicate); }

Array.prototype.filter = function(predicate) { return _.filter(this, predicate); }

Array.prototype.find = function(predicate) { return _.find(this, predicate); }

Array.prototype.findLast = function(predicate, fromIndex) { return _.findLast(this, predicate, fromIndex); }

Array.prototype.flatMap = function(iteratee) { return _.flatMap(this, iteratee); }

Array.prototype.flatMapDeep = function(iteratee) { return _.flatMapDeep(this, iteratee); }

Array.prototype.groupBy = function(iteratee) { return _.groupBy(this, iteratee); }

Array.prototype.includes = function(value, fromIndex = 0) { return _.includes(this, value, fromIndex); }

Array.prototype.invokeMap = function(path, args) { return _.invokeMap(this, path, args); }

Array.prototype.keyBy = function(iteratee) { return _.keyBy(this, iteratee); }

Array.prototype.map = function(iteratee) { return _.map(this, iteratee); }

Array.prototype.orderBy = function(iteratee, orders) { return _.orderBy(this, iteratee, orders); }

Array.prototype.partition = function(predicate) { return _.partition(this, predicate); }

Array.prototype.reduce = function(iteratee, accumulator) { return _.reduce(this, iteratee, accumulator); }

Array.prototype.reduceRight = function(iteratee, accumulator) { return _.reduceRight(this, iteratee, accumulator); }

Array.prototype.reject = function(predicate) { return _.reject(this, predicate); }

Array.prototype.sample = function() { return _.sample(this); }

Array.prototype.sampleSize = function(n = 1) { return _.sampleSize(this, n); }

Array.prototype.shuffle = function() { return _.shuffle(this); }

Array.prototype.size = function() { return _.size(this); }
Array.prototype.some = function(predicate) { return _.some(this, predicate); }
Array.prototype.sortBy = function(...iteratees) { return _.sortBy(this, ...iteratees); }

Array.prototype.sortByDescending = function(...iteratees) { return _.sortBy(this, ...iteratees).reverse(); }