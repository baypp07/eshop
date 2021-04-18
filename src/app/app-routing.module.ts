import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { LoginComponent } from './core/components/login/login.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth-guard.service';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},

  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'order-success/:id', component: OrderSuccessComponent,canActivate: [AuthGuard]},
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
