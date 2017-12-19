import React, {Component} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
  static navigationOptions= ({ navigation})=>({
//     title: 'Seaver',
//     headerLeft: (
//       <Button 
          
//           icon={{ name: 'menu',
//         color:'black',
//       size: 35}}
//           onPress={()=>navigation.navigate('DrawerToggle')}
//           backgroundColor="rgba(0,0,0,0)"
//           color="rgba(0,122,255,1)"
//           />),
//       headerTitleStyle: {
//         fontSize: 25,
//               // marginTop: Platform.OS === 'android' ? 24 : 0
//        },
    
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
