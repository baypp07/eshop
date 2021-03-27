import { AppUser } from './../models/app-user';
import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;
  constructor(private auth: AuthService) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  ngOnInit() {
  }
  
  logout(){
    this.auth.logout();
  }

}
