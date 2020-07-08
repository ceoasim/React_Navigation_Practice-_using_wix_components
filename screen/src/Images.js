import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
export default class Images extends Component {
  render() {
    return (
      <View>
        <View style={styles.v}>
          <Image
            style={styles.img}
            source={this.props.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.t1}>
          <Text style={styles.txt}> {this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  v: {
    alignItems: 'center',
    marginTop: '2%',
  },
  t1: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  txt: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: '20%',
    marginRight: '20%',
  },
});
