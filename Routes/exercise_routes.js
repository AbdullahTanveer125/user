const exercise_model = require("../Exercise_Model/exercise_model");//import "exercise_model"
const express=require("express");
const exercise_router= express.Router();


//handle post API(save/store data in collection of mongodb database)
exercise_router.post("/insert", async function (req, res) {
    try{
        const user_name=req.body.username;
        const description=req.body.description;
        const duration=req.body.duration;
        // const duration=Number(req.body.duration);
        // const date=Date.parse(req.body.data)

        const data= new exercise_model({
            user_name,
            description,
            duration
            // date
        });
        const result= await data.save();
        console.log(result);
        res.status(201).send(result);
    }catch(error){
        res.status(400).send(error);
    }
});

//handle get API(read data from collection of mongodb database)
exercise_router.get("/get_all", async function (req, res) {
    try{
        const get_all_data= await exercise_model.find({}).sort("-createdAt");
        res.status(200).send(get_all_data);
        console.log(get_all_data);
    }catch(error){
        console.error(error);
        res.status(400).send(error);
    }
});

//handle get API(read special/particular data from collection of mongodb database)
exercise_router.get("/get_special/:id", async function (req, res) {
    try{
        // const ranking=req.params.rank;
        const get_special_data= await exercise_model.findById({_id:req.params.id});
        res.status(200).send(get_special_data);
        console.log(get_special_data);
    }catch(error){
        console.error("*****Error******",error);
        res.status(400).send(error);
    }
});


//handle delete API(delete data from collection of mongodb database)
exercise_router.delete("/delete/:id", async function (req, res) {
    try{
        // const delete_special_data= await men_100m_model.deleteOne(req.params);//method-1
        const delete_special_data= await exercise_model.deleteOne({_id:req.params.id});//method-2
        res.status(200).send(delete_special_data);
        console.log(delete_special_data);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});

//handle patch(put) API(update data in collection of mongodb database)
exercise_router.put("/update/:id", async function (req, res) {
    try{
        const update_special_data= await exercise_model.updateOne(
            {_id:req.params.id},
            {$set:req.body}
            );
        res.status(200).send(update_special_data);
        console.log(update_special_data);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});








module.exports=exercise_router;