import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  inputFormContainer: {
    width: '100%',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: Colors.snow,
    flexDirection: 'row'
  },
  iconContainer: {
    width: 30
  },
  inputForm: {
    flex: 1
  }
});
