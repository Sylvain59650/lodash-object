[<img src="back.png">Table Of Contents](../README.md)

# Math Methods
## add

    Math.add(augend, addend)



Adds two numbers.



Arguments

    augend (number): The first number in an addition.
    addend (number): The second number in an addition.

Returns

    (number): Returns the total.
Example

    Math.add(6, 4);
    // => 10

## ceil

    Math.ceil(number, [precision=0])



Computes number rounded up to precision.



Arguments

    number (number): The number to round up.
    [precision=0] (number): The precision to round up to.

Returns

    (number): Returns the rounded up number.
Example

    Math.ceil(4.006);
    // => 5
    
    Math.ceil(6.004, 2);
    // => 6.01
    
    Math.ceil(6040, -2);
    // => 6100

## divide

    Math.divide(dividend, divisor)



Divide two numbers.



Arguments

    dividend (number): The first number in a division.
    divisor (number): The second number in a division.

Returns

    (number): Returns the quotient.
Example

    Math.divide(6, 4);
    // => 1.5

## floor

    Math.floor(number, [precision=0])



Computes number rounded down to precision.



Arguments

    number (number): The number to round down.
    [precision=0] (number): The precision to round down to.

Returns

    (number): Returns the rounded down number.
Example

    Math.floor(4.006);
    // => 4
    
    Math.floor(0.046, 2);
    // => 0.04
    
    Math.floor(4060, -2);
    // => 4000

## max

    Math.max(array)



Computes the maximum value of array. If array is empty or falsey, undefined is returned.



Arguments

    array (Array): The array to iterate over.

Returns

    (*): Returns the maximum value.
Example

    Math.max([4, 2, 8, 6]);
    // => 8
    
    Math.max([]);
    // => undefined


# maxBy

    Math.maxBy(array, [iteratee=Math.identity])



This method is like Math.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).



Arguments

    array (Array): The array to iterate over.
    [iteratee=Math.identity] (Function): The iteratee invoked per element.

Returns

    (*): Returns the maximum value.
Example

    var objects = [{ 'n': 1 }, { 'n': 2 }];
    
    Math.maxBy(objects, function(o) { return o.n; });
    // => { 'n': 2 }
    
    // The `Math.property` iteratee shorthand.
    Math.maxBy(objects, 'n');
    // => { 'n': 2 }

## mean

    Math.mean(array)



Computes the mean of the values in array.



Arguments

    array (Array): The array to iterate over.

Returns

    (number): Returns the mean.
Example

    Math.mean([4, 2, 8, 6]);
    // => 5

## meanBy

    Math.meanBy(array, [iteratee=Math.identity])



This method is like Math.mean except that it accepts iteratee which is invoked for each element in array to generate the value to be averaged. The iteratee is invoked with one argument: (value).



Arguments

    array (Array): The array to iterate over.
    [iteratee=Math.identity] (Function): The iteratee invoked per element.

Returns

    (number): Returns the mean.
Example

    var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
    
    Math.meanBy(objects, function(o) { return o.n; });
    // => 5
    
    // The `Math.property` iteratee shorthand.
    Math.meanBy(objects, 'n');
    // => 5

## min

    Math.min(array)



Computes the minimum value of array. If array is empty or falsey, undefined is returned.



Arguments

    array (Array): The array to iterate over.

Returns

    (*): Returns the minimum value.
Example

    Math.min([4, 2, 8, 6]);
    // => 2
    
    Math.min([]);
    // => undefined

## minBy

    Math.minBy(array, [iteratee=Math.identity])



This method is like Math.min except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).



Arguments

    array (Array): The array to iterate over.
    [iteratee=Math.identity] (Function): The iteratee invoked per element.

Returns

    (*): Returns the minimum value.
Example

    var objects = [{ 'n': 1 }, { 'n': 2 }];
    
    Math.minBy(objects, function(o) { return o.n; });
    // => { 'n': 1 }
    
    // The `Math.property` iteratee shorthand.
    Math.minBy(objects, 'n');
    // => { 'n': 1 }

## multiply

    Math.multiply(multiplier, multiplicand)



Multiply two numbers.



Arguments

    multiplier (number): The first number in a multiplication.
    multiplicand (number): The second number in a multiplication.

Returns

    (number): Returns the product.
Example

    Math.multiply(6, 4);
    // => 24

## round

    Math.round(number, [precision=0])



Computes number rounded to precision.



Arguments

    number (number): The number to round.
    [precision=0] (number): The precision to round to.

Returns

    (number): Returns the rounded number.
Example

    Math.round(4.006);
    // => 4
    
    Math.round(4.006, 2);
    // => 4.01
    
    Math.round(4060, -2);
    // => 4100

## subtract

    Math.subtract(minuend, subtrahend)



Subtract two numbers.



Arguments

    minuend (number): The first number in a subtraction.
    subtrahend (number): The second number in a subtraction.

Returns

    (number): Returns the difference.
Example

Math.subtract(6, 4);
// => 2

## sum

    Math.sum(array)



Computes the sum of the values in array.



Arguments

    array (Array): The array to iterate over.

Returns

    (number): Returns the sum.
Example

    Math.sum([4, 2, 8, 6]);
    // => 20

## sumBy

    Math.sumBy(array, [iteratee=Math.identity])



This method is like Math.sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed. The iteratee is invoked with one argument: (value).



Arguments

    array (Array): The array to iterate over.
    [iteratee=Math.identity] (Function): The iteratee invoked per element.

Returns

    (number): Returns the sum.
Example

    var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
    
    Math.sumBy(objects, function(o) { return o.n; });
    // => 20
    
    // The `Math.property` iteratee shorthand.
    Math.sumBy(objects, 'n');
    // => 20


## clamp

    Math.clamp(number, [lower], upper)



Clamps number within the inclusive lower and upper bounds.



Arguments

    number (number): The number to clamp.
    [lower] (number): The lower bound.
    upper (number): The upper bound.

Returns

    (number): Returns the clamped number.
Example

    Math.clamp(-10, -5, 5);
    // => -5
    
    Math.clamp(10, -5, 5);
    // => 5

## inRange

    Math.inRange(number, [start=0], end)



Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.


Arguments

    number (number): The number to check.
    [start=0] (number): The start of the range.
    end (number): The end of the range.

Returns

    (boolean): Returns true if number is in the range, else false.
Example

    Math.inRange(3, 2, 4);
    // => true
    
    Math.inRange(4, 8);
    // => true
    
    Math.inRange(4, 2);
    // => false
    
    Math.inRange(2, 2);
    // => false
    
    Math.inRange(1.2, 2);
    // => true
    
    Math.inRange(5.2, 4);
    // => false
    
    Math.inRange(-3, -2, -6);
    // => true

## random

    Math.random([lower=0], [upper=1], [floating])



Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.

Note: JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.


Arguments

    [lower=0] (number): The lower bound.
    [upper=1] (number): The upper bound.
    [floating] (boolean): Specify returning a floating-point number.

Returns

    (number): Returns the random number.
Example

    Math.random(0, 5);
    // => an integer between 0 and 5
    
    Math.random(5);
    // => also an integer between 0 and 5
    
    Math.random(5, true);
    // => a floating-point number between 0 and 5
    
    Math.random(1.2, 5.2);
    // => a floating-point number between 1.2 and 5.2