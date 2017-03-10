import React from 'react';
import { Image, View, TouchableOpacity, Dimensions } from 'react-native';
import { Content, Card, CardItem, Body, Text, H2, H3, Icon } from 'native-base';

const deviceWidth = Dimensions.get('window').width;

const PlaceRecommendations = props => (
  <Card>
    <CardItem style={{padding: 0}}>
      <Body style={{padding: 0}}>
      <View style={{padding: 10, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Content style={{padding: 10}}>
          <Text style={{fontSize: 14}}>5 of your friends visited Indonesia. Explore Indonesia's breathtaking archipelago!</Text>
        </Content>
        <View style={{
            backgroundColor: '#52B3D9',
            width: 50,
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center' }} >
          <Icon name="paper-plane" style={{color: '#FFFFFF'}}/>
        </View>
      </View>
      </Body>
    </CardItem>
  </Card>
);

export default PlaceRecommendations;
