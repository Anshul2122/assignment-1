const router = require("express").Router()
const { createCart, updateCart, deleteCartItem, getUserCart, getAllCartItem } = require("../controller/cart")
const {verfiyToken,verfiyTokenAndAuthorization,verfiyTokenAndAdmin} = require("../middleware/verfiyToken")


//CREATE CART
router.post("/",verfiyToken, createCart)



//UPDATE CART
router.put("/:cartId",verfiyTokenAndAuthorization, updateCart)

//DELETE CART
router.delete("/:cartId",verfiyTokenAndAuthorization, deleteCartItem)


//GET USER CART
router.get("/find/:userId",verfiyTokenAndAuthorization, getUserCart)


//GET ALL CARTS
router.get("/",verfiyTokenAndAdmin, getAllCartItem)



module.exports = router;

