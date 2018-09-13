import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    state = true;

    product : any ;
    price : number;

    constructor() {
        this.reset();
    }

    reset() {

        this.product = {
            name:"Heinz",
            image:"heinz.jpg",
            info:"No added sugar 400g",
            stock:5 };

        this.price = 0.45;

    }

    remove() {
        this.state = false;
    }

    create() {

        this.state = true;
        this.reset();
    }

    buyStock() {
        this.product = Object.assign( {} , this.product );
        this.product.stock = Math.max( this.product.stock-1 , 0 );
    }

    increasePrice() {
        this.price += 0.10;
    }
}
