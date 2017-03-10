import React from 'react';
import {
  View, Text, Dimensions,
} from 'react-native';
import { Container } from 'native-base';

import Foods from '../routes/Foods';
import MainFab from '../components/Fabs/MainFab';

const deviceHeight = Dimensions.get('window').height;

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Foods',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Foods />
    );
  }
}

export default MainScreen;
