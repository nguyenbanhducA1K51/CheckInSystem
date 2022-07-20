var jwt = require('jsonwebtoken');
const userModel =require("../models/user");

class UserStore {
  static async verifyLogin(email,password){
const user= await userModel.findOne({email:email})
if(!user){
return false
}
else{
  return (user.validatePassword(password))
}

  }
  static async findByEmail(email) {
    const existdoc = await userModel.findOne({ "email": email });

    return existdoc;
  }
  static async createNewUser(data){
    try {
      const user  =new userModel({"email":data.email,created_time:data.created_time})
user.setPassword(data.password)
      return user.save()
    } catch (error) {
      console.log(error)

    }
  }
  static generateToken(user){
    const payload = { _id: user._id};
    const secret = process.env.JWT_SECRET;
    const options = {}; // { expiresIn: "7 days" };
    const token = jwt.sign(payload, secret, options);
    return token;

  }
}
module.exports=UserStore
