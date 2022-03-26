import React from 'react';
import logo from  '../images/logo.jpg';
import Astha from '../images/Astha.jpg';
import '../stylesheet/Style.css'

export const Header =()=>{


    return(
        <div className='header bg-light'>            
            <div className='container-fluid bg-light ' > 
                <div className='row bg-dark border border-dark border-3'>
                    <div className='col-md-3 '>
                        <img className='HeaderLogo' src={logo} width='100' alt='*/logo'/>
                    </div>
                    <div className='col-md-7 border pt-3 text-end '>
                        <button className='HeaderButton text-info'>Products v</button>
                        <button className='HeaderButton text-danger'>Cart v</button>
                        <button className='HeaderButton text-success'>See More v</button>
                        <button className='HeaderButton text-primary'>Know More v</button>
                        <button className='HeaderButton text-warning'>Sales v</button>
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
                        <p>drop</p>
                    </div>
                </div>

            

            </div>
        </div>
    )
}