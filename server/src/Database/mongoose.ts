import mongoose from 'mongoose';

class Database{
  constructor(){
    this.mongoConnection();
  }

  public mongoConnection=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/timeSchedule', {useNewUrlParser: true,useUnifiedTopology: true }).then(void function(error:any,database:any){
      if(error){
        console.log("Database is not connected");
      }else{
        console.log("Database is connected");
      }
    });
  }
}

export default Database
