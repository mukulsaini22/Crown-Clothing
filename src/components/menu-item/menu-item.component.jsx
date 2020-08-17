import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const Menuitem = ({ title, imageUrl, size,history, match ,linkUrl }) => (
  <div className={`${size} menu-item`}
       onClick ={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-Image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <span className="subtitle"> Shop Now </span>
    </div>
  </div>
);

export default withRouter(Menuitem) ;
