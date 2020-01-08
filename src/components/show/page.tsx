import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
function Page(props: any) {
	const {
		text
	} = props;
			
	return (
		<Fragment>		
			<br />
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>Mensaje enviado:</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">El texto que se envio, es recibido en esta tarjeta:</Card.Subtitle>
					<Card.Text>
						{text.text}
			  		</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	);
}

export default Page;
