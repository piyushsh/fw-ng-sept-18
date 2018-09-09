import { Component,OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as Redux from 'redux'
import { TripStore } from '../redux/redux.store';
import { Trip } from '../redux/redux.state';
import { setHotel, setHireCar } from '../redux/redux.actions';

@Component({
  selector: 'app-dest',
  templateUrl: './dest.component.html',
  styleUrls: ['./dest.component.css']
})
export class DestComponent implements OnInit {

    fg:FormGroup;

    constructor(@Inject(TripStore) private store:Redux.Store<Trip>) {
        this.store.subscribe(() => console.log( this.store.getState() ));
    }

    ngOnInit() {
        this.fg = new FormGroup({
            hotel: new FormControl(),
            hirecar: new FormControl()
        });

        this.fg.controls.hotel.valueChanges.subscribe( data => this.changeHotel( data ))

        this.fg.controls.hirecar.valueChanges.subscribe( data => this.changeHireCar( data ))
    }

    changeHotel(s) {
        this.store.dispatch(setHotel(s));
    }

    changeHireCar(b) {
        this.store.dispatch(setHireCar(b));
    }
}
