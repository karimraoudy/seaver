import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Hprses extends Component {
  static navigationOptions= ({ navigation})=>({
    title: 'My Horses',
    headerLeft: (
      <Button 
          
          icon={{ name: 'arrow-back',
        color:'black',
      size: 35}}
          onPress={()=>navigation.navigate('DrawerToggle')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
          />),
      headerTitleStyle: {
        fontSize: 25,
              // marginTop: Platform.OS === 'android' ? 24 : 0
       },
    
      drawerLabel: 'HORSES',
       drawerIcon: ({ tintColor})=> {
              return <Icon 
              name='ios-close-circle-outline'
              color={'#727274'}
              size={15}
              type='simple-line-icon'
              />;
     } 
    
});
  render() {
    return (
      <View >
        <Text>Horses</Text>
        <Text>Horses</Text>
        <Text>Horses</Text>
      </View>
    );
  }
}
