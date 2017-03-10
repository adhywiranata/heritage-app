import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import { Icon } from 'native-base';

class CameraScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
            <Icon name="camera" style={{color: '#FFFFFF', fontSize: 40}} />
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 10,
    width: 100,
    height: 100,
    margin: 40,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.5)'
  },
  cameraIcon: {
    color: '#FFFFFF',
  }
});

CameraScreen.navigationOptions = {
  header: {
    visible: false,
  }
}

export default CameraScreen;
