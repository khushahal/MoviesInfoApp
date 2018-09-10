import {ADD_FAV} from '../actions';
import {REMOVE_FAV} from '../actions';

export default function favouriteMovies(state = [],action){
	switch(action.type){
		case ADD_FAV:

		//updating state
		let favouritlist = [...state , action.movie];
		return favouritlist;

		case REMOVE_FAV:
		
		favouritlist = state.filter(item => item.id !== action.movie.id);
		return favouritlist;  

		default:
		return state;
	}
}