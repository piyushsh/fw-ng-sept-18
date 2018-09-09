
// Start server:
// DEBUG=d nodemon server.js

// Test POST to server outside of the browser using CURL
// curl -d 'village=Dumping%20Green' http://localhost:4000/village/vote -w "\n"

// Fetch Polyfill for IE11 : https://github.com/github/fetch

let server = "http://localhost:4000";
let voteRoute = server + "/vote";
let getVotesRoute = server + "/getvotes";
let emptyRoute = server + "/empty";

// ===========================================================

let postCard = document.querySelector("img");

postCard.addEventListener( "click" , function() {
	getRoute( emptyRoute );
} )

// ===========================================================

let menu = document.querySelector(".menu");

menu.addEventListener( "change" , function(e) {

	e.preventDefault();

	let v = e.currentTarget.value;

	if(v !== "Vote") {
		let vote = JSON.stringify( { village:v });
		postRoute( vote );
	}
})

// ===========================================================

function draw( villages ) {

	let el = document.querySelector(".votes");
	el.innerHTML = "";

	villages.forEach( function(v) {

		let span = document.createElement("p")
		span.textContent = v
		span.setAttribute("class", "village")
		el.appendChild(span)

	})
}
// ===========================================================

function postRoute( vote ) {

	// HEADERS need to be defined, otherwise Node receives an empty request body,
	// even if bodyParser code is correctly set.

	fetch( voteRoute,
	{
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: vote
	})
	.then(function(res){
		return res.json();
	})
	.then(function( villages ){
		draw( villages)
	})
	.catch(function(error) {
		console.log(error.message)
	})

}

// ===========================================================

function getRoute( route ) {

	fetch( route,{ method: "GET" })
		.then(function(res){
			return res.json();
		})
		.then(function( villages ){
			draw( villages)
		})
		.catch(function(error) {

			console.log(error.message);

			postCard.classList.add("error")
			menu.classList.add("error")
		})
}

// ===========================================================

getRoute( getVotesRoute );
