import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavHeader() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>Time Tracking Application</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Timer</Nav.Link>
                    <Nav.Link as={Link} to='/tasks'>Tasks</Nav.Link>
                </Nav>
            </Container>
        </Navbar>)
}

export default NavHeader