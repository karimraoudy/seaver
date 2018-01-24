import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { horseCreatedFetch } from '../../actions';

class HorseEdit extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
    
        <View style={{
          borderColor: '#9B9B9D',
          borderWidth: 2,
          borderRadius: 18,
          height: 36,
          width: 36,
          alignItems:'center', marginLeft:Platform.OS === 'ios' ?50:0

        }}><Image
            source={require('../../../image/icon/Home_LightGrey.png')}
            style={{ tintColor: tintColor, height: 26, width: 26 }}
          /></View>
    ),
    tabBarOnPress: (scene, jumpToIndex) => {
      navigation.navigate('home')
    },
  });
  componentDidUpdate() {
    this.props.horse.horseid && this.props.horseCreatedFetch({ id: this.props.horse.horseid });


  }
  componentWillMount() {
    this.props.horse.horseid && this.props.horseCreatedFetch({ id: this.props.horse.horseid });
  }
  calculeWeight = (familly, length, heartGirth) => {
    if (familly === 'PONY') {
      const weightApp = ((heartGirth ? heartGirth : 0) * (heartGirth ? heartGirth : 0) * (length ? length : 0) / 11.87).toFixed(2);
      return weightApp;
    } else if (familly === 'HORSE') {
      const weightApp = (Math.pow(heartGirth ? heartGirth : 0, 1.78) * Math.pow(length ? length : 0, 1.05) / 3011).toFixed(2);
      return weightApp;
    }
    else {
      const weightApp = 0;
      return weightApp;

    }

  }
  render() {
    const { horsename, birth, breed, gender, familly, withers, girthFloor, heartGirth,
      length, shoulderGirth, trained, isNervous, } = this.props.horse;
    return (
      <ScrollView style={{ marginTop: 60 }}>
        <View style={styles.firstContainer}>
          <View style={{ position: 'relative', left: 60, justifyContent: 'center' }}>
            <View style={styles.nameStyle} >
              <Text style={{ color: '#fff', fontSize: 20 }}>{horsename}</Text>
            </View>
            <View style={[styles.nameStyle, {
              backgroundColor: '#ACACAE', borderColor: '#ACACAE', borderRadius: 30,
              width: 230, height: 55, padding: 14, alignSelf: 'flex-end'
            }]} >
              <Text style={{ color: 'grey', fontSize: 15 }}
              >{gender}</Text>
            </View>

          </View>
          <View  style={{
            borderColor: '#ACACAE', borderWidth: 1, width: 118, height: 118,
            borderRadius: 59, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ACACAE'
          }}>
          <Image source={require('../../../image/icon/Avatar_Horse.png')}
            style={{ height: 118, width: 118, borderRadius: 59, borderWidth: 1, 
              borderColor: '#ACACAE' }} />
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center',marginBottom:30 }}>
          <Text style={[styles.textStyle, { fontSize: 18, fontWeight: 'bold' }]}>{breed}</Text>
          <Text style={[styles.textStyle, { fontSize: 12 }]}>
          {isNervous === 'YES' ? 'NERVOUS ' : 'NOT NERVOUS '}-{trained === 'FULLY' ? ' Fully trained' : ''}
            {trained === 'MEDIUM' ? ' Moderatly trained' : ''}
            {trained === 'NOT TRAINED' ? ' Not trained' : ''}</Text>
        </View>
        <View style={styles.containerThree}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.circleStyle}>
              <Image source={require('../../../image/icon/Cake.png')} style={{ height: 30, width: 30 }} />
            </View>
            <Text>{birth}</Text>
            <Text>years old</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.circleStyle}>
              <Image source={require('../../../image/icon/Horse_Info_Height.png')} style={{ height: 60, width: 60 }} />
            </View>
            <Text>{withers}</Text>
            <Text>cm</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.circleStyle}>
              <Image source={require('../../../image/icon/Horse_Info_Weight.png')} style={{ height: 30, width: 30 }} />
            </View>
            <Text>{this.calculeWeight(familly, heartGirth, length)}</Text>
            <Text>Kg</Text>
          </View>
        </View>
        <View>
          <View style={styles.numberContainer}>
            <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>h</Text>
            <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>m</Text>
            <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>s</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={[styles.smallNumberStyle, { paddingBottom: 6 }]}>00</Text>
            <Text style={{ color: '#757577', fontSize: 20, paddingBottom: 9 }}>km</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 30 }}>
              <TouchableWithoutFeedback>
                <View style={{ alignItems: 'center', margin: 20 }}>
                  <View style={styles.iconTraining}>
                    <Image source={require('../../../image/icon/Heart_DarkGrey.png')}
                      style={{ height: 35, width: 35 }} />
                  </View>
                  <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>0</Text>
                  <Text style={{ color: '#757577', fontSize: 13 }}>BPM</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                <View style={{ alignItems: 'center', margin: 20 }}>
                  <View style={styles.iconTraining}>
                    <Image source={require('../../../image/icon/Calories.png')}
                      style={{ height: 35, width: 35 }} />
                  </View>
                  <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>0</Text>
                  <Text style={{ color: '#757577', fontSize: 13 }}>KCAL</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={{ alignItems: 'center', margin: 20 }}>
                  <View style={styles.iconTraining}>
                    <Image source={require('../../../image/icon/Speed_DarkGrey.png')}
                      style={{ height: 35, width: 35 }} />
                  </View>
                  <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>0</Text>
                  <Text style={{ color: '#757577', fontSize: 13 }}>KM/H</Text>
                </View>
              </TouchableWithoutFeedback>

            </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    horse: state.horse
  }
};
const styles = {
  firstContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,
    padding: 20,
    paddingTop: 40
  },
  textStyle: {
    color: '#969698'
  },
  nameStyle: {
    backgroundColor: '#757577', marginBottom: 0,
    borderRadius: 20, borderColor: '#757577', borderWidth: 1, width: 260,
    height: 30, marginBottom: 10, justifyContent: 'center', padding: 20
  },
  containerThree: {
    flexDirection: 'row', margin: 20, borderBottomColor: 'grey', paddingBottom: 40
    , paddingLeft: 15, paddingRight: 15,
    borderBottomWidth: 1, justifyContent: 'space-between'
  },
  circleStyle: {
    height: 40, width: 40, borderColor: 'grey', borderRadius: 20, borderWidth: 1, justifyContent: 'center',
    alignItems: 'center'
  },
  numberContainer: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' },
  bigNumberStyle: { color: '#757577', fontSize: 60, fontWeight: '300' },
  smallNumberStyle: { color: '#757577', fontSize: 30, paddingBottom: 11 },
  iconTraining: {
    width: 60, height: 60, borderWidth: 2, borderRadius: 30, alignItems: 'center',
    justifyContent: 'center', borderColor: '#828284', marginBottom: 6
  }
}
export default connect(mapStateToProps, { horseCreatedFetch })(HorseEdit);