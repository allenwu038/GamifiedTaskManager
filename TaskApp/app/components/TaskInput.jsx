import React, { Component, useState } from "react";
import { Text, TextInput, View } from "react-native";

export default class TaskInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      dueDate: "",
      completed: false,
    }
  }
  
  render() {
    // const [text, setText] = useState("");
    
    return (
      
    <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type task here!"
          onChangeText={(text) => this.setState(text)}
          defaultValue={this.state.text}
        />
      </View>
    );
  }
}
