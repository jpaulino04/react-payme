import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Payme"
                description="DevOps Service Payment"           
                amount={500}
                token={token => this.props.handleToken(token)}//callback with returned token
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn btn-sm btn-info">Pay With Card</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);