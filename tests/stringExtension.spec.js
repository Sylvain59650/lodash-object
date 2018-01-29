require("../sources/StringExtension.js");
require("../sources/String.js");



console.log('data_rate'.camelCase()); //'dataRate'
console.log('background-color'.camelCase()); //'backgroundColor'
console.log('-moz-something'.camelCase()); //'MozSomething'
console.log('_car_speed_'.camelCase()); //'CarSpeed'
console.log('yes_we_can'.camelCase()); //'yesWeCan'

console.log("camelCase", "Foo Bar".camelCase());