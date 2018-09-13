import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Angular 6 : defining this providedIn property means this service
// does not need to be defined as a provider in app.module.ts.

@Injectable(
    { providedIn : 'root' }
)
export class DataService {

    path = "assets/data/fruit.json";

    constructor( private http: HttpClient ) {}

    getFruit() : any {
         return this.http.get( this.path );
    }
}
