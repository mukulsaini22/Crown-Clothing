import React from "react";
import "./collection-overview.styles.scss";
import {createStructuredSelector} from 'reselect';
import {connect} from "react-redux";
import CollectionPreview from "../../components/collectionpreview/collection.preview.component";
import {CollectionselectPreiew} from "../../redux/shopdata/shop.selector";

const CollectionOverview = ({collections}) =>(

  
<div className="collection-overview">
{
       collections.map(({id , ...othercollectionsProps  }) => (
         <CollectionPreview key ={id }  {...othercollectionsProps} />
       ))
     }

</div>
)


const mapStateToProps = createStructuredSelector({

    collections:CollectionselectPreiew
  })
  

    
export default connect(mapStateToProps)(CollectionOverview);