import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  Image,
  Button,
  AsyncStorage
} from 'react-native';
import backgroundImg from '../assets/images/homescreenBackground.jpg';
import logo from '../assets/images/blackbox.png';
import MakeProfile from './MakeProfile';
import GetUserId from "../util/GetUser.jsx";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      showRealApp: false
    }
  }

  componentDidMount() {
    AsyncStorage.getItem().then((value) => {
      let temp = value == null ? false : true;
      this.setState({ showRealApp: temp });
    });
  }

  render() {
    const { navigation } = this.props;
    return ( 
      <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>
        <Image source={logo} style={styles.logo} />
        <Button
          title="Get Started"
          onPress={() => 
            //navigation.navigate('MakeProfile')}
            AsyncStorage.setItem('first_time', 'true').then(() => {
              this.setState({ showRealApp: true });
                this.props.navigation.navigate('MakeProfile');
            })}
        />
      </ImageBackground>
    )
  }
}
  
const styles = StyleSheet.create ({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  logo: {
    width: 140,
    height: 140,
    padding: 40,
  }
});

