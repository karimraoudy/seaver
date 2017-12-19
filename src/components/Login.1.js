import React, {Component} from 'react';
import { Text, View, Dimensions, ImageBackground } from 'react-native';
import {Button , FormInput, FormLabel} from 'react-native-elements';
import {connect } from 'react-redux';
import { LoginWithEmail, EmailChanged, PasswordChanged, loginGoogle, loginFacebook} from '../actions';
import Spinner from './Spinner';

 class Login extends Component {
  onEmailChange =(email) =>{
    this.props.EmailChanged(email)
}
onPasswordChange= (password)=>{
    this.props.PasswordChanged(password)
}
onSubmitSuccess = () =>{
  this.props.navigation.navigate('home');
}
googleLogin = () =>{
  this.props.loginGoogle(this.onSubmitSuccess);
}
facebookLogin = () =>{
  this.props.loginFacebook(this.onSubmitSuccess);
}
  onSubmit = () =>{
    const { email ,password} = this.props.auth;
    this.props.LoginWithEmail({email,password},this.onSubmitSuccess);
  }
  render() {
    if(this.props.auth.loading){
      return <View style={{height:'100%'}}><Spinner size="large"/></View>
    }
   return (
      <View style={{marginTop:60}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <Button icon={{name: 'facebook' , type: 'entypo', size: 40}} containerViewStyle={styles.buttonContainer}
         buttonStyle={styles.buttonFb}   onPress={this.facebookLogin}/>
         <Button icon={{name: 'google-' , type: 'entypo', size: 35}} containerViewStyle={styles.buttonContainer}
         buttonStyle={styles.buttonGoogle}   onPress={this.googleLogin}/>
         </View>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize: 25, color:'grey' , fontWeight: '200'}}>OR</Text>
         </View>
  
        <View style={styles.formStyle}>
        <View style={{flexDirection: 'row', borderBottomColor:'grey',
        borderBottomWidth:1,padding:0}}> 
        <FormLabel ><ImageBackground source={require('../../image/icon/Mail.png')} 
        style={{width:32, height:32, padding:0, margin:0}}/></FormLabel>
        <FormInput placeholder="EMAIL" value={this.props.auth.email}
        onChangeText={this.onEmailChange} 
        inputStyle={styles.textFormStyle}
        placeholderTextColor={'#C5C7C7'}
        containerStyle={styles.containerTextForm}
        underlineColorAndroid={'rgba(0,0,0,0)'}/>
        </View>
        <View style={{flexDirection: 'row',borderBottomColor:'grey',
        borderBottomWidth:1}}> 
        <FormLabel><ImageBackground source={require('../../image/icon/Lock.png')} 
        style={{width:32, height:32, padding:0, margin:0}}/></FormLabel>
        <FormInput placeholder="PASSWORD" value={this.props.auth.password}
        onChangeText={this.onPasswordChange} 
        inputStyle={styles.textFormStyle}
        placeholderTextColor={'#C5C7C7'}
        containerStyle={styles.containerTextForm}
        underlineColorAndroid={'rgba(0,0,0,0)'}/>
        </View>
        <View style={{marginTop: 60, justifyContent:'center', alignItems:'center'}}>
        <Button borderRadius={30} textStyle={{fontSize: 30 }}
        containerViewStyle={{width:170}}
        title="LOGIN" onPress={this.onSubmit}/>
        </View>
        </View>
        <Text>{this.props.auth.error}</Text>
      </View>
    );
  }
}
const mapStateToProps =(state) => {
  
  return {
    auth: state.auth
  }
};
const styles = {
  buttonContainer: { 
    marginTop: 40,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonFb:{
    width:150,
    height:45,
    backgroundColor: '#3b5998',
    borderRadius: 10,
    borderWidth: 1, 
    borderColor:'#3b5998'
  },
  buttonGoogle:{
    width:150,
    height:45,
    backgroundColor: '#DD4B39',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DD4B39'
  },
  textStyle:{
    fontSize: 11,
    fontWeight: '300',
    paddingLeft: 40
  },
  formStyle:{
    
    margin: 35,
    paddingTop: 15
   },
  textFormStyle:{
    color:'grey',
    fontSize: 18,
    paddingTop:17
  },
  containerTextForm:{
    borderBottomColor:'rgba(0,0,0,0)',
     borderBottomWidth:1, 
    
     marginLeft:0
  }
};
export default connect(mapStateToProps,{LoginWithEmail, EmailChanged, PasswordChanged, loginGoogle, loginFacebook})(Login);
