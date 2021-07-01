
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';


import  { selectCartItems } from '../../redux/cart/cart.select';
import { toggleCartHidden } from '../../redux/cart/cart.action';


import './cart-dropdown.style.scss';


import CartItem from '../cart-iteam/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


const CartDropdown = ({history}) => { 

    const cartItems = useSelector( (state) => selectCartItems(state));
    const dispatch = useDispatch();

     return(
     <div className="cart-dropdown" >
         <div className="cart-items">
             {
                 cartItems.length ?
                 (cartItems.map((cartItem)=> (
                     <CartItem key={cartItem.id} item={cartItem} />
                   )
                 )):
                ( <span className="empity-message">your cart is empity</span>)
             }
         </div>
         <CustomButton onClick={ () => {
             history.push('/checkout');
             dispatch(toggleCartHidden());
             } } >CHECKOUT</CustomButton>
     </div> 
)};

export default withRouter(CartDropdown);