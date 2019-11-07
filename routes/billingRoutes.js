const express   = require('express');
const router    = express.Router();
const keys      = require('../config/config')
const stripe    = require('stripe')(keys.stripe.stripeSecretKey)

//Stripe docs: https://stripe.com/docs/api
router.post('/api/stripe/', async (req, res) => {
    const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id
    })

    //after sucessful charge, save info to your db
    let user = req.user;
    user.credits = 5;
    console.log(user)    



});

module.exports = router;


//npm stripe (API wrapper)
//charges:
// A charge object is returned by the stripe api
// To charge a credit card, you create a charge object.
// The source property takes the token from checkout.js