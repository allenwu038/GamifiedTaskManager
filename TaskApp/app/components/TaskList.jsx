import React, { Component, useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

import Task from "tasks";

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  handlePress() {
    this.setState({ completed: true });
  }

  handleText() {
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="New Task"
        onChangeText={(text) => this.setState({ text })}
        defaultValue={this.state.text}
      />
    </View>;
  }

  render() {
    return (
      <Task/>
    );
  }
}
