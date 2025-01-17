const express=require("express")
const { AuthorModel } = require("../models/authorModel")
const authorRoute=express.Router()


// get 
authorRoute.get("/",async(req,res)=>{
    try {
        const allAuthors=await AuthorModel.find().populate("books")
        res.status(200).send({message:"success",data:allAuthors})
    } catch (error) {
        console.log(error);  
        res.send({message:error})
        
    }
})



//post
 authorRoute.post("/",async(req,res)=>{
 try {
    const newAuthor=await AuthorModel.create(req.body)
    res.status(201).send({message:"Author created successfully",data:newAuthor})
 } catch (error) {
    console.log(error); 
    res.send({message:error})
 }
 })

//patch
authorRoute.patch("/:_id", async (req,res) => {
    let _id = req.params
    console.log(_id,req.body)
    try {
        await AuthorModel.findByIdAndUpdate(_id,{
            name : req.body.name,
            nationality : req.body.nationality,
            birth_year : req.body.birth_year,
            books : req.body.books
        })
        const updatedAuthor = await AuthorModel.findById(_id)
        res.send({message:"Success", data:updatedAuthor})
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

module.exports={authorRoute}