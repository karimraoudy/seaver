import React from 'react';
import { StackNavigator } from 'react-navigation';
import Register from '../components/Register';
import First from '../screens/Login';
import Login from '../components/Login';
import CreateUser from '../components/createUser';
import ImageHeader from '../components/Header';

const FirstScreen = StackNavigator({
    firstscreen : { screen: First },
  
},{
    header: null,
    headerMode: 'none'
});
const RegisterPage = StackNavigator({
    registerpage : { screen: Register },
    createuser: {screen: CreateUser}
    
  
},{
    navigationOptions:{
        header: props => <ImageHeader {...props} title="REGISTER" />,
    }
}
);
const LoginPage = StackNavigator ({
    loginpage: {screen: Login }
},{
    navigationOptions:{
        header: props => <ImageHeader {...props} title="LOGIN" />,
    }
});

export {FirstScreen, RegisterPage, LoginPage} ;