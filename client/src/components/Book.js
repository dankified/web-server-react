import React from 'react';
import {Card, Icon} from 'semantic-ui-react';

export default (props) => {

	function clickBook() {
		props.selectBook(props.book)
	}

	return (
		<Card className={`book-card ${props.selected ? "selected" : ""}`} onClick={clickBook}>
			<Card.Content><Icon name="window close" onClick={(e) => {e.stopPropagation(); props.deleteBook(props.book.title)}}/></Card.Content>
			<Card.Header>
				<h3>{props.book.title}</h3>
			</Card.Header>
			<Card.Meta>
				<p>{props.book.author}</p>
			</Card.Meta>
			<Card.Content>
				<p>{props.book.synopsis}</p>
			</Card.Content>
		</Card>
	)
}