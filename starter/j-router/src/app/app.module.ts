import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TvComponent } from './tv/tv.component';
import { RadioComponent } from './radio/radio.component';

import { AppRoutes } from "./routes/app.routes";

import { Radio4Component } from './radio/radio4/radio4.component';
import { Radio11Component } from './radio/radio11/radio11.component';

import { PayRadio } from './guard/PayRadio';

@NgModule({
  declarations: [
    AppComponent, TvComponent, RadioComponent, Radio4Component, Radio11Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: true, useHash: false })
  ],
  providers: [PayRadio],
  bootstrap: [AppComponent]
})

export class AppModule { }
