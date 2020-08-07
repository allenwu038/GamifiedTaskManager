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
//import {images} from "./levelImages.jsx";

let images = [
    <Image source={require(`../../assets/images/levelImages/chapter1.jpg`)}/>
];

export default class Passed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
            level: props.level,
            images: images
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
                    {images[this.state.level-1]}
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