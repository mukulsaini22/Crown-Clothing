import React from "react";
import { Link } from "react-router-dom";
import "./headercomponent.styles.scss";
import { ReactComponent as Logo} from "../assets/original.svg";
 import { auth } from "../firebase/firebase.file";
 import "../../App";
 import CartDropdown from "../cartdropdown/cartdropdown.component";
import {connect} from "react-redux";
import CartIcon  from "../cart/carticon.component";
import {CartHiddenSelect} from "../../redux/cart/cart.selector";
import {UserCurrentStateSelect} from "../../redux/user/user.selector";
import {createStructuredSelector} from 'reselect'

const Header = ({currentState ,hidden})=>  (

 <div className="header">
  <Link className = " logo-container" to="/">
  <Logo className="Logo" />
   
  </Link>

  <div className="options">
    <Link className="option" to = "/shop">
  Shop
</Link>


{
  currentState 
  ?
  <div className="option" onClick={() => auth.signOut()}>
    Sign Out
  </div>
  :
  <Link to = "/signin" className="option">
    Sign IN
  </Link>
}
<CartIcon />
</div> 


{ hidden ? null : <CartDropdown /> }

 </div>

);

const mapStateToProps = createStructuredSelector({
  currentState : UserCurrentStateSelect,
  hidden :CartHiddenSelect
});

export default connect(mapStateToProps)(Header);