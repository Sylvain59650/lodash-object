# String Methods

## between
    String#between(left, right)

Extracts a string between left and right strings.
Arguments

Example

    '<a>foo</a>'.between('<a>', '</a>') ==> foo

 

 ## camelCase

    String#camelCase()



Converts string to camel case.



Arguments

    None.

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

    String#capitalize()



Converts the first character of string to upper case and the remaining to lower case.



Arguments

    None.

Returns

    (string): Returns the capitalized string.

Example
	

    'FRED'.capitalize();
    // => 'Fred'


## chompLeft
    String#chompLeft(prefix)

Removes prefix from start of string.
Arguments

    prefix : 
Returns

Example

    'foobar'.chompLeft('foo'); // bar
    'foobar'.chompLeft('bar'); // foobar

## chompRight
    String#chompRight(suffix)

Removes suffix from end of string.
Arguments

    suffix :

Example

    'foobar'.chompRight('bar'); // foo
    'foobar'.chompRight('foo'); // foobar

## collapseWhitespace
    String#collapseWhitespace()

Converts all adjacent whitespace characters to a single space.

Arguments

    None.

Example

    ' String   \t libraries are   \n\n\t fun\n!  '.collapseWhitespace()); // 'String libraries are fun !'



## count
    String#count(substr)

Returns the count of the number of occurrences of the substring.

Arguments
    substr: 

Example

    "ababababab".count("ba"); // 4



 ## endsWith
    String#endsWith( [target], [position=string.length])



Checks if string ends with the given target string.



Arguments

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


## equalsIgnoreCase
    equalsIgnoreCase

Example

    "AbCd".equalsIgnoreCase("aBCD"); // true
    "AZERTY".equalsIgnoreCase("azerty"); // true

 ## escape

    String#escape()



Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.

Note: No other characters are escaped. To escape additional characters use a third-party library like he.

Though the ">" character is escaped for symmetry, characters like ">" and "/" don't need escaping in HTML and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens's article (under "semi-related fun fact") for more details.

When working with HTML you should always quote attribute values to reduce XSS vectors.



Arguments

    None.

Returns

    (string): Returns the escaped string.

Example
	

    'fred, barney, & pebbles'.escape();
    // => 'fred, barney, &amp; pebbles'

 ## escapeRegExp

    String#escapeRegExp()



Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.



Arguments

    None.

Returns

    (string): Returns the escaped string.

Example
	

    '[lodash](https://lodash.com/)'.escapeRegExp();
    // => '\[lodash\]\(https://lodash\.com/\)'


## includes
    String#includes(substr)

Arguments

Returns

Example


## indexOfAny

    String#indexOfAny(arrayOfChars)

Reports the index of the first occurrence in this instance of any character in a specified array of characters. 
The method returns -1 if the characters in the array are not found in this instance.

Arguments

    arrayOfChars : string with characters to search

Example

    "123456789-987654321!123456789%987654".indexOfAny("%!-"); // 9

## insertAt
    String#insertAt(position, str)

Arguments
   position: position to insert str in the string
    
Returns
    the new string
Example

    "1234567890".insertAt(3,"--"); // "123--4567890"

## isNullOrEmpty
    String.isNullOrEmpty(string)

Arguments:
    string: the string to analyse

Returns 
    true if string is null, undefined or ""

    String.isNullOrEmpty(null); // true            
    String.isNullOrEmpty(undefined); // true
    String.isNullOrEmpty(""); // true
    String.isNullOrEmpty("azerty"); // false
    String.isNullOrEmpty("   "); // false


## isNullOrWhiteSpace
    String.isNullOrWhiteSpace(string)
Arguments:
    string: the string to analyse

Returns 
    true if string is null, undefined, "" or contains only whitespace

    String.isNullOrEmpty(null); // true            
    String.isNullOrEmpty(undefined); // true
    String.isNullOrEmpty(""); // true    
    String.isNullOrEmpty("   "); // true
    String.isNullOrEmpty("\n\r"); // true
    String.isNullOrEmpty("azerty"); // false

 ## kebabCase

    String#kebabCase()



Converts string to kebab case.



Arguments

    None.

Returns

    (string): Returns the kebab cased string.

Example
	

    'Foo Bar'.kebabCase();
    // => 'foo-bar'
    
    'fooBar'.kebabCase();
    // => 'foo-bar'
    
    '__FOO_BAR__'.kebabCase();
    // => 'foo-bar'


## latinize
    String#latinize()



Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.



Arguments

    None.

Returns

    (string): Returns the deburred string.

Example
	


    'déjà vu'.latinize();
    // => 'deja vu'


## lines
    String#lines()

Arguments

    None.
Returns
    A array of lines
Example



 ## lowerCase

    String#lowerCase()



Converts string, as space separated words, to lower case.



Arguments

    None.

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

    String#lowerFirst()



Converts the first character of string to lower case.



Arguments

    None.

Returns

    (string): Returns the converted string.

Example
	

    'Fred'.lowerFirst();
    // => 'fred'
    
    'FRED'.lowerFirst();
    // => 'fRED'


 ## pad

    String#pad([length=0], [chars=' '])



Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.



Arguments

    [length=0] (number): The padding length.
    [chars=' '] (string): The string used as padding.

Returns

    (string): Returns the padded string.

Example
	

    'abc'.pad(8);
    // => '  abc   '
    
    'abc'.pad( 8, '_-');
    // => '_-abc_-_'
    
    'abc'.pad( 3);
    // => 'abc'

 ## padEnd

    String#padEnd([length=0], [chars=' '])



Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.



Arguments

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

    String#padStart([length=0], [chars=' '])



Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.



Arguments

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


# repeat
    String#repeat([string=''], [n=1])



Repeats the given string n times.



Arguments

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

 ## replace   IE/C

    String#replace( pattern, replacement)



Replaces matches for pattern in string with replacement.


Arguments

    [string=''] (string): The string to modify.
    pattern (RegExp|string): The pattern to replace.
    replacement (Function|string): The match replacement.

Returns

    (string): Returns the modified string.

Example
	

    'Hi Fred'.replace('Fred', 'Barney');
    // => 'Hi Barney'



## reverse
    String#reverse()

Arguments

    None.
    
Returns
    the string inversed

Example

    "123456789".reverse(); // "987654321"


 ## snakeCase

    String#snakeCase()



Converts string to snake case.



Arguments

   None.

Returns

    (string): Returns the snake cased string.

Example
	

    'Foo Bar'.snakeCase();
    // => 'foo_bar'
    
    'fooBar'.snakeCase();
    // => 'foo_bar'
    
    '--FOO-BAR--'.snakeCase();
    // => 'foo_bar'

## split  IE/C
    String#split( separator, [limit])



Splits string by separator.




Arguments

    separator (RegExp|string): The separator pattern to split by.
    [limit] (number): The length to truncate results to.

Returns

    (Array): Returns the string segments.

Example
	

    'a-b-c'.split('-', 2);
    // => ['a', 'b']

 ## startCase

    String#startCase()



Converts string to start case.


Arguments

    None.

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

    String#startsWith( [target], [position=0])



Checks if string starts with the given target string.



Arguments

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

 
 ## strip
    String#strip(str1,str2,str3...)
Returns a new string with all occurrences of str1],str2],str3,... removed.

Arguments

    str1,str2,str3 : the strings to remove
    
Returns

Example

    ' 1 2 3--__--4 5 6-7__8__9--0'.strip(' ', '_', '-'); //'1234567890'

## toCharArray
    String#toCharArray

Convert the string in array of chars

Example

    "azerty".toCharArray(); // ["a","z","e","r","t","y"]    

 ## toLowerCase  Native

    String#toLowerCase()



Converts string, as a whole, to lower case.



Arguments

   None.

Returns

    (string): Returns the lower cased string.

Example
	

    '--Foo-Bar--'.toLowerCase();
    // => '--foo-bar--'
    
    'fooBar'.toLowerCase();
    // => 'foobar'
    
    '__FOO_BAR__'.toLowerCase();
    // => '__foo_bar__'

## toUpperCase   NATIVE

    String#toUpperCase()



Converts string, as a whole, to upper case. 



Arguments

    None.

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

    String#trim([chars=whitespace])



Removes leading and trailing whitespace or specified characters from string.



Arguments

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

    String#trimEnd([chars=whitespace])



Removes trailing whitespace or specified characters from string.



Arguments

    [chars=whitespace] (string): The characters to trim.

Returns

    (string): Returns the trimmed string.

Example
	

    '  abc  '.trimEnd();
    // => '  abc'
    
    '-_-abc-_-'.trimEnd('_-');
    // => '-_-abc'

 ## trimStart

    String#trimStart([chars=whitespace])



Removes leading whitespace or specified characters from string.



Arguments

    [chars=whitespace] (string): The characters to trim.

Returns

    (string): Returns the trimmed string.

Example
	

    '  abc  '.trimStart();
    // => 'abc  '
    
    '-_-abc-_-'.trimStart( '_-');
    // => 'abc-_-'

 ## truncate

    String#truncate([options={}])



Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".



Arguments

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

    String#unescape()



The inverse of String#escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.

Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library like he.


Arguments

    None.

Returns

    (string): Returns the unescaped string.

Example
	

    'fred, barney, &amp; pebbles'.unescape();
    // => 'fred, barney, & pebbles'


 ## upperCase
    String#upperCase()



Converts string, as space separated words, to upper case.



Arguments

    None.

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

    String#upperFirst()



Converts the first character of string to upper case.



Arguments

    None.

Returns

    (string): Returns the converted string.

Example
	

    'fred'.upperFirst();
    // => 'Fred'
    
    'FRED'.upperFirst();
    // => 'FRED'

## words

    String#words( [pattern])



Splits string into an array of its words.



Arguments

    [pattern] (RegExp|string): The pattern to match words.

Returns

    (Array): Returns the words of string.

Example
	

    'fred, barney, & pebbles'.words();
    // => ['fred', 'barney', 'pebbles']
    
    'fred, barney, & pebbles'.words( /[^, ]+/g);
    // => ['fred', 'barney', '&', 'pebbles']

