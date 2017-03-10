import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon, Button, Spinner } from 'native-base';

class ScrollMoreUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }

  loadMore() {
    this.setState({isLoading: true})
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10, paddingBottom: 40}}>
        <Button
          onPress={() => { this.loadMore() }}
          style={{
            width: '50%',
            backgroundColor: '#446CB3',
            padding: 5,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 40,
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
        { this.state.isLoading ? (
          <Spinner color='white' />
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'center',}}>
            <Icon name="eye" style={{color: '#FFFFFF', fontSize: 15,}} />
            <Text style={{color: '#FFFFFF', marginLeft: 5,}}>Load More</Text>
          </View>
        ) }
        </Button>
      </View>
    );
  }
}

export default ScrollMoreUI;
