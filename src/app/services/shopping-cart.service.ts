import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor( 
    private db:AngularFireDatabase
  ) { }
  create(){
   return this.db.list('/shopping-carts').push({
     dateCreate: new Date().getTime()
   });
  }

  private getCart(cartId:string){
    return this.db.object('/shopping-cart' + cartId);
  }

  private getOrCreateCart(){
    let cartId = localStorage.getItem('cardId');
    if(!cartId){
      this.create().then(result => {
        localStorage.setItem('cartId', result.key);
        //add product to cart
        return this.getCart(result.key);
      });
      
    } else{
      //add product to cart
      return this.getCart(cartId);
    }
  }
}
