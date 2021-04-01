//Importing packages
//package.json created using npm init -y

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const AllProduct = require("./models/allproducts");

var session = require("express-session");

//Initializing express
const app = express();
const PORT = process.env.PORT || 8080;

//Using Mongodb atlas
const mongodburi =
  "mongodb+srv://snaaz30:Safiya123@cluster1.kbo1i.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.connect(mongodburi || "mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/save", (req, res) => {
  console.log("body", req.body);
  const data = req.body;
  const newProduct = new AllProduct(data);
  newProduct.save((error) => {
    if (error) {
      console.log("Sorry Error");
    } else {
      console.log("Data saved to mongoose");
    }
  });
  res.json({
    msg: "We received your data",
  });
});

app.use(morgan("tiny"));
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
