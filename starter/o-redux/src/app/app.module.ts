import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AirportComponent } from './airport/airport.component';
import { DestComponent } from './dest/dest.component';

import { storeProvider } from './redux/redux.store';


@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,DestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [storeProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
