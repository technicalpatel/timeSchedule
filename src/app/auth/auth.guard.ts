import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { UserServiceService } from '../shared/service/user-service.service';
import { NavbarService } from '../../app/navbar/navbar.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService:UserServiceService,
    private navbarService:NavbarService){
  }

  canActivate(){
      if(this.navbarService.userCheckInLogin()){
        return true;
      }else{
        if(!this.navbarService.userCheckInLogout()){
          this.navbarService.navbarDialogStatus.next("OPEN")
          return false;
        }
      }
  }
}
