import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';

import styles from './LoginStyles';

export default function Login(props) {
  // Declare a new state variable, which we'll call "count"
  const [email, setEmail] = useState('user@mail.com');
  const [password, setPassword] = useState('123456');

  function signIn() {
    console.log('create account!');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('res', res);
        if (res.user) {
          props.navigation.navigate('Home');
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  console.log('email', email);

  return (
    <View style={styles.containerPage}>
      <Text>Login component</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        autoCapitalize="none"
        secureTextEntry={true}
        textContentType="password"
      />
      <TouchableOpacity onPress={signIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
