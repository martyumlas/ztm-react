import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Jz9haGeyGMLyZnyTgrw6SkA9dgi8H34EeZRwuZUlxaG4Rh7zrZ7Zh5vN6uzP2nDWJ28yFj3IszNx6BivB3zjfAL00TcJQOexp'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Umlas Clothing'
            billingAddress
            shippingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
