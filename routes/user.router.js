
const express=require('express');

const UserRouter=express.Router();

const {UserModel}=require('../model/user.model')

UserRouter.post('/post',async(req,res)=>{
    try{
       const payload=req.body;
       const data=new UserModel(payload);
       await data.save();
       res.status(201).json({"msg":"Details stored successfully"})
    } 
    catch(err){
        console.error(err);
        res.status(500).json({'msg':"Something went wrong"})
    }
})

UserRouter.get('/get',async(req,res)=>{
    try{
   const data=await UserModel.find();
     res.status(200).json({'msg':'successfull','data':data})
    }
    catch(err){
        console.error(err)
    }
})

module.exports={UserRouter}