import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  const [textChange, setTextChange] = useState('');
  return (
    <View>
      <TextInput
        value={textChange}
        onChangeText={setTextChange}
        placeholder="Enter String"
      />
    </View>
  );
}

export default App;
