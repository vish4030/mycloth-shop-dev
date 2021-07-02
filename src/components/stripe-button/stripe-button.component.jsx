
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price *0.72;
  const publishableKey = 'pk_test_51J8gRoSH3VDYogR1QZi7VDKhe05UKsBStS0aPumMpzCVylQiTVIpw1O4Iwn2GGsrdsp778ZIXQLm1mn6pTHMJ2uk00PiuCKAQs';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='My Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;