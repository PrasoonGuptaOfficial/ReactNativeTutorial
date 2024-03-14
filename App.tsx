import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

function App(): React.JSX.Element {
  const [value, setText] = useState('');
  return (
    <View>
      <Text style={styles.textBold}>ABC</Text>
      <Image source={require('./Tutorial.png')} style={styles.imageSize} />
      <TextInput
        value={value}
        onChangeText={setText}
        placeholder="Enter String"
      />
      <ScrollView>
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
        <Image source={require('./Tutorial.png')} style={styles.imageSize} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textBold: {
    color: 'red',
    fontSize: 20,
  },
  imageSize: {
    width: 20,
    height: 20,
  },
});

export default App;
