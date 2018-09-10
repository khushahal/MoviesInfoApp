import React, { Component } from 'react';
import MovieResults from '../src/components/MovieResults';
import './App.css';
import FavouriteMovieList from '../src/components/FavouriteMoviesList';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {

  render() {
    return (
      <div className="container">
      <div className="row text-center">
	      <div className="jumbotron">
			  <h1 className="display-4">Movies information App!</h1>
			  <p className="lead">Get your favourite movie information here.</p> 
			</div>
		</div>
		<div className='row'>
		<Router>
			<Switch>
				<Route exact path="/" component={MovieResults} />
				<Route  path="/fav" component={FavouriteMovieList} />
				<Route path="/about" component={About} />
			</Switch>
		</Router>
		</div>
      </div>
    );
  }
}

export default App;
