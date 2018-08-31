const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Simulating a database. We already have all the info we need in this array of books
let bookArray = [
  {
    title: "Moby Dick",
    author: "Herman Melville",
    synopsis: "Some dudes chasing a white whale for a long long time"
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    synopsis: "Too long; didn't read"
  },
  {
    title: "Through the Looking Glass",
    author: "Lewis Carroll",
    synopsis: "An acid trip in book format"
  }
];

app.listen(5000, () => console.log("http://localhost:5000"));