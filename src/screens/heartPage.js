import React, {Component} from 'react';
import { Text, View, ImageBackground,Image } from 'react-native';

export default class heartPage extends Component {
  static navigationOptions= ({ navigation})=>({
    tabBarIcon:  ({ tintColor }) => (
      <View style={{borderColor: tintColor ==='#A67B7D' ? tintColor:'#9B9B9D',
      borderWidth:2,
      borderRadius:18,
      height:36,
      width:36,
      alignItems:'center',
      justifyContent:'center'
      }}><Image
        source={require('../../image/icon/Heart_LightGrey.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      /></View>
    )
  })
  render() { 
    return (
      <View >
        <Text>heartPage</Text>
        <Text>heartPage</Text>
        <Text>heartPage</Text>
      </View>
    );
  }
};
const styles = {
  icon: {
    width: 17,
    height: 17,
  }
};
