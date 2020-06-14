import { Request,Response,NextFunction } from 'express';
import UserController from '../controller/userController';

class UserMiddleware{
  UserController:UserController;
  constructor(){
    this.UserController=new UserController();
  }

  public checkUserIsExists=async (req:Request,res:Response,next:NextFunction)=>{
    let result=await this.UserController.userLoginCheck(req.body.userEmail,req.body.userPassword)
    if(result[0].status=="OK"){
      return res.status(200).json(result[0]);
    }else{
      return res.status(200).json(result[0]);
    }
  }

  public bodyCheck=(req:Request,res:Response,next:NextFunction)=>{
    if(Object.keys(req.body).length==0){
      return res.status(200).send({status:"ERROR",message:"Body is null"});
    }else{
      next()
    }
  }
}
export default UserMiddleware;
