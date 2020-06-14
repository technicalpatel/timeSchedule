import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  navbarStatus:Boolean=false
  userProfilename:String

  constructor(private navbarService:NavbarService,
    private router:Router
    ) {
    this.navbarService.navbarStatusSubject.subscribe(value=>{
      this.navbarStatus=value
    })

    this.navbarService.userProfilenameSubject.subscribe(value=>{
      this.userProfilename=value
    })
  }
  ngOnInit() {
  }

  logout(){
    this.navbarService.userCheckInLogout()
    this.router.navigate(['/user/login'])
  }
}
