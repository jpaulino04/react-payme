import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Payme"
                description="DevOps Service Payment"           
                amount={500}
                token={token => console.log(token)}//callback with returned token
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn btn-sm btn-info">Pay With Card</button>
            </StripeCheckout>
        )
    }
}

export default Payments;