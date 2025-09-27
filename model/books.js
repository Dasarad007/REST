var mongoose = require("mongoose")

var bookschema = new mongoose.Schema({
     title : String,
     author : String,
     city : String,
     price : Number,
     available : Boolean
 })

 module.exports = mongoose.model("books",bookschema)

 