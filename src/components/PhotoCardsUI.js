import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body, Text, H2, H3, Icon } from 'native-base';

const PhotoCardsUI = props => (
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
        >
          <View style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: 30,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
          }}>
            <View style={{alignItems: 'flex-start', flexDirection: 'row'}} >
              <Icon name="eye" style={{color: '#A2DED0', fontSize: 14, paddingTop: 2, marginLeft: 10, }} />
              <Text style={{color: '#FFFFFF', marginLeft: 5, fontSize: 14}}>{props.views}</Text>
              <Icon name="heart" style={{color: '#F1A9A0', fontSize: 14, marginLeft: 10, paddingTop: 2,}} />
              <Text style={{color: '#FFFFFF', marginLeft: 5, fontSize: 14}}>{props.likes}</Text>
            </View>
            <View style={{alignItems: 'flex-start', flexDirection: 'row'}} >
              <Icon name="map" style={{color: '#DDDDDD', fontSize: 14, marginLeft: 10, paddingTop: 2,}} />
              <Text style={{color: '#FFFFFF', marginLeft: 5, fontSize: 14}}>{props.location}</Text>
            </View>
          </View>
        </Image>
        <Content style={{width: '100%', padding: 10, paddingTop: 10}}>
          <Text style={{fontSize: 14, color: '#666', paddingLeft: 10}}>{props.user}</Text>
          <H2 style={{fontSize: 18, marginTop: 5, paddingLeft: 10}}>{props.title}</H2>
          <View style={{
              height: 1,
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              marginTop: 10,
          }}></View>
          <Text style={{fontSize: 14, color: '#666', padding: 10}}>
            {props.description}
          </Text>

          <TouchableOpacity style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: '#D64541',
            position: 'absolute',
            right: 0,
            top: 0,
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

export default PhotoCardsUI;
