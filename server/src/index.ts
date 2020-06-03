import express from 'express'
import * as bodyParser from 'body-parser'
import Routers from './router/Routers'

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.all('/*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Request-Headers','*');
  res.header('Access-Control-Allow-Headers','*');
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Headers,Authorization,token,x-device-type,x-app-version,x-build-number,uuid,x-auth-token,X-L10N-Locale'
  //   );
    // res.header('exposedHeaders','Content-Type,Authorization,tokenkey')
    res.header('Access-Control-Allow-Methods','*');
    if(req.method==='OPTIONS'){
      res.writeHead(200);
      res.send();
    }else{
      next();
    }
});

let routes=new Routers();
app.use('/tm1',routes.path());

app.listen(300,function(){
  console.log(`SERVER IS RUNNING ON PORT NUMBER 3000`)
})
