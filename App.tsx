import React from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';

type SectionListData = {
  id: number;
  name: string;
  data: string[];
};

const SectionListDATA: SectionListData[] = [
  {
    id: 1,
    name: 'Prasoon',
    data: ['React Native', 'React'],
  },
  {
    id: 2,
    name: 'Lokit',
    data: ['Android'],
  },
  {
    id: 3,
    name: 'Pulkit',
    data: ['UI', 'UX'],
  },
  {
    id: 4,
    name: 'Umang',
    data: ['Marketing', 'Analyst'],
  },
];

type ItemPropType = {
  id: number;
  name: string;
};

const FlatlistDATA: ItemPropType[] = [
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
  const sectionListRenderItem = ({item}: {item: string}) => {
    return <Text>{item}</Text>;
  };
  const sectionHeaderRenderItem = ({
    section: {name},
  }: {
    section: {name: string};
  }) => {
    return <Text>{name}</Text>;
  };
  return (
    <View>
      <FlatList
        data={FlatlistDATA}
        renderItem={flatlistRenderItem}
        keyExtractor={item => item.id.toString()}
      />
      <SectionList
        sections={SectionListDATA}
        keyExtractor={item => item}
        renderItem={sectionListRenderItem}
        renderSectionHeader={sectionHeaderRenderItem}
      />
    </View>
  );
}

export default App;
