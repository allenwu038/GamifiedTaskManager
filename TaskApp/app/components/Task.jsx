import React, { Component } from "react";
import { Text, TextInput, View, Button } from "react-native";

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "New Task",
      dueDate: "",
      completed: false,
    };
  }

  handlePress() {
    this.setState({ completed: true });
  }

  handleText() {

  }

  render() {
    return (
      <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
          placeholder="New Task"
          clearButtonMode="while-editing"
        onChangeText={(text) => this.setState({ text })}
        defaultValue={this.state.text}
      />
    </View>
    );
  }
}
