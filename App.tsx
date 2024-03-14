import React from 'react';
import {Image, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{height: 20, width: 20}} />
      <Image source={require('./Tutorial.png')} style={{height: 20}} />
    </View>
  );
}

export default App;
