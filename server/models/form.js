const mongoose = require("mongoose");

const checkInFormContentScheme = new mongoose.Schema({
  user_id: {
    type: String,
    required: false,
  },
  week: {
    type: String,
    required: false,
  },
  day: {
    type: String,
    required: false,
  },
  checkInOpponent: {
    type: String,
    required: false,
  },
  progress: {
    type: String,
    required: false,
  },
  difficulty: {
    type: String,
    required: false,
  },
  idea: {
    type: String,
    required: false,
  },
  commitment: {
    type: String,
    required: false,
  },
  response: {
    type: String,
    required: false,
  },
});
const FormScheme = new mongoose.Schema({
  form_id: {
    type: String,
    require: false
  },
  created_time: {
    type: String,
    required: false,
  },
  owner_id: {
    type: String,
    require: true,
  },
  delete_time: {
    type: String,
    require: false,
  },
  updated_time: {
    type: String,
    required: false,
  },
  department: {
    type: String,
  },
  content: checkInFormContentScheme,
});

const formModel = mongoose.model("checkInForm", FormScheme);
//export model vs export scheme?
module.exports = formModel;
module.exports.formScheme = FormScheme;
