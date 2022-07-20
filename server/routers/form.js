const express = require("express");
const router = express.Router();
const formCtrl = require("../controller/form");
router
  .post("/post", formCtrl.postForm)
  .post("/update", formCtrl.updateForm)
  .get("/all", formCtrl.getAll)
  .post("/deleteOne",formCtrl.deleteOne)
  .get("/find", formCtrl.find);

module.exports = router;
