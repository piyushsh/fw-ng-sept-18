import { Component } from '@angular/core';
import { FormBuilder,FormGroup,AbstractControl,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    SERVER : string = "http://localhost:4000/";
    GET_VOTES : string = this.SERVER + "getVotes";
    VOTE : string = this.SERVER + "vote";
    EMPTY : string = this.SERVER + "empty";

    fg :FormGroup;
    votes : any;

    villages : string[];

    constructor(
        private fb:FormBuilder,
        private http: HttpClient ) {
        this.setupForm();
    }

    setupForm() {

        this.villages = [ "Dumpling Green","Fiddlers Green","Snettisham","Little Snoring","Melton Constable" ];

        this.fg = this.fb.group( { village:new FormControl('village') } );

        this.fg.valueChanges.subscribe(
        form => this.selectVillage(form));

    }

    selectVillage( form ) {
        console.log( form );
    }

}
