const express= require("express");

const router= express.Router();
const { handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteById,handlePost}
 =require("../controllers/user")

//Routes
router.route("/").get(handleGetAllUsers).post(handlePost)

//dynamic
router.route("/:id")
.get(handleGetUserById).patch(handleUpdateUserById).delete(handleDeleteById)
module.exports=  router;