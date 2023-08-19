const mongoose=require("mongoose");

const exercise_schema=new mongoose.Schema({
        username:{ type:String,required:true },
        description:{ type:String,required:true },
        duration:{ type:Number,required:true }
        // date:{ type:Date,required:true }//must write "Date type" in basic work(project)
    },
    {timestamps:true}
);

const exercise_model=mongoose.model("exercise",exercise_schema);
module.exports=exercise_model;