import { Component,OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as Redux from 'redux'
import { TripStore } from '../redux/redux.store';
import { Trip } from '../redux/redux.state';
import { setAirport, setParking } from '../redux/redux.actions';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})

export class AirportComponent implements OnInit {

    fg:FormGroup;

    constructor(@Inject(TripStore) private store:Redux.Store<Trip>) {
        this.store.subscribe(() => console.log( this.store.getState() ));
    }

    ngOnInit() {
        this.fg = new FormGroup({
            airport: new FormControl(),
            parking: new FormControl()
        });

        this.fg.controls.airport.valueChanges.subscribe( data => this.changeAirport( data ))

        this.fg.controls.parking.valueChanges.subscribe( data => this.changeParking( data ))
    }

    changeAirport(s) {
        this.store.dispatch(setAirport(s));
    }

    changeParking(b) {
        this.store.dispatch(setParking(b));
    }
}
