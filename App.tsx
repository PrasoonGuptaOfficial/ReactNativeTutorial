import React from 'react';
import {SectionList, Text, View} from 'react-native';

type SectionListData = {
  id: number;
  name: string;
  data: string[];
};

const DATA: SectionListData[] = [
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

function App(): React.JSX.Element {
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
      <SectionList
        sections={DATA}
        keyExtractor={item => item}
        renderItem={sectionListRenderItem}
        renderSectionHeader={sectionHeaderRenderItem}
      />
    </View>
  );
}

export default App;
