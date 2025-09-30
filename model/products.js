var mongoose = require("mongoose")


var productschema = new mongoose.Schema({
    name : String,
    price : Number,
    features : String,
    avaliable : Boolean
})

module.exports = mongoose.model("products",productschema)