import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allowNewProduct = true;
  productCreationStatus = 'No Product created';
  productName = '';
  productDescription = 'Default Description';
  username = '';
  
  productCreated=false;

 

  constructor() {}

  ngOnInit(): void {}

  onProductCreate() {
    this.productCreationStatus = 'Product was created';
    this.productCreated = true;
  }

  onUpdateProductName(event: any) {
    this.productName = event.target.value;
  }
 
}