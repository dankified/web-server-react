import React from 'react';
import {Card, Icon} from 'semantic-ui-react'

export default (props) => {
	if(props.error) {
		return (
			<Card id="error-card" color="red" fluid>
				<Card.Content>
					<Icon name="warning sign" color="red" />
					{props.error}
				</Card.Content>
			</Card>
		)
	} else {
		return null;
	}
}