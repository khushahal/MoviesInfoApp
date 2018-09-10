import movies from './movies_reducers';
import favouriteMovies from './fav_reducers';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({movies,favouriteMovies});
export default rootReducers;