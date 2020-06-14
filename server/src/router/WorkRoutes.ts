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

    let tasksAllMiddleware=[
      sharedMiddleware.userIsValid,
      taskController.getTaskAll
    ]
    this.routes.get("/all",tasksAllMiddleware)
  }
}
export default WorkRoutes
