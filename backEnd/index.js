const express =require("express")
const app=express()
require("dotenv").config()
let cors=require("cors")
const dbConfig = require("./config/dbConfig")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    cors({
      origin: [process.env.BASE_URL],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

  app.listen(3000,()=>{
    console.log('server started')
})