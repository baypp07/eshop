import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  categories$

  constructor(productservice:ProductService, categoryService:CategoryService) {
    this.products$ = productservice.getAll();
    this.categories$ = categoryService.getAll();
    
   }

  ngOnInit() {
  }

}
