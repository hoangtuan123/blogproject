import { Component, OnInit  } from '@angular/core';

import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProductAll()
      .subscribe(
        products => this.products = products,
        error => console.log(error)
      );
  }
}
