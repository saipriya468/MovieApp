import React  from "react";
import Proptypes from 'prop-types';
import MovieCard from './MovieCard';

const getMovies=(movies)=>{
    return(
        <div className="card-check">
{
    movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)
}
        </div>
        
    )
}
const MovieList=(props)=>{
    <div>
        {getMovies(props.movies)}
    </div>

}
MovieList.defaultProps={
    movies:[]
};
MovieList.Proptypes={
    movies:Proptypes.array
};
export default MovieList;