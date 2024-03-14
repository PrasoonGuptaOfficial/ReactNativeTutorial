import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.textBold}>ABC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textBold: {
    color: 'red',
    fontSize: 20,
  },
});

export default App;
