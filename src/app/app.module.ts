import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableUsageComponent } from './observable-usage/observable-usage.component';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/fromEvent';


@NgModule({
  declarations: [
    AppComponent,
    ObservableUsageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
