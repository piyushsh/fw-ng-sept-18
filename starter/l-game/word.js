
// word.js

var word = "squirrel";

// Create array to store correct word
var userAnswer = [];

// Turn string into an array of letters
var letters = word.split("");

// Shuffle order of letters -> stack overflow
var letters = shuffle( letters );

letters.forEach( drawLetter );

function drawLetter( l ) {
	// Use jQuery to draw each letter on screen
	var circle = $("<p>" , { class:"letter" , text:l } ).appendTo(".game");
	// Add a click handler for each letter
	circle.on( "click" , selectLetter );

}


// selectLetter function pushes selected letter into userAnswer
// and makes letter "go away"

function selectLetter( e ) {

	var letter = $(e.target);
	userAnswer.push( letter.text() );

	letter.addClass("drop");

	$("#answer").text( userAnswer.join(""));

	letter.off( "click" , selectLetter );

	if( word.length === userAnswer.length ) {
		// They have selected all letters
		// userAnswer.join("") turns array back to string > then compare
		if( word === userAnswer.join("")) {
			$("#answer").addClass("correct")
		}
	}
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
	return a;
}
