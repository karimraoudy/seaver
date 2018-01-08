import {NavigationActions} from 'react-navigation';
import RootNavigation from '../navigations/root';
const initialState = RootNavigation.router.getStateForAction(NavigationActions.init());
export default (state = initialState,action) => {
    const nextState = RootNavigation.router.getStateForAction(action,state);
    return nextState || state;
}