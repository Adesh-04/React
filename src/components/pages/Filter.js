import React from 'react'
import { Button, Form, Stack, ButtonGroup, Container, DropdownButton, Row, Col, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

export const Info = () => {
  var msymbol = "\u2642";
  var fsymbol = "\u2640";
  var whitespace = "\u0020";
  return (
    <Container className="text-center mt-5">
        <h1>Whamazon</h1><br/>
        <p><b>Tell us more about yourself</b></p><br/>
        <span>Who do you shop for?</span><br/>

        <Button className="m-3" variant="primary">Woman{fsymbol}</Button>
        <Button className="m-3" variant="primary">Man   {msymbol}</Button><br/>

        <span>How Old are you?</span><br/>
        <DropdownButton className="mt-3" variant="primary" title="Select ...">
            <DropdownItem >13 - 17</DropdownItem>
            <DropdownItem >18 - 24</DropdownItem>
            <DropdownItem >25 - 29</DropdownItem>
            <DropdownItem >30 - 39</DropdownItem>
            <DropdownItem >40+</DropdownItem>
        </DropdownButton>

        <Button href="/" className="mt-5" variant="primary">Finish</Button>
        

    </Container>
  )
}

export const FilterPage = () => {
  return(
    <Container fluid>
      <Navbar>
        <NavbarBrand> FILTERS </NavbarBrand>
        <Nav.Link className="ms-auto text-danger" href="/filter">Clear All</Nav.Link>
      </Navbar>
      <Row className="mt-3 px-5" >
            <Stack direction={'horizontal'} gap={5} className="ms-5">
              <button className="filter-button btn btn-outline-dark">Size</button>
              <button className="filter-button btn btn-outline-dark">Price</button>
              <button className="filter-button btn btn-outline-dark">Color</button>
              <button className="filter-button btn btn-outline-dark">Brand</button>
              <button className="filter-button btn btn-outline-dark">Rating</button>
            </Stack>
      </Row>
      <hr/>

      <Stack className="fixed-bottom bg-dark py-3" direction={'horizontal'}>
        <Button href="/" className="mx-auto" variant='secondary'>Close</Button>
        <Button className="mx-auto" variant='outline-danger'>Apply</Button>
      </Stack>
    </Container>
  )
}