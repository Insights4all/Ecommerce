const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;
const AllProductSchema = new Schema({
  title: String,
  desc: String,
  price: Number,
});

//Model
const AllProduct = mongoose.model("AllProduct", AllProductSchema);

module.exports = AllProduct;
