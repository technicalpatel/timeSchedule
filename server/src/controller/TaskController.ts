import { Request,Response, response } from 'express'
import { ITask } from '../interfaces/ITask'
import TaskSchema from '../model/Task.model'
import UserController from './userController'

class TaskController{
  constructor(){

  }
  addTask=async (req:Request,res:Response)=>{
    let taskData:ITask=req.body
    let userController=new UserController()
    let user_token=req.headers.time_schedule_user_token
    let user_email=req.headers.time_schedule_email
    let data=userController.userIsValid(user_token,user_email)
    data.then((value)=>{
      if(value[0].status=="OK"){
        taskData.user=value[0].id
        let TaskModel=new TaskSchema(taskData)
        TaskModel.save((error)=>{
          if(error){
            return res.status(200).json({status:"ERROR",message:"Task is not added"})
          }else{
            return res.status(200).json({status:"OK",message:"Task is added successfully"})
          }
        })
      }else{
        return res.status(200).send(value)
      }
    })
  }
}
export default TaskController
