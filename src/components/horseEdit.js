import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { horseCreatedFetch } from '../actions';

class HorseEdit extends Component {
  componentDidUpdate() {
    this.props.horse.horseid && this.props.horseCreatedFetch({ id: this.props.horse.horseid });
    

  }
  componentWillMount(){
    this.props.horse.horseid && this.props.horseCreatedFetch({ id: this.props.horse.horseid });
  }
  render() {
    const { horsename, birth, breed, gender, familly, withers, girthFloor, heartGirth,
      length, shoulderGirth, trained, isNervous, } = this.props.horse;
    return (
      <ScrollView style={{ marginTop: 70 }}>
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
          <Image source={require('../../image/icon/Avatar_Horse.png')}
            style={{ height: 118, width: 118, borderRadius: 59, borderWidth: 1, borderColor: '#ACACAE', backgroundColor: '#ACACAE' }} />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={[styles.textStyle, { fontSize: 18, fontWeight: 'bold' }]}>{breed}</Text>
          <Text style={[styles.textStyle, { fontSize: 12 }]}>{isNervous === 'YES' ? 'NERVOUS ' : 'NOT NERVOUS '}-{trained === 'FULLY' ? ' Fully trained' : ''}
            {trained === 'MEDIUM' ? ' Moderatly trained' : ''}
            {trained === 'NOT TRAINED' ? ' Not trained' : ''}</Text>
        </View>
        <View style={styles.containerThree}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.circleStyle}>
              <Image source={require('../../image/icon/Cake.png')} style={{ height: 30, width: 30 }} />
            </View>
            <Text>{birth}</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.circleStyle}>
              <Image source={require('../../image/icon/Horse_Info_Height.png')} style={{ height: 60, width: 60 }} />
            </View>
            <Text>{withers}</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.circleStyle}>
              <Image source={require('../../image/icon/Horse_Info_Weight.png')} style={{ height: 30, width: 30 }} />
            </View>
            <Text>Kg</Text>
          </View>
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
    marginBottom: 20,
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
    flexDirection: 'row', margin: 40, borderBottomColor: 'grey', paddingBottom: 40
    , paddingLeft: 25, paddingRight: 25,
    borderBottomWidth: 1, justifyContent: 'space-between'
  },
  circleStyle: {
    height: 40, width: 40, borderColor: 'grey', borderRadius: 20, borderWidth: 1, justifyContent: 'center',
    alignItems: 'center'
  }
}
export default connect(mapStateToProps, { horseCreatedFetch })(HorseEdit);