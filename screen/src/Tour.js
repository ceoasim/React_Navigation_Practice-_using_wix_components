import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
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
        name: 'blog.Signin',
        passProps: {
          somePropToPass: 'Some props that we are passing',
        },
        options: {
          topBar: {
            title: {
              text: 'Sign In',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.foodcart}>
        <View style={styles.promoimage}>
          <Image source={require('./3.jpg')} />
        </View>
        <View style={styles.textview}>
          <Text style={styles.title}>Explore the World</Text>
        </View>

        <View style={styles.but}>
          <Button title="Sign in" onPress={this.pushViewPostScreen2} />
        </View>
        <View style={styles.out}>
          <Button title="Sign Up" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    position: 'absolute',
  },
  textview: {
    marginTop: '40%',
    position: 'absolute',
    textAlign: 'center',
  },
  title: {
    marginLeft: '3%',
    fontSize: 50,
    fontStyle: 'italic',
    textShadowColor: 'orange',
  },
  but: {
    position: 'absolute',
    marginTop: '120%',
    marginLeft: '35%',
  },
  out: {
    marginTop: '130%',
    position: 'absolute',
    marginLeft: '35%',
  },
});
