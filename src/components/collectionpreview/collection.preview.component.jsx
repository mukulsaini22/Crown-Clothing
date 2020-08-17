import React from "react";

import Collectionitem from  "../collectionitem/collectionitem.component";


import "./collectionpreview.styles.scss";

const CollectionPreview = ( { items,title }) => (



  <div className="collection-preview ">

   <h1 className="title"> {title.toUpperCase()} </h1>
   <div className="preview">
       {


       items.filter((item ,idx )=>idx < 4)
       .map((items) =>(
       <Collectionitem key ={items.id} item = {items} />
     ))}

     </div>



</div>




)

export default CollectionPreview;