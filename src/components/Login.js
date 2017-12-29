import React, {Component} from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Button , FormInput} from 'react-native-elements';
import {connect } from 'react-redux';
import ModalBox from './Modal';
import { LoginWithEmail, EmailChanged, PasswordChanged, loginGoogle, loginFacebook, CloseModal} from '../actions';
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
onClickModal =() =>{
  this.props.CloseModal();
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
      <View style={{marginTop:60, backgroundColor:'#DEDEE0',flex:1}}>
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
        <View style={{justifyContent:'flex-end',marginRight:10}}><ImageBackground source={require('../../image/icon/Mail.png')} 
        style={{width:32, height:32, padding:0, margin:0}}/></View>
        <FormInput placeholder="EMAIL" value={this.props.auth.email}
        onChangeText={this.onEmailChange} 
        inputStyle={styles.textFormStyle}
        placeholderTextColor={'#C5C7C7'}
        containerStyle={styles.containerTextForm}
        underlineColorAndroid={'rgba(0,0,0,0)'}/>
        </View>
        <View style={{flexDirection: 'row',borderBottomColor:'grey',
        borderBottomWidth:1, marginTop:15}}> 
        <View style={{justifyContent:'flex-end',marginRight:10}}><ImageBackground source={require('../../image/icon/Lock.png')} 
        style={{width:32, height:32, padding:0, margin:0}}/></View>
        <FormInput placeholder="PASSWORD" value={this.props.auth.password}
        onChangeText={this.onPasswordChange} 
        inputStyle={styles.textFormStyle}
        placeholderTextColor={'#C5C7C7'}
        containerStyle={styles.containerTextForm}
        underlineColorAndroid={'rgba(0,0,0,0)'}/>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('resetPass')}
        style={{alignItems:'flex-end'}}>
        <Text style={{marginTop: 15, color:'#6F6F6F', fontWeight:'300'}}>FORGOT PASSWORD ?</Text>
        </TouchableOpacity>
        <View style={{marginTop: 60, justifyContent:'center', alignItems:'center'}}>
        <Button borderRadius={30} textStyle={{fontSize: 20 }}
        containerViewStyle={{width:170}}
        title="LOGIN"
        buttonStyle={{backgroundColor:'#757577'}}
        onPress={this.onSubmit}/>
        </View>
        </View>
        <ModalBox visible={this.props.auth.showModal}
            onClick={this.onClickModal}
            children={this.props.auth.error}
            />
      
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
    backgroundColor: '#385B9B',
    borderRadius: 10,
    borderWidth: 1, 
    borderColor:'#385B9B'
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
    paddingTop:14
  },
  containerTextForm:{
    borderBottomColor:'rgba(0,0,0,0)',
     borderBottomWidth:1, 
    
     marginLeft:0
  }
};
export default connect(mapStateToProps,{LoginWithEmail, EmailChanged,
   PasswordChanged, loginGoogle, loginFacebook, CloseModal})(Login);
