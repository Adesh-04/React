import React from 'react';
import { Container, Row, Col, Button, Stack, Card, Accordion } from 'react-bootstrap'


export const BrandCard = ({title,image}) =>{
	return(
		<Container className="bg-dark" >
			<Row>
				<Card className="bg-dark text-light">
				   {/*<Card.Img src={image} alt="Card image" />
				   				   <Card.ImgOverlay>
				   				     <Card.Title className="">{title}</Card.Title>
				   				   </Card.ImgOverlay>*/}

				  <Card.Body>{title}</Card.Body>
				</Card>

			</Row>
		</Container>
	)
}

export const ProductCard = ({title,image}) =>{
	return(
		<Container>
			
			
				<Accordion>
					<Accordion.Item eventKey='0'>
						<Accordion.Header> {title} </Accordion.Header>
						<Accordion.Body className="text-dark d-flex">
							<img className="rounded w-25"  src={image}/> 
							<Stack>
								<h5>{title}</h5> 
								<p>Astha Flusie for Decorations</p>
							</Stack> 

							<Stack gap={4}> 
								<Button className='h-50' variant="danger">Add to Cart</Button> 
								<Button className='h-50' variant="danger">Add to Wishlist</Button>
							</Stack> 
						</Accordion.Body>
					</Accordion.Item>
				</Accordion> 

			
		</Container>
	)
}