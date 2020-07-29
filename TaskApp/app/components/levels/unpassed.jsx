import React from 'react';
import Modal from 'react-native-modal';
import Icon from "react-native-vector-icons/FontAwesome";
import {
    StyleSheet,
    Dimensions,
    View,
    Text
  } from 'react-native';

  export default class Unpassed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
        }
    }

    render() {
        return (
            <View>
                <Icon
                    name="check-circle"
                    size={35}
                    color="grey"
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
                    <Text style={styles.congrats}>You have not passed this chapter yet!</Text>
                </Modal>
            </View>
            
        )
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
      flex: 3,
      resizeMode: "contain",
      paddingTop: 25,
    },
    congrats: {
      textAlign: "center",
      color:'#FF0000',
      fontSize: 28
    },
    modalWindow: {
        maxHeight: Dimensions.get('window').height,
        justifyContent:'center',
    }
  });