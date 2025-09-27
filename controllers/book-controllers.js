const books = require("../model/books")

var getAllBooks = async(req,res)=>{
    var allbooks = await books.find()
    res.status(200).json(allbooks)
}

var getSingleBook = async(req,res)=>{
    var bookid = req.params.id
    var getbook = await books.findById(bookid)
    if(getbook){
        res.status(200).json(getbook)
    }else{
        res.status(404),({message : "cannot get"})
    }
}

var addNewBook = async(req,res)=>{
    var newformbook = req.body
    var newbook = await books.create(newformbook)
    if(newbook){
        res.status(201).json(newbook)
    }else{
        res.status(404),({message : "can't be added"})
    }
}

var updatedBook = async(req,res)=>{
    var bookid = req.params.id
    var updated = req.body
    var uptobook  = await books.findByIdAndUpdate(bookid,updated)
    if(uptobook){
        res.status(200).json(uptobook)
    }else{
        res.status(404),({message : "can't be  updated"})
    }
    
}

var deletedBook = async(req,res)=>{
    var deleted = req.params.id
    var deletes =await books.findByIdAndDelete(deleted)
    if(deletes){
        res.status(200).json(deletes)
    }else{
        res.status(404),({message : "can't be deleted"})
    }

}

module.exports = {
    getAllBooks,getSingleBook,addNewBook,updatedBook,deletedBook
}