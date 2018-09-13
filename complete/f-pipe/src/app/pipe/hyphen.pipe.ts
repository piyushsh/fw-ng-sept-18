import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphen'
})
export class HyphenPipe implements PipeTransform {

    //   story : string = "Bank cuts Base rate" ;
    //   <h1>{{ story | hyphen }}</h1>

  transform(value: any, fileExtn:string ): any {

    if( typeof value === "string" ) {
        value = fileExtn ? value + fileExtn : value;
        return value.split(" ").join("-").toLowerCase() ;
    } else {
        return value;
    }

  }
}
