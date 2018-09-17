import { Directive, ElementRef, Input, OnInit, HostListener, Output, HostBinding } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[maxBuy]'
})
export class MaxBuyDirective implements OnInit {

  @Input('maxBuy') maximum: number;
  @Output() select = new EventEmitter();
  @HostBinding("class.limit") limitExeceeded: boolean = false;


  private timesAdded: number = 0;

  private desc: string = "This is llimits maximum purchases";

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    console.log(this.maximum);
  }

  @HostListener('click') selectProduct() {
    if (this.timesAdded < this.maximum) {
      this.timesAdded++;
      this.select.emit();
    }
    if (this.timesAdded === this.maximum) {
      this.limitExeceeded = true;
    }
  }

}
