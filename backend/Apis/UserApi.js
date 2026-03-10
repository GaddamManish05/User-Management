import {UserModel} from '../models/UserModel.js'
import exp from 'express'
// create mini express app

export const userApp = exp.Router();

// User api

// create User
userApp.post('/user',async(req,res) => {
    // user data from req.body
    const userObj = req.body
    // create a user doc
    const newUserDocument = new UserModel(userObj)
    // save the user
    let user = await newUserDocument.save();
    console.log(user)
    // send the user
    res.status(201).json({message : "User Created", payload : user});
})
// read all users
userApp.get('/users',async(req,res) => {
    // read all the user
    const userList = await UserModel.find();
    // send the res
    res.status(200).json({message : "Users" , payload : userList})
})

// get User By Id

userApp.get("/user/:id",async(req,res) => {
    // get User Id from req.params
    let uid = req.params.id
    // find the user by id
    let UserDoc = await UserModel.findOne({_id : uid , status :true});
    // check user
    if(!UserDoc){
        return res.status(404).json({message : "User not Found"})
    }
    // send the response  
    res.status(200).json({message : "User Found" , payload : UserDoc})
})

userApp.delete("/user/:id",async(req,res) => {
    // get user id from req params
    let uid = req.params.id
    // find and update the user by id
    let userDoc = await UserModel.findByIdAndUpdate(uid,{$set : {status : false}},{new : true});
    // check user 
    if(!userDoc){
        return res.status(404).json({message : "User Not Found" , payload :[]})

    }
    // send the response
    res.status(200).json({message : "User Deleted" , payload : userDoc})

})

// Activate the user
userApp.patch('/user/:id',async(req,res) => {
    // get user id from req params
    let uid = req.params.id
    // find and update the user by id
    let userDoc = await UserModel.findByIdAndUpdate(uid,{$set : {status : true}},{new : true});
    // check user 
    if(!userDoc){
        return res.status(404).json({message : "User Not Found" , payload :[]})

    }
    // send the response
    res.status(200).json({message : "User Activated" , payload : userDoc})
})