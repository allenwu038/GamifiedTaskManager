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

export default class MakeProfile extends React.Component {
    render() {
        return (
        <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>

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
    },
    }
  )