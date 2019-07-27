import React, { useState } from 'react';
import firebase from 'react-native-firebase';

import { PrimaryButton, LinkButton } from '../../Components/Buttons/Buttons';
import InputForm from '../../Components/InputForm/InputForm';
import FormContainer from '../../Components/FormContainer/FormContainer';

export default function Register(props) {
  // Declare a new state variable, which we'll call "count"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function createAccount() {
    console.log('create account!');

    if (password !== confirmPassword) {
      console.log('password are not equal');
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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

  function cancel() {
    props.navigation.navigate('Login');
  }

  return (
    <FormContainer title="Register" icon="ios-egg">
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
        <InputForm
          onChange={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
          textContentType="password"
          icon="ios-lock"
          placeholder="Confirm password"
        />
        <PrimaryButton onPress={createAccount} text="Create account" />
        <LinkButton onPress={cancel} text="Cancel" />
      </React.Fragment>
    </FormContainer>
  );
}
