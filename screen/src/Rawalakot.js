import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

export default class Rawalakot extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.t1}>
          Rawalakot is the capital of Poonch district in Azad Kashmir, Pakistan.
          It is located in the Pir Panjal Range.
        </Text>
        <Text style={styles.t2}>* Elevation: 1,638 m</Text>
        <Text style={styles.t2}>
          * Weather: 28°C, Wind W at 11 km/h, 55% Humidity
        </Text>
        <Text style={styles.t2}>* Number of Union councils: 21</Text>
        <Text style={styles.t2}>* Number of towns: 3</Text>
        <Text style={styles.t2}>* District: Poonch District</Text>
        <Text style={styles.t2}>* Hotels: 3-star averaging Rs 13,063. </Text>
        <Text style={styles.t2}>* Population: 56,006 (2017)</Text>
        <Text style={styles.t2}>* Administrative Territory: Azad Kashmir</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightcyan',
  },
  t1: {
    fontSize: 20,
    marginTop: '4%',
    fontWeight: 'bold',
  },
  t2: {
    marginTop: '4%',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
});
