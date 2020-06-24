import React from 'react';
import {
    StyleSheet,
    ImageBackground, 
    Button, 
    Text,
    TouchableWithoutFeedback,
  } from 'react-native';
import backgroundImg from '../assets/images/homescreenBackground.jpg';
import { SliderBox } from "react-native-image-slider-box";
import EnterTextInput from '../util/TextInput.jsx';
import { Storage } from '../util/AsyncStorage.jsx';

export default function MakeProfile({navigation}){
    let images= [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl", // Network image
    ];

    return (  
      <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>
          <Text style={{fontSize: 16, color: '#000', marginTop: 350, padding: 0,}}>
            Enter Name Here:
          </Text>
          <EnterTextInput/>
          <Text style={styles.text}>
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
    fontSize: 16, 
    color: '#000', 
    marginTop: 50, 
    padding: 0,
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
  bottom: {
    position: 'absolute',
    padding: 20,
    flex: 1,
    bottom: 0,
    width: 500,
    backgroundColor: '#FFEE58',
  },
});