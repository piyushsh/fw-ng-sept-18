import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookend'
})
export class BookendPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let defaultValue: string = "@";

    let bookEndChar = args ? args : defaultValue;
    return bookEndChar + value + bookEndChar;
  }
}
