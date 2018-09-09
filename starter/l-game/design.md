
GAME
	- Displays the letters of a word, in a random order
	- User clicks on letters in correct order to spell word

	- Enhancement : Display clue about word.
	- Enhancement : does this for multiple words.


CSS

	.letter{
		position:relative;
		top:0;
		transition: 1s all;
	}

	.drop{
		top:100rem;
	}

	$( letter ).addClass("drop")

	-------------------------------

	.circle{
		position:relative;
		transition: 1s all;
		left:-100rem;
	}

	.moveOnScreen{
		left:0;
	}
	-------------------------------

JS

	var word = "squirrel";

	// Create array to store correct word
	var userAnswer = [];

	// Turn string into an array of letters
	var letters = word.split("");

	// Shuffle order of letters -> stack overflow

	// Use jQuery to draw each letter on screen
	// Here letter is a variable containing "a"

	function addLetter() {
		var circle = $("<p>" , { class:"letter" , text:letter } ).appendTo(".game");
		circle.on( "click" , selectLetter );
	}

	letters.forEach( addLetter )

	function selectLetter() {
		adds animation to make letter drop
		pushes letter into userAnswer

		if( word.length === userAnswer.length ) {
			// They have selected all letters
			// userAnswer.join("") turns array back to string > then compare
		}
	}

HTML

	load CSS in head
	load jQuery and your JS just before closing body tag.

	maybe use a Google font?

	<section class="game">
		// dynamically inserting letters into this section.
	</section>

    <p id="answer"> this is where the word appears </p>
