import { combineReducers } from 'redux';
import * as navigationReducer from './navigation';
import * as recipesReducer from './recipes';

export default combineReducers(Object.assign(
    navigationReducer,
    recipesReducer
));
