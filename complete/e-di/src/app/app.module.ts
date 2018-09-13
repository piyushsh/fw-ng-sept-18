import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { Config } from './config/app.config';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
