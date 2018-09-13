import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

    property = {
        street: "150 Minories, the City of London",
        value: 25
    }

	hypenate(s) {
		return s.trim().split(" ").join("-").toLowerCase()
	}

}
