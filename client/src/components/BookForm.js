import React from 'react';
import {Form} from 'semantic-ui-react';


function generateButton(type, props) {
	switch(type) {
		case "create": {
			return <Form.Button onClick={() => {props.createBook(props.bookForm)}} disabled={!props.bookForm.author || !props.bookForm.title || !props.bookForm.synopsis}>Submit</Form.Button>;
		}
		case "update": {
			return <Form.Button onClick={() => props.updateBook(props.bookForm)} disabled={!props.bookForm.author || !props.bookForm.title || !props.bookForm.synopsis}>Update</Form.Button>;
		}
		default: {
			return null;
		}
	}
}

export default (props) => {
	return (	
		<React.Fragment>
			<h1>{Object.keys(props.selectedBook).length === 0 ? "Create Book" : "Update Book"}</h1>
			<Form id="create-book-form">
				<Form.Input onChange={(e) => props.handleInputChange('title', e.target.value)} value={props.bookForm.title} label="Title" type="text"/>
				<Form.Input onChange={(e) => props.handleInputChange('author', e.target.value)} value={props.bookForm.author} label="Author" type="text" />
				<Form.TextArea onChange={(e) => props.handleInputChange('synopsis', e.target.value)} value={props.bookForm.synopsis} label="Synopsis" placeholder="Short book synopsis"/>
				{Object.keys(props.selectedBook).length === 0 ? generateButton('create', props) : generateButton('update', props)}
			</Form>
		</React.Fragment>
	)
}