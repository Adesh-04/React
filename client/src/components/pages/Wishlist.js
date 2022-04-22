import React from 'react';
import { Table, Button } from 'react-bootstrap'
import './../../stylesheet/Style.css'

export const WishList = () =>{
	return(
		<div className='container text-center pt-3'> 

			<h1 className='mb-5' > Manage your Wishlist! </h1>

			<Table striped hover className='table' >
				<thead className='tableHead' >
					<tr>
						<th>Sr.No</th>
						<th>Product</th>
						<th className='d-hidden'>hidden village</th>
						<th>Price (INR)</th>
						<th>Quantity</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody className='tableBody' id='tableContent'>
					<tr> 
						<td>1.</td>
						<td colSpan={2}>Product_name</td>
						<td><span>1000INR</span></td>
						<td>3</td>
						<td>
							<Button variant="info">Remove</Button>
							<Button variant="danger">Add to Cart</Button>
						</td>


					</tr>

						
				</tbody>
			</Table>

		</div>
	)
} 