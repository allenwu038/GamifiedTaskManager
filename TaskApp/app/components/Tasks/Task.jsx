import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Colors from "../../constants/Colors";

import GetXp from "../../util/GetXp.jsx";
import SaveXp from "../../util/SaveXp.jsx";

const Task = ({
  item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  itemUnchecked,
  // checkedItems,
}) => {
  /* const checked = checkedItems.filter(
    checkedItem => checkedItem.id === item.id,
  ); */
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.iconView}>
        {item.completed ? (
          <Icon
            name="check-circle"
            style={styles.iconView}
            size={28.5}
            color={Colors.iconColor}
            onPress={() => {
              item.completed = false;
              itemUnchecked(item.id, item.text, item.completed);
              SaveXp(GetXp()-1);
            }}
          />
        ) : (
          <Icon
            name="circle"
            style={styles.iconView}
            size={28.5}
            color={Colors.iconColor}
            onPress={() => {
              item.completed = true;
              itemChecked(item.id, item.text, item.completed);  
              SaveXp( GetXp() + 1 );
            }}
          />
        )}
      </View>

      <View style={styles.listItemContainer}>
        <View style={styles.listItemView}>
          {isEditing && editItemDetail.id === item.id ? (
            <TextInput
              placeholder="Edit Item..."
              style={styles.editItemInput}
              onChangeText={handleEditChange}
            />
          ) : (
            <Text
              onPress={() => editItem(item.id, item.text, item.completed)}
              style={
                item.completed? styles.checkedItemText : styles.listItemText
              }
              >
              {item.text}
            </Text>
          )}
          </View>
        </View>

      <View style={styles.saveIconView}>
        {isEditing && editItemDetail.id === item.id ? (
          <Icon
            name="thumbs-up"
            size={20}
            color={Colors.addItemBackground}
            onPress={() => saveEditItem(item.id, item.text, item.completed)}
          />
        ) : (
          null
          )
       }
      </View>
      
      <View style={styles.IconView}>
        <Icon
          name="remove"
          style={styles.iconView}
          size={25}
          color="#fa867e"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: Colors.taskBackground,
    borderBottomWidth: 1,
    borderColor: Colors.taskBorder,
    flexShrink: 0,
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  listItemContainer: {
    flex: 13,
  },
  listItemView: {
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 18,
    alignSelf: "flex-start",
    paddingLeft: 20,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "grey",
    paddingLeft: 20,
  },
  iconView: {
    justifyContent: "space-evenly",
    flex: 1,
  },
  saveIconView : {
    justifyContent: "space-evenly",
    flex: 1,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
    paddingLeft: 20,
  },
});

export default Task;
