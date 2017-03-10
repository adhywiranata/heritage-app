import React from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';

import MainFab from '../../components/Fabs/MainFab';
import Place from './Place';
import photosData from './photosDB.json';

const Places = () => (
  <Container>
    <Content style={{ padding: 10, paddingBottom: 50}}>
      { photosData.photos.map(place => <Place key={place.id} {...place} />)}
    </Content>
    <MainFab />
  </Container>
);

export default Places;
