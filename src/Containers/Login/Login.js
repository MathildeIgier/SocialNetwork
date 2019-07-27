import React, { useState } from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';

import { PrimaryButton, LinkButton } from '../../Components/Buttons/Buttons';
import InputForm from '../../Components/InputForm/InputForm';
import FormContainer from '../../Components/FormContainer/FormContainer';

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

  function createAccount() {
    props.navigation.navigate('Register');
  }

  return (
    <FormContainer title="Sign In" icon="ios-person">
      <React.Fragment>
        <InputForm
          onChange={text => setEmail(text)}
          value={email}
          icon="ios-person"
          placeholder="Email"
        />
        <InputForm
          onChange={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          textContentType="password"
          icon="ios-lock"
          placeholder="Password"
        />
        <View style={styles.forgotlink}>
          <LinkButton onPress={createAccount} text="Forgot password?" />
        </View>
        <PrimaryButton onPress={signIn} text="Login" />
        <LinkButton onPress={createAccount} text="Create account" />
      </React.Fragment>
    </FormContainer>
  );
}
