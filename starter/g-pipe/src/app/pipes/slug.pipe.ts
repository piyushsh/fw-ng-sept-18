import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'slug'
})

@Injectable({
  providedIn: 'root'
})
export class SlugPipe implements PipeTransform {

  transform(story: string, server: string): string {

    const FILE_EXT = ".html";
    let prefix = server ? server : "http://";
    let slug = story.trim().toLowerCase().split(" ").join("-");
    return prefix + slug + FILE_EXT;
  }

}
