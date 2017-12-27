import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userFetchReducer from './user_reducer';

export default combineReducers({
    auth:authReducer,
    user: userFetchReducer
});