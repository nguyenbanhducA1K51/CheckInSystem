const mongoose =require("mongoose");
const{formScheme}=require( "./form" );
const crypto =require( "crypto");
const userScheme=new mongoose.Schema({
    formContent:formScheme,
   
    email:{
    type:String
    },
    phone:{
        type:String
    },
    display_name:{
        type:String
    },
    access_token:{
        type:String
    },
    salt:{
        type:String
    },
    hash:{
        type:String
    },
    list_own_form:[formScheme],
    form_can_view:[formScheme]
})
userScheme.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
  };
  userScheme.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
    return this.hash === hash;
  };

userScheme.methods.passwordEncryption = function (password, salt) {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex");
    return hash;
  };
  userScheme.methods.initSaltAndHash = function (password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex");
    return {
      salt: salt,
      hash: hash,
    };
  };
  userScheme.methods.passwordEncryption = function (password, salt) {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex");
    return hash;
  }
    userScheme.index({ id: -1 });
module.exports= mongoose.model("user",userScheme)