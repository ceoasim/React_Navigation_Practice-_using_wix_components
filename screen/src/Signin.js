import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Container, Icon, Header, Button, Left, Right, Body} from 'native-base';
import PropTypes from 'prop-types';

export default class Signin extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };
  pushViewPostScreen = () => {
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
  pushViewPostScreen2 = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Reset',
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
          <Text style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>
            SIGN IN
          </Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email Address"
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

        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={this.pushViewPostScreen}>
          <Text style={styles.TextStyle}> SIGN IN </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 30}}
          activeOpacity={0.5}
          onPress={this.pushViewPostScreen2}>
          <Text style={styles.tt}>Forget your password?</Text>
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
    borderWidth: 0.3,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  tt: {
    textAlign: 'center',
  },
});
