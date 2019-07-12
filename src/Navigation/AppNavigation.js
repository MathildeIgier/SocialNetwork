import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Containers/Home/Home';
import Loading from '../Containers/Loading/Loading';

/* import styles from './Styles/NavigationStyles'; */

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Home: { screen: Home },
    Loading: { screen: Loading }
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

export default createAppContainer(PrimaryNav);
