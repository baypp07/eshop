import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},

  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'order-success', component: OrderSuccessComponent,canActivate: [AuthGuard]},
  {path: 'my/orders', component: MyOrdersComponent,canActivate: [AuthGuard]},
  
  {path: 'admin/orders', component: AdminOrdersComponent,canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products/new', component: ProductFormComponent,canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products/:id', component: ProductFormComponent,canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products', component: AdminProductsComponent,canActivate: [AuthGuard, AdminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
