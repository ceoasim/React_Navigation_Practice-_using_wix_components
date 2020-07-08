import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

export default class Signin extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };
  pushViewPostScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Frontheader',
        passProps: {
          somePropToPass: 'Some props that we are passing',
        },
        options: {
          topBar: {
            title: {
              text: 'Natural Beauty',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            type="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
          />
        </View>
        <View style={styles.btn}>
          <Button title="Login" onPress={this.pushViewPostScreen} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 35,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  btn: {
    backgroundColor: 'deepskyblue',
    textAlign: 'center',
    marginRight: '25%',
    marginLeft: '25%',
    justifyContent: 'center',
  },
});
