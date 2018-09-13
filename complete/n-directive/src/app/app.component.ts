import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    products = [
      { name:"Heinz",price:0.45,image:"heinz.jpg",info:"No added sugar",maximum:4},
      { name:"Duchy Organic",price:0.65,image:"duchy.jpg",info:"Added fibre",maximum:2},
      { name:"Mr Organic",price:0.75,image:"mr-organic.jpg",info:"Improved recipe",maximum:1},
      { name:"Whole Earth",price:0.84,image:"whole-earth.jpg",info:"Absolutely no added sugar",maximum:6},
    ]

    buyProduct( e ) {
        console.log("buyProduct",e);
    }
}
