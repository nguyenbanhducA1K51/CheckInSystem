const userStore = require("../store/user");
const jwt = require("jsonwebtoken");
class User {
  static async generateToken(user) {
    const payload = { email: user.email, id: user._id };
    const secret = process.env.JWT_SECRET;
    const options = {};
    const token = jwt.sign(payload, secret, options);
    return token;
  }
  static async logIn(req, res) {
    try {
      console.log(req.headers.authorization)
      const rawToken = req.headers.authorization;
      if (rawToken.split(" ")[0] == "Bearer") {
        const token = rawToken.split(" ")[1];
        await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
          if (err) {
            return res.send({ success: false, err: "fail to verify" });
          } else {
            return res.send({
              success: true,
              token: jwt.sign(decoded, process.env.JWT_SECRET),
            });
          }
        });
      } else {
        if (await userStore.verifyLogin(req.body.email, req.body.password)) {
          const user = await userStore.findByEmail(req.body.email);
          return res.send({
            success: true,
            token: userStore.generateToken(user),
          });
        } else {
          return res.send({ success: false, error: "wrong password" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async signUp(req, res) {
    console.log("req made");
    try {
      const data = req.body;
      if (!data.email || !data.password) {
        return res.send({ success: false, error: "No data" });
      }
      let existUser = await userStore.findByEmail(data.email);
      if (existUser) {
        console.log(existUser);
        return res.send({
          success: false,
          error: "Email existed, please change your email",
        });
      }

      let newdata = {
        email: data.email,
        password: data.password,
        created_time: Date.now(),
      };
      const newUser = await userStore.createNewUser(newdata);
      const newtoken = userStore.generateToken(newUser);
      res.send({
        token: newtoken,
        success: true,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = User;
