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


const Book = require("./path-to-your-model-file");


Book.create({
    title: "it starts with us",
    author: "Paulo Coelho",
    city: "dowleshwaram",
    price: 3500,
    available: true
})

Book.create({
    title : "it ends with us",
    author : "heisenberg",
    city : "amalapuram",
    price : 2000,
    available : true
})

Book.create({
    title : "love hypothesis",
    author :"prassana",
    city : "kovvur",
    price : 40,
    available : false
})

var PORT = process.env.PORT || 2026
app.listen(PORT,()=>{
    console.log("server is running");
    
})


