import { Component } from '@angular/core';
import { DataService, FakeService } from './services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	private film: string = "Taxi Driver";
	private actor: string = "Robert DeNiro";

	constructor(public ads: DataService) {
		this.actor = this.ads.getName();
	}
}
