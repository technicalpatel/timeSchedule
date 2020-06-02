import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar/navbar.service'
@Component({
  selector: 'app-competed',
  templateUrl: './competed.component.html',
  styleUrls: ['./competed.component.css']
})
export class CompetedComponent implements OnInit {

  constructor(private navbarService:NavbarService) {
    this.navbarService.userCheckInLogin()
  }

  ngOnInit() {
  }

}
