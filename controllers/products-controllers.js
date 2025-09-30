var products = require("../model/products")

var getallproducts = async(req,res)=>{
    var getproducts = await products.find()
    if(getproducts){
        res.status(201).json(getproducts)
    }else{
        res.status(404),({message : "can't get products"})
    }
}

var getsingleproduct = async(req,res)=>{
    var productid = req.params.id
    var gettproduct = await products.findById(productid)
    if(gettproduct){
        res.status(201).json(gettproduct)
    }else{
        res.status(404)
    }
}

var addnewproduct = async(req,res)=>{
    var addproduct = req.body
    var newproduct = await products.create(addproduct)
    if(newproduct){
        res.status(200).json(newproduct)
    }else{
        res.status(404)
    }
}

var updateproduct = async(req,res)=>{
    var productid = req.params.id
    var update = req.body
    var updatedproduct = await products.findByIdAndUpdate(productid,update)
    if(updatedproduct){
        res.status(200).json(updatedproduct)
    }else{
        res.status(404)
    }
}

var deleteproduct = async(req,res)=>{
    var productid = req.params.id
    var deleted = await products.findByIdAndDelete(productid)
    if(deleted){
        res.status(200).json(deleted)
    }else{
        res.status(404)
    }
}

module.exports = {getallproducts,getsingleproduct,addnewproduct,updateproduct,deleteproduct}