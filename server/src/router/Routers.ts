import { Router } from 'express';
import UserRoutes from './UserRoutes';
import WorkRutes from './WorkRoutes'
import  Database from '../Database/mongoose'


class Routers{
  constructor(){
    new Database()
  }

  public path(){
    const route=Router();
    route.use('/user',new UserRoutes().routes);
    route.use('/work',new WorkRutes().routes)
    return route;
  }
}

export default Routers
