import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import {connect}  from 'react-redux';


const ImageHeader = props => (
  
  <ImageBackground
    style={{
      width: '100%', height: 50, position: 'absolute', top: 0, left: 0, marginTop: 16, flexDirection: 'row', 
      justifyContent:'space-between'
    }}
    source={require('../../../image/hdserver2.jpg')}
    resizeMode={'stretch'} >
    <View style={{flexDirection:'row'}}>
    {props.menu === 'hammer' ?
      <Button
        icon={{
          name: 'menu',
          color: '#BEC0C0',
          size: 45
        }}
        onPress={() => props.navigation.navigate('DrawerToggle')}
        buttonStyle={{ padding: 0, justifyContent: 'flex-start', width: 45, height: '100%' }}
        backgroundColor="transparent"
        containerViewStyle={{
          backgroundColor: 'transparent', width: 45, height: '100%', position: 'relative',
          right: 15
        }}
      /> :
      <Button
        icon={{
          name: 'arrow-back',
          color: 'white',
          size: 45
        }}
        onPress={() =>

          props.navigation.goBack(null)}
        buttonStyle={{ padding: 0, justifyContent: 'flex-start', width: 45, height: '100%' }}
        backgroundColor="transparent"
        containerViewStyle={{
          backgroundColor: 'transparent', width: 45, height: '100%', position: 'relative',
          right: 15
        }}
      />

    }
    {props.menu === 'hammer' ?
      <Text style={{
        backgroundColor: 'transparent', color:props.color?props.color: '#6E6E6E', alignSelf: 'center',
        fontSize: 15, marginLeft: '15%', fontWeight: 'bold'
      }}>{props.title}</Text>
      :
      <Text style={{
        backgroundColor: 'transparent', color: props.color?props.color:'black', alignSelf: 'center',
        fontSize: 15, marginLeft: '7%', fontWeight: 'bold', width: 80, textAlign: 'center'
      }}>{props.title}</Text>
    }
    </View>
    {props.showHeaderRight && <Button title="EDIT" buttonStyle={{ backgroundColor: 'transparent' }}
      containerViewStyle={{ position: 'absolute', right: 0 }}
      fontSize={20}
      onPress={() => props.navigation.navigate('settingsprofil')} />}
    
    {(props.title === 'S E A V E R' || props.title === 'MY HORSES') &&
      <TouchableWithoutFeedback onPress={props.selectHorse}>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%', justifyContent: 'flex-end',marginRight:10 }}>
          <Text style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {
              props.horse.horseSelectedName ?props.horse.horseSelectedName:'' 
            }</Text><Image source={require('../../../image/icon/arrow2.png')}
              style={{ height: 26, width: 26, marginLeft: 5, marginRight: 0 }} />
        </View>
      </TouchableWithoutFeedback>
    }
  </ImageBackground>
);
const mapStateToProps = state => {
  return { 
     horse: state.horse };
};
export default connect(mapStateToProps)(ImageHeader);