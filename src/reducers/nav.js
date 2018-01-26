import {NavigationActions} from 'react-navigation';
import RootNavigation from '../navigations/root';

const { getStateForAction, getPathAndParamsForState } = RootNavigation.router;
const initialState = getStateForAction(NavigationActions.init());

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case NavigationActions.BACK:
        case NavigationActions.INIT:
        case NavigationActions.NAVIGATE:
        case NavigationActions.RESET:
        case NavigationActions.SET_PARAMS:
        case NavigationActions.URI:
          const nextState = getStateForAction(action, state);
    
          // Return current state if the next route name is the same as the current
          if (nextState === null || getPathAndParamsForState(nextState).path === getPathAndParamsForState(state).path) {
            return state;
          }
    
          return nextState;
    
        default:
          return state;
      }
    }