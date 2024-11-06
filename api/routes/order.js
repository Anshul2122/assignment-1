const router = require("express").Router();
const { createOrder, updateOrder, deleteOrder, getAllOrders, getIncome } = require("../controller/order");
const {verfiyToken,verfiyTokenAndAuthorization,verfiyTokenAndAdmin} = require("../middleware/verfiyToken")

//CREATE
router.post("/",verfiyToken, createOrder)

//UPDATE
router.put("/:orderId",verfiyTokenAndAdmin, updateOrder)

//DELETE
router.delete("/:orderId",verfiyTokenAndAdmin, deleteOrder)

//GET USER ORDERS
router.get("/find/:userId",verfiyTokenAndAuthorization, )

//GET ALL
router.get("/",verfiyTokenAndAdmin, getAllOrders)


//GET INCOME 
router.get("/income",verfiyTokenAndAdmin, getIncome)


module.exports = router;