import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ProductService } from '../services/product.service';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProdcutDetailComponent  implements OnInit  {
    @Input () product: Product;
    constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.productService.getProductById(params['id']))
            .subscribe(product => this.product = product);
            console.log(this.product);
    }
    goBack(): void {
        this.location.back();
    }
}

