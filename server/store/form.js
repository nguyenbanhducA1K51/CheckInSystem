const formModel = require("../models/form");

class FormStore {
  static findFormById(id){
    return  formModel.findOne({_id:id})
  }
  static async createForm(formdata) {
    const doc = new formModel(formdata);
  
    console.log(doc)
    await doc.save();
  }
 static  updateDoc(filter,update){

return  formModel.findOneAndUpdate(filter,update,{new:true})
 }
 static deleteOneDoc(filter){
  return formModel.deleteOne(filter)
 }

  static async getAllForm(owner_id) {
    return  formModel.find({ owner_id: owner_id });
  }
 static async findForm(condition){
return  formModel.find(condition)
 }
}
module.exports = FormStore;
