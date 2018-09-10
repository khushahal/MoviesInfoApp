import React from 'react';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';

class FavouriteMovieList extends React.Component{


	render(){
		return(
			<div>
			<Link to="/" >Search Movies</Link>
			<h4> My favourite movie list </h4>
			 {
				this.props.favourite.map(function(movie) {
					return <MovieItem movie={movie}  key={movie.id} showFavouriteButton={false}/>
				}
				)
			}
			</div>
				)
	}
}

function addStateToProps(state){
return{
	favourite:state.favouriteMovies
}
}

export default connect(addStateToProps,null)(FavouriteMovieList);
