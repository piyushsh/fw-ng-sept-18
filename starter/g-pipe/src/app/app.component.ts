import { Component, ViewEncapsulation } from '@angular/core';
import { SlugPipe } from './pipes/slug.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  course = {
    title: "Angular 6",
    location: "Dublin",
    delegates: 22,
    trainer: "John",
    date: new Date()
  };

  constructor(slugPipe: SlugPipe) {
    this.course.title = slugPipe.transform(this.course.title, "www.");
  }

}
