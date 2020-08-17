import React from "react";
import {connect} from "react-redux";
import { CartCountSelect } from "../../redux/cart/cart.selector";

import "./cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../assets/cart.svg";
import {ToggelCartReducer} from "../../redux/cart/cart.action";

 const CartIcon = ( {ToggelCartReducer , CountCart} ) =>(
<div className="cart-icon" onClick = { ToggelCartReducer } >

<ShoppingIcon className='shopping-icon' />
 <span className="item-count"> {CountCart}</span>

</div>

)

const mapDispatchToProps = dispatch => (
{
ToggelCartReducer : () =>  dispatch(ToggelCartReducer() )
}
);

const mapStateToProps =  state =>(
    {
       CountCart : CartCountSelect(state)
    }
);

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) ;