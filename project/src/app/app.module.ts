import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CreateComponent } from './create/create.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoute : Routes = [
{path: '' , component:HomeComponent},
{path : 'products' , component:ProductsComponent},
{path:'create' , component:CreateComponent},
{path:'about' , component:AboutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CreateComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule ,FormsModule,RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
