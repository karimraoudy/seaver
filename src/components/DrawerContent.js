import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
class DrawerContent extends Component {
    static defaultProps = {
        imageChemin: '../image/compte-utilisateur.png'
    }
    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <View style={styles.container}>
                        <View style={styles.profile}>
                            <Image source={this.props.user.avatar ? { uri: this.props.user.avatar } : require('../../image/compte-utilisateur.png')}
                                style={styles.avatar} />
                            <View>
                                <Text style={styles.name}>{this.props.user.firstName}</Text>
                                <Text style={{ color: '#727274', fontSize: 16, fontWeight: '100' }}>{this.props.user.lastName}</Text>
                            </View>
                        </View>

                    </View>
                    <View >
                        <View style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                            margin: 22,
                            marginTop: 0,
                            marginBottom: 10,
                            alignItems: 'center'
                        }} >
                            <Text style={{ color: '#727274', fontSize: 14, fontWeight: '100', marginBottom: 8 }}>NOW RIDDING</Text>
                        </View>
                        <DrawerItems {...this.props} items={this.props.items.filter((item) => item.routeName === 'home' ||
                            item.routeName === 'calendrier' || item.routeName === 'horses')} />
                        <View style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                            margin: 22,
                            marginBottom: 0
                        }} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <DrawerItems {...this.props} items={this.props.items.filter((item) => item.routeName === 'settings' ||
                            item.routeName === 'calibrations' || item.routeName === 'friends' || item.routeName === 'notif' || item.routeName === 'report ')} />
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#313133',
        width: '70%'

    },
    profile: {

        height: 160,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        marginLeft: 10
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ACACAE'
    }
};
const mapStateToProps = (state) => {

    return {
        user: state.user
    }
};
export default connect(mapStateToProps)(DrawerContent);