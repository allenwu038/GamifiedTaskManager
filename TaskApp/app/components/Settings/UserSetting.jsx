import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

const UserSetting = ({ onUIDChange }) => {
  return (
    <TouchableOpacity
      style={styles.settingsItem}
      onPress={() => onUIDChange()}>
      <Text>
        Change username
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingsItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
  },
});

export default UserSetting;
