/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from '../../Navigation/AppNavigation';
import Home from '../Home/Home';

import initStore from '../../Redux/stores';

import styles from './AppStyles';

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
