import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Page(props: any) {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					{' '}
					CodeTextAPP
				</Navbar.Brand>
				<Nav className="mr-auto">
					<LinkContainer to="/">
						<NavItem><Button style={{ marginRight: '12px' }} variant="outline-light">Inicio</Button></NavItem>
					</LinkContainer>			
					<LinkContainer to="/about">
					<NavItem><Button variant="outline-light">Acerca de</Button></NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		</>
	);
}
export default Page;