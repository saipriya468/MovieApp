import React from "react";
import Proptypes from "prop-types";
let Header=(props)=>{
    Header.defaultProps={
        title:'Title',  
        
    }
    Header.Proptypes={
        title:Proptypes.string,
    }
    return(
        <div>
            <nav className="header navbar navbar-dark bg-dark">
               <div className="container">
                <div className="row m-auto">
                      <i className="fa fa-film fa-2x ml-auto"></i>
                      <div>{props.title}</div>
                </div>
               </div>
            </nav>
        </div>
    )
}
export default Header;