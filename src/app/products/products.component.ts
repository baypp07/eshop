import { Product } from './../models/product';
import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  categories$;

  constructor(
    route:ActivatedRoute,
    productService:ProductService,
    categoryService:CategoryService
    ) {

    productService
    .getAll()
    .switchMap((products:Product[]) => {
      this.products = products;
      return route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ? 
      this.products.filter(p => p.category === this.category):
      this.products;
    });
    this.categories$ = categoryService.getAll();
   }

  ngOnInit() {
  }

}
