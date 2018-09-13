
import {Pipe, PipeTransform, OnDestroy} from '@angular/core';

// The PURE property is required in order for the pipe to retain state.

@Pipe({
  name: 'timer',
  pure: false
})

export class TimerPipe implements PipeTransform, OnDestroy  {

  private interval: any;
  private counter: number = null;

  transform(value: number, time: number = 20): number {

    // counter is initially set to null not zero, so this condition
    // only runs once and not when the timer counts down to zero.

    if (this.counter === null) {
      this.counter = Number(value);
    }

    // Note: setInterval changes the context/meaning of THIS inside
    // method countDown. Bind fixes the value of THIS to this class.

    // Alternatively, use an anonymous ES6 arrow function here.
    // It will lexically bind THIS to its surrounding scope to solve the problem.
    
    if (!this.interval) {
      this.interval = setInterval( this.countDown.bind( this ) , time );
    }

    return this.counter;
  }

  countDown() {

    this.counter--;

    if (this.counter <= 0) {
      this.counter = 0;
      clearInterval(this.interval);
    }

    console.log( this.counter );

  }

  // ClearInterval does not happen if this Pipe is attached to a DOM element
  // that is removed unless we implement OnDestroy

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

// Multiple instances of setInterval may have performance implications.
