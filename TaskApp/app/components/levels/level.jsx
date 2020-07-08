import React from 'react';
import {
    StyleSheet,
    ImageBackground, 
    Button, 
    View,
  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Passed from "./passed.jsx";
import Unpassed from "./unpassed.jsx";

let maxLevel = 10;
let currentLevel = 3;

export default function LevelList() {
    let levels = [];
    for (let i = 0; i < maxLevel; i++) {
        let temp = i < currentLevel ? true : false;
        levels.push(
            {
                stage: i,
                passed: temp
            }
        );
    }

    return (
        <View>
            {levels.map( element => element.passed ? <Passed key={element.stage}/> : <Unpassed key={element.stage}/>)}
        </View>
    );
}

