const user_model = require("../User_Model/user_model");//import model of "user_model"
const express=require("express");
const user_router= express.Router();


//handle post API(save/store data in collection of mongodb database)
user_router.post("/insert", async function (req, res) {
    try{
        // const {username}=req.body;
        const data= new user_model(req.body);
        const result= await data.save();
        console.log(result);
        res.status(201).send(result);
    }catch(error){
        res.status(400).send(error);
    }
});

//handle get API(read data from collection of mongodb database)
user_router.get("/get_all", async function (req, res) {
    try{
        const get_all_data= await user_model.find({}).sort("-createdAt");
        res.status(200).send(get_all_data);
        console.log(get_all_data);
    }catch(error){
        console.error(error);
        res.status(400).send(error);
    }
});




module.exports=user_router;