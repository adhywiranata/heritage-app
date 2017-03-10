import React from 'react';
import {
  View, Text
} from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View><Text>This is MainScene</Text></View>
    );
  }
}

export default MainScreen;
