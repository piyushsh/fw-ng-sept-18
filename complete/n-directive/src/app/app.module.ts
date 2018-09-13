import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TincanComponent } from './tincan/tincan.component';
import { LimitDirective } from './directive/limit.directive';


@NgModule({
  declarations: [
    AppComponent,
    TincanComponent,
    LimitDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
