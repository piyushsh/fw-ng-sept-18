import { Component } from '@angular/core';
import {Phrase} from './phrase.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  phrases : Array<Phrase> = [
    { text : "¿Tienes?", translation:"Do you have", toggle: false },
    { text : "¿Dónde está", translation:"Where is", toggle: false },
    { text : "Yo necesito", translation:"I need", toggle: false },
    { text : "la cuenta", translation:"the bill", toggle: false } 
  ];

}
