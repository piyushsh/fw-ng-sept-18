import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WeatherComponent } from './app.component';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})
export class AppModule { }
