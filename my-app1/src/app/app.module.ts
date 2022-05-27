import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CockpitComponent } from './products/cockpit/cockpit.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './BasicHighlightDirective';
import { BetterHighlightDirective } from './BetterHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserviewComponent } from './users/userview/userview.component';
import { ObservablesComponent } from './observables/observables.component';
import { ServersComponent } from './servers/servers.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { TFormsComponent } from './tforms/tforms.component';
import { RFormsComponent } from './rforms/rforms.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'tforms', component: TFormsComponent },
  { path: 'rforms', component: RFormsComponent },
  { path: 'blog', component: BlogComponent },

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
    ServersComponent,
    ShortenPipe,
    FilterPipe,
    HomeComponent,
    TFormsComponent,
    RFormsComponent,
    BlogComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}