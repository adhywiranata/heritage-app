import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import { H1, H2, Button } from 'native-base';

class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image
        source={{uri: 'http://blamethemonkey.com/wp-content/uploads/2014/01/Elia-Locardi-Travel-Photography-Beyond-Borobudur-Java-Indonesia-1440-WM-DM-60q.jpg'}}
        style={{width:'100%', height: '100%', resizeMode: 'cover'}}
      >
        <View style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Text style={{color: '#FFFFFF', fontSize: 60, }}>HeriTage</Text>
          <H2 style={{color: '#DDDDDD'}}>Tag Yours, Visit Others</H2>
          <View style={{margin: 20, width: '50%'}}>
            <Button
              block
              style={{backgroundColor: '#019875'}}
              onPress={() => navigate('Main')}
            >
              <Text style={{color: '#FFFFFF'}}>Login</Text>
            </Button>
          </View>
        </View>
      </Image>
    );
  }
}

AuthScreen.navigationOptions = {
  header: {
    visible: false,
  }
}

export default AuthScreen;
