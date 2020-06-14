import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../app/navbar/navbar.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navbarService:NavbarService) {
    this.navbarService.userCheckInLogin()
  }

  ngOnInit() {
  }

}
