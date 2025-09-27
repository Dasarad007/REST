var express = require("express")

var {getAllBooks,getSingleBook,addNewBook,updatedBook,deletedBook} = require("../controllers/book-controllers")

var router = express.Router()


router.get("/get",getAllBooks)

router.get("/get/:id",getSingleBook)

router.post("/add",addNewBook)

router.put("/update/:id",updatedBook)

router.delete("/delete/:id",deletedBook)

module.exports = router



