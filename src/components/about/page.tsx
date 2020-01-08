import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../header';
function Page(props:any)
{
	return (
		<Fragment>
			<Header />		
			<br />
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>Práctica:</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Version 1</Card.Subtitle>
					<Card.Text>
						Autor: Byron Rosas
			  		</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	);
}
export default Page;