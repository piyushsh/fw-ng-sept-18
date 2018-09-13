
import { Component } from '@angular/core';

import { Item } from './types/item.type';

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

    constructor() {
        this.shop = "Smethwick Organics";

        this.addr = {
            street : "14 Sandwell Lane, Smethwick",
            postcode : "IP18 4HZ"
        }

        this.fruit = [
            { type: "Pears", price: 1.85,instock:true, discount:0.40 },
            { type: "Potatoes", price: 0.75,instock:false, discount:0 },
            { type: "Apples", price: 1.45,instock:true, discount:0.20 },
            { type: "Carrots", price: 1.85,instock:false, discount:0 }
        ];
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
