import React  from 'react';
import {addToFavorite , removeToFavorite} from '../actions';
import {connect} from 'react-redux';

const urlImg = "https://image.tmdb.org/t/p/w342";
const movieUrl = "https://www.themoviedb.org/movie/";


class MovieItem extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			faviourted: false
		};
	}

	addFavouriteToStore(){
		this.setState({faviourted: !this.state.faviourted});
		this.props.addToFavorite(this.props.movie);
	}

	removeFavouriteToStore(){		
		this.props.removeToFavorite(this.props.movie);
		this.setState({faviourted: !this.state.faviourted});
		
	}

	displayFav(){
		if(this.state.faviourted){
			return <span className="glyphicon glyphicon-heart" onClick={()=>this.removeFavouriteToStore()}> </span>
		}
		else{
			return <span className="glyphicon glyphicon-heart-empty" onClick={()=>this.addFavouriteToStore()}> </span>
		}
	}
   
	render(){

		return(
			
		  <div className="col-sm-12 col-md-4">
		    <div className="thumbnail">
		      <a href={movieUrl + this.props.movie.id} target="_blank"><img src={urlImg+this.props.movie.poster_path} alt={this.props.movie.title + 'image'} /></a>
		      <div className="caption">
		        <h3>{this.props.movie.title}</h3>
		        <p>{this.props.movie.overview}</p>
		        <p>Release Rate - {this.props.movie.release_date}</p>
		        <p>Rating - <span className="badge badge-danger"><span className="glyphicon glyphicon-star" aria-hidden="true"></span>{this.props.movie.vote_average}</span></p>
		        <p> {this.props.showFavouriteButton ? this.displayFav() : null }</p>
		      </div>
		    </div>
		  </div>
		);
	}
}

export default connect(null,{addToFavorite , removeToFavorite})(MovieItem);