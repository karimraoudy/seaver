import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import ImageHeader from '../settings/Header';

export default class Synchro extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            header: props => <ImageHeader {...props} title="SYNCHRO" color={'black'}
            />
        }
    };
    render() {
        return (
            <View style={{ backgroundColor: '#DEDEE0', height: '100%', paddingTop: 85 }}>
                <View style={{ alignItems: 'center' }}>
                    <ImageBackground source={require('../../../image/training/searchDevice.jpg')}
                        style={{
                            width: 250, height: 250
                        }} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ color: '#B3B3B5', fontSize: 18 }}>SEARCHING FOT A SEAVER DEVICE ...</Text>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <ImageBackground source={require('../../../image/training/deviceFound.jpg')}
                            resizeMode={'contain'}
                            style={{
                                width: 350, height: 180
                            }} />
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button title='START' buttonStyle={{ width: 150 }} fontSize={20} borderRadius={25}
                    onPress={()=>this.props.navigation.navigate('starttraining')} />
                </View>

            </View>
        );
    }
}