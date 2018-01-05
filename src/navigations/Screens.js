import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
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
import HorseHeader from '../components/horseHeader';
import EditUser from '../components/editUser';
import Test from '../screens/Test';
import HorseEdit from '../components/horseEdit';
import HorseForm from '../components/horseFrom';

const HomeMenu = StackNavigator({
    homemenu : { 
        screen: TabNavigator({
            home: {screen: Home},
            test1: {screen: Test},
            test2: {screen: Test},
            test3: {screen: Test},
            test4: {screen: Test}
            
          },{
            tabBarPosition: 'bottom',
           
            swipeEnabled: false, //android swipe default
            tabBarOptions:{
              labelStyle: { fontSize:12},
              showIcon: true,
              showLabel:false,
              iconStyle: {
                width: 30,
                height: 30
                
              },
              style:{
                  backgroundColor:'#313133'
              },
              activeTintColor:'#9B9B9D',
              inactiveTintColor:'#9B9B9D'
            
            }
          })

     }
  
},{
    navigationOptions:{
        header: props => <ImageHeader {...props} title="S E A V E R"  menu="hammer"/>,
    }
});
const TrainingMenu = StackNavigator({
    trainingmenu : { screen: Training },
  
});
const HorsesMenu = StackNavigator({
   horses:{screen: StackNavigator({
        horseslist: {screen:Horses}
   },{
    navigationOptions:{
        header: props => <ImageHeader {...props} title="MY HORSES"  menu="hammer"/>,
    }
   })},
   registerhorse:{ screen: StackNavigator({
        registerform:{screen:HorseForm}
   },{
    navigationOptions:{
        header: props => <ImageHeader {...props} title="REGISTER HORSE" />,
    }
   })},
   horseedit:{ screen: StackNavigator({
    edithorse:{screen:HorseEdit}
},{
navigationOptions:{
    header: props => <HorseHeader {...props} title="MY HORSES" showHeaderRight  />,
}
})}

});
const CalendrierMenu = StackNavigator({
    calendriermenu : { screen: Calendrier },
  
});
const SettingsMenu = StackNavigator({
    setting: {screen: StackNavigator({
        settingsmenu: {screen: Settings}
    },{
        navigationOptions:{
            header: props => <ImageHeader {...props} title="USER SETTINGS" showHeaderRight />,
    
        }
    })},
    settingsprofil: {screen: StackNavigator({
        editprofil: {screen: EditUser}
    },{
        navigationOptions:{
            header: props => <ImageHeader {...props} title="EDIT SETTINGS" />,
    
        }
    })}
  
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