import React from 'react';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import { ProductCard } from './Card.js';
import Astha from '../../images/Astha.jpg';
import './../../stylesheet/Style.css';

export const Explore = () =>{
	return(
		<Container fluid className="pt-3 bg-lavender">
			<Row className="p-3">
				<Col md={{span:3}} className="bg-light p-3 m-1 rounded">
					<Stack gap={3}>
						<span>Size: {'Medium'}</span>
						<span>Price: {'1200'} Rs.</span>
						<span>Color: {'Black'}</span>
						<span>Rating: {'4 Star'}</span>
					</Stack>
					<Button className="m-5 mb-3" href="/filter" variant="outline-danger"> Change Filters </Button>
					
				</Col>
				<Col md={{span:8}} className="bg-dark p-3 m-1 text-light text-center rounded-3">
					<Stack gap={3}>
						<ProductCard title="Asta Flusie" image={Astha} />
						<ProductCard title="Asta Flusie" image={Astha} />
					</Stack>
				</Col>
			</Row>
		</Container>
	)
};