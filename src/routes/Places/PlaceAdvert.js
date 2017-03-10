import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body, Text, H2, H3, Icon } from 'native-base';

const PlaceAdvert = props => (
  <Card>
    <CardItem style={{padding: 0}}>
      <Body style={{padding: 0}}>
      <Content style={{padding: 20, paddingTop: 10}}>
        <H2>Iklan....</H2>
      </Content>
      </Body>
    </CardItem>
  </Card>
);

export default PlaceAdvert;
