import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { showHorse, showConfirm } from '../../actions';
class ListItem extends Component {
    onRowPress = () => {

        this.props.showHorse(this.props.horse.uid);
        this.props.navigateTo();

    }
    onLongPress = () => {
        this.props.showConfirm(this.props.horse.uid);
    }

    render() {
        const { horsename, uid } = this.props.horse;
        
        return (
            <TouchableWithoutFeedback
                onPress={this.onRowPress}
                onLongPress={this.onLongPress}>

                <View style={uid === this.props.user.horseSelected?[styles.containerStyle,{backgroundColor:'#ACACAE'}]
                :styles.containerStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            borderColor: '#ACACAE', borderWidth: 1, width: 70, height: 70,
                            borderRadius: 35, justifyContent: 'center', alignItems: 'center', marginRight: 20, backgroundColor:'#ACACAE'
                        }}>
                            <Image source={require('../../../image/icon/Avatar_Horse.png')}
                                style={uid === this.props.user.horseSelected?[styles.avatarStyle,{borderColor:'#fff'}]
                                :styles.avatarStyle} />
                        </View>
                        <Text style={uid === this.props.user.horseSelected?{fontSize: 21,color: '#fff'}:
                        styles.titleStyle}>
                            {horsename}
                        </Text>
                    </View>
                    <Image source={uid === this.props.user.horseSelected?
                        require('../../../image/icon/Calibrate.png')
                        :require('../../../image/icon/Horse_Grey3.png')}
                        style={uid === this.props.user.horseSelected?{ height: 90, width: 70 }:{ height: 70, width: 70 }} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
};
const styles = {
    titleStyle: {
        fontSize: 18,
        color: 'grey'
    }, avatarStyle: {
        height:70, width:70, borderRadius:35, borderWidth:1, borderColor:'#ACACAE'
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        height: 90
    }
};
mapStateToProps = (state) => {
    return {
        user:state.user,
        nav: state.nav
    }
};
const mapDispatchToProps = (dispatch, props) => ({
    navigateTo: () => dispatch(NavigationActions.navigate({ routeName: 'horseedit' })),
    showHorse: (id) => dispatch(showHorse(id)),
    showConfirm: (idTodelete) => dispatch(showConfirm(idTodelete))

});
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);