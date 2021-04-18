import { AppRoutingModule } from './../app-routing.module';
import { DataTableModule } from 'angular5-data-table';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';



@NgModule({
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],

  providers: [
    AdminAuthGuard,
  ],

  imports: [
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
