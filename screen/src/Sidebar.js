import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Right, Icon} from 'native-base';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

function Item({item}) {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          console.log('tap');
        }}
        underlayColor="turquoise"
        style={{
          marginTop: 40,
          marginLeft: 35,
          height: 30,
          width: 100,
          borderRadius: 40,
          borderWidth: 0.2,
          justifyContent: 'center',
        }}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableHighlight>
    </View>
  );
}
function Item2({item}) {
  return (
    <View
      style={{
        marginRight: 20,
        marginHorizontal: 40,
      }}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{borderTopRightRadius: 30, borderTopLeftRadius: 30}}
          source={item.photo}
        />
      </TouchableOpacity>
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
  );
}

export default class Sidebar extends React.Component {
  static propTypes = {
    componentId: PropTypes.string,
  };
  pushViewPostScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Rawalakot',
        passProps: {
          somePropToPass: 'Some props that we are passing',
        },
        options: {
          topBar: {
            title: {
              text: '                 Rawalakot',
            },
          },
        },
      },
    });
  };

  state = {
    data: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Punjab',
        photo: require('./faisal.jpg'),
        text: 'Faisal Mosque',
        text1: 'Islamabad, Punjab',
        rate: 'from 1K/Day',
        func: 'onPress={this.pushViewPostScreen}',
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
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 40}}>
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
        <View style={{flex: 0.3}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{flex: 1}}
            data={this.state.data}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={(item) => item.email}
          />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Item2 item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 17,
    textAlign: 'center',
  },
});
