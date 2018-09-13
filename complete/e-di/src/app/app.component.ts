
import { Component } from '@angular/core';
import { Item } from './types/item.type';
import { DataService } from "./service/data.service";
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

    shop:string;

    addr:{ street:string, postcode:string };

    fruit:Item[]; // Custom Typescript type defined in an Interface.

    basket = [];

    total:number=0;

    constructor( private ds:DataService, @Inject("config") private config ) {

        this.shop = config.shop;
        this.addr = config.addr;

        this.ds.getFruit().subscribe( fruit => this.fruit = fruit );
    }

    getAddr() : string {
        return this.addr.street + " " + this.addr.postcode
    }

    buyFruit( f ) : void {

        var copy = Object.assign({}, f);

        copy.id = Date.now();
        copy.price = f.price - f.discount;
        this.basket.push( copy );
        this.total += f.price;

        console.log( JSON.stringify( this.basket ));
    }

    empty() {
        this.basket = [];
    }

    removeItem( e ) {
      this.basket = this.basket.filter(
          function(o) {
           return o.id !== e.id
       })
    }

    getTotal() : number {
        return this.basket.map( o => o.price - o.discount ).reduce((a,b) => a+b ,0);
    }
}
