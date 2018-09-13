import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleCasePipe } from './pipe/title-case.pipe';
import { HyphenPipe } from './pipe/hyphen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe,
    HyphenPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
