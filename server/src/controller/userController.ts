import { Request,Response } from 'express';
import Database from '../Database/mongoose';
import UserSchema from '../model/User.model'
import { IUser } from '../interfaces/interfaces';
import  jwt  from 'jsonwebtoken';

class UserController{

  // private DatabaseConnection:any;

  constructor(){
    new Database();
  }

  public userRegister = (req:Request,res:Response) =>{
    let userData:IUser=req.body;
    // userData.password=jwt.sign({ foo:req.body.password}, "SP", { algorithm: 'RS256'});
    userData.token=jwt.sign({foo:Date().toString},"SP");
    let UserModel=new UserSchema(userData);
    let userCheckModel=UserModel.save(async (error)=>{
        if(error){
          return await res.status(200).send({status:"ERROR",message:error.errmsg});
        }else{
          return await res.status(200).send({status:"OK",message:"Data is submitted"})
        }
    });
  }

  public userLoginCheck = async (email:string,password:string) => {
    let  data:any=[];
    await UserSchema.find({emailAddress:email,password:password},(error,response)=>{
      if(error){
        data.push({status:"ERROR",message:"User is not exiest"})
      }
      else if(response.length==0){
        data.push({status:"ERROR",message:"User is not exiest"})
      }
      else if(response.length==1){
        data.push({status:"OK",message:"User is Exists",userToken:response[0].token,firstName:response[0].firstName})
      }
    });
    return data;
  }

  public userLogin = (req:Request,res:Response)=>{
  }

}

export default UserController
