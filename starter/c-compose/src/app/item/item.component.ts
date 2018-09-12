import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./../app.component.css', './item.component.css'],
})
export class ItemComponent implements OnInit {

  @Input() item : Item;

  @Output() select = new EventEmitter();

  constructor() { 
   
  }

  ngOnInit() {
    console.log("Showing item", this.item);
  }
}
