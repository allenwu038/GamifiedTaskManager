import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  Image,
  Button
} from 'react-native';
import backgroundImg from '../assets/images/homescreenBackground.jpg';
import logo from '../assets/images/blackbox.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>
        <View>
          <Image source={logo} style={styles.logo} />
          <Button
            title="Get Started"
            onPress={() => handlePress()}
          />
        </View>

      </ImageBackground>
    )
  }
}

function handlePress(){
  
}

const styles = StyleSheet.create ({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  logo: {
    width: 140,
    height: 140,
    padding: 40,
  }
})