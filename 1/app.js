const express = require("express");

const app = express();


app.get("/", (request, response) => {
  response.send("<h2>Home Page</h2>")
});

app.get("/contcats", (request, response) => {
  console.log(request.url);
  console.log(request.method);
  response.send("<h2>Contacs Page</h2>")
})
app.listen(3000, () => console.log("Server running"))