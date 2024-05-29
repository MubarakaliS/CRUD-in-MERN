const express = require("express");
const mongodb=require('mongoose');
const app = express();
const cors=require('cors')
const router=require('./view/Router')
app.use(cors())
// const mongodb=mongodb_connection.MongoClient
app.use(express.json());

mongodb.connect("mongodb://localhost:27017/ContactManager")
.then((res) => {
  console.log("Sucessfully connected");
  app.listen(4000,()=>{
    console.log("Fired on Your Server on http://localhost:4000");
  })
}).catch(err=>console.log(err))

app.use('/baseRouter',router)