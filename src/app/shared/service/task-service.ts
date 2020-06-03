import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { TaskAdd } from '../model/taskAdd'

@Injectable({
  providedIn:'root'
})
export class TaskService{
  constructor(private http:HttpClient){}

  // async getToken() {
  //   this.token = localStorage.getItem('authorization');
  // }

  private async getHeaderWithToken(user_token,user_email) {
    const headers = new HttpHeaders()
      .set("time_schedule_user_token",user_token)
      .set("time_schedule_email",user_email)
    return await headers;
  }

  addTask(user_token:string,user_email:string,addTask:TaskAdd){
    return new Promise(async (resolve,reject)=>{
      let headers = new HttpHeaders()
      headers=headers.append("time_schedule_user_token",user_token)
      headers=headers.append("time_schedule_email",user_email)
      this.http.post('http://localhost:300/tm1/work/add',addTask,{headers:headers})
      .subscribe((result)=>{
        resolve(result)
      },(error)=>{
        reject(error)
      })
    })
  }
}
