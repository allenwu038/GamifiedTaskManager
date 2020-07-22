import React from 'react';
import {
    StyleSheet,
    ImageBackground, 
    Button, 
    FlatList,
    View,
    Text
  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Passed from "./passed.jsx";
import Unpassed from "./unpassed.jsx";
//import ZoomableImage from "react-native-interactive-image";
//import ImageBrowser from 'react-native-interactive-image-gallery';
import HorizontalLevelContainer from "./HorizontalLevelContainer.jsx";


let maxLevel = 9;
let levelsPerRow = 3;
let numContainers = maxLevel/levelsPerRow;

export default function LevelList(currentLvl, chapter, {navigation}) {
    let currentLevel = currentLvl;
    let levels = [];
    for (let i = 0; i < maxLevel; i++) {
        let temp = i < currentLevel-1 ? true : false;
        levels.push(
            {
                stage: i,
                passed: temp
            }
        );
    } 

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );

    let levelRows = [];
    for (let i = 1; i <= numContainers; i++) {
        let levelsPassed = currentLevel - 1 >= levelsPerRow * i ? levelsPerRow
                                    : (currentLevel - 1 < levelsPerRow * (i-1) ? 0 : (currentLevel - 1) % levelsPerRow);
        levelRows.push(
            levelsPassed
        )
    }

    return (
        <View style = {styles.row}>
            <Text>Chapter {chapter}</Text>
                {levelRows.map( levelsPassedThisRow => HorizontalLevelContainer(levelsPerRow, levelsPassedThisRow, navigation))}
        </View>
    );
}

const styles = StyleSheet.create ({
    row: {
        padding: 10,
    },
    chapter: {
        alignContent: "center"
    }
});
