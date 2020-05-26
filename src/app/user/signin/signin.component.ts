import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/model/user';
import { UserServiceService } from 'src/app/shared/service/user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
// Form validation check validation
  validFormChecked:boolean=false;

// Date validation and all date section
  startDate=new Date();
  maxDate:Date;


  constructor(private userService:UserServiceService) {
    this.maxDate=new Date();
  }

  ngOnInit() {
  }


  // state and city section data
  states=["Gujarat","Goa"];
  stateSelected;
  selectedCitys;
  citys={
    "Gujarat":["Rajkot","Ahmedabad","Gondal"],
    "Goa":["Goa","Jua","Panji"]
  }
  cityChanges(){
    this.selectedCitys=this.citys[this.stateSelected];
  }

  userRegister(userRegisterForm:NgForm){
    if(userRegisterForm.invalid){
      this.validFormChecked=true;
    }
    if(userRegisterForm.valid){
      let user:User=userRegisterForm.value;
      this.userService.userRegistration(user);

    }
  }
}
