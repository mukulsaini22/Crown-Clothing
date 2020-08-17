import React from "react";
import "./directory.styles.scss";
import {connect} from "react-redux";
import Menuitem from "../menu-item/menu-item.component";
import {createStructuredSelector} from "reselect";
import { DirectorySelectSection } from "../../redux/directory/directory.selector";

const Directory = ({sections}) => {
  return (


    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionsProps }) => (
        <Menuitem key={id} {...otherSectionsProps} />
      ))}
    </div>


  );
}


const mapStateToProps = createStructuredSelector({
  sections:DirectorySelectSection
})

export default connect(mapStateToProps)(Directory);
