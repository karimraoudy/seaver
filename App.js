import React, {Component} from 'react';
import {Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import AppNavigation from './AppNavigations';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      <AppNavigation />
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

