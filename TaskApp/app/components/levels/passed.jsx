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

let images = [];
for (let i = 1; i <= 1; i++) {
    images.push(i.toString());
}

images = images.map(element => transformImage(element));

function transformImage(element){
    let url = `../../assets/images/levelImages/chapter${element}` + ".jpg";
    return (
        <Image source={require(`../../assets/images/levelImages/chapter${element}.jpg`)} />
    );
}

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
                    {this.getImage(this.state.level - 1)}
                    {/* <Image source={require("../../assets/images/levelImages/chapter1.jpg")}/> */}
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

    getImage = (index) => {
        return (
            <View>
                {this.state.images[index]}
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