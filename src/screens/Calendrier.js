import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import CalendarPicker from 'react-native-calendar-picker';

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
constructor(props) {
  super(props);
  this.state = {
    selectedStartDate: null,
  };
  this.onDateChange = this.onDateChange.bind(this);
}

onDateChange(date) {
  this.setState({
    selectedStartDate: date,
  });
}
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={{backgroundColor:'#313133', height:'100%',paddingTop:80}}>
      <CalendarPicker
      onDateChange={this.onDateChange}
      weekdays={['M','T','W','T','F','S','S']}
      months={['January','February','March','April','May','June','July','August','September','October','November','December']}
      textStyle={{color:'#939395'}}
      previousTitle={'<'}
      nextTitle={'>'}
    />

        <View>
         <Text>SELECTED DATE:{ startDate }</Text>
       </View>
      </View>
    );
  }
}
