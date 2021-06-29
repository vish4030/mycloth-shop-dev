import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';


const HeaderPage = () => (
    <div className='header'>
       

      <div className='options'>
         <Link className='option' to='/'>
           Home
         </Link>
         <Link className='option' to="/shop">
            SHOP
         </Link>
         <Link className='option' to="/Contact">
            CONTACT
         </Link>
        </div> 
    </div>
)

export default HeaderPage;
