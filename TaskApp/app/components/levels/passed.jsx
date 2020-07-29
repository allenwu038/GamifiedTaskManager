import React from 'react';
import Modal from 'react-native-modal';
import {
    StyleSheet,
    Dimensions,
    Image,
    View,
    Text
  } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Libmoji from "libmoji";

export default class Passed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
            level: props.level
        }
    }
    render() {
        return (
            <View>
                <Icon
                    name="check-circle"
                    size={35}
                    color='#cc99cc'
                    style = {{padding:10, flex: 1}}
                    onPress = {() => this.openModal()}
                />
                <Modal 
                    isVisible={this.state.isModalVisible} 
                    style={styles.modalWindow}
                    onBackdropPress={()=>this.closeModal()}
                    animationOut="slideOutDown"
                    animationIn="slideInUp"
                >
                    <Text style={styles.congrats}>You passed chapter {this.state.level}!</Text>
                    {this.getBitmoji()}
                </Modal>
            </View>
        );
    }

    openModal = () => {
        this.setState({
            isModalVisible:true
        });
    }

    closeModal = () =>{
        this.setState({
            isModalVisible:false
        });
    }

    getBitmoji = () => {
        let gender = Libmoji.genders[Libmoji.randInt(2)];
        let style = Libmoji.styles[Libmoji.randInt(3)];
        let traits = Libmoji.randTraits(Libmoji.getTraits(gender[0], style[0]));
        let outfit = Libmoji.randOutfit( Libmoji.getOutfits(Libmoji.randBrand(Libmoji.getBrands(gender[0]))));
        return (
            <View>
                <Image
                style={styles.preview}
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
}

const styles = StyleSheet.create({
    preview: {
      //flex: 3,
      height: 350,
      resizeMode: "contain",
      paddingTop: 25,
    },
    congrats: {
      textAlign: "center",
      color:'#cc99cc',
      fontSize: 28
    },
    modalWindow: {
        marginTop: '30%',
        maxHeight: Dimensions.get('window').height/2,
        justifyContent:'center',
    }
  });