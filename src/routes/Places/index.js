import React from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';

import MainFab from '../../components/Fabs/MainFab';
import PhotoCardsUI from '../../components/PhotoCardsUI';
import placesData from './placesDB.json';

const Places = () => (
  <Container>
    <Content style={{ padding: 10, paddingBottom: 50}}>
      { placesData.places.map(place => <PhotoCardsUI key={place.id} {...place} />)}
    </Content>
    <MainFab />
  </Container>
);

export default Places;
