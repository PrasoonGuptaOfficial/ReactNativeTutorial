import React from 'react';
import {View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={{height: '100%'}}>
      <View style={{backgroundColor: 'red', flex: 1}} />
      <View style={{backgroundColor: 'yellow', flex: 2}} />
      <View style={{backgroundColor: 'orange', flex: 3}} />
    </View>
  );
}

export default App;
