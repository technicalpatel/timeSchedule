import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class NavbarService{

  navbarStatusSubject=new BehaviorSubject<Boolean>(true);
  userProfilenameSubject=new Subject<String>();

  constructor(){
  }


}
