import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import ModalBox from './Modal';
import {
  EmailChanged, PasswordChanged, registerWithEmail,
  ConfirmPasswordChanged, PasswordDontMatch, startGoogleLogin, startFacebookLogin, CloseModal
} from '../actions';
import Spinner from './Spinner';
class RegisterForm extends Component {
  onEmailChange = (email) => {
    this.props.EmailChanged(email)
  }
  onPasswordChange = (password) => {
    this.props.PasswordChanged(password)
  }
  onConfirmPasswordChange = (password) => {
    this.props.ConfirmPasswordChanged(password)
  }
  onSubmit = () => {
    const { email, password, confirmPass } = this.props.auth;
    if (password === confirmPass) {
      this.props.registerWithEmail({ email, password });
    } else {
      this.props.PasswordDontMatch();
    }
  }
  onClickModal = () => {
    this.props.CloseModal();
  }
  renderScreen() {
    if (this.props.auth.loading) {
      return <View style={{ height: '100%' }}><Spinner size="large" /></View>
    }
    return (
      <View >
        <Button icon={{ name: 'facebook', type: 'entypo', size: 35, style: { margin: 0, paddingLeft: 5 } }} containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.buttonFb} textStyle={styles.textStyle}
          title="REGISTER WITH FACEBOOK" onPress={this.props.startFacebookLogin} />
        <Button icon={{ name: 'google-', type: 'entypo', size: 35, style: { margin: 0, paddingLeft: 5 } }} containerViewStyle={styles.buttonContainer}
          buttonStyle={styles.buttonGoogle} textStyle={styles.textStyle}
          title="REGISTER WITH GOOGLE" onPress={this.props.startGoogleLogin} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, color: 'grey', fontWeight: '200' }}>OR</Text>
        </View>

        <View style={styles.formStyle}>
          <View style={{
            flexDirection: 'row', borderBottomColor: 'grey',
            borderBottomWidth: 1, padding: 0
          }}>
            <View style={{ justifyContent: 'flex-end', marginRight: 10 }}><ImageBackground source={require('../../image/icon/Mail.png')}
              style={{ width: 32, height: 32, padding: 0, margin: 0 }} /></View>
            <FormInput placeholder="EMAIL" value={this.props.auth.email}
              onChangeText={this.onEmailChange}
              inputStyle={styles.textFormStyle}
              placeholderTextColor={'white'}
              containerStyle={styles.containerTextForm}
              underlineColorAndroid={'rgba(0,0,0,0)'}
            />
          </View>
          <View style={{
            flexDirection: 'row', borderBottomColor: 'grey',
            borderBottomWidth: 1
          }}>
            <View style={{ justifyContent: 'flex-end', marginRight: 10 }}><ImageBackground source={require('../../image/icon/Lock.png')}
              style={{ width: 32, height: 32, padding: 0, margin: 0 }} /></View>
            <FormInput placeholder="PASSWORD" value={this.props.auth.password}
              onChangeText={this.onPasswordChange} secureTextEntry
              inputStyle={styles.textFormStyle}
              placeholderTextColor={'white'}
              containerStyle={styles.containerTextForm}
              underlineColorAndroid={'rgba(0,0,0,0)'} />
          </View>
          <View style={{
            flexDirection: 'row', borderBottomColor: 'grey',
            borderBottomWidth: 1
          }}>
            <View style={{ justifyContent: 'flex-end', marginRight: 10 }}><ImageBackground source={require('../../image/icon/Lock.png')}
              style={{ width: 32, height: 32, padding: 0, margin: 0 }} /></View>
            <FormInput placeholder="CONFIRM PASSWORD" value={this.props.auth.confirmPass}
              onChangeText={this.onConfirmPasswordChange} secureTextEntry
              inputStyle={styles.textFormStyle}
              placeholderTextColor={'white'}
              containerStyle={styles.containerTextForm}
              underlineColorAndroid={'rgba(0,0,0,0)'} />
          </View>
          <Button borderRadius={25}
            title="REGISTER" onPress={this.onSubmit}
            textStyle={{ fontSize: 25 }}
            buttonStyle={{ margin: 20, backgroundColor: '#757577' }}
            containerViewStyle={{ marginTop: 25 }} />
        </View>
        <ModalBox visible={this.props.auth.showModal}
          onClick={this.onClickModal}
          children={this.props.auth.error}
        />

      </View>
    );
  }
  render() {
    return (
      <View style={{ marginTop: 80 }}>
        {this.renderScreen()}
      </View>
    )
  }

}
const styles = {
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  buttonFb: {
    padding: 0,
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3b5998'
  },
  buttonGoogle: {
    padding: 0,

    flexDirection: 'row',
    backgroundColor: '#DD4B39',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DD4B39'
  },
  textStyle: {
    fontSize: 11,
    fontWeight: '300',
    paddingLeft: 40,
    paddingRight: 40
  },
  formStyle: {
    backgroundColor: '#ACACAE',
    margin: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAE',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  textFormStyle: {
    color: 'white',
    fontSize: 13,
    paddingTop: 14
  },
  containerTextForm: {
    borderBottomColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 1,

    marginLeft: 0
  }
};
const mapStateToProps = (state) => {
  console.log(state.auth.error);
  return {
    auth: state.auth
  }
};
export default connect(mapStateToProps, {
  EmailChanged, PasswordChanged, registerWithEmail,
  ConfirmPasswordChanged, PasswordDontMatch, startGoogleLogin, startFacebookLogin, CloseModal
})(RegisterForm);