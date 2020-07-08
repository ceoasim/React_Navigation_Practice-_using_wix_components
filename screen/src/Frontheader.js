import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Container, Icon, Header, Button, Left, Right, Body} from 'native-base';
import Images from './Images';
import {ScrollView} from 'react-native-gesture-handler';
export default class Frontheader extends Component {
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
          <Images image={require('./1.jpg')} text={'Rawalakot'} />
          <Images image={require('./2.jpg')} text={'Tolipeer Top'} />
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
