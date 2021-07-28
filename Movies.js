import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
class Movies extends React.Component{
    constructor(){
        super();
        this.state={
            movies:[]
        };
    }
    render(){
        return(
            <div>
                <div className='contaner-fluid' style={{marginLeft:'-10px'}}>
                  <div className="d-flex flex-row">
                  <div className="col-sm-8">
<MovieList movies={this.state.movies}/>
                  </div>

                  </div>

                </div>
            </div>
        )
    }
}
export default Movies;