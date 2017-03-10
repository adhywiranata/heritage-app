import React from 'react';
import { Container, Content, Button, Icon, Fab, View } from 'native-base';

class MainFab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Fab
        active={this.state.active}
        direction="up"
        style={{ backgroundColor: '#019875' }}
        position="bottomRight"
        onPress={() => {
          this.setState({ active: !this.state.active});
          this.props.toggleFabOverlay();
        }}
      >
        {this.state.active ? (<Icon name="remove" />) : (<Icon name="add" />) }
        <Button style={{ backgroundColor: '#65C6BB' }}>
          <Icon name="camera" />
        </Button>
        <Button style={{ backgroundColor: '#52B3D9' }}>
          <Icon name="cloud-upload" />
        </Button>
        <Button style={{ backgroundColor: '#D64541' }}>
          <Icon name="create" />
        </Button>
      </Fab>
    );
  }
}

export default MainFab;
