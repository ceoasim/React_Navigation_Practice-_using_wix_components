import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

export default class Rawalakot extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.t1}>
          Tolipir is a hilltop area situated in Tehsil Rawalakot in the Poonch
          District of Azad Kashmir. It is about 30 km, or a 120-minute drive,
          from Rawalakot in Azad Kashmir. Abbaspur, Bagh and Poonch River can be
          viewed from Toli Pir.
        </Text>
        <Text style={styles.t2}>* Elevation: 8800 ft</Text>
        <Text style={styles.t2}>
          * Weather: 28°C, Wind W at 11 km/h, 55% Humidity
        </Text>

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
  t1: {fontSize: 20, marginTop: '4%', fontWeight: 'bold'},

  t2: {
    marginTop: '4%',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
});
