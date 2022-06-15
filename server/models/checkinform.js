const mongoose=require("mongoose");
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
      "content": checkInFormContentScheme
      

})
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
    "ComitmmentLevel":{
        type: String,
        required: false,
    },
    "ResponseFromOpponent":{
        type: String,
        required: false,
    },
})
export default mongoose.model("checkInForm",checkInFormScheme);