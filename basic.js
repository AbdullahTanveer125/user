import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import authRouter from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import productRouter from "./routes/productRoute.js";
import cors from "cors";

import express from "express";
const app = express();


// import and configuration of dotenv
import dotenv from "dotenv";
dotenv.config();


//PORT
const port = process.env.PORT || 5000;  


//connection of mongoDB
connectDB();


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/user",authRouter);
app.use(categoryRouter);
app.use(productRouter);


//server
app.listen(port, function () {
    console.log(`Server run at ${port}`.bgMagenta)
});                














