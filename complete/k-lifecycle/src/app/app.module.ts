import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TincanComponent } from './tincan/tincan.component';

import { ShopService } from "./service/shop.service";
import { TimerPipe } from './timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TincanComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
