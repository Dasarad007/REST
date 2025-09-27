require("dotenv").config()

var express = require("express")
var cors = require("cors")

var ConnecttoDataBase = require("./database/db")
const router = require("./routes/book-routes")
var app = express()

ConnecttoDataBase()

app.use(express.json())
app.use(cors())

app.use("/api/books",router)

var PORT = process.env.PORT || 2026
app.listen(PORT,()=>{
    console.log("server is running");
    
})


