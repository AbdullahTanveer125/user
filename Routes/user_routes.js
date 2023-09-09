const user_model=require("../Model/user_model");
const express=require("express");
const user_router= express.Router();
const {protect}=require("../Middleware/Protect")
const{ user_registration, login, get_user}=require("../Controller/user_controller")




//handle post API(save/store data in collection of mongodb database)
user_router.post("/insert",user_registration);

//handle post API(save/store data in collection of mongodb database)
user_router.post("/login",login);

//handle get API(read data from collection of mongodb database)
user_router.get("/special_user",protect,  get_user);




module.exports=user_router;