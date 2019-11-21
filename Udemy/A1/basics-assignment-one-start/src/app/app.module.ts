import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FailureAlertComponent } from './failure-alert/failure-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    FailureAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
