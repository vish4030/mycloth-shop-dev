
import React from 'react';
import {useSelector, useDispatch } from 'react-redux';


import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.select';

import { ReactComponent as ShoppingIcon } from '../../assects/shopping-bag.svg';
import './cart-icon.style.scss';


const CartIcon = () => {
    const dispatch = useDispatch();
    const itemCounts =  useSelector ( (state) => selectCartItemsCount(state));

   return(
    <div className='cart-icon' onClick ={ () => dispatch(toggleCartHidden()) }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >{itemCounts}</span>
    </div>
)};

export default CartIcon;