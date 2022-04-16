import React, { useState } from 'react'
import { Button, Form, Stack, ButtonGroup, Carousel, Container, DropdownButton, Row, Col, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import Astha from './../../images/Astha.jpg'
import {BrandCard} from './Card'

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
        <Button className="m-3" variant="primary">Man  {msymbol}</Button><br/>

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

  const [size, setSize] = useState(true);
  const [price, setPrice] = useState(false);
  const [color, setColor] = useState(false);
  const [brand, setBrand] = useState(false);
  const [rate, setRate] = useState(false);

  return(
    <Container fluid>
      <Navbar>
        <NavbarBrand> FILTERS </NavbarBrand>
        <Nav.Link className="ms-auto text-danger" href="/filter">Clear All</Nav.Link>
      </Navbar>
      <Row className="mt-3 px-5" >
            <Stack direction={'horizontal'} gap={5} className="ms-5">
              <button className="filter-button-dark btn btn-outline-dark" onClick={()=>{
                    setSize(true);
                    setPrice(false);
                    setColor(false);
                    setBrand(false);
                    setRate(false);
              }} >Size</button>

              <button className="filter-button-dark btn btn-outline-dark" onClick={()=>{
                    setSize(false);
                    setPrice(true);
                    setColor(false);
                    setBrand(false);
                    setRate(false);
              }} >Price</button>

              <button className="filter-button-dark btn btn-outline-dark" onClick={()=>{
                    setSize(false);
                    setPrice(false);
                    setColor(true);
                    setBrand(false);
                    setRate(false);
              }} >Color</button>

              <button className="filter-button-dark btn btn-outline-dark" onClick={()=>{
                    setSize(false);
                    setPrice(false);
                    setColor(false);
                    setBrand(true);
                    setRate(false);
              }} >Brand</button>

              <button className="filter-button-dark btn btn-outline-dark" onClick={()=>{
                    setSize(false);
                    setPrice(false);
                    setColor(false);
                    setBrand(false);
                    setRate(true);
              }} >Rating</button>

            </Stack>
      </Row>
      <hr/>

      {
        size?<SizeFilter/>
        :null
      }

      {
        price?<PriceFilter/>
        :null
      }

      {
        color?<ColorFilter/>
        :null
      }

      {
        brand?<BrandFilter/>
        :null
      }
      {
        rate?<RatingFilter/>
        :null
      }

      <Stack className="fixed-bottom bg-dark py-3" direction={'horizontal'}>
        <Button href="/" className="mx-auto" variant='secondary'>Close</Button>
        <Button href ="/explore" className="mx-auto filter-button-danger" >Apply</Button>
      </Stack>
    </Container>
  )
}

export const SizeFilter = () => {
  return(
    <Container>
      <Form>
			  <Form.Check className='mb-3' name='size' type='checkbox' label='Medium' />
			  <Form.Check className='mb-3' name='size' type='checkbox' label='Small' />
			  <Form.Check className='mb-3' name='size' type='checkbox' label='Large' />
			  <Form.Check className='mb-3' name='size' type='checkbox' label='Extra Large' />

      </Form>

    </Container>
  )
}

export const PriceFilter = () => {

  const [val, setVal] = useState(20);

  let priceVal = val*50

  const handleChange = (e) =>{
    console.log(e.currentTarget.value);
    setVal(e.currentTarget.value)
  }

  return(
    <Container className="">
      <Form>
        <Form.Label> Select Range : {priceVal}</Form.Label><br/>
        <Form.Range className="filter-slider ms-5 mt-3" onChange={ (event)=>{ handleChange(event); } } defaultValue={val} />
      </Form>
    </Container>

    )
}

export const ColorFilter = () => {
  return(
      <Container>
        <Form>
          <Form.Control className='mb-3' defaultValue='#EF1823' type='color'/>
        </Form>
      </Container>
    )
}

export const BrandFilter = () => {
  return(

    <Container fluid className="mb-5 pb-5">

      <Stack direction={'horizontal'} gap={1} >

        <Carousel className="w-25">

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel className="w-25">

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel className="w-25">

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel className="w-25">

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Astha}
              width={'100px'}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Stack>

      <Row className="text-center mt-3 mb-5">
        <Col md={{span:6}}>
          <BrandCard title="Naruto" image={Astha}/>
        </Col>
        <Col md={{span:6}}>
          <BrandCard title="Kakashi Hatake" image={Astha}/>
        </Col>
      </Row>


    </Container>

    )
}

export const RatingFilter = () => {
  return(
    <Container>
      <Stack gap={2}>
        <Form.Check type="radio" name="rating" label="1 star" />
        <Form.Check type="radio" name="rating" label="2 star" />
        <Form.Check type="radio" name="rating" label="3 star" />
        <Form.Check type="radio" name="rating" label="4 star" />
        <Form.Check type="radio" name="rating" label="5 star" />
      </Stack>
    </Container>
  )
}
