import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DoublePipe } from './double.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { CapitalPipe } from './pipes/capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DoublePipe,
    ReversePipe,
    CapitalPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
