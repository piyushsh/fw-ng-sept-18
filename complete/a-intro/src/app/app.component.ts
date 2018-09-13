import { Component } from '@angular/core';

@Component({
  selector: 'weather',
  template: `
    <section class='news'>
    Hurricane <span>{{name}}</span> will arrive on Friday.
    </section>
  `,
  styles: [
      `.news{ font-size:1.5rem; font-family:tahoma}` ,
      `span{ color:orangered; letter-spacing:2px }`
  ]
})

export class WeatherComponent {
    name : string;
    constructor() {
        this.name = "Angular"
    }
}
