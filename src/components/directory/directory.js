import React from "react";
import MenuItem from "../menu-item/MenuItem";
import './directory.scss'

const Directory = ({sections}) => (     
  <div className="directory-menu">
      {sections.map((section) =>(
          <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl}
           size={section.hasOwnProperty('size') && section.size} linkUrl={section.linkUrl}/>
      ))}
  </div>
 )  




export default Directory