import React from "react";
import { Card, Container } from "semantic-ui-react";
import Book from './Book';

export default (props) => {
  if(props.books.length > 0) {
		let books = props.books.map((book, index) => 
			<Book key={"book"+index} selectedBook={props.selectedBook} selected={props.selectedBook ? props.selectedBook.title === book.title : false} book={book} selectBook={props.selectBook} deleteBook={props.deleteBook}></Book>
		);
		return <Card.Group centered>{books}</Card.Group>;
	} else {
		return <Container><h1>No books in your library</h1></Container>
	}
};
