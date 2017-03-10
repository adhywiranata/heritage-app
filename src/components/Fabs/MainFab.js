import React, { Component } from 'react';
import { Container, Content, Button, Icon, Fab, View } from 'native-base';

const MainFab = () => (
  <Fab
      active={false}
      direction="up"
      style={{ backgroundColor: '#019875' }}
      position="bottomRight"
      onPress={() => {}}
  >
    <Icon name="camera" />
  </Fab>
);

export default MainFab;
