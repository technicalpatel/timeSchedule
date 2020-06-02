import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar/navbar.service'
@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private navbarService:NavbarService) {
    this.navbarService.userCheckInLogin()
  }

  ngOnInit() {
  }

}
