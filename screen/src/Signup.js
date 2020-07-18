import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {Container, Icon, Header, Left, Right, Body} from 'native-base';

export default class Signup extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };
  pushViewPostScree3 = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Tour',
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
  pushViewPostScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Signin',
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
      <View>
        <View>
          <TouchableOpacity
            onPress={this.pushViewPostScree3}
            style={{
              marginLeft: 20,
              marginTop: 50,
            }}>
            <Icon style={{color: 'black'}} name="arrow-back" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.t1}>Create Your Account</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity={0.5}>
          <Text style={styles.TextStyle}> SIGN UP </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.snn}
          activeOpacity={0.5}
          onPress={this.pushViewPostScreen}>
          <Text style={styles.tt}>Already have an account?</Text>
          <Text style={styles.TT}> SIGN IN </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  t1: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
  },
  input: {
    marginTop: 30,

    fontSize: 16,
    height: 50,
    borderColor: '#7a42f4',
    borderWidth: 0.3,
    borderRadius: 30,
  },

  SubmitButtonStyle: {
    paddingTop: 15,
    marginTop: 30,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'turquoise',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'turquoise',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  tt: {
    textAlign: 'center',
    marginTop: 30,
  },
  TT: {
    marginTop: -20,
    marginLeft: 220,
    textAlign: 'center',
    color: 'blue',
  },
});
