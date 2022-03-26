import React from 'react';
import logo from  '../images/logo.jpg';
import Astha from '../images/Astha.jpg';
import '../stylesheet/Style.css'
import { Dropdown, NavDropdown, Container, Nav, Navbar } from 'react-bootstrap';

export const Header =()=>{


    return(
        <div className='header bg-light'>            
            <div className='container-fluid bg-light ' > 
                <div className='row bg-dark border border-dark border-3'>
                    <div className='col-md-3 '>
                        <img className='HeaderLogo' src={logo} width='100' alt='*/logo'/>
                    </div>
                    <div className='col-md-7 dropdown border pt-3 text-end '>
                        <button className='HeaderButton dropdown-toggle text-info' id='productId' type='button' data-toggle='dropdown'>Products</button>
                        <button className='HeaderButton text-danger'>Cart</button>
                        <button className='HeaderButton text-success'>See More</button>
                        <button className='HeaderButton text-primary'>Know More</button>
                        <button className='HeaderButton text-warning'>Sales</button>

                        <div className='dropdown-menu' aria-labelledby='productId'>
                            <ul>
                                <li className='dropdown-item'>firts</li>
                                <li className='dropdown-item'>firts</li>
                                <li className='dropdown-item'>firts</li>
                            </ul>
                        </div>


                    </div>
                    <div className='col-md-2 pt-3 text-center'>
                        <button className='HeaderButton text-info'>Login</button>

                        <button className='HeaderButton text-warning'>Signout</button>

                    </div>

                </div><br/>

                <div className='row bg-light'>
                    <div className='col-md-10 text-center bg-light'>
                        <img src={Astha} width='990' alt='*/Astha' />
                    </div>
                    <div className='col-md-2 '>
                        
                     
                            
                    </div>
                </div>

            

            </div>

            
        </div>
    )
}