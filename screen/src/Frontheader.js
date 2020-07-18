import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {Container, Icon, Header, Button, Left, Right, Body} from 'native-base';
import Images from './Images';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native-gesture-handler';
export default class Frontheader extends Component {
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
  pushViewPostScreen2 = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Tolipeer',
        passProps: {
          somePropToPass: 'Some props that we are passing',
        },
        options: {
          topBar: {
            title: {
              text: '                 Tolipeer',
            },
          },
        },
      },
    });
  };
  render() {
    return (
      <View style={styles.main}>
        <Container style={styles.div1}>
          <Header style={styles.header1}>
            <Left>
              <Icon style={styles.icon1} name="ios-menu" />
            </Left>

            <Body>
              <Text style={styles.text1}>Pak Tourism</Text>
            </Body>
          </Header>
        </Container>
        <ScrollView style={styles.scroll}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.pushViewPostScreen}>
            <Images image={require('./1.jpg')} text={'Rawalakot'} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.pushViewPostScreen2}>
            <Images image={require('./2.jpg')} text={'Toli-peer Top'} />
          </TouchableOpacity>
          <Images image={require('./saji.jpg')} text={'Sajjikot Waterfall'} />
          <Images image={require('./mos.jpg')} text={'Faisal Mosque'} />
          <Images image={require('./bus.jpg')} text={'GT Road'} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {marginTop: '-3%', backgroundColor: 'silver'},
  text1: {
    fontSize: 29,
    fontStyle: 'italic',
    fontWeight: '400',
  },
  header1: {
    backgroundColor: 'orange',
  },
  icon1: {
    color: 'black',
    textAlign: 'center',
  },
  div1: {
    height: '10%',
    flex: 0,
    zIndex: 5,
  },
});
