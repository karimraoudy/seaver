import React, {Component} from 'react';
import { Text, View, ImageBackground,Image } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
  static navigationOptions= ({ navigation})=>({
    tabBarIcon:  ({ tintColor }) => (
      <View style={{borderRightWidth:1, borderRightColor:'#9B9B9D',
      height:36,
      width:48,
      alignItems:'center'}}>
      <View style={{borderColor:'#9B9B9D',
      borderWidth:2,
      borderRadius:18,
      height:36,
      width:36,
      alignItems:'center'
      }}><Image
        source={require('../../image/icon/Home_LightGrey.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      /></View></View>
    ),
    
    
      drawerLabel: 'START TRAINING',
       drawerIcon: ({ tintColor})=> {
              return <Icon 
              name='chart-line'
              color={ 'white'}
              size={25}
              type='simple-line-icon'
              />;
     } 
    
});
  render() {
    return (
      <View style={{marginTop:60}}>
        <ImageBackground source={require('../../image/dashboard.jpg')} style={{ width:'100%',height:'100%'}}/>
      </View>
    );
  }
}
const styles = {
  icon: {
    width: 26,
    height: 26,
  }
};
