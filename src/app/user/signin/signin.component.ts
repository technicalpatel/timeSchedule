import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

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


  constructor() {
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
      // console.log(
      // userRegisterForm.value.firstName +" "+
      // userRegisterForm.value.middleName +" "+
      // userRegisterForm.value.lastName +" "+
      // userRegisterForm.value.emailAddress +" "+
      // userRegisterForm.value.gender +" "+
      // userRegisterForm.value.state +" "+
      // userRegisterForm.value.city +" "+
      // userRegisterForm.value.birthDate +" "+
      // userRegisterForm.value.mobileNumber +" "+
      // userRegisterForm.value.password
      // );
    }
  }
}
