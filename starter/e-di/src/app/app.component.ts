import { Component, OnInit } from '@angular/core';
import { Item } from './item.interface';
import { DataService } from './services/data.service';
import { Config } from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  basket: Item[] = [];
  shop: object = Config.SHOP;
  fruitVeg: Array<Item> = [];

  constructor(private dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.dataService.getDataUsingPromise(`http://localhost:4000/`)
      .then(data => this.fruitVeg = <Item[]>data);
  }

  getShop = ({ name, address }) => name + " " + address;

  select = item => {
    item.quantity && this.basket.push({ ...item });
    this.reduceQuantity(item);
  }

  private reduceQuantity = (item) => {
    var itm = this.getItem(item, this.fruitVeg);
    itm.quantity > 0 ? itm.quantity-- : "";
  };

  private getItem = (item, collection) => collection.find(x => x.code == item.code);

  count = item => {
    return this.basket.filter(i => i.name === item.name).length;
  };

  getTotal = () => {
    return this.basket.length != 0 ? this.basket
      .map((item) => item.price)
      .reduce((total, cost) => total + cost) : 0;
  };

  trackIndex = (index, item) => item.code;

  removeItem = (item) => {
    var itm = this.getItem(item, this.fruitVeg);
    itm.quantity++;
    this.basket = this.basket.filter(i => i != item);
  };
}
