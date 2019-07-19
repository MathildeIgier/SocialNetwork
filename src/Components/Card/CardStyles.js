import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  cardContainer: {
    borderRadius: 5,
    backgroundColor: Colors.lightWhite,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row'
  },
  imageContainer: {
    borderRadius: 5,
    marginTop: -7,
    marginBottom: 7,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 130
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'space-around',
    flex: 1
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
  speciality: {
    fontSize: 16
  },
  button: {
    backgroundColor: Colors.lavander,
    width: 87,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'flex-end'
  },
  textButton: {
    textTransform: 'uppercase',
    color: Colors.snow,
    fontWeight: 'bold',
    fontSize: 10
  }
});
