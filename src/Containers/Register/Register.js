import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './RegisterStyles';

export default function Register() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return <View style={styles.containerPage}></View>;
}

Register.navigationOptions = ({ navigation }) => ({
  title: 'Register'
});
