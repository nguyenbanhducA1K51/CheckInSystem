import mongoose from "mongoose";
export const connect = async () => {
  const db = mongoose.connection;
  const dbUri = process.env.DB_URI; 
  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
    useFindAndModify: false,
  });
  db.on("error", console.log.bind(console, "connection error:"));
  await db.once("open", () => {
    console.log("Db connected successfully");
  });
};