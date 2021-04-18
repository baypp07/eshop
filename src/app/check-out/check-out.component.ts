import { ShoppingCart } from './../models/shopping-cart';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) {

  }
  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.subscription = cart$.subscribe(cart => this.cart = cart)

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  placeOrder() {
    console.log(this.shipping);
    let order = {
      datePlace: new Date().getTime(),
      shopping:this.shipping,
      items:this.cart.items.map(i => {
        return {
          product:{
            title:i.title,
            imageUrl:i.imageUrl,
            price: i.price
          },
          quantity:i.quantity,
          totalPrice: i.totalPrice
        }
      })
    }
  }
}
