import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class NavbarService{
  navbarStatusSubject=new BehaviorSubject<Boolean>(true);
  navbarDialogStatus=new Subject<String>();
  userProfilenameSubject=new Subject<String>();

  constructor(){ }

  userCheckInLogin(){
    let email=localStorage.getItem("time_schedule_email")
    let token=localStorage.getItem("time_schedule_user_token")
    if(email&&token){
      this.navbarStatusSubject.next(false)
      this.userProfilenameSubject.next(email)
      return true
    }else{
      return false
    }
  }

  userCheckInLogout(){
    localStorage.setItem("time_schedule_user_token","")
    localStorage.setItem("time_schedule_email","")
    let email=localStorage.getItem("time_schedule_email")
    let token=localStorage.getItem("time_schedule_user_token")
    if(!(email&&token)){
      this.navbarStatusSubject.next(true)
      this.userProfilenameSubject.next("")
    }
    return false
  }

}
