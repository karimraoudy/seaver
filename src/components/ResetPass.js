import React, {Component} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button, FormInput} from 'react-native-elements';
import {connect} from 'react-redux';
import {ResetPassword, EmailChanged, CloseModal} from '../actions/index';
import ModalBox from './Modal';

class ResetPass extends Component {
    onEmailChange =(email) =>{
        this.props.EmailChanged(email)
    }
    reset = ()=>{
        this.props.ResetPassword(this.props.auth.email)
    }
    onClick =() =>{
        this.props.CloseModal();
    }
    render(){
    return (
        <View style={{marginTop:80}}>
            <View style={{alignItems:'center' , justifyContent:'center',marginTop:50}}><Text style={{ fontSize:18, color:'#BEC0C0', width:250}}>
            WE WILL SEND YOU A LINK TO RESET YOUR PASSWORD</Text></View>
            <View style={{flexDirection: 'row', borderBottomColor:'grey',
            borderBottomWidth:1,padding:0,margin:50}}> 
            <View style={{justifyContent:'flex-end',marginRight:10}}><ImageBackground source={require('../../image/icon/Mail.png')} 
            style={{width:32, height:32, padding:0, margin:0}}/></View>
            <FormInput placeholder="EMAIL" 
            value={this.props.auth.email}
            onChangeText={this.onEmailChange}
            inputStyle={styles.textFormStyle}
            placeholderTextColor={'#C5C7C7'}
            containerStyle={styles.containerTextForm}
            underlineColorAndroid={'rgba(0,0,0,0)'}/>
            </View>
            <View style={{marginTop: 60, justifyContent:'center', alignItems:'center'}}>
            <Button borderRadius={30} textStyle={{fontSize: 20 }}
            containerViewStyle={{width:250}}
            onPress={this.reset}
            title="RESET PASSWORD" /> 
            </View>
            <ModalBox visible={this.props.auth.showModal}
            onClick={this.onClick}
            children='An email Has been sent to you with a link to reset your password'
            />

        </View>
    );
}
}
const styles = {
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
const mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
};
export default connect(mapStateToProps,{ResetPassword,EmailChanged, CloseModal})(ResetPass);
