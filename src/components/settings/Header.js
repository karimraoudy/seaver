import React ,{Component}from 'react';
import { Button } from 'react-native-elements';
import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import {connect}  from 'react-redux';
import {showSelectHorse} from '../../actions';


class ImageHeader extends Component {
  onClickIn = () => {
    this.props.showSelectHorse();
  }
  render(){
  return(
  
  <ImageBackground
    style={{
      width: '100%', height: 50, position: 'absolute', top: 0, left: 0, marginTop: 16, flexDirection: 'row', 
      justifyContent:'space-between'
    }}
    source={require('../../../image/hdserver2.jpg')}
    resizeMode={'stretch'} >
    <View style={{flexDirection:'row'}}>
    {this.props.menu === 'hammer' ?
      <Button
        icon={{
          name: 'menu',
          color: '#BEC0C0',
          size: 45
        }}
        onPress={() => this.props.navigation.navigate('DrawerToggle')}
        buttonStyle={{ padding: 0, justifyContent: 'flex-start', width: 45, height: '100%' }}
        backgroundColor="transparent"
        containerViewStyle={{
          backgroundColor: 'transparent', width: 45, height: '100%', position: 'relative',
          right: 15
        }}
      /> :
      <Button
        icon={{
          name: 'arrow-back',
          color: 'white',
          size: 45
        }}
        onPress={() =>

          this.props.navigation.goBack(null)}
        buttonStyle={{ padding: 0, justifyContent: 'flex-start', width: 45, height: '100%' }}
        backgroundColor="transparent"
        containerViewStyle={{
          backgroundColor: 'transparent', width: 45, height: '100%', position: 'relative',
          right: 15
        }}
      />

    }
    {this.props.menu === 'hammer' ?
      <Text style={{
        backgroundColor: 'transparent', color:this.props.color?this.props.color: '#6E6E6E', alignSelf: 'center',
        fontSize: 15, marginLeft: '15%', fontWeight: 'bold'
      }}>{this.props.title}</Text>
      :
      <Text style={{
        backgroundColor: 'transparent', color: this.props.color?this.props.color:'black', alignSelf: 'center',
        fontSize: 15, marginLeft: '7%', fontWeight: 'bold', width: 80, textAlign: 'center'
      }}>{this.props.title}</Text>
    }
    </View>
    {this.props.showHeaderRight && <Button title="EDIT" buttonStyle={{ backgroundColor: 'transparent' }}
      containerViewStyle={{ position: 'absolute', right: 0 }}
      fontSize={20}
      onPress={() => this.props.navigation.navigate('settingsprofil')} />}
    
    {(this.props.title === 'S E A V E R' || this.props.title === 'MY HORSES') &&
      <TouchableWithoutFeedback onPress={this.onClickIn}>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%', justifyContent: 'flex-end',marginRight:10 }}>
          <Text style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {
              this.props.user.horseSelectedName ?this.props.user.horseSelectedName:'' 
            }</Text><Image source={require('../../../image/icon/arrow2.png')}
              style={{ height: 26, width: 26, marginLeft: 5, marginRight: 0 }} />
        </View>
      </TouchableWithoutFeedback>
    }
  </ImageBackground>
)
}};
const mapStateToProps = state => {
  return { 
     user: state.user };
};
export default connect(mapStateToProps,{showSelectHorse})(ImageHeader);