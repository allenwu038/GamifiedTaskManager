import React from 'react';
import {
    Image
  } from 'react-native';

let images = [];
for (let i = 1; i <= 1; i++) {
    images.push(i.toString());
}

images = images.map(element => transformImage(element));

function transformImage(element){
    let url = "../../assets/images/levelImages/chapter" + element + ".jpg";
    return (
        <Image source={{uri: url}}/>
    );
    
}

export default images;