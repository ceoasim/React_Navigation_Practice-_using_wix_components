import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Right, Icon} from 'native-base';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Punjab',
    photo: require('./faisal.jpg'),
    text: 'Faisal Mosque',
    text1: 'Islamabad, Punjab',
    rate: 'from 1K/Day',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'KPK',
    photo: require('./cow.jpg'),
    text: 'Tolipeer',
    text1: 'Rawalakot, Kashmir,KPK',
    rate: 'from 5K/Day',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Gilgit',
    photo: require('./1.jpg'),
    text: 'Skardu Lake',
    text1: 'Skardu, Gilgit Baltistan',
    rate: 'from 4K/Day',
  },
  {
    id: '4',
    title: 'Gilgit',
    photo: require('./1.jpg'),
    text: 'Skardu Lake',
    text1: 'Skardu, Gilgit Baltistan',
    rate: 'from 4K/Day',
  },
];

const Item = ({item, onPress, style}) => (
  <View>
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
    <View
      style={{
        marginRight: 20,
        marginTop: 40,
        marginHorizontal: 40,
      }}>
      <Image
        style={{borderTopRightRadius: 30, borderTopLeftRadius: 30}}
        source={item.photo}
      />
      <View style={{borderWidth: 0.1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 20,
          }}>
          {item.text}
        </Text>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 15,
            marginTop: 5,
            marginLeft: 20,
          }}>
          {item.text1}
        </Text>
      </View>
      <View
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderWidth: 0.1,
        }}>
        <Text
          style={{
            marginTop: 25,
            marginBottom: 20,
            fontSize: 15,
            marginTop: 5,
            marginLeft: 20,
          }}>
          {item.rate}
        </Text>
      </View>
    </View>
  </View>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'darkturquoise' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 35,
            fontWeight: 'bold',
          }}>
          Enter Your Destination!
        </Text>
        <Right style={{marginLeft: 150}}>
          <Icon style={{marginTop: -25, marginLeft: 200}} name="search" />
        </Right>
      </View>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginTop: 25,
    marginLeft: 35,
    height: '5%',
    width: 100,
    borderRadius: 40,
    borderWidth: 0.2,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
  },
});

export default App;
