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

      <View style={styles.listItemContainer}>
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
        </View>
      </View>

      <View style={styles.iconView}>
        <Icon
          name="remove"
          style={styles.iconView}
          size={25}
          color="grey"
          onPress={() => {
            deleteItem(item.id);
          }}
        />
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
    flexShrink: 0,
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  listItemContainer: {
    width: 80,
  },
  listItemView: {
    // flexDirection: "row",
    justifyContent: "space-between",
    // width: 50,
    // flex: 2, 
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
  iconView: {
    // flexDirection: "row",
    justifyContent: 'space-evenly',
    color: "grey",
    width: 25,
    // flex: 1,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default Task;
