const express=require("express")
const dotenv =require("dotenv")
const cors = require("cors");
dotenv.config();
const port=process.env.PORT||3000;
const app=express();

app.use(express.json());
app.use(cors());
app.use("/user/",require("./routers/user"))
app.use("/form/",require("./routers/form"));

app.listen(port, () => {
    console.log(`server has started on port ${port} `);
  });