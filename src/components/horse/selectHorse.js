import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { selectHorse } from '../../actions';
class SelectHorse extends Component {
    onRowPress = () => {
        this.props.selectHorse({id:this.props.horse.uid,name:this.props.horse.horsename});
        

    }
    

    render() {
        const { horsename ,uid} = this.props.horse
        return (
            <TouchableWithoutFeedback
                onPress={this.onRowPress}
                
                >

                <View style={styles.containerStyle}>
                   
                        <Text style={uid === this.props.user.horseSelected?
                            {paddingLeft:10,color:'#fff',fontSize:18}:styles.titleStyle}>
                            {horsename? horsename: 'NO NAME'}
                        </Text>
                    
                    <Image source={uid === this.props.user.horseSelected? 
                        require('../../../image/icon/Calibrate.png'): require('../../../image/icon/Horse_Grey2.png')}
                        style={uid === this.props.user.horseSelected?
                            { height: 69, width: 50 }:{ height: 50, width: 50 }} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
};
const styles = {
    titleStyle: {
        fontSize: 18,
        color: '#515153'
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       height:40,
        borderBottomColor: '#515153',
        borderBottomWidth: 1,
        width:200,
        paddingLeft:10

    }
};
mapStateToProps = (state) => {
    return {
        user: state.user
        
    }
};
const mapDispatchToProps = (dispatch, props) => ({
    selectHorse: (id) => dispatch(selectHorse(id))

});
export default connect(mapStateToProps, mapDispatchToProps)(SelectHorse);