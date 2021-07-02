
import React from "react";
import { useSelector } from "react-redux";


import  "./checkout.style.scss";
import { selectCartTotal, selectCartItems } from "../../redux/cart/cart.select";


import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

   

const Checkout = () => {



     const cartItems = useSelector( state =>selectCartItems(state));
     const subTotal = useSelector( state => selectCartTotal(state));
     
    return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantitys</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map( 
                cartItem =>
                 (<CheckoutItem key={cartItem.id} cartItem = {cartItem} />)     
                
            )
        }

        <div className="total">
            <span>Total: ₹{subTotal}</span>
           
        </div>
        <div className='test-warning'>
          *Please use the following test credit card for payments*
         <br />
         4242 4242 4242 4242 - Exp: 01/2023 - CVV: 123
        </div>
        <StripeCheckoutButton price={subTotal} />

    </div>
)}

export default Checkout;