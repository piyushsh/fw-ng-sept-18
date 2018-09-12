import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit { 

  basket : Array<Item> = [];

  constructor() { }

  ngOnInit() {
  }

  public select = item => {
    item.quantity && this.basket.push({...item});
  }

}
