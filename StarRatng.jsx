import React from "react";
import PropTypes from "prop-types";
const width=20;
const styles={
    starsInner:{
        width:`${width}px`,
    },
    starsEmptyInner:{
        position: 'absolute',
        width:`${width}px`,
    },
    starsOuter:{
        overflow:`hidden`,
    },
    star:{
        padding: '1px',
    }
};
    const cropWidth=()=>{
return Math.floor(rating*width/5);
    }

let StarRating=()=>{
    const contStyle={width:`${cropWidth(props.rating)}px`};
    StarRating.defaultProps={
        rating:0,
    }
    StarRating.PropTypes={
        reting:PropTypes.number
    }

    return(
        <div>
           <div style={styles.starsOuter}>
              <div style={styles.starsEmptyInner}>
         <i className="fa fa-star-o fa-lg" style={styles.star}></i>
         <i className="fa fa-star-o fa-lg" style={styles.star}></i>
         <i className="fa fa-star-o fa-lg" style={styles.star}></i>
         <i className="fa fa-star-o fa-lg" style={styles.star}></i>
         <i className="fa fa-star-o fa-lg" style={styles.star}></i>
              </div>
              <div style={styles.starsInner}>
              <i className="fa fa-star-o fa-lg" style={styles.star}></i>
<i className="fa fa-star-o fa-lg" style={styles.star}></i>
<i className="fa fa-star-o fa-lg" style={styles.star}></i>
<i className="fa fa-star-o fa-lg" style={styles.star}></i>
<i className="fa fa-star-o fa-lg" style={styles.star}></i>
              </div>
           </div>
        </div>
    )
}
export default StarRating;