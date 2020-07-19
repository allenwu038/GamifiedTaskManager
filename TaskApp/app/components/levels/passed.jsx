import React from 'react';
import {
    StyleSheet,
    ImageBackground, 
    Button, 
    View,
  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function Passed() {
    return (
        <Icon
            name="check-circle"
            size={35}
            color='#cc99cc'
            style = {{padding:10, flex: 1}}
        />
    )
}
