import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  starsContainer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  star: {
    height: 17,
    width: 17
  }
});
