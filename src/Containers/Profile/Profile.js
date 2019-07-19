import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './ProfileStyles';

export default function Profile() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View style={styles.containerPage}>
      <Text>Profile page</Text>
    </View>
  );
}
