import React from "react";
import PropTypes from 'prop-types';
import StarRating from "../StarRatng";
let MovieCard=(props)=>{
return(
    <div>
                          <div className="container">
                          <div className="card">
                          <div className="card-header">
                                 <img src={props.movie.images.download.jpg} alt=''/>
                          </div>
                          <div className="card-body">
                             <h2 className={card-title}>{props.movie.title}</h2>
                             <h6 className={card-subtitle}>{props.movie.subtitle}</h6>

                          </div>
<div className="card-footer">
<div className="clearfix">
<div className="float left mt-1">
    <StarRating rating={props.movie.rating}/>
</div>
<div className="card-footer-badge float-right">{props.movie.rating}</div>
</div>

</div>
                          </div>

                          </div>

    </div>

)
MovieCard.prototypes={
    movie:PropTypes.object,
}
MovieCard.defaultProps={
    movie:[],
}
}
export default MovieCard;