import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      name: 'Laptop',
      stock: 200,
      availability: 'In Stock',
    },
    {
      name: 'Phone',
      stock: 100,
      availability: 'In Stock',
    },
    {
      name: 'Keyboard',
      stock: 50,
      availability: 'In Stock',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
