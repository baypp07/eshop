import { ShoppingCart } from './../models/shopping-cart';
import { OrderService } from './../services/order.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart:ShoppingCart;
  shipping = {};
  userId:string;
  userSubscription: Subscription;
  constructor(
    private orderService: OrderService,
    private authService : AuthService,
    private router:Router,
    ) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    // this.router.navigate(['/order-success', result.key]);

  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
