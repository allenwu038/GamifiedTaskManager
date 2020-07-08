import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import LevelList from "../components/levels/LevelList.jsx";

export default function QuestScreen() {
  return (
    <View>
      <LevelList/>
    </View>
  );
}

QuestScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
});
