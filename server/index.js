const express=require ("express")
const   dotenv =require("dotenv")
const cors =require("cors")
const db =require('./db/db');
dotenv.config();
const port=process.env.PORT||3000;
const app=express();
const authen=require("./middleware/authentication")

app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use("/user/",require("./routers/user"))
app.use("/form/",authen,require("./routers/form"));
// app.use("/",authen)
app.listen(port, () => {
  
    console.log(`server has started on port ${port} `);
  });