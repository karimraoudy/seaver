import React, {Component} from 'react';
import { Text, View, ImageBackground,Image } from 'react-native';
import { Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {userFetch} from '../actions';

class Home extends Component {
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
              color={'#727274'}
              size={15}
              type='simple-line-icon'
              
              />;
     } 
    
});
componentWillMount(){
  this.props.userFetch();
}
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
const mapStateToProps = (state) =>{
  console.log(state.user)
  return {
    user : state.user
  }
}
export default connect(mapStateToProps, {userFetch})(Home);