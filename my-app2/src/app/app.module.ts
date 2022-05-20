import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppSuccessAlertComponent } from './app-success-alert/app-success-alert.component';
import { WarningAlertComponent } from './app-warning-alert';

@NgModule({
  declarations: [
    AppComponent,
    AppSuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
