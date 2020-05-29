import { Router } from 'express';
import UserController from '../controller/userController';
import UserMiddleware from '../middleware/UserMiddleware';

class UserRoutes{

  public routes=Router();

  constructor(){
    let userMiddleware=new UserMiddleware();
    let userController=new UserController();

    let userRegister=[
      userMiddleware.bodyCheck,
      userController.userRegister,
    ]
    this.routes.post('/register',userRegister);

    let userLogin=[
      userMiddleware.bodyCheck,
      userMiddleware.checkUserIsExists
    ]
    this.routes.post('/login',userLogin);
  }
}

export default UserRoutes;
