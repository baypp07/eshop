import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db: AngularFireDatabase
  ) { }
  
  create(product){
    this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products');
  }

  get(productId){
    return this.db.object('/products/' + productId);
  }

  update(productID, product){
    return this.db.object('/products/' + productID).update(product);
  }

}
