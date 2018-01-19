import React, {Component} from 'react';
import { Text, View, ImageBackground,Image } from 'react-native';

export default class directionPage extends Component {
  static navigationOptions= ({ navigation})=>({
    tabBarIcon:  ({ tintColor }) => (
      <View style={{borderColor:'#9B9B9D',
      borderWidth:2,
      borderRadius:18,
      height:36,
      width:36,
      alignItems:'center',
      justifyContent:'center'
      }}><Image
        source={require('../../image/icon/Symmetry_LightGrey.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      /></View>
    )
  })
  render() { 
    return (
      <View >
        <Text>testscreen</Text>
        <Text>testscreen</Text>
        <Text>testscreen</Text>
      </View>
    );
  }
};
const styles = {
  icon: {
    width: 26,
    height: 26,
  }
};
