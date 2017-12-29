import React from 'react';
import { StackNavigator } from 'react-navigation';
import {FirstScreen, RegisterPage, LoginPage, ResetPage} from './components';
import {EditProfilMenu} from './Screens';

const NonAuthoriserNavigation = StackNavigator ({
    firstscreen: {screen : FirstScreen},
    login: {screen: LoginPage},
    resetPass: {screen: ResetPage},
    register: { screen: RegisterPage}
},{
    header: null,
    headerMode: 'none',
   
})
export default NonAuthoriserNavigation;