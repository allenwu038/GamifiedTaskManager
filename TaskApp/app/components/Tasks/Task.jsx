import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

const Task = ({
  item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  itemUnChecked,
  checkedItems,
}) => {
  const checked = checkedItems.filter(
    (checkedItem) => checkedItem.id === item.id
  );
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {isEditing && editItemDetail.id === item.id ? (
          <TextInput
            placeholder="Edit task"
            style={styles.editItemInput}
            onChangeText={handleEditChange}
          />
        ) : (
          <Text
            onPress={() => itemChecked(item.id, item.text)}
            style={
              item.completed ? styles.checkedItemText : styles.listItemText
            }
          >
            {item.text}
          </Text>
        )}
        <View style={styles.iconView}>
          {item.completed ? (
            <Icon
              name="check-circle"
              style={styles.iconView}
              size={25}
              color="grey"
              onPress={() => {
                item.completed = false;
                itemUnChecked(item.id, item.text);
              }}
            />
          ) : (
            <Icon
              name="circle"
              style={styles.iconView}
              size={25}
              color="grey"
              onPress={() => {
                item.completed = true;
                itemChecked(item.id, item.text);
              }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "grey",
  },
  iconDiv: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 70,
  },
  iconView: {
    color: "grey",
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default Task;
