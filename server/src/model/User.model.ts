import {IUser} from '../interfaces/IUser';
import  mongoose,{ Schema } from 'mongoose';

const UserSchema:Schema=new Schema({
  firstName:{type:String,required:true},
  middleName:{type:String,required:true},
  lastName:{type:String,required:true},
  emailAddress:{type:String,required:true,unique:true},
  gender:{type:String,required:true},
  state:{type:String,required:true},
  city:{type:String,required:true},
  birthDate:{type:Date,required:true},
  mobileNumber:{type:Number,minlength:10,maxlength:10,unique:true},
  password:{type:String,required:true},
  token:{type:String,required:true}
});

export default mongoose.model<IUser>('User',UserSchema);
