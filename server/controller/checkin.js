import checkinModel from"../models/checkinform";
class checkin {
    static async find(condition,skip=0,limit=10){
        
    }
    static async create(data){
        try {
            return await  checkinModel.create(data);
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }
    static async update(condition, data) {
        try {
          return await checkinModel.findOneAndUpdate(condition, data, {
            new: true,
          });
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

      static async deleteOne(condition) {
        try {
          return await posContentModel.updateOne(condition, {
            deleted_time: Date.now(),
          });
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
    }
module.exports=checkin;