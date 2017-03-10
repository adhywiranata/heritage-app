import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon, Button } from 'native-base';

const ScrollMoreUI = () => (
  <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10, paddingBottom: 40}}>
    <Button style={{
        width: '50%',
        backgroundColor: '#446CB3',
        padding: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    }}>
      <Icon name="eye" style={{color: '#FFFFFF', fontSize: 15,}} />
      <Text style={{color: '#FFFFFF', marginLeft: 5,}}>Load More</Text>
    </Button>
  </View>
);

export default ScrollMoreUI;
