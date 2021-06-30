
import React from 'react';
import { useSelector } from 'react-redux';


import './cart-dropdown.style.scss';

import CartItem from '../cart-iteam/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


const CartDropdown = () => { 

    const cartItems = useSelector( (state) => state.cart.cartItems);

     return(
     <div className="cart-dropdown" >
         <div className="cart-items">
             {
                 cartItems.map((cartItem)=> (
                     <CartItem key={cartItem.id} item={cartItem} />
                 ))
             }
         </div>
         <CustomButton>CHECKOUT</CustomButton>
     </div> 
)};

export default CartDropdown;