import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sequence: Observable<number>;
  counter: number = 0;
  alphabet: Observable<string>;

  constructor() {
    this.createSequence();
    this.createAlphabets();
  }

  createSequence() {
    this.sequence = interval(1000).pipe(map(n => n * 4), take(20));
    this.sequence.subscribe(x => this.counter = x);
    console.log(this.sequence);
  }

  createAlphabets() {
    this.alphabet = interval(500)
      .pipe(take(26), map(a => String.fromCharCode(a + 65)));
  }

}
