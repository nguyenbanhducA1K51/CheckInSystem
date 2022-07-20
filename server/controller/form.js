const userModel = require("../models/user");
const formStore = require("../store/form");

class Form {
  static async postForm(req, res) {
    // try {

    let data = req.body;
    let userData = req.payload;
    const user = await userModel.findOne({ _id: userData._id });
    // console.log(JSON.stringify(user))
    if (!user) {
      return res.send({ success: false, error: "cannot find user info" });
    }
    console.log(user.email);
    const content = {
      week: data.week,
      day: data.day,
      checkInOpponent: data.checkInOpponent,
      progress: data.progress,
      difficulty: data.difficulty,
      idea: data.idea,
      commitment: data.commitment,
      response: data.response,
    };
    const form = {
      content: content,
      created_time: data.created_time,
      update_time: data.update_time,
      owner_id: user._id,
    };
    await formStore.createForm(form);

    return res.send({ success: true });
    // } catch (error) {
    //   res.send({"success":false,"error":error})
    // }
  }
  static async getAll(req, res) {
    const user = await userModel.findOne({ _id: req.payload._id });
    if (!user) {
      res.send({ success: false, error: "cannot find user info" });
    }
    return res.send({ data: await formStore.getAllForm(user._id) });
  }
  static async updateForm(req, res) {
    console.log(req.body);
    const data = req.body;

    const doc = await formStore.findFormById(req.body._id);
    if (!doc) {
      return res.send({ success: false, error: "1cannot find user info1" });
    }

    const filter = {
      _id: req.body._id,
    };
    const update = {
      "content.week": data.week,
      "content.day": data.day,
      "content.checkInOpponent": data.checkInOpponent,
      "content.progress": data.progress,
      "content.difficulty": data.difficulty,
      "content.idea": data.idea,
      "content.commitment": data.commitment,
      "content.response": data.response,
      "content.week": data.week,
      updated_time: data.update_time,
    };

    return res.send({
      success: true,
      newdoc: await formStore.updateDoc(filter, update),
    });
  }
  static async deleteOne(req, res) {
    const _id = req.body._id;
    const form = await formStore.findFormById(_id);
    if (!form) {
      return res.send({ success: false, error: "cannot find form info" });

      console.log("here1");
    }
    await formStore.deleteOneDoc({ _id: _id });
    console.log("here2");
    return res.send({ success: true });
  }

  static async find(req, res) {
    const user = await userModel.findOne({ _id: req.payload._id });
    if (!user) {
      return res.send({ success: false, error: "cannot find user info" });
    }
    const week = req.query.week;
    const day = req.query.day;
    const condition = { owner_id: user._id };
    if (week) {
      condition.week = week;
    }

    if (day) {
      condition.day = day;
    }

    const result = await formStore.findForm(condition);

    return res.send(result);
  }
}

module.exports = Form;
