import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Unpassed extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Icon
                name="check-circle"
                size={35}
                color="grey"
                style = {{padding:10, flex: 1}}
            />
        )
    }  
}