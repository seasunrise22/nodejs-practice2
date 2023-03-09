import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import router from "./router/router.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use("/board", router);

mongoose.set("strictQuery", false);
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("connected to DB"))
    .then(console.log(`Server is running http://localhost:${process.env.PORT}`))
    .catch((err) => console.log(err));
});
