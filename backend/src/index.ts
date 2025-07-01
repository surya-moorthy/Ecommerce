import express from "express"
import { router } from "./routes/route";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({
     origin: 'http://localhost:5173', // Vite's default
     credentials: true
}))
app.use("/api/v1",router);

app.listen(port , ()=>{
    console.log(`the server is running at port ${port}`);
});