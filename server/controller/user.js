const checkinModel = require("../models/checkinform");
const userModel = require("../models/user");
const userStore = require("../store/user");
const crypto = require("crypto");
class User {
  static async generateToken(user) {
    const payload = { email: user.email, id: user._id };
  }
  static async signUp(req, res) {
    try {
      const data = req.body;
      if (!data.email || !data.password) {
        return res.send({ success: false, error: "No data" });
      }
      let existUser = userStore.findbyEmail(data.email);
      if (existUser) {
        return res.send({
          success: false,
          error: "Email existed, please change your email",
        });
      }
      // const user=await  User.
      //     _id
      // }
    } catch (err) {}
  }
}
