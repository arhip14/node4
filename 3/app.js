const express = require("express");

const books = require("./books");

const app = express();

app.use((req, res, next) => {
  console.log("First midlewware");
  next();
})

app.get("/products", (req, res) => {
  res.json([])
});

app.get("/books", (req, res) => {
  res.json(books);
})

app.listen(3002);