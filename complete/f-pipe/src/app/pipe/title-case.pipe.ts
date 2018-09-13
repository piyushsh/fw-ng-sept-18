import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any): any {

      return value.replace(/\w\S*/g, function(word) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      });
  }

}
