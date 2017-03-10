import React from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';

import MainFab from '../../components/Fabs/MainFab';
import PhotoCardsUI from '../../components/PhotoCardsUI';
import foodsData from './foodsDB.json';

const Foods = () => (
  <Container>
    <Content style={{ padding: 10, paddingBottom: 50}}>
      { foodsData.foods.map(food => <PhotoCardsUI key={food.id} {...food} />)}
    </Content>
    <MainFab />
  </Container>
);

export default Foods;
