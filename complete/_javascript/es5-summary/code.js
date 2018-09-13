
// JS-ES5 fundamentals: variables, arrays, objects, functions

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

// Variables : string, number, boolean, null, undefined

var city = "Oxford";
var year = 2018;
var state = false;
var project = null;
var town; // undefined

// JS is a loosely/weakly typed language.
// Typescript is a compile-time technology to address this.
city = 45;

// Variables are case-sensitive
console.log( typeof City === "undefined" );

// Variables are globally scoped if defined outside of a function/object.
console.log( window.city === city );

// Strings and numbers are PRIMITIVE values.
// They make copies-by-value.

var a = 4;
var b = a;
b = 5;

var x = "Fred";
var y = x;
y = "Jack";

// Variables a,b,x and y are independent and have different values.

// Variables defined with the ES5 var keyword are hoisted.
// They come into existence at the top of their containing scope.
// ES5 variables do not have block scope.
// This loop counter continues to exist after the for-loop.

for ( var j=0; j<10; j++ ) {
	console.log(j);
}
console.log(j);

// Recommendation: use the ES6 let keyword instead. It has block scope.

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

// Arrays are lists of typically similar values.

var cities = [ "Segovia", "Toledo", "Girona", "Salamanca", "Seville" ];

// Arrays are zero-indexed: 0 to N-1.
console.log( cities[ cities.length-1 ] === "Seville" );

// Use push, pop, unshift and shift to add/remove from both ends.

// Move last to first
cities.unshift(cities.pop());
// Move first to last
cities.push(cities.shift());

// A common pattern is to push items into an initially empty array.
var basket = [];
basket.push("bread");

// Arrays are a complex type. They copy by reference: simple assignment
// will create two pointers to the same array.

var lotto = [65,12,87,88,4,21];
var lottery = lotto;

console.log(lottery === lotto); // true: they are the same array.

// Avoid this by creating an independent copy
var lotto = [65,12,87,88,4,21];
var lottery = Object.assign( [], lotto );

// Arrays are unique: array comparison will always return false
// unless you have created two pointers to the same array.

var a = ["Oslo","Paris"];
var b = ["Oslo","Paris"];

console.log( a === b ); // false

// Limitations : arrays containing simple values do not carry any
// metadata and are ambiguous

var person = [ "John", "Elton", 42, "Green", "Street" ];

// A shopping basket of strings does not carry enough product information.

var basket = [ "bread", "milk" ];

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

// Objects are self-documenting. They describe data using name/value pairs.

var jp = { city:"Tokyo", year:2020 };

// Objects are mutable: they can be augmented later.

jp.month = "June";
jp.visa = true;

// Properties can be removed or changed.

delete jp.visa;
jp.month = "July";

// Objects can contain nested objects.

jp.flight = { from:"Gatwick", time:"07.45" };

console.log(jp);

function describe( trip ) {

	var sentence = "I am flying to " + trip.city
					+ " in " + trip.month + " " + trip.year
					+ " from " + trip.flight.from
					+ " at " + trip.flight.time ;

	console.log( sentence );
}

describe( jp );

var es = {
	city:"Madrid",
	year:2018,
	month:"October",
	flight:{
		from:"Heathrow",
		time:"12.10"
	}
}

describe( es );

// An array of objects is a very useful way to describe a table
// of data with metadata.

var trips = [ jp, es ];

console.table( trips );

// We can use the functional forEach method to iterate over the array
// of objects without the need to define a for-loop.

trips.forEach( describe );

// JSON is a string representation of JS objects.
// It has become a standard for data interchange like XML.

var ob = {
	movie : "Taxi Driver",
	getMovie : function() { return this.movie }
}

console.log( JSON.stringify( ob ));

// Use stringify and parse to store/retrieve data from localStorage.

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

// Functions define reusable code and manage scope.

function double( n ) { return n*2; }

// This function accidentally omits the var keyword.
// Variable area is now an implied global

function getArea( w,l ) {
	area = (w*l) + " square metres";
	return area;
}

console.log( getArea(6,4));
console.log( window.area );

// Adding "use strict" may highlight this error.

// The function expression syntax assigns anonymous Functions
// to variables.

var makeCity = function( c,t ) {
	return { city:c, temp:t }
}

console.log( makeCity( "Osaka", 21 ));

// Functions can be self-executing
// Immediately invoked function expressions IIFEs

var meal = function() {
	return { desc:"Noodles", price:4.75 }
} () ;

// Meal does not contain a function.
// Meal contains the result of running a function.

console.log( meal );

// We can pass parameters into an iife

var holiday = function( c,t ) {
	return { city:c, temp:t }
} ( "Rome", 28 ) ;

console.log(holiday );

// The module pattern uses CLOSURE to define a public API
// to safely encapsulate data.

var modulePattern = function( c,t ) {

	var city = c;
	var temp = t;

	function _setTemp(t) {
		temp=t;
	}
	function _getInfo() {
		return city + " is " + temp + " degrees."
	}

	// This object retains a memory of the variables and Functions
	// that were in scope at the time of its creation: CLOSURE.

	return {
		getInfo : _getInfo,
		setTemp : _setTemp
	}

}

var paris = modulePattern( "Paris", 28 );
paris.temp = "green";
console.log(paris.getInfo());
paris.setTemp(40);
console.log(paris.getInfo());

// The module pattern creates privacy. The city and temp values
// can only be accessed via the public API.

// ES6 offers a simpler alternative to this problem with modules.

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

// Equality: use strict equality to avoid implicit type coercion

console.log( 4 == "4" ); // true
console.log( 4 === "4" ); // false

// Truthy, falsy: every expression evaluates to true except for
// NaN, 0, false, "", undefined, null

console.log( 4 ? 			"truthy" : "falsy" );
console.log( -4 ? 			"truthy" : "falsy" );
console.log( "green" ? 		"truthy" : "falsy" );
console.log( [5,6,7,8] ? 	"truthy" : "falsy" );
console.log( {city:"Oslo"}? "truthy" : "falsy" );
console.log( {}	?		 	"truthy" : "falsy" );
console.log( []	?		 	"truthy" : "falsy" );

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
