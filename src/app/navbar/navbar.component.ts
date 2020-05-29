import { Component, OnInit } from '@angular/core'
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  navbarStatus:Boolean=false
  userProfilename:String

  constructor(private navbarService:NavbarService) {
    this.navbarService.navbarStatusSubject.subscribe(value=>{
      this.navbarStatus=value
    })

    this.navbarService.userProfilenameSubject.subscribe(value=>{
      this.userProfilename=value
    })

  }
  ngOnInit() {
  }
}
