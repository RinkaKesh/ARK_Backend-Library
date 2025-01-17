const express=require("express")
const {connectionDB}=require("./connection/connection")
const {userRoute}=require("./routes/userRoute")
const app=express()

// middlewares 
app.use(express.json())
app.use("/users",userRoute)

connectionDB()