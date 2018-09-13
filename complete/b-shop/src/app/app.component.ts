import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    shop:string;
    addr:{ street:string, postcode:string };
    fruit:{ type: string, price: number,instock:boolean,discount:number }[]
    basket = [];
    total:number=0;

    constructor() {
        this.shop = "Southwold Organics";

        this.addr = {
            street : "14 Dolphin Street, Southwold",
            postcode : "IP18 4HZ"
        }

        this.fruit = [
            { type: "Apples", price: 1.45,instock:true, discount:0.20 },
            { type: "Carrots", price: 1.85,instock:false, discount:0 }
        ];
    }

    getAddr() : string {
        return this.addr.street + " " + this.addr.postcode
    }

    buyFruit( f ) : void {
        this.basket.push( f );
        this.total += f.price;
    }
}
