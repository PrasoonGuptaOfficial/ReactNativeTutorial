import React, {useState} from 'react';
import {View, Switch, Button} from 'react-native';

function App(): React.JSX.Element {
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const toggleSwitch = () => {
    setSwitchEnabled(previousState => !previousState);
  };
  return (
    <View>
      <Button title="Click me" onPress={() => {}} />
      <Switch
        trackColor={{false: 'red', true: 'blue'}}
        value={switchEnabled}
        ios_backgroundColor="yellow"
        onValueChange={toggleSwitch}
        thumbColor={switchEnabled ? 'blue' : 'red'}
      />
    </View>
  );
}

export default App;
