import { Request,Response,NextFunction }  from 'express'
import UserController from '../controller/userController';
class SharedMiddleware{
  userController:UserController;
  constructor(){
    this.userController=new UserController()
  }

  public userIsValid=(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.headers)
    let response=this.userController.userIsValid(req.headers.time_schedule_user_token,req.headers.time_schedule_email)
    response.then((data)=>{
      if(data[0].status=="OK"){
        next();
      }else{
        res.status(200).send(data);
      }
    })
  }

}
export default SharedMiddleware
