const { createProduct, updateProduct, deleteProduct, getAllProducts } = require("../controller/product");
const {verfiyTokenAndAdmin} = require("../middleware/verfiyToken")

const router = require("express").Router();

//CREATE
router.post("/",verfiyTokenAndAdmin, createProduct)

// UPDATE
router.put("/:id",verfiyTokenAndAdmin, updateProduct)


// DELETE 
router.delete("/:id",verfiyTokenAndAdmin, deleteProduct)
// GET 
router.get("/find/:id", )
//GET ALL
router.get("/", getAllProducts)


module.exports = router;