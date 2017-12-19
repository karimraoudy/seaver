import {StackNavigator } from 'react-navigation';
import NonAuthoriserNavigation from './NonAuthoriser';
import AuthoriserNavigation from './authoriser';

const RootNavigation = StackNavigator({
    NonAuthoriser: { screen: NonAuthoriserNavigation},
    Authoriser: { screen: AuthoriserNavigation }
},{
    header: null,
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
      },
});

export default RootNavigation;