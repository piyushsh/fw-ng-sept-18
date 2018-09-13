import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    original:string = "Angular";
    word:string[]
    answer:string = "";
    gameOver:boolean = false;

    constructor() {
        this.word = this.original.split("");
        this.shuffle();
    }

    shuffle() {
        this.word = this.word.sort((a,b) => 0.5 - Math.random())
    }

    drawWord( char ) {
        this.answer += char;
        this.gameOver = ( this.answer === this.original )
    }
}
