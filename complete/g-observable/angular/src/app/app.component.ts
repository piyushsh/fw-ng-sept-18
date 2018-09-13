
import { Component } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { map, filter, scan, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sequence : Observable<number>;
  counter : number ;

  alphabet: Observable<string>;

    constructor() {
        this.createSequence();
        this.createAlphabet();
    }

    createSequence() {

        // Note RxJS version 6 syntax.

        this.sequence = interval(250);

        this.sequence
            .pipe(take(20),map(n => n * 4))
            .subscribe( n => this.counter = n );
    }

    createAlphabet() {

        this.alphabet = interval(250)
        .pipe(take(26),map(n => String.fromCharCode(65 + n)));

        // async pipe in template avoids need for subscribe() code.

    }

}
