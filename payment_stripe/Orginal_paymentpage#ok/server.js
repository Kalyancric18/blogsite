const express = require('express');
const stripe = require('stripe')('sk_test_51O6s5PSF8QXeGnMDM1JD2GN4CbrbhH0HXsrsrFokdOWIU1dku5xgvHCo7A6jMas1HxRdtp66BMWFFTWpZe6mmELE00a9sdA6L0'); // Replace 'YOUR_SECRET_KEY' with your Stripe secret key

const app = express();
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // Replace with the actual amount in cents
        currency: 'usd',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
});

app.get('/paid-content', (req, res) => {
    // Here, retrieve and render the paid article or blog content
    res.send('This is the paid content.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
