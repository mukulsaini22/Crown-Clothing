import React from "react";
import "./collection.page.styles.scss";
import { Collectionselect } from "../../redux/shopdata/shop.selector";
import Collectionitem from "../../components/collectionitem/collectionitem.component";
import {connect} from "react-redux";


const CollectionPage = ({ collection }) =>
{

  const {title,items} = collection;

return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item=>(
        <Collectionitem key ={items.id} item={item}/>))}
      </div>

    </div>

    )

};

const mapStateToProps = ( state , ownProps ) =>({

  collection :Collectionselect(ownProps.match.params.collectionId)(state)

});

export default connect(mapStateToProps)(CollectionPage);