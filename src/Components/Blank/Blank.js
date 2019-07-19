import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './BlankStyles';

export default function Blank() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return <View style={styles.containerPage}></View>;
}

Blank.navigationOptions = ({ navigation }) => ({
  title: 'Blank'
});
