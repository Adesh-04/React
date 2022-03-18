import React from 'react';
import { Form } from 'react-bootstrap';

export const Header =()=>{


    return(
        <div className='header'>            
            
            <form>
                <label>Name:  </label> <input type='text' placeholder='enter' name='name' />
                <label>Age:  </label> <input type='number' placeholder='enter' name='age' />
                <label>email:  </label> <input type='text' placeholder='enter' name='email' />
            </form>

        </div>
    )
}