import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,

  ) {
    this.categories$= categoryService.getCategories();
    let id = this.route.snapshot.queryParamMap.get('id');
    if(id) this.productService.get(id).take(1).subscribe(p=> this.product = p);
   }

   save(product){
     this.productService.create(product);
     this.router.navigate(['/admin/products']);
   }

  ngOnInit() {
  }

}
