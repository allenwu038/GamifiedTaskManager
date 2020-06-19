import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View, 
    ImageBackground, 
    Image,
    Button, 
  } from 'react-native';
import backgroundImg from '../assets/images/homescreenBackground.jpg';
import { Text, TextInput } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

//import {SliderBox} from "./SliderBox.jsx";

export default function MakeProfile({navigation}){
    let images= [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl", // Network image
    ];

    state = {
      value: ' ',
    }

    handleTextChange = (newText) => this.ListeningStateChangedEvent({value: newText})

    return (  
      <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>
            
          <Text style={styles.text}>
            Enter Your Name:
          </Text>
          <TextInput 
            
            onChangetext={handleTextChange}
            value={state.value}
            style={styles.textInput}
          />
          <Text style={{ fontSize: 14, color: '#000', marginTop: 100, padding: 0}}>
            Scroll along the dots to choose an avatar:
          </Text>
          <SliderBox 
              images= {images}
              //onCurrentImagePressed={index => handlePress(index)}
              dotColor="#FFEE58"
              sliderBoxHeight = {300}
              inactiveDotColor="#90A4EA"
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              dotStyle = { {width: 15, height: 15, marginBottom: 450} }
              ImageComponentStyle ={ {width: 225, height: 225, borderRadius: 225, marginTop: 55} }
          />
          <Button
          title="Next"
          style ={styles.bottom}
          onPress={() => navigation.navigate('TaskScreen')}
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
  inputLayout: {
    paddingTop: 100,
  },
  text: { 
    fontSize: 14, 
    color: '#000', 
    marginTop:300,
  },
  textInput: {
    height: 50, 
    borderWidth: 1, 
    textAlign: 'center', 
    borderColor: '#777', 
    padding: 8, 
    margin: 10, 
    width:200,
    },
    rectangle: {
    position: 'absolute',
    width: 500,
    height: 315,
    color: '#000',
  },
  bottom: {
    position: 'absolute',
    padding: 20,
    flex: 1,
    bottom: 0,
    width: 500,
    backgroundColor: '#FFEE58',
  },
});