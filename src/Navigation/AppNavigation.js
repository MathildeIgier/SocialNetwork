import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Containers/Home/Home';
import Loading from '../Containers/Loading/Loading';
import Login from '../Containers/Login/Login';
import Register from '../Containers/Register/Register';
import Profile from '../Containers/Profile/Profile';
import ProfileDetail from '../Containers/ProfileDetail/ProfileDetail';

/* import styles from './Styles/NavigationStyles'; */

// Manifest of possible screens
const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    ProfileDetail: { screen: ProfileDetail }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7B506F'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const LoggedIn = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-home" color={tintColor} size={25} />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-person" color={tintColor} size={25} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#7B506F',
      inactiveTintColor: '#D7CAD3'
    }
  }
);

const AuthStack = createSwitchNavigator(
  {
    LoggedIn,
    Loading: { screen: Loading },
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(AuthStack);
