import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  buttonContainer: {
    backgroundColor: Colors.lavander,
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    width: '100%'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 18
  },
  buttonContainerSec: {
    backgroundColor: Colors.purple,
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    width: '100%'
  },
  buttonTextSec: {
    color: Colors.lavander,
    textAlign: 'center',
    fontSize: 18
  },
  linkContainer: {
    padding: 10,
    marginTop: 5
  }
});
