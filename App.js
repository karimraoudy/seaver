import React, {Component} from 'react';
import {Text, View } from 'react-native';
import {Provider,connect} from 'react-redux';
import store from './src/store';
import {addNavigationHelpers} from 'react-navigation';
import RootNavigation from './src/navigations/root';
const AppNav = ({dispatch,nav})=>
  <RootNavigation 
  navigation={addNavigationHelpers({
    dispatch,
    state:nav
  })}
  />
;
const mapStateToProps = state =>({
  nav:state.nav
})
const AppWithNavigation = connect(mapStateToProps)(AppNav);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      <AppWithNavigation />
      </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
};

