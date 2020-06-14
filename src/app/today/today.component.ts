import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/service/task-service'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  taskAllData:any;
  taskAllDataStatus:boolean;
  taskProgressStatus:boolean=true;

  constructor(private taskService:TaskService) {
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
