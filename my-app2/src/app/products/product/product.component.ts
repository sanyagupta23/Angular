import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId: number = 10;
  productStatus: string = 'NotInStock';

  constructor() {}

  ngOnInit(): void {}

  getProductStatus() {
    return this.productStatus;
  }
}