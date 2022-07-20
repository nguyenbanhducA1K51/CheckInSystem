// import mongoose from "mongoose";
// export const connect = async () => {
//   const db = mongoose.connection;
//   const dbUri = process.env.DB_URI; 
//   mongoose.connect(dbUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     autoIndex: true,
//     useFindAndModify: false,
//   });
//   db.on("error", console.log.bind(console, "connection error:"));
//   await db.once("open", () => {
//     console.log("Db connected successfully");
//   });
// };

const mongoose =require("mongoose")
const dbUri = process.env.DB_URI || "mongodb://localhost/checkIn"
mongoose.connect(dbUri, {});
mongoose.set("debug", true);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connect database error:"));
db.once("open", function (callback) {
  console.log("database connected.");
});
module.exports = db;