import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
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
            visible: false,
          },
        },
      },
    });
  };
  pushViewPostScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.Signup',
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
      <View style={styles.foodcart}>
        <View style={styles.promoimage}>
          <Image style={styles.pic} source={require('./5.png')} />
        </View>
        <View style={styles.textview}>
          <Text style={styles.title}>Explore the World</Text>
        </View>

        <View style={styles.but}>
          <TouchableOpacity
            style={{height: 50, backgroundColor: 'white', borderRadius: 30}}
            onPress={this.pushViewPostScreen2}>
            <Text style={{alignSelf: 'center', fontSize: 15, marginTop: 12}}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.out}>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: 'turquoise',
              borderRadius: 30,
            }}
            onPress={this.pushViewPostScreen}>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                marginTop: 12,
              }}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textview: {
    marginTop: '30%',
    position: 'absolute',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginLeft: '3%',
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
  },
  but: {
    width: 350,
    position: 'absolute',
    marginTop: '120%',
    //height: 200,
    alignSelf: 'center',
  },
  out: {
    width: 350,
    marginTop: '140%',
    position: 'absolute',
    //height: 200,
    alignSelf: 'center',
  },
});
