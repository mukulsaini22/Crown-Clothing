import React from "react";
import {CartItemsSelect} from "../../redux/cart/cart.selector";
import CustomButton from "../custombutton/custombutton.component";
import {connect} from "react-redux";

import "./cartdropdwon.styles.scss";
import CartItem from "../cart-item/cart.items.component";
import {createStructuredSelector} from 'reselect';
import {withRouter} from "react-router-dom";
import {ToggelCartReducer} from "../../redux/cart/cart.action"

const CartDropdown = ({cartitems , history,dispatch }) =>(

    <div className="cart-dropdown">
    <div className="cart-items" >
       
        {
            cartitems.length ?
       cartitems.map(cartitem=> ( <CartItem  key={cartitem.id} items ={cartitem}/>)) 
       : <span className="empty-class">  Your Cart Is empty </span>

        }
    
</div>
    
    <CustomButton onClick= {()=>{
        history.push('/checkout');
        dispatch(ToggelCartReducer())
    }} >Go to Checkout </CustomButton>

    </div>
) 

const mapStateToProps = createStructuredSelector(
    {


cartitems :  CartItemsSelect

});

export default withRouter(connect(mapStateToProps)(CartDropdown));