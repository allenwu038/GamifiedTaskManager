import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {useState} from "react";
import {
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Libmoji from "libmoji";

import ColorPicker from "../components/Characters/ColorPicker.jsx";
import Colors from "../constants/Colors.js";

import { MonoText } from "../components/StyledText";

export default function CharacterScreen({ navigation }) {
  let gender = Libmoji.genders[Libmoji.randInt(2)];
  let style = Libmoji.styles[Libmoji.randInt(3)];
  let traits = Libmoji.randTraits(Libmoji.getTraits(gender[0], style[0]));
  let outfit = Libmoji.randOutfit(
    Libmoji.getOutfits(Libmoji.randBrand(Libmoji.getBrands(gender[0])))
  );

  const [characterColor, changeColor] = useState({color: "../assets/images/avatar/whitecircle.png"});

  const handleColorChange = () => {
    // if (color == "white") {
    //   changeColor({characterColor: "white"})
    // } else if (color == "black") {
    //   changeColor({characterColor: "black"})
    // } else if (color == "blue") {
    //   changeColor({characterColor: "blue"})
    // } else {
    //   changeColor({characterColor: "white"})
    // }
    changeColor({color: "../assets/images/avatar/whitecircle.png"})
    console.log(characterColor)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Icon
          name="chevron-double-left"
          size={40}
          color="grey"
          onPress={() => navigation.goBack()}
        />
      </SafeAreaView>

      {console.log(characterColor)}
      {console.log(typeof(characterColor.color))}
      var blobSource = characterColor.color
      <View style={styles.preview}>
        {console.log(characterColor.color)}
        <Image
          style={styles.preview}
          // Complains abt variables in require
          source={require(blobSource)}
        />
      </View>

      <ColorPicker onColorChange={handleColorChange}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.avatarBackground,
  },
  iconView: {
    //flex: 1,
  },
  preview: {
    flex: 2,
    resizeMode: "contain",
    alignItems: "center",
  },
});
