import mongoose from "mongoose";
import  checkInForm  from  "/checkinform";
import crypto from"crypto"
const userScheme=new mongoose.schema({
    formContent:checkInForm,
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
    list_own_form:[checkInForm],
    form_can_view:[checkInForm]
})
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
  };
  userSchema.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
    return this.hash === hash;
  };

userSchema.methods.passwordEncryption = function (password, salt) {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex");
    return hash;
  };
  userSchema.methods.initSaltAndHash = function (password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex");
    return {
      salt: salt,
      hash: hash,
    };
  };
  userSchema.methods.passwordEncryption = function (password, salt) {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512").toString("hex");
    return hash;
  }
    userSchema.index({ id: -1 });
export  default mongoose.model("user",userScheme)