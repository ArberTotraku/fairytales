import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors"

dotenv.config();
const app = express();

mongoose
  .connect(process.env.URI)
  .then(console.log("Database is connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))

app.get('/', (req, res) => {
    res.send('Hello, this is a simple server with MongoDb!');
  });

app.listen(4000);
