import React,{Component} from 'react';
import Search from './Search';
import { connect}  from 'react-redux';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';
import '.././App.css';

class MovieResults extends Component{

	render(){

		return(
			<div>
			<Link to="/fav" >Favourite</Link>
			<div className="row">
			  <Search />
			  </div>
			  <div className="row movieResult">
			  {this.props.movieResults.map(item => {
			  	return <MovieItem  movie={item} key={item.id} showFavouriteButton={true}/>
			  })}
			  </div>
			</div>
			);
	}
}

function mapStateToProps(state){
	return {
		movieResults:state.movies
	}
}

export default connect(mapStateToProps,null)(MovieResults);