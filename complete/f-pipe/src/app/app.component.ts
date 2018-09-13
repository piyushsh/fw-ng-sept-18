import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    conference = {
        title: "AngularCon",
        year: 2017,
        price: 745.50,
        byline:"the only Angular conference you need to attend"
    };

    today = new Date();
}
