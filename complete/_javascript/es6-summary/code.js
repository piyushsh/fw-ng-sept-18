
// ARROW functions ========================================

let double = n => n*2;
double(2);

// Adding a return keyword requires additional curly braces
let half = n => { return n/2; }
half(8);

// If you pass more than 1 argument, you need to add paretheses
let add = (a,b) => a+b;

// A function with NO arguments needs paretheses
let getYear = () => "2016";

// To return an object, wrap {} in ()
let createCity = ( c,n ) => ( {city:c, nation:n })
createCity("Oxford","UK");

// An anonymous arrow function
(a,b) => a*b ;

// A self-executing anonymous arrow function
((a,b) => a+b) (10,6);

// ================================================================

// FUNCTIONAL techniques using arrow functions.

let spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:1.2, temp:77,  },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:70,  },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:72,  },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:1.25, temp:72,  },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:76 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:0.7, temp:68 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:0.7, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galician", popl:0.2, temp:60 }
];

let draw = data => console.log(JSON.stringify( data ))

// Big cities
draw( spain.filter( city => city.popl > 1 ))

// City names
draw( spain.map( city => (city.name)))

// Names of big cities
draw( spain.filter( city => city.popl > 1 ).map( city => (city.name)))

// Sort by temp
draw( spain.sort( (a,b) => (a.temp < b.temp)))

// Total population
draw( spain.map( city => city.popl ).reduce( (a,b) => a+b ))

// ================================================================

let basket = ["apples","pears","oranges","plums","cherries"];

let createSection = fruit => "<section>" + fruit + "</section>"

let createArticle = list => "<article>" + list.map( createSection ).join("") + "</article>"

document.body.innerHTML += createArticle( basket );

// ================================================================
// Constants
// For complex objects/arrays, you are storing a constant reference.
// The properties/elements can still be changed.

const DENMARK = {
	lang : "Danish",
	capital : "Copenhagen"
}

DENMARK.lang = "Dansk";
DENMARK.capital = "København";

const fruit = [];

fruit.push( "Apples");
console.log( JSON.stringify( fruit ));

// Stop the array being changed.

const berries = Object.freeze( [] );

// ================================================================
// ES6 introduces LET variables, which have block-scope
// and are not hoisted.

for (let k=0; k < 5; k++) {
	//
}
console.log( typeof k === "undefined" );

// Lexical scoping is used for LET variables in loop constructs.
// Each function is passed its own independent copy of i.

// If we change this code to use VAR, every function shares the same copy
// of i because of closure. All functions return 10.

var fs = [];

for ( let j=0; j < 10; j++ ) {
  fs.push( function() {
	return j
  })
}

fs.forEach( function( f ) {
	console.log(f())
})

// ================================================================
// Template strings and interpolation
// Multi-line strings use back-tick character.

let cars = [
	{ name : "Checker Marathon", image : "checker-marathon.jpg" },
	{ name : "Chevrolet Impala", image : "chevrolet-impala.jpg" },
	{ name : "Cutlass Supreme", image : "cutlass-supreme.jpg" },
	{ name : "Ford Galaxie", image : "ford-galaxie.jpg" },
	{ name : "Grantorino Sport", image : "grantorino-sport.jpg" }
]

function createCar( carObj ) {

	let markup = `
		<section class="auto">
			<h2>${ carObj.name }</h2>
			<img src="cars/${ carObj.image }" />
		</section>
	` ;

	console.log(markup);
}

cars.forEach( createCar );
// =================================================================
// Destructuring


// ES6 destructuring

let flight = {
	from : {
        name : "London Gatwick",
        code : "LGW"
    },
	to : {
        name : "Seville",
        code : "SEV"
    },
	airline : "Iberia",
	ticket	: "Business",
    time : {
        depart	: "06.45",
    	arrive	: "10.15"
    },
	price : 205,
	currency : "euros"

}

let { name,code } = flight.from;
console.log( name,code );

let { name:toName,code:toCode } = flight.to;
console.log( toName,toCode );

let { time,ticket } = flight;
console.log( time,ticket  );

let { carhire = "Avis", airline = "BA" } = flight;
console.log( carhire, airline )

let { price:p = 150 , currency:c ="pounds" } = flight;
console.log( p,c );

// Nested destructuring
let { time:{depart}} = flight
// Nested destructuring and renaming
let { to:{name:dest}} = flight

// Destructure object returned from function =======================

let makeCity = (city,temp) => ({ city,temp })

let {city,temp} = makeCity("Seville",45);
let {city:ct,temp:tp} = makeCity("Seville",45);


// destructuring arrays ============================================

{
	let person = [ "John", "Elton", 42, "Green", "Street"];
	let [ last, first, age, party, town ] = person ;
}

{
	let m = [ "Fuji", "Japan", "4021", 40, 1842 ];
	let [ name, ...facts ] = m;

	console.log( name, facts );
}

// Create array from string and then destructure into variables

let degree = "york-msc-physics-2-2018-serc" ;

let [ univ, type, subject, duration, start, funding ] = degree.split("-");

console.log(univ, type, subject, duration, start, funding);

// ================================================================
// ES6 classes


// ES6 classes

class Rectangle {

    constructor(length, width) {
        console.log( "Rectangle" );
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

var rect = new Rectangle(6,4);
console.log( rect.getArea());

class Square extends Rectangle {

    constructor(length) {
        console.log( "Square" );
        super(length, length);
    }

    getArea() {
        return super.getArea() + " sq metres";
    }
}

var sq = new Square(4);
console.log( sq.getArea());

// The Rectangle class can be modified after an instance of the Square class
// has been created. The Square class immediately inherits this new method.

Rectangle.prototype.setLength = function(l) {
    this.length = l;
}

sq.setLength(10);
console.log( sq.getArea());

// ================================================================

// ES6 modules
// Use named imports and exports within modules with their own scope.

// export let reverse = word => word.split("").reverse().join("");
// import { reverse } from "./utils";
