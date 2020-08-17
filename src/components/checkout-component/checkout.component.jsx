import React from "react";
import "./checkout.styles.scss";
import {connect} from "react-redux";
import { ClearcartItem , RemoveItem , addItems } from "../../redux/cart/cart.action";




const CheckoutItem = ({cartitem , clearitem,RemoveItem,addItems}) =>{

    const { imageUrl ,name,price,quantity} =cartitem;
    
    return (

<div className="checkout-item">


<div className="image-container">

    <img src={imageUrl} alt="item"/>

</div>


<span className="name">{name}</span>


<span className="quantity">

    <div className="arrow" onClick={()=>RemoveItem(cartitem)}>&#10094;</div>

    <span className="value">{quantity}</span>

    <div className="arrow"  onClick={()=>addItems(cartitem)} > &#10095;</div>
</span>



<span className="price">{price}</span>

<div className="remove-button" onClick={()=>clearitem(cartitem )}>&#10005;</div>

</div>

)}

const mapDispatchToProps =dispatch =>(
    {
     clearitem : item => dispatch(ClearcartItem(item)),
      addItems : item =>dispatch(addItems(item)),
      RemoveItem : item =>dispatch(RemoveItem(item))



      }
) 

export default connect(null,mapDispatchToProps)(CheckoutItem);