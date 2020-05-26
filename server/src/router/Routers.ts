import { Router } from 'express';
import UserRoutes from './UserRoutes';


class Routers{
  constructor(){
  }

  public path(){
    const route=Router();
    route.use('/user',new UserRoutes().routes);
    return route;
  }
}

export default Routers
