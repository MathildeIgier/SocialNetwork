import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sessionLineContainer: {
    flexDirection: 'row',
    paddingTop: 15
  },
  iconContainer: {
    width: 20,
    alignItems: 'center'
  },
  itemValue: {
    color: Colors.snow,
    fontSize: 16,
    paddingTop: 3,
    marginLeft: 10
  }
});
