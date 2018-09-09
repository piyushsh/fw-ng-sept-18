## Angular 6 Training Course
## Exercise L-game

#### Intro

- This exercise converts a word game built in jQuery to work in Angular.
- The game displays the letters of a word in random order. The user needs to click on the letters in the correct order to spell the word.
- Play the game at **useful/word-game.html**
- Take any relevant code from **word.js** and **style.css**.

#### Angular implementation

- Define a variable containing the word.

		    word : string = "squirrel";
		    
- Using split() and an array-shuffle function, create a randomised array of letters.
- Using *ngFor to iterate over the array.

			<p *ngFor="let l of letters">{{ l }}</p>
			
#### Letter component

- Create a letter component to display each letter.
- Pass a letter in as an **Input**.
- The component will emit a select event as an **Output** when clicked on.
- The main component would contain code like:

		    <app-letter *ngFor="let l of letters"
		    [letter]="l" (select)="addLetter(l)" ></app-letter>		
		    
- The addLetter method could set a boolean to true.
- The CSS drop class will be applied to the letter when clicked on

			<p class="letter" (click)="select()"
			[ngClass]="{ 'drop' : selected }">{{ letter }}</p>
			
#### Game Over

- The word can be revealed as the user types.
- It turns green if they have spelt the word correctly.

		<p id="answer" 
		[ngClass]="{ 'correct' : game }">{{ userWord }}</p>			