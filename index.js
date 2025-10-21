require("dotenv").config()

var express = require("express")
var cors = require("cors")

var ConnecttoDataBase = require("./database/db")
const bookroute = require("./routes/book-routes")
var productroutes = require("./routes/product-routes")


var app = express()

ConnecttoDataBase()

app.use(express.json())
app.use(cors())

app.use("/api/books",bookroute)
app.use("/api/products",productroutes)

const Book = require("./model/books");
var products = require("./model/products")

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
    author :"hellooo",
    city : "kovvur",
    price : 40,
    available : false
})

products.create({
    name : "samsung",
    price : 120000,
    avaliable : true
})

var PORT = process.env.PORT || 2027
app.listen(PORT,()=>{
    console.log("server is running");
    
})


