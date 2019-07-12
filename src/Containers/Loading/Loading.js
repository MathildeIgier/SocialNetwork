import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './LoadingStyles';

export default function Loading(props) {
  useEffect(() => {
    // firebase.auth().signOut();
    const user = firebase.auth().currentUser;
    console.log('user --------', user);
    props.navigation.navigate(user ? 'Home' : 'Login');
  });

  return (
    <View style={styles.containerPage}>
      <Text>Loading</Text>
    </View>
  );
}
