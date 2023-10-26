const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  // const databaseResponse = null;
  res.json(books);
  // res.send(databaseResponse);
});

app.listen(3000, () => {
  console.log("server running")
})