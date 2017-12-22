import React, {Component} from 'react';
import { Text, View, ScrollView, Image , ImageBackground} from 'react-native';
import {Button , FormInput, FormLabel } from 'react-native-elements';
import {connect } from 'react-redux';
import RegisterForm from './registerForm';
import CreateUser from './createUser';
 class Register extends Component {  
  inscriptionDone = ()=>{
    this.props.navigation.navigate('home');
  }
  render() {
   
    if(!this.props.auth.uid === null){
      return (
        <View>
        <RegisterForm />
        </View> 
       );
    }else{
      return (
        <ScrollView>
        <CreateUser inscriptionDone={this.inscriptionDone} />
        </ScrollView> 
       );
    }
   
    
  }
}
const mapStateToProps =(state) => {
  
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(Register);