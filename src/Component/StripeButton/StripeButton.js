import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HB1IqF3Bm2Sb3JJEyBNaFSnOzo6SM4Gk5WFicxA13PE8Rp3Ikyg8pV5i0vRFBaN4LU83OxHU0hR49Z1UXvb6nil00pISzYwpc'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name = 'Crowned Head Clothing Ltd.'
            shippingAddress
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
        
    )
}

export default StripeCheckoutButton;