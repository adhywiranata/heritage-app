import React from 'react';
import {
  View, Text
} from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View><Text>This is ProfileScreen</Text></View>
    );
  }
}

export default ProfileScreen;
