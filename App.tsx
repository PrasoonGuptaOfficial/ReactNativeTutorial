import React, {useState} from 'react';
import {View, Switch} from 'react-native';

function App(): React.JSX.Element {
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const toggleSwitch = () => {
    setSwitchEnabled(previousState => !previousState);
  };
  return (
    <View>
      <Switch
        trackColor={{false: 'red', true: 'blue'}}
        value={switchEnabled}
        ios_backgroundColor="yellow"
        onValueChange={toggleSwitch}
      />
    </View>
  );
}

export default App;
