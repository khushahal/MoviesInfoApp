import React, { Component } from 'react';
import MovieResults from './MovieResults';
import '../App.css';
import FavouriteMovieList from './FavouriteMoviesList';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';



class App extends Component {

  render() {
    return (
    	<div className="row">
      <div className="container">
      <div className="row text-center">
	      <div className="jumbotron">
			  <h1 className="display-4">Movies information App !</h1>
			  <p className="lead">Get your favourite movies information here. !!</p> 
			</div>
		</div>
		<div className="row">
		<Router>
			<Switch>
				<Route exact path="/" component={MovieResults} />
				<Route  path="/fav" component={FavouriteMovieList} />
			</Switch>
		</Router>
		</div>
      </div>
      </div>
    );
  }
}

export default App;
