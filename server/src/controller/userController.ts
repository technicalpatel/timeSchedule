import { Request,Response } from 'express';
import Database from '../Database/mongoose';
import UserSchema from '../model/User.model'

class UserController{

  // private DatabaseConnection:any;

  constructor(){
    new Database();
  }

  public userRegister = (req:Request,res:Response) =>{
    let userData=req.body;
    let UserModel=new UserSchema(userData);
    UserModel.save().then(function(error){
      if(error){
        res.status(400).send({message:"Data is not submitted"})
      }else{
        res.status(200).send({message:"Data is submitted"})
      }
    });

  }

}

export default UserController
