import mongoose from "mongoose"
import crypto from "crypto"
const verificationScheme=new schema({
    email:{
        type: String
    },
    verification_code:{
type:String
    },
    is_active:{
type: Boolean
    }
})
export default mongoose.model(verification,verificationScheme)