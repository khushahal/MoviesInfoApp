import React,{Component} from 'react';
import {form,FormControl ,FormGroup ,ControlLabel,Button} from 'react-bootstrap';

import {API_KEY } from '../Config';
import {movies} from '../actions';
import {connect} from 'react-redux';

class Search extends Component{

	constructor(props){
		super(props);

		this.state={
			query:''
		}

	}

	//handle form submit event and by default enter button click event when in form 
	handleSubmit(event){
		event.preventDefault(); 
		this.search(event);
	}

	search(event){
		event.preventDefault();
		let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.query}&language=en-US&page=1&include_adult=true`;
		
		fetch(url,{
			method:'GET'
		}).then(response => response.json())
		.then(jsonObj=> this.props.movies(jsonObj.results));
	}

	render(){

		return(
			<div className="row">
				<form   className="form-inline col-md-4 col-md-offset-4" onSubmit={(e) => this.handleSubmit(e)}>
				   <FormGroup>
				  	<ControlLabel> Search </ControlLabel>
				  	{' '}
				  	<FormControl type="text"
				  		placeholder="wonder women" onChange={(e)=>this.setState({query: e.target.value}) }> 
				  	</FormControl> 
				  	{' '}   
				  	<Button  bsStyle='primary' onClick={(e)=>this.search(e)}>Submit</Button> 
				  </FormGroup>
				</form>
			</div>
			);
	}
}

export default connect(null,{movies})(Search);