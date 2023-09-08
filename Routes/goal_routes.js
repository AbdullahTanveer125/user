// const insert_goal=require("../Controller/goal_controller");
const goal_model=require("../Model/goal_model");
const express=require("express");
const goal_router= express.Router();

// goal_router.post("/insert", insert_goal)
//handle post API(save/store data in collection of mongodb database)
goal_router.post("/insert", async function (req, res) {
    try{
        console.log(req.body)
        const data= new goal_model(req.body);
        const result= await data.save();
        console.log(result);
        console.log("***** We are in Try ******");
        res.status(201).send(result);
        // res.status(201).json(result);
    }catch(error){
        res.status(400).send(error);
        console.log("***** We are in Catch ******");
        
    }
});

//handle get API(read data from collection of mongodb database)
goal_router.get("/get_all", async function get_all_data(req, res) {
    try{
        const get_all_data= await goal_model.find({});
        res.status(200).send(get_all_data);
        console.log(get_all_data);
    }catch(error){
        console.error(error);
        res.status(400).send(error);
    }
});


//handle patch(put) API(update data in collection of mongodb database)
goal_router.put("/update/:id", async function (req, res) {
    try{
        const update_special_data= await goal_model.updateOne(
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


//handle delete API(delete data from collection of mongodb database)
goal_router.delete("/delete/:id", async function (req, res) {
    try{
        // const delete_special_data= await men_100m_model.deleteOne(req.params);//method-1
        const delete_special_data= await goal_model.deleteOne({_id:req.params.id});//method-2
        res.status(200).send(delete_special_data);
        console.log(delete_special_data);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});







module.exports=goal_router;