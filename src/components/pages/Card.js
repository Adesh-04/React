import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

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