import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import FoodsScreen from './FoodsScreen';
import ProfileScreen from './ProfileScreen';
import SearchIconUI from '../components/SearchIconUI';

const MainScreenNavigator = TabNavigator({
  Main: {screen: MainScreen},
  Foods: {screen: FoodsScreen},
  Stories: {screen: FoodsScreen},
  Profile: {screen: ProfileScreen},
}, { tabBarOptions: {
  activeTintColor: '#019875',
  labelStyle: {
    fontSize: 12,
    color: '#353535',
  },
  style: {
    backgroundColor: '#F5F5F5',
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
