import React from "react";
import StripeCheckout  from "react-stripe-checkout"


const StripeCheckoutButton = ({price , total}) =>{

const priceForStripe = price*100;
const publishableKey = 'pk_test_51GxCBmCEMdzr1eFt743NWr3nepGzUZrcb6o1GeZ5R0x7QLff3ITzO4YFQDBnqSw9PcwxGsoa9CEJXZn4JTsD6NCe00N0nA3Qv2'


const onToken = token => {
    console.log(token)
    alert('your Payment Successful')
   
}


return(
<StripeCheckout 
label= "Pay Now "
name = "Crown Clothing Pvt. "
billingAddress
shippingAddress
image ='https://sendeyo.com/up/d/f3eb2117da'
description = {`Your Total is ${total}`}
amount= {priceForStripe}
panelLabel = 'Pay Now '
token ={onToken}
stripeKey= {publishableKey}


/>
)

}
export default StripeCheckoutButton;