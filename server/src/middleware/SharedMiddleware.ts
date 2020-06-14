import { Request,Response,NextFunction }  from 'express'
import UserController from '../controller/userController';
class SharedMiddleware{
  userController:UserController;
  constructor(){
    this.userController=new UserController()
  }

  public userIsValid=async (req:Request,res:Response,next:NextFunction)=>{
    if(!(req.headers.time_schedule_user_token&&req.headers.time_schedule_email)){
      return res.status(200).json({status:"ERROR",message:"Header is not sent"})
    }
    let response=await this.userController.userIsValid(req.headers.time_schedule_user_token,req.headers.time_schedule_email)
    if(response[0].status=="OK"){
      next()
    }else{
      return res.status(200).json(response)
    }
  }
}
export default SharedMiddleware
