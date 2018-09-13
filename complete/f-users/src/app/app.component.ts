
import { Component,OnInit } from '@angular/core';
import {DataService} from "./services/data.service" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    USERS_API : string = "https://randomuser.me/api/?results=4" ;
    users = [];

    constructor( private ds:DataService ) {}

    ngOnInit() {
        this.ds.getData( this.USERS_API ).subscribe( data => this.createUsers(data));
    }

    createUsers( data ) {
      this.users = data.results.map( this.getPerson );
    }

    getPerson(p) {

      let {first,last} = p.name;
      let {city} = p.location;
      let {medium} = p.picture;
      let {email} = p;

      return { first,last,city,medium,email }
    }

}
