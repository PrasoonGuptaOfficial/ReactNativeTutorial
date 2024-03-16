import React from 'react';
import {FlatList, Text, View} from 'react-native';

type ItemPropType = {
  id: number;
  name: string;
};

const DATA: ItemPropType[] = [
  {
    id: 1,
    name: 'Prasoon',
  },
  {
    id: 2,
    name: 'Prasoon',
  },
  {
    id: 3,
    name: 'Prasoon',
  },
  {
    id: 4,
    name: 'Prasoon',
  },
  {
    id: 5,
    name: 'Prasoon',
  },
  {
    id: 6,
    name: 'Prasoon',
  },
  {
    id: 7,
    name: 'Prasoon',
  },
  {
    id: 8,
    name: 'Prasoon',
  },
  {
    id: 9,
    name: 'Prasoon',
  },
  {
    id: 10,
    name: 'Prasoon',
  },
];

function App(): React.JSX.Element {
  const flatlistRenderItem = ({item}: {item: ItemPropType}) => {
    return <Text>{item.name}</Text>;
  };
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={flatlistRenderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default App;
