import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http:HttpClient){

     }



  userRegistration(user:User){
    return new Promise((resolve,reject)=>{
      this.http.post('http://localhost:300/tm1/user/register',user)
      .subscribe((data)=>{
        if(!data){
          reject(data);
        }
        resolve(data);
      });
    });
  }

  userLogin(email,password){

    let userData={
      userEmail:email,
      userPassword:password
    }
    return new Promise((resolve,reject)=>{
      this.http.post('http://localhost:300/tm1/user/login',userData)
      .subscribe((data:any)=>{
        if(data.status=="ERROR"){
          reject(data)
        }else{
          resolve(data)
        }
      });
    });
   }

  userisValid(authToken){
    let data;
    return new Promise((resolve,reject)=>{

    })
  }

}
