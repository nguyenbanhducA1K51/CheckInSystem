const express = require("express");
const router = express.Router();
const formCtrl=require("../controller/checkin")
router.
     post("/post",formCtrl.postForm)
    .post("/update",formCtrl.updateForm)
    .get("/all",formCtrl.getAll)
    .post("/delete,formCtrl.deleteUnit")
    .get("/getUnit",formCtrl.getUnit)
    
    module.exports=router