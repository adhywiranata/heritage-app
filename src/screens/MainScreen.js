import React from 'react';
import {
  View, Text, Dimensions,
} from 'react-native';
import { Container } from 'native-base';

import Photos from '../routes/Photos';
import MainFab from '../components/Fabs/MainFab';

const deviceHeight = Dimensions.get('window').height;

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Photos />
    );
  }
}

export default MainScreen;
