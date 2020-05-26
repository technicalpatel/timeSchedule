import express from 'express'
import * as bodyParser from 'body-parser'
import Routers from './router/Routers'

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

let routes=new Routers();
app.use('/tm1',routes.path());

app.listen(3000,function(){
  console.log(`SERVER IS RUNNING ON PORT NUMBER 3000`)
})
