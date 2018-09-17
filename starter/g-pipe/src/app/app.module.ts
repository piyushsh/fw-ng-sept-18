import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookendPipe } from './pipes/bookend.pipe';
import { SlugPipe } from './pipes/slug.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookendPipe,
    SlugPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
