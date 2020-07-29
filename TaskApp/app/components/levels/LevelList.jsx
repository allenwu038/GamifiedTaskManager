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
import { v4 as uuid } from "uuid";


let maxLevel = 9;
let levelsPerRow = 3;
let numContainers = maxLevel/levelsPerRow;

export default function LevelList(currentLvl, chapter) {
    let currentLevel = currentLvl;
    let levelRows = [];

    for (let i = 1; i <= numContainers; i++) {
        let levelsPassed = currentLevel - 1 >= levelsPerRow * i ? levelsPerRow
                                    : (currentLevel - 1 < levelsPerRow * (i-1) ? 0 : (currentLevel - 1) % levelsPerRow);
        let temp = i + numContainers * (chapter - 1);
        levelRows.push(
            {
                levelsPassed: levelsPassed,
                row: temp
            }
        )
    }

    return (
        <View style = {styles.row}>
            <Text>Chapter {chapter}</Text>
                {levelRows.map( levelsPassedThisRow => 
                    <View key={uuid()}>
                        {HorizontalLevelContainer(levelsPerRow, levelsPassedThisRow.levelsPassed, levelsPassedThisRow.row)}
                    </View>
                )}
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
