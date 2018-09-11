
import { Component } from '@angular/core';

import {Item} from "./types/item.interface" ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    basket : Item[] = [];

    shop = {
      name : "Cheapside Organics",
      address : "14 Fenchurch St"
    }

    fruitVeg : Item[] =
    [
      new Item("Carrots",0.85,1204,0),
      new Item("Apples",0.65,1650,10),
      new Item("Oranges",-0.75,6574,0),
      new Item("Broccoli",-0.45,5675,45)
    ]

    getShop = ({name,address}) => name + " " + address;

    select = item => this.basket.push( {...item} );

    // reduce on empty array 
    getTotal = () => this.basket.map( item => item.price ).reduce((a,b) => a+b,0 );

    trackIndex = (index, item) => item.code ;


}
