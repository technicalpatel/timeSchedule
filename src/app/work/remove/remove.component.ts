import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar/navbar.service'
import { TaskService } from 'src/app/shared/service/task-service';
@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  taskAllData:any;
  taskAllDataStatus:boolean;
  taskProgressStatus:boolean=true;

  constructor(private navbarService:NavbarService,
    private taskService:TaskService) {
    this.navbarService.userCheckInLogin()
    this.getTasks()
  }
  getTasks=async ()=>{
    await this.taskService.getTasks().then((response:any)=>{
      if(response.status=="OK"){
        this.taskAllData=response.data
        if(this.taskAllData){
          this.taskProgressStatus=false
        }
      }else if(response.status=="ERROR"){
        // this.taskAllDataStatus=true;
      }
    },(error)=>{

    })
  }

  ngOnInit() {
  }

}
