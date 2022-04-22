import React from 'react';
import logo from  '../../images/logo.jpg';
import Astha from '../../images/Astha.jpg';
import '../../stylesheet/Style.css'
import { Container, Nav, Navbar, Stack, Row, DropdownButton, Col, Form} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export const Header =()=>{

    return(
        <Container fluid>
            <Row>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/" style={{'fontSize': '25px'}}>
                            Whamazon
                        </Navbar.Brand>

                        <Stack className="ms-auto" direction={'horizontal'} gap="5">
                            <DropdownButton variant="dark" title="Products">
                                <DropdownItem href="/info"> Kids </DropdownItem> 
                                <DropdownItem href="/info"> Adults </DropdownItem>
                                <DropdownItem href="/filter"> Filter </DropdownItem> 
                            </DropdownButton>
                            <Nav.Link className="text-light" href="/explore" >Explore</Nav.Link>
                            <Nav.Link className="text-light" href="/cart" >Cart</Nav.Link>
                            <Nav.Link className="text-light" href="/wish" >Wishlist</Nav.Link>
                            <Nav.Link className="text-light" href="/live" >Live Connect <sup>Alpha</sup></Nav.Link>
                        </Stack>

                        <Nav className="ms-auto" >
                            <DropdownButton variant="dark" title="Sign Up">
                                <DropdownItem href="/login"> Login </DropdownItem>
                                <Nav.Link href="/signup" ><DropdownItem href="/signup"> Sign Up </DropdownItem></Nav.Link>
                            </DropdownButton>
                        </Nav>

                    </Container>
                </Navbar>
            </Row>
        </Container>
    )
}

export const Home =()=>{
    return(
        <Container fluid className="text-center border border-3 border-danger bg-dark text-light py-3" >
            <h1 className="mt-auto mb-5">Animation</h1>
            <h1 className="mt-auto">E-commerce Website for Buying merchandise</h1>
        </Container>
    )
}