import { ShoppingCartService } from './../services/shopping-cart.service';
import { Product } from './../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions=true;

  constructor(
    private shoppingCartService:ShoppingCartService,
  ) { }

  addToCard(product:Product){
    let cartId = localStorage.getItem('cardId');
    if(!cartId){
      this.shoppingCartService.create().then(result => {
        localStorage.setItem('cartId', result.key);

        //add product to cart

      });
      
    } else{
      //add product to cart
    }
  }

  ngOnInit() {
  }

}
