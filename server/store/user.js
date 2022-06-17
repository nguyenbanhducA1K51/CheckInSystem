import userModel from "../models/user";

class UserStore {
  static async findByEmail(email, limit = 20, skip = 0) {
    const existdoc = await userModel.findOne({ email: email });

    return existdoc;
  }
}
