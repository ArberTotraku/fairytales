import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Book from "./models/bookModel.js";

dotenv.config();
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// CORS configuration (replace with your actual frontend origin)
app.use(cors({ origin: "http://localhost:3000" }));

// Route for saving a new book
app.post("/books", async (req, res) => {
  try {
    // Check if required fields are missing
    if (!req.body.title || !req.body.author || !req.body.published) {
      return res.status(400).send({
        message: "Send all required fields: title, author, published",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    // Ensure you have the error message properly defined in the catch block
    console.error(error.message);
    res.status(500).send({ message: error.message }); // Corrected status code to 500 (Internal Server Error)
  }
});

app.get("/books", async (req,res)=> {

  try {

   const books = await Book.find()

   if (!books || books.length === 0) {
    return res.status(404).send({message:"No books found"})
   }
    
   res.status(200).json(books)

  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message:err.message })
  }

})

mongoose
  .connect(process.env.URI)
  .then(() => console.log("Database is connected")) // Moved the log inside the .then block
  .catch((err) => console.error(err)); // Changed console.log to console.error for error logging

app.get("/", (req, res) => {
  res.send("Hello, this is a simple server with MongoDB!");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
