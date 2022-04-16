import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './../../stylesheet/Style.css'

export const Explore = () =>{
	return(
		<Container fluid className="mt-3 bg-dark">
			<Row className="p-3">
				<Col md={{span:3}} className="bg-light p-3 m-1 rounded">
					<Button href="/filter" variant="outline-danger"> Change Filters </Button>
					
				</Col>
				<Col md={{span:8}} className="bg-lightgrey p-3 rounded-3">
					Hi i am Content
				</Col>
			</Row>
		</Container>
	)
};