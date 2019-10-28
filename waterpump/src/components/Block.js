import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'

const Block = () => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	)
}

export default Block
