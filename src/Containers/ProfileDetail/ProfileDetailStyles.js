import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  scrollView: {
    display: 'flex',
    flex: 1
  },
  profileContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 20
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  profileSpeciality: {
    fontSize: 16
  },
  profilePersonalMessage: {
    fontSize: 16,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center'
  },
  imageSeparator: {
    width: '100%',
    height: 6,
    backgroundColor: Colors.lavander,
    position: 'absolute',
    top: 43,
    margin: 'auto'
  },
  imageCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: Colors.lavander,
    alignItems: 'center',
    justifyContent: 'center'
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },

  profileSession: {
    flex: 2,
    paddingTop: 20,
    paddingBottom: 20
  },
  sessionsList: {
    backgroundColor: Colors.lavander,
    width: 250,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  sessionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: Colors.snow
  },
  sessionDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.snow,
    paddingTop: 5
  }
});
