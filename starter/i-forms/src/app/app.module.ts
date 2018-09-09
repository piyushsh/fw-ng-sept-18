import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})

export class AppModule { }
