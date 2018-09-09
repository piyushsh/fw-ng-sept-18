import {
    Component,
    Input,
    SimpleChanges
} from '@angular/core';

import { Observable, interval } from 'rxjs';

import { ShopService } from "../service/shop.service" ;

@Component({
  selector: 'tincan',
  templateUrl: './tincan.component.html',
  styleUrls: ['./tincan.component.css']
})
export class TincanComponent {

    sequence;
    subscription;
    displaySeq : number;
    id : number;
    name : string;

    @Input() product;
    @Input() price;

    constructor() {}

    // ===============================================

    ngOnInit() {}

    ngOnDestroy() {}

    ngOnChanges() {}

    ngDoCheck() {}

    // ===============================================

    createSequence() {

        // Need to unsubscribe an Observable in OnDestroy.

        this.id = Date.now();
        this.sequence = interval(1000);

        this.subscription = this.sequence.subscribe( n => {
            this.displaySeq = n;
        });
    }

}
