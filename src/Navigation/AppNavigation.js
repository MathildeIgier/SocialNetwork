import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from '../Containers/Home/Home';
import Loading from '../Containers/Loading/Loading';
import Login from '../Containers/Login/Login';

/* import styles from './Styles/NavigationStyles'; */

// Manifest of possible screens
const AuthStack = createSwitchNavigator(
  {
    Home: { screen: Home },
    Loading: { screen: Loading },
    Login: { screen: Login }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Loading'
    /*     navigationOptions: {
      headerStyle: styles.header
    } */
  }
);

export default createAppContainer(AuthStack);
