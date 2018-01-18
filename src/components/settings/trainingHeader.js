import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import {connect}  from 'react-redux';


const ImageHeader = props => (
  
  <ImageBackground
    style={{
      width: '100%', height: 50, position: 'absolute', top: 0, left: 0, marginTop: 16, flexDirection: 'row'
    }}
    source={require('../../../image/hdserver2.jpg')}
    resizeMode={'stretch'} >
    
    
      <Text style={{
        backgroundColor: 'transparent', color:props.color?props.color: '#6E6E6E', alignSelf: 'center',
        fontSize: 16, marginLeft: 100, fontWeight: 'bold'
      }}>{props.title}
      </Text>
     
  
      
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%', justifyContent: 'flex-end' }}>
          <Text style={{ backgroundColor: 'transparent', color: '#fff' , fontSize:16}}>
            {
              props.horse.horseSelectedName ?props.horse.horseSelectedName:'' 
            }</Text>
        </View>
     
  </ImageBackground>
);
const mapStateToProps = state => {
  return { 
     horse: state.horse };
};
export default connect(mapStateToProps)(ImageHeader);