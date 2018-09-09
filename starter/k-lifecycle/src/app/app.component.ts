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

    // ===============================================
    
    remove() {}

    create() {}

    buyStock() {}

    increasePrice() {}

    // ===============================================
}
