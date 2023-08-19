const user_router=require("./Routes/user_routes");
const exercise_router=require("./Routes/exercise_routes");
const cors=require("cors");
const mongoose = require("mongoose");
const express = require("express");

const app = express();

const port = process.env.PORT || 4200;


// Method-1
const mongoURI = 'mongodb+srv://abdullahbhai:abdullah56@cluster0.2eddj7c.mongodb.net/';

mongoose.connect(mongoURI)
    .then(function () {
        console.log('Connected to MongoDB');
    })
    .catch(function (err) {
        console.error('Error connecting to MongoDB:', err,);
    }
);


app.use(cors());//using cors to allow routing......


//jb frontend sy data aay ga wo string ki form mey ho ga.
// is sy json ki form mey aaa jay ga
app.use(express.json());


//to use router
app.use("/user",user_router);//user router
app.use("/exercise",exercise_router);//exercise router 




app.listen(port, function () {
    console.log(`Server run at ${port}`)
});                








