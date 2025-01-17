const express=require("express")
const mongoose=require("mongoose")

const connectionDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/library")
        express().listen(8000,()=>{console.log("connected to DB \n server is listening at http://localhost:8000/")}
        )
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={connectionDB}