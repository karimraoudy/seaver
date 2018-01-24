import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormInput, FormLabel, ButtonGroup } from 'react-native-elements';
import {
  distanceSelected, burnCalSelected, weightSelected,
  FirstChanged, lastChanged, weightChanged, languageChanged, createProfil, setImage
} from '../../actions';
import { ImagePicker } from 'expo';
import { firebase } from '../../firebase/firebase';
import ModalDropdown from 'react-native-modal-dropdown';

class CreateUser extends Component {

  state = {
    indexdist: 0,
    indexburn: 0,
    indexweight: 0
  }
  FirstChanged = (firstName) => {
    this.props.FirstChanged(firstName)
  }
  lastChanged = (lastName) => {
    this.props.lastChanged(lastName)
  }
  weightChanged = (weight) => {
    this.props.weightChanged(weight)
    
  }
  distanceSelected = (index) => {
    this.setState({ indexdist: index });
    this.props.distanceSelected(index);
  }
  burnCalSelected = (index) => {
    this.setState({ indexburn: index });
    this.props.burnCalSelected(index);
  }
  weightSelected = (index) => {
    this.setState({ indexweight: index });
    this.props.weightSelected(index);
  }
  languageSelected = (index) => {
    this.props.languageChanged(index);
  }

  ImageSelected = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      aspect: [3, 5],
      allowsEditing: true
    });



    if (!result.cancelled) {
      this.props.setImage(result.uri);


    }
  }



  onSubmit = () => {
    const { email, firstName, lastName, weight,
      distanceUnit,
      burnUnit,
      weightUnit,
      language } = this.props.auth;
    this.props.createProfil({
      email, firstName, lastName, weight, distanceUnit,
      burnUnit, weightUnit, language
    });
    this.props.inscriptionDone();
  }
  render() {
    return (

      <View >

        <View style={styles.containerStyle}>
          <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
            <TouchableOpacity
              onPress={this.ImageSelected}
              style={{
                borderColor: '#fff', borderWidth: 1, width: 100, height: 100,
                borderRadius: 50, justifyContent: 'center', alignItems: 'center'
              }}>
              <Image source={this.props.user.avatar ? { uri: this.props.user.avatar } : require('../../../image/icon/Avatar.png')}
                style={{
                  borderColor: '#fff', borderWidth: 1, width: 100, height: 100,
                  borderRadius: 50
                }} />
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 20 }}>
            <FormInput
              placeholder="FIRST NAME"
              value={this.props.auth.firstName}
              onChangeText={this.FirstChanged}
              inputStyle={styles.inputFormStyle}
              containerStyle={styles.containerFormStyle}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <FormInput
              placeholder="LAST NAME"
              value={this.props.auth.lastName}
              onChangeText={this.lastChanged}
              inputStyle={styles.inputFormStyle}
              containerStyle={styles.containerFormStyle}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <FormInput
              placeholder="WEIGHT"
              value={this.props.auth.weight}
              onChangeText={this.weightChanged}
              inputStyle={styles.inputFormStyle}
              containerStyle={styles.containerFormStyle}
              keyboardType={'numeric'}
            />
          </View>

        </View>


        <View style={{ borderBottomColor: '#BEC0C0', marginLeft: 35, marginRight: 35, borderBottomWidth: 2, }} />
        <View style={styles.containerStyle}>
          <View style={{
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            marginTop: 15, marginBottom: 15, paddingLeft: 15, paddingRight: 15
          }}>
            <Text style={[styles.labelStyle, { fontSize: 16 }]}>LANGUAGE</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={this.props.auth.language === 'fr' ? require('../../../image/icon/fr.png') :
                require('../../../image/icon/ang.png')}
                style={{
                  height: 36, width: 36, marginRight: 20, marginLeft: 27, borderRadius: 18
                  , borderWidth: 1, borderColor: '#fff'
                }} />
              <ModalDropdown options={['FR', 'ANG']} onSelect={this.languageSelected}
                dropdownStyle={{ height: 70, backgroundColor: '#ACACAE' }}
                dropdownTextStyle={{ backgroundColor: '#ACACAE' }}
                style={{ borderRadius: 15 }}>
                <View style={{
                  height: 30, width: 30, borderRadius: 15,
                  borderWidth: 1, borderColor: '#969698', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Image source={require('../../../image/icon/Arrow_1.png')}
                    style={{ height: 16, width: 16 }} />
                </View>
              </ModalDropdown>
            </View>
          </View>
        </View>
        <View style={{ borderBottomColor: '#BEC0C0', marginLeft: 35, marginRight: 35, borderBottomWidth: 2, }} />

        <View style={styles.containerStyle}>
          <View style={{ marginBottom: 10 }}>
            <FormLabel labelStyle={styles.labelStyle}>DISTANCE UNITS</FormLabel>
            <ButtonGroup
              selectedBackgroundColor="grey"
              onPress={this.distanceSelected}
              selectedIndex={this.state.indexdist}
              buttons={['MILES', 'KILOMETRES']}
              containerStyle={styles.bouttonContainerStyle}
              selectedTextStyle={{ color: '#fff' }}
              containerBorderRadius={15} />

            <FormLabel labelStyle={styles.labelStyle}>BURNED CALORIES UNITS</FormLabel>
            <ButtonGroup
              selectedBackgroundColor="grey"
              onPress={this.burnCalSelected}
              selectedIndex={this.state.indexburn}
              buttons={['Kcal', 'Kj']}
              containerStyle={styles.bouttonContainerStyle}
              selectedTextStyle={{ color: '#fff' }}
              containerBorderRadius={15} />

            <FormLabel labelStyle={styles.labelStyle}>WEIGHT UNIT</FormLabel>
            <ButtonGroup
              selectedBackgroundColor="grey"
              onPress={this.weightSelected}
              selectedIndex={this.state.indexweight}
              buttons={['Kg', 'Pounds']}
              containerStyle={styles.bouttonContainerStyle}
              selectedTextStyle={{ color: '#fff' }}
              containerBorderRadius={15}


            />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button title="DONE"
            onPress={this.onSubmit}
            borderRadius={30} textStyle={{ fontSize: 20 }}
            containerViewStyle={{ width: 200, marginBottom: 10 }}
            buttonStyle={{ backgroundColor: '#757577' }} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user
  }
}
const styles = {
  containerStyle: {
    backgroundColor: '#ACACAE',
    margin: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ACACAE',
  },
  containerFormStyle: {
    borderBottomColor: '#BEC0C0',

  },
  inputFormStyle: {
    color: '#fff',
    textAlign: 'center',
    width: '100%'
  },
  labelStyle: {
    color: 'grey',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 10
  },
  bouttonContainerStyle: {
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff'
  }
}
export default connect(mapStateToProps, {
  distanceSelected, burnCalSelected,
  weightSelected, FirstChanged, lastChanged, weightChanged, languageChanged, createProfil, setImage
})(CreateUser);