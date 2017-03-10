import React from 'react';
import {
  View, Text, Button
} from 'react-native';

class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is AuthScene</Text>
        <Button onPress={() => navigate('Main')} title="Login" />
      </View>
    );
  }
}

AuthScreen.navigationOptions = {
  header: {
    visible: false,
  }
}

export default AuthScreen;
