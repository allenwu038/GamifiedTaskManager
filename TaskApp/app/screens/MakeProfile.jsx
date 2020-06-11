import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View, 
    ImageBackground, 
    Image,
    Button, 
  } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import backgroundImg from '../assets/images/homescreenBackground.jpg';
import { Text, TextInput } from 'react-native';
import  PizzaTranslator  from './TextInput.jsx';

export default class MakeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl", // Network image
      ]
    };
  }

  state = {
    value: '',
  }

  handleTextChange = (newText) => this.ListeningStateChangedEvent({value: newText})

  render() {
      return (  
          <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>
            {/* https://www.npmjs.com/package/react-native-image-slider-box*/}
            
            <Text style={{ fontSize: 14, color: '#000', marginTop:300}}>
              Enter Your Name:
            </Text>
            <TextInput 
              value={this.state.value}
              onChangetext={this.handleTextChange}
              style={{ height: 26, fontSize:20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555', marginTop: 70 }}
            />
            <Text style={{ fontSize: 14, color: '#000', marginTop: 100, padding: 0}}>
              Choose an avatar (scroll left/right):
            </Text>
            <SliderBox 
                images={this.state.images}
                //onCurrentImagePressed={index => console.warn(`character ${index} selected. Proceed?`)}
                dotColor="#FFEE58"
                sliderBoxHeight = {1000}
                inactiveDotColor="#90A4EA"
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                dotStyle = { {width: 10, height: 10, marginBottom: 450} }
                ImageComponentStyle ={ {width: 225, height: 225, borderRadius: 225, marginTop: 50} }
            />
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
    inputLayout: {
      paddingTop: 100,
    }
  });