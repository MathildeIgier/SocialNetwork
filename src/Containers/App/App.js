/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import AppNavigation from '../../Navigation/AppNavigation';

import initStore from '../../Redux/stores';

import styles from './AppStyles';

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#7B506F', '#7B506F', '#fff', '#fff']} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
      </LinearGradient>
    </Provider>
  );
};

export default App;
