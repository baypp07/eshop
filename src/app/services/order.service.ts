import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db:AngularFireDatabase,
    private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order){
    this.db.list('/oders').push(order);
    let result =  this.shoppingCartService.clearCart();
    return result;
  }
}
