import { Router } from 'express';
import UserController from '../controller/userController';
import UserMiddleware from '../middleware/UserMiddleware';

class UserRoutes{

  public routes=Router();

  constructor(){
    let userMiddleware=new UserMiddleware();
    let userController=new UserController();

    this.routes.post('/register',userMiddleware.checkUserIsExists,userController.userRegister);
  }
}

export default UserRoutes;
