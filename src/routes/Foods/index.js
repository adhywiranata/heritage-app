import React from 'react';
import { View, Image } from 'react-native';
import { Container, Content } from 'native-base';

import MainFab from '../../components/Fabs/MainFab';
import ScrollMoreUI from '../../components/ScrollMoreUI';
import PhotoCardsUI from '../../components/PhotoCardsUI';
import foodsData from './foodsDB.json';

class Foods extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fabOverlay: false
    }
    this.toggleFabOverlay = this.toggleFabOverlay.bind(this);
  }

  toggleFabOverlay() {
    this.setState({
      fabOverlay: !this.state.fabOverlay,
    });
  }

  render() {
    return (
      <Container>
        <Content style={{ padding: 10, paddingBottom: 50}}>
          { foodsData.foods.map(food => <PhotoCardsUI key={food.id} {...food} />)}
          <ScrollMoreUI />
        </Content>
        { this.state.fabOverlay && (
          <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></View>
        )}
        <MainFab navigate={this.props.navigate} toggleFabOverlay={this.toggleFabOverlay} />
      </Container>
    );
  }
}

export default Foods;
