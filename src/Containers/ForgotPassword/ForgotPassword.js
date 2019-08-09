import React, { useState } from 'react';
import firebase from 'react-native-firebase';

import { PrimaryButton, LinkButton } from '../../Components/Buttons/Buttons';
import InputForm from '../../Components/InputForm/InputForm';
import FormContainer from '../../Components/FormContainer/FormContainer';

export default function ForgotPassword(props) {
  // Declare a new state variable, which we'll call "count"
  const [email, setEmail] = useState('user@mail.com');

  function forgetPassword() {
    console.log('reset password!');
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(res => {
        props.navigation.navigate('Login');
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  function cancel() {
    props.navigation.navigate('Login');
  }

  return (
    <FormContainer title="Reset Password" icon="ios-mail">
      <React.Fragment>
        <InputForm
          onChange={text => setEmail(text)}
          value={email}
          icon="ios-person"
          placeholder="Email"
        />
        <PrimaryButton onPress={forgetPassword} text="Send request" />
        <LinkButton onPress={cancel} text="Cancel" />
      </React.Fragment>
    </FormContainer>
  );
}
