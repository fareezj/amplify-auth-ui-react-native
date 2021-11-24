import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {StyleSheet, View, Text} from 'react-native';
import {
  Authenticator,
  SignIn,
  ConfirmSignUp,
  ConfirmSignIn,
  ForgotPassword,
} from 'aws-amplify-react-native';
import SignUp from './src/components/SignUp';

Amplify.configure(awsconfig);

function Home(props) {
  if (props.authState === 'signedIn') return <Text>Home Page</Text>;
  else return null;
}

export default function App() {
  return (
    <View style={style.container}>
      <Authenticator usernameAttributes="email"></Authenticator>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
