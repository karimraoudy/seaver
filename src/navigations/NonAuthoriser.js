import React from 'react';
import { StackNavigator } from 'react-navigation';
import {FirstScreen, RegisterPage, LoginPage} from './components';

const NonAuthoriserNavigation = StackNavigator ({
    firstscreen: {screen : FirstScreen},
    login: {screen: LoginPage},
    register: { screen: RegisterPage}
},{
    header: null,
    headerMode: 'none',
   
})
export default NonAuthoriserNavigation;