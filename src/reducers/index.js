import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userFetchReducer from './user_reducer';
import horseReducer from './horse_reducers';
import horsesReducer from './horses_reducers';
import settingReducer from './setting_reducer';
import trainingReducer from './training_reducer'
import nav from './nav';

export default combineReducers({
    auth:authReducer,
    user: userFetchReducer,
    horse: horseReducer,
    horses: horsesReducer,
    setting:settingReducer,
    training:trainingReducer,
    nav
});