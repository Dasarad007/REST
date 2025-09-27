var mongoose = require("mongoose")

async function ConnecttoDataBase(){
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("conected to db");
       
    }catch(error){
        console.log("error",error);
        
    }
}



module.exports = ConnecttoDataBase