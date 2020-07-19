import * as WebBrowser from "expo-web-browser";
import * as React from "react";
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

import { MonoText } from "../components/StyledText";

export default function CharacterScreen({ navigation }) {
  let gender = Libmoji.genders[Libmoji.randInt(2)];
  let style = Libmoji.styles[Libmoji.randInt(3)];
  let traits = Libmoji.randTraits(Libmoji.getTraits(gender[0], style[0]));
  let outfit = Libmoji.randOutfit(
    Libmoji.getOutfits(Libmoji.randBrand(Libmoji.getBrands(gender[0])))
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Icon
          name="chevron-double-left"
          style={styles.iconView}
          size={40}
          color="grey"
          onPress={() => navigation.goBack()}
        />
      </SafeAreaView>

      <View style={styles.preview}>
        <Image
          style={styles.preview}
          source={{
            uri: Libmoji.buildPreviewUrl(
              "body",
              3,
              gender[1],
              style[1],
              0,
              traits,
              outfit
            ),
          }}
        />
      </View>

      <ScrollView
        style={styles.customise}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  preview: {
    flex: 1,
    resizeMode: "contain",
    paddingTop: 50,
  },
  customise: {
    flex: 1,
  },
});
