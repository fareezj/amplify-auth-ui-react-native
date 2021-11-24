import React from 'react';
import {View, Text, Button} from 'react-native';

export default function SignUp(props) {
  if (props.authState === 'signUp')
    return (
      <View>
        <Text>SignUp</Text>
        <Button
          title="Back to sign in"
          onPress={() => props.onStateChange('signIn', {})}
        />
        <Button
          title="Confirm a code"
          onPress={() => props.onStateChange('confirmSignUp', {})}
        />
      </View>
    );
  else return null;
}
