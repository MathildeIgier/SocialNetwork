import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './LoadingStyles';

export default function Loading(props) {
  useEffect(() => {
    const loggedState = false;
    props.navigation.navigate(loggedState ? 'Home' : 'Login');
  });

  return (
    <View style={styles.containerPage}>
      <Text>Loading</Text>
    </View>
  );
}
