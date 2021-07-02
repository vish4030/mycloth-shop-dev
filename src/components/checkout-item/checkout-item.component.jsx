
import React from 'react';
import { useDispatch } from 'react-redux';

import './checkout-item.style.scss';

import { addItems, clearCartItem, removeItem } from '../../redux/cart/cart.action';



const CheckoutItem = ({cartItem}) => {
      
    const {name, imageUrl, quantity, price} = cartItem;
   
    const dispatch = useDispatch();

    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"  />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={ () => dispatch(removeItem(cartItem)) }>&#10094;</div>
            <span className="value">{quantity}</span> 
            <div className="arrow" onClick={ () => dispatch(addItems(cartItem)) }>&#10095;</div>
            </span>
        <span className="price">₹{price}</span>
        <div className="remove-button" onClick={ () => dispatch(clearCartItem(cartItem)) } >&#10005;</div>
    </div>
)}

export default CheckoutItem;