import React, {Component} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button} from 'react-native-elements';



export default class FirstScreen extends Component {

  render() {
    return (
      <ImageBackground source={require('../../image/Authentification/home.jpg')} style={styles.backgroundStyle}>
      <View style={styles.containerStyle}>
        <Button buttonStyle={styles.buttonStyle} containerViewStyle={styles.containerButton} textStyle={styles.textStyle}
       
        title="LOGIN"
        onPress={()=>this.props.navigation.navigate('login')}/>
        <Button buttonStyle={styles.buttonStyle} containerViewStyle={styles.containerButton} textStyle={styles.textStyle}
        title="REGISTER"
        onPress={()=>this.props.navigation.navigate('register')}
        />
        </View>
      </ImageBackground>
    );
  }
}
const styles= {
  containerStyle:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonStyle:{
    width: 125,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey'
  },
  containerButton:{
    marginTop: 200
    
  },
  textStyle:{
    color: 'grey',
    fontSize: 15,
    fontWeight: '200'
  },
  backgroundStyle:{
    flex: 1,
    width: null,
    height: null,
   
  }
};


