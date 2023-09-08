const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const user_model = require("../Model/user_model");



async function user_registration(req, res) {
    // res.json({message:"Register User!"})
        // console.log(req.body)
        const {name, email, password}=req.body;//destructure (object/array ko variables me store krwana respectivily)

        if(!name || !email || !password){
            res.status(400).send("Please Enter all Fields...")
        }

        //check if user exist
        const user_exist= await user_model.findOne({email});
        if(user_exist){ 
            res.status(400).send("Already user exist...")
        }else{
            console.log("AAAAAAAAAAA");
        } 



        // Hash password
        const salt= await bcryptjs.genSalt(10);
        const hash_password= await bcryptjs.hash(password, salt);

        //create user
        const new_user= await user_model.create({
            name,
            email,
            password:hash_password
        })

        if(new_user){
            res.status(201).json({
                _id:new_user._id,
                name:new_user.name,
                email:new_user.email,
                token:generate_jwt_token(new_user._id)
            })
        }else{
            res.status(400).send("Invalid User!");
        }


        // res.status(200).send("Register User!"); 
        // res.status(201).json(result);
    

}

// authentication
async function login(req, res) {

    const {email, password}=req.body;

    // check for email
    const check_email= await user_model.findOne({email});//object mily ga jis email sy match ho gi
    const current_user=check_email;

    // console.log("******* AAAAAAA *********");
    // console.log(current_user);
    // console.log(password);
    // console.log(current_user.password);
    // console.log("******* AAAAAAA *********");

    // check for password
    // const check_password= await user_model.findOne({password});

    if(current_user && (await bcryptjs.compare(password, current_user.password))){
        res.send({
            _id:current_user._id,
            name:current_user.name,
            email:current_user.email,
            token: generate_jwt_token(current_user._id),
        })
    }else{
        res.status(400).send("Invalid email & password");
    }

    // if(check_email && check_password){
    //     res.send({
    //         _id:current_user._id,
    //         name:current_user.name,
    //         email:current_user.email,
    //         token:generate_jwt_token(current_user._id)
    //     })
    // }else{
    //     res.status(400).send("Invalid email_ & password");
    // }
 
}

function get_user(req, res) {
    res.json({ message: "Special User!" })
}



function generate_jwt_token(id){
    return jwt.sign({id}, "ab", {expiresIn:"1d"})
}







module.exports = {
    user_registration,
    login,
    get_user,
}