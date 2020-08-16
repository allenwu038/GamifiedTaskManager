import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { useState } from "react";
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

  const [characterColor, changeColor] = useState({
    color: "white",
  });

  const handleColorChange = (color) => {
    if (color == "white") {
      changeColor({ color: "white" });
    } else if (color == "black") {
      changeColor({ color: "black" });
    } else if (color == "blue") {
      changeColor({ color: "blue" });
    } else {
      changeColor({ color: "white" });
    }
  };

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
      <View style={styles.preview}>
        <Image
          style={{
            flex: 2,
            resizeMode: "contain",
            alignItems: "center",
            tintColor: characterColor.color,
          }}
          source={require("../assets/images/avatar/whitecircle.png")}
        />
      </View>
      <ColorPicker onColorChange={handleColorChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.avatarBackground,
  },
  iconView: {},
  preview: {
    flex: 2,
    resizeMode: "contain",
    alignItems: "center",
  },
});
