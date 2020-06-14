import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar/navbar.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {  TaskAdd } from '../../shared/model/taskAdd'
import { TaskService } from '../../shared/service/task-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  taskhead:boolean
  taskname:boolean
  taskStatus:boolean
  taskAddSuccess:boolean

  mindata:Date=new Date()
  addTaskForm:FormGroup

  constructor(private navbarService:NavbarService,
    private taskService:TaskService,
    private router:Router) {
    this.navbarService.userCheckInLogin()
  }

  ngOnInit() {
    // let nameValidation=`/([^\s])([\s{1}]*[a-zA-Z]*[\s{1}])/`
    this.addTaskForm=new FormGroup({
      task_heading:new FormControl(null,[Validators.required]),
      task_name:new FormControl(null,[Validators.required]),
      task_description:new FormControl(null,[Validators.required]),
      task_start_date:new FormControl(null,[Validators.required]),
      task_end_date:new FormControl(null,[Validators.required])
    })
  }

  taskAdd(){
    if(this.addTaskForm.valid){
      let user_token=localStorage.getItem("time_schedule_user_token")
      let user_email=localStorage.getItem("time_schedule_email")
      let task_add:TaskAdd=this.addTaskForm.value
      let result=this.taskService.addTask(user_token,user_email,task_add)
      result.then((result:any) => {
        if(result.status=="OK"){
          this.taskAddSuccess=true
          setTimeout(()=>{
            this.router.navigate(['/today'])
          },2000)
        }else{
          this.taskStatus=true
        }
      }).catch((err) => {
      });
    }else{
      return false;
    }
  }
}
