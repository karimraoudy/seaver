import React from 'react'; 
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Calibrations from '../screens/Calibrations';
import Friends from '../screens/Friends';
import Horses from '../screens/Horses';
import Notifications from '../screens/Notifications';
import Report from '../screens/Report';
import Settings from '../screens/Settings';
// import Training from '../screens/Training';
import Calendrier from '../screens/Calendrier';
import ImageHeader from '../components/settings/Header';
import HorseHeader from '../components/settings/horseHeader';
import EditUser from '../components/auth/editUser';
import heartPage from '../screens/heartPage';
import speedPage from '../screens/speedPage'; 
import directionPage from '../screens/directionPage';
import jumpPage from '../screens/jumpPage';
import HorseEdit from '../components/horse/horseEdit';
import HorseForm from '../components/horse/horseFrom';
import Discipline from '../components/training/discipline';
import Synchro from '../components/training/synchro';
import Training from '../components/training/training';
import EndTraining from '../components/training/finTraining';

const HomeMenu = StackNavigator({
    homemenu: {
        screen: TabNavigator({
            home: { screen: Home },
            heartpage: { screen: heartPage },
            speedpage: { screen: speedPage },
            directionpage: { screen: directionPage },
            jumppage: { screen: jumpPage }

        }, {
                tabBarPosition: 'bottom',

                swipeEnabled: false, //android swipe default
                tabBarOptions: {
                    labelStyle: { fontSize: 12 },
                    showIcon: true,
                    showLabel: false,
                    style: {
                        backgroundColor: '#313133',
                    },
                    indicatorStyle:{backgroundColor:'transparent'},
                    iconStyle:{width:50, height:40},
                    tabStyle: {
                        justifyContent: 'space-around'
                        , alignItems: 'center'
                    },
                    activeTintColor: '#A67B7D',
                    inactiveTintColor: '#9B9B9D'

                }
            })

    }

});
const TrainingMenu = StackNavigator({
    training:{
        screen: TabNavigator({
            discipline: { screen: Discipline }
        }, {
                tabBarPosition: 'bottom',
                swipeEnabled: false, //android swipe default
                tabBarOptions: {
                    showIcon: true,
                    showLabel: false,

                    style: {
                        backgroundColor: '#313133',
                    },
                    indicatorStyle:{backgroundColor:'transparent'},
                    iconStyle:{width:50, height:40},
                    tabStyle: {
                        
                        justifyContent: 'flex-start'
                        , alignItems: 'flex-start'
                    },
                    activeTintColor: '#9B9B9D',
                    inactiveTintColor: '#9B9B9D'
                }
            })
    },
    synchro: {
        screen: StackNavigator({
            synchroPage: { screen: Synchro }
        })
    },
    starttraining:{
        screen: TabNavigator({
            starttrain: { screen: Training }
        }, {
                tabBarPosition: 'bottom',
                swipeEnabled: false, //android swipe default
                tabBarOptions: {
                    showIcon: true,
                    showLabel: false,

                    style: {
                        backgroundColor: '#313133',
                    },
                    indicatorStyle:{backgroundColor:'transparent'},
                    iconStyle:{width:50, height:40},
                    tabStyle: {
                        
                        justifyContent: 'flex-start'
                        , alignItems: 'flex-start'
                    },
                    activeTintColor: '#9B9B9D',
                    inactiveTintColor: '#9B9B9D'
                }
            })
    },
    endtraining:{
        screen: StackNavigator({
            endtrain: { screen: EndTraining }
        })
    },


});
const HorsesMenu = StackNavigator({
    horses: {
        screen: TabNavigator({
            horseslist: { screen: Horses }
        }, {
                tabBarPosition: 'bottom',
                swipeEnabled: false, //android swipe default
                tabBarOptions: {
                    showIcon: true,
                    showLabel: false,

                    style: {
                        backgroundColor: '#313133',
                    },
                    indicatorStyle:{backgroundColor:'transparent'},
                    iconStyle:{width:50, height:40},
                    tabStyle: {
                        
                        justifyContent: 'flex-start'
                        , alignItems: 'flex-start'
                    },
                    activeTintColor: '#9B9B9D',
                    inactiveTintColor: '#9B9B9D'
                }
            })
    },
    registerhorse: {
        screen: StackNavigator({
            registerform: { screen: HorseForm }
        }, {
                navigationOptions: {
                    header: props => <ImageHeader {...props} title="REGISTER HORSE" />,
                }
            })
    },
    horseedit: {
        screen: TabNavigator({
            edithorse: { screen: HorseEdit }
        }, {
                tabBarPosition: 'bottom',
                swipeEnabled: false, //android swipe default
                tabBarOptions: {
                    showIcon: true,
                    showLabel: false,

                    style: {
                        backgroundColor: '#313133',
                    },
                    indicatorStyle:{backgroundColor:'transparent'},
                    iconStyle:{width:50, height:40},
                    tabStyle: {
                        
                        justifyContent: 'flex-start'
                        , alignItems: 'flex-start'
                    },
                    activeTintColor: '#9B9B9D',
                    inactiveTintColor: '#9B9B9D'
                },
                navigationOptions: {
                    header: props => <HorseHeader {...props} title="MY HORSE" showHeaderRight  />,
                }
            })
    }

});
const CalendrierMenu = StackNavigator({
    calendriermenu: { screen: Calendrier },

}, {
    navigationOptions: {
        header: props => <ImageHeader {...props} title="CALENDAR" />,
    }
});
const SettingsMenu = StackNavigator({
    setting: {
        screen: TabNavigator({
            settingsmenu: { screen: Settings }
        }, {
                tabBarPosition: 'bottom',
                swipeEnabled: false, //android swipe default
                tabBarOptions: {
                    showIcon: true,
                    showLabel: false,

                    style: {
                        backgroundColor: '#313133',
                    },
                    indicatorStyle:{backgroundColor:'transparent'},
                    iconStyle:{width:50, height:40},
                    tabStyle: {
                        
                        justifyContent: 'flex-start'
                        , alignItems: 'flex-start'
                    },
                    activeTintColor: '#9B9B9D',
                    inactiveTintColor: '#9B9B9D'
                },
                navigationOptions: {
                    header: props => <ImageHeader {...props} title="USER SETTINGS" showHeaderRight />,

                }
            })
    },
    settingsprofil: {
        screen: StackNavigator({
            editprofil: { screen: EditUser }
        }, {
                navigationOptions: {
                    header: props => <ImageHeader {...props} title="EDIT SETTINGS" />,

                }
            })
    }

});
const CalibrationsMenu = StackNavigator({
    calibrationmenu: { screen: Calibrations },

});
const FriendsMenu = StackNavigator({
    friendsmenu: { screen: Friends },

});
const NotificationsMenu = StackNavigator({
    notificationsmenu: { screen: Notifications },

});
const ReportMenu = StackNavigator({
    reportmenu: { screen: Report },

});
export {
    HomeMenu, TrainingMenu, HorsesMenu, CalendrierMenu,
    SettingsMenu, CalibrationsMenu, FriendsMenu, NotificationsMenu, ReportMenu
};