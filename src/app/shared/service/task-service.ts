import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { TaskAdd } from '../model/taskAdd'

@Injectable({
  providedIn:'root'
})
export class TaskService{
  constructor(private http:HttpClient){}

  addTask(user_token:string,user_email:string,addTask:TaskAdd){
    return new Promise((resolve,reject)=>{
      let headers=new HttpHeaders()
      headers.set("time_schedule_user_token",user_token)
      headers.set("time_schedule_email",user_email)
      this.http.post('http://localhost:300/tm1/work/add',addTask,{headers:headers})
      .subscribe((result)=>{
        resolve(result)
      },(error)=>{
        reject(error)
      })
    })
  }

}
