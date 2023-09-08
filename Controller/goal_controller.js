const goal_model=require("../Model/goal_model");

async function insert_goal(req, res) {
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
}




module.exports=insert_goal;