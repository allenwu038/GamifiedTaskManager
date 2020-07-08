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
import "react-native-interactive-image";

let maxLevel = 10;
let currentLevel = 3;

export default function LevelList(){
    const annotations = [
        {
            x1: 25,
            x2: 35,
            y1: 20,
            y2: 30,
            description: 'Chapter 1: Bread',
        },
        {
            x1: 60,
            x2: 70,
            y1: 15,
            y2: 25,
            description: 'Chapter 2: Muffin',
        },
        {
            x1: 20,
            x2: 30,
            y1: 50,
            y2: 60,
            description: 'Chapter 3: Cheese',
        },
        {
            x1: 65,
            x2: 75,
            y1: 65,
            y2: 75,
            description: 'Chapter 4: Pizza',
        },
    ]
    return (
        <ZoomableImage
					source={ require('../assets/images/levelsBackground.jpg') }
					imageHeight={ 600 }
					imageWidth={ 450 }
					annotations={ annotations }
					// popOverStyles={ { backgroundColor: 'white' } }
        />
    );
}

function Levels() {
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

    return (
        <View>
            {levels.map( element => element.passed ? <Passed key={element.stage}/> : <Unpassed key={element.stage}/>)}
        </View>
    );
}

