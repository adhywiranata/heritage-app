import React from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';

import MainFab from '../../components/Fabs/MainFab';
import Photo from './Photo';
import photosData from './photosDB.json';

const Photos = () => (
  <Container>
    <Content style={{ padding: 10, paddingBottom: 50}}>
      { photosData.photos.map(photo => <Photo key={photo.id} {...photo} />)}
    </Content>
    <MainFab />
  </Container>
);

export default Photos;
