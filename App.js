/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={styles.but}>
        <Button title="Get Started"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
