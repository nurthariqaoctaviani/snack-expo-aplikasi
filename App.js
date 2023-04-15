import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';
import Biodata from './components/Biodata';


export default class App extends Component {
  render() {
    return (
      <View>
        <Biodata />
      </View>
    )
  }
};
