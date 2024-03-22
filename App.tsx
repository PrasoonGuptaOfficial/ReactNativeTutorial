import React, {useState} from 'react';
import {Button, PermissionsAndroid, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [accessed, setAccessed] = useState('');
  const androidPermission = async () => {
    try {
      const access = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Permission',
          message: 'Demo',
          buttonNeutral: 'Ask Me Later',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        },
      );
      if (access === PermissionsAndroid.RESULTS.GRANTED) {
        setAccessed('Granted');
      } else {
        setAccessed('Denied');
      }
    } catch (e) {
      throw new Error('Something went wrong');
    }
  };
  const bluetoothAndroidPermission = async () => {
    try {
      const access = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        {
          title: 'App Permission',
          message: 'Demo',
          buttonNeutral: 'Ask Me Later',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        },
      );
      if (access === PermissionsAndroid.RESULTS.GRANTED) {
        setAccessed('Granted');
      } else {
        setAccessed('Denied');
      }
    } catch (e) {
      throw new Error('Something went wrong');
    }
  };
  return (
    <View>
      <Text>{accessed}</Text>
      <Button title="Camera Permission" onPress={androidPermission} />
      <Button
        title="Bluetooth Permission"
        onPress={bluetoothAndroidPermission}
      />
    </View>
  );
}

export default App;
