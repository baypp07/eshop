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
}
