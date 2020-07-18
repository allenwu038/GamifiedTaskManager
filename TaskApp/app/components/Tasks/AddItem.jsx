import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="New task"
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText("");
        }}
      >
      <Icon
        style={styles.btnText}
        name="plus"
        size={20}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: Colors.addItemBackground,
    padding: 9,
    margin: 5,
    height: 40,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 16,
    textAlign: "center",
  },
});

export default AddItem;
