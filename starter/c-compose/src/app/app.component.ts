import { Component } from '@angular/core';
import {Item} from './item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  basket : Item[] = [];

  shop = {
      name: "Cheapside Organics",
      address : "14 FenChurch St."
  };

  fruitVeg : Array<Item> = [
    {name: "Carrots", price: 10, code:1001, quantity:0}, 
    {name: "Apples", price: 20, code:1002, quantity:10},
    {name: "Orange", price: 30, code:2001, quantity:21},
    {name: "Broccoli", price: 40, code:2203, quantity:0}
  ];

  getShop = ({name, address}) => name + " " + address;

  select = item => {
    item.quantity && this.basket.push({...item});
    this.reduceQuantity(item);
    //console.log(JSON.stringify(this.basket));
  }

  private reduceQuantity = (item) => {
    var itm = this.getItem(item, this.fruitVeg);
    itm.quantity > 0 ?  itm.quantity-- : "";
  };

  private getItem = (item, collection) => collection.find(x => x.code == item.code);

  count = item => {
    return this.basket.filter(i => i.name === item.name).length;
  };

  getTotal = () => {
    return this.basket.length != 0 ? this.basket
    .map((item) => item.price)
    .reduce((total,cost) => total + cost) : 0;
  };

  trackIndex = (index, item) => item.code;

  removeItem = (item) => {
    var itm = this.getItem(item, this.fruitVeg);
    itm.quantity++;
    this.basket = this.basket.filter(i => i != item);
  };
}
