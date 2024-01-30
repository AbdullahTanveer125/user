const mongoose = require("mongoose");


// import and configuration of dotenv
const dotenv = require("dotenv");
dotenv.config();

// const mongodb_path="mongodb+srv://ab2:abdullah11@cluster0.vc6xntu.mongodb.net/Multi-Vender";
// const connectDatabase = () => {
//     mongoose.connect("mongodb://127.0.0.1:27017/Multi-Vender", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         .then((data) => {
//             console.log(`mongodb connected with server: ${data.connection.host}`);
//         });
// };

function connectDatabase(){
    mongoose.connect('mongodb://127.0.0.1:27017/Multi-Vender')//it return promise.we handle promise with "then()" and "catch()"
        .then(function () {
            console.log('Connected to MongoDB');
        })
        .catch(function (err) {
            console.error(`Error connecting to MongoDB:${err}`);
        }
        );
}



module.exports = connectDatabase;