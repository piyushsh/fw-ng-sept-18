import {
    HostListener,Directive,ElementRef,Input,OnInit,
    Output,EventEmitter,HostBinding
} from '@angular/core';

@Directive({
  selector: '[limit]'
})
export class LimitDirective {

    quantity:number=0;

    @Input() maximum;
    @Output() more:EventEmitter<number> = new EventEmitter();

    @HostBinding('class.limit') isActive:boolean = false;

    constructor(elem: ElementRef) {
        console.log(elem.nativeElement);
    }

    ngOnInit() {
        console.log(this.maximum);
    }

    @HostListener('click') selectProduct(): void {

        // Emit a custom MORE event
        // until the maximum quantity is reached.

        if(this.quantity < this.maximum) {
            this.quantity++;
            this.more.emit( this.quantity );
        }

        // Add a LIMIT class to the parent TinCan component
        // once maximum is reached.

        this.isActive = (this.quantity >= this.maximum);
    }

}
