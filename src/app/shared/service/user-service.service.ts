import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  userRegistration(user:User){
    console.log(user);
  }

}
