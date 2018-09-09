import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TincanComponent } from './tincan/tincan.component';

import { ShopService } from "./service/shop.service" ;

@NgModule({
  declarations: [
    AppComponent,
    TincanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
