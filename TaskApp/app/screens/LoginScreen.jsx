import 'react-native-gesture-handler';
import React from 'react';
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
import MakeProfile from './MakeProfile';

export default function LoginScreen({ navigation }) {
    return ( 
      <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>
        <Image source={logo} style={styles.logo} />
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('MakeProfile')}
        />
      </ImageBackground>
    )
  };

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