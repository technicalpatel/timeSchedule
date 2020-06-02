import { ITask } from '../interfaces/ITask'
import mongoose,{Schema } from 'mongoose'

const TaskSchema=new Schema({
  task_heading:{type:String,required:true},
  task_name:{type:String,required:true},
  task_description:{type:String,required:true},
  task_start_date:{type:Date,required:true},
  task_end_date:{type:Date,required:true},
  user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

export default mongoose.model<ITask>('Task',TaskSchema)
