import React, {Component} from 'react';
import { Text, View, ImageBackground,Image, TouchableWithoutFeedback } from 'react-native';
import { Button} from 'react-native-elements';
import ImageHeader from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {userFetch, showSelectHorse,hideSelectHorse} from '../actions';

class Home extends Component {
  static navigationOptions= ({ navigation})=>{
    const { params = {} } = navigation.state;
    return{
    header: props => <ImageHeader {...props} title="S E A V E R" menu="hammer" 
    selectHorse={()=>params.onClickIn()}/>,
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
    
}};
onClickIn = ()=>{
this.props.showSelectHorse();
}
onClickOut = () =>{
this.props.hideSelectHorse();
}
componentDidMount () {
  this.props.navigation.setParams({ onClickIn: this.onClickIn })
}
componentWillMount(){
  this.props.userFetch();
}
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onClickOut}>
      <View style={{marginTop:60,width:'100%',height:'100%'}}>
        {this.props.user.showSelectHorse && <View><Text>List of horses</Text></View>}
        <Text>New Training</Text>
      </View>
      </TouchableWithoutFeedback>
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
  return {
    user : state.user
  }
}
export default connect(mapStateToProps, {userFetch,showSelectHorse,hideSelectHorse})(Home);