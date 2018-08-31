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


app.get('/books', (req, res) => {
	res.send(bookArray);
})

app.post('/books', (req, res) => {
	bookArray.push(req.body);
	res.send(bookArray);
})

app.put('/books', (req, res) => {
	let title = req.body.title;
	let book = bookArray.find((book) => {
		if(book.title === title)
			return book
	})
	book.title = title;
	book.author = req.body.author;
	book.synopsis = req.body.synopsis;
	res.send(bookArray);
});

app.delete('/books/:bookTitle', (req, res) => {
	let title = req.params.bookTitle;
	let bookIndex = bookArray.findIndex((book) => {
		if(book.title === title)
			return book
	})
	bookArray.splice(bookIndex, 1);
	res.send(bookArray);
})

app.listen(5000, () => console.log("http://localhost:5000"));