import React , { Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
class  DrawerContent extends Component {
    static defaultProps ={
        username: 'Username',
        imageChemin: '../image/compte-utilisateur.png'
    }
    render(){
        return (
            <ScrollView>
              <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
              <View style={styles.container}>
              <View style={styles.profile}>
              <Image source={require('../../image/compte-utilisateur.png')} style={styles.avatar} />
                  <Text style={styles.name}>{this.props.username}</Text>
              </View>
              
          </View>
          <View >
          <View style={{borderBottomColor:'white',
          borderBottomWidth:1,
        margin: 22,
        marginTop:0,
        marginBottom: 10}} />
          <DrawerItems {...this.props} items={this.props.items.filter((item) => item.routeName === 'home' ||
          item.routeName === 'calendrier' || item.routeName === 'horses' )}/>
          <View style={{borderBottomColor:'white',
          borderBottomWidth:1,
        margin: 22,
        marginBottom:0}} />
          </View> 
          <View style={{marginTop: 10}}>
          <DrawerItems {...this.props} items={this.props.items.filter((item) => item.routeName === 'settings' ||
          item.routeName === 'calibrations' || item.routeName === 'friends' || item.routeName === 'notif' || item.routeName === 'report ')}/>
          </View>
              </SafeAreaView>
            </ScrollView>
        );
    }
} 
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#404040'
        
    },
    profile: {
        height: 200,
       
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black'
    }
};

export default DrawerContent;