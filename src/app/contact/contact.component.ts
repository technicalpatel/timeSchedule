import { Component, OnInit } from '@angular/core'
import { NavbarService } from '../../app/navbar/navbar.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private navbarService:NavbarService) {
        this.navbarService.userCheckInLogin()
   }

  ngOnInit() {
  }

}
