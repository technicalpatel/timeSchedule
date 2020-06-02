import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../shared/service/user-service.service'
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // data is blank and login
  validFormChecked=false;
  loginValid;

  constructor(private userService:UserServiceService,
              private router:Router,
              private navbarService:NavbarService) {
  }

  ngOnInit() {
  }

  userLogin(userLoginForm:NgForm){
    if(userLoginForm.invalid){
      if(userLoginForm.controls.userEmail.value=="" && userLoginForm.controls.userPassword.value==""){
        this.validFormChecked=true;
        return false;
      }
      return false;
    }
    if(userLoginForm.valid){
      let userEmail=userLoginForm.controls.userEmail.value;
      let userPassword=userLoginForm.controls.userPassword.value;
      this.userService.userLogin(userEmail,userPassword).then(
        (result:any)=>{
          localStorage.setItem("time_schedule_user_token",result.userToken);
          localStorage.setItem("time_schedule_email",result.email);

          this.navbarService.userCheckInLogin();
          this.router.navigate(['/home'])
        },(reject)=>{
          this.loginValid=reject.message;
          localStorage.setItem("time_schedule_user_token","");
        });
    }
  }
}
