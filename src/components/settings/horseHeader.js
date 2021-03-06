import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text, ImageBackground } from 'react-native';


const ImageHeader = props => (
  <ImageBackground
    style={{
      width: '100%', height: 50, position: 'absolute', top: 0, left: 0, marginTop: 16, flexDirection: 'row'
    }}
    source={require('../../../image/hdserver2.jpg')}
    resizeMode={'stretch'} >
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
        backgroundColor: 'transparent', color: '#6E6E6E', alignSelf: 'center',
        fontSize: 15, marginLeft: '10%', fontWeight: 'bold'
      }}>{props.title}</Text>
      :
      <Text style={{
        backgroundColor: 'transparent', color: 'black', alignSelf: 'center',
        fontSize: 15, marginLeft: '7%', fontWeight: 'bold', width: 80, textAlign: 'center'
      }}>{props.title}</Text>
    }
    {props.showHeaderRight && <Button title="EDIT" buttonStyle={{ backgroundColor: 'transparent' }}
      containerViewStyle={{ position: 'absolute', right: 0 }}
      fontSize={20}
      onPress={() => props.navigation.navigate('registerhorse')} />}
  </ImageBackground>
);
export default ImageHeader;