import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import { H1, H2, Button, Spinner } from 'native-base';
import HeritageWall from './wall.png';

class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
    }
  }

  componentWillMount() {
    this.setState({
      isLoading: true,
    })
  }

  componentDidMount() {
    const self = this;
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 5000)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image
        source={HeritageWall}
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

          { this.state.isLoading ? ( <Spinner color='white' />) : (
            <View style={{margin: 20, width: '60%'}}>
              <Button
                block
                style={{backgroundColor: '#019875'}}
                onPress={() => {
                  this.setState({isLoading: true});
                  setTimeout(() => {
                    this.setState({isLoading: false});
                    navigate('Main');
                  }, 1000);
                }}
              >
                <Text style={{color: '#FFFFFF'}}>Login</Text>
              </Button>
              <Button
                block
                style={{backgroundColor: '#F89406', marginTop: 10}}
                onPress={() => navigate('Main')}
              >
                <Text style={{color: '#FFFFFF'}}>Sign Up</Text>
              </Button>
            </View>
          )}
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
