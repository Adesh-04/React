import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';

export const Header =()=>{


    return(
        <div className='header'>            
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Image alt="*/" >

                </Image>
                <Container>
                <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Products</Nav.Link>
                    <Nav.Link href="#pricing">Cart</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}