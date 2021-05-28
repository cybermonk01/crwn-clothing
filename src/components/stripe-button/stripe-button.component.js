import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51Iw6sZSBEAxcP7hFnBgI9cRfZdOTt4IOOVxOxLTLcHqljfv7TRMblESoyoUiGD8PKNG0BXHFPGBTDUsDLZ9ME4pu00NwvftnVZ";
    

  const onToken = token => {
        console.log(token);
        alert(' payment ho gaya');
    }

    return (<StripeCheckout
        label='Paisa de'
        name=" CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg "
        description={`your total is ₹${price}`}
        amount={priceForStripe}
        panelLabel='paisa de na'
        token={onToken}
        stripeKey={publishableKey}


    />
    );
};
export default StripeCheckoutButton;