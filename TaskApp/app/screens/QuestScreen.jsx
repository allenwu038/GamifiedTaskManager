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
import levelsBackground from '../assets/images/homescreenBackground.jpg';

export default function QuestScreen() {
  return (
    <ImageBackground source={levelsBackground} style={styles.backgroundContainer}>
        <LevelList/>
    </ImageBackground>
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
