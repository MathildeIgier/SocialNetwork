import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './FormContainerStyles';

export default function FormContainer({ children, title, icon }) {
  return (
    <View style={styles.containerPage}>
      <View style={styles.authContainer}>
        <View style={styles.formContainer}>
          {icon ? (
            <View style={styles.iconContainer}>
              <Icon name={icon} size={50} color="#fff" />
            </View>
          ) : null}
          <Text style={styles.formTitle}>{title}</Text>
          <React.Fragment>{children}</React.Fragment>
        </View>
      </View>
    </View>
  );
}
