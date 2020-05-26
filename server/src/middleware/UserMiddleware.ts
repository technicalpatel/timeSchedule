import { Request,Response,NextFunction } from 'express';
class UserMiddleware{
  constructor(){}

  public checkUserIsExists=(req:Request,res:Response,next:NextFunction)=>{
      if(req){
        console.log("CHECK MIDDLEWARE CALLED");
        next();
      }
  }
}
export default UserMiddleware;
