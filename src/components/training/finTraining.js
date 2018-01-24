import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import ImageHeader from '../settings/trainingHeader';
import {Button} from 'react-native-elements';
import RatingModal from '../settings/RatingModal';
import {connect} from 'react-redux';
import {HideRating,ShowRating} from '../../actions';
import moment from 'moment';
const today = moment().format("DD-MM-YYYY");

 class EndTraining extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            header: props => <ImageHeader {...props} title="TRAINING" color={'black'}
            />,
        

        }
    };
    onClick=()=>{
        this.props.HideRating();
        // this.props.navigation.navigate('home')
    }
    render() {
        return (
            <View style={{ marginTop: 60, backgroundColor: '#DEDEE0', height: '100%' }}>
                <View style={styles.traingingContainer}>

                    <View style={{  width:'100%'
                    , alignItems: 'flex-end' , paddingRight:20}}>
                        <Text style={{borderColor: '#313133', borderWidth: 1, color: '#313133', padding: 15 ,borderRadius: 25}}>
                        {today}</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.numberContainer}>
                        <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>h</Text>
                        <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>m</Text>
                        <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>s</Text>
                    </View>
                    <View style={styles.numberContainer}>
                        <Text style={[styles.smallNumberStyle, { paddingBottom: 6 }]}>00</Text>
                        <Text style={{ color: '#757577', fontSize: 20, paddingBottom: 9 }}>km</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 30 }}>
                    <TouchableWithoutFeedback>
                        <View style={{ alignItems: 'center', margin: 20 }}>
                            <View style={styles.iconTraining}>
                                <Image source={require('../../../image/icon/Heart_DarkGrey.png')}
                                    style={{ height: 35, width: 35 }} />
                            </View>
                            <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>0</Text>
                            <Text style={{ color: '#757577', fontSize: 13 }}>BPM</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                        <View style={{ alignItems: 'center', margin: 20 }}>
                            <View style={styles.iconTraining}>
                                <Image source={require('../../../image/icon/Calories.png')}
                                    style={{ height: 35, width: 35 }} />
                            </View>
                            <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>0</Text>
                            <Text style={{ color: '#757577', fontSize: 13 }}>KCAL</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={{ alignItems: 'center', margin: 20 }}>
                            <View style={styles.iconTraining}>
                                <Image source={require('../../../image/icon/Speed_DarkGrey.png')}
                                    style={{ height: 35, width: 35 }} />
                            </View>
                            <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>0</Text>
                            <Text style={{ color: '#757577', fontSize: 13 }}>KM/H</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <View style={{flexDirection:'row' ,paddingRight:10,paddingLeft:10 ,marginTop:35 ,
                alignItems:'center', justifyContent:'center'}}>
                <Button title='CALIBRATE' buttonStyle={{ width: 150, height:45 }} fontSize={22} borderRadius={25}
                    />
                <Button title='STOP' buttonStyle={{ width: 150 , height:45}} fontSize={22} borderRadius={25}
                onPress={()=>this.props.ShowRating()}
                     />
                </View>
                <RatingModal visible={this.props.setting.showRating === true && this.props.setting.showRating} 
                onClick={this.onClick} />
            </View>
        );
    }
}
const styles = {
    icon: {
        width: 26,
        height: 26,
    },
    crossStyle: {
        height: 30, width: 30, borderRadius: 15, marginRight: 15,
        borderWidth: 1, borderColor: '#fff'
        , justifyContent: 'center', alignItems: 'center'
    },
    containerCross: {
        marginLeft: 5,
        flexDirection: 'row', alignItems: 'center', marginTop: 20
    },
    traingingContainer: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 20,
        justifyContent: 'space-around'
    },
    numberContainer: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' },
    bigNumberStyle: { color: '#757577', fontSize: 60, fontWeight: '300' },
    smallNumberStyle: { color: '#757577', fontSize: 30, paddingBottom: 11 },
    iconTraining: {
        width: 60, height: 60, borderWidth: 2, borderRadius: 30, alignItems: 'center',
        justifyContent: 'center', borderColor: '#828284', marginBottom: 6
    }
};
const mapStateToProps = (state) =>{
    return {
        setting:state.setting
    }
}
export default connect(mapStateToProps,{HideRating,ShowRating})(EndTraining);