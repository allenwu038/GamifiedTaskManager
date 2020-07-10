import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import LevelList from "../components/levels/LevelList.jsx";
//import levelsBackground from '../assets/images/homescreenBackground.jpg';

export default function QuestScreen() {
  const annotations = [
    {
      x1: 25,
      x2: 35,
      y1: 20,
      y2: 30,
      description: 'A pair of black running sports shoes, has lace-up detail. Textile and mesh upper',
    },
    {
      x1: 60,
      x2: 70,
      y1: 15,
      y2: 25,
      description: 'Shoe sole tip!',
    },
    {
      x1: 20,
      x2: 30,
      y1: 50,
      y2: 60,
      description: 'Textured and patterned outsole',
    },
    {
      x1: 65,
      x2: 75,
      y1: 65,
      y2: 75,
      description: 'Textured outsole with a stacked heel',
    },
  ]

  return (
      <ZoomableImage
					source={ require('../assets/images/homescreenBackground.jpg') }
					imageHeight={ 600 }
					imageWidth={ 450 }
					annotations={ annotations }
					popOverStyles={ { backgroundColor: 'white' } }
      />
    // {/* <ImageBackground source={levelsBackground} style={styles.backgroundContainer}>  
    //   <LevelList/>
    // </ImageBackground> */}
  );
}

QuestScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  backgroundContainer: {
    width: null,
    height: null,
    //justifyContent: 'center',
    //alignItems: 'center', 
  },
});
