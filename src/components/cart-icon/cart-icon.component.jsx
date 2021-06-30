
import React from 'react';
import { useDispatch } from 'react-redux';


import { toggleCartHidden } from '../../redux/cart/cart.action';


import { ReactComponent as ShoppingIcon } from '../../assects/shopping-bag.svg';
import './cart-icon.style.scss';


const CartIcon = () => {

    const dispatch = useDispatch();

   return(
    <div className='cart-icon' onClick ={ () => dispatch(toggleCartHidden()) }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >0</span>
    </div>
)};

export default CartIcon;