const express=require("express");
const path=require("path");

const User=require("../model/user");


const ErrorHandler = require("../utils/ErrorHandler");
const router=express.Router();
const {upload}=require("../multer");



const Test=require("../model/testModel")
const testRouter=express.Router();

// testRouter.post("/test", async(req,res,next)=>{

//     const {name,email,password}=req.body;
//     const userEmail=await Test.findOne({email});
//     if(userEmail){
//         return next(new ErrorHandler("User already exist!", 400));
//     }

//     const test_user={
//         name,
//         email,
//         password,
//     }

    // const testUser=await Test.create(test_user);
    // console.log(`***** newUser:${testUser} ********`);
    // res.status(201).json({
    //     success:true,
    //     testUser
    // })
//     res.send(test_user);
//     console.log(test_user);
// })


router.post("/create-user", upload.single("file"), async(req,res,next)=>{
    const {name,email,password}=req.body;
    const userEmail=await User.findOne({email});
    if(userEmail){
        return next(new ErrorHandler("User already exist!", 400));
    }

    // const filename=req.file.filename;
    // const fileUrl=path.join(filename);

    const user={
        name,
        email,
        password,
        // avatar:fileUrl
    }

    const newUser=await User.create(user);
    console.log(`***** newUser:${newUser} ********`);
    res.status(201).json({
        success:true,
        newUser
    })
    // res.send(user);
    console.log(user);
})









module.exports=router;