
function simple() {

	// Generate a series of numbers once a second for ever.
	// Change interval(50)
	// Limit the series with take(10)
	// Transform the series with .map( v => v * 2)

	let ob = Rx.Observable
		.interval(1000)
		.subscribe(v => draw(v));

}

function alphabet() {

	let alphabet = Rx.Observable
		.interval(50)
		.take(26)
		.map( v => String.fromCharCode( v+65 ))

	// The observable moves from COLD to HOT and starts to push out numbers
	// when it gets its first subscriber.

	alphabet.subscribe(value => draw(value));

}

function clicks() {

	let b = document.querySelector("body")

	let clicks = Rx.Observable
		.fromEvent( b , 'click' )
		.filter( e => e.clientX > 100 )
		.map( v => v.clientX )
		.subscribe(v => draw(v));
}

function keyboard() {

	let city = document.getElementById("city");

	let letters = Rx.Observable
		.fromEvent( city , 'keypress' )
		.map( v => v.key )
		.map( v => v.toUpperCase())
		.subscribe(v => draw(v))
}

function fourBases() {

	let fourBases = [ "adenine", "guanine", "cytosine", "thymine" ]

	let dnaSequence = Rx.Observable
		.interval(100)
		.map( v => fourBases[Math.floor(Math.random() * fourBases.length)])

	dnaSequence.subscribe(value => drawClass(value,value));

}

// =============================================================================

function draw(v) {
	var debug = document.querySelector(".demo");
	var span = document.createElement("span")
	span.textContent = v
	span.classList.add("word")
	debug.appendChild(span)
}

function drawClass(v,c) {
	var debug = document.querySelector(".demo");
	var span = document.createElement("span")
	span.classList.add("word");
	span.classList.add(c)
	debug.appendChild(span)
}
