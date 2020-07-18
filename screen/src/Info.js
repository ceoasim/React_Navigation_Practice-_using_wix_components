import {Navigation} from 'react-native-navigation';
import {Container, Icon, Header, Left, Right, Body} from 'native-base';
import PropTypes from 'prop-types';

import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

export default class Tour extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };
  pushViewPostScreen2 = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Sidebar',
        passProps: {
          somePropToPass: 'Some props that we are passing',
        },
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.foodcart}>
        <View>
          <Image
            style={{
              height: 300,
            }}
            source={require('./Imagee.png')}
          />
        </View>
        <View style={{position: 'absolute'}}>
          <TouchableOpacity
            onPress={this.pushViewPostScree3}
            style={{
              marginLeft: 20,
              marginTop: 50,
            }}>
            <Icon style={{color: 'white'}} name="arrow-back" />
          </TouchableOpacity>
        </View>
        <View style={styles.textview}>
          <Text style={styles.title}>Hotel Details</Text>
        </View>
        <View
          style={{
            width: 415,
            height: 200,
            borderRadius: 40,
            borderWidth: 1,
            position: 'absolute',
            marginTop: 270,
            backgroundColor: 'white',
            borderColor: 'white',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 20,
              marginTop: 40,
            }}>
            Hotel Perakis
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textview: {
    marginTop: '25%',
    position: 'absolute',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginLeft: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
