import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  iconContainer: {
    backgroundColor: Colors.lavander,
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -75,
    marginBottom: 20
  },
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
  }
});
