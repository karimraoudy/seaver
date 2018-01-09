import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { FormInput, FormLabel, ButtonGroup, Button } from 'react-native-elements';
import {
  updateProfile, distanceSelected, burnCalSelected, weightSelected,
  FirstChanged, lastChanged, weightChanged, languageChanged
} from '../actions';
import ModalDropdown from 'react-native-modal-dropdown';

class EditUser extends Component {
  state = {
    indexdist: this.props.user.distanceUnit === 'Km' ? 1 : 0,
    indexburn: this.props.user.burnUnit === 'Kcal' ? 0 : 1,
    indexweight: this.props.user.weightUnit === 'Kg' ? 0 : 1,
    zone1: false,
    zone2: false,
    zone3: false
  }
  componentDidUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
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
  onSubmit = () => {
    const { email, firstName, lastName, weight,
      distanceUnit,
      burnUnit,
      weightUnit,
      language } = this.props.user;
    this.props.updateProfile({
      email, firstName, lastName, weight, distanceUnit,
      burnUnit, weightUnit, language
    });
    this.props.navigation.goBack(null);
  }
  hideShow1 = () => {
    this.setState({ zone1: !this.state.zone1 });
  }
  hideShow2 = () => {
    this.setState({ zone2: !this.state.zone2 });

  }
  hideShow3 = () => {
    this.setState({ zone3: !this.state.zone3 });

  }
  render() {
    return (
      <ScrollView style={{ marginTop: 90 }}>
        <View style={styles.containerStyle}>
          <View style={styles.infoTitle}>
            <Text style={styles.textStyle}>PERSONNAL INFORMATIONS</Text>
            <TouchableOpacity onPress={this.hideShow1}>
              <Image source={require('../../image/icon/Arrow_1.png')}
                style={{ height: 16, width: 16 }} />
            </TouchableOpacity>
          </View>
          {this.state.zone1 &&
            //zone1
            <View style={styles.formContainer}>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity
                  style={{
                    borderColor: '#fff', borderWidth: 1, width: 100, height: 100,
                    borderRadius: 50, justifyContent: 'center', alignItems: 'center'
                  }}>
                  <Image source={this.props.user.avatar ? { uri: this.props.user.avatar } : require('../../image/icon/Avatar.png')}
                    style={{
                      borderColor: '#fff', borderWidth: 1, width: 100, height: 100,
                      borderRadius: 50
                    }} />
                </TouchableOpacity>
              </View>

              <FormInput
                placeholder={this.props.user.firstName}
                value={this.props.user.firstName}
                onChangeText={this.FirstChanged}
                inputStyle={[styles.inputFormStyle, { color: '#fff' }]}
                containerStyle={styles.containerFormStyle}
              />

              <FormInput
                placeholder={this.props.user.lastName}
                onChangeText={this.lastChanged}
                value={this.props.user.lastName}
                inputStyle={[styles.inputFormStyle, { color: '#fff' }]}
                containerStyle={styles.containerFormStyle}
              />

              <FormInput
                placeholder={this.props.user.weight}
                value={this.props.user.weight}
                onChangeText={this.weightChanged}
                inputStyle={styles.inputFormStyle}
                containerStyle={styles.containerFormStyle}
                keyboardType={'numeric'}
              />

            </View>
            //zone1  
          }

          <View style={styles.infoTitle}>
            <Text style={styles.textStyle}>LANGUAGE </Text>
            <TouchableOpacity onPress={this.hideShow2}>
              <Image source={require('../../image/icon/Arrow_1.png')}
                style={{ height: 16, width: 16 }} />
            </TouchableOpacity>
          </View>

          {this.state.zone2 &&
            //zone2
            <View style={styles.formContainer}>
              <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                marginTop: 15, marginBottom: 15, paddingLeft: 15, paddingRight: 15
              }}>
                <Text style={[styles.textStyle, { fontSize: 16 }]}>LANGUAGE</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={this.props.user.language === 'fr' ? require('../../image/icon/fr.png') :
                    require('../../image/icon/ang.png')}
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
                      <Image source={require('../../image/icon/Arrow_1.png')}
                        style={{ height: 16, width: 16 }} />
                    </View>
                  </ModalDropdown>
                </View>
              </View>
            </View>
            //zone2
          }

          <View style={styles.infoTitle}>
            <Text style={styles.textStyle}>UNITS</Text>
            <TouchableOpacity onPress={this.hideShow3}>
              <Image source={require('../../image/icon/Arrow_1.png')}
                style={{ height: 16, width: 16 }} />
            </TouchableOpacity>
          </View>
          {this.state.zone3 &&
            //zone2
            <View style={styles.formContainer}>
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
            //zone3
          }
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button title="DONE"
              onPress={this.onSubmit}
              borderRadius={30} textStyle={{ fontSize: 20 }}
              containerViewStyle={{ width: 200, marginBottom: 10 }}
              buttonStyle={{ backgroundColor: '#757577' }} />
          </View>
        </View>
      </ScrollView>
    );
  }
};
const styles = {
  containerStyle: {
    justifyContent: 'center'
  },
  infoTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#969698',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    margin: 32,
    marginTop: 10,
    marginBottom: 15
  },
  textStyle: {
    color: '#969698'
  },
  containerFormStyle: {
    borderBottomColor: '#757576',
    marginBottom: 10

  },
  inputFormStyle: {
    color: '#757576',
    textAlign: 'center',
    width: '100%'
  },
  formContainer: {
    backgroundColor: '#ACACAD',
    margin: 27,
    marginTop: 0,
    marginBottom: 18,
    borderRadius: 25,
    padding: 20
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
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, {
  updateProfile, distanceSelected, burnCalSelected, weightSelected,
  FirstChanged, lastChanged, weightChanged, languageChanged
})(EditUser);
