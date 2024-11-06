
const { updateUser, deleteUserById, getUserById, getAll, getUserStat } = require("../controller/user");
const { verfiyTokenAndAuthorization, verfiyTokenAndAdmin } = require("../middleware/verfiyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id",verfiyTokenAndAuthorization, updateUser)
//DELETE
router.delete("/:id",verfiyTokenAndAuthorization, deleteUserById)
//GET
router.get("/find/:id",verfiyTokenAndAdmin, getUserById)
//GET ALL
router.get("/",verfiyTokenAndAdmin, getAll)
// GET USER STATS 
router.get("/stats",verfiyTokenAndAdmin, getUserStat)

module.exports = router;