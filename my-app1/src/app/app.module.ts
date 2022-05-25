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
import { LoggingService } from './services/logging.service';
import { AccountService } from './services/account.service';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserviewComponent } from './users/userview/userview.component';
import { ObservablesComponent } from './observables/observables.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  {path:'observables', component:ObservablesComponent}
];

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
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UserviewComponent,
    ObservablesComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}