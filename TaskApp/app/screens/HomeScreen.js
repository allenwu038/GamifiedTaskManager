import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  Image,
  Button
} from 'react-native';
import backgroundImg from './assets/images/homescreenBackground.jpg';
//import logo from './assets/images/blackbox.png';

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImg} style={StyleSheet.backgroundContainer}>
        <View>
          <Image source={logo} style={StyleSheet.logo} />
          {/* <Button
          title="Get Started"
          onPress={() => handlePress()}
          /> */}
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigation.navigate('Profile', { name: 'Jane' })
            }
          />
        </View>

      </ImageBackground>
    )
  }
}

function handlePress(){
  setScreen(prevElements => {
    return prevElements.filter(element => element.id == 'something')
  });
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
    width: 120,
    height: 120,
  }
})