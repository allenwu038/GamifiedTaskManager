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
  SectionList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import LevelList from "../components/levels/LevelList.jsx";
import levelsBackground from '../assets/images/homescreenBackground.jpg';
import { v4 as uuid } from "uuid";

let offset = 0;
let message = "direction";
// let curChapter = 1;
let maxChapter = 5;
let totalPassed = 14;

let chapters = [];
for (let i = 1; i <= maxChapter; i++) {
    let passedCount = totalPassed - 9*(i-1) + 1;
    let passed = passedCount >= 10 ? 10 : (passedCount < 0 ? 0 : passedCount);
    chapters.push(
        {
            currentStage: passed,
            chapter: i
        }
    );
} 

export default function QuestScreen() {
  return (
    <ImageBackground source={levelsBackground} style={styles.backgroundContainer}>
      <ScrollView>
        {chapters.map( element => 
          <View key={uuid()}>
            {LevelList(element.currentStage, element.chapter)}
          </View>
        )}
      </ScrollView>
      <View style={styles.padding}>
      </View>
    </ImageBackground>
  )
};

// var onScroll = event => {
//   var currentOffset = event.nativeEvent.contentOffset.y;
//   var direction = currentOffset > offset ? 'down' : 'up';
//   offset = currentOffset;
//   alert(direction);
//   return (
//       direction == 'down' ? "down" : "up"
//   );
// };

QuestScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  backgroundContainer: {
    width: null,
    height: 800,
    paddingLeft: 45,
    //justifyContent: 'center',
    //alignItems: 'center', 
  },
  padding: {
    height: 200,
    marginRight: 10,
  }
});

