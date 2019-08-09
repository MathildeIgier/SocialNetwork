import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  authContainer: {
    backgroundColor: Colors.lavander,
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  formContainer: {
    backgroundColor: Colors.snowTransparent,
    padding: 30,
    margin: 20,
    borderRadius: 15,
    alignItems: 'center'
  },
  forgotlink: {
    alignItems: 'flex-end',
    width: '100%'
  }
});
