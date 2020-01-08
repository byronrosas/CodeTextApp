import React, { Fragment } from 'react';
import Header from '../header';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Show from '../show';
function Page(props: any) {
	const {
		handleSubmit,
		handleChange
	} = props;
	return (
		<Fragment>
			<Header />
			<Container>
				<Row>
					<Col>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="formBasicText">
								<Form.Label>Texto</Form.Label>
								<Form.Control type="text" placeholder="Ingrese un texto..." onChange={handleChange} />
								<Form.Text className="text-muted">
									Ingrese un texto dirigido hacia nuestro servidor.
    							</Form.Text>
							</Form.Group>
							<Button variant="primary" type="submit">
								Enviar
  							</Button>
						</Form>
					</Col>
					<Col><Show /></Col>
				</Row>
			</Container>			
		</Fragment>
	);
}
export default Page;