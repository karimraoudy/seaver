import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import {HomeMenu, TrainingMenu, HorsesMenu, CalendrierMenu,
    SettingsMenu, CalibrationsMenu, FriendsMenu, NotificationsMenu, ReportMenu} from './Screens';
import DrawerContent from '../components/DrawerContent';

const AuthoriserNavigation = DrawerNavigator ({
    home: {screen: HomeMenu },
    calendrier:{screen: CalendrierMenu},
    horses:{screen: HorsesMenu},
    settings:{screen: SettingsMenu},
    calibrations:{screen: CalibrationsMenu},
    friends:{screen: FriendsMenu},
    notif:{screen: NotificationsMenu},
    report:{screen: ReportMenu},

},{
    contentComponent: DrawerContent,
    contentOptions:{
        activeTintColor:'black',
        iconContainerStyle: {
            height:28,width:28,
            borderRadius:14,borderColor:'#fff',borderWidth:1,
            justifyContent:'center', alignItems:'center',marginRight:0
        },
        // activeBackgroundColor: '#fff',
        labelStyle:{
            fontSize: 10,
            fontWeight: '500',
            color:'#727274'
        }
    },
    drawerBackgroundColor: 'rgba(0,0,0,0)'
});
export default AuthoriserNavigation;