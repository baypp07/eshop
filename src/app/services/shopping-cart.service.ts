import { ShoppingCart } from './../models/shopping-cart';
import { Product } from './../models/product';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor( 
    private db:AngularFireDatabase
  ) { }

  private create(){
   return this.db.list('/shopping-carts').push({
     dateCreated: new Date().getTime()
   });
  }

  async getCart():Promise<Observable<ShoppingCart>>{
    let cartId= await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
    .map((x:any) => new ShoppingCart(x.items));
  }

  private getItem(cartId: string, productId:string){
   return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

      let result = await this.create();
        localStorage.setItem('cartId', result.key);
        return result.key;
  }

  async addToCart(product:Product){
    this.updateItemQuantity(product, 1);
  }
  // async addToCart(product:Product){
  //   let cartId = await this.getOrCreateCartId();
  //   //set idcart the same as idproduct we dont want to declare unnecessary id
  //   let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.$key);
  //   item$.take(1).subscribe(item => {
  //     if(item.$exists())item$.update({ quantity: item.quantity + 1});
  //     else item$.set({product: product, quantity:1});
  //   });
  // }
  async removeFromCart(product:Product){
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product:Product, change:number){
    let cartId = await this.getOrCreateCartId();
    //set idcart the same as idproduct we dont want to declare unnecessary id
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe((item: any) => {
     item$.update({ product:product, quantity: (item.quantity || 0) + change});
    });

  }

}