import React from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';

import MainFab from '../../components/Fabs/MainFab';
import ScrollMoreUI from '../../components/ScrollMoreUI';
import PhotoCardsUI from '../../components/PhotoCardsUI';
import PlaceRecommendations from './PlaceRecommendations';
import placesData from './placesDB.json';

const Places = () => (
  <Container>
    <Content style={{ padding: 10, paddingBottom: 50}}>
      <PlaceRecommendations />
      { placesData.places.map(place => <PhotoCardsUI key={place.id} {...place} />)}
      <ScrollMoreUI />
    </Content>
    <MainFab />
  </Container>
);

export default Places;
