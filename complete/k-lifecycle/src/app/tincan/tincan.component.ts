import {
    Component,
    Input,
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    SimpleChanges
} from '@angular/core';

import { Observable, interval } from 'rxjs';

import { ShopService } from "../service/shop.service" ;

@Component({
  selector: 'tincan',
  templateUrl: './tincan.component.html',
  styleUrls: ['./tincan.component.css']
})

export class TincanComponent implements OnInit,OnDestroy, OnChanges,DoCheck {

    sequence;
    subscription;
    displaySeq : number = 0;
    id : number;
    name : string;

    @Input() product;
    @Input() price;

    constructor( shop:ShopService ) {
        // Dependency Injection is passed in here.
        this.name = shop.getName();

        console.log("constructor", this.product);
        this.createSequence();

    }

    ngOnInit() {
        // Input bindings work here but not in the constructor
        console.log("ngOnInit", this.product);
    }

    ngOnDestroy() {
        // Called when a component instance is removed from the DOM.
        console.log("ngOnDestroy" , this);
        this.subscription.unsubscribe()
    }

    ngOnChanges( changes: SimpleChanges ) {
        // Called when inputs change.
        // Note object/array behave differently from number/string inputs.

        console.log( JSON.stringify( changes ));
    }

    ngDoCheck() {
        // Custom logic. Will pick up changes to array/object inputs.
        // Be wary of performance impact.
        console.log("ngDoCheck", this.price, this.product );
    }

    createSequence() {

        // Need to unsubscribe an Observable in OnDestroy.

        this.id = Date.now();
        this.sequence = interval(1000);

        this.subscription = this.sequence.subscribe( n => {
            this.displaySeq = n;
        });
    }

}
