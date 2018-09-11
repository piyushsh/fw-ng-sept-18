import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../app.component.css']
})

export class ItemComponent implements OnInit {

    @Input() item;
    @Output() select = new EventEmitter();

    constructor() {}
    ngOnInit() {}

}
