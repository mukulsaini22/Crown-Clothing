import React from "react";
import "./checkout.style.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import {CartTotalPriceSelect} from "../../redux/cart/cart.selector";
import {CartItemsSelect} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-component/checkout.component";
import  StripeCheckoutButton  from "../../components/stripe.component/stripe.component";

const CheckoutPage = ({cartitem,total}) =>(
 <div className="checkout-page">
     {console.log('value of total is ',total)}

<div className="checkout-header">
<div className="header-block">
<span> Product</span>

</div>
<div className="header-block">
<span> Description </span>

</div><div className="header-block">
<span> Quantity</span>

</div><div className="header-block">
<span> Price</span>

</div><div className="header-block">
<span> Remove</span>

</div>


</div>
{cartitem.map(cartit=>
       <CheckoutItem  key={cartit.id} cartitem ={cartit} />)}

<div className="total">
total:${total}
</div>
<div className="test-card">
    Please Use the Following Test Credit Card :<br/>
    4242 4242 4242 4242 --  exp : 11/20 -- cvc : 123
</div>
<StripeCheckoutButton price = {total}/>
</div>

);

const mapStateToProps =createStructuredSelector(

    {
    cartitem :CartItemsSelect,
    total:CartTotalPriceSelect
})

export default connect(mapStateToProps)(CheckoutPage) ;