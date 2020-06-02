import { Router } from 'express'
import  TaskController  from '../controller/TaskController'
import  SharedMiddleware from '../middleware/SharedMiddleware'

class WorkRoutes{
  public routes=Router()

  constructor(){
    let sharedMiddleware=new SharedMiddleware()
    let taskController=new TaskController()

    let addWorkMiddleware=[
      sharedMiddleware.userIsValid,
      taskController.addTask
    ]
    this.routes.post("/add",addWorkMiddleware)
  }
}
export default WorkRoutes
