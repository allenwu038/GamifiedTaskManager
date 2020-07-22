import * as React from 'react';
import {
    StyleSheet,
    ImageBackground, 
    Button, 
    View,
    Alert,
    Image,
  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Libmoji from "libmoji";


export default function Passed(stage, navigation) {
    return (
            <Icon
                name="check-circle"
                size={35}
                color='#cc99cc'
                style = {{padding:10, flex: 1}}
                onPress = { () => showAlert(navigation) }
            />
       
    )
}

function showAlert(navigation) {
    Alert.alert(
        "Level up!",
        "Congrats, you've earned...",
        [
            {
              text: 'unlock new outfit',
              onPress: () => navigate('CharacterScreen')
            },
            {
                text: 'ok',  
                onPress: () => navigation.navigate('CharacterScreen')
            }
        ],
        { cancelable: false }
    );
}

function getBitmoji(){
    let gender = Libmoji.genders[Libmoji.randInt(2)];
    let style = Libmoji.styles[Libmoji.randInt(3)];
    let traits = Libmoji.randTraits(Libmoji.getTraits(gender[0], style[0]));
    let outfit = Libmoji.randOutfit(Libmoji.getOutfits(Libmoji.randBrand(Libmoji.getBrands(gender[0]))));
    return (
        <View>
            <Image
            source={{
                uri: Libmoji.buildPreviewUrl(
                    "body",
                    3,
                    gender[1],
                    style[1],
                    0,
                    traits,
                    outfit
                ),
            }}
            />
        </View>
    );     
}
