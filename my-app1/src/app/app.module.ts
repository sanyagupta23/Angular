import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CockpitComponent } from './products/cockpit/cockpit.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './BasicHighlightDirective';
import { BetterHighlightDirective } from './BetterHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CockpitComponent,
    ProductComponent,
    NumbersComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountsComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
