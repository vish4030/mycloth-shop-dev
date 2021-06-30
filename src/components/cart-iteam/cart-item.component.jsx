
import React from 'react';

import './cart-item.style.scss';


const CartItem = ({item:{name, imageUrl, price, quantity }}) => {
  
    return(

     <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-detail">
            <span className="name">{name}</span>
            <span className="price"> ${price}x{quantity}</span>
        </div>

    </div>
)}

export default CartItem;