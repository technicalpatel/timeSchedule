import { Component, OnInit, OnChanges } from '@angular/core';
declare var $: any;
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  validFormChecked:boolean=false;
  states=["Gujarat","Goa"];
  stateSelected;
  selectedCitys;

  citys={
    "Gujarat":["Rajkot","Ahmedabad","Gondal"],
    "Goa":["Goa","Jua","Panji"]
  }
  startDate=new Date();
  maxDate:Date;
  constructor() {
    this.maxDate=new Date();
  }

  ngOnInit() {
  }
  cityChanges(){
    this.selectedCitys=this.citys[this.stateSelected];
  }

  userRegister(userRegisterForm:NgForm){
    if(userRegisterForm.invalid){
      this.validFormChecked=true;
    }
    if(userRegisterForm.valid){
      alert(userRegisterForm.value);
    }
  }
}
