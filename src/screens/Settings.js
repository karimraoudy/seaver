import React, {Component} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity ,Platform} from 'react-native';
import {Button } from 'react-native-elements';
import {connect} from 'react-redux';
import ModalBox from '../components/settings/Modal';
import {ResetPassword, CloseModal,startLogOut} from '../actions';

class Settings extends Component {
  static navigationOptions= ({ navigation})=>({
    tabBarIcon:  ({ tintColor }) => (
     
      <View style={{borderColor:'#9B9B9D',
      borderWidth:2,
      borderRadius:18,
      height:36,
      width:36,
      alignItems:'center', marginLeft:Platform.OS === 'ios' ?50:0
      }}><Image
        source={require('../../image/icon/Home_LightGrey.png')}
        style={{tintColor: tintColor, height:26,width:26}}
      /></View>
    ),
    tabBarOnPress: (scene, jumpToIndex) => {
      navigation.navigate('home')
      },
  
      drawerLabel: '-SETTINGS',
     
    
});
onClickReset = () =>{
this.props.ResetPassword(this.props.user.email);
}
onClick =() =>{
  this.props.CloseModal();
}
onLogOut = () =>{
  this.props.startLogOut();
  this.props.navigation.navigate('firstscreen')
}
  render() {
    const {firstName, lastName, weight, burnUnit,distanceUnit,
      language, email ,weightUnit} = this.props.user;
    return (
      <ScrollView style={styles.bigContainer}>

        <View style={styles.firstContainer}>
          <View style={{position:'relative' ,left:40, justifyContent:'center'}}>
            <View style={styles.nameStyle} >
              <Text style={{color:'#fff',fontSize:18}}>{firstName} {lastName}</Text>
            </View>
            <View style={[styles.nameStyle,{backgroundColor:'#ACACAE',borderColor:'#ACACAE',
             width:130,height:25,padding:14, alignSelf:'flex-end'}]} >
            <Text style={{color:'#969698',fontSize:15}}
           >{weight}{weightUnit}</Text>
            </View>
          
          </View>
          <View  style={{
            borderColor: '#ACACAE', borderWidth: 1, width: 118, height: 118,
            borderRadius: 59, justifyContent: 'center', alignItems: 'center',backgroundColor:'#ACACAE'
          }}>
          <Image source={require('../../image/icon/Avatar.png')} 
          style={{height:118, width:118, borderRadius:59, borderWidth:1, borderColor:'#ACACAE'}}/>
          </View>
        </View>
          
        <View style={{marginBottom:30}}>
          <View style={{borderBottomColor:'#969698', borderBottomWidth:1, width: '90%', paddingLeft:20,paddingBottom:4}}>
            <Text style={styles.textStyle}>EMAIL</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:8}}>
            <Image source={require('../../image/icon/Mail.png')} style={{height:30, width:30,marginRight:20,marginLeft:27}}/>
            <Text style={[styles.textStyle,{alignSelf:'center'}]}>{email}</Text>
          </View>
        </View>

        <View style={{marginBottom:30}}>
          <View style={{borderBottomColor:'#969698', borderBottomWidth:1, width: '90%', paddingLeft:20,paddingBottom:4}}>
            <Text style={styles.textStyle}>LANGUAGE</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:8}}>
            <Image source={language ==='fr' ?require('../../image/icon/fr.png'):require('../../image/icon/ang.png')}
             style={{height:30, width:30,marginRight:20,marginLeft:27, borderRadius:15, borderWidth:1, borderColor:'#969698'}}/>
            <Text style={[styles.textStyle,{alignSelf:'center'}]}>{language === 'fr'? 'FRENCH': 'ENGLISH'}</Text>
          </View>
        </View>

        <View style={{marginBottom:30}}>
        <View style={{borderBottomColor:'#969698', borderBottomWidth:1, width: '90%', paddingLeft:20,paddingBottom:4}}>
          <Text style={styles.textStyle}>UNITS</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:8 , justifyContent:'space-around'}}>
          <View style={{flexDirection:'column'}}>
            <View style={styles.unitForm}><Text style={styles.textStyle}>{distanceUnit === 'MILES'?'Miles': 'Km'}</Text></View>
            <Text style={styles.textStyle}>Distance</Text>
          </View>
          <View style={{flexDirection:'column'}}>
            <View style={styles.unitForm}><Text style={styles.textStyle}>{burnUnit}</Text></View>
            <Text style={styles.textStyle}>Calories</Text>
            </View>
          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <View style={styles.unitForm}><Text style={styles.textStyle} >{weightUnit}</Text></View>
            <Text style={styles.textStyle}>Weight</Text>
          </View>
        </View>
      </View>

      <View style={{marginBottom:30}}>
          <View style={{borderBottomColor:'#969698',marginBottom:20, borderBottomWidth:1, width: '90%', paddingLeft:20,paddingBottom:4}}>
            <Text style={styles.textStyle}>PASSWORD</Text>
          </View>
          <View style={{alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity style={{flexDirection:'row' ,backgroundColor: '#ACACAE',
          borderRadius:25, borderColor:'#ACACAE', borderWidth:1, alignItems:'center',
          margin: 20, padding:5, width:240}}
          onPress={this.onClickReset}> 
                <Image source={require('../../image/icon/Lock.png')}
                style={{width:32, height:32, padding:0, marginRight:13, marginLeft:7}} />
                <Text style={{color:'#fff', fontSize:12}}>CHANGE YOUR PASSWORD</Text>
          </TouchableOpacity>
          </View>
          
        </View>

        <View style={{alignItems:'center', justifyContent:'center'}}>
          <View style={{borderTopColor:'#969698', borderTopWidth:1, width: '60%', marginBottom:30}}>
          <Button title='LOG OUT' icon={{ name:'power-off' ,type: 'font-awesome'}}  
          borderRadius={30} textStyle={{fontSize: 20 }}
          containerViewStyle={{margin:20}}
          buttonStyle={{backgroundColor:'#757577'}}
          onPress={this.onLogOut}/>
          </View>
        </View>
        <ModalBox visible={this.props.auth.showModal}
            onClick={this.onClick}
            children={this.props.auth.error}
            />
      </ScrollView>
    );
  }
}
const styles={
  bigContainer:{
    backgroundColor:'#DEDEE0',
    marginTop:60,
    flex:1,
    paddingTop:30,
    paddingLeft:30,
    paddingRight:15
    
  },
  firstContainer:{
    flexDirection: 'row',
    width:'100%',
    justifyContent:'flex-end',
    marginBottom:20
  },
  textStyle:{
    color:'#969698'
  },
  nameStyle:{
    backgroundColor:'#757577', marginBottom:0 ,
            borderRadius:20, borderColor:'#757577', borderWidth:1, width:260,
             height:35, marginBottom:10, justifyContent:'center', padding:20
  },
  unitForm:{
    height:50,
    width:50,
    borderRadius:25,
    borderWidth:2,
    borderColor:'#969698',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  }
}
const mapStateToProps = (state) =>{
  return {
    auth: state.auth,
    user: state.user
  }
}
export default connect(mapStateToProps,{ResetPassword,CloseModal,startLogOut})(Settings);
