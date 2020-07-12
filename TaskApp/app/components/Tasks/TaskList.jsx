import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { v4 as uuid } from "uuid";

import Task from "./Task.jsx";
import AddItem from "./AddItem.jsx";

const TaskList = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: "Malk",
      completed: false,
    },
    {
      id: uuid(),
      text: "Egges",
      completed: false,
    },
    {
      id: uuid(),
      text: "Breb",
      completed: false,
    },
    {
      id: uuid(),
      text: "Joose",
      completed: false,
    },
    {
      id: uuid(),
      text: "Here is a super long piece of text to exceed the text container",
      completed: false,
    },
  ]);

  // Flag true if user is currently editing an item
  const [editStatus, editStatusChange] = useState(false);

  // State to capture information about the item being edited
  const [editItemDetail, editItemDetailChange] = useState({
    id: null,
    text: null,
    completed: false,
  });

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  // Submit the users edits to the overall items state
  const saveEditItem = (id, text) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === editItemDetail.id ? { id, text: editItemDetail.text, completed } : item
      );
    });
    // Flip edit status back to false
    editStatusChange(!editStatus);
  };

  // Event handler to capture users text input as they edit an item
  const handleEditChange = (text) => {
    editItemDetailChange({ id: editItemDetail.id, text, completed });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        "No item entered",
        "Please enter an item when adding to your shopping list",
        [
          {
            text: "Understood",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } else {
      setItems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  // capture old items ID and text when user clicks edit
  const editItem = (id, text, completed) => {
    editItemDetailChange({
      id,
      text,
      completed,
    });
    return editStatusChange(!editStatus);
  };

  const itemChecked = (id, text) => {
    const isChecked = items.filter(
      (checkedItem) => items.id === id
    );
    isChecked.length
      ? // Add checked items to bottom
      setItems((prevItems) => {
        return [...prevItems.filter((item) => item.id !== id), { id, text }];
      })
      : // Add unchecked items to top
      setItems((prevItems) => {
        return [{ id, text }, ...prevItems.filter((item) => item.id !== id)];
      })
  };

  const itemUnchecked = (id, text) => {
    const isChecked = items.filter(
      (checkedItem) => items.id === id
    );
    isChecked.length
      ? // Add unchecked items to top
      setItems((prevItems) => {
        return [{ id, text }, ...prevItems.filter((item) => item.id !== id)];
      })
      : // Add checked items to bottom
      setItems((prevItems) => {
        return [...prevItems.filter((item) => item.id !== id), { id, text }];
      })
  };

  return (
    <View style={styles.container}>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Task
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
            isEditing={editStatus}
            editItemDetail={editItemDetail}
            saveEditItem={saveEditItem}
            handleEditChange={handleEditChange}
            itemChecked={itemChecked}
            itemUnchecked={itemUnchecked}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
});

export default TaskList;
