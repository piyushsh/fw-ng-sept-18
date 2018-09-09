
import { Component, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as Redux from 'redux'
import { TripStore } from './redux/redux.store';
import { Trip } from './redux/redux.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    trip:object;

    constructor(@Inject(TripStore) private store:Redux.Store<Trip>) {
        store.subscribe(() => this.updateMessage());
        this.updateMessage()
    }

    updateMessage() {
        this.trip = this.store.getState()
    }
}
