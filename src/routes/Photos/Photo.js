import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body, Text, H2, H3, Icon } from 'native-base';

const Photo = props => (
  <Card>
    <CardItem style={{padding: 0}}>
      <Body style={{padding: 0}}>
        <Image
          source={{uri: props.photoUrl }}
          style={{
            width: '100%',
            height: 230,
            resizeMode: 'cover',
          }}
        />
      <Content style={{padding: 20, paddingTop: 10}}>
        <Text style={{fontSize: 14, color: '#666'}}>{props.user}</Text>
        <H2 style={{fontSize: 21, marginTop: 5}}>{props.title}</H2>
        <View style={{
            height: 1,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            marginTop: 10,
            marginBottom: 10,
        }}></View>
        <Text style={{fontSize: 14, color: '#666'}}>{props.description}</Text>

        <TouchableOpacity style={{
          width: 60,
          height: 60,
          borderRadius: 60,
          backgroundColor: '#D64541',
          position: 'absolute',
          right: 0,
          top: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon name="heart" style={{color: '#FFFFFF'}} />
        </TouchableOpacity>
      </Content>
      </Body>
    </CardItem>
  </Card>
);

export default Photo;
