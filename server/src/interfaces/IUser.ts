import { Document } from 'mongoose';

export interface IUser extends Document{
  firstName:string,
  middleName:string,
  lastName:string,
  emailAddress:string,
  gender:string,
  state:string,
  city:string,
  birthDate:Date,
  mobileNumber:Number,
  password:string,
  token?:string
}
