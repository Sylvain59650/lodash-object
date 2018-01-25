
# Array Methods

## chunk

    chunk([size=1])



Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.



Arguments

    [size=1] (number): The length of each chunk

Returns

    (Array): Returns the new array of chunks.


Example
	

    ['a', 'b', 'c', 'd'].chunk(2);  // => [['a', 'b'], ['c', 'd']]
 
    ['a', 'b', 'c', 'd'].chunk( 3); // => [['a', 'b', 'c'], ['d']]


## compact

    Array#compact(array)



Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.


Returns

    (Array): Returns the new array of filtered values.


Example
	

    [0, 1, false, 2, '', 3].compact(); 
    // => [1, 2, 3]

## concat

    Array#concat([values])



Creates a new array concatenating array with any additional arrays and/or values.



Arguments

    [values] (...*): The values to concatenate.

Returns

    (Array): Returns the new concatenated array.

Example
	

    var myArray = [1];
    var other = myArray.concat(2, [3], [[4]]);
 
    console.log(other);
    // => [1, 2, 3, [4]]
 
    console.log(myArray);
    // => [1]


## difference

    Array#difference([values])



Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Note: Unlike Array#pullAll, this method returns a new array.



Arguments

   [values] (...Array): The values to exclude.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2, 1].difference([2, 3]);
    // => [1]

## differenceBy

Array#differenceBy([values], [iteratee=_.identity])



This method is like Array#difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).

Note: Unlike Array#pullAllBy, this method returns a new array.



Arguments

    [values] (...Array): The values to exclude.
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2.1, 1.2].differenceBy([2.3, 3.4], Math.floor);
    // => [1.2]
 
    // The `_.property` iteratee shorthand.
    [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }].differenceBy('x');
    // => [{ 'x': 2 }]

## differenceWith

    Array#differenceWith([values], [comparator])



This method is like Array#difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

Note: Unlike Array#pullAllWith, this method returns a new array.



Arguments

    
    [values] (...Array): The values to exclude.
    [comparator] (Function): The comparator invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
    objects.differenceWith([{ 'x': 1, 'y': 2 }], _.isEqual);
    // => [{ 'x': 2, 'y': 1 }]


## drop

Array#drop([n=1])



Creates a slice of array with n elements dropped from the beginning.



Arguments

    
    [n=1] (number): The number of elements to drop.

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].drop();
    // => [2, 3]
 
    [1, 2, 3].drop(2);
    // => [3]
 
    [1, 2, 3].drop(5);
    // => []
 
    [1, 2, 3].drop(0);
    // => [1, 2, 3]


## dropRight

Array#dropRight([n=1])



Creates a slice of array with n elements dropped from the end.



Arguments

    
    [n=1] (number): The number of elements to drop.

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].dropRight();
    // => [1, 2]
 
    [1, 2, 3].dropRight(2);
    // => [1]
 
    [1, 2, 3].dropRight(5);
    // => []
 
    [1, 2, 3].dropRight(0);
    // => [1, 2, 3]

## dropRightWhile

    Array#dropRightWhile([predicate=_.identity])



Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the slice of array.

Example
	

    var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
    ];
    
    users.dropRightWhile(function(o) { return !o.active; });
    // => objects for ['barney']
    
    // The `_.matches` iteratee shorthand.
    users.dropRightWhile({ 'user': 'pebbles', 'active': false });
    // => objects for ['barney', 'fred']
    
    // The `_.matchesProperty` iteratee shorthand.
    users.dropRightWhile(['active', false]);
    // => objects for ['barney']
    
    // The `_.property` iteratee shorthand.
    users.dropRightWhile('active');
    // => objects for ['barney', 'fred', 'pebbles']


## dropWhile

    _.dropWhile([predicate=_.identity])



Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the slice of array.

Example
	

    var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
    ];
    
    users.dropWhile(function(o) { return !o.active; });
    // => objects for ['pebbles']
    
    // The `_.matches` iteratee shorthand.
    users.dropWhile({ 'user': 'barney', 'active': false });
    // => objects for ['fred', 'pebbles']
    
    // The `_.matchesProperty` iteratee shorthand.
    users.dropWhile(['active', false]);
    // => objects for ['pebbles']
    
    // The `_.property` iteratee shorthand.
    users.dropWhile('active');
    // => objects for ['barney', 'fred', 'pebbles']

## fill

    Array#fill(value, [start=0], [end=array.length])



Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array.



Arguments

    value (*): The value to fill array with.
    [start=0] (number): The start position.
    [end=array.length] (number): The end position.

Returns

    (Array): Returns array.

Example
	
    var myArray = [1, 2, 3];    
    myArray.fill('a');
    console.log(array);
    // => ['a', 'a', 'a']
    
    (new Array(3)).fill(2);
    // => [2, 2, 2]
    
    [4, 6, 8, 10].fill( '*', 1, 3);
    // => [4, '*', '*', 10]

## findIndex

    Array#findIndex([predicate=_.identity], [fromIndex=0])



This method is like Array#find except that it returns the index of the first element predicate returns truthy for instead of the element itself.



Arguments

    
    [predicate=_.identity] (Function): The function invoked per iteration.
    [fromIndex=0] (number): The index to search from.

Returns

    (number): Returns the index of the found element, else -1.

Example
	

    var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
    ];
    
    users.findIndex(function(o) { return o.user == 'barney'; });
    // => 0
    
    // The `_.matches` iteratee shorthand.
    users.findIndex({ 'user': 'fred', 'active': false });
    // => 1
    
    // The `_.matchesProperty` iteratee shorthand.
    users.findIndex(['active', false]);
    // => 0
    
    // The `_.property` iteratee shorthand.
    users.findIndex('active');
    // => 2


## findLastIndex

    Array#findLastIndex([predicate=_.identity],[fromIndex=array.length-1])



This method is like Array#findIndex except that it iterates over elements of collection from right to left.



Arguments

    
    [predicate=_.identity] (Function): The function invoked per iteration.
    [fromIndex=array.length-1] (number): The index to search from.

Returns

    (number): Returns the index of the found element, else -1.

Example
	

    var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
    ];
    
    users.findLastIndex(function(o) { return o.user == 'pebbles'; });
    // => 2
    
    // The `_.matches` iteratee shorthand.
    users.findLastIndex({ 'user': 'barney', 'active': true });
    // => 0
    
    // The `_.matchesProperty` iteratee shorthand.
    users.findLastIndex(['active', false]);
    // => 2
    
    // The `_.property` iteratee shorthand.
    users.findLastIndex('active');
    // => 0


## flatten

    Array#flatten()



Flattens array a single level deep.



Arguments

    None

Returns

    (Array): Returns the new flattened array.

Example
	

    [1, [2, [3, [4]], 5]].flatten();
    // => [1, 2, [3, [4]], 5]

## flattenDeep

    Array#flattenDeep()



Recursively flattens array.



Arguments

    None.

Returns

    (Array): Returns the new flattened array.

Example
	

    [1, [2, [3, [4]], 5]].flattenDeep();
    // => [1, 2, 3, 4, 5]

# flattenDepth

    Array#flattenDepth([depth=1])


Recursively flatten array up to depth times.



Arguments

    array (Array): The array to flatten.
    [depth=1] (number): The maximum recursion depth.

Returns

    (Array): Returns the new flattened array.

Example
	

    var myArray = [1, [2, [3, [4]], 5]];
    
    myArray.flattenDepth(1);
    // => [1, 2, [3, [4]], 5]
    
    myArray.flattenDepth(2);
    // => [1, 2, 3, [4], 5]


## fromPairs

    Array#fromPairs(pairs)



The inverse of _.toPairs; this method returns an object composed from key-value pairs.



Arguments

    pairs (Array): The key-value pairs.

Returns

    (Object): Returns the new object.

Example
	

    [['a', 1], ['b', 2]].fromPairs();
    // => { 'a': 1, 'b': 2 }


## head

    Array#head(array)



Gets the first element of array.



Aliases

## first

    Array#first

    

Returns

    (*): Returns the first element of array.

Example
	

    [1, 2, 3].head();
    // => 1
    
    [].head();
    // => undefined

## indexOf

    Array#indexOf(value, [fromIndex=0])



Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.



Arguments

    
    value (*): The value to search for.
    [fromIndex=0] (number): The index to search from.

Returns

    (number): Returns the index of the matched value, else -1.

Example
	

    [1, 2, 1, 2].indexOf(2);
    // => 1
    
    // Search from the `fromIndex`.
    [1, 2, 1, 2].indexOf( 2, 2);
    // => 3


## initial

    Array#initial(array)



Gets all but the last element of array.



Arguments

    

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].initial();
    // => [1, 2]


## intersection

    Array#intersection([arrays])



Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.



Arguments

    [arrays] (...Array): The arrays to inspect.

Returns

    (Array): Returns the new array of intersecting values.

Example
	

    [2, 1].intersection([2, 3]);
    // => [2]

## intersectionBy

    Array#intersectionBy([arrays], [iteratee=_.identity])



This method is like Array#intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).



Arguments

    [arrays] (...Array): The arrays to inspect.
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (Array): Returns the new array of intersecting values.

Example
	

    [2.1, 1.2].intersectionBy([2.3, 3.4], Math.floor);
    // => [2.1]
 
    // The `_.property` iteratee shorthand.
    [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }].intersectionBy('x');
    // => [{ 'x': 1 }]


## intersectionWith

    Array#intersectionWith([arrays], [comparator])



This method is like Array#intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    [arrays] (...Array): The arrays to inspect.
    [comparator] (Function): The comparator invoked per element.

Returns

    (Array): Returns the new array of intersecting values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
    objects.intersectionWith(others, _.isEqual);
    // => [{ 'x': 1, 'y': 2 }]

## join

    Array#join([separator=','])

Converts all elements in array into a string separated by separator.



Arguments

    array (Array): The array to convert.
    [separator=','] (string): The element separator.

Returns

    (string): Returns the joined string.

Example
	

    ['a', 'b', 'c'].join('~');
    // => 'a~b~c'

## last

Array#lastlast(array)



Gets the last element of array.



Arguments

    

Returns

    (*): Returns the last element of array.

Example
	

    [1, 2, 3].last();
    // => 3

## lastIndexOf

    Array#lastIndexOf(value, [fromIndex=array.length-1])



This method is like Array#indexOf except that it iterates over elements of array from right to left.



Arguments

    
    value (*): The value to search for.
    [fromIndex=array.length-1] (number): The index to search from.

Returns

    (number): Returns the index of the matched value, else -1.

Example
	

    [1, 2, 1, 2].lastIndexOf(2);
    // => 3
    
    // Search from the `fromIndex`.
    [1, 2, 1, 2].lastIndexOf(2, 2);
    // => 1

## nth

    Array#nth([n=0])



Gets the element at index n of array. If n is negative, the nth element from the end is returned.



Arguments

    
    [n=0] (number): The index of the element to return.

Returns

    (*): Returns the nth element of array.

Example
	

    var myArray = ['a', 'b', 'c', 'd'];
    
    myArray.nth(1);
    // => 'b'
    
    myArray.nth(-2);
    // => 'c';

## pull

    Array#pull([values])



Removes all given values from array using SameValueZero for equality comparisons.

Note: Unlike Array#without, this method mutates array. Use Array#remove to remove elements from an array by predicate.



Arguments

    array (Array): The array to modify.
    [values] (...*): The values to remove.

Returns

    (Array): Returns array.

Example
	

    var myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
    
    myArray.pull('a', 'c');
    console.log(array);
    // => ['b', 'b']

## pullAll

    Array#pullAll(values)



This method is like Array#pull except that it accepts an array of values to remove.

Note: Unlike Array#difference, this method mutates array.



Arguments

    array (Array): The array to modify.
    values (Array): The values to remove.

Returns

    (Array): Returns array.

Example
	

    var myArray = ['a', 'b', 'c', 'a', 'b', 'c'];

    myArray.pullAll(['a', 'c']);
    console.log(array);
    // => ['b', 'b']

## pullAllBy
    Array#pullAllBy(values, [iteratee=_.identity])



This method is like Array#pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).

Note: Unlike Array#differenceBy, this method mutates array.



Arguments

    array (Array): The array to modify.
    values (Array): The values to remove.
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (Array): Returns array.

Example
	

    var myArray = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    
    myArray.pullAllBy([{ 'x': 1 }, { 'x': 3 }], 'x');
    console.log(array);
    // => [{ 'x': 2 }]

## pullAllWith

    Array#pullAllWith(values, [comparator])



This method is like Array#pullAll except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

Note: Unlike Array#differenceWith, this method mutates array.



Arguments

    array (Array): The array to modify.
    values (Array): The values to remove.
    [comparator] (Function): The comparator invoked per element.

Returns

    (Array): Returns array.

Example
	

    var myArray = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 


    myArray.pullAllWith([{ 'x': 3, 'y': 4 }], _.isEqual);
    console.log(array);
    // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

 ## pullAt

    Array#pullAt([indexes])



Removes elements from array corresponding to indexes and returns an array of removed elements.

Note: Unlike Array#at, this method mutates array.



Arguments

    array (Array): The array to modify.
    [indexes] (...(number|number[])): The indexes of elements to remove.

Returns

    (Array): Returns the new array of removed elements.

Example
	

    var myArray = ['a', 'b', 'c', 'd'];
    var pulled = myArray.pullAt([1, 3]);
    
    console.log(array);
    // => ['a', 'c']
    
    console.log(pulled);
    // => ['b', 'd']

 ## remove

    Array#remove([predicate=_.identity])



Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike Array#filter, this method mutates array. Use Array#pull to pull elements from an array by value.



Arguments

    array (Array): The array to modify.
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the new array of removed elements.

Example
	

    var myArray = [1, 2, 3, 4];
    var evens = myArray.remove(function(n) {
    return n % 2 == 0;
    });
    
    console.log(array);
    // => [1, 3]
    
    console.log(evens);
    // => [2, 4]

 ## reverse

    Array#reverse(array)



Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

Note: This method mutates array and is based on Array#reverse.



Arguments

    array (Array): The array to modify.

Returns

    (Array): Returns array.

Example
	

    var myArray = [1, 2, 3];
    
    myArray.reverse(array);
    // => [3, 2, 1]
    
    console.log(array);
    // => [3, 2, 1]

## slice

    Array#slice([start=0], [end=array.length])



Creates a slice of array from start up to, but not including, end.

Note: This method is used instead of Array#slice to ensure dense arrays are returned.



Arguments

    array (Array): The array to slice.
    [start=0] (number): The start position.
    [end=array.length] (number): The end position.

Returns

    (Array): Returns the slice of array.

## sortedIndex
    Array#sortedIndex(value)



Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.



Arguments

    array (Array): The sorted array to inspect.
    value (*): The value to evaluate.

Returns

    (number): Returns the index at which value should be inserted into array.

Example
	

    [30, 50].sortedIndex(40);
    // => 1

 ## sortedIndexBy

    Array#sortedIndexBy(value, [iteratee=_.identity])



This method is like Array#sortedIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).



Arguments

    array (Array): The sorted array to inspect.
    value (*): The value to evaluate.
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (number): Returns the index at which value should be inserted into array.

Example
	

    var objects = [{ 'x': 4 }, { 'x': 5 }];
    
    objects.sortedIndexBy({ 'x': 4 }, function(o) { return o.x; });
    // => 0
 
    // The `_.property` iteratee shorthand.
    objects.sortedIndexBy( { 'x': 4 }, 'x');
    // => 0


## sortedIndexOf
    Array#sortedIndexOf(value)



This method is like Array#indexOf except that it performs a binary search on a sorted array.



Arguments

    
    value (*): The value to search for.

Returns

    (number): Returns the index of the matched value, else -1.

Example
	

    [4, 5, 5, 5, 6].sortedIndexOf(5);
    // => 1

 ## sortedLastIndex

    Array#sortedLastIndex(value)



This method is like Array#sortedIndex except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.



Arguments

    array (Array): The sorted array to inspect.
    value (*): The value to evaluate.

Returns

    (number): Returns the index at which value should be inserted into array.

Example
	

    [4, 5, 5, 5, 6].sortedLastIndex(5);
    // => 4

 ## sortedLastIndexBy

    Array#sortedLastIndexBy(value, [iteratee=_.identity])



This method is like Array#sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).



Arguments

    array (Array): The sorted array to inspect.
    value (*): The value to evaluate.
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (number): Returns the index at which value should be inserted into array.

Example
	

    var objects = [{ 'x': 4 }, { 'x': 5 }];
    
    objects.sortedLastIndexBy({ 'x': 4 }, function(o) { return o.x; });
    // => 1
    
    // The `_.property` iteratee shorthand.
    objects.sortedLastIndexBy({ 'x': 4 }, 'x');
    // => 1

## sortedLastIndexOf
    Array#sortedLastIndexOf(value)



This method is like Array#lastIndexOf except that it performs a binary search on a sorted array.



Arguments

    
    value (*): The value to search for.

Returns

(number): Returns the index of the matched value, else -1.

Example
	

    [4, 5, 5, 5, 6].sortedLastIndexOf(5);
    // => 3

 ## sortedUniq

    Array#sortedUniq(array)



This method is like Array#uniq except that it's designed and optimized for sorted arrays.



Arguments

    

Returns

    (Array): Returns the new duplicate free array.

Example
	

    [1, 1, 2].sortedUniq();
    // => [1, 2]

# sortedUniqBy

    Array#sortedUniqBy([iteratee])



This method is like Array#uniqBy except that it's designed and optimized for sorted arrays.



Arguments

    
    [iteratee] (Function): The iteratee invoked per element.

Returns

    (Array): Returns the new duplicate free array.

Example
	

    [1.1, 1.2, 2.3, 2.4].sortedUniqBy(Math.floor);
    // => [1.1, 2.3]

 ## tail

    Array#tail(array)



Gets all but the first element of array.



Arguments

    

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].tail();
    // => [2, 3]

## take

    Array#take([n=1])



Creates a slice of array with n elements taken from the beginning.



Arguments

    
    [n=1] (number): The number of elements to take.

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].take();
    // => [1]
    
    [1, 2, 3].take(2);
    // => [1, 2]
    
    [1, 2, 3].take(5);
    // => [1, 2, 3]
    
    [1, 2, 3].take( 0);
    // => []

 ## takeRight

    Array#takeRight([n=1])



Creates a slice of array with n elements taken from the end.



Arguments

    
    [n=1] (number): The number of elements to take.

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].takeRight();
    // => [3]
    
    [1, 2, 3].takeRight(2);
    // => [2, 3]
    
    [1, 2, 3].takeRight(5);
    // => [1, 2, 3]
    
    [1, 2, 3].takeRight(0);
    // => []

 ## takeRightWhile

    Array#takeRightWhile([predicate=_.identity])



Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

(Array): Returns the slice of array.

Example
	

    var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
    ];
    
    users.takeRightWhile(function(o) { return !o.active; });
    // => objects for ['fred', 'pebbles']
    
    // The `_.matches` iteratee shorthand.
    users.takeRightWhile({ 'user': 'pebbles', 'active': false });
    // => objects for ['pebbles']
    
    // The `_.matchesProperty` iteratee shorthand.
    users.takeRightWhile(['active', false]);
    // => objects for ['fred', 'pebbles']
    
    // The `_.property` iteratee shorthand.
    users.takeRightWhile('active');
    // => []

## takeWhile
    Array#takeWhile([predicate=_.identity])



Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the slice of array.

Example
	

    var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
    ];
    
    users.takeWhile(function(o) { return !o.active; });
    // => objects for ['barney', 'fred']
    
    // The `_.matches` iteratee shorthand.
    users.takeWhile({ 'user': 'barney', 'active': false });
    // => objects for ['barney']
    
    // The `_.matchesProperty` iteratee shorthand.
    users.takeWhile(['active', false]);
    // => objects for ['barney', 'fred']
    
    // The `_.property` iteratee shorthand.
    users.takeWhile('active');
    // => []

 ## union

    Array#union([arrays])



Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.



Arguments

    [arrays] (...Array): The arrays to inspect.

Returns

    (Array): Returns the new array of combined values.

Example
	

    [2].union([1, 2]);
    // => [2, 1]

# unionBy
    Array#unionBy([arrays], [iteratee=_.identity])



This method is like Array#union except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed. Result values are chosen from the first array in which the value occurs. The iteratee is invoked with one argument:
(value).



Arguments

    [arrays] (...Array): The arrays to inspect.
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (Array): Returns the new array of combined values.

Example
	

    [2.1].unionBy([1.2, 2.3], Math.floor);
    // => [2.1, 1.2]
    
    // The `_.property` iteratee shorthand.
    [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }].unionBy('x');
    // => [{ 'x': 1 }, { 'x': 2 }]


 ## unionWith

    Array#unionWith([arrays], [comparator])



This method is like Array#union except that it accepts comparator which is invoked to compare elements of arrays. Result values are chosen from the first array in which the value occurs. The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    [arrays] (...Array): The arrays to inspect.
    [comparator] (Function): The comparator invoked per element.

Returns

    (Array): Returns the new array of combined values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    objects.unionWith(others, _.isEqual);
    // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

 ## uniq

    Array#uniq(array)



Creates a duplicate-free version of an using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.



Arguments

    

Returns

    (Array): Returns the new duplicate free array.

Example
	

    [2, 1, 2].uniq();
    // => [2, 1]

 ## uniqBy

    Array#uniqBy([iteratee=_.identity])



This method is like Array#uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
(value).



Arguments

    
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (Array): Returns the new duplicate free array.

Example
	

    [2.1, 1.2, 2.3].uniqBy(Math.floor);
    // => [2.1, 1.2]
    
    // The `_.property` iteratee shorthand.
    [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }].uniqBy('x');
    // => [{ 'x': 1 }, { 'x': 2 }]

## uniqWith
    Array#uniqWith([comparator])



This method is like Array#uniq except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    
    [comparator] (Function): The comparator invoked per element.

Returns

    (Array): Returns the new duplicate free array.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    objects.uniqWith(_.isEqual);
    // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]

 ## unzip

    Array#unzip(array)



This method is like Array#zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.



Arguments

    array (Array): The array of grouped elements to process.

Returns

    (Array): Returns the new array of regrouped elements.

Example
	

    var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
    // => [['a', 1, true], ['b', 2, false]]
    
    _.unzip(zipped);
    // => [['a', 'b'], [1, 2], [true, false]]

## unzipWith

    Array#unzipWith([iteratee=_.identity])



This method is like Array#unzip except that it accepts iteratee to specify how regrouped values should be combined. The iteratee is invoked with the elements of each group: (...group).



Arguments

    array (Array): The array of grouped elements to process.
    [iteratee=_.identity] (Function): The function to combine regrouped values.

Returns

    (Array): Returns the new array of regrouped elements.

Example
	

    var zipped = _.zip([1, 2], [10, 20], [100, 200]);
    // => [[1, 10, 100], [2, 20, 200]]
    
    _.unzipWith(zipped, _.add);
    // => [3, 30, 300]

 ## without

    Array#without([values])



Creates an array excluding all given values using SameValueZero for equality comparisons.

Note: Unlike Array#pull, this method returns a new array.



Arguments

    
    [values] (...*): The values to exclude.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2, 1, 2, 3].without(1, 2);
    // => [3]

 ## xor

    Array#xor([arrays])



Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.



Arguments

    [arrays] (...Array): The arrays to inspect.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2, 1].xor(, [2, 3]);
    // => [1, 3]

## xorBy
    Array#xorBy([arrays], [iteratee=_.identity])



This method is like Array#xor except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which by which they're compared. The order of result values is determined by the order they occur in the arrays. The iteratee is invoked with one argument: (value).



Arguments

    [arrays] (...Array): The arrays to inspect.
    [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    // => [1.2, 3.4]
    
    // The `_.property` iteratee shorthand.
    _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
    // => [{ 'x': 2 }]

 ## xorWith

    Array#xorWith([arrays], [comparator])



This method is like Array#xor except that it accepts comparator which is invoked to compare elements of arrays. The order of result values is determined by the order they occur in the arrays. The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    [arrays] (...Array): The arrays to inspect.
    [comparator] (Function): The comparator invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    _.xorWith(objects, others, _.isEqual);
    // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

 ## zip

    Array#zip([arrays])



Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.



Arguments

    [arrays] (...Array): The arrays to process.

Returns

    (Array): Returns the new array of grouped elements.

Example
	

    _.zip(['a', 'b'], [1, 2], [true, false]);
    // => [['a', 1, true], ['b', 2, false]]

## zipObject
    Array#zipObject([props=[]], [values=[]])



This method is like Array#fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values.



Arguments

    [props=[]] (Array): The property identifiers.
    [values=[]] (Array): The property values.

Returns

    (Object): Returns the new object.

Example
	

    ['a', 'b'].zipObject([1, 2]);
    // => { 'a': 1, 'b': 2 }

## zipObjectDeep

    Array#zipObjectDeep([props=[]], [values=[]])



This method is like Array#zipObject except that it supports property paths.



Arguments

    [props=[]] (Array): The property identifiers.
    [values=[]] (Array): The property values.

Returns

    (Object): Returns the new object.

Example
	

    _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
    // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

 ## zipWith

    Array#zipWith([arrays], [iteratee=_.identity])



This method is like Array#zip except that it accepts iteratee to specify how grouped values should be combined. The iteratee is invoked with the elements of each group: (...group).



Arguments

    [arrays] (...Array): The arrays to process.
    [iteratee=_.identity] (Function): The function to combine grouped values.

Returns

    (Array): Returns the new array of grouped elements.

Example
	

    Array#zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
    return a + b + c;
    });
    // => [111, 222]


## countBy

    Array#countBy(collection, [iteratee=_.identity])



Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The iteratee to transform keys.

Returns

    (Object): Returns the composed aggregate object.

Example
	

    [6.1, 4.2, 6.3].countBy(Math.floor);
    // => { '4': 1, '6': 2 }
    
    // The `_.property` iteratee shorthand.
    ['one', 'two', 'three'].countBy('length');
    // => { '3': 2, '5': 1 }

## every
    Array#every(collection, [predicate=_.identity])



Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

Note: This method returns true for empty collections because everything is true of elements of empty collections.



Arguments

    collection (Array|Object): The collection to iterate over.
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (boolean): Returns true if all elements pass the predicate check, else false.

Example
	

    _.every([true, 1, null, 'yes'], Boolean);
    // => false
    
    var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
    ];
    
    // The `_.matches` iteratee shorthand.
    users.every({ 'user': 'barney', 'active': false });
    // => false
    
    // The `_.matchesProperty` iteratee shorthand.
    users.every(['active', false]);
    // => true
    
    // The `_.property` iteratee shorthand.
    users.every('active');
    // => false

## filter
    Array#filter(collection, [predicate=_.identity])



Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

Note: Unlike Array#remove, this method returns a new array.



Arguments

    collection (Array|Object): The collection to iterate over.
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the new filtered array.

Example
	

    var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
    ];
    
    users.filter(function(o) { return !o.active; });
    // => objects for ['fred']
    
    // The `_.matches` iteratee shorthand.
    users.filter({ 'age': 36, 'active': true });
    // => objects for ['barney']
    
    // The `_.matchesProperty` iteratee shorthand.
    users.filter(['active', false]);
    // => objects for ['fred']
    
    // The `_.property` iteratee shorthand.
    users.filter('active');
    // => objects for ['barney']

## find
    Array#find(collection, [predicate=_.identity], [fromIndex=0])



Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).



Arguments

    collection (Array|Object): The collection to inspect.
    [predicate=_.identity] (Function): The function invoked per iteration.
    [fromIndex=0] (number): The index to search from.

Returns

    (*): Returns the matched element, else undefined.

Example
	

    var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
    ];
    
    users.find(function(o) { return o.age < 40; });
    // => object for 'barney'
    
    // The `_.matches` iteratee shorthand.
    users.find({ 'age': 1, 'active': true });
    // => object for 'pebbles'
    
    // The `_.matchesProperty` iteratee shorthand.
    users.find(['active', false]);
    // => object for 'fred'
    
    // The `_.property` iteratee shorthand.
    users.find('active');
    // => object for 'barney'


## findLast
    Array#findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])



This method is like Array#find except that it iterates over elements of collection from right to left.



Arguments

    collection (Array|Object): The collection to inspect.
    [predicate=_.identity] (Function): The function invoked per iteration.
    [fromIndex=collection.length-1] (number): The index to search from.

Returns

    (*): Returns the matched element, else undefined.

Example
	

    [1, 2, 3, 4].findLast(function(n) {
    return n % 2 == 1;
    });
    // => 3

 ## flatMap

    Array#flatMap(collection, [iteratee=_.identity])



Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the new flattened array.

Example
	

    function duplicate(n) {
    return [n, n];
    }
    
    [1, 2].flatMap(duplicate);
    // => [1, 1, 2, 2]

 ## flatMapDeep

    Array#flatMapDeep(collection, [iteratee=_.identity])



This method is like Array#flatMap except that it recursively flattens the mapped results.



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the new flattened array.

Example
	

    function duplicate(n) {
    return [[[n, n]]];
    }
    
    [1, 2].flatMapDeep(duplicate);
    // => [1, 1, 2, 2]

# flatMapDepth
    Array#flatMapDepth(collection, [iteratee=_.identity], [depth=1])



This method is like Array#flatMap except that it recursively flattens the mapped results up to depth times.



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.
    [depth=1] (number): The maximum recursion depth.

Returns

    (Array): Returns the new flattened array.

Example
	

    function duplicate(n) {
    return [[[n, n]]];
    }
    
    [1, 2].flatMapDepth(duplicate, 2);
    // => [[1, 1], [2, 2]]

# forEach
    Array#forEach(collection, [iteratee=_.identity])



Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To avoid this behavior use Array#forIn or Array#forOwn for object iteration.



Aliases

 ## each

Array#each
Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.

Returns

    (*): Returns collection.

Example
	

    [1, 2].forEach(function(value) {
    console.log(value);
    });
    // => Logs `1` then `2`.
    
    _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
    console.log(key);
    });
    // => Logs 'a' then 'b' (iteration order is not guaranteed).

## forEachRight
    Array#forEachRight(collection, [iteratee=_.identity])



This method is like Array#forEach except that it iterates over elements of collection from right to left.



Aliases

 ## eachRight

    Array#eachRight
Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.

Returns

(*): Returns collection.

Example
	

    [1, 2].forEachRight(function(value) {
    console.log(value);
    });
    // => Logs `2` then `1`.

 ## groupBy

    Array#groupBy(collection, [iteratee=_.identity])



Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The iteratee to transform keys.

Returns

    (Object): Returns the composed aggregate object.

Example
	

    [6.1, 4.2, 6.3].groupBy(Math.floor);
    // => { '4': [4.2], '6': [6.1, 6.3] }
    
    // The `_.property` iteratee shorthand.
    ['one', 'two', 'three'].groupBy('length');
    // => { '3': ['one', 'two'], '5': ['three'] }

## includes
    Array#includes(collection, value, [fromIndex=0])



Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.



Arguments

    collection (Array|Object|string): The collection to inspect.
    value (*): The value to search for.
    [fromIndex=0] (number): The index to search from.

Returns

    (boolean): Returns true if value is found, else false.

Example
	

    [1, 2, 3].includes( 1);
    // => true
    
    [1, 2, 3].includes(1, 2);
    // => false
    
    _.includes({ 'a': 1, 'b': 2 }, 1);
    // => true
    
    _.includes('abcd', 'bc');
    // => true

 ## invokeMap

    Array#invokeMap(collection, path, [args])



Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method. If path is a function, it's invoked for, and this bound to, each element in collection.



Arguments

    collection (Array|Object): The collection to iterate over.
    path (Array|Function|string): The path of the method to invoke or the function invoked per iteration.
    [args] (...*): The arguments to invoke each method with.

Returns

    (Array): Returns the array of results.

Example
	

    [[5, 1, 7], [3, 2, 1]].invokeMap('sort');
    // => [[1, 5, 7], [1, 2, 3]]
    
    [123, 456].invokeMap(String.prototype.split, '');
    // => [['1', '2', '3'], ['4', '5', '6']]

 ## keyBy

    Array#keyBy(collection, [iteratee=_.identity])



Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The iteratee to transform keys.

Returns

    (Object): Returns the composed aggregate object.

Example
	

    var myArray = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
    ];
    
    myArray.keyBy(function(o) {
    return String.fromCharCode(o.code);
    });
    // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
    
    myArray.keyBy('dir');
    // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

## map

    Array#map(collection, [iteratee=_.identity])



Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like Array#every, Array#filter, Array#map, Array#mapValues, Array#reject, and Array#some.

The guarded methods are:
ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the new mapped array.

Example
	

    function square(n) {
    return n * n;
    }
    
    [4, 8].map(square);
    // => [16, 64]
    
    _.map({ 'a': 4, 'b': 8 }, square);
    // => [16, 64] (iteration order is not guaranteed)
    
    var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
    ];
    
    // The `_.property` iteratee shorthand.
    _.map('user');
    // => ['barney', 'fred']

 ## orderBy

    Array#orderBy(collection, [iteratees=[_.identity]], [orders])



This method is like Array#sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): The iteratees to sort by.
    [orders] (string[]): The sort orders of iteratees.

Returns

    (Array): Returns the new sorted array.

Example
	

    var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
    ];
    
    // Sort by `user` in ascending order and by `age` in descending order.
    users.orderBy(['user', 'age'], ['asc', 'desc']);
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]


 ## partition

    Array#partition(collection, [predicate=_.identity])



Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).



Arguments

    collection (Array|Object): The collection to iterate over.
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the array of grouped elements.

Example
	

    var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
    ];
    
   users.partition(function(o) { return o.active; });
    // => objects for [['fred'], ['barney', 'pebbles']]
    
    // The `_.matches` iteratee shorthand.
    users.partition({ 'age': 1, 'active': false });
    // => objects for [['pebbles'], ['barney', 'fred']]
    
    // The `_.matchesProperty` iteratee shorthand.
    users.partition(['active', false]);
    // => objects for [['barney', 'pebbles'], ['fred']]
    
    // The `_.property` iteratee shorthand.
    users.partition('active');
    // => objects for [['fred'], ['barney', 'pebbles']]

 ## reduce

    Array#reduce(collection, [iteratee=_.identity], [accumulator])



Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like Array#reduce, Array#reduceRight, and Array#transform.

The guarded methods are:
assign, defaults, defaultsDeep, includes, merge, orderBy, and sortBy



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.
    [accumulator] (*): The initial value.

Returns

    (*): Returns the accumulated value.

Example
	

    [1, 2].reduce(function(sum, n) {
    return sum + n;
    }, 0);
    // => 3
    
    _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
    }, {});
    // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

 ## reduceRight

    Array#reduceRight(collection, [iteratee=_.identity], [accumulator])



This method is like Array#reduce except that it iterates over elements of collection from right to left.



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratee=_.identity] (Function): The function invoked per iteration.
    [accumulator] (*): The initial value.

Returns

    (*): Returns the accumulated value.

Example
	

    var myArray = [[0, 1], [2, 3], [4, 5]];
    
    myArray.reduceRight(function(flattened, other) {
    return flattened.concat(other);
    }, []);
    // => [4, 5, 2, 3, 0, 1]


 ## reject

    Array#reject(collection, [predicate=_.identity])



The opposite of Array#filter; this method returns the elements of collection that predicate does not return truthy for.



Arguments

    collection (Array|Object): The collection to iterate over.
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (Array): Returns the new filtered array.

Example
	

    var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
    ];
    
    users.reject(function(o) { return !o.active; });
    // => objects for ['fred']
    
    // The `_.matches` iteratee shorthand.
    users.reject({ 'age': 40, 'active': true });
    // => objects for ['barney']
    
    // The `_.matchesProperty` iteratee shorthand.
    users.reject(['active', false]);
    // => objects for ['fred']
    
    // The `_.property` iteratee shorthand.
    users.reject('active');
    // => objects for ['barney']

 ## sample

    Array#sample(collection)



Gets a random element from collection.



Arguments

    collection (Array|Object): The collection to sample.

Returns

    (*): Returns the random element.

Example
	

    [1, 2, 3, 4].sample();
    // => 2

## sampleSize

    Array#sampleSize(collection, [n=1])



Gets n random elements at unique keys from collection up to the size of collection.



Arguments

    collection (Array|Object): The collection to sample.
    [n=1] (number): The number of elements to sample.

Returns

    (Array): Returns the random elements.

Example
	


    [1, 2, 3].sampleSize(2);
    // => [3, 1]
    
    [1, 2, 3].sampleSize(4);
    // => [2, 3, 1]


 ## shuffle

    Array#shuffle(collection)



Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.



Arguments

    collection (Array|Object): The collection to shuffle.

Returns

    (Array): Returns the new shuffled array.

Example
	

    [1, 2, 3, 4].shuffle();
    // => [4, 1, 3, 2]

 ## size

    Array#size(collection)



Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.



Arguments

    collection (Array|Object|string): The collection to inspect.

Returns

    (number): Returns the collection size.

Example
	

    [1, 2, 3].size();
    // => 3
       
 ## some

    Array#some(collection, [predicate=_.identity])



Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).



Arguments

    collection (Array|Object): The collection to iterate over.
    [predicate=_.identity] (Function): The function invoked per iteration.

Returns

    (boolean): Returns true if any element passes the predicate check, else false.

Example
	

    [null, 0, 'yes', false].some(Boolean);
    // => true
    
    var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
    ];
    
    // The `_.matches` iteratee shorthand.
    users.some({ 'user': 'barney', 'active': false });
    // => false
    
    // The `_.matchesProperty` iteratee shorthand.
    users.some(['active', false]);
    // => true
    
    // The `_.property` iteratee shorthand.
    users.some('active');
    // => true


 ## sortBy

    Array#sortBy(collection, [iteratees=[_.identity]])



Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).



Arguments

    collection (Array|Object): The collection to iterate over.
    [iteratees=[_.identity]] (...(Function|Function[])): The iteratees to sort by.

Returns

    (Array): Returns the new sorted array.

Example
	

    var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
    ];
    
    users.sortBy([function(o) { return o.user; }]);
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    
    users.sortBy(['user', 'age']);
    // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]




String Methods
 ## camelCase

    String#camelCase([string=''])



Converts string to camel case.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the camel cased string.

Example
	

    'Foo Bar'.camelCase();
    // => 'fooBar'
    
    '--foo-bar--'.camelCase();
    // => 'fooBar'
    
    '__FOO_BAR__'.camelCase();
    // => 'fooBar'

 ## capitalize

    String#capitalize([string=''])



Converts the first character of string to upper case and the remaining to lower case.



Arguments

    [string=''] (string): The string to capitalize.

Returns

(string): Returns the capitalized string.

Example
	

    'FRED'.capitalize();
    // => 'Fred'

## deburr
    String#deburr([string=''])



Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.



Arguments

    [string=''] (string): The string to deburr.

Returns

    (string): Returns the deburred string.

Example
	


    'déjà vu'.deburr();
    // => 'deja vu'

 ## endsWith
    String#endsWith([string=''], [target], [position=string.length])



Checks if string ends with the given target string.



Arguments

    [string=''] (string): The string to inspect.
    [target] (string): The string to search for.
    [position=string.length] (number): The position to search up to.

Returns

    (boolean): Returns true if string ends with target, else false.

Example
	

    'abc'.endsWith('c');
    // => true
    
    'abc'.endsWith('b');
    // => false
    
    'abc'.endsWith('b', 2);
    // => true

 ## escape

    String#escape([string=''])



Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.

Note: No other characters are escaped. To escape additional characters use a third-party library like he.

Though the ">" character is escaped for symmetry, characters like ">" and "/" don't need escaping in HTML and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens's article (under "semi-related fun fact") for more details.

When working with HTML you should always quote attribute values to reduce XSS vectors.



Arguments

    [string=''] (string): The string to escape.

Returns

    (string): Returns the escaped string.

Example
	

    'fred, barney, & pebbles'.escape();
    // => 'fred, barney, &amp; pebbles'

 ## escapeRegExp

    String#escapeRegExp([string=''])



Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.



Arguments

    [string=''] (string): The string to escape.

Returns

    (string): Returns the escaped string.

Example
	

    '[lodash](https://lodash.com/)'.escapeRegExp();
    // => '\[lodash\]\(https://lodash\.com/\)'


 ## kebabCase

    String#kebabCase([string=''])



Converts string to kebab case.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the kebab cased string.

Example
	

    'Foo Bar'.kebabCase();
    // => 'foo-bar'
    
    'fooBar'.kebabCase();
    // => 'foo-bar'
    
    '__FOO_BAR__'.kebabCase();
    // => 'foo-bar'

 ## lowerCase

    String#lowerCase([string=''])



Converts string, as space separated words, to lower case.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the lower cased string.

Example
	

    '--Foo-Bar--'.lowerCase();
    // => 'foo bar'
    
    'fooBar'.lowerCase();
    // => 'foo bar'
    
    '__FOO_BAR__'.lowerCase();
    // => 'foo bar'

## lowerFirst

    String#lowerFirst([string=''])



Converts the first character of string to lower case.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the converted string.

Example
	

    'Fred'.lowerFirst();
    // => 'fred'
    
    'FRED'.lowerFirst();
    // => 'fRED'


 ## pad

    String#pad([string=''], [length=0], [chars=' '])



Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.



Arguments

    [string=''] (string): The string to pad.
    [length=0] (number): The padding length.
    [chars=' '] (string): The string used as padding.

Returns

    (string): Returns the padded string.

Example
	

    'abc'.pad(, 8);
    // => '  abc   '
    
    'abc'.pad( 8, '_-');
    // => '_-abc_-_'
    
    'abc'.pad( 3);
    // => 'abc'

 ## padEnd

    String#padEnd([string=''], [length=0], [chars=' '])



Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.



Arguments

    [string=''] (string): The string to pad.
    [length=0] (number): The padding length.
    [chars=' '] (string): The string used as padding.

Returns

    (string): Returns the padded string.

Example
	

    'abc'.padEnd(6);
    // => 'abc   '
    
    'abc'.padEnd(6, '_-');
    // => 'abc_-_'
    
    'abc'.padEnd(3);
    // => 'abc'

 ## padStart

    String#padStart([string=''], [length=0], [chars=' '])



Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.



Arguments

    [string=''] (string): The string to pad.
    [length=0] (number): The padding length.
    [chars=' '] (string): The string used as padding.

Returns

    (string): Returns the padded string.

Example
	

    'abc'.padStart(6);
    // => '   abc'
    
    'abc'.padStart(6, '_-');
    // => '_-_abc'
    
    'abc'.padStart(3);
    // => 'abc'


 ## parseInt

    String#parseInt(string, [radix=10])



Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.

Note: This method aligns with the ES5 implementation of parseInt.



Arguments

    string (string): The string to convert.
    [radix=10] (number): The radix to interpret value by.

Returns

    (number): Returns the converted integer.

Example
	

    _.parseInt('08');
    // => 8
    
    _.map(['6', '08', '10'], _.parseInt);
    // => [6, 8, 10]

# repeat
    String#repeat([string=''], [n=1])



Repeats the given string n times.



Arguments

    [string=''] (string): The string to repeat.
    [n=1] (number): The number of times to repeat the string.

Returns

    (string): Returns the repeated string.

Example
	

    '*'.repeat(3);
    // => '***'
    
    'abc'.repeat(2);
    // => 'abcabc'
    
    'abc'.repeat(0);
    // => ''

 ## replace

    String#replace([string=''], pattern, replacement)



Replaces matches for pattern in string with replacement.

Note: This method is based on String#replace.



Arguments

    [string=''] (string): The string to modify.
    pattern (RegExp|string): The pattern to replace.
    replacement (Function|string): The match replacement.

Returns

    (string): Returns the modified string.

Example
	

    'Hi Fred'.replace('Fred', 'Barney');
    // => 'Hi Barney'


 ## snakeCase

    String#snakeCase([string=''])



Converts string to snake case.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the snake cased string.

Example
	

    'Foo Bar'.snakeCase();
    // => 'foo_bar'
    
    'fooBar'.snakeCase();
    // => 'foo_bar'
    
    '--FOO-BAR--'.snakeCase();
    // => 'foo_bar'

## split
    String#split([string=''], separator, [limit])



Splits string by separator.

Note: This method is based on String#split.



Arguments

    [string=''] (string): The string to split.
    separator (RegExp|string): The separator pattern to split by.
    [limit] (number): The length to truncate results to.

Returns

    (Array): Returns the string segments.

Example
	

    'a-b-c'.split('-', 2);
    // => ['a', 'b']

 ## startCase

    String#startCase([string=''])



Converts string to start case.


Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the start cased string.

Example
	

    '--foo-bar--'.startCase();
    // => 'Foo Bar'
    
    'fooBar'.startCase();
    // => 'Foo Bar'
    
    '__FOO_BAR__'.startCase();
    // => 'FOO BAR'

 ## startsWith

    String#startsWith([string=''], [target], [position=0])



Checks if string starts with the given target string.



Arguments

    [string=''] (string): The string to inspect.
    [target] (string): The string to search for.
    [position=0] (number): The position to search from.

Returns

    (boolean): Returns true if string starts with target, else false.

Example
	

    'abc'.startsWith('a');
    // => true
    
    'abc'.startsWith('b');
    // => false
    
    'abc'.startsWith('b', 1);
    // => true

 ## template

    String#template([string=''], [options={}])



Creates a compiled template function that can interpolate data properties in "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over _.templateSettings values.

Note: In the development build _.template utilizes sourceURLs for easier debugging.

For more information on precompiling templates see lodash's custom builds documentation.

For more information on Chrome extension sandboxes see Chrome's extensions documentation.



Arguments

    [string=''] (string): The template string.
    [options={}] (Object): The options object.
    [options.escape=_.templateSettings.escape] (RegExp): The HTML "escape" delimiter.
    [options.evaluate=_.templateSettings.evaluate] (RegExp): The "evaluate" delimiter.
    [options.imports=_.templateSettings.imports] (Object): An object to import into the template as free variables.
    [options.interpolate=_.templateSettings.interpolate] (RegExp): The "interpolate" delimiter.
    [options.sourceURL='lodash.templateSources[n]'] (string): The sourceURL of the compiled template.
    [options.variable='obj'] (string): The data object variable name.

Returns

    (Function): Returns the compiled template function.

Example
	

// Use the "interpolate" delimiter to create a compiled template.
var compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'
 
// Use the HTML "escape" delimiter to escape data property values.
var compiled = _.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'
 
// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
var compiled = _.template('<% _.forEach(function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
 
// Use the internal `print` function in "evaluate" delimiters.
var compiled = _.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'
 
// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
var compiled = _.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'
 
// Use backslashes to treat delimiters as plain text.
var compiled = _.template('<%= "\\<%- value %\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'
 
// Use the `imports` option to import `jQuery` as `jq`.
var text = '<% jq.each(function(user) { %><li><%- user %></li><% }); %>';
var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
 
// Use the `sourceURL` option to specify a custom sourceURL for the template.
var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 
// Use the `variable` option to ensure a with-statement isn't used in the compiled template.
var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }
 
// Use custom template delimiters.
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = _.template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'
 
// Use the `source` property to inline compiled templates for meaningful
// line numbers in error messages and stack traces.
fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
  var JST = {\
    "main": ' + _.template(mainText).source + '\
  };\
');

 ## toLower

    String#toLower([string=''])



Converts string, as a whole, to lower case just like String#toLowerCase.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the lower cased string.

Example
	

    '--Foo-Bar--'.toLower();
    // => '--foo-bar--'
    
    'fooBar'.toLower();
    // => 'foobar'
    
    '__FOO_BAR__'.toLower();
    // => '__foo_bar__'

## toUpper

    String#toUpper([string=''])



Converts string, as a whole, to upper case just like String#toUpperCase.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the upper cased string.

Example
	

    '--foo-bar--'.toUpper();
    // => '--FOO-BAR--'
    
    'fooBar'.toUpper();
    // => 'FOOBAR'
    
    '__foo_bar__'.toUpper();
    // => '__FOO_BAR__'


 ## trim

    String#trim([string=''], [chars=whitespace])



Removes leading and trailing whitespace or specified characters from string.



Arguments

    [string=''] (string): The string to trim.
    [chars=whitespace] (string): The characters to trim.

Returns

    (string): Returns the trimmed string.

Example
	

    '  abc  '.trim();
    // => 'abc'
    
    '-_-abc-_-'.trim('_-');
    // => 'abc'
    
    ['  foo  ', '  bar  '].map(_.trim);
    // => ['foo', 'bar']

 ## trimEnd

    String#trimEnd([string=''], [chars=whitespace])



Removes trailing whitespace or specified characters from string.



Arguments

    [string=''] (string): The string to trim.
    [chars=whitespace] (string): The characters to trim.

Returns

    (string): Returns the trimmed string.

Example
	

    '  abc  '.trimEnd();
    // => '  abc'
    
    '-_-abc-_-'.trimEnd('_-');
    // => '-_-abc'

 ## trimStart

    String#trimStart([string=''], [chars=whitespace])



Removes leading whitespace or specified characters from string.



Arguments

    [string=''] (string): The string to trim.
    [chars=whitespace] (string): The characters to trim.

Returns

    (string): Returns the trimmed string.

Example
	

    '  abc  '.trimStart();
    // => 'abc  '
    
    '-_-abc-_-'.trimStart( '_-');
    // => 'abc-_-'

 ## truncate

    String#truncate([string=''], [options={}])



Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".



Arguments

    [string=''] (string): The string to truncate.
    [options={}] (Object): The options object.
    [options.length=30] (number): The maximum string length.
    [options.omission='...'] (string): The string to indicate text is omitted.
    [options.separator] (RegExp|string): The separator pattern to truncate to.

Returns

    (string): Returns the truncated string.

Example
	

    'hi-diddly-ho there, neighborino'.truncate();
    // => 'hi-diddly-ho there, neighbo...'
    
    'hi-diddly-ho there, neighborino'.truncate( {
    'length': 24,
    'separator': ' '
    });
    // => 'hi-diddly-ho there,...'
    
    'hi-diddly-ho there, neighborino'.truncate({
    'length': 24,
    'separator': /,? +/
    });
    // => 'hi-diddly-ho there...'
    
    'hi-diddly-ho there, neighborino'.truncate({
    'omission': ' [...]'
    });
    // => 'hi-diddly-ho there, neig [...]'


 ## unescape

    String#unescape([string=''])



The inverse of String#escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.

Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library like he.


Arguments

    [string=''] (string): The string to unescape.

Returns

    (string): Returns the unescaped string.

Example
	

    'fred, barney, &amp; pebbles'.unescape();
    // => 'fred, barney, & pebbles'


 ## upperCase
    String#upperCase([string=''])



Converts string, as space separated words, to upper case.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the upper cased string.

Example
	

    '--foo-bar'.upperCase();
    // => 'FOO BAR'
    
    'fooBar'.upperCase();
    // => 'FOO BAR'
    
    '__foo_bar__'.upperCase();
    // => 'FOO BAR'

 ## upperFirst

    String#upperFirst([string=''])



Converts the first character of string to upper case.



Arguments

    [string=''] (string): The string to convert.

Returns

    (string): Returns the converted string.

Example
	

    'fred'.upperFirst();
    // => 'Fred'
    
    'FRED'.upperFirst();
    // => 'FRED'

## words

    String#words([string=''], [pattern])



Splits string into an array of its words.



Arguments

    [string=''] (string): The string to inspect.
    [pattern] (RegExp|string): The pattern to match words.

Returns

    (Array): Returns the words of string.

Example
	

    'fred, barney, & pebbles'.words();
    // => ['fred', 'barney', 'pebbles']
    
    'fred, barney, & pebbles'.words( /[^, ]+/g);
    // => ['fred', 'barney', '&', 'pebbles']

