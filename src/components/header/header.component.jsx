import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import './header.style.scss';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.uitils';
import CartIcon from '../cart-icon/cart-icon.component';


const Header = () => {
   
   const currentUser  = useSelector((state) => state.user.currentUser);
   const hidden = useSelector( (state) => state.hidden.hidden);


   return( <div className='header'>
       

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
         {
            currentUser ?
            <div className='option' onClick={() =>auth.signOut()}>SIGNOUT</div>
            :
            <Link className='option' to='/signin'>SignIn</Link>
         }
         <CartIcon  />
        </div> 
        <div>
           {hidden ? null :<CartDropdown  />}
        </div>
    </div>
 )
}
export default Header;
