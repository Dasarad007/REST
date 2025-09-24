var mongoose = require("mongoose")

async function ConnecttoDataBase(){
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("conected to db");
       
    }catch(error){
        console.log("error",error);
        
    }
}

var bookschema = new mongoose.Schema({
     title : String,
     author : String,
     city : String,
     price : Number,
     available : Boolean
 })

 var books = mongoose.model("books",bookschema)

module.exports = ConnecttoDataBase