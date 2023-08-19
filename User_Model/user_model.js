const mongoose=require("mongoose");

const user_schema=new mongoose.Schema({
        user_name:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            minlength:3
        }
    },
    {timestamps:true}
);

const user_model=mongoose.model("user",user_schema);
module.exports=user_model;