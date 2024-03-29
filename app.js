const express = require("express");
const app = express();

const ErrorHandler = require("./Multi-Vender(E-Commerce)/middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
// app.use(cors({
//   origin: ['https://eshop-tutorial-pyri.vercel.app',],
//   credentials: true
// }));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


// app.use("/test", (req, res) => {
//   res.send("Hello world!");
// });




// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}


app.use("/", express.static("uploads"));


// import routes
const user = require("./Multi-Vender(E-Commerce)/controller/user");
// const shop = require("./controller/shop");
// const product = require("./controller/product");
// const event = require("./controller/event");
// const coupon = require("./controller/coupounCode");
// const payment = require("./controller/payment");
// const order = require("./controller/order");
// const conversation = require("./controller/conversation");
// const message = require("./controller/message");
// const withdraw = require("./controller/withdraw");


const test_user=require("./Multi-Vender(E-Commerce)/controller/user")
app.use(test_user);
app.use("/api/v2/user", user);
// app.use("/api/v2/conversation", conversation);
// app.use("/api/v2/message", message);
// app.use("/api/v2/order", order);
// app.use("/api/v2/shop", shop);
// app.use("/api/v2/product", product);
// app.use("/api/v2/event", event);
// app.use("/api/v2/coupon", coupon);
// app.use("/api/v2/payment", payment);
// app.use("/api/v2/withdraw", withdraw);


// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;