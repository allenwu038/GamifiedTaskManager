import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { v4 as uuid } from "uuid";

import Task from "./Task.jsx";
import AddItem from "./AddItem.jsx";

import GetXp from "../../util/GetXp.jsx";
import SaveXp from "../../util/SaveXp.jsx";
import GetLevel from "../../util/GetLevel.jsx"
import SaveLevel from "../../util/SaveLevel.jsx"

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
 
   const [checkedItems, checkedItemChange] = useState([]);
 
   const deleteItem = id => {
     setItems(prevItems => {
       return prevItems.filter(item => item.id !== id);
     });
   };
 
   // Submit the users edits to the overall items state
   const saveEditItem = (id, text, completed) => {
     setItems(prevItems => {
       return prevItems.map(item =>
         item.id === editItemDetail.id ? {id, text: editItemDetail.text, completed} : item,
       );
     });
     // Flip edit status back to false
     editStatusChange(!editStatus);
   };
 
   // Event handler to capture users text input as they edit an item
   const handleEditChange = text => {
     editItemDetailChange({id: editItemDetail.id, text});
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
        return [{ id: uuid(), text, completed: false }, ...prevItems];
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

  const itemChecked = (id, text, completed) => {
    const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
    isChecked.length
      ? // remove item from checked items state (uncheck)
        checkedItemChange(prevItems => {
          return [...prevItems.filter(item => item.id !== id)];
        })
      : // Add item to checked items state
        checkedItemChange(prevItems => {
          return [...prevItems.filter(item => item.id !== id), {id, text, completed}];
        });
  };

  const itemUnchecked = (id, text, completed) => {
    const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
    isChecked.length
      ? // remove item from unchecked items state (check)
        checkedItemChange(prevItems => {
          return [...prevItems.filter(item => item.id !== id), {id, text, completed}];
      })
      : // Add item to unchecked items state   
        checkedItemChange(prevItems => {
          return [...prevItems.filter(item => item.id !== id)];
        });
  };

  const decrementXp = () => {
    var promise = Promise.resolve(GetXp());
    promise.then(function (value) {
      SaveXp((Number.parseInt(value) - 1).toString());
    }, function(reason) {
      console.log("Promise rejected");
    });
  };
  
  const incrementXp = () => {
    var promise = Promise.resolve(GetXp());
    promise.then(function (value) {
      SaveXp((Number.parseInt(value) + 1).toString());
    }, function(reason) {
      console.log("Promise rejected");
    });
  };

  const incrementLevel = () => {
    var promise = Promise.resolve(GetLevel());
    var xp = Promise.resolve(GetXp());
    xp.then(function (value) {
      if (value === '3') {
        promise.then(function (level) {
          SaveLevel((Number.parseInt(level) + 1).toString());
          SaveXp('0');
          console.log("Incremented Level");
        }, function (reason) {
          console.log("Promise rejected");
        });
      } else {
        incrementXp();
      }
    }, function(reason) {
        console.log("Promise rejected");
      });
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
            incrementXp={incrementXp}
            decrementXp={decrementXp}
            incrementLevel={incrementLevel}
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
