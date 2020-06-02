import { Request,Response, response } from 'express';
import UserSchema from '../model/User.model'
import { IUser } from '../interfaces/IUser';
import  jwt  from 'jsonwebtoken';
import crypto from 'crypto'

class UserController{

  // private DatabaseConnection:any;

  constructor(){

  }

  public userRegister = (req:Request,res:Response) =>{
    let userData:IUser=req.body;
    userData.password=crypto.createHash('md5').update(req.body.password).digest('hex');
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
    let passwordEnc=crypto.createHash('md5').update(password).digest('hex');
    await UserSchema.find({emailAddress:email,password:passwordEnc},(error,response)=>{
      if(error){
        data.push({status:"ERROR",message:"User is not exiest"})
      }
      else if(response.length==0){
        data.push({status:"ERROR",message:"User is not exiest"})
      }
      else if(response.length==1){
        data.push({status:"OK",message:"User is Exists",userToken:response[0].token,email:response[0].emailAddress})
      }
    });
    return data;
  }

  public userIsValid = async (user_token:any,user_email:any)=>{
    let data:any=[];
    await UserSchema.find({token:user_token,emailAddress:user_email}
      ,(err,response)=>{
        if(err){
          data.push({status:"ERROR",message:"User is not exists"})
        }else if(response.length==1){
          data.push({status:"OK",message:"User is valid",id:response[0]._id})
        }else{
          data.push({status:"ERROR",message:"User is not exists"})
        }
      });
      return data;
  }
}

export default UserController
