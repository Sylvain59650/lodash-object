[<img src="back.png">Table Of Contents](../README.md)
# Array Methods

## add

    (this) Array#add( (*) value)

Arguments

    (*) value : a value

Returns

    the current array with the value

Example

    var a=[].add(5).add(6); // [5,6]

## addRange

    (this) Array#addRange( Array values)

Arguments

   (Array) values: a array of value

Returns

    the current array with elements of values
Example

        var a=[].addRange([5,6].addRange[7,8,9]); // [5,6,7,8,9]


## chunk

    Array Array#chunk( number size=1)



Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.



Arguments

    size (number): The length of each chunk

Returns

    (Array): Returns the new array of chunks.


Example
	

    ['a', 'b', 'c', 'd'].chunk(2);  // => [['a', 'b'], ['c', 'd']]
 
    ['a', 'b', 'c', 'd'].chunk( 3); // => [['a', 'b', 'c'], ['d']]

## clear

    (this) Array#clear()

Remove all elements of the current array

Argument

    None

Return

    the current array cleared

Example

    var a=[1,2,3,4,5];
    a.clear();
    console.log(a); // []

## compact

    Array Array#compact()


Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.


Returns

    (Array): Returns the new array of filtered values.


Example
	

    [0, 1, false, 2, '', 3].compact(); 
    // => [1, 2, 3]

## concat <img src="js.png">

    Array Array#concat( (...*) values)


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


## countBy

    Object Array#countBy( Function iteratee=_.identity)



Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).



Arguments

    iteratee=_.identity (Function): The iteratee to transform keys.

Returns

    (Object): Returns the composed aggregate object.

Example
	

    [6.1, 4.2, 6.3].countBy(Math.floor);
    // => { '4': 1, '6': 2 }
    
    // The `_.property` iteratee shorthand.
    ['one', 'two', 'three'].countBy('length');
    // => { '3': 2, '5': 1 }


## difference

    Array Array#difference( (...Array) values)


Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Note: Unlike [Array#pullAll](#pullall), this method returns a new array.



Arguments

    values (...Array): The values to exclude.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2, 1].difference([2, 3]);
    // => [1]

## differenceBy

    Array Array#differenceBy( (...Array) values, Function iteratee=_.identity)



This method is like [Array#difference](#difference) except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).

Note: Unlike [Array#pullAllBy](#pullallby), this method returns a new array.



Arguments

    [values] (...Array): The values to exclude.
    iteratee : The iteratee invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2.1, 1.2].differenceBy([2.3, 3.4], Math.floor);
    // => [1.2]
 
    // The `_.property` iteratee shorthand.
    [{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }].differenceBy('x');
    // => [{ 'x': 2 }]

## differenceWith

   Array Array#differenceWith( Array values, Function comparator)



This method is like [Array#difference](#difference) except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

Note: Unlike [Array#pullAllWith](#pullallwith), this method returns a new array.



Arguments

    
    [values] (...Array): The values to exclude.
    comparator: The comparator invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
    objects.differenceWith([{ 'x': 1, 'y': 2 }], _.isEqual);
    // => [{ 'x': 2, 'y': 1 }]


## drop

    Array Array#drop( number n=1)



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

    Array Array#dropRight(number n=1)



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

    Array Array#dropRightWhile( Function predicate=_.identity)



Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    predicate: The function invoked per iteration.

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

    Array Array#dropWhile( Function predicate=_.identity)



Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    predicate: The function invoked per iteration.

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

## equals
    boolean Array#equals( Array anotherArray)

Argument 
    anotherArray : a array

Returns
    true if the array contains same value of anotherArray in same position, else false    

Example

    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 }
    ];
    var items2 = items.shuffle();
    items.equals(items); // true
    items.equals(items2);  //false
    [1,2,3,"a","b","c"].equals([1,2,3,"a","b","c"]); // true

## every
    boolean Array#every( Function predicate=_.identity)



Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

Note: This method returns true for empty collections because everything is true of elements of empty collections.



Arguments

     predicate: The function invoked per iteration.

Returns

    (boolean): Returns true if all elements pass the predicate check, else false.

Example
	

    [true, 1, null, 'yes'].every(Boolean);
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


## fill <img src="js.png">

   Array Array#fill( (*) value, number start=0, number end=array.length)



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


## filter <img src="chrome.png">
   Array Array#filter(Function predicate=_.identity)



Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

Note: Unlike [Array#remove](#remove), this method returns a new array.



Arguments

     predicate: The function invoked per iteration.

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

## find <img src="chrome.png">

   Array Array#find( Function predicate=_.identity, number fromIndex=0)



Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).



Arguments

    predicate: The function invoked per iteration.
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


## findIndex <img src="chrome.png">

   number Array#findIndex(Function predicate=_.identity, number fromIndex=0)



This method is like [Array#find](#find) except that it returns the index of the first element predicate returns truthy for instead of the element itself.



Arguments

    
    predicate: The function invoked per iteration.
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


## findLast
   (*) Array#findLast( Function predicate=_.identity, number fromIndex=collection.length-1)



This method is like [Array#find](#find) except that it iterates over elements of collection from right to left.



Arguments

    predicate: The function invoked per iteration.
    [fromIndex=collection.length-1] (number): The index to search from.

Returns

    (*): Returns the matched element, else undefined.

Example
	

    [1, 2, 3, 4].findLast(function(n) {
        return n % 2 == 1;
    });
    // => 3


## findLastIndex

   number Array#findLastIndex(Function predicate=_.identity, number fromIndex=array.length-1)



This method is like [Array#findIndex](#findindex) except that it iterates over elements of collection from right to left.



Arguments

    
    predicate: The function invoked per iteration.
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

## first

    (*) Array#first()
    

Returns

    (*): Returns the first element of array.

Example
	

    [1, 2, 3].first();
    // => 1
    
    [].first();
    // => undefined

## flatMap

    Array Array#flatMap(Function iteratee=_.identity)



Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).



Arguments

    iteratee : The function invoked per iteration.

Returns

    (Array): Returns the new flattened array.

Example
	

    function duplicate(n) {
        return [n, n];
    }
    
    [1, 2].flatMap(duplicate);
    // => [1, 1, 2, 2]

 ## flatMapDeep

    Array#flatMapDeep( Function iteratee=_.identity)



This method is like [Array#flatMap](#flatmap) except that it recursively flattens the mapped results.



Arguments

    iteratee : The function invoked per iteration.

Returns

    (Array): Returns the new flattened array.

Example
	

    function duplicate(n) {
        return [[[n, n]]];
    }
    
    [1, 2].flatMapDeep(duplicate);
    // => [1, 1, 2, 2]

# flatMapDepth
    Array Array#flatMapDepth(Function iteratee=_.identity, number depth=1)



This method is like [Array#flatMap](#flatmap) except that it recursively flattens the mapped results up to depth times.



Arguments

    iteratee : The function invoked per iteration.
    depth : The maximum recursion depth.

Returns

    (Array): Returns the new flattened array.

Example
	

    function duplicate(n) {
        return [[[n, n]]];
    }
    
    [1, 2].flatMapDepth(duplicate, 2);
    // => [[1, 1], [2, 2]]


## flatten

    Array Array#flatten()



Flattens array a single level deep.



Arguments

    None

Returns

    (Array): Returns the new flattened array.

Example
	

    [1, [2, [3, [4]], 5]].flatten();
    // => [1, 2, [3, [4]], 5]



## flattenDeep

    Array Array#flattenDeep()



Recursively flattens array.



Arguments

    None.

Returns

    (Array): Returns the new flattened array.

Example
	

    [1, [2, [3, [4]], 5]].flattenDeep();
    // => [1, 2, 3, 4, 5]

# flattenDepth

    Array Array#flattenDepth(number depth=1)


Recursively flatten array up to depth times.



Arguments

    depth : The maximum recursion depth.

Returns

    (Array): Returns the new flattened array.

Example
	

    var myArray = [1, [2, [3, [4]], 5]];
    
    myArray.flattenDepth(1);
    // => [1, 2, [3, [4]], 5]
    
    myArray.flattenDepth(2);
    // => [1, 2, 3, [4], 5]


## fromPairs

    Object Array#fromPairs(Array pairs)



The inverse of [toPairs](#topair); this method returns an object composed from key-value pairs.



Arguments

    pairs (Array): The key-value pairs.

Returns

    (Object): Returns the new object.

Example
	

    [['a', 1], ['b', 2]].fromPairs();
    // => { 'a': 1, 'b': 2 }



 
# forEach
    (this) Array#forEach( Function iteratee=_.identity)



Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To avoid this behavior use Array#forIn or Array#forOwn for object iteration.


Arguments

    iteratee : The function invoked per iteration.

Returns

    (*): Returns collection.

Example
	

    [1, 2].forEach(function(value) {
    console.log(value);
    });
    // => Logs `1` then `2`.
    
 
## forEachRight
    (this) Array#forEachRight(Function iteratee=_.identity)



This method is like [Array#forEach](#foreach) except that it iterates over elements of collection from right to left.



Arguments

    iteratee : The function invoked per iteration.

Returns

    (*): Returns collection.

Example
	

    [1, 2].forEachRight(function(value) {
    console.log(value);
    });
    // => Logs `2` then `1`.

## getRange

    Array Array#getRange(number start, number end)

returns a new array whose elements are those of the original array between the start and end positions

Arguments
    
    start: start position in the array
    end: end position in the array

Returns

    a new array whose elements are those of the original array between the start and end positions

Example

    var a=[0,1,2,3,4,5,6,7,8,9];
    var b=a.getRange(5,8);
    console.log(a);  //[0,1,2,3,4,5,6,7,8,9]
    console.log(b);  //[5,6,7,8]

 ## groupBy

    Object Array#groupBy(Function iteratee=_.identity)



Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).



Arguments

    iteratee : The iteratee to transform keys.

Returns

    (Object): Returns the composed aggregate object.

Example
	

    [6.1, 4.2, 6.3].groupBy(Math.floor);
    // => { '4': [4.2], '6': [6.1, 6.3] }
    
    // The `_.property` iteratee shorthand.
    ['one', 'two', 'three'].groupBy('length');
    // => { '3': ['one', 'two'], '5': ['three'] }

## includes <img src="chrome.png">
    boolean Array#includes( (*) value, number fromIndex=0)



Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.



Arguments

    value (*): The value to search for.
    [fromIndex=0] (number): The index to search from.

Returns

    (boolean): Returns true if value is found, else false.

Example
	

    [1, 2, 3].includes( 1);
    // => true
    
    [1, 2, 3].includes(1, 2);
    // => false

## includesAll
    boolean Array#includesAll(Array array)

Argument

    array : a array
Returns

    true if the array contains all value of array, else false

Example

    [1, 2, 3, "a", "b", "c"].includesAll([1, 2, 3, "a", "b", "c"]); // true
    [1, 2, 3, "a", "b", "c"].includesAll([1, 2, 3, "d", "a", "b", "c"]); // false
## insertAt

    (this) Array#insertAt(number position, any value)

Insert a value at the position of the current array.
If position is greater than array length, then insert at last position.

Argument

    position: position where insert the value in the array
    value: the value to insert

Returns

    the current array with new values

Example

    var a=[7,8,9,10];
    a.insertAt(0,11);
    console.log(a); // [11,7,8,9,10]

    a.insertAt(50,12).insertAt(4,13);
    console.log(a); //[11,7,8,9,13,10,12]    


## insertRangeAt

    (this) Array#insertRangeAt(number position, Array values)

Insert elements of values at the position of the current array.
If position is greater than array length, then insert at last position.

Argument

    position: position where insert the value in the array
    values: element of array to insert

Returns

    the current array with new values

Example

    var a=[7,8,9,10];
    
    a.insertRangeAt(2,[12,13,14,15,16]);
    console.log(a); //[7,8,12,13,14,15,16]    


 ## invokeMap

    Array Array#invokeMap( (*) path, (...*) args)



Invokes the method at path of each element in collection, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method. If path is a function, it's invoked for, and this bound to, each element in collection.



Arguments

    path (Array|Function|string): The path of the method to invoke or the function invoked per iteration.
    [args] (...*): The arguments to invoke each method with.

Returns

    (Array): Returns the array of results.

Example
	

    [[5, 1, 7], [3, 2, 1]].invokeMap('sort');
    // => [[1, 5, 7], [1, 2, 3]]
    
    [123, 456].invokeMap(String.prototype.split, '');
    // => [['1', '2', '3'], ['4', '5', '6']]


<a name="indexof"></a>

## indexOf <img src="js.png">

    number Array#indexOf(any value, number fromIndex=0)



Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.



Arguments

    
    value (*): The value to search for.
    fromIndex (number): The index to search from.

Returns

    (number): Returns the index of the matched value, else -1.

Example
	

    [1, 2, 1, 2].indexOf(2);
    // => 1
    
    // Search from the `fromIndex`.
    [1, 2, 1, 2].indexOf( 2, 2);
    // => 3


## initial

    Array Array#initial()



Gets all but the last element of array.



Arguments

    None

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].initial();
    // => [1, 2]

## innerJoin

    (this) Array#innerJoin(Array array,string condition,[string] fields)

 Arguments
        
        array : the array to inner join
        condition: a left field = a right field
        fieds : array of field in right array to extends left array


Returns

        (Array): return a new array with fields of right array and left array whose matches with condition

Examples

    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "Alfred", value: 45 },
        { name: "Thomas", value: -12 },
        { name: "Paul", value: 13 },
        { name: "Tibo", value: 37 },
        { name: "Manuel", value: 38 }
    ];

    var jobTitle = [
        { name: "Sharpe", job: "technician", exp: "senior" },
        { name: "Edward", job: "ingenieer", exp: "junior" },
        { name: "Manuel", job: "florist", exp: "junior" },
        { name: "Paul", job: "electrician", exp: "senior" },
        { name: "Laurent", job: "builder", exp: "junior" },
    ];

    arr = items.innerJoin(jobTitle, "name=name", ["job", "exp"]);

    /* 
    [   { name: 'Edward', value: 21, job: 'ingenieer', exp: 'junior' },
        { name: 'Sharpe', value: 37, job: 'technician', exp: 'senior' },
        { name: 'Paul', value: 13, job: 'electrician', exp: 'senior' },
        { name: 'Manuel', value: 38, job: 'florist', exp: 'junior' } ]
  */

## intersection

   Array Array#intersection([arrays])



Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.



Arguments

    [arrays] (...Array): The arrays to inspect.

Returns

    (Array): Returns the new array of intersecting values.

Example
	

    [2, 1].intersection([2, 3]);
    // => [2]

## intersectionBy

    Array Array#intersectionBy([arrays], Function iteratee=_.identity)



This method is like [Array#intersection](#intersection) except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).



Arguments

    [arrays] (...Array): The arrays to inspect.
    iteratee : The iteratee invoked per element.

Returns

    (Array): Returns the new array of intersecting values.

Example
	

    [2.1, 1.2].intersectionBy([2.3, 3.4], Math.floor);
    // => [2.1]
 
    // The `_.property` iteratee shorthand.
    [{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }].intersectionBy('x');
    // => [{ 'x': 1 }]


## intersectionWith

    Array Array#intersectionWith( (...Array) arrays, Function comparator)



This method is like [Array#intersection](#intersection) except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    arrays (...Array): The arrays to inspect.
    comparator (Function): The comparator invoked per element.

Returns

    (Array): Returns the new array of intersecting values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
    objects.intersectionWith(others, _.isEqual);
    // => [{ 'x': 1, 'y': 2 }]

## join <img src="js.png">

    string Array#join(string separator=',')

Converts all elements in array into a string separated by separator.



Arguments

   separator: The string separator.

Returns

    (string): Returns the joined string.

Example
	

    ['a', 'b', 'c'].join('~');
    // => 'a~b~c'

 ## keyBy

    Object Array#keyBy(Function iteratee=_.identity)



Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).



Arguments

    iteratee : The iteratee to transform keys.

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

    Array Array#map(Function iteratee=_.identity)



Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like [Array#every](#every), [Array#filter](#filter), [Array#map](#map), [Array#mapValues](#mapvalues), [Array#reject](#reject), and [Array#some](#some).

The guarded methods are:
ary, chunk, curry, curryRight, drop, dropRight, every, fill, invert, parseInt, random, range, rangeRight, repeat, sampleSize, slice, some, sortBy, split, take, takeRight, template, trim, trimEnd, trimStart, and words



Arguments

    iteratee : The function invoked per iteration.

Returns

    (Array): Returns the new mapped array.

Example
	

    function square(n) {
        return n * n;
    }
    
    [4, 8].map(square);
    // => [16, 64]

## nth

    any Array#nth(number n=0)



Gets the element at index n of array. If n is negative, the nth element from the end is returned.



Arguments

    
    n : The index of the element to return.

Returns

    (*): Returns the nth element of array.

Example
	

    var myArray = ['a', 'b', 'c', 'd'];
    
    myArray.nth(1);
    // => 'b'
    
    myArray.nth(-2);
    // => 'c';

 ## orderBy

    Array Array#orderBy([iteratees=[_.identity]], [orders])



This method is like [Array#sortBy](#sortby) except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.



Arguments

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

    Array Array#partition(Function predicate=_.identity)



Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).



Arguments

    predicate : The function invoked per iteration.

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

## pop <img src="js.png">

		(*) Array#pop()
		
Remove the last element from an array and returns that element.

Argument

	None.
	
Example	
    
    var myArray = new Array('1', '2', '3');
	var last = myArray.pop(); 
	// myArray is now ["1", "2"], last = "3"

## push <img src="js.png"> 

	(this) Array#push(value)
	
	push() adds one or more elements to the end of an array and returns the resulting length of the array.

Argument
	
	value: a value
	
Example	

    var myArray = new Array('1', '2');
	myArray.push('3'); // myArray is now ["1", "2", "3"]


 ## reduce

    any Array#reduce(Function iteratee=_.identity, any accumulator)



Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like [Array#reduce](#reduce), [Array#reduceRight](#reduceright), and [Array#transform](#transform).

The guarded methods are:
assign, defaults, defaultsDeep, includes, merge, orderBy, and sortBy



Arguments

    iteratee : The function invoked per iteration.
    accumulator (*): The initial value.

Returns

    (*): Returns the accumulated value.

Example
	

    [1, 2].reduce(function(sum, n) {
        return sum + n;
    }, 0);
    // => 3
    

 ## reduceRight

    any Array#reduceRight(Function iteratee=_.identity, any accumulator)



This method is like [Array#reduce](#reduce) except that it iterates over elements of collection from right to left.



Arguments

   iteratee : The function invoked per iteration.
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

    Array Array#reject(Function predicate=_.identity)



The opposite of [Array#filter](#filter); this method returns the elements of collection that predicate does not return truthy for.



Arguments

    predicate: The function invoked per iteration.

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

    (*) Array#sample()



Gets a random element from collection.



Arguments

    None.

Returns

    (*): Returns the random element.

Example
	

    [1, 2, 3, 4].sample();
    // => 2

## sampleSize

    Array Array#sampleSize(number n=1)



Gets n random elements at unique keys from collection up to the size of collection.



Arguments

    n : The number of elements to sample.

Returns

    (Array): Returns the random elements.

Example
	


    [1, 2, 3].sampleSize(2);
    // => [3, 1]
    
    [1, 2, 3].sampleSize(4);
    // => [2, 3, 1]


 ## shuffle

    Array Array#shuffle()



Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.



Arguments

    None.

Returns

    (Array): Returns the new shuffled array.

Example
	

    [1, 2, 3, 4].shuffle();
    // => [4, 1, 3, 2]

 
       
 ## some

    boolean Array#some( Function predicate=_.identity)



Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).



Arguments

    predicate: The function invoked per iteration.

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

## sort <img src="js.png">

    (this) Array#sort(comparaison)

Argument

    comparaison: a comparaison fonction

Return

    current array sorted

Example

    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 }
    ];
    items.sort(function (a, b) {
        return a.value - b.value;
    });

// [ { name: 'The', value: -12 },
//  { name: 'Magnetic', value: 13 },
//  { name: 'Edward', value: 21 },
//  { name: 'Sharpe', value: 37 },
//  { name: 'Zeros', value: 37 },
//  { name: 'And', value: 45 } ]



 ## sortBy

    Array Array#sortBy( [iteratees=[_.identity]])



Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).



Arguments

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









## last

    any Array#last()



Gets the last element of array.



Arguments

    None.
    

Returns

    (*): Returns the last element of array.

Example
	

    [1, 2, 3].last();
    // => 3

## lastIndexOf

    number Array#lastIndexOf(value, number fromIndex=array.length-1)



This method is like [Array#indexOf](#indexof) except that it iterates over elements of array from right to left.



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

## leftJoin

    Array Array#leftJoin(Array array,string condition,[string] fields)

 Arguments
        array : the array to left join

Returns

        (Array): return the current array with fields of right array whose matches with condition

Examples

    var items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "Alfred", value: 45 },
        { name: "Thomas", value: -12 },
        { name: "Paul", value: 13 },
        { name: "Tibo", value: 37 },
        { name: "Manuel", value: 38 }
    ];

    var jobTitle = [
        { name: "Sharpe", job: "technician", exp: "senior" },
        { name: "Edward", job: "ingenieer", exp: "junior" },
        { name: "Manuel", job: "florist", exp: "junior" },
        { name: "Paul", job: "electrician", exp: "senior" },
        { name: "Laurent", job: "builder", exp: "junior" },
    ];

    var arr = items.leftJoin(jobTitle, "name=name", ["job"]);

    /*[ { name: 'Edward', value: 21, job: 'ingenieer' },
        { name: 'Sharpe', value: 37, job: 'technician' },
        { name: 'Alfred', value: 45 },
        { name: 'Thomas', value: -12 },
        { name: 'Paul', value: 13, job: 'electrician' },
        { name: 'Tibo', value: 37 },
        { name: 'Manuel', value: 38, job: 'florist' } 
    ]*/


## pull

    (this) Array#pull(Array values)



Removes all given values from array using SameValueZero for equality comparisons.

Note: Unlike [Array#without](#without), this method mutates array. Use Array#remove to remove elements from an array by predicate.



Arguments

    [values] (...*): The values to remove.

Returns

    (Array): Returns array.

Example
	

    var myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
    
    myArray.pull('a', 'c');
   // => ['b', 'b']

## pullAll

    (this) Array#pullAll(Array values)



This method is like [Array#pull](#pull) except that it accepts an array of values to remove.

Note: Unlike [Array#difference](#difference), this method mutates array.



Arguments

    values (Array): The values to remove.

Returns

    (Array): Returns array.

Example
	

    var myArray = ['a', 'b', 'c', 'a', 'b', 'c'];

    myArray.pullAll(['a', 'c']);
    // => ['b', 'b']

## pullAllBy
   (this) Array#pullAllBy(Array values, Function iteratee=_.identity)



This method is like [Array#pullAll](#pullall) except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).

Note: Unlike [Array#differenceBy](#differenceby), this method mutates array.



Arguments

    values (Array): The values to remove.
    iteratee : The iteratee invoked per element.

Returns

    (Array): Returns array.

Example
	

    var myArray = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    
    myArray.pullAllBy([{ 'x': 1 }, { 'x': 3 }], 'x');
    console.log(myArray);
    // => [{ 'x': 2 }]

## pullAllWith

    (this) Array#pullAllWith(Array values, Function comparator)



This method is like [Array#pullAll](#pullall) except that it accepts comparator which is invoked to compare elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

Note: Unlike [Array#differenceWith](#differencewith), this method mutates array.



Arguments

    values (Array): The values to remove.
    comparator: The comparator invoked per element.

Returns

    (Array): Returns array.

Example
	

    var myArray = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 


    myArray.pullAllWith([{ 'x': 3, 'y': 4 }], _.isEqual);
    console.log(myArray);
    // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

 ## pullAt

    (this) Array#pullAt(Array indexes)



Removes elements from array corresponding to indexes and returns an array of removed elements.

Note: Unlike [Array#at](#at), this method mutates array.



Arguments

    array (Array): The array to modify.
    [indexes] (...(number|number[])): The indexes of elements to remove.

Returns

    (Array): Returns the new array of removed elements.

Example
	

    var myArray = ['a', 'b', 'c', 'd'];
    var pulled = myArray.pullAt([1, 3]);
    
    console.log(myArray);
    // => ['a', 'c']
    
    console.log(pulled);
    // => ['b', 'd']

 ## remove

    (this) Array#remove(Function predicate=_.identity)



Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike [Array#filter](#filter), this method mutates array. Use Array#pull to pull elements from an array by value.



Arguments

    predicate: The function invoked per iteration.

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


## replace

    (this) Array#replace(any value,any newValue)

    Replace the element of the array whose match with value and replace by newValue

Argument    

    value:
    newValue:

Returns 

    the current array with replaced value

Example

    objs = [
        { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 },
        { x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: 40 },
        { x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }, { x: 4, y: 400 }
    ];

    console.log(objs.replace({ x: 1 }, { x: "one", y: 1, z: 1 }));
        
       /*
          [ { x: 'one', y: 1, z: 1 },{ x: 2, y: 2 },{ x: 3, y: 3 },{ x: 4, y: 4 },
            { x: 'one', y: 1, z: 1 },{ x: 2, y: 20 },{ x: 3, y: 30 },{ x: 4, y: 40 },
            { x: 'one', y: 1, z: 1 },{ x: 2, y: 200 },{ x: 3, y: 300 },{ x: 4, y: 400 } ]
    */

 ## reverse

    Array Array#reverse(Array array)



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

## shift <img src="js.png">

    Array Array#shift()

Remove the first element from an array and returns that element.

Example

    var myArray = new Array('1', '2', '3');
    var first = myArray.shift(); 
    // myArray is now ["2", "3"], first is "1"

## slice <img src="js.png">

    Array Array#slice(number start, number end=array.length)



Creates a slice of array from start up to, but not including, end.

Note: This method is used instead of Array#slice to ensure dense arrays are returned.



Arguments

    start: The start position.
    end: The end position.

Returns

    (Array): Returns the slice of array.

Example
    
    var myArray = new Array('a', 'b', 'c', 'd', 'e');
    myArray = myArray.slice(1, 4); 
    // starts at index 1 
    // and extracts all elements until index 3, 
    // returning [ "b", "c", "d"]

<a name="sortedindex"></a>
## sortedIndex
    number Array#sortedIndex(any value)



Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.



Arguments

    value (*): The value to evaluate.

Returns

    (number): Returns the index at which value should be inserted into array.

Example
	

    [30, 50].sortedIndex(40);
    // => 1

 ## sortedIndexBy

    number Array#sortedIndexBy(any value, Function iteratee=_.identity)



This method is like [Array#sortedIndex](#sortedindex) except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).



Arguments

    value (*): The value to evaluate.
    iteratee : The iteratee invoked per element.

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
    number Array#sortedIndexOf(any value)



This method is like [Array#indexOf](#indexof) except that it performs a binary search on a sorted array.



Arguments

    
    value (*): The value to search for.

Returns

    (number): Returns the index of the matched value, else -1.

Example
	

    [4, 5, 5, 5, 6].sortedIndexOf(5);
    // => 1

 ## sortedLastIndex

    number Array#sortedLastIndex(any value)



This method is like [Array#sortedIndex](#sortindex) except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.



Arguments

    value (*): The value to evaluate.

Returns

    (number): Returns the index at which value should be inserted into array.

Example
	

    [4, 5, 5, 5, 6].sortedLastIndex(5);
    // => 4

 ## sortedLastIndexBy

    number Array#sortedLastIndexBy(any value, Function iteratee=_.identity)



This method is like [Array#sortedLastIndex](#sortedlastIndex) except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).



Arguments

    value (*): The value to evaluate.
    iteratee : The iteratee invoked per element.

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
    number Array#sortedLastIndexOf(any value)



This method is like [Array#lastIndexOf](#lastindexof) except that it performs a binary search on a sorted array.



Arguments

    
    value (*): The value to search for.

Returns

(number): Returns the index of the matched value, else -1.

Example
	

    [4, 5, 5, 5, 6].sortedLastIndexOf(5);
    // => 3

 ## sortedUniq

    number Array#sortedUniq()



This method is like [Array#uniq](#uniq) except that it's designed and optimized for sorted arrays.



Arguments

    None
    
Returns

    (Array): Returns the new duplicate free array.

Example
	

    [1, 1, 2].sortedUniq();
    // => [1, 2]

# sortedUniqBy

    Array#sortedUniqBy(Function iteratee)



This method is like [Array#uniqBy](#uniqby) except that it's designed and optimized for sorted arrays.



Arguments

    
    iteratee: The iteratee invoked per element.

Returns

    (Array): Returns the new duplicate free array.

Example
	

    [1.1, 1.2, 2.3, 2.4].sortedUniqBy(Math.floor);
    // => [1.1, 2.3]

## splice <img src="js.png">

    (*) Array#splice(number index, number count_to_remove, (...any) newElements) 

removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

Example

    var myArray = new Array('1', '2', '3', '4', '5');
    myArray.splice(1, 3, 'a', 'b', 'c', 'd'); 
    // myArray is now ["1", "a", "b", "c", "d", "5"]
    // This code started at index one (or where the "2" was), 
    // removed 3 elements there, and then inserted all consecutive elements in its place.

 ## tail

    Array Array#tail()


Gets all but the first element of array.



Arguments

    None.
    

Returns

    (Array): Returns the slice of array.

Example
	

    [1, 2, 3].tail();
    // => [2, 3]

## take

    Array Array#take(number n=1)



Creates a slice of array with n elements taken from the beginning.



Arguments

    
    n: The number of elements to take.

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

    Array Array#takeRight(number n=1)



Creates a slice of array with n elements taken from the end.



Arguments

    
    n: The number of elements to take.

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

    Array Array#takeRightWhile(Function predicate=_.identity)



Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    predicate: The function invoked per iteration.

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
    Array Array#takeWhile(Function predicate=_.identity)



Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).



Arguments

    
    predicate: The function invoked per iteration.

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

    Array Array#union( (...Array) arrays)



Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.



Arguments

    [arrays] (...Array): The arrays to inspect.

Returns

    (Array): Returns the new array of combined values.

Example
	

    [2].union([1, 2]);
    // => [2, 1]

# unionBy
    Array Array#unionBy( (...Array)arrays, Function iteratee=_.identity)



This method is like [Array#union](#union) except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed. Result values are chosen from the first array in which the value occurs. The iteratee is invoked with one argument:
(value).



Arguments

    [arrays] (...Array): The arrays to inspect.
    iteratee : The iteratee invoked per element.

Returns

    (Array): Returns the new array of combined values.

Example
	

    [2.1].unionBy([1.2, 2.3], Math.floor);
    // => [2.1, 1.2]
    
    // The `_.property` iteratee shorthand.
    [{ 'x': 1 }].unionBy( [{ 'x': 2 }, { 'x': 1 }], 'x');
    // => [{ 'x': 1 }, { 'x': 2 }]


 ## unionWith

    Array Array#unionWith((...Array)arrays, Function comparator)



This method is like [Array#union](#union) except that it accepts comparator which is invoked to compare elements of arrays. Result values are chosen from the first array in which the value occurs. The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    [arrays] (...Array): The arrays to inspect.
    comparator: The comparator invoked per element.

Returns

    (Array): Returns the new array of combined values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    objects.unionWith( others, _.isEqual);
    // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

 ## uniq

    Array Array#uniq()


Creates a duplicate-free version of an using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.



Arguments

    None.

Returns

    (Array): Returns the new duplicate free array.

Example
	

    [2, 1, 2].uniq();
    // => [2, 1]

 ## uniqBy

    Array Array#uniqBy(Function iteratee=_.identity)



This method is like [Array#uniq](#uniq) except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
(value).



Arguments

    
    iteratee : The iteratee invoked per element.

Returns

    (Array): Returns the new duplicate free array.

Example
	

    [2.1, 1.2, 2.3].uniqBy(Math.floor);
    // => [2.1, 1.2]
    
    // The `_.property` iteratee shorthand.
    [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }].uniqBy('x');
    // => [{ 'x': 1 }, { 'x': 2 }]

## uniqWith
    Array Array#uniqWith(Function comparator)



This method is like [Array#uniq](#uniq) except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    
    comparator: The comparator invoked per element.

Returns

    (Array): Returns the new duplicate free array.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    objects.uniqWith(_.isEqual);
    // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]

## unshift <img src="js.png">

    (*) Array#unshift( (...any) value1)

Add one or more elements to the front of an array and returns the new length of the array.

Example

    var myArray = new Array('1', '2', '3');
    myArray.unshift('4', '5'); 
    // myArray becomes ["4", "5", "1", "2", "3"]

 ## unzip

    Array#unzip()



This method is like [Array.zip](#zip) except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.



Arguments

    None.

Returns

    (Array): Returns the new array of regrouped elements.

Example
	

    var zipped = [['a', 1, true], ['b', 2, false]];
    
    zipped.unzip();
    // => [['a', 'b'], [1, 2], [true, false]]

## unzipWith

    Array Array#unzipWith(Function iteratee=_.identity)



This method is like [Array#unzip](#unzip) except that it accepts iteratee to specify how regrouped values should be combined. The iteratee is invoked with the elements of each group: (...group).



Arguments

    array (Array): The array of grouped elements to process.
    iteratee : The function to combine regrouped values.

Returns

    (Array): Returns the new array of regrouped elements.

Example
	

    var zipped = _.zip([1, 2], [10, 20], [100, 200]);
    // => [[1, 10, 100], [2, 20, 200]]
    
    zipped.unzipWith( _.add);
    // => [3, 30, 300]

 ## without

    Array Array#without(Array values)



Creates an array excluding all given values using SameValueZero for equality comparisons.

Note: Unlike [Array#pull](#pull), this method returns a new array.



Arguments

    
    [values] (...*): The values to exclude.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2, 1, 2, 3].without(1, 2);
    // => [3]

 ## xor

    Array Array#xor(Array arrays)



Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.



Arguments

    [arrays] (...Array): The arrays to inspect.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2, 1].xor([2, 3]);
    // => [1, 3]

## xorBy
    Array Array#xorBy(Array arrays, Function iteratee=_.identity)



This method is like [Array#xor](#xor) except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which by which they're compared. The order of result values is determined by the order they occur in the arrays. The iteratee is invoked with one argument: (value).



Arguments

    [arrays] (...Array): The arrays to inspect.
    iteratee : The iteratee invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    [2.1, 1.2].xorBy( [2.3, 3.4], Math.floor);
    // => [1.2, 3.4]
    
    // The `_.property` iteratee shorthand.
    [{ 'x': 1 }].xorBy([{ 'x': 2 }, { 'x': 1 }], 'x');
    // => [{ 'x': 2 }]

 ## xorWith

    Array Array#xorWith( (...Array) arrays, Function comparator)



This method is like [Array#xor](#xor) except that it accepts comparator which is invoked to compare elements of arrays. The order of result values is determined by the order they occur in the arrays. The comparator is invoked with two arguments: (arrVal, othVal).



Arguments

    [arrays] (...Array): The arrays to inspect.
    comparator: The comparator invoked per element.

Returns

    (Array): Returns the new array of filtered values.

Example
	

    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    objects.xorWith(others, _.isEqual);
    // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]

 ## zip

    Array Array.zip( (...Array) arrays)



Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.



Arguments

    [arrays] (...Array): The arrays to process.

Returns

    (Array): Returns the new array of grouped elements.

Example
	

    Array.zip(['a', 'b'], [1, 2], [true, false]);
    // => [['a', 1, true], ['b', 2, false]]

## zipObject
    Object Array#zipObject([props=[]], [values=[]])



This method is like [Array#fromPairs](#frompair) except that it accepts two arrays, one of property identifiers and one of corresponding values.



Arguments

    [props=[]] (Array): The property identifiers.
    [values=[]] (Array): The property values.

Returns

    (Object): Returns the new object.

Example
	

    ['a', 'b'].zipObject([1, 2]);
    // => { 'a': 1, 'b': 2 }

## zipObjectDeep

    Object Array#zipObjectDeep([props=[]], [values=[]])



This method is like [Array#zipObject](#zipobject) except that it supports property paths.



Arguments

    [props=[]] (Array): The property identifiers.
    [values=[]] (Array): The property values.

Returns

    (Object): Returns the new object.

Example
	

    _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
    // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

 ## zipWith

    Array Array.zipWith( (...Array)arrays, Function iteratee=_.identity)



This method is like [Array#zip](#zip) except that it accepts iteratee to specify how grouped values should be combined. The iteratee is invoked with the elements of each group: (...group).



Arguments

    [arrays] (...Array): The arrays to process.
    iteratee : The function to combine grouped values.

Returns

    (Array): Returns the new array of grouped elements.

Example
	

    Array.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
    return a + b + c;
    });
    // => [111, 222]





