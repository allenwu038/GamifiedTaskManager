import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground
} from 'react-native';
import backgroundImg from './assets/images/homescreenBackground.png'

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImg} style={StyleSheet.backgroundContainer}>
        
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create ({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center', 
  }
})