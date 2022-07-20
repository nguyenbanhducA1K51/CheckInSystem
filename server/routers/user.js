const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user");
router.post("/signup", userCtrl.signUp);
router.post("/login",userCtrl.logIn)
module.exports=router
