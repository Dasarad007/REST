require("dotenv").config()

var express = require("express")

var ConnecttoDataBase = require("./database/db")
var app = express()

ConnecttoDataBase()

app.use(express.json())

var PORT = process.env.PORT || 2025
app.listen(PORT,()=>{
    console.log("server is running");
    
})


