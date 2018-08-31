import React, { Component } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import axios from "axios";
import { Container } from "semantic-ui-react";
import Error from './Error';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      selectedBook: {},
      bookForm: {
        title: "",
        author: "",
        synopsis: ""
			},
			error: ""
		};
		this.clearError = this.clearError.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.createBook = this.createBook.bind(this);
    this.selectBook = this.selectBook.bind(this);
		this.updateBook = this.updateBook.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
  }

	clearError() {
		this.setState({error: ""});
	}

  componentDidMount() {
    axios.get("/books").then(res => {
			console.log(res.data);
      this.setState({ books: res.data }, this.clearError());
    }, err => {
			this.setState({error: err.message})
		});
  }

  deleteBook(title) {
    axios.delete(`/books/${title}`).then(res => {
      if (title === this.state.selectedBook.title)
        this.setState({ selectedBook: {} });
      this.setState({ books: res.data }, this.clearError());
    }, (err) => {
			this.setState({error: err.message})
		});
  }

  createBook({ title, author, synopsis }) {
    axios.post("/books", { title, author, synopsis }).then(res => {
      this.setState({ books: res.data }, this.clearError());
    }, err => {
			this.setState({error: err.message})
		});
  }

  updateBook({ title, author, synopsis }) {
    axios.put("/books", { title, author, synopsis }).then(res => {
      this.setState({ books: res.data }, this.clearError());
    }, err => {
			this.setState({error: err.message})
		});
  }

	handleInputChange(input, value) {
    switch(input) {
      case "title": {
        this.setState({bookForm: {title: value, author: this.state.bookForm.author, synopsis: this.state.bookForm.synopsis}});
        break;
      }
      case "author": {
        this.setState({bookForm: {author: value, title: this.state.bookForm.title, synopsis: this.state.bookForm.synopsis}});
        break;
			}
      case "synopsis": {
        this.setState({bookForm: {synopsis: value, title: this.state.bookForm.title, author: this.state.bookForm.author}});
        break;
      }
      default: {
        return null;
      }
    }
  }

  selectBook(book) {
    if (book.title !== this.state.selectedBook.title) {
      this.setState({
        selectedBook: book,
        bookForm: {
          title: book.title,
          author: book.author,
          synopsis: book.synopsis
        }
      });
    } else
      this.setState({
        selectedBook: {},
        bookForm: { title: "", author: "", synopsis: "" }
      });
  }

  render() {
    return (
      <Container>
				<Error error={this.state.error}/>
        <BookForm
          createBook={this.createBook}
          selectedBook={this.state.selectedBook}
          bookForm={this.state.bookForm}
					updateBook={this.updateBook}
					handleInputChange={this.handleInputChange}
        />
        <BookList
          books={this.state.books}
          deleteBook={this.deleteBook}
          selectBook={this.selectBook}
          bookForm={this.state.bookForm}
					selectedBook={this.state.selectedBook}
        />
      </Container>
    );
  }
}
