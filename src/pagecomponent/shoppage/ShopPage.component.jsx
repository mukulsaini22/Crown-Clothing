import React from "react";
import Shop_Data from './Shop_Data'
import CollectionPreview from "../../components/collectionpreview/collection.preview.component";


class ShopPage extends React.Component{
 constructor(props)
 {

super(props);
this.state ={

  collections : Shop_Data
}

 }

 render() {
  const { collections} = this.state;
return(
   
  <div>
     {
       collections.map(({id , ...othercollectionsProps  }) => (
         <CollectionPreview key ={id }  {...othercollectionsProps} />
       ))
     }
    </div>
)

 }

}


export default ShopPage;


