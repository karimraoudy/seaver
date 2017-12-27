import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class Calendrier extends Component {
  static navigationOptions= ({ navigation})=>({
    title: 'Calendrier',
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
    
      drawerLabel: 'CALENDRIER',
       drawerIcon: ({ tintColor})=> {
              return <Icon 
              name='calendar'
              color={'#727274'}
              size={18}
              type='simple-line-icon'
              />;
     } 
    
});
  render() {
    return (
      <View >
        <Text>Calendrier</Text>
        <Text>Calendrier</Text>
        <Text>Calendrier</Text>
      </View>
    );
  }
}
