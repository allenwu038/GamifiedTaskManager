import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function EnterTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.textInput} 
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

const styles = StyleSheet.create ({
  textInput: {
    height: 65, 
    borderWidth: 1, 
    textAlign: 'center', 
    borderColor: '#777', 
    textDecorationColor: '#777',
    fontSize: 16,
    padding: 0, 
    margin: 10, 
    marginTop: 25,
    width:230,
    },
})