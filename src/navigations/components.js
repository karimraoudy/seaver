import React from 'react';
import { StackNavigator } from 'react-navigation';
import Register from '../components/auth/Register';
import First from '../screens/Login';
import Login from '../components/auth/Login';
import CreateUser from '../components/auth/createUser';
import ResetPass from '../components/auth/ResetPass';
import ImageHeader from '../components/settings/Header';

const FirstScreen = StackNavigator({
    firstscreen: { screen: First },

}, {
        header: null,
        headerMode: 'none'
    });
const RegisterPage = StackNavigator({
    registerpage: { screen: Register },
    createuser: { screen: CreateUser }


}, {
        navigationOptions: {
            header: props => <ImageHeader {...props} title="REGISTER" />,
        }
    }
);
const LoginPage = StackNavigator({
    loginpage: { screen: Login }
}, {
        navigationOptions: {
            header: props => <ImageHeader {...props} title="LOGIN" />,
        }
    });
const ResetPage = StackNavigator({
    resetPass: { screen: ResetPass }
}, {
        navigationOptions: {
            header: props => <ImageHeader {...props} title="RESET PASSWORD" />,
        }
    });

export { FirstScreen, RegisterPage, LoginPage, ResetPage };