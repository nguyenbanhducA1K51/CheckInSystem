const mongoose=require("mongoose");

const checkInFormContentScheme =new mongoose.Schema({
    "workProgress":{
        type: String,
        required: false,
    },
    "difficulty":{
        type: String,
        required: false,
    },
    "idea":{
        type: String,
        required: false,
    },
    "comitmmentLevel":{
        type: String,
        required: false,
    },
    "responseFromOpponent":{
        type: String,
        required: false,
    },
});
const checkInFormScheme= new mongoose.Schema({

    "date":{
        type:Date ,
        require:true
    },
    "created_time": {
        type: String,
        required: false,
      },
      "create_by":{
          type:String,
          require:true
      },
      "delete_time":{
          type:String,
          require:false
      },
      updated_time: {
        type: String,
        required: false,
      },
      department:{
          type: String
      },
      "content": checkInFormContentScheme
      

})

const checkinModel=mongoose.model("checkInForm",checkInFormScheme);
module.exports=  checkinModel
