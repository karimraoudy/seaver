import React from 'react';
import { StackNavigator, TabView } from 'react-navigation';
import Home from '../screens/Home';
import Calibrations from '../screens/Calibrations';
import Friends from '../screens/Friends';
import Horses from '../screens/Horses';
import Notifications from '../screens/Notifications';
import Report  from '../screens/Report';
import Settings  from '../screens/Settings';
import Training from '../screens/Training';
import Calendrier from '../screens/Calendrier';
import ImageHeader from '../components/Header';

const HomeMenu = StackNavigator({
    homemenu : { screen: Home },
  
},{
    navigationOptions:{
        header: props => <ImageHeader {...props} title="S E A V E R"  menu="hammer"/>,
    }
});
const TrainingMenu = StackNavigator({
    trainingmenu : { screen: Training },
  
});
const HorsesMenu = StackNavigator({
    horsesmenu : { screen: Horses },
  
});
const CalendrierMenu = StackNavigator({
    calendriermenu : { screen: Calendrier },
  
});
const SettingsMenu = StackNavigator({
    settingsmenu : { screen: Settings },
  
});
const CalibrationsMenu = StackNavigator({
    calibrationmenu : { screen: Calibrations },
  
});
const FriendsMenu = StackNavigator({
    friendsmenu : { screen: Friends },
  
});
const NotificationsMenu = StackNavigator({
    notificationsmenu : { screen: Notifications},
  
});
const ReportMenu = StackNavigator({
    reportmenu : { screen: Report },
  
});
export  {HomeMenu, TrainingMenu, HorsesMenu, CalendrierMenu,
SettingsMenu, CalibrationsMenu, FriendsMenu, NotificationsMenu, ReportMenu};