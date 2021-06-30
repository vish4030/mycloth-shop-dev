import React from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItems } from '../../redux/cart/cart.action';


import './collection-item.style.scss';

const CollectionItem = ({item}) => { 
    
    const dispatch =  useDispatch();

    const { name, price,imageUrl} = item;

    return(
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}} />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>₹{price}</span>
        </div>
        <CustomButton onClick= {() => dispatch(addItems(item))} inverted='true' >Add to Cart</CustomButton>
    </div>
)}

export default CollectionItem;