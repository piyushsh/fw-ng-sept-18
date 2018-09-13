import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    phrases:{ es:string, en:string}[];

	constructor() {
		this.phrases = [
			{ es : "¿Tienes?", en:"Do you have" },
			{ es : "¿Dónde está", en:"Where is" },
			{ es : "Yo necesito", en:"I need" },
			{ es : "la cuenta", en:"the bill" }
		]
	}
}
