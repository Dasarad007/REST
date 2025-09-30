var express = require("express")

var {getallproducts,getsingleproduct,addnewproduct,updateproduct,deleteproduct} = require("../controllers/products-controllers")

var router = express.Router()

router.get("/get",getallproducts)

router.get("/get/:id",getsingleproduct)

router.post("/add",addnewproduct)

router.put("/update/:id",updateproduct)

router.delete("/delete/:id",deleteproduct)

module.exports = router