import { SharedModule } from './../shared/shared.module';
import { ShoppingModule } from './../shopping/shopping.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
  ],

  exports:[
    BsNavbarComponent,
  ]
})
export class CoreModule { }
