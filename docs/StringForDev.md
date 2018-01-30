# String for developers tools Section

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
