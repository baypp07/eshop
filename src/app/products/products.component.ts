import { ShoppingCartService } from './../services/shopping-cart.service';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart:any;
  subscription: Subscription;
 

  constructor(
    route:ActivatedRoute,
    productService:ProductService,
    private shoppingCartService : ShoppingCartService,
    ) {

    productService
    .getAll()
    .switchMap((products:Product[]) => { //run get product first and then category here we have 2 observable so we use switchmap
      this.products = products;
      return route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ? // if we have a category
      this.products.filter(p => p.category === this.category):
      this.products;
    });
   }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart())
    .subscribe(cart => this.cart = cart);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
