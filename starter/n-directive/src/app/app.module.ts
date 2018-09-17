import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TincanComponent } from './tincan/tincan.component';
import { MaxBuyDirective } from './directives/max-buy.directive';


@NgModule({
  declarations: [
    AppComponent,
    TincanComponent,
    MaxBuyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
