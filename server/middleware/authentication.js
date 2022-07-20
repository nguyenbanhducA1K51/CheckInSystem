const express = require("express");
const app = express();
const useStore = require("../store/user");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
   console.log(req.headers.authorization)
 try {
  const rawToken = req.headers.authorization;
    if (rawToken.split(" ")[0] == "Bearer") {
      const token = rawToken.split(" ")[1];
      
        await jwt.verify(
          token,
          process.env.JWT_SECRET,
          function (err, decoded) {
            if (err) {
             throw " error here"
            } else {
              console.log("decoded" + JSON.stringify(decoded));

              req.payload = decoded;
              next();
            }
          }
        );
      
    } 
    else{
      throw "invalid token"
    }
    
 } catch (error) {
  console.log("ERR1"+error)
  return res
        .status(401)
        .send({ success: false, error: "cannot authen header" });
 }
    
  
};
module.exports = auth;
