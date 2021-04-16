import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart:any;
  cart$:Observable<ShoppingCart>;
 

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private shoppingCartService : ShoppingCartService,
    ) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts(){
    this.productService
    .getAll()
    .switchMap((products:Product[]) => { //run get product first and then category here we have 2 observable so we use switchmap
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }

  private applyFilter(){
    this.filteredProducts = (this.category) ? // if we have a category
      this.products.filter(p => p.category === this.category):
      this.products;

  }
}
