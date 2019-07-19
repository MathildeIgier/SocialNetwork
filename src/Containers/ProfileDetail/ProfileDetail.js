import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './ProfileDetailStyles';

export default function ProfileDetail() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View style={styles.containerPage}>
      <Text>Profile Details</Text>
    </View>
  );
}

ProfileDetail.navigationOptions = ({ navigation }) => ({
  title: 'ProfileDetail'
});
