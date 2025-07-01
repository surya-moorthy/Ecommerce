import express from "express"
import { router } from "./routes/route";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/api/v1",router);

app.listen(port , ()=>{
    console.log(`the server is running at port ${port}`);
});