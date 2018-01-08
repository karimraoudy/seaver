import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userFetchReducer from './user_reducer';
import horseReducer from './horse_reducers';
import horsesReducer from './horses_reducers';
import nav from './nav';

export default combineReducers({
    auth:authReducer,
    user: userFetchReducer,
    horse: horseReducer,
    horses: horsesReducer,
    nav
});