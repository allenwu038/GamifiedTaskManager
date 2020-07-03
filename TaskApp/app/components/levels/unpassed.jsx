import React from 'react';
import {
    StyleSheet,
    ImageBackground, 
    Button, 
    View,
  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function Unpassed() {
    return (
        <Icon
            name="check-circle"
            size={35}
            color="grey"
            style = {{marginLeft: '45%', padding:10}}
        />
    )
}