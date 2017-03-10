import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import SearchIconUI from '../components/SearchIconUI';

const MainScreenNavigator = TabNavigator({
  Main: {screen: MainScreen},
  Stories: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
}, { tabBarOptions: {
  activeTintColor: '#FFFFFF',
  labelStyle: {
    fontSize: 14,
  },
  style: {
    backgroundColor: '#353535',
  },
}});

MainScreenNavigator.navigationOptions = {
  title: 'HeriTage',
  header: {
    right: <SearchIconUI color={'#FFFFFF'} />,
    style: {
      backgroundColor: '#019875',
    },
    titleStyle: {
      color: '#FFFFFF',
    },
  },
};

export default MainScreenNavigator;
