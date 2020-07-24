import React from 'react';
import {
    StyleSheet,
    ImageBackground, 
    Button, 
    Flatlist,
    View,
  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Passed from "./passed.jsx";
import Unpassed from "./unpassed.jsx";


export default function HorizontalLevelContainer(levelsPerRow, currentPassed, rowNumber) {
    let levels = [];
    for (let i = 0; i < levelsPerRow; i++) {
        let temp = i < currentPassed ? true : false;
        let temp2 = i + (rowNumber-1)*3 + 1;
        levels.push(
            {
                stage: temp2,
                passed: temp
            }
        );
    } 

    return (
        <View style = {styles.row}>
            {levels.map( element => element.passed ? <Passed key={element.stage} level={element.stage}/>: <Unpassed key={element.stage}/>)}
        </View>
    )
}

const styles = StyleSheet.create ({
    row: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
});