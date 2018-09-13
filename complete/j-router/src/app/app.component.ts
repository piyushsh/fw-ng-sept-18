import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor( private router: Router ) {}

    goRadio( n ) {
        this.router.navigate(['radio',n ]);
    }

    goChannel( channel ) {
        this.router.navigate( ['tv' , channel ] );
    }
}