import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'tincan',
  templateUrl: './tincan.component.html',
  styleUrls: ['./tincan.component.css']
})
export class TincanComponent implements OnInit {

    @Input() product;

    constructor() {}
    
    ngOnInit() {
        console.log(this.product);
    }

}
