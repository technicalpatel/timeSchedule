import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { TaskAdd } from '../model/taskAdd'
import { async } from '@angular/core/testing'

@Injectable({
  providedIn:'root'
})
export class TaskService{
  constructor(private http:HttpClient){}

  // async getToken() {
  //   this.token = localStorage.getItem('authorization');
  // }

  private async getHeaderWithToken() {
    let user_token=localStorage.getItem("time_schedule_user_token")
    let user_email=localStorage.getItem("time_schedule_email")
    let headers = new HttpHeaders()
    headers=headers.append("time_schedule_user_token",user_token)
    headers=headers.append("time_schedule_email",user_email)
    return headers;
  }

  getTasks(){
    return new Promise(async (resolve,reject)=>{
      this.http.get('http://localhost:300/tm1/work/all',{headers:await this.getHeaderWithToken()})
      .subscribe((response)=>{
        resolve(response)
      })
    })
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
