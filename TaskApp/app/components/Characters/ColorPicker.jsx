import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

const ColorPicker = ({ onColorChange }) => {
  return (
    <View style={styles.menuBackground}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.iconView}>
          <Icon
            name="circle-outline"
            color="black"
            size={40}
            onPress={() => onColorChange("white")}
          />
        </View>
        <View style={styles.iconView}>
          <Icon
            name="circle"
            color="blue"
            size={40}
            onPress={() => onColorChange("blue")}
          />
        </View>
        <View style={styles.iconView}>
          <Icon
            name="circle"
            color="black"
            size={40}
            onPress={() => onColorChange("black")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBackground: {
    backgroundColor: Colors.avatarMenu,
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
  },
});

export default ColorPicker;
