
import { Component } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    AbstractControl,
    Validators } from '@angular/forms';

import { Observable, interval } from 'rxjs';
import { map, filter, scan, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    film :FormGroup;

    // Shorthand variables for the director-control and the title-control

    dc:AbstractControl;
    tc:AbstractControl;

    constructor( private fb: FormBuilder) {

        this.createForm();
    }

    createForm() {

        let config = {
          title :    [ "" , this.checkTitle ],
          director : [ "" , this.checkName ]
        }

	    this.film = this.fb.group( config );

        this.dc = this.film.controls.director;
        this.tc = this.film.controls.title;

        this.monitorForm();
    }

    // Check that director has at least two names.
    checkName( d:FormControl ) {

        let check = d.value.trim().split(" ").length >= 2;

        if( !check ) {
            return { shortName : "Minimum of two words" }
        }
    }

    // Require title case for all words in the film title.

    checkTitle( d:FormControl ) {

        let pattern = /^(?:[A-Z][^\s]*\s?)+$/;

        if( !pattern.test( d.value )) {
            return { titleCase : "Title Case for all words" }
        }
    }

    getError( f:FormControl ) {

        if( f.hasError("shortName")) { return f.errors.shortName }
        if( f.hasError("titleCase")) { return f.errors.titleCase }

        return "";

    }

    addFilm( film ) {
        if( film.valid ) {
            let empty = { title: "", director: ""};
            this.film.reset( empty );
        }
    }

    monitorForm() {
		this.film.valueChanges
            .forEach( control => console.log( control ))
    }
}
