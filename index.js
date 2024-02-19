const express= require("express");
const mongoose= require("mongoose");
const userRouter= require("./routes/user")
const {connectMangoDB} = require("./connection")

const { logReqRes } = require("./middlewares")
const app= express();
//connection
connectMangoDB( mongoose.connect('mongodb://127.0.0.1:27017/BackendPractice')
.then(()=>console.log
("MongoDB connected")).catch(()=>console.log("Error",err)))
   
   
   
//middleware
app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));
//Routes

app.use("/api/users",userRouter)


const PORT=8000;

app.listen(8000,()=>console.log("server started"));