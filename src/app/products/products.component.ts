import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;

  constructor(productservice:ProductService) {
    this.products$ = productservice.getAll();
    
   }

  ngOnInit() {
  }

}
