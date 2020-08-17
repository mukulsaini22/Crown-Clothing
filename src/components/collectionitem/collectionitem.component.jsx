import React from "react";
import {connect} from "react-redux";
import './collectionitem.styles.scss';
import CustomButton from "../custombutton/custombutton.component";
import { addItems } from "../../redux/cart/cart.action"

const Collectionitem = ({item,addItems}) =>{

  const {imageUrl,name,price} = item;
return(
<div className="collection-item">
 <div  className="image" 
  style ={{
    backgroundImage:`url(${imageUrl})`
  }}  
  /> 


    <div className="collection-footer ">
       <span className="name"> { name } </span>
        <span className="price"> {price} </span>

    </div>
    <CustomButton inverted onClick={()=>{addItems(item)}}>Add to cart</CustomButton>
</div>
) 
  }

;

 
const mapDispatchToProps =dispatch=>(
  {
    addItems :item =>dispatch(addItems(item))
  }
);


export default connect(null,mapDispatchToProps)(Collectionitem);