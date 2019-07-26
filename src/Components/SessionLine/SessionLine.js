import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './SessionLineStyles';

export default function SessionLine({ value, icon }) {
  return (
    <View style={styles.sessionLineContainer}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color="#fff" />
      </View>
      <Text style={styles.itemValue}>{value}</Text>
    </View>
  );
}
