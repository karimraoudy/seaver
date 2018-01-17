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
        const { horsename } = this.props.horse
        return (
            <TouchableWithoutFeedback
                onPress={this.onRowPress}
                onLongPress={this.onLongPress}>

                <View style={styles.containerStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../image/icon/Avatar_Horse.png')}
                            style={styles.avatarStyle} />
                        <Text style={styles.titleStyle}>
                            {horsename}
                        </Text>
                    </View>
                    <Image source={require('../../../image/icon/Horse_Grey3.png')}
                        style={{ height: 70, width: 70 }} />
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
        height: 70, width: 70, borderRadius: 35,
        borderWidth: 1, borderColor: '#ACACAE', backgroundColor: '#ACACAE', marginRight: 20
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopColor: 'grey',
        borderTopWidth: 1
    }
};
mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};
const mapDispatchToProps = (dispatch, props) => ({
    navigateTo: () => dispatch(NavigationActions.navigate({ routeName: 'horseedit' })),
    showHorse: (id) => dispatch(showHorse(id)),
    showConfirm: (idTodelete) => dispatch(showConfirm(idTodelete))

});
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);